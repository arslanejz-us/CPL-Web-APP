"use client";

import { motion, cubicBezier } from "framer-motion";
import Link from "next/link";
import FlipProductCard from "./FlipProductCard";

type Product = {
  id: string;
  title: string;
  slug: string;
  image: string;
  category: string;
  description: string;
  features: string[];
};

const PRODUCTS: Product[] = [
  {
    id: "1",
    title: "Premium Rigid Boxes",
    slug: "premium-rigid-boxes",
    image: "/images/Rigid-Boxes.webp",
    category: "Rigid Boxes",
    description: "Luxury rigid boxes perfect for premium brand packaging and unboxing experiences",
    features: ["Custom sizes", "Full color printing", "Eco-friendly materials"],
  },
  {
    id: "2",
    title: "Custom Mailer Boxes",
    slug: "custom-mailer-boxes",
    image: "/images/Mailer-box.webp",
    category: "Mailer Boxes",
    description: "Durable shipping boxes designed to protect products during transit",
    features: ["Corrugated strength", "Custom branding", "Fast delivery"],
  },
  {
    id: "3",
    title: "Eco-Friendly Boxes",
    slug: "eco-friendly-boxes",
    image: "/images/eco-friendly-boxes.webp",
    category: "Eco Boxes",
    description: "Sustainable packaging solutions for environmentally conscious brands",
    features: ["100% recyclable", "Biodegradable", "Custom printing"],
  },
  {
    id: "4",
    title: "Branded Labels",
    slug: "branded-labels",
    image: "/images/Branded-label.webp",
    category: "Labels",
    description: "High-quality labels for branding, compliance, and product identification",
    features: ["Various sizes", "Multiple materials", "Fast turnaround"],
  },
  {
    id: "5",
    title: "Shipping Containers",
    slug: "shipping-containers",
    image: "/images/shipping-containers.webp",
    category: "Containers",
    description: "Industrial-grade containers for safe and secure product shipment",
    features: ["Heavy-duty", "Stackable design", "Cost-effective"],
  },
  {
    id: "6",
    title: "Window Boxes",
    slug: "window-boxes",
    image: "/images/window-boxes.webp",
    category: "Window Boxes",
    description: "Display boxes with product visibility for retail shelf appeal",
    features: ["Clear window", "Brand visibility", "Custom shapes"],
  },
  {
    id: "7",
    title: "Kraft Jewelry Boxes",
    slug: "kraft-jewelry-boxes",
    image: "/images/Kraft-Jewelry-Boxes.webp",
    category: "Kraft Boxes",
    description: "Natural kraft paper boxes perfect for jewelry and small items",
    features: ["Biodegradable", "Natural texture", "Premium finish"],
  },
  {
    id: "8",
    title: "Cosmetics Boxes",
    slug: "cosmetics-boxes",
    image: "/images/Cosmetics-Boxes.webp",
    category: "Cosmetics",
    description: "Specialized packaging for beauty, skincare, and cosmetic products",
    features: ["UV protection", "Tamper evident", "Premium materials"],
  },
  {
    id: "9",
    title: "Corrugated Mailer Boxes",
    slug: "corrugated-mailer-boxes",
    image: "/images/Carrogated-Mailer-Boxes.webp",
    category: "Corrugated",
    description: "Versatile corrugated solutions with superior protection for shipping",
    features: ["Flexible sizing", "Reusable", "Cost-effective"],
  },
];

export default function ProductShowcase() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.15 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: cubicBezier(0.22, 1, 0.36, 1) },
    },
  };

  const hoverVariants = {
    hover: {
      y: -8,
      boxShadow: "0 20px 40px -10px rgba(13, 47, 66, 0.2)",
      transition: { duration: 0.3 },
    },
  };

  return (
    <section className="py-16 lg:py-24 bg-white text-slate-700" suppressHydrationWarning>
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12 lg:mb-16"
        >
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="inline-block mb-3"
          >
            <span className="text-[10px] font-bold tracking-widest uppercase text-brand-primary">
              Curated Selection
            </span>
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-brand-charcoal mb-3 leading-tight"
          >
            Featured Solutions
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed"
          >
            Premium packaging solutions crafted to elevate your brand and protect what matters.
          </motion.p>
        </motion.div>

        {/* Product Grid - 5 columns, 2 rows */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-12"
        >
          {PRODUCTS.map((product) => (
            <motion.div
              key={product.id}
              variants={cardVariants}
              className="h-64"
            >
              <FlipProductCard
                id={product.id}
                title={product.title}
                slug={product.slug}
                image={product.image}
                category={product.category}
                description={product.description}
                features={product.features}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            href="/products"
            className="group relative inline-flex items-center gap-2 px-8 py-3 bg-brand-charcoal hover:bg-brand-charcoal/95 text-white font-semibold text-sm rounded-lg transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-brand-charcoal/20 hover:-translate-y-0.5 overflow-hidden"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            <span className="relative">View All Products</span>
            <span className="relative group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
