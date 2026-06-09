import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Building2,
  ArrowRight,
  Sparkles,
  Globe,
  Award,
  Users,
  Zap,
  ShieldCheck,
  Package,
  CheckCircle2,
} from "lucide-react";
import { getIndustries } from "@/lib/queries/industries";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Industries We Serve | Custom Packaging Lane",
  description:
    "Tailored packaging solutions for cosmetics, food & beverage, retail, e-commerce, CBD, pharma, electronics, and 30+ more industries. Trusted by 5,000+ brands.",
};

type Industry = {
  id: string;
  slug: string;
  name: string;
  hero_image_url?: string;
  description?: string;
  short_description?: string;
};

const STATS = [
  { icon: Building2, value: "30+", label: "Industries Served" },
  { icon: Users, value: "5,000+", label: "Trusted Brands" },
  { icon: Globe, value: "50+", label: "Countries" },
  { icon: Award, value: "15+", label: "Years Expertise" },
];

const BENEFITS = [
  {
    icon: Package,
    title: "Industry-Specific Materials",
    description: "Food-grade, FDA-approved, ESD-safe, child-resistant — we know what each industry needs.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance Built-In",
    description: "From CPSIA labeling to GS1 barcodes, our team handles regulatory requirements end-to-end.",
  },
  {
    icon: Zap,
    title: "Faster Time-to-Shelf",
    description: "7-day production cycles get your branded packaging into the hands of customers fast.",
  },
];

export default async function IndustriesPage() {
  const industries = (await getIndustries().catch(() => [])) as Industry[];

  return (
    <>
      {/* HERO BANNER */}
      <section className="relative bg-gradient-to-br from-brand-charcoal via-[#1a3d3a] to-brand-primary overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-primary/15 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-20 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-12 lg:py-16">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 mb-3 text-[10px] font-bold tracking-widest uppercase text-brand-primary bg-white/5 border border-brand-primary/20 px-3 py-1.5 rounded-lg backdrop-blur-sm">
              <Building2 className="w-3.5 h-3.5" />
              Industries We Serve
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-[1.15] tracking-tight mb-3">
              Packaging Built for{" "}
              <span className="bg-gradient-to-r from-brand-primary to-brand-primary/60 bg-clip-text text-transparent">
                Every Industry
              </span>
            </h1>
            <p className="text-sm md:text-base text-white/80 leading-relaxed max-w-2xl mx-auto">
              Tailored solutions for your sector — from cosmetics and food &amp; beverage to electronics and CBD. We speak the language of your industry.
            </p>
          </div>
        </div>
      </section>

      {/* FLOATING STATS STRIP */}
      <section className="relative -mt-10 z-10 mb-4">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 p-6 lg:p-7 grid grid-cols-2 lg:grid-cols-4 gap-6">
            {STATS.map((stat) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="group text-center lg:border-r lg:last:border-r-0 lg:border-slate-100"
                >
                  <div className="inline-flex w-11 h-11 rounded-xl bg-gradient-to-br from-brand-primary/15 to-brand-primary/5 items-center justify-center mb-2 group-hover:from-brand-primary/25 group-hover:to-brand-primary/10 transition-colors">
                    <Icon className="w-5 h-5 text-brand-primary" />
                  </div>
                  <div className="text-2xl lg:text-3xl font-extrabold text-brand-charcoal mb-0.5">
                    {stat.value}
                  </div>
                  <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* INDUSTRIES GRID */}
      <section className="py-10 lg:py-14 bg-slate-50 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-30 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(16,150,137,0.08) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center mb-8 lg:mb-10">
            <span className="inline-block mb-2">
              <span className="text-[10px] font-bold tracking-widest uppercase text-brand-primary">
                Explore Solutions
              </span>
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-brand-charcoal leading-tight mb-2">
              Select Your Industry
            </h2>
            <p className="text-sm md:text-base text-slate-600 max-w-2xl mx-auto">
              Tap any industry to see specialized packaging solutions, materials, and compliance options.
            </p>
          </div>

          {industries.length === 0 ? (
            <div className="bg-white rounded-2xl border border-slate-100 p-12 lg:p-16 text-center shadow-lg max-w-2xl mx-auto">
              <div className="w-14 h-14 mx-auto mb-3 rounded-full bg-gradient-to-br from-brand-primary/15 to-brand-primary/5 flex items-center justify-center">
                <Building2 className="w-7 h-7 text-brand-primary" />
              </div>
              <h3 className="text-lg font-extrabold text-brand-charcoal mb-1">
                Industries Coming Soon
              </h3>
              <p className="text-sm text-slate-600 mb-5">
                We&apos;re adding new industry pages. In the meantime, get in touch and we&apos;ll help you find the right packaging.
              </p>
              <Link
                href="/contact-us"
                className="group relative inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-brand-primary hover:bg-brand-primary/95 text-white font-semibold text-sm rounded-lg transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-brand-primary/40 hover:-translate-y-0.5 overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/15 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                <span className="relative flex items-center gap-2">
                  Contact Us
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
              {industries.map((industry) => (
                <Link
                  key={industry.id}
                  href={`/industries/${industry.slug}`}
                  className="group block h-full"
                  aria-label={`View ${industry.name} packaging solutions`}
                >
                  <article className="relative h-full bg-white rounded-2xl overflow-hidden border border-slate-100 hover:border-brand-primary/30 shadow-sm hover:shadow-2xl hover:shadow-brand-primary/10 hover:-translate-y-1 transition-all duration-300 flex flex-col">
                    {/* Image */}
                    <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200">
                      <Image
                        src={industry.hero_image_url || "/images/hero-bg.png"}
                        alt={industry.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        loading="lazy"
                      />
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/80 via-brand-charcoal/20 to-transparent" />

                      {/* Industry name overlay on image */}
                      <div className="absolute bottom-3 left-4 right-4">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/95 backdrop-blur-sm text-brand-primary text-[10px] font-bold tracking-widest uppercase shadow-md">
                          <Sparkles className="w-3 h-3" />
                          Industry
                        </span>
                      </div>

                      {/* Corner arrow accent */}
                      <div className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/95 backdrop-blur-sm flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                        <ArrowRight className="w-4 h-4 text-brand-primary" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5 md:p-6 flex flex-col flex-1">
                      <h2 className="text-lg md:text-xl font-extrabold text-brand-charcoal mb-2 leading-snug group-hover:text-brand-primary transition-colors">
                        {industry.name}
                      </h2>
                      <p className="text-sm text-slate-600 leading-relaxed mb-5 line-clamp-3 flex-1">
                        {industry.short_description ||
                          industry.description ||
                          `Specialized packaging solutions engineered for the ${industry.name} industry with compliance, branding, and performance built in.`}
                      </p>

                      <div className="flex items-center gap-1.5 text-sm font-bold text-brand-primary mt-auto pt-3 border-t border-slate-100">
                        View Solutions
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* WHY CHOOSE US (Industry Benefits) */}
      <section className="py-12 lg:py-16 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <span className="inline-block mb-2">
              <span className="text-[10px] font-bold tracking-widest uppercase text-brand-primary">
                Why Brands Choose Us
              </span>
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-brand-charcoal leading-tight mb-3">
              Industry-Specific Expertise
            </h2>
            <p className="text-sm md:text-base text-slate-600 max-w-2xl mx-auto">
              We don&apos;t just print boxes — we understand your industry&apos;s regulations, customer expectations, and supply chain realities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {BENEFITS.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={benefit.title}
                  className="group relative bg-gradient-to-br from-slate-50 to-white rounded-2xl border border-slate-100 hover:border-brand-primary/30 p-6 lg:p-7 hover:shadow-xl hover:shadow-brand-primary/5 transition-all duration-300 overflow-hidden"
                >
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-primary via-brand-primary/60 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-primary/15 to-brand-primary/5 flex items-center justify-center mb-4 group-hover:from-brand-primary/25 group-hover:to-brand-primary/10 transition-colors">
                    <Icon className="w-6 h-6 text-brand-primary" />
                  </div>
                  <h3 className="text-lg font-extrabold text-brand-charcoal mb-2 group-hover:text-brand-primary transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROCESS STRIP */}
      <section className="py-12 lg:py-16 bg-slate-50 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-30 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(16,150,137,0.08) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <span className="inline-block mb-2">
              <span className="text-[10px] font-bold tracking-widest uppercase text-brand-primary">
                Simple Process
              </span>
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-brand-charcoal leading-tight">
              From Brief to Boxes in 4 Steps
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 max-w-5xl mx-auto">
            {[
              { num: "01", title: "Pick Industry", desc: "Tell us your sector and product type." },
              { num: "02", title: "Get Quote", desc: "Receive pricing and 3D mockup in 24 hours." },
              { num: "03", title: "Approve", desc: "Review samples and finalize the design." },
              { num: "04", title: "Receive", desc: "Production + global shipping in 7 days." },
            ].map((step) => (
              <div
                key={step.num}
                className="group relative bg-white rounded-xl border border-slate-100 hover:border-brand-primary/30 p-5 hover:shadow-xl hover:shadow-brand-primary/5 transition-all duration-300 overflow-hidden"
              >
                <div className="text-3xl lg:text-4xl font-extrabold text-brand-primary/20 group-hover:text-brand-primary/40 transition-colors mb-2">
                  {step.num}
                </div>
                <h3 className="text-sm md:text-base font-extrabold text-brand-charcoal mb-1 group-hover:text-brand-primary transition-colors">
                  {step.title}
                </h3>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed">{step.desc}</p>
                <CheckCircle2 className="absolute bottom-3 right-3 w-4 h-4 text-brand-primary/30 group-hover:text-brand-primary transition-colors" />
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
            Don&apos;t See Your Industry?
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white leading-tight mb-3">
            Custom Solutions for{" "}
            <span className="bg-gradient-to-r from-brand-primary to-brand-primary/60 bg-clip-text text-transparent">
              Any Sector
            </span>
          </h2>
          <p className="text-sm md:text-base text-white/80 leading-relaxed max-w-2xl mx-auto mb-7">
            We serve niche and emerging industries every day. Tell us about your product — we&apos;ll engineer the perfect packaging.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/contact-us"
              className="group relative inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-brand-primary hover:bg-brand-primary/95 text-white font-semibold text-sm rounded-lg transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-brand-primary/40 hover:-translate-y-0.5 overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/15 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              <span className="relative flex items-center gap-2">
                Talk to a Specialist
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
