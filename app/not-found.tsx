export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col justify-center items-center bg-gray-900 text-white px-4">
      <div className="text-center space-y-6">
        <div className="space-y-2">
          <h1 className="text-8xl font-bold text-green-500">404</h1>
          <h2 className="text-4xl font-bold">Page not found</h2>
          <p className="text-xl text-gray-400 max-w-md">
            The page you're trying to access does not exist.
          </p>
        </div>
        <a 
          href="/" 
          className="inline-flex items-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-colors"
        >
          Go back to Homepage
        </a>
      </div>
    </div>
  );
}
