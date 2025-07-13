import Image from "next/image";

export default function RefoodifyHomepage() {
  return (
    <div className="relative min-h-screen bg-gray-900 text-white select-text">
      {/* Hero Section - Full Screen */}
      <section className="relative h-screen overflow-hidden flex items-center justify-center">
        {/* Decorative Grid Lines */}
        <div className="absolute inset-0 z-0 grid grid-cols-[clamp(28px,10vw,120px)_auto_clamp(28px,10vw,120px)] border-b border-gray-700/30">
          <div className="col-span-1 flex h-full items-center justify-center" />
          <div className="col-span-1 flex h-full items-center justify-center border-x border-gray-700/30" />
          <div className="col-span-1 flex h-full items-center justify-center" />
        </div>
        
        {/* Animated Background Grid */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-900 to-green-900/20"></div>
        </div>
        
        {/* Main Content */}
        <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
          {/* Floating Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-green-500/10 border border-green-500/20 rounded-full backdrop-blur-sm">
            <span className="text-green-400 text-sm font-medium">AI-Powered • Gamified • Sustainable</span>
          </div>
          
          {/* Main Heading */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-white to-green-400 bg-clip-text text-transparent leading-tight select-text">
            Refoodify
          </h1>
          
          {/* Subheading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent leading-tight select-text">
            Smart Waste Solutions
          </h2>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed select-text">
            Refoodify uses cutting-edge AI to transform your leftovers into valuable resources. 
            <span className="text-green-400 font-semibold"> Make money with waste</span> while saving our planet.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-12">
            <a href="/login" className="group relative px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl text-white font-semibold text-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-green-500/25 hover:scale-105 text-center">
              <span className="relative z-10">Start Your Journey</span>
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-500 rounded-xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity"></div>
            </a>
            <button className="px-8 py-4 border border-gray-600 rounded-xl text-white font-semibold text-lg hover:border-green-500/50 hover:bg-green-500/5 transition-all duration-300 backdrop-blur-sm">
              Watch Demo
            </button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-1">40%</div>
              <div className="text-sm text-gray-400">Food Waste Reduced</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-1">$1.3T</div>
              <div className="text-sm text-gray-400">Market Opportunity</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-1">AI-First</div>
              <div className="text-sm text-gray-400">Smart Solutions</div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-green-500 rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* Features Grid - Enhanced Design */}
      <section className="py-24 px-4 relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-gray-800/50"></div>
        
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-green-500/10 border border-green-500/20 rounded-full">
              <span className="text-green-400 text-sm font-medium">✨ Powered by Advanced AI</span>
            </div>
            <h3 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent select-text">
              Revolutionary Food Waste Solutions
            </h3>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed select-text">
              Don't let leftovers die lonely. Our AI transforms your food waste data into 
              <span className="text-green-400 font-semibold"> actionable sustainability solutions</span>.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group relative">
              <article className="relative flex flex-col gap-6 rounded-2xl border border-gray-700/50 bg-gray-800/30 backdrop-blur-sm p-8 hover:border-green-500/30 transition-all duration-300">
                <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-600 text-2xl shadow-lg">
                  🤖
                </div>
                <div>
                  <h5 className="text-2xl font-bold text-white mb-3">Smart AI Suggestions</h5>
                  <p className="text-gray-300 leading-relaxed">
                    Get personalized recommendations for reusing leftovers, reducing waste, and maximizing nutrition value with our advanced machine learning algorithms.
                  </p>
                </div>
              </article>
            </div>

            <div className="group relative">
              <article className="relative flex flex-col gap-6 rounded-2xl border border-gray-700/50 bg-gray-800/30 backdrop-blur-sm p-8 hover:border-green-500/30 transition-all duration-300">
                <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-600 text-2xl shadow-lg">
                  🏆
                </div>
                <div>
                  <h5 className="text-2xl font-bold text-white mb-3">Gamified Experience</h5>
                  <p className="text-gray-300 leading-relaxed">
                    Earn points for sustainable actions, compete on leaderboards, and unlock achievements. Making environmental impact fun and rewarding.
                  </p>
                </div>
              </article>
            </div>

            <div className="group relative">
              <article className="relative flex flex-col gap-6 rounded-2xl border border-gray-700/50 bg-gray-800/30 backdrop-blur-sm p-8 hover:border-green-500/30 transition-all duration-300">
                <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-600 text-2xl shadow-lg">
                  🌱
                </div>
                <div>
                  <h5 className="text-2xl font-bold text-white mb-3">Composting Intelligence</h5>
                  <p className="text-gray-300 leading-relaxed">
                    Learn optimal composting techniques and get detailed nutrient information for sustainable disposal with our comprehensive database.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement - Enhanced Design */}
      <section className="py-24 px-4 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-800 via-gray-800 to-green-900/10"></div>
        
        <div className="container mx-auto text-center relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-red-500/10 border border-red-500/20 rounded-full">
              <span className="text-red-400 text-sm font-medium">🚨 Critical Problem</span>
            </div>
            
            <h3 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent select-text">
              The $1.3 Trillion Problem We're Solving
            </h3>
            
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-12 select-text">
              Food waste is an <span className="text-red-400 font-semibold">untapped data stream</span> contributing to environmental degradation. 
              Unlike competitors like SoilMate (composting only) or Growyze (business-focused), 
              <span className="text-green-400 font-bold"> Refoodify combines AI, sustainability, and gamification</span> in a consumer-focused app.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mt-16">
              <div className="group relative">
                <div className="relative bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-red-500/30 transition-all duration-300">
                  <div className="text-5xl md:text-6xl font-bold text-red-400 mb-4">40%</div>
                  <h4 className="text-lg font-semibold text-white mb-2">Global Food Waste</h4>
                  <p className="text-gray-400">Of all food produced goes to waste annually</p>
                </div>
              </div>
              
              <div className="group relative">
                <div className="relative bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-yellow-500/30 transition-all duration-300">
                  <div className="text-5xl md:text-6xl font-bold text-yellow-400 mb-4">$1.3T</div>
                  <h4 className="text-lg font-semibold text-white mb-2">Economic Loss</h4>
                  <p className="text-gray-400">Lost annually due to food waste globally</p>
                </div>
              </div>
              
              <div className="group relative">
                <div className="relative bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-green-500/30 transition-all duration-300">
                  <div className="text-5xl md:text-6xl font-bold text-green-400 mb-4">3.3Gt</div>
                  <h4 className="text-lg font-semibold text-white mb-2">CO₂ Emissions</h4>
                  <p className="text-gray-400">From food waste contributing to climate change</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section - Enhanced */}
      <section className="py-24 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-800/50 to-gray-900"></div>
        
        <div className="container mx-auto text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-green-500/10 border border-green-500/20 rounded-full">
              <span className="text-green-400 text-sm font-medium">👥 Team Git Happens</span>
            </div>
            
            <h3 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent select-text">
              Built by Innovators Who Care
            </h3>
            
            <div className="relative">
              <div className="relative bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-12">
                <p className="text-2xl md:text-3xl text-gray-300 leading-relaxed mb-6">
                  Our motto: <span className="text-green-400 font-bold text-4xl">"Make money with waste"</span>
                </p>
                <p className="text-xl text-gray-300 leading-relaxed">
                  We're tackling food waste with cutting-edge technology, turning environmental challenges into 
                  <span className="text-green-400 font-semibold"> sustainable, profitable solutions</span>. 
                  Join us in revolutionizing how the world thinks about waste.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
