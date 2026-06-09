import type { Metadata } from "next";
import Link from "next/link";
import {
  Award,
  Globe,
  Heart,
  Leaf,
  Lightbulb,
  Package,
  Pencil,
  ShieldCheck,
  Sparkles,
  Target,
  Truck,
  Users,
  Zap,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Custom Packaging Lane",
  description:
    "Learn about Custom Packaging Lane — premium custom packaging trusted by 5,000+ brands worldwide. 15+ years of expertise, 7-day production, and 100% eco-friendly materials.",
};

const STATS = [
  { value: "15+", label: "Years Experience", icon: Award },
  { value: "5,000+", label: "Brands Served", icon: Users },
  { value: "50+", label: "Countries Shipped", icon: Globe },
  { value: "98%", label: "Client Satisfaction", icon: Sparkles },
];

const VALUES = [
  {
    icon: Lightbulb,
    title: "Innovation First",
    description:
      "We push packaging boundaries with smart design, latest printing tech, and structural engineering that protects products and turns heads.",
  },
  {
    icon: Leaf,
    title: "Sustainable by Design",
    description:
      "From FSC-certified Kraft to soy-based inks, every material is chosen for both performance and planetary impact.",
  },
  {
    icon: Heart,
    title: "Customer Obsessed",
    description:
      "Your success is our success. Free 3D mockups, unlimited revisions, and a real human ready to help — always.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Guaranteed",
    description:
      "ISO 9001 certified facilities with rigorous QC at every stage. We stand behind every box, every label, every order.",
  },
  {
    icon: Zap,
    title: "Speed That Matters",
    description:
      "From quote to delivery in as little as 7 days. Tight launch deadlines aren't a problem — they're our specialty.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description:
      "Door-to-door delivery to 50+ countries with full tracking, customs handling, and warehousing options worldwide.",
  },
];

const TIMELINE = [
  {
    year: "2010",
    title: "The Beginning",
    description:
      "Founded with a simple mission: deliver premium packaging without the premium hassle. Started with 3 designers and a passion.",
  },
  {
    year: "2014",
    title: "First 1,000 Brands",
    description:
      "Crossed the 1,000 client milestone, expanding our facility to 50,000 sq ft and adding eco-friendly product lines.",
  },
  {
    year: "2018",
    title: "Going Global",
    description:
      "Launched international shipping to 25+ countries. Introduced our signature 7-day production guarantee.",
  },
  {
    year: "2021",
    title: "Sustainability Leader",
    description:
      "Achieved FSC certification across our entire material lineup. 70% of products now made from recycled or biodegradable materials.",
  },
  {
    year: "2024",
    title: "5,000+ Brands & Counting",
    description:
      "Serving 5,000+ brands from Shopify startups to Fortune 500 enterprises across 50+ countries with industry-leading satisfaction rates.",
  },
];

const CAPABILITIES = [
  "Custom Rigid Boxes & Premium Packaging",
  "Mailer & Shipping Solutions",
  "Eco-Friendly Kraft & Recycled Materials",
  "Cosmetic & Beauty Packaging",
  "Food & Beverage Compliant Boxes",
  "Custom Labels & Branding",
  "3D Design & Dieline Engineering",
  "Global Logistics & Fulfillment",
];

export default function AboutUsPage() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-br from-brand-charcoal via-[#1a3d3a] to-brand-primary overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-primary/15 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-20 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "radial-gradient(circle, white 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-14 lg:py-20">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 mb-3 text-[10px] font-bold tracking-widest uppercase text-brand-primary bg-white/5 border border-brand-primary/20 px-3 py-1.5 rounded-lg backdrop-blur-sm">
              <Sparkles className="w-3.5 h-3.5" />
              About Us
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-[1.15] tracking-tight mb-4">
              Crafting Packaging That{" "}
              <span className="bg-gradient-to-r from-brand-primary to-brand-primary/60 bg-clip-text text-transparent">
                Builds Brands
              </span>
            </h1>
            <p className="text-sm md:text-base text-white/80 leading-relaxed max-w-2xl mx-auto">
              For over 15 years, we&apos;ve been the trusted packaging partner for 5,000+ brands — turning ideas into shelf-stopping, planet-friendly, customer-loved unboxing experiences.
            </p>
          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="relative -mt-10 z-10 mb-4">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 p-6 lg:p-8 grid grid-cols-2 lg:grid-cols-4 gap-6">
            {STATS.map((stat) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="group text-center lg:border-r lg:last:border-r-0 lg:border-slate-100"
                >
                  <div className="inline-flex w-12 h-12 rounded-xl bg-gradient-to-br from-brand-primary/15 to-brand-primary/5 items-center justify-center mb-3 group-hover:from-brand-primary/25 group-hover:to-brand-primary/10 transition-colors">
                    <Icon className="w-6 h-6 text-brand-primary" />
                  </div>
                  <div className="text-2xl lg:text-3xl font-extrabold text-brand-charcoal mb-1">
                    {stat.value}
                  </div>
                  <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="py-12 lg:py-16 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <span className="inline-block mb-2">
              <span className="text-[10px] font-bold tracking-widest uppercase text-brand-primary">
                Our Purpose
              </span>
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-brand-charcoal leading-tight">
              Mission & Vision
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
            <div className="relative bg-gradient-to-br from-slate-50 to-white rounded-2xl border border-slate-100 p-7 lg:p-8 hover:shadow-xl hover:border-brand-primary/30 transition-all duration-300 group overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-primary via-brand-primary/60 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-primary/15 to-brand-primary/5 flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-brand-primary" />
              </div>
              <h3 className="text-xl font-extrabold text-brand-charcoal mb-2">Our Mission</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                To empower brands with premium, sustainable packaging that protects products, elevates unboxing experiences, and builds lasting customer loyalty — delivered fast, designed beautifully, and engineered to perform.
              </p>
            </div>

            <div className="relative bg-gradient-to-br from-slate-50 to-white rounded-2xl border border-slate-100 p-7 lg:p-8 hover:shadow-xl hover:border-brand-primary/30 transition-all duration-300 group overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-primary via-brand-primary/60 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-primary/15 to-brand-primary/5 flex items-center justify-center mb-4">
                <Lightbulb className="w-6 h-6 text-brand-primary" />
              </div>
              <h3 className="text-xl font-extrabold text-brand-charcoal mb-2">Our Vision</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                To be the world&apos;s most trusted custom packaging partner — pioneering sustainable materials, lightning-fast production, and brand-defining design so every package tells a story worth sharing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="py-12 lg:py-16 bg-slate-50 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(16,150,137,0.08) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <span className="inline-block mb-2">
              <span className="text-[10px] font-bold tracking-widest uppercase text-brand-primary">
                Core Values
              </span>
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-brand-charcoal leading-tight mb-3">
              What Drives Us Every Day
            </h2>
            <p className="text-sm md:text-base text-slate-600 max-w-2xl mx-auto">
              Six principles that shape every decision, every package, and every relationship we build.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {VALUES.map((value) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className="group relative bg-white rounded-xl border border-slate-100 hover:border-brand-primary/30 p-6 hover:shadow-xl hover:shadow-brand-primary/5 transition-all duration-300 overflow-hidden"
                >
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-primary via-brand-primary/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-brand-primary/15 to-brand-primary/5 flex items-center justify-center mb-4 group-hover:from-brand-primary/25 group-hover:to-brand-primary/10 transition-colors">
                    <Icon className="w-5 h-5 text-brand-primary" />
                  </div>
                  <h3 className="text-base font-bold text-brand-charcoal mb-2 group-hover:text-brand-primary transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* OUR STORY TIMELINE */}
      <section className="py-12 lg:py-16 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="inline-block mb-2">
              <span className="text-[10px] font-bold tracking-widest uppercase text-brand-primary">
                Our Journey
              </span>
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-brand-charcoal leading-tight mb-3">
              From Startup to Industry Leader
            </h2>
            <p className="text-sm md:text-base text-slate-600 max-w-2xl mx-auto">
              15 years of evolving, scaling, and obsessing over the perfect package.
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Vertical line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-brand-primary via-brand-primary/40 to-transparent md:-translate-x-1/2" />

            <div className="space-y-8">
              {TIMELINE.map((item, idx) => (
                <div
                  key={item.year}
                  className={`relative flex items-start gap-6 md:gap-0 ${
                    idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 top-3 md:-translate-x-1/2 z-10">
                    <div className="w-3 h-3 rounded-full bg-brand-primary ring-4 ring-white shadow-md" />
                  </div>

                  {/* Content card */}
                  <div
                    className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${
                      idx % 2 === 0 ? "md:mr-8" : "md:ml-8"
                    }`}
                  >
                    <div className="group bg-white rounded-xl border border-slate-100 hover:border-brand-primary/30 p-5 lg:p-6 shadow-sm hover:shadow-xl hover:shadow-brand-primary/5 transition-all duration-300">
                      <div className="inline-block px-2.5 py-1 rounded-md bg-brand-primary/10 text-brand-primary text-[10px] font-bold tracking-widest uppercase mb-2">
                        {item.year}
                      </div>
                      <h3 className="text-base lg:text-lg font-extrabold text-brand-charcoal mb-1.5 group-hover:text-brand-primary transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE DO + IMAGE/VISUAL SECTION */}
      <section className="py-12 lg:py-16 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* LEFT */}
            <div>
              <span className="inline-block mb-2">
                <span className="text-[10px] font-bold tracking-widest uppercase text-brand-primary">
                  What We Do
                </span>
              </span>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-brand-charcoal leading-tight mb-4">
                End-to-End Packaging Solutions
              </h2>
              <p className="text-sm md:text-base text-slate-600 leading-relaxed mb-6">
                We&apos;re more than a packaging supplier. We&apos;re your design partner, production team, and logistics expert — all under one roof. From concept sketches to global delivery, we handle every step so you can focus on growing your brand.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6">
                {CAPABILITIES.map((cap) => (
                  <div key={cap} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-brand-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-700">{cap}</span>
                  </div>
                ))}
              </div>

              <Link
                href="/products"
                className="group relative inline-flex items-center justify-center gap-2 px-7 py-3 bg-brand-primary hover:bg-brand-primary/95 text-white font-semibold text-sm rounded-lg transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-brand-primary/40 hover:-translate-y-0.5 overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/15 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                <span className="relative flex items-center gap-2">
                  Explore Our Products
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </div>

            {/* RIGHT - Visual Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-gradient-to-br from-brand-primary to-brand-primary/80 rounded-2xl p-6 text-white aspect-square flex flex-col justify-between shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                  <Package className="w-8 h-8" />
                  <div>
                    <div className="text-3xl font-extrabold">200+</div>
                    <p className="text-xs text-white/80 mt-1 uppercase tracking-wider">
                      Product Variants
                    </p>
                  </div>
                </div>
                <div className="bg-white rounded-2xl p-6 aspect-square flex flex-col justify-between shadow-lg border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <Pencil className="w-8 h-8 text-brand-primary" />
                  <div>
                    <div className="text-3xl font-extrabold text-brand-charcoal">Free</div>
                    <p className="text-xs text-slate-600 mt-1 uppercase tracking-wider">
                      3D Mockups
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="bg-white rounded-2xl p-6 aspect-square flex flex-col justify-between shadow-lg border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <Truck className="w-8 h-8 text-brand-primary" />
                  <div>
                    <div className="text-3xl font-extrabold text-brand-charcoal">7 Days</div>
                    <p className="text-xs text-slate-600 mt-1 uppercase tracking-wider">
                      Production
                    </p>
                  </div>
                </div>
                <div className="bg-brand-charcoal rounded-2xl p-6 text-white aspect-square flex flex-col justify-between shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                  <Leaf className="w-8 h-8 text-brand-primary" />
                  <div>
                    <div className="text-3xl font-extrabold">70%</div>
                    <p className="text-xs text-white/80 mt-1 uppercase tracking-wider">
                      Eco Materials
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section className="py-12 lg:py-16 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <span className="inline-block mb-2">
              <span className="text-[10px] font-bold tracking-widest uppercase text-brand-primary">
                Certifications & Standards
              </span>
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-brand-charcoal leading-tight mb-3">
              Quality You Can Trust
            </h2>
            <p className="text-sm md:text-base text-slate-600 max-w-2xl mx-auto">
              Independently verified. Internationally recognized. Always upheld.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 max-w-4xl mx-auto">
            {[
              { name: "ISO 9001", desc: "Quality Management" },
              { name: "FSC Certified", desc: "Sustainable Forestry" },
              { name: "G7 Master", desc: "Color Accuracy" },
              { name: "FDA Approved", desc: "Food Safe Materials" },
            ].map((cert) => (
              <div
                key={cert.name}
                className="group bg-gradient-to-br from-slate-50 to-white rounded-xl border border-slate-100 hover:border-brand-primary/30 p-5 text-center hover:shadow-xl hover:shadow-brand-primary/5 transition-all duration-300"
              >
                <div className="w-12 h-12 mx-auto mb-3 rounded-lg bg-gradient-to-br from-brand-primary/15 to-brand-primary/5 flex items-center justify-center group-hover:from-brand-primary/25 group-hover:to-brand-primary/10 transition-colors">
                  <ShieldCheck className="w-6 h-6 text-brand-primary" />
                </div>
                <div className="text-base font-extrabold text-brand-charcoal mb-1 group-hover:text-brand-primary transition-colors">
                  {cert.name}
                </div>
                <p className="text-[11px] text-slate-500 uppercase tracking-wider font-medium">
                  {cert.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative py-14 lg:py-20 bg-gradient-to-br from-brand-charcoal via-[#1a3d3a] to-brand-primary overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-primary/15 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-20 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <span className="inline-flex items-center gap-2 mb-3 text-[10px] font-bold tracking-widest uppercase text-brand-primary bg-white/5 border border-brand-primary/20 px-3 py-1.5 rounded-lg backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5" />
            Let&apos;s Work Together
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white leading-tight mb-3">
            Ready to Build{" "}
            <span className="bg-gradient-to-r from-brand-primary to-brand-primary/60 bg-clip-text text-transparent">
              Something Amazing?
            </span>
          </h2>
          <p className="text-sm md:text-base text-white/80 leading-relaxed max-w-2xl mx-auto mb-7">
            Join 5,000+ brands that trust us with their packaging. Get a free quote and 3D mockup within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/contact-us"
              className="group relative inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-brand-primary hover:bg-brand-primary/95 text-white font-semibold text-sm rounded-lg transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-brand-primary/40 hover:-translate-y-0.5 overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/15 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              <span className="relative flex items-center gap-2">
                Get Free Quote
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link
              href="/products"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white/5 hover:bg-white/10 text-white font-semibold text-sm rounded-lg transition-all duration-300 border border-white/15 hover:border-white/30 backdrop-blur-sm"
            >
              Browse Products
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
