"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  getUserStats,
  getUserFoodItems,
  createFoodItem,
  updateUserStats,
  updateFoodItem,
  getUserRank,
  initializeUserStats,
  type FoodItem,
  type UserStats
} from "@/lib/database";
import { MarkdownRenderer } from "@/components/markdown-renderer";
import { useAuth } from "@/context/auth-provider";

export default function DashboardPage() {
  const { user, loading: authLoading } = useAuth();
  const [loading, setLoading] = useState(true);
  const [userStats, setUserStats] = useState<UserStats | null>(null);
  const [foodItems, setFoodItems] = useState<FoodItem[]>([]);
  const [rank, setRank] = useState<string>('Unranked');
  const [showAddModal, setShowAddModal] = useState(false);
  const [newFoodItem, setNewFoodItem] = useState('');
  const [showAISuggestion, setShowAISuggestion] = useState<string | null>(null);
  const [isAILoading, setIsAILoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (authLoading) {
      // Still loading auth state
      return;
    }

    if (!user) {
      // No user, redirect to login
      router.push('/login');
      return;
    }

    // User is authenticated, initialize dashboard
    const initializeDashboard = async () => {
      setLoading(true);
      
      try {
        // Initialize user stats if they don't exist
        const stats = await initializeUserStats(user.id);
        setUserStats(stats);

        // Get user food items
        const items = await getUserFoodItems(user.id);
        setFoodItems(items);

        // Get user rank
        const userRank = await getUserRank(user.id);
        setRank(userRank);
      } catch (error) {
        console.error('Error initializing dashboard:', error);
      } finally {
        setLoading(false);
      }
    };

    initializeDashboard();
  }, [user, authLoading, router]);

  const getAISuggestion = async (foodItem: string) => {
    setIsAILoading(true);
    setShowAISuggestion(null);

    try {
      const response = await fetch('/api/ai-suggestion', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ foodItem }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setShowAISuggestion(data.suggestion);
    } catch (error) {
      console.error('Error getting AI suggestion:', error);
      setShowAISuggestion(`# 🤖 General Suggestions for "${foodItem}"

## 🍃 Composting Options
- **Fruit/vegetable peels**: Perfect for composting or use as natural plant fertilizer
- **Coffee grounds**: Excellent for acid-loving plants like tomatoes and blueberries

## 🍽️ Food Storage Tips
- **Leftover food**: Check if it can be refrigerated and used within 2-3 days
- **Proper containers**: Use airtight containers to extend freshness

## 🤝 Community Impact
- **Large quantities**: Consider donating if still fresh and in good condition
- **Food banks**: Many accept fresh produce and packaged foods

## 🍲 Creative Reuse
- **Vegetable scraps**: Turn into flavorful soup stock or broth
- **Herb stems**: Use for making infused oils or teas

## 🧽 Natural Cleaning
- **Citrus peels**: Great for natural cleaning products and air fresheners
- **Vinegar solutions**: Combine with food scraps for eco-friendly cleaners

> **💡 Pro Tip**: Always check local guidelines for composting and donation programs in your area!`);
    } finally {
      setIsAILoading(false);
    }
  };

  const handleAddFoodItem = async () => {
    if (!newFoodItem.trim() || !user || !userStats) return;

    try {
      const pointsEarned = Math.floor(Math.random() * 50) + 10; // 10-60 points
      
      // Create the food item in database
      const foodItem = await createFoodItem(user.id, {
        name: newFoodItem.trim(),
        category: 'food-waste',
        quantity: '1',
        expiry_date: new Date().toISOString(),
        status: 'fresh' as const,
        ai_suggestion: '',
        points: pointsEarned
      });
      
      // Update user stats in database
      const updatedStats = await updateUserStats(
        user.id, 
        userStats.total_points + pointsEarned,
        userStats.items_saved + 1
      );

      // Update local state
      if (foodItem && updatedStats) {
        setFoodItems(prev => [foodItem, ...prev]);
        setUserStats(updatedStats);
        
        // Update rank
        const newRank = await getUserRank(user.id);
        setRank(newRank);

        // Get AI suggestion
        await getAISuggestion(newFoodItem.trim());
      }

      setNewFoodItem('');
      setShowAddModal(false);
    } catch (error) {
      console.error('Error adding food item:', error);
    }
  };

  const handleEditFoodItem = async (item: FoodItem, newName: string, newPoints: number) => {
    // Editing disabled
    return;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-2 border-green-500 border-t-transparent mx-auto mb-3"></div>
          <p className="text-white text-lg">Loading your dashboard...</p>
        </div>
      </div>
    );
  }

  const progressToNext = userStats ? ((userStats.total_points % 1000) / 1000) * 100 : 0;
  const nextLevelPoints = userStats ? 1000 - (userStats.total_points % 1000) : 1000;

  return (
    <div className="min-h-screen bg-gray-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 via-gray-900 to-blue-900/20" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-white mb-2">Welcome back! 👋</h1>
            <p className="text-gray-400">Let's turn more waste into rewards</p>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gradient-to-br from-green-600 to-green-700 p-6 rounded-2xl text-white">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-green-100 text-sm font-medium">Total Points</h3>
                <p className="text-3xl font-bold">{userStats?.total_points.toLocaleString() || 0}</p>
              </div>
              <div className="p-3 bg-green-500/30 rounded-full">
                <span className="text-2xl">🌟</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-6 rounded-2xl text-white">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-blue-100 text-sm font-medium">Items Saved</h3>
                <p className="text-3xl font-bold">{userStats?.items_saved || 0}</p>
              </div>
              <div className="p-3 bg-blue-500/30 rounded-full">
                <span className="text-2xl">🍃</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-600 to-purple-700 p-6 rounded-2xl text-white">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-purple-100 text-sm font-medium">Global Rank</h3>
                <p className="text-3xl font-bold">{rank}</p>
              </div>
              <div className="p-3 bg-purple-500/30 rounded-full">
                <span className="text-2xl">🏆</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Food Items */}
          <div className="lg:col-span-2">
            <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-white">Your Food Items</h2>
                <button 
                  onClick={() => setShowAddModal(true)}
                  className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors"
                >
                  + Add Item
                </button>
              </div>

              <div className="space-y-4 max-h-96 overflow-y-auto">
                {foodItems.length === 0 ? (
                  <div className="text-center py-12">
                    <div className="bg-gray-700/30 rounded-2xl p-8 border border-gray-600/30">
                      <span className="text-8xl mb-6 block">🍽️</span>
                      <h3 className="text-white text-xl font-semibold mb-2">No food items yet</h3>
                      <p className="text-gray-400 text-lg mb-4">Start your food waste reduction journey!</p>
                      <p className="text-gray-500 mb-6">Add your first food item to start earning points and get AI-powered suggestions</p>
                      <button 
                        onClick={() => setShowAddModal(true)}
                        className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors font-medium"
                      >
                        🍃 Add Your First Item
                      </button>
                    </div>
                  </div>
                ) : (
                  foodItems.map((item) => (
                    <div key={item.id} className="bg-gray-700/50 p-4 rounded-lg border border-gray-600/50 hover:border-gray-500/50 transition-colors">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <h3 className="text-white font-medium text-lg">{item.name}</h3>
                          <div className="flex items-center gap-4 mt-2">
                            <span className="text-green-400 font-medium">+{item.points} points</span>
                            <span className="text-gray-400 text-sm">{new Date(item.created_at).toLocaleDateString()}</span>
                          </div>
                          <div className="flex gap-2 mt-3">
                            <button 
                              onClick={() => getAISuggestion(item.name)}
                              className="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded text-sm transition-colors flex items-center gap-1"
                            >
                              🤖 Get AI Tips
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button 
                  onClick={() => setShowAddModal(true)}
                  className="w-full p-3 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors text-left"
                >
                  🍃 Add Food Item
                </button>
                <button className="w-full p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors text-left">
                  🧑‍🍳 Browse Recipes
                </button>
                <button className="w-full p-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors text-left">
                  📊 View Leaderboard
                </button>
              </div>
            </div>

            {/* Progress to Next Level */}
            <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">Progress to Next Level</h3>
              <div className="space-y-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Current Level</span>
                  <span className="text-white font-medium">Level {Math.floor((userStats?.total_points || 0) / 1000) + 1}</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-3">
                  <div 
                    className="bg-gradient-to-r from-green-500 to-blue-500 h-3 rounded-full transition-all duration-500"
                    style={{ width: `${progressToNext}%` }}
                  ></div>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">{nextLevelPoints} points to next level</span>
                  <span className="text-green-400">{progressToNext.toFixed(1)}%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add Food Item Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-800 rounded-2xl p-6 w-full max-w-md border border-gray-700">
            <h3 className="text-xl font-bold text-white mb-4">Add Food Item</h3>
            <input
              type="text"
              value={newFoodItem}
              onChange={(e) => setNewFoodItem(e.target.value)}
              placeholder="e.g., banana peel, leftover rice..."
              className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 mb-4 focus:outline-none focus:border-green-500"
              onKeyPress={(e) => e.key === 'Enter' && handleAddFoodItem()}
            />
            <div className="flex gap-3">
              <button 
                onClick={() => setShowAddModal(false)}
                className="flex-1 p-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors"
              >
                Cancel
              </button>
              <button 
                onClick={handleAddFoodItem}
                disabled={!newFoodItem.trim()}
                className="flex-1 p-3 bg-green-600 hover:bg-green-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white rounded-lg transition-colors"
              >
                Add Item
              </button>
            </div>
          </div>
        </div>
      )}

      {/* AI Suggestion Modal */}
      {(showAISuggestion || isAILoading) && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-800 rounded-2xl p-6 w-full max-w-4xl border border-gray-700 max-h-[80vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                <span className="text-2xl">🤖</span>
                AI Suggestion
              </h3>
              <button 
                onClick={() => {
                  setShowAISuggestion(null);
                  setIsAILoading(false);
                }}
                className="text-gray-400 hover:text-white transition-colors text-xl"
              >
                ✕
              </button>
            </div>
            {isAILoading ? (
              <div className="text-center py-8">
                <div className="animate-spin rounded-full h-6 w-6 border-2 border-green-500 border-t-transparent mx-auto mb-4"></div>
                <p className="text-gray-400 text-base">Getting AI suggestions...</p>
                <p className="text-gray-500 text-sm mt-1">Analyzing your food item</p>
              </div>
            ) : (
              <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-700/50">
                <MarkdownRenderer content={showAISuggestion || ""} />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
