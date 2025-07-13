import { supabase } from './supabase';

export interface UserStats {
  id: string;
  user_id: string;
  total_points: number;
  items_saved: number;
  created_at: string;
  updated_at: string;
}

export interface FoodItem {
  id: string;
  user_id: string;
  name: string;
  category: string;
  quantity: string;
  expiry_date: string;
  status: 'fresh' | 'expiring' | 'expired';
  ai_suggestion: string;
  points: number;
  created_at: string;
  updated_at: string;
}

export interface PublicRanking {
  rank: number;
  total_points: number;
  items_saved: number;
  display_name: string;
}

// User Stats Functions
export async function getUserStats(userId: string): Promise<UserStats | null> {
  const { data, error } = await supabase
    .from('user_stats')
    .select('*')
    .eq('user_id', userId)
    .single();

  if (error && error.code !== 'PGRST116') {
    console.error('Error fetching user stats:', error);
    return null;
  }

  return data;
}

export async function createUserStats(userId: string): Promise<UserStats | null> {
  const { data, error } = await supabase
    .from('user_stats')
    .insert({
      user_id: userId,
      total_points: 0,
      items_saved: 0
    })
    .select()
    .single();

  if (error) {
    console.error('Error creating user stats:', error);
    return null;
  }

  return data;
}

export async function updateUserStats(userId: string, points: number, itemsSaved: number): Promise<UserStats | null> {
  const { data, error } = await supabase
    .from('user_stats')
    .update({
      total_points: points,
      items_saved: itemsSaved,
      updated_at: new Date().toISOString()
    })
    .eq('user_id', userId)
    .select()
    .single();

  if (error) {
    console.error('Error updating user stats:', error);
    return null;
  }

  return data;
}

// Food Items Functions
export async function getUserFoodItems(userId: string): Promise<FoodItem[]> {
  const { data, error } = await supabase
    .from('food_items')
    .select('*')
    .eq('user_id', userId)
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching food items:', error);
    return [];
  }

  return data || [];
}

export async function createFoodItem(userId: string, foodItemData: Omit<FoodItem, 'id' | 'user_id' | 'created_at' | 'updated_at'>): Promise<FoodItem | null> {
  const { data, error } = await supabase
    .from('food_items')
    .insert({
      user_id: userId,
      ...foodItemData
    })
    .select()
    .single();

  if (error) {
    console.error('Error creating food item:', error);
    return null;
  }

  return data;
}

export async function updateFoodItem(id: string, updates: Partial<FoodItem>): Promise<FoodItem | null> {
  const { data, error } = await supabase
    .from('food_items')
    .update({
      ...updates,
      updated_at: new Date().toISOString()
    })
    .eq('id', id)
    .select()
    .single();

  if (error) {
    console.error('Error updating food item:', error);
    return null;
  }

  return data;
}

export async function deleteFoodItem(id: string): Promise<boolean> {
  const { error } = await supabase
    .from('food_items')
    .delete()
    .eq('id', id);

  if (error) {
    console.error('Error deleting food item:', error);
    return false;
  }

  return true;
}

// Ranking Functions
export async function getUserRank(userId: string): Promise<string> {
  const { data, error } = await supabase
    .rpc('get_user_rank', { user_uuid: userId });

  if (error) {
    console.error('Error getting user rank:', error);
    return 'Unranked';
  }

  return data || 'Unranked';
}

export async function getPublicRankings(limit: number = 10): Promise<PublicRanking[]> {
  const { data, error } = await supabase
    .from('public_rankings')
    .select('*')
    .limit(limit);

  if (error) {
    console.error('Error fetching public rankings:', error);
    return [];
  }

  return data || [];
}

// Initialize user stats if they don't exist
export async function initializeUserStats(userId: string): Promise<UserStats> {
  let stats = await getUserStats(userId);
  
  if (!stats) {
    stats = await createUserStats(userId);
  }
  
  return stats || {
    id: '',
    user_id: userId,
    total_points: 0,
    items_saved: 0,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  };
}
