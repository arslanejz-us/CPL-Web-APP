"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ArrowRight, Package } from "lucide-react";

interface FlipProductCardProps {
  id: string;
  title: string;
  slug: string;
  image: string;
  description?: string;
  features?: string[];
  category?: string;
}

export default function FlipProductCard({
  id,
  title,
  slug,
  image,
  description,
  features,
  category,
}: FlipProductCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <Link href={`/products/${slug}`}>
      <motion.div
        className="h-full cursor-pointer"
        onHoverStart={() => setIsFlipped(true)}
        onHoverEnd={() => setIsFlipped(false)}
      >
        <motion.div
          initial={{ rotateY: 0 }}
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="relative w-full h-full rounded-[5px]"
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Front Side - Product Image */}
          <motion.div
            className="absolute w-full h-full rounded-[5px] bg-white flex flex-col items-center justify-start overflow-hidden p-4"
            style={{ backfaceVisibility: "hidden" }}
          >
            {/* Image Container */}
            <div className="w-full flex-1 flex items-center justify-center relative">
              <Image
                src={image}
                alt={title}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 200px"
              />
            </div>

            {/* Title at bottom with brand color */}
            <div className="w-full pt-3 border-t border-slate-200">
              <h3 className="text-brand-primary font-bold text-sm text-center line-clamp-2">
                {title}
              </h3>
            </div>
          </motion.div>

          {/* Back Side - Product Details */}
          <motion.div
            className="absolute w-full h-full rounded-[5px] bg-gradient-to-br from-brand-charcoal to-brand-primary flex flex-col p-4 overflow-hidden"
            style={{ backfaceVisibility: "hidden", rotateY: 180 }}
          >
            {/* Category Badge */}
            {category && (
              <div className="inline-flex items-center gap-1 bg-white/20 text-white text-xs font-semibold px-2 py-1 rounded-full mb-2 w-fit">
                <Package className="w-3 h-3" />
                {category}
              </div>
            )}

            {/* Title */}
            <h3 className="text-white font-bold text-sm mb-2 leading-snug line-clamp-2">
              {title}
            </h3>

            {/* Description */}
            {description && (
              <p className="text-white/85 text-xs leading-snug mb-3 line-clamp-2">
                {description}
              </p>
            )}

            {/* Features List */}
            {features && features.length > 0 && (
              <ul className="space-y-1 mb-auto text-xs">
                {features.slice(0, 3).map((feature, idx) => (
                  <li
                    key={idx}
                    className="text-white/80 flex items-start gap-2 leading-snug"
                  >
                    <span className="text-brand-primary flex-shrink-0 font-bold">✓</span>
                    <span className="line-clamp-1">{feature}</span>
                  </li>
                ))}
              </ul>
            )}

            {/* CTA Button */}
            <motion.div
              whileHover={{ gap: 8 }}
              className="inline-flex items-center gap-2 text-white font-semibold text-xs bg-white/20 hover:bg-white/30 px-3 py-1.5 rounded-[4px] transition-all duration-300 w-fit mt-auto"
            >
              View Details
              <ArrowRight className="w-3 h-3" />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </Link>
  );
}
