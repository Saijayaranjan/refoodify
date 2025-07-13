"use client";

import { usePathname } from "next/navigation";
import { supabase } from "@/lib/supabase";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { useAuth } from "@/context/auth-provider";

export function HeaderWrapper() {
  const pathname = usePathname();
  const isLoginPage = pathname === '/login';
  const isDashboardPage = pathname === '/dashboard';
  const { user, loading } = useAuth();

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    window.location.href = '/';
  };

  const getUserInitials = (email: string) => {
    return email.charAt(0).toUpperCase();
  };

  const getUserDisplayName = (email: string) => {
    return email.split('@')[0];
  };
  
  // Hide header on login page only
  if (isLoginPage) {
    return null;
  }

  // Show loading state if auth is still loading
  if (loading) {
    return (
      <header className="sticky top-0 z-50 w-full border-b border-gray-700/50 bg-gray-900/95 backdrop-blur-sm">
        <div className="container mx-auto flex h-16 items-center justify-between px-6">
          <a href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
            <span className="text-2xl">🍃</span>
            <span className="font-bold text-xl bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent select-text">Refoodify</span>
          </a>
          <div className="flex items-center space-x-4">
            <div className="w-8 h-8 bg-gray-700 animate-pulse rounded-full"></div>
          </div>
        </div>
      </header>
    );
  }

  // Dashboard header
  if (isDashboardPage) {
    return (
      <header className="sticky top-0 z-50 w-full border-b border-gray-700/50 bg-gray-900/95 backdrop-blur-sm">
        <div className="container mx-auto flex h-16 items-center justify-between px-6">
          <a href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
            <span className="text-2xl">🍃</span>
            <span className="font-bold text-xl bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent select-text">Refoodify</span>
          </a>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="/" className="text-sm font-medium text-gray-300 hover:text-green-400 transition-colors">Home</a>
            <span className="text-sm font-medium text-gray-500 cursor-not-allowed opacity-50 relative">
              Leaderboard
              <span className="absolute -top-2 -right-2 text-xs bg-yellow-500 text-black px-1 rounded">Soon</span>
            </span>
            <a href="/how-it-works" className="text-sm font-medium text-gray-300 hover:text-green-400 transition-colors">How It Works</a>
          </nav>
          <div className="flex items-center space-x-4">
            {user && (
              <DropdownMenu.Root>
                <DropdownMenu.Trigger asChild>
                  <button className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-700/50 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500">
                    <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                      {getUserInitials(user.email || '')}
                    </div>
                    <span className="text-sm text-gray-300 hidden sm:block">{getUserDisplayName(user.email || '')}</span>
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </DropdownMenu.Trigger>

                <DropdownMenu.Portal>
                  <DropdownMenu.Content 
                    className="min-w-[200px] bg-gray-800 border border-gray-700 rounded-lg p-2 shadow-xl z-50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2"
                    sideOffset={5}
                    align="end"
                  >
                    <div className="px-3 py-2 border-b border-gray-700">
                      <p className="text-sm font-medium text-white">{getUserDisplayName(user.email || '')}</p>
                      <p className="text-xs text-gray-400">{user.email}</p>
                    </div>
                    
                    <DropdownMenu.Item className="flex items-center px-3 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white rounded focus:outline-none focus:bg-gray-700 cursor-pointer">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      Profile
                    </DropdownMenu.Item>
                    
                    <DropdownMenu.Item className="flex items-center px-3 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white rounded focus:outline-none focus:bg-gray-700 cursor-pointer">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      Settings
                    </DropdownMenu.Item>

                    <DropdownMenu.Separator className="h-px bg-gray-700 my-1" />
                    
                    <DropdownMenu.Item 
                      className="flex items-center px-3 py-2 text-sm text-red-400 hover:bg-red-500/10 hover:text-red-300 rounded focus:outline-none focus:bg-red-500/10 cursor-pointer"
                      onClick={handleSignOut}
                    >
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                      </svg>
                      Sign Out
                    </DropdownMenu.Item>
                  </DropdownMenu.Content>
                </DropdownMenu.Portal>
              </DropdownMenu.Root>
            )}
          </div>
        </div>
      </header>
    );
  }

  // Regular header for other pages
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-700 bg-gray-900/95 backdrop-blur">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <a href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
          <span className="text-2xl">🍃</span>
          <span className="font-bold text-xl text-green-500 select-text">Refoodify</span>
        </a>
        <nav className="hidden md:flex items-center space-x-6">
          <a href="/#features" className="text-sm font-medium text-white hover:text-green-500">Features</a>
          <a href="/how-it-works" className="text-sm font-medium text-white hover:text-green-500">How It Works</a>
          <span className="text-sm font-medium text-gray-500 cursor-not-allowed opacity-50 relative">
            Leaderboard
            <span className="absolute -top-1 -right-1 text-xs bg-yellow-500 text-black px-1 rounded">Soon</span>
          </span>
          <a href="/#about" className="text-sm font-medium text-white hover:text-green-500">About</a>
        </nav>
        <div className="flex items-center space-x-3">
          {user ? (
            <div className="flex items-center space-x-3">
              <a href="/dashboard" className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                Dashboard
              </a>
              <DropdownMenu.Root>
                <DropdownMenu.Trigger asChild>
                  <button className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-700/50 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500">
                    <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                      {getUserInitials(user.email || '')}
                    </div>
                  </button>
                </DropdownMenu.Trigger>

                <DropdownMenu.Portal>
                  <DropdownMenu.Content 
                    className="min-w-[200px] bg-gray-800 border border-gray-700 rounded-lg p-2 shadow-xl z-50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2"
                    sideOffset={5}
                    align="end"
                  >
                    <div className="px-3 py-2 border-b border-gray-700">
                      <p className="text-sm font-medium text-white">{getUserDisplayName(user.email || '')}</p>
                      <p className="text-xs text-gray-400">{user.email}</p>
                    </div>
                    
                    <DropdownMenu.Item className="flex items-center px-3 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white rounded focus:outline-none focus:bg-gray-700 cursor-pointer">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      Profile
                    </DropdownMenu.Item>
                    
                    <DropdownMenu.Item className="flex items-center px-3 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white rounded focus:outline-none focus:bg-gray-700 cursor-pointer">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      Settings
                    </DropdownMenu.Item>

                    <DropdownMenu.Separator className="h-px bg-gray-700 my-1" />
                    
                    <DropdownMenu.Item 
                      className="flex items-center px-3 py-2 text-sm text-red-400 hover:bg-red-500/10 hover:text-red-300 rounded focus:outline-none focus:bg-red-500/10 cursor-pointer"
                      onClick={handleSignOut}
                    >
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                      </svg>
                      Sign Out
                    </DropdownMenu.Item>
                  </DropdownMenu.Content>
                </DropdownMenu.Portal>
              </DropdownMenu.Root>
            </div>
          ) : (
            <a href="/login" className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
              Get Started
            </a>
          )}
        </div>
      </div>
    </header>
  );
}
