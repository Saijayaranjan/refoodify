"use client";

import { motion } from "framer-motion";
import { Scale, FileText, CheckCircle2, ShieldAlert, ArrowRight, Gavel, FileCheck2, AlertCircle } from "lucide-react";
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

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-background text-foreground pt-24 pb-16">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-background to-background pointer-events-none -z-10"></div>
        
        <div className="container max-w-4xl mx-auto px-4 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-center"
          >
            <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-3 py-1 mb-6 border border-white/10 rounded-full bg-white/5 backdrop-blur-md">
              <Scale className="w-4 h-4 text-primary" />
              <span className="text-xs font-medium tracking-wide uppercase text-muted-foreground">Legal</span>
            </motion.div>
            
            <motion.h1 variants={fadeIn} className="text-4xl md:text-6xl font-semibold tracking-tighter mb-6 leading-tight">
              Terms of <span className="font-serif italic text-muted-foreground/80 font-normal">Service</span>
            </motion.h1>
            
            <motion.p variants={fadeIn} className="text-lg text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
              These terms govern your use of Refoodify. We aim for complete clarity in outlining mutual responsibilities.
            </motion.p>
            
            <motion.div variants={fadeIn} className="mt-8 text-sm text-muted-foreground font-mono">
              Last updated: July 13, 2025
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 px-4">
        <div className="container max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card/30 backdrop-blur-md border border-white/5 rounded-3xl p-8 md:p-12 space-y-16"
          >
            
            {/* Agreement */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
                  <FileCheck2 className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-2xl font-semibold tracking-tight">Agreement to Terms</h2>
              </div>
              <div className="prose prose-invert max-w-none text-muted-foreground font-light leading-relaxed space-y-4">
                <p>
                  By accessing and using Refoodify, an AI-powered food waste management platform developed by Team "Git Happens", you accept and agree to be bound by the terms and provision of this agreement.
                </p>
                <p>
                  If you do not agree to abide by the above, please do not use this service. Our motto "Make money with waste" reflects our commitment to turning environmental challenges into sustainable, profitable solutions.
                </p>
              </div>
            </div>

            <hr className="border-white/5" />

            {/* Platform Description */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
                  <FileText className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-2xl font-semibold tracking-tight">Platform Description</h2>
              </div>
              <p className="text-muted-foreground font-light leading-relaxed">
                Refoodify is an innovative platform that combines AI technology, sustainability principles, and gamification to help users:
              </p>
              
              <div className="grid md:grid-cols-2 gap-4 mt-6">
                {[
                  { title: "AI-Powered Solutions", desc: "Get smart recommendations for reusing leftovers and reducing waste." },
                  { title: "Gamified Experience", desc: "Earn points, compete on leaderboards, and unlock achievements." },
                  { title: "Composting Intelligence", desc: "Learn optimal composting techniques with detailed guidance." },
                  { title: "Value Creation", desc: "Transform waste into potential monetary value through our marketplace." }
                ].map((feature, i) => (
                  <div key={i} className="p-5 rounded-xl border border-white/5 bg-background/50">
                    <h4 className="font-semibold text-foreground text-sm mb-2">{feature.title}</h4>
                    <p className="text-xs text-muted-foreground">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <hr className="border-white/5" />

            {/* User Responsibilities & Prohibited */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
                  <Gavel className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-2xl font-semibold tracking-tight">Responsibilities & Prohibited Activities</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div className="bg-white/5 border border-white/5 rounded-2xl p-6">
                  <h3 className="text-lg font-medium text-foreground mb-4 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary" /> User Responsibilities
                  </h3>
                  <ul className="space-y-3">
                    {['Maintain account security', 'Notify us of unauthorized access', 'Provide accurate information'].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-red-500/5 border border-red-500/10 rounded-2xl p-6">
                  <h3 className="text-lg font-medium text-red-400 mb-4 flex items-center gap-2">
                    <ShieldAlert className="w-4 h-4" /> Prohibited Activities
                  </h3>
                  <ul className="space-y-3">
                    {['Manipulating AI algorithms', 'Extracting or scraping data', 'Uploading harmful content'].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-red-500/50 mt-1.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <hr className="border-white/5" />
            
            {/* Limitation of Liability */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3">
                <div className="w-10 h-10 rounded-full border border-yellow-500/20 bg-yellow-500/10 flex items-center justify-center">
                  <AlertCircle className="w-5 h-5 text-yellow-500" />
                </div>
                <h2 className="text-2xl font-semibold tracking-tight">Limitation of Liability</h2>
              </div>
              <div className="p-6 rounded-2xl border border-yellow-500/10 bg-yellow-500/5">
                <p className="text-muted-foreground font-light leading-relaxed">
                  While we strive to provide accurate AI recommendations and nutritional information, Refoodify is provided "as is" without warranties. Team "Git Happens" shall not be liable for any damages arising from the use of our platform. Users are responsible for making informed decisions about food safety and waste management practices.
                </p>
              </div>
            </div>

            <hr className="border-white/5" />

            {/* Contact */}
            <div className="space-y-6 text-center pt-8">
              <h2 className="text-2xl font-semibold tracking-tight">Have legal questions?</h2>
              <p className="text-muted-foreground font-light max-w-md mx-auto">
                Our legal team is available to help you understand our terms of service.
              </p>
              <Link href="/contact" className="inline-flex items-center justify-center px-6 py-3 bg-white/5 border border-white/10 hover:bg-white/10 text-foreground font-medium text-sm transition-all rounded-lg group">
                Contact Legal Team
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

          </motion.div>
        </div>
      </section>
    </div>
  );
}
