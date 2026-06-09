"use client";

import { motion, cubicBezier } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

type ShowcaseItem = {
  title: string;
  description: string;
  href: string;
  images: string[];
};

const PACKAGING_TYPES: ShowcaseItem[] = [
  {
    title: "Rigid Boxes",
    description: "Premium rigid boxes for luxury unboxing experiences",
    href: "/products?category=rigid-boxes",
    images: ["/images/hero-bg.png", "/images/hero-bg.png", "/images/hero-bg.png"],
  },
  {
    title: "Mailer Boxes",
    description: "Custom branded shipping boxes for safe delivery",
    href: "/products?category=mailer-boxes",
    images: ["/images/hero-bg.png", "/images/hero-bg.png", "/images/hero-bg.png"],
  },
  {
    title: "Pouches & Bags",
    description: "Flexible packaging for food, cosmetics & retail",
    href: "/products?category=pouches-bags",
    images: ["/images/hero-bg.png", "/images/hero-bg.png", "/images/hero-bg.png"],
  },
  {
    title: "Custom Labels",
    description: "High-quality labels for branding and compliance",
    href: "/products?category=labels",
    images: ["/images/hero-bg.png", "/images/hero-bg.png", "/images/hero-bg.png"],
  },
];

export default function PackagingShowcase() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: cubicBezier(0.22, 1, 0.36, 1) },
    },
  };

  return (
    <section className="py-20 lg:py-28 bg-white" suppressHydrationWarning>
      <div className="max-w-7xl mx-auto px-6">
        {/* 2-Column Featured Showcase */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid lg:grid-cols-2 gap-8 mb-12"
        >
          {PACKAGING_TYPES.slice(0, 2).map((item) => (
            <motion.div
              key={item.title}
              variants={itemVariants}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              className="group"
            >
              <Link href={item.href} className="block">
                <div className="relative overflow-hidden rounded-2xl mb-4">
                  {/* Product Image Carousel */}
                  <div className="relative h-64 bg-slate-100 rounded-2xl overflow-hidden">
                    <Image
                      src={item.images[0]}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/40 to-transparent" />

                    {/* View Products Button */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-brand-charcoal/20">
                      <button className="px-6 py-2 bg-brand-primary hover:bg-brand-primary/90 text-white font-bold rounded-full text-sm transition-all">
                        View Products â†’
                      </button>
                    </div>
                  </div>

                  {/* Image Thumbnails */}
                  <div className="flex gap-2 mb-4">
                    {item.images.map((_, idx) => (
                      <div
                        key={idx}
                        className={`h-2 flex-1 rounded-full transition-all ${idx === 0 ? "bg-brand-primary" : "bg-slate-200"
                          }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-brand-charcoal mb-2 group-hover:text-brand-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm mb-4">{item.description}</p>

                {/* Link */}
                <div className="inline-flex items-center gap-2 text-brand-primary font-semibold text-sm group-hover:gap-3 transition-all">
                  Explore â†’
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Smaller Grid for Remaining Items */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 gap-6 mb-12"
        >
          {PACKAGING_TYPES.slice(2, 4).map((item) => (
            <motion.div
              key={item.title}
              variants={itemVariants}
              whileHover={{ y: -2 }}
              transition={{ duration: 0.3 }}
              className="group"
            >
              <Link
                href={item.href}
                className="flex gap-4 p-6 bg-slate-50 rounded-2xl hover:bg-slate-100 transition-all duration-300"
              >
                {/* Small Image */}
                <div className="relative w-24 h-24 flex-shrink-0 rounded-xl overflow-hidden bg-slate-200">
                  <Image
                    src={item.images[0]}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Text Content */}
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-brand-charcoal mb-1 group-hover:text-brand-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-sm mb-3">{item.description}</p>
                  <div className="inline-flex items-center gap-2 text-brand-primary font-semibold text-xs group-hover:gap-3 transition-all">
                    Explore â†’
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Strip */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="bg-brand-charcoal/5 border border-brand-primary/20 rounded-2xl py-8 px-8 text-center"
        >
          <h3 className="text-2xl font-bold text-brand-charcoal mb-2">Looking for a custom packaging solution?</h3>
          <p className="text-slate-600 mb-6 max-w-2xl mx-auto">We specialize in creating unique, branded packaging that tells your story.</p>
          <Link
            href="/contact-us"
            className="inline-flex items-center gap-2 px-8 py-3 bg-brand-primary hover:bg-brand-primary/90 text-white font-bold rounded-lg transition-all duration-300"
          >
            Get in Touch â†’
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

