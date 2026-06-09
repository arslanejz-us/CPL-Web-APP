"use client";

import { motion, cubicBezier } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import QuoteModal from "./QuoteModal";

const productCategories = [
  {
    id: "boxes",
    name: "Rigid Boxes",
    description: "Premium rigid setup & display boxes with custom printing",
    image: "/images/rigid-box.jpg",
  },
  {
    id: "mailers",
    name: "Mailer Boxes",
    description: "Durable corrugated shipping and mailing solutions",
    image: "/images/mailer-box.jpg",
  },
  {
    id: "bags",
    name: "Custom Bags",
    description: "Branded paper, plastic, and kraft pouches for retail",
    image: "/images/custom-bag.jpg",
  },
];

export default function TopPackagingStyles() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
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
      y: -8,
      boxShadow: "0 20px 40px -10px rgba(13, 47, 66, 0.15)",
      transition: { duration: 0.3 },
    },
  };

  return (
    <section className="py-20 lg:py-32 bg-white" suppressHydrationWarning>
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
              Popular Solutions
            </span>
          </motion.span>

          <motion.h2 variants={itemVariants} className="text-4xl lg:text-5xl font-extrabold text-brand-charcoal mb-4 leading-tight">
            Top Packaging Styles
          </motion.h2>

          <motion.p variants={itemVariants} className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">
            We cover all your packaging needs. Choose from our most popular solutions or{" "}
            <Link href="/products" className="text-brand-primary font-semibold hover:underline">
              explore all products
            </Link>
            .
          </motion.p>
        </motion.div>

        {/* Product Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
        >
          {productCategories.map((product) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              whileHover="hover"
              className="group"
            >
              <motion.div
                variants={hoverVariants}
                className="bg-white border border-slate-200 rounded-2xl overflow-hidden transition-all duration-300"
              >
                {/* Image Container */}
                <div className="relative h-48 overflow-hidden bg-slate-100">
                  <div className="w-full h-full bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
                    <span className="text-slate-400 font-medium">{product.name}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-brand-charcoal mb-2">
                    {product.name}
                  </h3>
                  <p className="text-sm text-slate-600 mb-6">
                    {product.description}
                  </p>

                  <div className="flex gap-3">
                    <button
                      onClick={() => setIsQuoteModalOpen(true)}
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-brand-primary hover:bg-orange-700 text-white font-semibold rounded-lg transition-colors text-sm"
                    >
                      Get Quote
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <Link
                      href="/products"
                      className="flex-1 inline-flex items-center justify-center px-4 py-2.5 bg-slate-50 hover:bg-slate-100 text-slate-700 font-semibold rounded-lg transition-colors text-sm"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center"
        >
          <motion.div variants={itemVariants} className="space-y-4">
            <p className="text-slate-600 text-sm">
              Not sure which packaging style fits your brand?
            </p>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 px-8 py-3 bg-brand-primary hover:bg-brand-charcoal text-white font-semibold rounded-lg transition-colors"
            >
              View All Products
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </motion.div>
      </div>

      <QuoteModal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} />
    </section>
  );
}

