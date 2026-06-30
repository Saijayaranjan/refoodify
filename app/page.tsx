"use client";

import { motion } from "framer-motion";
import { ArrowRight, Leaf, ChartBar, ShieldCheck, Zap } from "lucide-react";

export default function RefoodifyHomepage() {
  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-hidden selection:bg-primary selection:text-primary-foreground">
      
      {/* Abstract Background Orbs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] opacity-20 pointer-events-none z-0">
        <div className="absolute inset-0 bg-primary/30 rounded-full blur-[120px] mix-blend-screen" />
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 md:pt-48 md:pb-32 px-4 z-10 flex flex-col items-center justify-center min-h-[90vh]">
        <motion.div 
          className="container max-w-4xl mx-auto flex flex-col items-center text-center gap-8 z-10"
          variants={staggerContainer}
          initial="hidden"
          animate="show"
        >

          
          <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter mb-6 leading-[1.1]">
            Refoodify <br className="hidden md:block" />
            <span className="font-serif italic text-muted-foreground/80 font-normal">Intelligent</span> Waste
          </motion.h1>
          
          <motion.p variants={fadeInUp} className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            Food waste is an untapped resource. Our platform categorizes and monetizes your surplus with precision AI, transforming an ecological liability into a measurable asset.
          </motion.p>
          
          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full">
            <a href="/login" className="group relative inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground font-medium text-sm transition-all hover:bg-primary/90 w-full sm:w-auto">
              Join the platform
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <button className="px-8 py-4 text-sm font-medium border border-white/10 hover:bg-white/5 transition-colors w-full sm:w-auto">
              Read the manifesto
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* The Opportunity (Data/Stats) */}
      <section className="py-24 border-y border-white/5 bg-background relative overflow-hidden">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
            <div>
              <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-4">[ THE OPPORTUNITY ]</p>
              <h2 className="text-3xl md:text-5xl font-serif tracking-tight">The <span className="italic text-primary">$1.3 Trillion</span> Paradox</h2>
            </div>
            <p className="text-muted-foreground max-w-md text-sm leading-relaxed">
              Global food waste represents a colossal inefficiency. We convert this deficit into structured, monetizable data streams.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5 border border-white/5">
            {[
              { stat: "40%", label: "Global Inefficiency", desc: "Of all produced food goes to waste annually." },
              { stat: "$1.3T", label: "Economic Deficit", desc: "Lost annually across the global supply chain." },
              { stat: "3.3Gt", label: "Carbon Impact", desc: "CO₂ emissions contributing to climate change." }
            ].map((item, i) => (
              <div key={i} className="bg-background p-8 md:p-12 hover:bg-card/50 transition-colors">
                <div className="text-5xl font-light mb-4 font-serif text-primary">{item.stat}</div>
                <h4 className="text-base font-medium mb-2">{item.label}</h4>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-32 bg-background relative">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-24 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-6">Engineered for precision.</h2>
            <p className="text-muted-foreground">
              A comprehensive toolkit for categorizing, analyzing, and monetizing organic surplus. Built for scale.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Zap, title: "Algorithmic Matching", desc: "Our models predict optimal redistribution pathways for any organic material." },
              { icon: ChartBar, title: "Predictive Analytics", desc: "Gain visibility into your waste footprint and optimize procurement dynamically." },
              { icon: ShieldCheck, title: "Verified Offsets", desc: "Generate verifiable sustainability credits from documented waste diversion." }
            ].map((feature, i) => (
              <div key={i} className="group p-8 border border-white/5 bg-card/20 hover:bg-card/40 transition-colors backdrop-blur-sm">
                <div className="w-12 h-12 rounded-none bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-5 h-5 text-primary" />
                </div>
                <h4 className="text-lg font-medium mb-3">{feature.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-primary text-primary-foreground">
        <div className="container max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-serif italic mb-8 text-primary-foreground/90">
            Revalue the discarded.
          </h2>
          <p className="text-lg md:text-xl text-primary-foreground/70 mb-10 max-w-2xl mx-auto font-light">
            Join a vanguard of organizations transforming waste from a cost center into a measurable asset.
          </p>
          <a href="/login" className="inline-flex items-center justify-center px-10 py-5 bg-background text-foreground font-medium hover:bg-white/90 transition-colors">
            Initialize Workspace
          </a>
        </div>
      </section>
    </div>
  );
}
