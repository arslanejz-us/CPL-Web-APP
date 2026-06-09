"use client";

import { motion, easeInOut } from "framer-motion";
import Image from "next/image";

interface AnimatedProductImageProps {
  src: string;
  alt: string;
  size?: "small" | "medium" | "large";
  animated?: boolean;
  className?: string;
}

export default function AnimatedProductImage({
  src,
  alt,
  size = "medium",
  animated = true,
  className = "",
}: AnimatedProductImageProps) {
  const sizeMap = {
    small: "h-48",
    medium: "h-64",
    large: "h-96",
  };

  // 3D Rotation animation
  const rotation3DVariants = {
    initial: { rotateY: 0, rotateX: 0 },
    animate: {
      rotateY: [0, 360],
      transition: {
        duration: 20,
        repeat: Infinity,
      },
    },
  };

  // Light intensity animation
  const lightVariants = {
    initial: { opacity: 0.5 },
    animate: {
      opacity: [0.5, 0.8, 0.5],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: easeInOut,
      },
    },
  };

  // Subtle highlight animation
  const highlightVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: [0, 0.3, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: easeInOut,
      },
    },
  };

  return (
    <div
      className={`relative w-full ${sizeMap[size]} overflow-hidden rounded-[5px] bg-gradient-to-br from-white via-slate-50 to-slate-100 ${className}`}
      style={{ perspective: "1200px" }}
    >
      {/* Professional lighting background */}
      {animated && (
        <>
          {/* Top light */}
          <motion.div
            variants={lightVariants}
            initial="initial"
            animate="animate"
            className="absolute top-0 left-1/4 w-1/2 h-1/3 bg-gradient-to-b from-white/40 to-transparent blur-2xl"
          />

          {/* Side light */}
          <motion.div
            variants={lightVariants}
            initial="initial"
            animate="animate"
            className="absolute right-0 top-1/4 w-1/3 h-1/2 bg-gradient-to-l from-brand-primary/10 to-transparent blur-3xl"
            style={{ animationDelay: "-3s" }}
          />

          {/* Accent light */}
          <motion.div
            variants={lightVariants}
            initial="initial"
            animate="animate"
            className="absolute left-0 bottom-1/4 w-1/3 h-1/3 bg-gradient-to-r from-brand-primary/5 to-transparent blur-2xl"
            style={{ animationDelay: "-1.5s" }}
          />
        </>
      )}

      {/* 3D Rotating Product Container */}
      <motion.div
        variants={animated ? rotation3DVariants : {}}
        initial="initial"
        animate={animated ? "animate" : ""}
        className="relative w-full h-full flex items-center justify-center"
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-contain p-4 drop-shadow-xl"
        />
      </motion.div>

      {/* Professional highlight overlay */}
      {animated && (
        <motion.div
          variants={highlightVariants}
          initial="initial"
          animate="animate"
          className="absolute top-0 left-1/3 w-1/4 h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-0 blur-sm"
        />
      )}

      {/* Professional shadow base */}
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-black/10 via-black/5 to-transparent" />
    </div>
  );
}
