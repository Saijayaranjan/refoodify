"use client";

import { motion } from "framer-motion";
import { Target, Globe, TriangleAlert, CircleCheck, Code2, ArrowRight } from "lucide-react";
import Link from "next/link";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground pt-24 pb-16">
      {/* Hero Section */}
      <section className="px-4 relative mb-32">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-background to-background pointer-events-none -z-10"></div>
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="space-y-6"
          >
            <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-4 py-1.5 mb-2 bg-primary/10 border border-primary/20 rounded-full">
              <Code2 className="w-4 h-4 text-primary" />
              <span className="text-primary text-xs font-mono tracking-wide uppercase font-semibold">Hackathon Project by GitHappens</span>
            </motion.div>
            <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl font-bold tracking-tighter">
              About Refoodify
            </motion.h1>
            <motion.p variants={fadeIn} className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-serif leading-relaxed">
              Transforming food waste into environmental impact and economic opportunity through AI-powered innovation.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 px-4 border-t border-white/5 bg-card/10">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeIn} className="inline-flex items-center gap-2 mb-6">
                <Target className="w-5 h-5 text-primary" />
                <span className="text-primary text-sm font-mono tracking-widest uppercase">Mission</span>
              </motion.div>
              <motion.h2 variants={fadeIn} className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Our Mission</motion.h2>
              <motion.p variants={fadeIn} className="text-lg text-muted-foreground mb-6 leading-relaxed">
                We believe that food waste is not just an environmental problem – it's a missed opportunity. Every day, millions of tons of food are wasted while people struggle with hunger and environmental degradation continues.
              </motion.p>
              <motion.p variants={fadeIn} className="text-lg text-muted-foreground leading-relaxed">
                Refoodify was created to bridge this gap by empowering individuals and communities to turn their food waste into value, creating a sustainable cycle that benefits both people and the planet.
              </motion.p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-primary/20 rounded-3xl blur-3xl -z-10"></div>
              <div className="relative bg-card/40 backdrop-blur-xl border border-white/10 rounded-3xl p-12 text-center shadow-2xl">
                <div className="inline-flex p-4 rounded-2xl bg-white/5 border border-white/10 mb-6">
                  <Globe className="w-12 h-12 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4 tracking-tight">Global Impact Vision</h3>
                <p className="text-muted-foreground leading-relaxed">Creating measurable positive impact in communities through technology and awareness</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Problem & Solution Section */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Problem */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card/30 backdrop-blur-sm border border-white/5 rounded-3xl p-10 hover:border-white/10 transition-colors"
            >
              <div className="inline-flex p-3 rounded-xl bg-red-500/10 text-red-500 mb-6">
                <TriangleAlert className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-bold text-foreground mb-6 tracking-tight">The Problem</h3>
              <div className="space-y-5 text-muted-foreground">
                {[
                  "1.3 billion tons of food wasted globally each year",
                  "Food waste accounts for 8% of global greenhouse gas emissions",
                  "$1 trillion worth of food lost annually",
                  "Limited awareness of waste reduction methods"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-red-500/50 rounded-full mt-2.5 flex-shrink-0"></div>
                    <span className="leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Solution */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-primary/5 backdrop-blur-sm border border-primary/20 rounded-3xl p-10 hover:border-primary/30 transition-colors relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2"></div>
              <div className="inline-flex p-3 rounded-xl bg-primary/20 text-primary mb-6">
                <CircleCheck className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-bold text-foreground mb-6 tracking-tight">Our Solution</h3>
              <div className="space-y-5 text-foreground/80">
                {[
                  "AI-powered food waste recognition and analysis",
                  "Personalized suggestions for reuse and reduction",
                  "Gamification through points and rewards",
                  "Community-driven impact measurement"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2.5 flex-shrink-0"></div>
                    <span className="leading-relaxed font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-4 relative border-t border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_center,_var(--tw-gradient-stops))] from-primary/5 via-background to-background pointer-events-none -z-10"></div>
        <div className="container mx-auto text-center relative z-10 max-w-3xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeIn} className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Join Our Mission</motion.h2>
            <motion.p variants={fadeIn} className="text-xl text-muted-foreground mb-10 font-serif leading-relaxed">
              Every small action creates ripples of change. Start your journey with Refoodify today and be part of the solution.
            </motion.p>
            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/dashboard" className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground font-semibold text-sm uppercase tracking-wider hover:bg-primary/90 transition-all rounded-sm gap-2">
                Start Making Impact
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/how-it-works" className="inline-flex items-center justify-center px-8 py-4 border border-white/10 text-foreground font-semibold text-sm uppercase tracking-wider hover:bg-white/5 transition-all rounded-sm">
                Learn How It Works
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
