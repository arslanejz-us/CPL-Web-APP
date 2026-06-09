"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import QuoteModal from "./QuoteModal";

interface HeaderProps {
  industries?: Array<{ id: string; slug: string; name: string; icon_url?: string }>;
  featuredProducts?: Array<{ id?: string; slug?: string; name: string; short_description?: string; hero_image_url?: string | null }>;
}

const otherNavLinks = [
  { href: "/blogs", label: "Blog" },
  { href: "/about-us", label: "About" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact-us", label: "Contact" },
];

export default function Header({ industries = [], featuredProducts = [] }: HeaderProps) {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [isProductsMenuOpen, setIsProductsMenuOpen] = useState(false);
  const [isIndustriesMenuOpen, setIsIndustriesMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const productsRef = useRef<HTMLDivElement>(null);
  const productsButtonRef = useRef<HTMLButtonElement>(null);
  const industriesRef = useRef<HTMLDivElement>(null);
  const industriesButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [isMobileOpen]);

  // Close menus on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (productsRef.current && !productsRef.current.contains(e.target as Node) &&
        productsButtonRef.current && !productsButtonRef.current.contains(e.target as Node)) {
        setIsProductsMenuOpen(false);
      }
      if (industriesRef.current && !industriesRef.current.contains(e.target as Node) &&
        industriesButtonRef.current && !industriesButtonRef.current.contains(e.target as Node)) {
        setIsIndustriesMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  // Close on Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsProductsMenuOpen(false);
        setIsIndustriesMenuOpen(false);
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <header suppressHydrationWarning className={`sticky top-0 z-40 w-full transition-all duration-300 h-16 ${isScrolled ? "bg-white shadow-lg border-b border-slate-100" : "bg-white border-b border-slate-100"
      }`}>
      <nav className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between relative">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/images/website-logo.webp"
            alt="CPL Packaging"
            width={180}
            height={45}
            className="h-10 w-auto"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-1">
          {/* Home Link */}
          <Link
            href="/"
            className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-brand-primary transition-colors"
          >
            Home
          </Link>

          {/* Products Mega Menu */}
          <div className="relative group">
            <button
              ref={productsButtonRef}
              onClick={() => setIsProductsMenuOpen(!isProductsMenuOpen)}
              onMouseEnter={() => setIsProductsMenuOpen(true)}
              onMouseLeave={() => setIsProductsMenuOpen(false)}
              className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-brand-primary transition-colors flex items-center gap-1.5"
            >
              Products
              <ChevronDown className={`w-4 h-4 transition-transform ${isProductsMenuOpen ? "rotate-180" : ""}`} />
            </button>

            <AnimatePresence>
              {isProductsMenuOpen && (
                <motion.div
                  ref={productsRef}
                  onMouseEnter={() => setIsProductsMenuOpen(true)}
                  onMouseLeave={() => setIsProductsMenuOpen(false)}
                  initial={{ opacity: 0, y: -12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.25 }}
                  className="fixed left-0 right-0 top-16 w-full bg-gradient-to-b from-white via-white to-slate-50 border-b border-slate-200 shadow-xl z-50"
                >
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
                    {/* 4-Column Grid: 1 Intro + 3 Products */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                      {/* Column 1: Intro Section */}
                      <div className="lg:col-span-1 flex flex-col">
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-brand-charcoal mb-3">Our Products</h3>
                          <p className="text-slate-600 text-sm leading-relaxed">
                            Discover our complete range of premium custom packaging solutions designed to elevate your brand and protect your products.
                          </p>
                        </div>
                        <Link
                          href="/products"
                          onClick={() => setIsProductsMenuOpen(false)}
                          className="mt-6 inline-flex items-center gap-2 px-6 py-2.5 bg-brand-primary hover:bg-brand-charcoal text-white font-semibold text-sm rounded-lg transition-colors"
                        >
                          View All
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>

                      {/* Columns 2-4: Top 3 Featured Products */}
                      {featuredProducts.length > 0 ? (
                        featuredProducts.slice(0, 3).map((product) => (
                          <Link
                            key={product.id}
                            href={`/products/${product.slug}`}
                            onClick={() => setIsProductsMenuOpen(false)}
                            className="group lg:col-span-1"
                          >
                            <div className="relative bg-white rounded-xl border border-slate-200 overflow-hidden hover:border-brand-primary transition-all duration-300 hover:shadow-lg h-full flex flex-col">
                              <div className="h-32 bg-slate-100 overflow-hidden relative flex-shrink-0">
                                {product.hero_image_url ? (
                                  <Image
                                    src={product.hero_image_url}
                                    alt={product.name}
                                    width={300}
                                    height={128}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                  />
                                ) : (
                                  <div className="w-full h-full bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
                                    <span className="text-slate-400 text-xs">Product Image</span>
                                  </div>
                                )}
                              </div>
                              <div className="p-3 flex flex-col flex-1">
                                <h4 className="text-sm font-bold text-brand-charcoal group-hover:text-brand-primary transition-colors line-clamp-1">
                                  {product.name}
                                </h4>
                                {product.short_description && (
                                  <p className="text-xs text-slate-600 mt-1 line-clamp-1">{product.short_description}</p>
                                )}
                                <div className="mt-3 flex items-center gap-1.5 text-brand-primary font-semibold text-xs group-hover:gap-2 transition-all mt-auto">
                                  Learn More
                                  <ArrowRight className="w-3 h-3" />
                                </div>
                              </div>
                            </div>
                          </Link>
                        ))
                      ) : (
                        <div className="col-span-full py-8 text-center text-slate-500">
                          <p>Loading products...</p>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Industries Mega Menu */}
          <div className="relative group">
            <button
              ref={industriesButtonRef}
              onClick={() => setIsIndustriesMenuOpen(!isIndustriesMenuOpen)}
              onMouseEnter={() => setIsIndustriesMenuOpen(true)}
              onMouseLeave={() => setIsIndustriesMenuOpen(false)}
              className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-brand-primary transition-colors flex items-center gap-1.5"
            >
              Industries
              <ChevronDown className={`w-4 h-4 transition-transform ${isIndustriesMenuOpen ? "rotate-180" : ""}`} />
            </button>

            <AnimatePresence>
              {isIndustriesMenuOpen && (
                <motion.div
                  ref={industriesRef}
                  onMouseEnter={() => setIsIndustriesMenuOpen(true)}
                  onMouseLeave={() => setIsIndustriesMenuOpen(false)}
                  initial={{ opacity: 0, y: -12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.25 }}
                  className="fixed left-0 right-0 top-16 w-full bg-gradient-to-b from-white via-white to-slate-50 border-b border-slate-200 shadow-xl z-50"
                >
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
                    {/* Header */}
                    <div className="mb-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <div>
                        <h3 className="text-2xl font-bold text-brand-charcoal mb-2">Industries We Serve</h3>
                        <p className="text-slate-600 text-sm max-w-2xl">
                          Find packaging solutions tailored to your specific industry needs and requirements.
                        </p>
                      </div>
                      <Link
                        href="/industries"
                        onClick={() => setIsIndustriesMenuOpen(false)}
                        className="inline-flex items-center gap-2 px-6 py-2.5 bg-brand-primary hover:bg-brand-charcoal text-white font-semibold text-sm rounded-lg transition-colors flex-shrink-0"
                      >
                        View All
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>

                    {/* Industries Grid - Responsive multi-row */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-5">
                      {industries.length > 0 ? (
                        industries.map((industry) => (
                          <Link
                            key={industry.id}
                            href={`/industries/${industry.slug}`}
                            onClick={() => setIsIndustriesMenuOpen(false)}
                            className="group"
                          >
                            <div className="flex flex-col items-center text-center p-4 bg-white rounded-xl border border-slate-200 hover:border-brand-primary hover:shadow-md transition-all duration-300">
                              <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-brand-primary/10 to-brand-primary/10 flex items-center justify-center mb-3 group-hover:from-brand-primary/20 group-hover:to-brand-primary/20 transition-colors">
                                {industry.icon_url && (
                                  <Image
                                    src={industry.icon_url}
                                    alt={industry.name}
                                    width={40}
                                    height={40}
                                    className="w-10 h-10 object-contain"
                                  />
                                )}
                              </div>
                              <span className="text-sm font-bold text-brand-charcoal group-hover:text-brand-primary transition-colors leading-snug">
                                {industry.name}
                              </span>
                            </div>
                          </Link>
                        ))
                      ) : (
                        <div className="col-span-full py-8 text-center text-slate-500">
                          <p>Loading industries...</p>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Other Navigation Links */}
          {otherNavLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-brand-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={() => setIsQuoteModalOpen(true)}
            className="px-5 py-2.5 bg-brand-primary hover:bg-brand-charcoal text-white text-sm font-semibold rounded-lg transition-colors shadow-sm hover:shadow-md"
          >
            Get Quote
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="lg:hidden p-2 text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
          aria-label="Toggle menu"
        >
          {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lg:hidden fixed inset-0 top-16 z-50 bg-black/50"
            onClick={() => setIsMobileOpen(false)}
          >
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="w-80 h-[calc(100vh-4rem)] bg-white overflow-y-auto flex flex-col"
            >
              <nav className="flex-1 px-6 py-6 space-y-2">
                <Link
                  href="/"
                  onClick={() => setIsMobileOpen(false)}
                  className="block px-4 py-2.5 text-slate-700 hover:bg-slate-50 rounded-lg transition-colors text-sm font-medium"
                >
                  Home
                </Link>
                <Link
                  href="/products"
                  onClick={() => setIsMobileOpen(false)}
                  className="block px-4 py-2.5 text-slate-700 hover:bg-slate-50 rounded-lg transition-colors text-sm font-medium"
                >
                  Products
                </Link>
                <Link
                  href="/industries"
                  onClick={() => setIsMobileOpen(false)}
                  className="block px-4 py-2.5 text-slate-700 hover:bg-slate-50 rounded-lg transition-colors text-sm font-medium"
                >
                  Industries
                </Link>
                {otherNavLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileOpen(false)}
                    className="block px-4 py-2.5 text-slate-700 hover:bg-slate-50 rounded-lg transition-colors text-sm font-medium"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              <div className="border-t border-slate-100 p-6 space-y-3">
                <button
                  onClick={() => {
                    setIsMobileOpen(false);
                    setIsQuoteModalOpen(true);
                  }}
                  className="w-full px-4 py-2.5 bg-brand-primary hover:bg-brand-charcoal text-white text-sm font-semibold rounded-lg transition-colors"
                >
                  Get Quote
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <QuoteModal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} />
    </header>
  );
}
