"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Package, Shield, Zap, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function HeroPanel() {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-gradient-to-br from-brand-navy via-brand-primary to-[#2a7a95]">
      {/* Background grid pattern */}
      <div className="absolute inset-0 opacity-10" style={{backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)", backgroundSize: "40px 40px"}} />

      {/* Floating orbs */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-brand-accent/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-brand-light/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="space-y-8"
          >
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
              <Badge className="bg-brand-accent/20 text-brand-accent-light border-brand-accent/30 mb-4">
                🏭 Trusted by 5,000+ Brands Worldwide
              </Badge>
            </motion.div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold text-white leading-[1.05] tracking-tight">
              Packaging That{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-accent-light">
                Sells.
              </span>
            </h1>

            <p className="text-xl text-white/75 leading-relaxed max-w-xl">
              Custom packaging solutions for brands that care about first impressions.
              Premium quality, sustainable materials, delivered in as little as{" "}
              <span className="text-white font-semibold">7 days</span>.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button asChild size="xl" variant="default" className="group">
                <Link href="/contact-us">
                  Get Custom Quote
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild size="xl" variant="outline" className="border-white/30 text-white hover:bg-white/10 hover:border-white/60 hover:text-white">
                <Link href="/products">Browse Products</Link>
              </Button>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-6 pt-2">
              {[
                { icon: Zap, text: "7-Day Production" },
                { icon: Shield, text: "ISO Certified" },
                { icon: Star, text: "4.9/5 Rating" },
                { icon: Package, text: "MOQ from 100 units" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2 text-white/70 text-sm">
                  <Icon className="w-4 h-4 text-brand-accent" />
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right stats panel */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            className="hidden lg:grid grid-cols-2 gap-4"
          >
            {[
              { value: "5,000+", label: "Happy Brands", color: "from-brand-accent/20 to-brand-accent/5" },
              { value: "7 Days", label: "Min. Lead Time", color: "from-brand-light/20 to-brand-light/5" },
              { value: "50+", label: "Material Options", color: "from-brand-light/20 to-brand-light/5" },
              { value: "100%", label: "Custom Design", color: "from-brand-accent/20 to-brand-accent/5" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.1 }}
                className={`bg-gradient-to-br ${stat.color} backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center`}
              >
                <div className="text-4xl font-display font-bold text-white mb-1">{stat.value}</div>
                <div className="text-white/60 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
