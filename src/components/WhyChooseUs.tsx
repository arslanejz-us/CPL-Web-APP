"use client";

import { motion, cubicBezier } from "framer-motion";
import Link from "next/link";
import { Award, Zap, Leaf, Pencil, Globe, Star } from "lucide-react";

type Feature = {
  icon: typeof Award;
  title: string;
  description: string;
};

const FEATURES: Feature[] = [
  {
    icon: Award,
    title: "Industry-Leading Expertise",
    description:
      "15+ years designing custom packaging for cosmetics, food & beverage, retail, CBD, and luxury brands.",
  },
  {
    icon: Zap,
    title: "7-Day Production Guarantee",
    description:
      "Tight launch deadline? We ship orders in as little as 7 business days with free expedited USA shipping.",
  },
  {
    icon: Leaf,
    title: "100% Eco-Friendly Materials",
    description:
      "FSC-certified Kraft, recycled cardboard, soy-based inks, and biodegradable finishes for sustainable brands.",
  },
  {
    icon: Pencil,
    title: "Free 3D Design Support",
    description:
      "Unlimited revisions, dielines, and photo-realistic 3D mockups from our in-house team - at zero cost.",
  },
  {
    icon: Globe,
    title: "Global Shipping & Logistics",
    description:
      "Door-to-door delivery to 50+ countries with full tracking, customs handling, and warehousing options.",
  },
  {
    icon: Star,
    title: "Trusted by 5,000+ Brands",
    description:
      "From Shopify launches to Sephora shelves - 4.9 star rating across 1,200+ verified client reviews.",
  },
];

export default function WhyChooseUs() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 32 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: cubicBezier(0.22, 1, 0.36, 1) },
    },
  };

  const hoverVariants = {
    hover: {
      y: -4,
      transition: { duration: 0.3 },
    },
  };

  return (
    <section className="py-16 lg:py-24 bg-white text-slate-700" suppressHydrationWarning>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12 lg:mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-brand-charcoal mb-3 leading-tight"
          >
            Why 5,000+ Brands Trust Us
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed"
          >
            From emerging startups to Fortune 500 brands, we deliver packaging solutions that protect products, elevate unboxing experiences, and build lasting brand loyalty.
          </motion.p>
        </motion.div>

        {/* Feature Grid - Modern Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {FEATURES.map((feature) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                whileHover="hover"
                className="group"
              >
                <motion.div
                  variants={hoverVariants}
                  className="relative h-full bg-white rounded-xl p-6 border border-slate-100 hover:border-brand-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-brand-primary/10 overflow-hidden"
                >
                  {/* Gradient accent line */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-primary via-brand-primary/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                  {/* Icon */}
                  <div className="w-12 h-12 bg-gradient-to-br from-brand-primary/15 to-brand-primary/5 rounded-lg flex items-center justify-center mb-4 group-hover:from-brand-primary/25 group-hover:to-brand-primary/15 transition-colors duration-300">
                    <IconComponent className="w-6 h-6 text-brand-primary" />
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-bold text-brand-charcoal mb-2 group-hover:text-brand-primary transition-colors">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors">
                    {feature.description}
                  </p>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center"
        >
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link
                href="/contact-us"
                className="group relative inline-flex items-center justify-center gap-2 px-8 py-3 bg-brand-primary hover:bg-brand-primary/95 text-white font-semibold text-sm rounded-lg transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-brand-primary/30 hover:-translate-y-0.5 overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/15 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                <span className="relative">Get My Free Quote in 60 Seconds</span>
              </Link>
              <Link
                href="/products"
                className="group inline-flex items-center justify-center gap-2 px-8 py-3 bg-white hover:bg-slate-50 text-brand-primary font-semibold text-sm rounded-lg border border-slate-200 hover:border-brand-primary transition-all duration-300 shadow-sm hover:shadow-md"
              >
                Explore Our Solutions
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
            <p className="text-sm text-slate-600">
              No minimums on samples · Free design consultation · Money-back quality guarantee
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
