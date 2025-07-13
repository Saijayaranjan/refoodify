export default function LeaderboardPage() {
  const topUsers = [
    { rank: 1, name: "EcoWarrior2024", points: 15420, badge: "🥇", wasteReduced: "2.3 tons", streak: 127 },
    { rank: 2, name: "GreenThumb_Pro", points: 14850, badge: "🥈", wasteReduced: "2.1 tons", streak: 89 },
    { rank: 3, name: "SustainableChef", points: 13960, badge: "🥉", wasteReduced: "1.9 tons", streak: 156 },
    { rank: 4, name: "ZeroWasteZen", points: 12780, badge: "🏅", wasteReduced: "1.8 tons", streak: 94 },
    { rank: 5, name: "CompostKing", points: 11940, badge: "🏅", wasteReduced: "1.6 tons", streak: 72 },
    { rank: 6, name: "RecycleQueen", points: 10850, badge: "🏅", wasteReduced: "1.5 tons", streak: 108 },
    { rank: 7, name: "FoodSaver_101", points: 9720, badge: "⭐", wasteReduced: "1.3 tons", streak: 45 },
    { rank: 8, name: "PlanetProtector", points: 8900, badge: "⭐", wasteReduced: "1.2 tons", streak: 63 },
  ];

  const achievements = [
    { icon: "🌟", title: "First Steps", desc: "Complete your first waste upload", points: 100 },
    { icon: "🔥", title: "Week Warrior", desc: "7-day streak of waste reduction", points: 500 },
    { icon: "🏆", title: "Waste Master", desc: "Reduce 100kg of food waste", points: 2000 },
    { icon: "🌱", title: "Compost Creator", desc: "Successfully compost 50kg of waste", points: 1500 },
    { icon: "👨‍🍳", title: "Recipe Innovator", desc: "Create 10 leftover recipes", points: 1000 },
    { icon: "💚", title: "Eco Champion", desc: "Save 1 ton of food waste", points: 5000 },
  ];

  return (
    <div className="relative min-h-screen bg-gray-900 text-white pt-20">
      {/* Coming Soon Overlay */}
      <div className="absolute inset-0 bg-gray-900/80 backdrop-blur-sm z-50 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-6">
          <div className="text-6xl mb-6">🚧</div>
          <h1 className="text-4xl font-bold mb-4 text-white">Coming Soon</h1>
          <p className="text-xl text-gray-300 mb-8">
            We're working hard to bring you an amazing leaderboard experience. Check back soon!
          </p>
          <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4 mb-6">
            <p className="text-yellow-400 text-sm">
              🔥 Expected launch: Q2 2025<br/>
              ⭐ Features include global rankings, achievements, and exclusive rewards
            </p>
          </div>
          <a 
            href="/dashboard" 
            className="inline-block px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors"
          >
            Go to Dashboard
          </a>
        </div>
      </div>

      {/* Background Content (blurred) */}
      <div className="opacity-30 pointer-events-none">
      {/* Hero Section */}
      <section className="py-24 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-900 to-yellow-900/20"></div>
        <div className="container mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-yellow-500/10 border border-yellow-500/20 rounded-full">
            <span className="text-yellow-400 text-sm font-medium">🏆 Competition</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Global Leaderboard
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            See how you stack up against eco-warriors worldwide. Compete, earn points, and make a real impact on our planet.
          </p>
        </div>
      </section>

      {/* Stats Overview */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">47,892</div>
              <div className="text-gray-400">Active Users</div>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">156.3 tons</div>
              <div className="text-gray-400">Waste Reduced</div>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">$284K</div>
              <div className="text-gray-400">Value Created</div>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-2">12,456</div>
              <div className="text-gray-400">Recipes Shared</div>
            </div>
          </div>
        </div>
      </section>

      {/* Leaderboard */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            
            {/* Main Leaderboard */}
            <div className="lg:col-span-2">
              <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-8">
                <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Top Eco-Warriors This Month
                </h2>
                
                <div className="space-y-4">
                  {topUsers.map((user, index) => (
                    <div 
                      key={user.rank} 
                      className={`flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 hover:scale-105 ${
                        index < 3 ? 'bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30' : 
                        'bg-gray-800/50 border border-gray-700/50'
                      }`}
                    >
                      <div className="text-2xl font-bold w-8 text-center">
                        {user.badge}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h3 className="font-semibold text-white">{user.name}</h3>
                          <div className="text-lg font-bold text-green-400">{user.points.toLocaleString()} pts</div>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-gray-400">
                          <span>🌱 {user.wasteReduced} reduced</span>
                          <span>🔥 {user.streak} day streak</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 text-center">
                  <div className="inline-flex items-center gap-2 px-6 py-3 bg-green-500/10 border border-green-500/20 rounded-full">
                    <span className="text-green-400 text-sm">Your Rank: #247 • 3,450 points</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Achievements Panel */}
            <div className="lg:col-span-1">
              <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-8">
                <h2 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Achievements
                </h2>
                
                <div className="space-y-4">
                  {achievements.map((achievement, index) => (
                    <div 
                      key={index}
                      className="flex items-center gap-3 p-4 bg-gray-800/50 border border-gray-700/50 rounded-xl hover:border-green-500/30 transition-all duration-300"
                    >
                      <div className="text-2xl">{achievement.icon}</div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-white text-sm">{achievement.title}</h4>
                        <p className="text-xs text-gray-400 mb-1">{achievement.desc}</p>
                        <div className="text-xs text-green-400 font-semibold">{achievement.points} pts</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-4 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl">
                  <h3 className="font-semibold text-green-400 mb-2">Weekly Challenge</h3>
                  <p className="text-sm text-gray-300 mb-3">Reduce 5kg of food waste this week</p>
                  <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: '68%' }}></div>
                  </div>
                  <div className="text-xs text-gray-400">3.4kg / 5kg completed</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* How Points Work */}
      <section className="py-24 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-emerald-500/5"></div>
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              How to Earn Points
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Every sustainable action counts. Here's how you can climb the leaderboard and make a real impact.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 text-center hover:border-green-500/30 transition-all duration-300">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="font-semibold text-white mb-2">Upload Waste</h3>
              <div className="text-green-400 font-bold text-xl mb-2">+50 pts</div>
              <p className="text-sm text-gray-400">Per food waste entry</p>
            </div>

            <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 text-center hover:border-blue-500/30 transition-all duration-300">
              <div className="text-4xl mb-4">👨‍🍳</div>
              <h3 className="font-semibold text-white mb-2">Create Recipe</h3>
              <div className="text-blue-400 font-bold text-xl mb-2">+200 pts</div>
              <p className="text-sm text-gray-400">Using leftover ingredients</p>
            </div>

            <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 text-center hover:border-purple-500/30 transition-all duration-300">
              <div className="text-4xl mb-4">🌱</div>
              <h3 className="font-semibold text-white mb-2">Start Composting</h3>
              <div className="text-purple-400 font-bold text-xl mb-2">+300 pts</div>
              <p className="text-sm text-gray-400">Per composting session</p>
            </div>

            <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 text-center hover:border-yellow-500/30 transition-all duration-300">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="font-semibold text-white mb-2">Daily Goal</h3>
              <div className="text-yellow-400 font-bold text-xl mb-2">+100 pts</div>
              <p className="text-sm text-gray-400">Completing daily targets</p>
            </div>
          </div>
        </div>
      </section>
      </div>
      {/* End Background Content */}
    </div>
  );
}
