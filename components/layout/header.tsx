import { ThemeSwitcher } from "../theme-switcher";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-800 bg-gray-900/80 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        {/* Logo */}
        <a href="/" className="flex items-center space-x-2">
          <span className="text-2xl">🍃</span>
          <span className="font-bold text-xl text-green-500">Refoodify</span>
        </a>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <a href="/" className="text-sm font-medium text-gray-300 hover:text-green-400 transition-colors">
            Home
          </a>
          <a href="/about" className="text-sm font-medium text-gray-300 hover:text-green-400 transition-colors">
            About
          </a>
          <a href="/how-it-works" className="text-sm font-medium text-gray-300 hover:text-green-400 transition-colors">
            How It Works
          </a>
          <span className="text-sm font-medium text-gray-500 cursor-not-allowed opacity-50 relative">
            Leaderboard
            <span className="absolute -top-1 -right-1 text-xs bg-yellow-500 text-black px-1 rounded">Soon</span>
          </span>
        </nav>

        {/* Theme Switcher */}
        <div className="flex items-center gap-3">
          <span className="hidden sm:block text-gray-400 text-sm">Theme</span>
          <ThemeSwitcher />
        </div>
      </div>
    </header>
  );
};
