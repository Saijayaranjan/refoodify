"use client";

import { motion } from "framer-motion";
import { MessageSquare, Mail, Send, Loader2 } from "lucide-react";
import { useState } from "react";

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

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background text-foreground pt-24 pb-16">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-background to-background pointer-events-none -z-10"></div>
        
        <div className="container max-w-6xl mx-auto px-4 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-3 py-1 mb-6 border border-white/10 rounded-full bg-white/5 backdrop-blur-md">
              <MessageSquare className="w-4 h-4 text-primary" />
              <span className="text-xs font-medium tracking-wide uppercase text-muted-foreground">Get In Touch</span>
            </motion.div>
            
            <motion.h1 variants={fadeIn} className="text-4xl md:text-6xl font-semibold tracking-tighter mb-6 leading-tight">
              Contact <span className="font-serif italic text-muted-foreground/80 font-normal">Us</span>
            </motion.h1>
            
            <motion.p variants={fadeIn} className="text-lg text-muted-foreground font-light leading-relaxed">
              Have questions about our platform? Need support or want to explore enterprise partnerships? Our team is ready to help you navigate the future of sustainable food waste management.
            </motion.p>
          </motion.div>

          {/* Contact Content */}
          <div className="grid lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
            
            {/* Contact Info */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2 space-y-6"
            >
              <div className="bg-card/30 backdrop-blur-md border border-white/5 rounded-3xl p-8 h-full flex flex-col justify-between">
                <div className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-semibold tracking-tight mb-2">Connect</h3>
                    <p className="text-muted-foreground font-light">Reach out directly through our dedicated channels.</p>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20 shrink-0">
                        <Mail className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-foreground mb-1">Email Support</h4>
                        <a href="mailto:hello@refoodify.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">hello@refoodify.com</a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-12">
                  <div className="p-4 rounded-xl border border-white/5 bg-white/5">
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      "Make money with waste" — Our mission for a sustainable future. We typically respond within 24 hours to all inquiries.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="lg:col-span-3 bg-card/30 backdrop-blur-md border border-white/5 rounded-3xl p-8"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-sm font-medium text-foreground/80">First Name</label>
                    <input 
                      type="text" 
                      id="firstName" 
                      required
                      className="w-full px-4 py-3 bg-background/50 border border-white/10 rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all"
                      placeholder="Jane"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-sm font-medium text-foreground/80">Last Name</label>
                    <input 
                      type="text" 
                      id="lastName" 
                      required
                      className="w-full px-4 py-3 bg-background/50 border border-white/10 rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground/80">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    required
                    className="w-full px-4 py-3 bg-background/50 border border-white/10 rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all"
                    placeholder="jane@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-foreground/80">Subject</label>
                  <select 
                    id="subject"
                    className="w-full px-4 py-3 bg-background/50 border border-white/10 rounded-lg text-foreground focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all appearance-none"
                  >
                    <option value="general" className="bg-card">General Inquiry</option>
                    <option value="support" className="bg-card">Technical Support</option>
                    <option value="enterprise" className="bg-card">Enterprise Partnerships</option>
                    <option value="press" className="bg-card">Press & Media</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground/80">Message</label>
                  <textarea 
                    id="message" 
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-background/50 border border-white/10 rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all resize-none"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={loading || success}
                  className={`w-full h-12 flex items-center justify-center font-medium text-sm transition-all rounded-lg mt-4 ${
                    success 
                    ? 'bg-green-500/10 text-green-500 border border-green-500/20' 
                    : 'bg-primary text-primary-foreground hover:bg-primary/90'
                  }`}
                >
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Sending...
                    </span>
                  ) : success ? (
                    <span className="flex items-center gap-2">
                      Message Sent Successfully!
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      Send Message
                      <Send className="w-4 h-4 ml-1" />
                    </span>
                  )}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
