export default function AboutPage() {
  return (
    <div className="relative min-h-screen bg-gray-900 text-white pt-20">
      {/* Hero Section */}
      <section className="py-24 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-900 to-green-900/20"></div>
        <div className="container mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-green-500/10 border border-green-500/20 rounded-full">
            <span className="text-green-400 text-sm font-medium">� Hackathon Project by GitHappens</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            About Refoodify
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A revolutionary hackathon project by Team GitHappens, transforming food waste into environmental impact and economic opportunity through AI-powered innovation.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-green-500/10 border border-green-500/20 rounded-full">
                <span className="text-green-400 text-sm font-medium">🎯 Mission</span>
              </div>
              <h2 className="text-4xl font-bold mb-6 text-white">Our Mission</h2>
              <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                We believe that food waste is not just an environmental problem – it's a missed opportunity. Every day, millions of tons of food are wasted while people struggle with hunger and environmental degradation continues.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed">
                Refoodify was created to bridge this gap by empowering individuals and communities to turn their food waste into value, creating a sustainable cycle that benefits both people and the planet.
              </p>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-3xl blur-2xl"></div>
              <div className="relative bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-12 text-center">
                <div className="text-6xl mb-6">🌍</div>
                <h3 className="text-2xl font-bold text-white mb-4">Global Impact Vision</h3>
                <p className="text-gray-300">Creating measurable positive impact in communities through technology and awareness</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem & Solution Section */}
      <section className="py-24 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Problem */}
            <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-8">
              <div className="text-5xl mb-6">⚠️</div>
              <h3 className="text-3xl font-bold text-white mb-6">The Problem</h3>
              <div className="space-y-4 text-gray-300">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>1.3 billion tons of food wasted globally each year</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Food waste accounts for 8% of global greenhouse gas emissions</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>$1 trillion worth of food lost annually</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Limited awareness of waste reduction methods</span>
                </div>
              </div>
            </div>

            {/* Solution */}
            <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-8">
              <div className="text-5xl mb-6">✅</div>
              <h3 className="text-3xl font-bold text-white mb-6">Our Solution</h3>
              <div className="space-y-4 text-gray-300">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>AI-powered food waste recognition and analysis</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Personalized suggestions for reuse and reduction</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Gamification through points and rewards</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Community-driven impact measurement</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 px-4 bg-gray-800/20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-white">Team GitHappens</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Passionate developers who built this platform during an intensive hackathon, proving that innovative solutions can be created rapidly when motivated by real-world problems
            </p>
          </div>

          <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-12 text-center">
            <div className="text-6xl mb-6">�</div>
            <h3 className="text-2xl font-bold text-white mb-4">Built During Hackathon</h3>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Refoodify was conceived, designed, and developed during a hackathon by Team GitHappens. 
              We transformed an idea into a working platform that addresses one of the world's most pressing environmental challenges.
            </p>
            <div className="mt-8 flex justify-center">
              <div className="px-6 py-3 bg-green-500/20 border border-green-500/30 rounded-lg">
                <span className="text-green-400 font-medium">⚡ Rapid Innovation • 🏆 Competition Ready • 🌍 Real Impact</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-emerald-500/10"></div>
        <div className="container mx-auto text-center relative z-10">
          <h2 className="text-4xl font-bold mb-6 text-white">Join Our Mission</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Every small action creates ripples of change. Start your journey with Refoodify today and be part of the solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/dashboard" className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl text-white font-semibold text-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-green-500/25 hover:scale-105 text-center">
              Start Making Impact
            </a>
            <a href="/how-it-works" className="px-8 py-4 border border-gray-600 rounded-xl text-white font-semibold text-lg hover:border-gray-500 hover:bg-gray-800/50 transition-all duration-300 text-center">
              Learn How It Works
            </a>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-800">
            <p className="text-gray-500 text-sm">
              Built with ❤️ by <span className="text-green-400 font-medium">Team GitHappens</span> during a hackathon • Proving rapid innovation can solve global challenges
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
