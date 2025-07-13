export default function PrivacyPolicyPage() {
  return (
    <div className="relative min-h-screen bg-gray-900 text-white pt-20">
      {/* Hero Section */}
      <section className="py-24 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-900 to-blue-900/20"></div>
        <div className="container mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-blue-500/10 border border-blue-500/20 rounded-full">
            <span className="text-blue-400 text-sm font-medium">🛡️ Privacy</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Privacy Policy
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Your privacy is important to us. Learn how we collect, use, and protect your data at Refoodify.
          </p>
          <div className="mt-8 text-sm text-gray-400">
            Last updated: July 13, 2025
          </div>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-8 md:p-12">
            
            <div className="space-y-12">
              
              {/* Introduction */}
              <div>
                <h2 className="text-3xl font-bold mb-6 text-green-400">Introduction</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Welcome to Refoodify, developed by Team "Git Happens". We are committed to protecting your privacy and ensuring transparency about how we handle your personal information. This Privacy Policy explains how we collect, use, share, and protect your data when you use our AI-powered food waste management platform.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  By using Refoodify, you agree to the collection and use of information in accordance with this policy. We will not use or share your information with anyone except as described in this Privacy Policy.
                </p>
              </div>

              {/* Information We Collect */}
              <div>
                <h2 className="text-3xl font-bold mb-6 text-green-400">Information We Collect</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-white">Personal Information</h3>
                    <ul className="space-y-2 text-gray-300 ml-4">
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Account information (email, username, profile picture)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Contact details for notifications and support</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Demographic information for personalized recommendations</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-white">Food Waste Data</h3>
                    <ul className="space-y-2 text-gray-300 ml-4">
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Photos and descriptions of food waste</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Nutritional information and ingredient details</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Usage patterns and waste reduction activities</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-white">Technical Information</h3>
                    <ul className="space-y-2 text-gray-300 ml-4">
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Device information and operating system</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>App usage analytics and performance data</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Location data (with your explicit consent)</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* How We Use Information */}
              <div>
                <h2 className="text-3xl font-bold mb-6 text-green-400">How We Use Your Information</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gray-800/50 border border-gray-700/50 rounded-2xl p-6">
                    <h3 className="text-lg font-semibold mb-3 text-white">🤖 AI Enhancement</h3>
                    <p className="text-gray-300 text-sm">
                      Improve our AI algorithms to provide better waste reduction suggestions and personalized recommendations.
                    </p>
                  </div>
                  <div className="bg-gray-800/50 border border-gray-700/50 rounded-2xl p-6">
                    <h3 className="text-lg font-semibold mb-3 text-white">🎯 Personalization</h3>
                    <p className="text-gray-300 text-sm">
                      Customize your experience with relevant content, recipes, and composting tips based on your preferences.
                    </p>
                  </div>
                  <div className="bg-gray-800/50 border border-gray-700/50 rounded-2xl p-6">
                    <h3 className="text-lg font-semibold mb-3 text-white">📊 Analytics</h3>
                    <p className="text-gray-300 text-sm">
                      Generate insights about food waste patterns to help improve sustainability efforts globally.
                    </p>
                  </div>
                  <div className="bg-gray-800/50 border border-gray-700/50 rounded-2xl p-6">
                    <h3 className="text-lg font-semibold mb-3 text-white">🏆 Gamification</h3>
                    <p className="text-gray-300 text-sm">
                      Track your progress, calculate points, and maintain leaderboards for the competitive experience.
                    </p>
                  </div>
                </div>
              </div>

              {/* Data Security */}
              <div>
                <h2 className="text-3xl font-bold mb-6 text-green-400">Data Security</h2>
                <p className="text-gray-300 leading-relaxed mb-6">
                  We implement industry-standard security measures to protect your data:
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl p-4 text-center">
                    <div className="text-2xl mb-2">🔒</div>
                    <h4 className="font-semibold text-white mb-1">Encryption</h4>
                    <p className="text-xs text-gray-400">End-to-end encryption for all data transmission</p>
                  </div>
                  <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-xl p-4 text-center">
                    <div className="text-2xl mb-2">🛡️</div>
                    <h4 className="font-semibold text-white mb-1">Protection</h4>
                    <p className="text-xs text-gray-400">Secure servers with regular security audits</p>
                  </div>
                  <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-xl p-4 text-center">
                    <div className="text-2xl mb-2">🔐</div>
                    <h4 className="font-semibold text-white mb-1">Access Control</h4>
                    <p className="text-xs text-gray-400">Strict access controls and authentication</p>
                  </div>
                </div>
              </div>

              {/* Your Rights */}
              <div>
                <h2 className="text-3xl font-bold mb-6 text-green-400">Your Rights</h2>
                <p className="text-gray-300 leading-relaxed mb-6">
                  You have the following rights regarding your personal data:
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Access and Portability</h4>
                      <p className="text-gray-300 text-sm">Request a copy of your personal data and transfer it to another service.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Correction and Updates</h4>
                      <p className="text-gray-300 text-sm">Update or correct any inaccurate personal information.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Deletion</h4>
                      <p className="text-gray-300 text-sm">Request deletion of your account and associated data.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact */}
              <div>
                <h2 className="text-3xl font-bold mb-6 text-green-400">Contact Us</h2>
                <p className="text-gray-300 leading-relaxed mb-6">
                  If you have any questions about this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-2xl p-6">
                  <div className="text-center">
                    <h3 className="font-semibold text-white mb-4">Team "Git Happens"</h3>
                    <div className="space-y-2 text-gray-300">
                      <div>📧 privacy@refoodify.com</div>
                      <div>🌐 www.refoodify.com/privacy</div>
                      <div>📍 Building a sustainable future, one byte at a time</div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
