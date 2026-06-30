"use client";

import { useState, useEffect, Suspense } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter, useSearchParams } from "next/navigation";
import { useAuth } from "@/context/auth-provider";
import { motion } from "framer-motion";
import { Leaf, CircleAlert, CircleCheck, Loader2, ArrowRight, ArrowLeft } from "lucide-react";
import Link from "next/link";

function LoginContent() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const [redirecting, setRedirecting] = useState(false);
  const [message, setMessage] = useState("");
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectTo = searchParams.get('redirectTo') || '/dashboard';
  const { user, loading: authLoading } = useAuth();

  useEffect(() => {
    // If auth is still loading, wait
    if (authLoading) {
      return;
    }

    // If user is already logged in, redirect
    if (user) {
      router.replace(redirectTo);
    }
  }, [user, authLoading, router, redirectTo]);

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      if (isLogin) {
        const { data, error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });
        
        if (error) throw error;
        
        if (data?.user) {
          setMessage("Login successful! Redirecting...");
          setLoading(false);
          setRedirecting(true);
          
          // Small delay then redirect
          setTimeout(() => {
            window.location.href = redirectTo;
          }, 800);
        }
      } else {
        const { data, error } = await supabase.auth.signUp({
          email,
          password,
        });
        
        if (error) throw error;
        
        if (data?.user) {
          setMessage("Account created! Please check your email for verification.");
          setLoading(false);
        }
      }
    } catch (error: any) {
      setMessage(error.message || "An error occurred");
      setLoading(false);
    }
  };

  const signInWithGoogle = async () => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo: `${window.location.origin}${redirectTo}`,
        },
      });
      if (error) throw error;
    } catch (error: any) {
      setMessage(error.message || "An error occurred with Google sign in");
    }
  };

  const isError = message.toLowerCase().includes("error") || message.toLowerCase().includes("invalid");

  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-background to-background pointer-events-none -z-10"></div>
      <div className="absolute top-20 left-20 w-32 h-32 bg-primary/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-20 right-20 w-48 h-48 bg-primary/5 rounded-full blur-3xl -z-10"></div>

      {/* Back Button Header */}
      <Link href="/" className="fixed top-8 left-8 md:top-10 md:left-10 text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-2 text-sm font-medium z-50 bg-background/50 backdrop-blur-md px-4 py-2 rounded-full border border-white/5">
        <ArrowLeft className="w-4 h-4" />
        Back to Home
      </Link>

      <motion.div 
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative z-10 w-full max-w-md"
      >
        {/* Header */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center justify-center space-x-2 mb-6 group">
            <div className="p-2 rounded-xl bg-card border border-white/10 group-hover:border-primary/50 transition-colors">
              <Leaf className="w-6 h-6 text-primary" />
            </div>
            <span className="font-bold text-2xl tracking-tight text-foreground group-hover:text-primary transition-colors">Refoodify</span>
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold mb-3 tracking-tight font-serif">
            {isLogin ? "Welcome Back" : "Join Refoodify"}
          </h1>
          <p className="text-muted-foreground">
            {isLogin 
              ? "Sign in to continue reducing food waste" 
              : "Start your journey to turn waste into impact"
            }
          </p>
        </div>

        {/* Auth Form */}
        <div className="bg-card/40 backdrop-blur-2xl border border-white/10 rounded-2xl p-8 shadow-2xl">
          <form onSubmit={handleAuth} className="space-y-5">
            <div className="space-y-1.5">
              <label htmlFor="email" className="block text-sm font-medium text-foreground/80">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-background/50 border border-white/10 rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all"
                placeholder="name@example.com"
                required
              />
            </div>

            <div className="space-y-1.5">
              <label htmlFor="password" className="block text-sm font-medium text-foreground/80">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-background/50 border border-white/10 rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all"
                placeholder="••••••••"
                required
                minLength={6}
              />
            </div>

            {message && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                className={`text-sm p-4 rounded-lg flex items-start gap-3 border ${
                isError
                  ? "bg-red-500/10 border-red-500/20 text-red-400" 
                  : "bg-primary/10 border-primary/20 text-primary"
              }`}>
                {isError ? <CircleAlert className="w-5 h-5 flex-shrink-0" /> : <CircleCheck className="w-5 h-5 flex-shrink-0" />}
                <p className="leading-relaxed pt-0.5">{message}</p>
              </motion.div>
            )}

            <button
              type="submit"
              disabled={loading || redirecting}
              className="w-full h-12 flex items-center justify-center bg-primary text-primary-foreground font-semibold text-sm uppercase tracking-wider rounded-lg hover:bg-primary/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed mt-4"
            >
              {redirecting ? (
                <span className="flex items-center gap-2">
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Redirecting...
                </span>
              ) : loading ? (
                <span className="flex items-center gap-2">
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Processing...
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  {isLogin ? "Sign In" : "Create Account"}
                  <ArrowRight className="w-4 h-4" />
                </span>
              )}
            </button>
          </form>

          {/* Google Sign In */}
          <div className="mt-8">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/10"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-card text-muted-foreground rounded-full text-xs uppercase tracking-wider font-medium">Or continue with</span>
              </div>
            </div>

            <button
              onClick={signInWithGoogle}
              className="mt-6 w-full h-12 bg-white hover:bg-gray-100 text-gray-900 font-medium text-sm rounded-lg transition-colors flex items-center justify-center space-x-3 border border-gray-200"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              <span>Continue with Google</span>
            </button>
          </div>

          {/* Toggle Login/Signup */}
          <div className="mt-8 text-center">
            <button
              onClick={() => {
                setIsLogin(!isLogin);
                setMessage("");
              }}
              className="text-muted-foreground hover:text-primary text-sm font-medium transition-colors"
            >
              {isLogin 
                ? "Don't have an account? Sign up" 
                : "Already have an account? Sign in"
              }
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-background flex items-center justify-center"><Loader2 className="w-8 h-8 animate-spin text-primary" /></div>}>
      <LoginContent />
    </Suspense>
  );
}
