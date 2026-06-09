"use client";

import { motion, cubicBezier } from "framer-motion";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import ProductQuoteForm from "./ProductQuoteForm";

const BENEFITS = [
  "Custom Packaging Solutions",
  "Premium Quality Materials",
  "Eco-Friendly Options",
  "Competitive Pricing",
  "7-Day Fast Delivery",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: cubicBezier(0.22, 1, 0.36, 1) },
  },
};

export default function CTASection() {
  return (
    <section className="py-16 lg:py-24 bg-brand-charcoal text-white relative overflow-hidden" suppressHydrationWarning>
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-primary/10 rounded-full blur-3xl -mr-48 -mt-48" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-primary/5 rounded-full blur-3xl -ml-48 -mb-48" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Image + Animated Benefits */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Image */}
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-white/10 mb-8">
              <Image
                src="/images/hero-bg.png"
                alt="Premium Packaging"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-transparent to-transparent" />
            </div>

            {/* Benefits List */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="space-y-4"
            >
              {BENEFITS.map((benefit) => (
                <motion.div key={benefit} variants={itemVariants} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-brand-primary flex-shrink-0 mt-0.5" />
                  <span className="text-lg font-medium text-white/90">{benefit}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Product Quote Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="w-full max-w-md">
              <div className="mb-6">
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-2">Get Your Free Packaging Quote</h2>
                <p className="text-white/70">Tell us about your project and receive a personalized packaging solution within 24 hours.</p>
              </div>
              <ProductQuoteForm productName="Custom Packaging" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
