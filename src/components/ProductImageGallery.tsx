"use client";

import { useState, useRef } from "react";
import Image from "next/image";

interface ProductImageGalleryProps {
  mainImage: string;
  productName: string;
}

export default function ProductImageGallery({ mainImage, productName }: ProductImageGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [transform, setTransform] = useState({ x: 0, y: 0, scale: 1 });
  const containerRef = useRef<HTMLDivElement>(null);

  const thumbnails = [mainImage, mainImage, mainImage, mainImage];

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const cx = (e.clientX - rect.left) / rect.width - 0.5;
    const cy = (e.clientY - rect.top) / rect.height - 0.5;
    setTransform({ x: cx * 12, y: cy * 10, scale: 1.06 });
  }

  function handleMouseLeave() {
    setTransform({ x: 0, y: 0, scale: 1 });
  }

  return (
    <div className="flex flex-col gap-4">
      {/* Main Image with Parallax */}
      <div
        ref={containerRef}
        className="relative w-full aspect-square rounded-2xl overflow-hidden bg-slate-50 border border-slate-200 shadow-md"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <Image
          key={selectedIndex}
          src={mainImage}
          alt={`${productName} - view ${selectedIndex + 1}`}
          fill
          className="object-contain p-2"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
          style={{
            transform: `translate(${transform.x}px, ${transform.y}px) scale(${transform.scale})`,
            transition: 'transform 0.2s ease-out',
          }}
        />
      </div>

      {/* Thumbnails */}
      <div className="flex gap-2">
        {thumbnails.map((thumb, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedIndex(idx)}
            className={`relative w-24 h-24 rounded-lg overflow-hidden border-2 transition-all duration-200 flex-shrink-0 ${
              selectedIndex === idx
                ? "border-brand-primary shadow-lg scale-105"
                : "border-slate-200 hover:border-brand-primary/50"
            }`}
            aria-label={`View product image ${idx + 1}`}
            aria-pressed={selectedIndex === idx}
          >
            <Image
              src={thumb}
              alt={`${productName} thumbnail ${idx + 1}`}
              fill
              className="object-contain p-2"
              sizes="96px"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
