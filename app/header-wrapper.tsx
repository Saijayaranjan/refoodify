"use client";

import { usePathname } from "next/navigation";
import { supabase } from "@/lib/supabase";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { useAuth } from "@/context/auth-provider";
import { Leaf, LogOut, User, Settings } from "lucide-react";

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

  const Logo = () => (
    <a href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
      <Leaf className="w-6 h-6 text-primary" />
      <span className="font-bold text-xl text-foreground tracking-tight select-text">Refoodify</span>
    </a>
  );

  // Show loading state if auth is still loading
  if (loading) {
    return (
      <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-background/80 backdrop-blur-md">
        <div className="container mx-auto flex h-16 items-center justify-between px-6">
          <Logo />
          <div className="flex items-center space-x-4">
            <div className="w-8 h-8 bg-card animate-pulse rounded-full border border-white/5"></div>
          </div>
        </div>
      </header>
    );
  }

  // Dashboard header
  if (isDashboardPage) {
    return (
      <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-background/80 backdrop-blur-md">
        <div className="container mx-auto flex h-16 items-center justify-between px-6">
          <Logo />
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Home</a>
            <a href="/about" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">About</a>
            <span className="text-sm font-medium text-muted-foreground/50 cursor-not-allowed relative">
              Leaderboard
              <span className="absolute -top-2 -right-3 text-[10px] bg-primary/20 text-primary border border-primary/30 px-1 rounded-sm uppercase tracking-wider">Soon</span>
            </span>
            <a href="/how-it-works" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">How It Works</a>
          </nav>
          <div className="flex items-center space-x-4">
            {user && (
              <DropdownMenu.Root>
                <DropdownMenu.Trigger asChild>
                  <button className="flex items-center space-x-2 p-1.5 rounded-lg hover:bg-white/5 transition-colors focus:outline-none border border-transparent hover:border-white/10">
                    <div className="w-8 h-8 bg-primary/10 border border-primary/20 rounded-full flex items-center justify-center text-primary font-semibold text-sm">
                      {getUserInitials(user.email || '')}
                    </div>
                    <span className="text-sm text-foreground hidden sm:block font-medium">{getUserDisplayName(user.email || '')}</span>
                  </button>
                </DropdownMenu.Trigger>

                <DropdownMenu.Portal>
                  <DropdownMenu.Content 
                    className="min-w-[200px] bg-background border border-white/10 rounded-lg p-2 shadow-2xl z-50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2"
                    sideOffset={8}
                    align="end"
                  >
                    <div className="px-3 py-3 border-b border-white/5 mb-1 bg-card/30 rounded-t-md">
                      <p className="text-sm font-medium text-foreground">{getUserDisplayName(user.email || '')}</p>
                      <p className="text-xs text-muted-foreground truncate">{user.email}</p>
                    </div>
                    
                    <DropdownMenu.Item className="flex items-center px-3 py-2.5 text-sm text-foreground/80 hover:bg-white/5 hover:text-foreground rounded-md focus:outline-none focus:bg-white/5 cursor-pointer outline-none transition-colors">
                      <User className="w-4 h-4 mr-3 text-muted-foreground" />
                      Profile
                    </DropdownMenu.Item>
                    
                    <DropdownMenu.Item className="flex items-center px-3 py-2.5 text-sm text-foreground/80 hover:bg-white/5 hover:text-foreground rounded-md focus:outline-none focus:bg-white/5 cursor-pointer outline-none transition-colors">
                      <Settings className="w-4 h-4 mr-3 text-muted-foreground" />
                      Settings
                    </DropdownMenu.Item>

                    <DropdownMenu.Separator className="h-px bg-white/5 my-1" />
                    
                    <DropdownMenu.Item 
                      className="flex items-center px-3 py-2.5 text-sm text-red-400 hover:bg-red-500/10 rounded-md focus:outline-none focus:bg-red-500/10 cursor-pointer outline-none transition-colors"
                      onClick={handleSignOut}
                    >
                      <LogOut className="w-4 h-4 mr-3" />
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
    <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Logo />
        <nav className="hidden md:flex items-center space-x-8">
          <a href="/#features" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Features</a>
          <a href="/about" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">About</a>
          <a href="/how-it-works" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">How It Works</a>
          <span className="text-sm font-medium text-muted-foreground/50 cursor-not-allowed relative">
            Leaderboard
            <span className="absolute -top-2 -right-3 text-[10px] bg-primary/20 text-primary border border-primary/30 px-1 rounded-sm uppercase tracking-wider">Soon</span>
          </span>
        </nav>
        <div className="flex items-center space-x-4">
          {user ? (
            <div className="flex items-center space-x-3">
              <a href="/dashboard" className="px-5 py-2.5 bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors">
                Dashboard
              </a>
              <DropdownMenu.Root>
                <DropdownMenu.Trigger asChild>
                  <button className="flex items-center space-x-2 p-1.5 rounded-lg hover:bg-white/5 transition-colors focus:outline-none border border-transparent hover:border-white/10">
                    <div className="w-8 h-8 bg-primary/10 border border-primary/20 rounded-full flex items-center justify-center text-primary font-semibold text-sm">
                      {getUserInitials(user.email || '')}
                    </div>
                  </button>
                </DropdownMenu.Trigger>

                <DropdownMenu.Portal>
                  <DropdownMenu.Content 
                    className="min-w-[200px] bg-background border border-white/10 rounded-lg p-2 shadow-2xl z-50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2"
                    sideOffset={8}
                    align="end"
                  >
                    <div className="px-3 py-3 border-b border-white/5 mb-1 bg-card/30 rounded-t-md">
                      <p className="text-sm font-medium text-foreground">{getUserDisplayName(user.email || '')}</p>
                      <p className="text-xs text-muted-foreground truncate">{user.email}</p>
                    </div>
                    
                    <DropdownMenu.Item className="flex items-center px-3 py-2.5 text-sm text-foreground/80 hover:bg-white/5 hover:text-foreground rounded-md focus:outline-none focus:bg-white/5 cursor-pointer outline-none transition-colors">
                      <User className="w-4 h-4 mr-3 text-muted-foreground" />
                      Profile
                    </DropdownMenu.Item>
                    
                    <DropdownMenu.Item className="flex items-center px-3 py-2.5 text-sm text-foreground/80 hover:bg-white/5 hover:text-foreground rounded-md focus:outline-none focus:bg-white/5 cursor-pointer outline-none transition-colors">
                      <Settings className="w-4 h-4 mr-3 text-muted-foreground" />
                      Settings
                    </DropdownMenu.Item>

                    <DropdownMenu.Separator className="h-px bg-white/5 my-1" />
                    
                    <DropdownMenu.Item 
                      className="flex items-center px-3 py-2.5 text-sm text-red-400 hover:bg-red-500/10 rounded-md focus:outline-none focus:bg-red-500/10 cursor-pointer outline-none transition-colors"
                      onClick={handleSignOut}
                    >
                      <LogOut className="w-4 h-4 mr-3" />
                      Sign Out
                    </DropdownMenu.Item>
                  </DropdownMenu.Content>
                </DropdownMenu.Portal>
              </DropdownMenu.Root>
            </div>
          ) : (
            <a href="/login" className="px-5 py-2.5 bg-primary text-primary-foreground font-medium text-sm hover:bg-primary/90 transition-colors">
              Initialize
            </a>
          )}
        </div>
      </div>
    </header>
  );
}
