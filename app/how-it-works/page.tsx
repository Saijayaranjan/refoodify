"use client";

import { motion } from "framer-motion";
import { Camera, Brain, Trophy, Coins, ArrowRight, PlayCircle } from "lucide-react";
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
      staggerChildren: 0.15
    }
  }
};

const steps = [
  {
    num: "01",
    title: "Capture Your Leftovers",
    description: "Simply take a photo of your food waste or input details manually. Our AI instantly recognizes ingredients, nutritional content, and suggests optimal disposal methods. Upload from your phone, tablet, or desktop - anywhere, anytime.",
    icon: Camera,
    features: ["Smart image recognition technology", "Automatic nutritional analysis", "Manual input option available"]
  },
  {
    num: "02",
    title: "AI-Powered Recommendations",
    description: "Our advanced machine learning analyzes your waste patterns, nutritional data, and local resources to generate personalized suggestions. Get recipes for leftovers, composting guides, donation locations, and even marketplace opportunities where you can sell valuable waste streams.",
    icon: Brain,
    features: ["Personalized reuse suggestions", "Creative recipe recommendations", "Optimal composting guidance"]
  },
  {
    num: "03",
    title: "Implement Solutions",
    description: "Follow our detailed implementation guides to transform waste into value. Cook creative leftover recipes, start efficient compost systems, connect with local food banks, or list valuable materials on our integrated marketplace. Every action is tracked and rewarded.",
    icon: Trophy,
    features: ["Detailed implementation guides", "Video tutorials available", "Community support network"]
  },
  {
    num: "04",
    title: "Get Rewarded",
    description: "Earn points for every sustainable action, compete globally on leaderboards, unlock achievement badges, and receive monetary rewards through weekly rewards. Convert your environmental impact into tangible rewards and cash payments.",
    icon: Coins,
    features: ["Points for sustainable actions", "Leaderboard competitions", "Monetary rewards through weekly payouts"]
  }
];

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-background text-foreground pt-24 pb-16 overflow-hidden">
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
              <span className="text-primary text-xs font-mono tracking-wide uppercase font-semibold">The Process</span>
            </motion.div>
            <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl font-bold tracking-tighter">
              How Refoodify Works
            </motion.h1>
            <motion.p variants={fadeIn} className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-serif leading-relaxed">
              Turn your food waste into money and environmental impact with our revolutionary AI-powered platform.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="space-y-32">
            {steps.map((step, index) => {
              const isEven = index % 2 === 1;
              return (
                <div key={index} className="grid md:grid-cols-2 gap-12 md:gap-24 items-center">
                  <motion.div 
                    initial={{ opacity: 0, x: isEven ? 40 : -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className={isEven ? "md:order-2" : ""}
                  >
                    <div className="relative aspect-square md:aspect-[4/3] w-full">
                      <div className="absolute inset-0 bg-primary/10 rounded-3xl blur-3xl -z-10 transform scale-95"></div>
                      <div className="absolute inset-0 bg-card/30 backdrop-blur-xl border border-white/5 rounded-3xl flex items-center justify-center p-8 group hover:border-primary/30 transition-all duration-500 hover:bg-card/40 shadow-2xl">
                        <div className="text-center transform transition-transform duration-500 group-hover:scale-110">
                          <step.icon className="w-24 h-24 text-primary mx-auto mb-6 opacity-80 group-hover:opacity-100 drop-shadow-[0_0_15px_rgba(212,255,51,0.3)]" />
                          <div className="text-2xl font-bold text-foreground font-serif tracking-tight">{step.title}</div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className={isEven ? "md:order-1" : ""}
                  >
                    <div className="text-primary text-6xl md:text-8xl font-bold font-serif opacity-20 mb-4 tracking-tighter leading-none -ml-1.5">{step.num}</div>
                    <h3 className="text-3xl font-bold mb-6 text-foreground tracking-tight">{step.title}</h3>
                    <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                      {step.description}
                    </p>
                    <ul className="space-y-4 text-muted-foreground">
                      {step.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2.5 flex-shrink-0 shadow-[0_0_8px_rgba(212,255,51,0.8)]"></div>
                          <span className="leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-4 relative mt-24 border-t border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_center,_var(--tw-gradient-stops))] from-primary/5 via-background to-background pointer-events-none -z-10"></div>
        <div className="container mx-auto text-center relative z-10 max-w-3xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeIn} className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Ready to Turn Waste into Wealth?</motion.h2>
            <motion.p variants={fadeIn} className="text-xl text-muted-foreground mb-10 font-serif leading-relaxed">
              Start your sustainable journey today and see real results within your first week.
            </motion.p>
            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/dashboard" className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground font-semibold text-sm uppercase tracking-wider hover:bg-primary/90 transition-all rounded-sm gap-2">
                Start Earning Today
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="#" className="inline-flex items-center justify-center px-8 py-4 border border-white/10 text-foreground font-semibold text-sm uppercase tracking-wider hover:bg-white/5 transition-all rounded-sm gap-2">
                Watch Demo Video
                <PlayCircle className="w-4 h-4 text-primary" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
