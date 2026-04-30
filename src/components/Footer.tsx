import { ReactElement } from "react";
import Link from "next/link";
import Image from "next/image";
import { getIndustries } from "@/lib/queries/industries";
import FooterNewsletter from "./FooterNewsletter";

type IndustryRecord = {
  id: string;
  slug: string;
  name: string;
};

export default async function Footer(): Promise<ReactElement> {
  const year = new Date().getFullYear();
  const industries = (await getIndustries().catch(() => [])) as IndustryRecord[];
  const topIndustries = industries.slice(0, 6);

  const linkClass = "text-white/55 hover:text-white text-sm transition-colors duration-200";
  const headingClass = "text-white font-display font-semibold text-sm uppercase tracking-widest mb-5";

  return (
    <footer className="bg-brand-navy text-white">
      {/* Upper */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="/" aria-label="CPL Packaging Home" className="inline-block mb-5">
              <Image
                src="/images/website-logo.webp"
                alt="Custom Packaging Lane"
                width={160}
                height={40}
                className="h-10 w-auto brightness-200"
              />
            </Link>
            <p className="text-white/55 text-sm leading-relaxed mb-6">
              Premium custom packaging for brands that care. From concept to
              production — sustainable, branded packaging delivered worldwide
              in as little as 7 days.
            </p>
            <ul className="space-y-2.5 mb-6">
              <li className="flex items-center gap-2.5 text-white/55 text-sm">
                <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 text-brand-accent">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.19 12 19.79 19.79 0 0 1 1.12 3.36 2 2 0 0 1 3.1 1.14h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91A16 16 0 0 0 14 15.86l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <a href="tel:+18001234567" className="hover:text-white transition-colors">+1 (800) 123-4567</a>
              </li>
              <li className="flex items-center gap-2.5 text-white/55 text-sm">
                <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 text-brand-accent">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <a href="mailto:hello@custompackaginglane.com" className="hover:text-white transition-colors">hello@custompackaginglane.com</a>
              </li>
            </ul>
            {/* Socials */}
            <ul className="flex items-center gap-3" aria-label="Social media">
              {[
                { href: "https://www.facebook.com/", label: "Facebook", d: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.772-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" },
                { href: "https://www.instagram.com/", label: "Instagram", d: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" },
                { href: "https://www.linkedin.com/", label: "LinkedIn", d: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" },
              ].map(({ href, label, d }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-9 h-9 rounded-lg bg-white/10 hover:bg-brand-accent flex items-center justify-center transition-colors duration-200"
                  >
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d={d} /></svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className={headingClass}>Explore</h3>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/products", label: "All Products" },
                { href: "/industries", label: "Industries" },
                { href: "/blogs", label: "Blog" },
                { href: "/about-us", label: "About Us" },
                { href: "/faq", label: "FAQ" },
                { href: "/contact-us", label: "Contact" },
              ].map(({ href, label }) => (
                <li key={href}><Link href={href} className={linkClass}>{label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className={headingClass}>Industries</h3>
            <ul className="space-y-3">
              {topIndustries.length > 0 ? (
                topIndustries.map((ind) => (
                  <li key={ind.id}>
                    <Link href={`/industries/${ind.slug}`} className={linkClass}>{ind.name}</Link>
                  </li>
                ))
              ) : (
                <>
                  {["Food & Beverage", "E-Commerce", "Cosmetics & Beauty", "Pharmaceuticals", "Electronics", "Luxury Goods"].map((name) => (
                    <li key={name}><Link href="/industries" className={linkClass}>{name}</Link></li>
                  ))}
                </>
              )}
              <li>
                <Link href="/industries" className="text-brand-accent hover:text-brand-accent-light text-sm font-medium transition-colors">
                  View all industries →
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className={headingClass}>Stay in the Loop</h3>
            <p className="text-white/55 text-sm leading-relaxed mb-5">
              Get exclusive packaging deals, new material drops, and industry
              insights — twice a month, no spam.
            </p>
            <FooterNewsletter />
            <div className="mt-6 p-4 bg-white/5 rounded-xl border border-white/10">
              <span className="block text-xs font-semibold text-white/50 uppercase tracking-widest mb-2">Need a custom quote?</span>
              <Link href="/contact-us" className="text-brand-accent hover:text-brand-accent-light text-sm font-semibold transition-colors">
                Request a Free Quote →
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs">
            © {year} Custom Packaging Lane. All rights reserved.
          </p>
          <ul className="flex flex-wrap items-center gap-4" aria-label="Legal">
            {[
              { href: "/privacy-policy", label: "Privacy Policy" },
              { href: "/terms-of-service", label: "Terms of Service" },
              { href: "/cookie-policy", label: "Cookie Policy" },
              { href: "/sitemap", label: "Sitemap" },
            ].map(({ href, label }) => (
              <li key={href}>
                <Link href={href} className="text-white/40 hover:text-white/70 text-xs transition-colors">{label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
