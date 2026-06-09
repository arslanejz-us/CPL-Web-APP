import type { Metadata } from "next";
import Link from "next/link";
import { HelpCircle, MessageCircle, Phone, Mail, ArrowRight, Sparkles, ShieldCheck, Zap, Leaf, Package, CreditCard, Pencil, Truck } from "lucide-react";
import FAQClient from "@/components/FAQClient";

export const metadata: Metadata = {
  title: "FAQ — CPL Packaging",
  description:
    "Answers to the most common questions about minimum order quantities, shipping, sustainable materials, design support, and samples.",
};

const FAQS = [
  {
    q: "What is your minimum order quantity?",
    a: "Minimum order quantities vary by product, ranging from 50 to 5,000 units. Most of our folding boxes have a 200-500 unit minimum. Contact us for product-specific MOQs.",
    category: "Orders",
  },
  {
    q: "How long does production and shipping take?",
    a: "Standard lead times are 10-14 days for most products, with rush delivery (5-7 days) available for an additional fee. We ship internationally to 50+ countries with full tracking.",
    category: "Shipping",
  },
  {
    q: "Do you offer sustainable / eco-friendly options?",
    a: "Yes. Over 70% of our product line is made from recyclable, compostable, or biodegradable materials including FSC-certified Kraft, recycled cardboard, soy-based inks, and biodegradable finishes.",
    category: "Materials",
  },
  {
    q: "Can I get a sample before placing an order?",
    a: "Absolutely. Plain samples are complimentary and ship in 2-3 business days. Custom-printed samples are available at-cost so you can verify color, finish, and structure before committing to a full run.",
    category: "Orders",
  },
  {
    q: "Do you offer design services?",
    a: "Yes — our in-house design team provides free dieline templates, photo-realistic 3D mockups, and unlimited revisions. Custom artwork design is included on orders over 1,000 units.",
    category: "Design",
  },
  {
    q: "What file formats do you accept for artwork?",
    a: "We accept PDF, AI, PSD, EPS, and ZIP files. For best print results, send vector artwork at 300 DPI in CMYK with 0.125\" bleed. Our team will review every file and flag any issues before production.",
    category: "Design",
  },
  {
    q: "Can I order custom shapes and dielines?",
    a: "Yes. We support fully custom dielines, die-cuts, embossing, debossing, and intricate finishing. Send your concept and our design team will engineer a production-ready dieline at no cost.",
    category: "Design",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept all major credit cards, ACH transfers, and wire payments. For orders over $10,000 we offer Net-30 terms to qualified businesses after a quick credit check.",
    category: "Payment",
  },
];

const CATEGORIES = ["Orders", "Shipping", "Materials", "Design", "Payment"];

const TOPICS = [
  { icon: Package, label: "Orders & MOQ", category: "Orders" },
  { icon: Truck, label: "Shipping & Delivery", category: "Shipping" },
  { icon: Leaf, label: "Eco Materials", category: "Materials" },
  { icon: Pencil, label: "Design Support", category: "Design" },
  { icon: CreditCard, label: "Payment Terms", category: "Payment" },
];

const STATS = [
  { icon: Zap, value: "24h", label: "Response Time" },
  { icon: ShieldCheck, value: "5,000+", label: "Happy Brands" },
  { icon: Sparkles, value: "98%", label: "Satisfaction" },
];

export default function FAQPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-charcoal via-[#1a3d3a] to-brand-primary overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-brand-primary/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-20 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-12 lg:py-16">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 mb-3 text-[10px] font-bold tracking-widest uppercase text-brand-primary bg-white/5 border border-brand-primary/20 px-3 py-1.5 rounded-lg backdrop-blur-sm">
              <HelpCircle className="w-3.5 h-3.5" />
              Help Center
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-[1.15] tracking-tight mb-3">
              How Can We{" "}
              <span className="bg-gradient-to-r from-brand-primary to-brand-primary/60 bg-clip-text text-transparent">
                Help You?
              </span>
            </h1>
            <p className="text-sm md:text-base text-white/80 leading-relaxed max-w-2xl mx-auto">
              Quick answers about ordering, materials, design support, and shipping. Can&apos;t find what you&apos;re looking for? Our packaging specialists are just a message away.
            </p>

            {/* Inline Stats */}
            <div className="mt-8 grid grid-cols-3 gap-4 max-w-xl mx-auto">
              {STATS.map((stat) => {
                const Icon = stat.icon;
                return (
                  <div key={stat.label} className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-lg bg-white/10 border border-white/15 flex items-center justify-center mb-2 backdrop-blur-sm">
                      <Icon className="w-5 h-5 text-brand-primary" />
                    </div>
                    <div className="text-xl font-extrabold text-white">{stat.value}</div>
                    <p className="text-[10px] text-white/70 font-medium uppercase tracking-wider mt-0.5">{stat.label}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-10 lg:py-14 bg-slate-50 relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: 'radial-gradient(circle, rgba(16,150,137,0.08) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }} />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
            {/* MAIN: FAQ List */}
            <div className="lg:col-span-2">
              <FAQClient items={FAQS} categories={CATEGORIES} />
            </div>

            {/* SIDEBAR */}
            <aside className="space-y-5 lg:sticky lg:top-24 lg:self-start">
              {/* Popular Topics */}
              <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-6 hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-base font-bold text-brand-charcoal mb-4">Popular Topics</h3>
                <div className="space-y-1.5">
                  {TOPICS.map((topic) => {
                    const Icon = topic.icon;
                    return (
                      <a
                        key={topic.label}
                        href="#"
                        className="group flex items-center gap-3 p-2.5 -mx-2.5 rounded-lg hover:bg-slate-50 transition-colors"
                      >
                        <div className="flex-shrink-0 w-9 h-9 bg-gradient-to-br from-brand-primary/15 to-brand-primary/5 rounded-lg flex items-center justify-center group-hover:from-brand-primary/25 group-hover:to-brand-primary/10 transition-colors">
                          <Icon className="w-4 h-4 text-brand-primary" />
                        </div>
                        <span className="text-sm font-semibold text-brand-charcoal group-hover:text-brand-primary transition-colors flex-1">
                          {topic.label}
                        </span>
                        <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-brand-primary group-hover:translate-x-1 transition-all" />
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Talk to Specialist CTA */}
              <div className="relative bg-gradient-to-br from-brand-charcoal to-brand-primary/95 rounded-2xl shadow-xl p-6 text-white overflow-hidden">
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
                <div className="relative">
                  <div className="w-12 h-12 rounded-xl bg-white/15 border border-white/20 flex items-center justify-center mb-4 backdrop-blur-sm">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-extrabold mb-2 leading-tight">Still have questions?</h3>
                  <p className="text-xs text-white/80 leading-relaxed mb-4">
                    Our packaging specialists are happy to walk you through pricing, materials, or structural options.
                  </p>

                  <div className="space-y-2">
                    <Link
                      href="/contact-us"
                      className="group relative w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-brand-primary hover:bg-brand-primary/95 text-white font-semibold text-xs rounded-lg transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-brand-primary/40 hover:-translate-y-0.5 overflow-hidden"
                    >
                      <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/15 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                      <span className="relative flex items-center gap-2">
                        Talk to a Specialist
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                      </span>
                    </Link>

                    <Link
                      href="/products"
                      className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-white/10 hover:bg-white/15 text-white font-semibold text-xs rounded-lg transition-colors border border-white/15 hover:border-white/30 backdrop-blur-sm"
                    >
                      Browse Products
                    </Link>
                  </div>
                </div>
              </div>

              {/* Quick Contact */}
              <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-6 hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-base font-bold text-brand-charcoal mb-3">Quick Contact</h3>
                <div className="space-y-2">
                  <a
                    href="mailto:hello@cpl.com"
                    className="group flex items-center gap-3 p-2.5 -mx-2.5 rounded-lg hover:bg-slate-50 transition-colors"
                  >
                    <div className="flex-shrink-0 w-9 h-9 bg-gradient-to-br from-brand-primary/15 to-brand-primary/5 rounded-lg flex items-center justify-center">
                      <Mail className="w-4 h-4 text-brand-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Email</p>
                      <p className="text-xs font-semibold text-brand-charcoal truncate group-hover:text-brand-primary transition-colors">
                        hello@cpl.com
                      </p>
                    </div>
                  </a>
                  <a
                    href="tel:+18001234567"
                    className="group flex items-center gap-3 p-2.5 -mx-2.5 rounded-lg hover:bg-slate-50 transition-colors"
                  >
                    <div className="flex-shrink-0 w-9 h-9 bg-gradient-to-br from-brand-primary/15 to-brand-primary/5 rounded-lg flex items-center justify-center">
                      <Phone className="w-4 h-4 text-brand-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Phone</p>
                      <p className="text-xs font-semibold text-brand-charcoal group-hover:text-brand-primary transition-colors">
                        +1 (800) 123-4567
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Bottom CTA Strip */}
      <section className="bg-brand-charcoal py-10 border-t border-white/10 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-brand-primary/10 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div>
              <h3 className="text-xl md:text-2xl font-extrabold text-white mb-1">Ready to start your project?</h3>
              <p className="text-sm text-white/70">Get a free custom quote within 24 hours.</p>
            </div>
            <Link
              href="/contact-us"
              className="group relative inline-flex items-center justify-center gap-2 px-7 py-3 bg-brand-primary hover:bg-brand-primary/95 text-white font-semibold text-sm rounded-lg transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-brand-primary/40 hover:-translate-y-0.5 overflow-hidden whitespace-nowrap"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/15 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              <span className="relative flex items-center gap-2">
                Get Free Quote
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
