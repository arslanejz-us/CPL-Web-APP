import type { Metadata } from "next";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | Custom Packaging Lane",
  description:
    "Get in touch with Custom Packaging Lane. Email, call, or message us for premium custom packaging solutions delivered in 7 days.",
};

const CONTACT_DETAILS = [
  {
    icon: Mail,
    label: "Email Us",
    value: "hello@custompackaginglane.com",
    href: "mailto:hello@custompackaginglane.com",
  },
  {
    icon: Phone,
    label: "Call Us",
    value: "+1 (800) 123-4567",
    href: "tel:+18001234567",
  },
  {
    icon: MapPin,
    label: "Visit Us",
    value: "1234 Packaging Ave, Suite 500, Los Angeles, CA 90001",
    href: "https://maps.google.com/?q=Los+Angeles+CA",
  },
  {
    icon: Clock,
    label: "Business Hours",
    value: "Mon - Fri: 9AM - 6PM PST",
    href: null,
  },
];

const SOCIAL_LINKS = [
  {
    href: "https://facebook.com/",
    label: "Facebook",
    svg: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.772-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z",
  },
  {
    href: "https://instagram.com/",
    label: "Instagram",
    svg: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z",
  },
  {
    href: "https://linkedin.com/",
    label: "LinkedIn",
    svg: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z",
  },
];

export default function ContactUsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-charcoal via-[#1a3d3a] to-brand-primary overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-brand-primary/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-20 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-12 lg:py-16">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block mb-3">
              <span className="text-[10px] font-bold tracking-widest uppercase text-brand-primary bg-white/5 border border-brand-primary/20 px-3 py-1.5 rounded-lg backdrop-blur-sm">
                Contact Us
              </span>
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-[1.15] tracking-tight mb-3">
              Let&apos;s Build Your{" "}
              <span className="bg-gradient-to-r from-brand-primary to-brand-primary/60 bg-clip-text text-transparent">
                Perfect Packaging
              </span>
            </h1>
            <p className="text-sm md:text-base text-white/80 leading-relaxed max-w-2xl mx-auto">
              Have a question or ready to start your project? Our packaging specialists are here to help you create custom solutions that elevate your brand.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content - 2 Column Layout */}
      <section className="py-10 lg:py-14 bg-slate-50 relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: 'radial-gradient(circle, rgba(16,150,137,0.08) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }} />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
            {/* LEFT: Company Information Panel */}
            <div className="space-y-5">
              {/* Intro Card */}
              <div className="relative bg-white rounded-2xl shadow-lg border border-slate-100 p-6 lg:p-7 overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-primary via-brand-primary/60 to-transparent" />
                <span className="inline-block mb-2">
                  <span className="text-[10px] font-bold tracking-widest uppercase text-brand-primary">
                    Who We Are
                  </span>
                </span>
                <h2 className="text-xl md:text-2xl font-extrabold text-brand-charcoal mb-2 leading-tight">
                  Premium Packaging Partners
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed">
                  We&apos;re a team of packaging specialists trusted by 5,000+ brands worldwide. From concept to production in 7 days, we deliver custom solutions that protect products and elevate brands.
                </p>
              </div>

              {/* Contact Details Card */}
              <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-6 lg:p-7 hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-base font-bold text-brand-charcoal mb-4">Contact Information</h3>
                <div className="space-y-2">
                  {CONTACT_DETAILS.map((detail) => {
                    const IconComp = detail.icon;
                    const content = (
                      <div className="group flex items-start gap-3 p-2.5 -mx-2.5 rounded-lg hover:bg-slate-50 transition-colors">
                        <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-brand-primary/15 to-brand-primary/5 rounded-lg flex items-center justify-center group-hover:from-brand-primary/25 group-hover:to-brand-primary/10 transition-colors">
                          <IconComp className="w-4 h-4 text-brand-primary" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-[10px] font-bold tracking-widest uppercase text-slate-400 mb-0.5">
                            {detail.label}
                          </p>
                          <p className="text-sm font-semibold text-brand-charcoal break-words group-hover:text-brand-primary transition-colors">
                            {detail.value}
                          </p>
                        </div>
                      </div>
                    );

                    return detail.href ? (
                      <a key={detail.label} href={detail.href} target={detail.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
                        {content}
                      </a>
                    ) : (
                      <div key={detail.label}>{content}</div>
                    );
                  })}
                </div>

                {/* Social Links */}
                <div className="mt-5 pt-5 border-t border-slate-100">
                  <p className="text-[10px] font-bold tracking-widest uppercase text-slate-400 mb-3">
                    Follow Us
                  </p>
                  <div className="flex gap-2.5">
                    {SOCIAL_LINKS.map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                        className="group w-10 h-10 rounded-lg bg-slate-50 hover:bg-brand-primary border border-slate-200 hover:border-brand-primary text-slate-600 hover:text-white flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md hover:shadow-brand-primary/30"
                      >
                        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                          <path d={social.svg} />
                        </svg>
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Google Map */}
              <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-2 overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden bg-slate-100">
                  <iframe
                    src="https://maps.google.com/maps?q=Los+Angeles,+CA,+USA&t=&z=11&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Custom Packaging Lane Office Location"
                    className="absolute inset-0 w-full h-full"
                  />
                </div>
              </div>
            </div>

            {/* RIGHT: Contact Form Panel */}
            <div className="lg:sticky lg:top-24 lg:self-start">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="bg-brand-charcoal py-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl md:text-3xl font-extrabold text-brand-primary mb-1">24h</div>
              <p className="text-xs text-white/70 font-medium">Response Time</p>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-extrabold text-brand-primary mb-1">5,000+</div>
              <p className="text-xs text-white/70 font-medium">Brands Served</p>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-extrabold text-brand-primary mb-1">7 Days</div>
              <p className="text-xs text-white/70 font-medium">Production</p>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-extrabold text-brand-primary mb-1">98%</div>
              <p className="text-xs text-white/70 font-medium">Satisfaction</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
