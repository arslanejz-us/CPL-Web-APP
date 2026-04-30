"use client";

import { ReactElement, useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import QuoteModal from "./QuoteModal";
import styles from "./Header.module.css";

const Icons = {
  Facebook: () => (
    <svg viewBox="0 0 24 24" className={styles.socialIconSvg}><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" /></svg>
  ),
  Instagram: () => (
    <svg viewBox="0 0 24 24" className={styles.socialIconSvg}><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
  ),
  LinkedIn: () => (
    <svg viewBox="0 0 24 24" className={styles.socialIconSvg}><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
  ),
  Pinterest: () => (
    <svg viewBox="0 0 24 24" className={styles.socialIconSvg}><path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.951-7.252 4.168 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.367 18.592 0 12.017 0z" /></svg>
  ),
  ChevronDown: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={styles.dropdownIcon}><polyline points="6 9 12 15 18 9" /></svg>
  ),
  Search: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.searchIcon}><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
  ),
  Hamburger: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.hamburgerIcon}><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="18" x2="21" y2="18" /></svg>
  ),
  Close: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.closeIcon}><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
  )
};

interface HeaderProps {
  industries?: { id: string; slug: string; name: string; icon?: string; icon_url?: string; short_description?: string }[];
}

export default function Header({ industries = [] }: HeaderProps): ReactElement {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [isMobileIndustriesOpen, setIsMobileIndustriesOpen] = useState(false);
  const [isIndustriesPanelOpen, setIsIndustriesPanelOpen] = useState(false);
  const industriesTriggerRef = useRef<HTMLButtonElement | null>(null);
  const industriesPanelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (isMobileMenuOpen || isQuoteModalOpen || isIndustriesPanelOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen, isQuoteModalOpen, isIndustriesPanelOpen]);

  // Close industries panel on ESC and trap focus inside it.
  useEffect(() => {
    if (!isIndustriesPanelOpen) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsIndustriesPanelOpen(false);
        industriesTriggerRef.current?.focus();
        return;
      }
      if (e.key === 'Tab' && industriesPanelRef.current) {
        const focusables = industriesPanelRef.current.querySelectorAll<HTMLElement>(
          'a, button, [tabindex]:not([tabindex="-1"])'
        );
        if (focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener('keydown', onKey);
    // Move focus into the panel when it opens
    const t = window.setTimeout(() => {
      industriesPanelRef.current?.querySelector<HTMLElement>('a, button')?.focus();
    }, 50);

    return () => {
      document.removeEventListener('keydown', onKey);
      window.clearTimeout(t);
    };
  }, [isIndustriesPanelOpen]);

  return (
    <header className={styles.headerContainer}>
      {/* Top Bar */}


      {/* Main Navigation */}
      <div className={styles.mainNavWrapper}>
        <div className={styles.mainNav}>
          {/* Brand/Logo Section */}
          <Link href="/" className={styles.brandContainer}>
            <Image
              src="/images/website-logo.webp"
              alt="Custom Packaging Lane Logo"
              width={200}
              height={50}
              className={styles.logoImage}
              priority
            />
          </Link>

          {/* Desktop Links */}
          <ul className={styles.navMenu}>
            <li className={styles.navItem}>
              <Link href="/" className={styles.navLink}>Home</Link>
            </li>

            <li className={styles.navItem}>
              <Link href="/products" className={styles.navLink}>
                Products <Icons.ChevronDown />
              </Link>
            </li>

            <li className={styles.navItem}>
              <button
                ref={industriesTriggerRef}
                type="button"
                className={`${styles.navLink} ${styles.navLinkButton}`}
                aria-haspopup="dialog"
                aria-expanded={isIndustriesPanelOpen}
                aria-controls="industries-panel"
                onClick={() => setIsIndustriesPanelOpen(true)}
              >
                Industries <Icons.ChevronDown />
              </button>
            </li>

            <li className={styles.navItem}>
              <Link href="/blogs" className={styles.navLink}>Blog</Link>
            </li>

            <li className={styles.navItem}>
              <Link href="/about-us" className={styles.navLink}>About</Link>
            </li>

            <li className={styles.navItem}>
              <Link href="/faq" className={styles.navLink}>FAQ</Link>
            </li>

            <li className={styles.navItem}>
              <Link href="/contact-us" className={styles.navLink}>Contact</Link>
            </li>
          </ul>

          {/* Right Actions - Desktop */}
          <div className={styles.headerActions}>
            <div className={styles.searchContainer}>
              <Icons.Search />
            </div>
            <button className={styles.ctaBtn} onClick={() => setIsQuoteModalOpen(true)}>
              Rush Order
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            className={styles.mobileMenuToggle}
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open Mobile Menu"
          >
            <Icons.Hamburger />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`${styles.mobileMenuOverlay} ${isMobileMenuOpen ? styles.mobileMenuOpen : ''}`}>
        <div className={styles.mobileMenuContent}>
          <div className={styles.mobileMenuHeader}>
            <Image
              src="/images/website-logo.webp"
              alt="Custom Packaging Lane Logo"
              width={160}
              height={40}
              className={styles.logoImage}
            />
            <button
              className={styles.mobileMenuClose}
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close Mobile Menu"
            >
              <Icons.Close />
            </button>
          </div>

          <ul className={styles.mobileNavMenu}>
            <li><Link href="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link></li>
            <li><Link href="/products" onClick={() => setIsMobileMenuOpen(false)}>Products</Link></li>
            <li className={styles.mobileAccordionItem}>
              <div className={styles.mobileAccordionHeader}>
                <Link href="/industries" onClick={() => setIsMobileMenuOpen(false)}>Industries</Link>
                <button 
                  className={`${styles.mobileAccordionToggle} ${isMobileIndustriesOpen ? styles.rotated : ''}`}
                  onClick={() => setIsMobileIndustriesOpen(!isMobileIndustriesOpen)}
                >
                  <Icons.ChevronDown />
                </button>
              </div>
              <div className={`${styles.mobileAccordionContent} ${isMobileIndustriesOpen ? styles.expanded : ''}`}>
                {industries.map(ind => (
                  <Link key={ind.id} href={`/industries/${ind.slug}`} onClick={() => setIsMobileMenuOpen(false)} className={styles.mobileSubLink}>
                    {ind.name}
                  </Link>
                ))}
              </div>
            </li>
            <li><Link href="/blogs" onClick={() => setIsMobileMenuOpen(false)}>Blog</Link></li>
            <li><Link href="/about-us" onClick={() => setIsMobileMenuOpen(false)}>About</Link></li>
            <li><Link href="/faq" onClick={() => setIsMobileMenuOpen(false)}>FAQ</Link></li>
            <li><Link href="/contact-us" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link></li>
          </ul>

          <div className={styles.mobileMenuFooter}>
            <button className={styles.ctaBtnMobile} onClick={() => { setIsMobileMenuOpen(false); setIsQuoteModalOpen(true); }}>
              Rush Order
            </button>
          </div>
        </div>
      </div>

      {/* Industries Slide-In Panel */}
      <AnimatePresence>
        {isIndustriesPanelOpen && (
          <>
            <motion.div
              key="industries-backdrop"
              className={styles.industriesBackdrop}
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
              className={styles.industriesPanel}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", ease: [0.4, 0, 0.2, 1], duration: 0.32 }}
            >
              <div className={styles.industriesPanelHeader}>
                <h2 id="industries-panel-title" className={styles.industriesPanelTitle}>
                  Browse by Industry
                </h2>
                <button
                  type="button"
                  className={styles.industriesPanelClose}
                  onClick={() => setIsIndustriesPanelOpen(false)}
                  aria-label="Close industries menu"
                >
                  <Icons.Close />
                </button>
              </div>

              <div className={styles.industriesPanelBody}>
                <Link
                  href="/contact-us?topic=industry-fit"
                  className={styles.industriesFeatureTile}
                  onClick={() => setIsIndustriesPanelOpen(false)}
                >
                  <div>
                    <span className={styles.industriesFeatureEyebrow}>Need help?</span>
                    <strong className={styles.industriesFeatureTitle}>
                      Not sure which industry fits your product?
                    </strong>
                    <span className={styles.industriesFeatureSub}>
                      Get a free expert recommendation in 24 hours.
                    </span>
                  </div>
                  <span aria-hidden className={styles.industriesFeatureArrow}>→</span>
                </Link>

                <ul className={styles.industriesGrid}>
                  {industries.map((ind) => (
                    <li key={ind.id}>
                      <Link
                        href={`/industries/${ind.slug}`}
                        className={styles.industriesCard}
                        onClick={() => setIsIndustriesPanelOpen(false)}
                      >
                        <div className={styles.industriesCardIcon}>
                          <Image
                            src={ind.icon_url || "/images/hero-bg.png"}
                            alt=""
                            width={40}
                            height={40}
                            className={styles.industriesCardIconImg}
                          />
                        </div>
                        <div className={styles.industriesCardText}>
                          <span className={styles.industriesCardTitle}>{ind.name}</span>
                          {ind.short_description && (
                            <span className={styles.industriesCardSub}>
                              {ind.short_description}
                            </span>
                          )}
                        </div>
                        <span aria-hidden className={styles.industriesCardArrow}>→</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.industriesPanelFooter}>
                <Link
                  href="/industries"
                  className={styles.industriesViewAll}
                  onClick={() => setIsIndustriesPanelOpen(false)}
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
