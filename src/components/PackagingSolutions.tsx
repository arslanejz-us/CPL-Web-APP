"use client";

import { motion, cubicBezier } from "framer-motion";
import Link from "next/link";
import { Box, Package, ShoppingBag, Tag, Gift, Layers } from "lucide-react";

type Solution = {
  icon: typeof Box;
  title: string;
  description: string;
  href: string;
};

const SOLUTIONS: Solution[] = [
  {
    icon: Box,
    title: "Rigid Boxes",
    description: "Premium rigid boxes for high-end products, luxury packaging, and unboxing experiences.",
    href: "/products?category=rigid-boxes"
  },
  {
    icon: Package,
    title: "Mailer Boxes",
    description: "Custom mailer boxes designed for safe shipping and branded unboxing moments.",
    href: "/products?category=mailer-boxes"
  },
  {
    icon: ShoppingBag,
    title: "Pouches & Bags",
    description: "Flexible pouches and bags for food, cosmetics, and retail products.",
    href: "/products?category=pouches-bags"
  },
  {
    icon: Tag,
    title: "Custom Labels",
    description: "High-quality custom labels for branding, product identification, and compliance.",
    href: "/products?category=labels"
  },
  {
    icon: Gift,
    title: "Gift Boxes",
    description: "Elegant gift boxes that elevate the presentation of any premium product.",
    href: "/products?category=gift-boxes"
  },
  {
    icon: Layers,
    title: "Corrugated Boxes",
    description: "Durable corrugated boxes for shipping, storage, and heavy-duty applications.",
    href: "/products?category=corrugated"
  },
];

export default function PackagingSolutions() {
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
    <section className="py-20 lg:py-32 bg-white text-slate-700" suppressHydrationWarning>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16 lg:mb-20"
        >
          <motion.span variants={itemVariants} className="inline-block mb-4">
            <span className="text-xs font-bold tracking-widest uppercase text-brand-primary">
              Complete Solutions
            </span>
          </motion.span>

          <motion.h2
            variants={itemVariants}
            className="text-4xl lg:text-5xl font-extrabold text-brand-charcoal mb-4 leading-tight"
          >
            Complete Custom Packaging Solutions
          </motion.h2>

          <motion.p variants={itemVariants} className="text-lg text-slate-600 max-w-2xl mx-auto">
            From rigid boxes to pouches and labels â€” we offer premium custom packaging for every product type and industry need.
          </motion.p>
        </motion.div>

        {/* Solution Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {SOLUTIONS.map((solution) => {
            const IconComponent = solution.icon;
            return (
              <motion.div
                key={solution.title}
                variants={itemVariants}
                whileHover="hover"
                className="group"
              >
                <motion.div
                  variants={hoverVariants}
                  className="bg-white rounded-2xl p-8 border border-slate-200 transition-all duration-300 hover:shadow-lg h-full flex flex-col"
                >
                  {/* Icon */}
                  <div className="w-14 h-14 bg-gradient-to-br from-brand-primary/20 to-brand-primary/20 rounded-xl flex items-center justify-center mb-6 group-hover:from-brand-primary/30 group-hover:to-brand-primary/30 transition-colors">
                    <IconComponent className="w-7 h-7 text-brand-primary" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-brand-charcoal mb-3">
                    {solution.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-1">
                    {solution.description}
                  </p>

                  {/* Link */}
                  <Link
                    href={solution.href}
                    className="inline-flex items-center gap-2 text-brand-primary font-semibold text-sm group-hover:gap-3 transition-all"
                  >
                    Explore
                    <span>â†’</span>
                  </Link>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

