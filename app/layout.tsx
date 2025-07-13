import "../styles/globals.css";
import React from "react";
import { HeaderWrapper } from "./header-wrapper";
import { AuthProvider } from "@/context/auth-provider";

// Simple footer component
function SimpleFooter() {
  return (
    <footer className="border-t border-gray-700 bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <span className="text-xl">🍃</span>
            <span className="font-semibold text-green-500">Refoodify</span>
          </div>
          <nav className="flex space-x-6">
            <a href="/privacy" className="text-sm text-gray-400 hover:text-green-500">Privacy Policy</a>
            <a href="/terms" className="text-sm text-gray-400 hover:text-green-500">Terms of Service</a>
            <a href="/contact" className="text-sm text-gray-400 hover:text-green-500">Contact</a>
          </nav>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm text-gray-400">
          © 2025 Refoodify by Team "Git Happens". All rights reserved.
        </div>
      </div>
    </footer>
  );
}

const geist = {
  variable: '--font-sans'
};

const geistMono = {
  variable: '--font-mono'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html suppressHydrationWarning lang="en" className="dark">
      <head>
        <title>Refoodify - AI-Powered Food Waste Management</title>
        <meta name="description" content="Transform your food waste into valuable resources with AI-powered suggestions, nutrition insights, and gamified sustainability." />
      </head>
      <body className={`min-h-svh max-w-[100vw] bg-gray-900 text-white select-text ${geistMono.variable} ${geist.variable} font-sans`}>
        <AuthProvider>
          <HeaderWrapper />
          <main className="min-h-[calc(100svh-var(--header-height))]">{children}</main>
          {/* Newsletter Section */}
          <section className="py-12 bg-gray-800">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-2xl font-bold mb-4 text-white">Stay Updated with Refoodify</h2>
              <p className="text-gray-300 mb-6">Get the latest tips on reducing food waste and maximizing your impact.</p>
              <div className="flex gap-2 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-1 px-4 py-2 border border-gray-600 rounded-lg bg-gray-700 text-white placeholder-gray-400"
                />
                <button className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </section>
          <SimpleFooter />
        </AuthProvider>
      </body>
    </html>
  );
}