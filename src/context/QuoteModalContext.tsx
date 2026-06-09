"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import QuoteModal from "@/components/QuoteModal";

interface QuoteModalContextType {
  openModal: () => void;
}

const QuoteModalContext = createContext<QuoteModalContextType | null>(null);

export function QuoteModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <QuoteModalContext.Provider value={{ openModal: () => setIsOpen(true) }}>
      {children}
      <QuoteModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </QuoteModalContext.Provider>
  );
}

export function useQuoteModal() {
  const ctx = useContext(QuoteModalContext);
  if (!ctx) throw new Error("useQuoteModal must be used within QuoteModalProvider");
  return ctx;
}
