"use client";

import { motion, cubicBezier } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function HeroPanel() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const leftItemVariants = {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: cubicBezier(0.22, 1, 0.36, 1) } }
  };

  const rightItemVariants = {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: cubicBezier(0.22, 1, 0.36, 1) } }
  };

  const eyebrowVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: cubicBezier(0.22, 1, 0.36, 1) } }
  };

  const stats = [
    { value: "5,000+", label: "Brands Served" },
    { value: "7 Days", label: "Production Time" },
    { value: "98%", label: "Satisfaction" }
  ];

  return (
    <section className="relative h-[calc(100vh-64px)] bg-gradient-to-br from-brand-charcoal via-[#1a3d3a] to-brand-primary overflow-hidden flex flex-col justify-center" suppressHydrationWarning>
      {/* Decorative elements with geometric accent */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-brand-primary/10 rounded-full blur-3xl backdrop-blur-sm" />
        <div className="absolute top-1/3 -left-20 w-60 h-60 bg-brand-primary/15 rounded-full blur-3xl backdrop-blur-sm" />
        <div className="absolute -bottom-40 -right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl backdrop-blur-sm" />
        <div className="absolute bottom-20 -left-40 w-72 h-72 bg-brand-primary/10 rounded-full blur-3xl backdrop-blur-sm" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-12 lg:py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* Left Content */}
          <div className="z-10 space-y-6">
            {/* Eyebrow */}
            <motion.div variants={eyebrowVariants}>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/5 text-brand-primary text-[10px] font-bold tracking-widest uppercase rounded-lg border border-brand-primary/20 backdrop-blur-sm hover:bg-white/10 hover:border-brand-primary/40 transition-all duration-300">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-primary" />
                Premium Packaging Solutions
              </span>
            </motion.div>

            {/* Main Headline with Modern Design */}
            <motion.div variants={leftItemVariants}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.15] tracking-tight">
                Your Brand Deserves
                <br />
                <span className="bg-gradient-to-r from-brand-primary to-brand-primary/60 bg-clip-text text-transparent">Premium Packaging</span>
              </h1>
            </motion.div>

            {/* Subheadline */}
            <motion.p variants={leftItemVariants} className="text-base md:text-lg text-white/75 leading-relaxed max-w-2xl">
              Custom branded packaging delivered in 7 days. From concept to production—we handle everything with precision, quality, and your brand's vision at the forefront.
            </motion.p>

            {/* Modern CTA Buttons */}
            <motion.div variants={leftItemVariants} className="flex flex-col sm:flex-row gap-3 pt-2">
              <Link
                href="/contact-us"
                className="group relative inline-flex items-center justify-center gap-2 px-8 py-3 bg-brand-primary hover:bg-brand-primary/95 text-white font-semibold text-sm rounded-lg transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-brand-primary/30 hover:-translate-y-0.5 overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                <span className="relative flex items-center gap-2">
                  Get Your Quote
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-white/5 hover:bg-white/10 text-white font-semibold text-sm rounded-lg transition-all duration-300 border border-white/15 hover:border-white/30 backdrop-blur-sm"
              >
                Explore Products
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            {/* Trust Section */}
            <motion.div variants={leftItemVariants} className="space-y-4 border-t border-white/10 pt-6">
              <div className="grid grid-cols-3 gap-4">
                {stats.map((stat, idx) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.6 + idx * 0.1, ease: cubicBezier(0.22, 1, 0.36, 1) }}
                    className="flex flex-col"
                  >
                    <span className="text-3xl font-extrabold text-white">{stat.value}</span>
                    <span className="text-sm text-white/70 mt-1">{stat.label}</span>
                  </motion.div>
                ))}
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.9, ease: cubicBezier(0.22, 1, 0.36, 1) }}
                className="flex items-center gap-2 text-white/80 text-sm"
              >
                <CheckCircle2 className="w-5 h-5 text-brand-primary flex-shrink-0" />
                <span>ISO 9001 Certified • Eco-Friendly Options • Free Design Support</span>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Visual - Premium Stats Dashboard */}
          <motion.div
            variants={rightItemVariants}
            className="hidden lg:flex items-center justify-center relative"
          >
            {/* Dot Pattern Overlay */}
            <div className="absolute inset-0 opacity-8" style={{
              backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
              backgroundSize: '40px 40px'
            }} />

            {/* Main Dashboard Card with smooth float */}
            <motion.div
              animate={{ y: [0, -16, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10 bg-white rounded-3xl shadow-2xl p-8 max-w-sm w-full ring-1 ring-white/10"
            >
              {/* Top Badge - Order Placed */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 right-8 flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg ring-2 ring-white/30"
              >
                <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                Order Placed
              </motion.div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                {[
                  { num: "7", label: "Days Delivery" },
                  { num: "5K+", label: "Happy Brands" },
                  { num: "98%", label: "Satisfaction" }
                ].map((metric, idx) => (
                  <motion.div
                    key={metric.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 + idx * 0.1, ease: cubicBezier(0.22, 1, 0.36, 1) }}
                    className="text-center p-4 bg-gradient-to-br from-brand-primary/5 to-brand-primary/5 rounded-xl"
                  >
                    <div className="text-3xl font-extrabold text-brand-charcoal">{metric.num}</div>
                    <p className="text-xs text-slate-600 font-semibold mt-1">{metric.label}</p>
                  </motion.div>
                ))}
              </div>

              {/* Packaging Selector */}
              <div className="mb-6">
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">Choose Package Type</p>
                <div className="flex gap-2">
                  {["Boxes", "Pouches", "Labels"].map((type) => (
                    <motion.button
                      key={type}
                      whileHover={{ scale: 1.05, borderColor: "rgb(30, 90, 115)" }}
                      className="flex-1 px-3 py-2 text-xs font-semibold rounded-lg border-2 transition-all text-slate-700 border-slate-200 hover:border-brand-primary"
                    >
                      {type}
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Divider */}
              <div className="h-px bg-slate-200 mb-6" />

              {/* Status Text */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.1, ease: cubicBezier(0.22, 1, 0.36, 1) }}
              >
                <p className="text-center text-sm font-semibold text-brand-charcoal">Premium Custom Packaging</p>
                <p className="text-center text-xs text-slate-500 mt-1">Production starts immediately after approval</p>
              </motion.div>

              {/* Bottom Badge - Ready to Ship */}
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -bottom-4 left-8 flex items-center gap-2 bg-brand-primary text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg ring-2 ring-white/20"
              >
                <span>📦</span>
                Ready to Ship
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/5 to-transparent" />
    </section>
  );
}
