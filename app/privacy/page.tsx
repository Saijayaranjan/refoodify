"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Lock, Eye, FileText, ArrowRight } from "lucide-react";
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

export default function PrivacyPolicyPage() {
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
              <ShieldCheck className="w-4 h-4 text-primary" />
              <span className="text-xs font-medium tracking-wide uppercase text-muted-foreground">Privacy First</span>
            </motion.div>
            
            <motion.h1 variants={fadeIn} className="text-4xl md:text-6xl font-semibold tracking-tighter mb-6 leading-tight">
              Privacy <span className="font-serif italic text-muted-foreground/80 font-normal">Policy</span>
            </motion.h1>
            
            <motion.p variants={fadeIn} className="text-lg text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
              We believe your data is your property. Learn how we collect, use, and fiercely protect your information at Refoodify.
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
            
            {/* Introduction */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
                  <FileText className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-2xl font-semibold tracking-tight">Introduction</h2>
              </div>
              <div className="prose prose-invert max-w-none text-muted-foreground font-light leading-relaxed space-y-4">
                <p>
                  Welcome to Refoodify. We are committed to protecting your privacy and ensuring complete transparency about how we handle your personal information. This Privacy Policy explains how we collect, use, share, and protect your data when you use our AI-powered food waste management platform.
                </p>
                <p>
                  By using Refoodify, you agree to the collection and use of information in accordance with this policy. We will never use or share your information with anyone except as explicitly described here.
                </p>
              </div>
            </div>

            <hr className="border-white/5" />

            {/* Information We Collect */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
                  <Eye className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-2xl font-semibold tracking-tight">Information We Collect</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div className="bg-white/5 border border-white/5 rounded-2xl p-6">
                  <h3 className="text-lg font-medium text-foreground mb-4">Account Data</h3>
                  <ul className="space-y-3">
                    {['Email address and username', 'Profile details', 'Contact information'].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white/5 border border-white/5 rounded-2xl p-6">
                  <h3 className="text-lg font-medium text-foreground mb-4">Platform Data</h3>
                  <ul className="space-y-3">
                    {['Food waste entries & images', 'Nutritional analytics', 'App usage & metrics'].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <hr className="border-white/5" />

            {/* Security */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
                  <Lock className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-2xl font-semibold tracking-tight">Data Security</h2>
              </div>
              <p className="text-muted-foreground font-light leading-relaxed">
                We implement military-grade security measures to ensure your data remains strictly confidential:
              </p>
              
              <div className="grid md:grid-cols-3 gap-4 mt-6">
                {[
                  { title: "Encryption", desc: "E2E encryption for all data in transit and at rest." },
                  { title: "Protection", desc: "Isolated infrastructure with continuous security audits." },
                  { title: "Access Control", desc: "Zero-trust architecture with strict authentication." }
                ].map((feature, i) => (
                  <div key={i} className="p-5 rounded-xl border border-white/5 bg-background/50 text-center">
                    <h4 className="font-semibold text-foreground text-sm mb-2">{feature.title}</h4>
                    <p className="text-xs text-muted-foreground">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <hr className="border-white/5" />

            {/* Contact */}
            <div className="space-y-6 text-center pt-8">
              <h2 className="text-2xl font-semibold tracking-tight">Questions about your privacy?</h2>
              <p className="text-muted-foreground font-light max-w-md mx-auto">
                Our privacy team is available to address any concerns you might have regarding your data.
              </p>
              <Link href="/contact" className="inline-flex items-center justify-center px-6 py-3 bg-white/5 border border-white/10 hover:bg-white/10 text-foreground font-medium text-sm transition-all rounded-lg group">
                Contact Data Protection Officer
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

          </motion.div>
        </div>
      </section>
    </div>
  );
}
