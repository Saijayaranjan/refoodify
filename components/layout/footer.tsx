import { ThemeSwitcher } from "../theme-switcher";

export const Footer = () => {
  return (
    <footer className="border-t border-gray-800 py-16 bg-gray-900/50">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
        {/* Logo and Description */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <span className="text-2xl">🍃</span>
            <span className="font-bold text-xl text-green-500">Refoodify</span>
          </div>
          <p className="text-gray-400 text-sm max-w-xs">
            AI-powered food waste management platform by Team GitHappens. 
            Transform your leftovers into value.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="space-y-4">
          <h3 className="font-semibold text-white">Quick Links</h3>
          <nav className="flex flex-col space-y-2">
            <a href="/" className="text-gray-400 hover:text-green-400 transition-colors text-sm">
              Home
            </a>
            <a href="/about" className="text-gray-400 hover:text-green-400 transition-colors text-sm">
              About
            </a>
            <a href="/how-it-works" className="text-gray-400 hover:text-green-400 transition-colors text-sm">
              How It Works
            </a>
            <a href="/dashboard" className="text-gray-400 hover:text-green-400 transition-colors text-sm">
              Dashboard
            </a>
          </nav>
        </div>

        {/* Theme and Copyright */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-gray-400 text-sm">Theme</span>
            <ThemeSwitcher />
          </div>
          <div className="text-gray-500 text-sm">
            <p>© 2025 Refoodify by Team GitHappens.</p>
            <p>All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
