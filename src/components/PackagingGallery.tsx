"use client";

import { motion, cubicBezier } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

type GalleryItem = {
  id: string;
  title: string;
  image: string;
  href: string;
};

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "1",
    title: "Rigid Boxes",
    image: "/images/hero-bg.png",
    href: "/products?category=rigid-boxes"
  },
  {
    id: "2",
    title: "Mailer Boxes",
    image: "/images/hero-bg.png",
    href: "/products?category=mailer-boxes"
  },
  {
    id: "3",
    title: "Custom Pouches",
    image: "/images/hero-bg.png",
    href: "/products?category=pouches"
  },
  {
    id: "4",
    title: "Product Labels",
    image: "/images/hero-bg.png",
    href: "/products?category=labels"
  },
  {
    id: "5",
    title: "Gift Packaging",
    image: "/images/hero-bg.png",
    href: "/products?category=gift"
  },
  {
    id: "6",
    title: "Shipping Solutions",
    image: "/images/hero-bg.png",
    href: "/products?category=shipping"
  },
];

export default function PackagingGallery() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.2 },
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
      scale: 1.02,
      transition: { duration: 0.3 },
    },
  };

  return (
    <section className="py-20 lg:py-32 bg-slate-50" suppressHydrationWarning>
      <div className="max-w-7xl mx-auto px-6">
        {/* Gallery Grid - Masonry Style */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {GALLERY_ITEMS.map((item, idx) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              whileHover="hover"
              className={`group relative overflow-hidden rounded-2xl ${
                idx === 0 || idx === 4 ? "md:col-span-1 lg:row-span-2" : ""
              }`}
            >
              <motion.div variants={hoverVariants} className="h-full">
                <Link href={item.href} className="block h-80 md:h-96 lg:h-full relative">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                    <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
                    <div className="inline-flex items-center gap-2 text-brand-primary font-semibold text-sm group-hover:gap-3 transition-all">
                      View Products
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

