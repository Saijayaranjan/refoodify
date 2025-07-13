export default function ChangelogPage() {
  return (
    <div className="relative min-h-screen bg-gray-900 text-white pt-20">
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-6xl mb-6">📋</div>
          <h1 className="text-4xl font-bold mb-4 text-white">Changelog Coming Soon</h1>
          <p className="text-xl text-gray-300 mb-8">
            We're working on bringing you detailed updates and improvements.
          </p>
          <a 
            href="/dashboard" 
            className="inline-block px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors mr-4"
          >
            Go to Dashboard
          </a>
          <a 
            href="/" 
            className="inline-block px-6 py-3 border border-gray-600 hover:border-gray-500 text-white rounded-lg transition-colors"
          >
            Back to Home
          </a>
        </div>
      </div>
    </div>
  );
}
