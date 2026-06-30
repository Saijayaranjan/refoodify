import "../styles/globals.css";
import React from "react";
import { HeaderWrapper } from "./header-wrapper";
import { AuthProvider } from "@/context/auth-provider";
import { IBM_Plex_Serif } from "next/font/google";

const ibmPlexSerif = IBM_Plex_Serif({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-serif",
});

import { Leaf } from "lucide-react";

// Simple footer component
function SimpleFooter() {
  return (
    <footer className="border-t border-white/5 bg-background text-muted-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center space-x-2">
            <Leaf className="w-5 h-5 text-primary" />
            <span className="font-semibold text-primary tracking-tight">Refoodify</span>
          </div>
          <nav className="flex space-x-8">
            <a href="/privacy" className="text-sm hover:text-primary transition-colors">Privacy</a>
            <a href="/terms" className="text-sm hover:text-primary transition-colors">Terms</a>
            <a href="/contact" className="text-sm hover:text-primary transition-colors">Contact</a>
          </nav>
        </div>
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono">
          <span>© {new Date().getFullYear()} Refoodify.</span>
          <span>Designed with precision.</span>
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
        <title>Refoodify — Intelligent Food Management</title>
        <meta name="description" content="Categorize and monetize your food waste with precision AI." />
      </head>
      <body className={`min-h-svh max-w-[100vw] bg-background text-foreground antialiased selection:bg-primary selection:text-primary-foreground ${geistMono.variable} ${geist.variable} ${ibmPlexSerif.variable} font-sans`}>
        <AuthProvider>
          <HeaderWrapper />
          <main className="min-h-[calc(100svh-var(--header-height))]">{children}</main>
          {/* Minimal Newsletter Section */}
          <section className="py-24 bg-card/30 border-t border-white/5">
            <div className="container mx-auto px-4 text-center max-w-2xl">
              <h2 className="font-serif text-3xl font-medium tracking-tight mb-4 text-foreground">
                Join the intelligence network.
              </h2>
              <p className="text-muted-foreground mb-8">
                Receive curated insights on zero-waste optimization and platform updates.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="name@example.com" 
                  className="flex-1 px-4 py-3 border border-white/10 rounded-none bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors"
                />
                <button className="px-6 py-3 bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors">
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