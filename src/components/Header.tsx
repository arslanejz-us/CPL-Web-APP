"use client";

import { ReactElement, useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import QuoteModal from "./QuoteModal";

interface HeaderProps {
  industries?: { id: string; slug: string; name: string; icon?: string; icon_url?: string; short_description?: string }[];
}

export default function Header({ industries = [] }: HeaderProps): ReactElement {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [isMobileIndustriesOpen, setIsMobileIndustriesOpen] = useState(false);
  const [isIndustriesPanelOpen, setIsIndustriesPanelOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const industriesTriggerRef = useRef<HTMLButtonElement | null>(null);
  const industriesPanelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen || isQuoteModalOpen || isIndustriesPanelOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen, isQuoteModalOpen, isIndustriesPanelOpen]);

  useEffect(() => {
    if (!isIndustriesPanelOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsIndustriesPanelOpen(false);
        industriesTriggerRef.current?.focus();
        return;
      }
      if (e.key === "Tab" && industriesPanelRef.current) {
        const focusables = industriesPanelRef.current.querySelectorAll<HTMLElement>(
          "a, button, [tabindex]:not([tabindex=\"-1\"])"
        );
        if (focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault(); last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault(); first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    const t = window.setTimeout(() => {
      industriesPanelRef.current?.querySelector<HTMLElement>("a, button")?.focus();
    }, 50);
    return () => { document.removeEventListener("keydown", onKey); window.clearTimeout(t); };
  }, [isIndustriesPanelOpen]);

  const navLinkClass = "flex items-center gap-1 text-sm font-medium text-white/85 hover:text-white transition-colors duration-200 py-1";

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? "bg-brand-navy/95 backdrop-blur-md shadow-lg shadow-black/20" : "bg-brand-navy"}`}>
      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/images/website-logo.webp"
              alt="Custom Packaging Lane Logo"
              width={180}
              height={45}
              className="h-10 w-auto"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link href="/" className={navLinkClass}>Home</Link>
            <Link href="/products" className={navLinkClass}>
              Products
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5"><polyline points="6 9 12 15 18 9" /></svg>
            </Link>
            <button
              ref={industriesTriggerRef}
              type="button"
              className={`${navLinkClass} bg-transparent border-0 cursor-pointer`}
              aria-haspopup="dialog"
              aria-expanded={isIndustriesPanelOpen}
              aria-controls="industries-panel"
              onClick={() => setIsIndustriesPanelOpen(true)}
            >
              Industries
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5"><polyline points="6 9 12 15 18 9" /></svg>
            </button>
            <Link href="/blogs" className={navLinkClass}>Blog</Link>
            <Link href="/about-us" className={navLinkClass}>About</Link>
            <Link href="/faq" className={navLinkClass}>FAQ</Link>
            <Link href="/contact-us" className={navLinkClass}>Contact</Link>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => setIsQuoteModalOpen(true)}
              className="inline-flex items-center gap-2 bg-brand-accent hover:bg-brand-accent-light text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              Rush Order
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden p-2 text-white/80 hover:text-white transition-colors"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open Mobile Menu"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
              <line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            key="mobile-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 lg:hidden"
          >
            <div className="absolute inset-0 bg-black/60" onClick={() => setIsMobileMenuOpen(false)} />
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "tween", ease: [0.4, 0, 0.2, 1], duration: 0.32 }}
              className="absolute top-0 left-0 bottom-0 w-80 bg-brand-navy shadow-2xl flex flex-col"
            >
              {/* Mobile Header */}
              <div className="flex items-center justify-between px-6 h-16 border-b border-white/10">
                <Image src="/images/website-logo.webp" alt="Custom Packaging Lane Logo" width={140} height={35} className="h-9 w-auto" />
                <button onClick={() => setIsMobileMenuOpen(false)} className="p-1 text-white/70 hover:text-white" aria-label="Close Mobile Menu">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                    <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>

              {/* Mobile Nav Links */}
              <nav className="flex-1 overflow-y-auto px-6 py-6">
                <ul className="space-y-1">
                  {[
                    { href: "/", label: "Home" },
                    { href: "/products", label: "Products" },
                    { href: "/blogs", label: "Blog" },
                    { href: "/about-us", label: "About" },
                    { href: "/faq", label: "FAQ" },
                    { href: "/contact-us", label: "Contact" },
                  ].map(({ href, label }) => (
                    <li key={href}>
                      <Link
                        href={href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block px-3 py-2.5 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors text-sm font-medium"
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                  {/* Industries accordion */}
                  <li>
                    <div className="flex items-center justify-between px-3 py-2.5 rounded-lg">
                      <Link href="/industries" onClick={() => setIsMobileMenuOpen(false)} className="text-white/80 hover:text-white text-sm font-medium">
                        Industries
                      </Link>
                      <button
                        onClick={() => setIsMobileIndustriesOpen(!isMobileIndustriesOpen)}
                        className="p-1 text-white/60 hover:text-white"
                      >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                          className={`w-4 h-4 transition-transform ${isMobileIndustriesOpen ? "rotate-180" : ""}`}>
                          <polyline points="6 9 12 15 18 9" />
                        </svg>
                      </button>
                    </div>
                    <AnimatePresence>
                      {isMobileIndustriesOpen && (
                        <motion.ul
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden pl-3 mt-1 space-y-1"
                        >
                          {industries.map((ind) => (
                            <li key={ind.id}>
                              <Link
                                href={`/industries/${ind.slug}`}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="block px-3 py-2 text-white/60 hover:text-white text-xs font-medium rounded-lg hover:bg-white/5 transition-colors"
                              >
                                {ind.name}
                              </Link>
                            </li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </li>
                </ul>
              </nav>

              {/* Mobile Footer CTA */}
              <div className="px-6 py-6 border-t border-white/10">
                <button
                  onClick={() => { setIsMobileMenuOpen(false); setIsQuoteModalOpen(true); }}
                  className="w-full bg-brand-accent hover:bg-brand-accent-light text-white font-semibold py-3 rounded-lg transition-colors text-sm"
                >
                  Rush Order
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Industries Slide-In Panel */}
      <AnimatePresence>
        {isIndustriesPanelOpen && (
          <>
            <motion.div
              key="industries-backdrop"
              className="fixed inset-0 z-50 bg-black/50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setIsIndustriesPanelOpen(false)}
              aria-hidden
            />
            <motion.div
              key="industries-panel"
              ref={industriesPanelRef}
              id="industries-panel"
              role="dialog"
              aria-modal="true"
              aria-labelledby="industries-panel-title"
              className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-md bg-white shadow-2xl flex flex-col"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", ease: [0.4, 0, 0.2, 1], duration: 0.32 }}
            >
              {/* Panel Header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-border">
                <h2 id="industries-panel-title" className="text-lg font-display font-bold text-brand-navy">
                  Browse by Industry
                </h2>
                <button
                  type="button"
                  onClick={() => setIsIndustriesPanelOpen(false)}
                  aria-label="Close industries menu"
                  className="p-2 text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                    <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>

              {/* Panel Body */}
              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {/* Feature tile */}
                <Link
                  href="/contact-us?topic=industry-fit"
                  onClick={() => setIsIndustriesPanelOpen(false)}
                  className="group flex items-center justify-between bg-gradient-to-br from-brand-primary/10 to-brand-light/5 border border-brand-primary/20 rounded-xl p-4 hover:shadow-md transition-all"
                >
                  <div>
                    <span className="text-xs font-semibold text-brand-accent uppercase tracking-wider">Need help?</span>
                    <strong className="block text-sm font-display font-bold text-brand-navy mt-0.5">Not sure which industry fits your product?</strong>
                    <span className="text-xs text-muted-foreground mt-0.5 block">Get a free expert recommendation in 24 hours.</span>
                  </div>
                  <span aria-hidden className="text-brand-primary text-xl ml-3 group-hover:translate-x-1 transition-transform">→</span>
                </Link>

                {/* Industries grid */}
                <ul className="grid grid-cols-1 gap-2">
                  {industries.map((ind) => (
                    <li key={ind.id}>
                      <Link
                        href={`/industries/${ind.slug}`}
                        onClick={() => setIsIndustriesPanelOpen(false)}
                        className="group flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-muted transition-colors"
                      >
                        <div className="w-10 h-10 rounded-lg bg-white border border-border shadow-sm flex items-center justify-center flex-shrink-0">
                          <Image
                            src={ind.icon_url || "/images/hero-bg.png"}
                            alt=""
                            width={28}
                            height={28}
                            className="w-7 h-7 object-contain"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="block text-sm font-semibold text-brand-navy group-hover:text-brand-primary transition-colors">{ind.name}</span>
                          {ind.short_description && (
                            <span className="block text-xs text-muted-foreground truncate">{ind.short_description}</span>
                          )}
                        </div>
                        <span aria-hidden className="text-muted-foreground group-hover:text-brand-primary group-hover:translate-x-0.5 transition-all text-sm">→</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Panel Footer */}
              <div className="px-6 py-4 border-t border-border">
                <Link
                  href="/industries"
                  onClick={() => setIsIndustriesPanelOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-2.5 text-sm font-semibold text-brand-primary hover:text-brand-light transition-colors"
                >
                  View All Industries →
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <QuoteModal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} />
    </header>
  );
}
