import { ReactElement } from "react";
import Link from "next/link";
import Image from "next/image";
import { getIndustries } from "@/lib/queries/industries";
import FooterNewsletter from "./FooterNewsletter";
import styles from "./Footer.module.css";

type IndustryRecord = {
  id: string;
  slug: string;
  name: string;
};

export default async function Footer(): Promise<ReactElement> {
  const year = new Date().getFullYear();
  const industries = (await getIndustries().catch(() => [])) as IndustryRecord[];
  const topIndustries = industries.slice(0, 6);

  return (
    <footer className={styles.footer}>
      <div className={styles.upper}>
        <div className={styles.upperGrid}>
          {/* Brand column */}
          <div className={styles.brandCol}>
            <Link href="/" className={styles.brandLink} aria-label="CPL Packaging Home">
              <Image
                src="/images/website-logo.webp"
                alt="Custom Packaging Lane"
                width={180}
                height={44}
                className={styles.brandLogo}
              />
            </Link>
            <p className={styles.brandTagline}>
              Premium custom packaging for brands that care. From concept to
              production — sustainable, branded packaging delivered worldwide
              in as little as 7 days.
            </p>
            <ul className={styles.contactList}>
              <li className={styles.contactItem}>
                <span aria-hidden className={styles.contactIcon}>
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </span>
                <a href="tel:+18001234567">+1 (800) 123-4567</a>
              </li>
              <li className={styles.contactItem}>
                <span aria-hidden className={styles.contactIcon}>
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </span>
                <a href="mailto:hello@custompackaginglane.com">
                  hello@custompackaginglane.com
                </a>
              </li>
            </ul>

            <ul className={styles.socials} aria-label="Social media">
              <li>
                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.772-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" /></svg>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" /></svg>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                </a>
              </li>
              <li>
                <a href="https://www.pinterest.com/" target="_blank" rel="noopener noreferrer" aria-label="Pinterest">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.951-7.252 4.168 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.367 18.592 0 12.017 0z" /></svg>
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className={styles.linksCol}>
            <h3 className={styles.colHeading}>Explore</h3>
            <ul className={styles.linkList}>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/products">All Products</Link></li>
              <li><Link href="/industries">Industries</Link></li>
              <li><Link href="/blogs">Blog</Link></li>
              <li><Link href="/about-us">About Us</Link></li>
              <li><Link href="/faq">FAQ</Link></li>
              <li><Link href="/contact-us">Contact</Link></li>
            </ul>
          </div>

          {/* Industries */}
          <div className={styles.linksCol}>
            <h3 className={styles.colHeading}>Industries</h3>
            <ul className={styles.linkList}>
              {topIndustries.length > 0 ? (
                topIndustries.map((ind) => (
                  <li key={ind.id}>
                    <Link href={`/industries/${ind.slug}`}>{ind.name}</Link>
                  </li>
                ))
              ) : (
                <>
                  <li><Link href="/industries">Food & Beverage</Link></li>
                  <li><Link href="/industries">E-Commerce</Link></li>
                  <li><Link href="/industries">Cosmetics & Beauty</Link></li>
                  <li><Link href="/industries">Pharmaceuticals</Link></li>
                  <li><Link href="/industries">Electronics</Link></li>
                  <li><Link href="/industries">Luxury Goods</Link></li>
                </>
              )}
              <li>
                <Link href="/industries" className={styles.linkAccent}>
                  View all industries →
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter / Quote CTA */}
          <div className={styles.newsletterCol}>
            <h3 className={styles.colHeading}>Stay in the Loop</h3>
            <p className={styles.newsletterIntro}>
              Get exclusive packaging deals, new material drops, and industry
              insights — twice a month, no spam.
            </p>
            <FooterNewsletter />
            <div className={styles.quoteBox}>
              <span className={styles.quoteEyebrow}>Need a custom quote?</span>
              <Link href="/contact-us" className={styles.quoteLink}>
                Request a Free Quote →
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.bottomBar}>
        <div className={styles.bottomInner}>
          <p className={styles.copyright}>
            © {year} Custom Packaging Lane. All rights reserved.
          </p>
          <ul className={styles.legalLinks} aria-label="Legal">
            <li><Link href="/privacy-policy">Privacy Policy</Link></li>
            <li><Link href="/terms-of-service">Terms of Service</Link></li>
            <li><Link href="/cookie-policy">Cookie Policy</Link></li>
            <li><Link href="/sitemap">Sitemap</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
