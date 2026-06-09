"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import QuoteModal from "./QuoteModal";

interface QuoteModalClientProps {
  productName: string;
  productId?: string;
}

export default function QuoteModalClient({ productName, productId }: QuoteModalClientProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="group relative inline-flex items-center justify-center gap-2 px-8 py-3 bg-brand-primary hover:bg-brand-primary/95 text-white font-semibold text-sm rounded-lg transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-brand-primary/30 hover:-translate-y-0.5 overflow-hidden"
      >
        <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/15 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
        <span className="relative flex items-center gap-2">
          Get a Free Quote
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </span>
      </button>
      <QuoteModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
