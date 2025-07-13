-- Create users table for storing user stats (if not exists)
CREATE TABLE IF NOT EXISTS user_stats (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  total_points INTEGER DEFAULT 0,
  items_saved INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(user_id)
);

-- Create food_items table for storing user's food items (if not exists)
CREATE TABLE IF NOT EXISTS food_items (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  category TEXT DEFAULT 'User Added',
  quantity TEXT DEFAULT '1 item',
  expiry_date DATE,
  status TEXT DEFAULT 'fresh' CHECK (status IN ('fresh', 'expiring', 'expired')),
  ai_suggestion TEXT,
  points INTEGER DEFAULT 50,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE user_stats ENABLE ROW LEVEL SECURITY;
ALTER TABLE food_items ENABLE ROW LEVEL SECURITY;

-- Create policies for user_stats
CREATE POLICY "Users can view own stats" ON user_stats
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own stats" ON user_stats
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own stats" ON user_stats
  FOR UPDATE USING (auth.uid() = user_id);

-- Create policies for food_items
CREATE POLICY "Users can view own food items" ON food_items
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own food items" ON food_items
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own food items" ON food_items
  FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can delete own food items" ON food_items
  FOR DELETE USING (auth.uid() = user_id);

-- Create a view for public rankings (anonymized)
DROP VIEW IF EXISTS public_rankings;
CREATE VIEW public_rankings AS
SELECT 
  ROW_NUMBER() OVER (ORDER BY total_points DESC) AS rank,
  total_points,
  items_saved,
  CASE 
    WHEN ROW_NUMBER() OVER (ORDER BY total_points DESC) <= 10 THEN 'Top Player'
    ELSE 'Anonymous Player'
  END AS display_name
FROM user_stats
WHERE total_points > 0
ORDER BY total_points DESC;

-- Enable public access to rankings view
GRANT SELECT ON public_rankings TO anon, authenticated;

-- Create function to get user rank
CREATE OR REPLACE FUNCTION get_user_rank(user_uuid UUID)
RETURNS TEXT AS $$
DECLARE
  user_rank INTEGER;
BEGIN
  SELECT rank INTO user_rank
  FROM (
    SELECT 
      user_id,
      ROW_NUMBER() OVER (ORDER BY total_points DESC) AS rank
    FROM user_stats
    WHERE total_points > 0
  ) ranked_users
  WHERE user_id = user_uuid;
  
  IF user_rank IS NULL THEN
    RETURN 'Unranked';
  ELSE
    RETURN user_rank::TEXT;
  END IF;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Grant execute permission
GRANT EXECUTE ON FUNCTION get_user_rank(UUID) TO authenticated;
