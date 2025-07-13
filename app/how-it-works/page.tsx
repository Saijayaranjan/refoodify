export default function HowItWorksPage() {
  return (
    <div className="relative min-h-screen bg-gray-900 text-white pt-20">
      {/* Hero Section */}
      <section className="py-24 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-900 to-green-900/20"></div>
        <div className="container mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-green-500/10 border border-green-500/20 rounded-full">
            <span className="text-green-400 text-sm font-medium">🔄 Process</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            How Refoodify Works
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Turn your food waste into money and environmental impact with our revolutionary AI-powered platform.
          </p>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-24 px-4">
        <div className="container mx-auto">
          <div className="grid gap-16">
            
            {/* Step 1 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-3xl blur-2xl"></div>
                <div className="relative bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-8 h-80 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">📱</div>
                    <div className="text-2xl font-bold text-green-400">Upload Food Waste</div>
                  </div>
                </div>
              </div>
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 bg-green-500/10 border border-green-500/20 rounded-full">
                  <span className="text-green-400 text-sm font-medium">Step 1</span>
                </div>
                <h3 className="text-3xl font-bold mb-6 text-white">Capture Your Leftovers</h3>
                <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                  Simply take a photo of your food waste or input details manually. Our AI instantly recognizes ingredients, nutritional content, and suggests optimal disposal methods. Upload from your phone, tablet, or desktop - anywhere, anytime.
                </p>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Smart image recognition technology</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Automatic nutritional analysis</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Manual input option available</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Step 2 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="md:order-2 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-2xl"></div>
                <div className="relative bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-8 h-80 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🤖</div>
                    <div className="text-2xl font-bold text-blue-400">AI Analysis</div>
                  </div>
                </div>
              </div>
              <div className="md:order-1">
                <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 bg-blue-500/10 border border-blue-500/20 rounded-full">
                  <span className="text-blue-400 text-sm font-medium">Step 2</span>
                </div>
                <h3 className="text-3xl font-bold mb-6 text-white">AI-Powered Recommendations</h3>
                <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                  Our advanced machine learning analyzes your waste patterns, nutritional data, and local resources to generate personalized suggestions. Get recipes for leftovers, composting guides, donation locations, and even marketplace opportunities where you can sell valuable waste streams.
                </p>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>Personalized reuse suggestions</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>Creative recipe recommendations</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>Optimal composting guidance</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Step 3 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl blur-2xl"></div>
                <div className="relative bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-8 h-80 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🎯</div>
                    <div className="text-2xl font-bold text-purple-400">Take Action</div>
                  </div>
                </div>
              </div>
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 bg-purple-500/10 border border-purple-500/20 rounded-full">
                  <span className="text-purple-400 text-sm font-medium">Step 3</span>
                </div>
                <h3 className="text-3xl font-bold mb-6 text-white">Implement Solutions</h3>
                <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                  Follow our detailed implementation guides to transform waste into value. Cook creative leftover recipes, start efficient compost systems, connect with local food banks, or list valuable materials on our integrated marketplace. Every action is tracked and rewarded.
                </p>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span>Detailed implementation guides</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span>Video tutorials available</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span>Community support network</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Step 4 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="md:order-2 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-3xl blur-2xl"></div>
                <div className="relative bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-8 h-80 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🏆</div>
                    <div className="text-2xl font-bold text-yellow-400">Earn Rewards</div>
                  </div>
                </div>
              </div>
              <div className="md:order-1">
                <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 bg-yellow-500/10 border border-yellow-500/20 rounded-full">
                  <span className="text-yellow-400 text-sm font-medium">Step 4</span>
                </div>
                <h3 className="text-3xl font-bold mb-6 text-white">Get Rewarded</h3>
                <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                  Earn points for every sustainable action, compete globally on leaderboards, unlock achievement badges, and receive monetary rewards through weekly rewards. Convert your environmental impact into tangible rewards and cash payments.
                </p>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <span>Points for sustainable actions</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <span>Leaderboard competitions</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <span>Monetary rewards through weekly rewards</span>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-emerald-500/10"></div>
        <div className="container mx-auto text-center relative z-10">
          <h2 className="text-4xl font-bold mb-6 text-white">Ready to Turn Waste into Wealth?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Start your sustainable journey today and see real results within your first week.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/dashboard" className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl text-white font-semibold text-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-green-500/25 hover:scale-105 text-center">
              Start Earning Today
            </a>
            <a href="#" className="px-8 py-4 border border-gray-600 rounded-xl text-white font-semibold text-lg hover:border-gray-500 hover:bg-gray-800/50 transition-all duration-300 text-center">
              Watch Demo Video
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
