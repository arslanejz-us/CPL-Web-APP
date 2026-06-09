import Link from "next/link";
import Image from "next/image";
import { getIndustries } from "@/lib/queries/industries";
import FooterNewsletter from "./FooterNewsletter";
import { Mail, Phone, MapPin } from "lucide-react";

type IndustryRecord = {
  id: string;
  slug: string;
  name: string;
};

export default async function Footer() {
  const year = new Date().getFullYear();
  const industries = (await getIndustries().catch(() => [])) as IndustryRecord[];
  const topIndustries = industries.slice(0, 6);

  return (
    <>
      {/* Wave SVG Divider */}
      <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-auto block" style={{ marginBottom: "-1px" }}>
        <path
          d="M0,50 Q300,0 600,50 T1200,50 L1200,120 L0,120 Z"
          fill="#1E1E1E"
        />
      </svg>

      <footer className="bg-brand-charcoal text-white">
      {/* Upper Section */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-16 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand Column */}
            <div className="lg:col-span-1">
              <Link href="/" className="inline-block mb-6" aria-label="CPL Packaging Home">
                <Image
                  src="/images/website-logo.webp"
                  alt="CPL Packaging"
                  width={180}
                  height={45}
                  className="h-10 w-auto"
                />
              </Link>
              <p className="text-sm text-white/70 leading-relaxed mb-6">
                Premium custom packaging for brands that care. From concept to
                production — sustainable, branded packaging delivered worldwide
                in as little as 7 days.
              </p>

              {/* Contact Info */}
              <div className="space-y-3 mb-8">
                <a href="tel:+18001234567" className="flex items-center gap-3 text-sm text-white/80 hover:text-brand-primary transition-colors">
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  <span>+1 (800) 123-4567</span>
                </a>
                <a href="mailto:hello@custompackaginglane.com" className="flex items-center gap-3 text-sm text-white/80 hover:text-brand-primary transition-colors">
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  <span>hello@cpl.com</span>
                </a>
              </div>

              {/* Social Links */}
              <div className="flex gap-4">
                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-10 h-10 rounded-lg bg-white/10 hover:bg-brand-primary transition-colors flex items-center justify-center text-white hover:text-brand-charcoal">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.772-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" /></svg>
                </a>
                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-10 h-10 rounded-lg bg-white/10 hover:bg-brand-primary transition-colors flex items-center justify-center text-white hover:text-brand-charcoal">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" /></svg>
                </a>
                <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-10 h-10 rounded-lg bg-white/10 hover:bg-brand-primary transition-colors flex items-center justify-center text-white hover:text-brand-charcoal">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                </a>
                <a href="https://www.pinterest.com/" target="_blank" rel="noopener noreferrer" aria-label="Pinterest" className="w-10 h-10 rounded-lg bg-white/10 hover:bg-brand-primary transition-colors flex items-center justify-center text-white hover:text-brand-charcoal">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.951-7.252 4.168 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.367 18.592 0 12.017 0z" /></svg>
                </a>
              </div>
            </div>

            {/* Explore Links */}
            <div>
              <h3 className="font-bold text-lg mb-6">Explore</h3>
              <ul className="space-y-3">
                <li><Link href="/" className="text-sm text-white/80 hover:text-brand-primary transition-colors">Home</Link></li>
                <li><Link href="/products" className="text-sm text-white/80 hover:text-brand-primary transition-colors">All Products</Link></li>
                <li><Link href="/industries" className="text-sm text-white/80 hover:text-brand-primary transition-colors">Industries</Link></li>
                <li><Link href="/blogs" className="text-sm text-white/80 hover:text-brand-primary transition-colors">Blog</Link></li>
                <li><Link href="/about-us" className="text-sm text-white/80 hover:text-brand-primary transition-colors">About Us</Link></li>
                <li><Link href="/faq" className="text-sm text-white/80 hover:text-brand-primary transition-colors">FAQ</Link></li>
                <li><Link href="/contact-us" className="text-sm text-white/80 hover:text-brand-primary transition-colors">Contact</Link></li>
              </ul>
            </div>

            {/* Industries Links */}
            <div>
              <h3 className="font-bold text-lg mb-6">Industries</h3>
              <ul className="space-y-3">
                {topIndustries.length > 0 ? (
                  topIndustries.map((ind) => (
                    <li key={ind.id}>
                      <Link href={`/industries/${ind.slug}`} className="text-sm text-white/80 hover:text-brand-primary transition-colors">
                        {ind.name}
                      </Link>
                    </li>
                  ))
                ) : (
                  <>
                    <li><Link href="/industries" className="text-sm text-white/80 hover:text-brand-primary transition-colors">Food & Beverage</Link></li>
                    <li><Link href="/industries" className="text-sm text-white/80 hover:text-brand-primary transition-colors">E-Commerce</Link></li>
                    <li><Link href="/industries" className="text-sm text-white/80 hover:text-brand-primary transition-colors">Cosmetics</Link></li>
                    <li><Link href="/industries" className="text-sm text-white/80 hover:text-brand-primary transition-colors">Pharmaceuticals</Link></li>
                    <li><Link href="/industries" className="text-sm text-white/80 hover:text-brand-primary transition-colors">Electronics</Link></li>
                  </>
                )}
                <li>
                  <Link href="/industries" className="text-sm text-brand-primary hover:text-orange-400 transition-colors font-semibold">
                    View All →
                  </Link>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="font-bold text-lg mb-6">Stay Updated</h3>
              <p className="text-sm text-white/80 mb-4">
                Get exclusive packaging deals and industry insights — twice a month, no spam.
              </p>
              <div className="mb-8">
                <FooterNewsletter />
              </div>

              {/* Quote CTA */}
              <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                <p className="text-xs font-bold uppercase tracking-widest text-brand-primary mb-2">
                  Need Help?
                </p>
                <Link href="/contact-us" className="text-sm font-semibold text-white hover:text-brand-primary transition-colors inline-flex items-center gap-2">
                  Request a Free Quote →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row justify-between items-center text-sm text-white/60 gap-4">
        <p>© {year} CPL Packaging. All rights reserved.</p>
        <ul className="flex gap-6" aria-label="Legal">
          <li><Link href="/privacy-policy" className="hover:text-brand-primary transition-colors">Privacy</Link></li>
          <li><Link href="/terms-of-service" className="hover:text-brand-primary transition-colors">Terms</Link></li>
          <li><Link href="/cookie-policy" className="hover:text-brand-primary transition-colors">Cookies</Link></li>
          <li><Link href="/sitemap" className="hover:text-brand-primary transition-colors">Sitemap</Link></li>
        </ul>
      </div>
    </footer>
    </>
  );
}
