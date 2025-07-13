export default function TermsOfServicePage() {
  return (
    <div className="relative min-h-screen bg-gray-900 text-white pt-20">
      {/* Hero Section */}
      <section className="py-24 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-900 to-purple-900/20"></div>
        <div className="container mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-purple-500/10 border border-purple-500/20 rounded-full">
            <span className="text-purple-400 text-sm font-medium">⚖️ Legal</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Terms of Service
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            These terms govern your use of Refoodify. Please read them carefully before using our platform.
          </p>
          <div className="mt-8 text-sm text-gray-400">
            Last updated: July 13, 2025
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-8 md:p-12">
            
            <div className="space-y-12">
              
              {/* Agreement */}
              <div>
                <h2 className="text-3xl font-bold mb-6 text-green-400">Agreement to Terms</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  By accessing and using Refoodify, an AI-powered food waste management platform developed by Team "Git Happens", you accept and agree to be bound by the terms and provision of this agreement.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  If you do not agree to abide by the above, please do not use this service. Our motto "Make money with waste" reflects our commitment to turning environmental challenges into sustainable, profitable solutions.
                </p>
              </div>

              {/* Platform Description */}
              <div>
                <h2 className="text-3xl font-bold mb-6 text-green-400">Platform Description</h2>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Refoodify is an innovative platform that combines AI technology, sustainability principles, and gamification to help users:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-gray-800/50 border border-gray-700/50 rounded-xl p-4">
                    <h3 className="font-semibold text-white mb-2">🤖 AI-Powered Solutions</h3>
                    <p className="text-gray-300 text-sm">Get smart recommendations for reusing leftovers and reducing waste</p>
                  </div>
                  <div className="bg-gray-800/50 border border-gray-700/50 rounded-xl p-4">
                    <h3 className="font-semibold text-white mb-2">🏆 Gamified Experience</h3>
                    <p className="text-gray-300 text-sm">Earn points, compete on leaderboards, and unlock achievements</p>
                  </div>
                  <div className="bg-gray-800/50 border border-gray-700/50 rounded-xl p-4">
                    <h3 className="font-semibold text-white mb-2">🌱 Composting Intelligence</h3>
                    <p className="text-gray-300 text-sm">Learn optimal composting techniques with detailed guidance</p>
                  </div>
                  <div className="bg-gray-800/50 border border-gray-700/50 rounded-xl p-4">
                    <h3 className="font-semibold text-white mb-2">💰 Value Creation</h3>
                    <p className="text-gray-300 text-sm">Transform waste into potential monetary value through our marketplace</p>
                  </div>
                </div>
              </div>

              {/* User Responsibilities */}
              <div>
                <h2 className="text-3xl font-bold mb-6 text-green-400">User Responsibilities</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-white">Account Security</h3>
                    <ul className="space-y-2 text-gray-300 ml-4">
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Maintain the confidentiality of your account credentials</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Notify us immediately of any unauthorized access</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Provide accurate and truthful information</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-white">Content Guidelines</h3>
                    <ul className="space-y-2 text-gray-300 ml-4">
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Upload only appropriate food waste images</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Respect community guidelines when sharing recipes</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Do not share harmful or misleading information</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Prohibited Activities */}
              <div>
                <h2 className="text-3xl font-bold mb-6 text-green-400">Prohibited Activities</h2>
                <p className="text-gray-300 leading-relaxed mb-6">
                  The following activities are strictly prohibited on our platform:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4">
                    <h3 className="font-semibold text-red-400 mb-2">🚫 System Abuse</h3>
                    <p className="text-gray-300 text-sm">Attempting to manipulate AI algorithms or game the points system</p>
                  </div>
                  <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4">
                    <h3 className="font-semibold text-red-400 mb-2">🚫 Data Misuse</h3>
                    <p className="text-gray-300 text-sm">Extracting or scraping user data without authorization</p>
                  </div>
                  <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4">
                    <h3 className="font-semibold text-red-400 mb-2">🚫 Harmful Content</h3>
                    <p className="text-gray-300 text-sm">Uploading inappropriate, offensive, or dangerous content</p>
                  </div>
                  <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4">
                    <h3 className="font-semibold text-red-400 mb-2">🚫 Commercial Spam</h3>
                    <p className="text-gray-300 text-sm">Using the platform for unauthorized commercial activities</p>
                  </div>
                </div>
              </div>

              {/* Intellectual Property */}
              <div>
                <h2 className="text-3xl font-bold mb-6 text-green-400">Intellectual Property</h2>
                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-2xl p-6">
                    <h3 className="text-lg font-semibold mb-3 text-white">Our Rights</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Refoodify, its AI algorithms, design, and all associated intellectual property are owned by Team "Git Happens". 
                      Users are granted a limited license to use the platform for personal, non-commercial purposes.
                    </p>
                  </div>
                  <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-2xl p-6">
                    <h3 className="text-lg font-semibold mb-3 text-white">User Content</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      You retain ownership of content you create (recipes, photos, etc.) but grant us a license to use it 
                      for platform improvement, AI training, and community features. We respect your creative contributions.
                    </p>
                  </div>
                </div>
              </div>

              {/* Limitation of Liability */}
              <div>
                <h2 className="text-3xl font-bold mb-6 text-green-400">Limitation of Liability</h2>
                <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-2xl p-6">
                  <p className="text-gray-300 leading-relaxed">
                    While we strive to provide accurate AI recommendations and nutritional information, Refoodify is provided "as is" 
                    without warranties. Team "Git Happens" shall not be liable for any damages arising from the use of our platform. 
                    Users are responsible for making informed decisions about food safety and waste management practices.
                  </p>
                </div>
              </div>

              {/* Termination */}
              <div>
                <h2 className="text-3xl font-bold mb-6 text-green-400">Termination</h2>
                <p className="text-gray-300 leading-relaxed mb-6">
                  We reserve the right to terminate or suspend accounts that violate these terms. Users may also terminate their accounts at any time.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gray-800/50 border border-gray-700/50 rounded-xl p-4">
                    <h3 className="font-semibold text-white mb-2">User Initiated</h3>
                    <p className="text-gray-300 text-sm">Delete your account and data through account settings</p>
                  </div>
                  <div className="bg-gray-800/50 border border-gray-700/50 rounded-xl p-4">
                    <h3 className="font-semibold text-white mb-2">Platform Initiated</h3>
                    <p className="text-gray-300 text-sm">Termination for terms violations with appropriate notice</p>
                  </div>
                </div>
              </div>

              {/* Changes to Terms */}
              <div>
                <h2 className="text-3xl font-bold mb-6 text-green-400">Changes to Terms</h2>
                <p className="text-gray-300 leading-relaxed">
                  We may modify these terms from time to time. Significant changes will be communicated through the platform 
                  or via email. Continued use of Refoodify after changes constitutes acceptance of the new terms.
                </p>
              </div>

              {/* Contact */}
              <div>
                <h2 className="text-3xl font-bold mb-6 text-green-400">Contact Information</h2>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Questions about these Terms of Service? Contact Team "Git Happens":
                </p>
                <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-2xl p-6">
                  <div className="text-center">
                    <h3 className="font-semibold text-white mb-4">Team "Git Happens"</h3>
                    <div className="space-y-2 text-gray-300">
                      <div>📧 legal@refoodify.com</div>
                      <div>🌐 www.refoodify.com/terms</div>
                      <div>💡 "Make money with waste" - Our mission for a sustainable future</div>
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
