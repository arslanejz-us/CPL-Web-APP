import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, Mail } from "lucide-react";
import { getBlogs } from "@/lib/queries/blogs";
import BlogGrid, { Blog } from "@/components/BlogGrid";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Blog & Insights | Custom Packaging Lane",
  description:
    "Stay updated with the latest packaging trends, design guides, sustainability tips, and industry insights from Custom Packaging Lane.",
  openGraph: {
    title: "Blog & Insights | Custom Packaging Lane",
    description:
      "Packaging trends, design guides, sustainability tips and brand-building strategies from industry experts.",
    type: "website",
  },
};

export default async function BlogsPage() {
  const blogs = (await getBlogs().catch(() => [])) as Blog[];

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
              <BookOpen className="w-3.5 h-3.5" />
              Blog & Insights
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-[1.15] tracking-tight mb-3">
              Packaging{" "}
              <span className="bg-gradient-to-r from-brand-primary to-brand-primary/60 bg-clip-text text-transparent">
                Insights & Stories
              </span>
            </h1>
            <p className="text-sm md:text-base text-white/80 leading-relaxed max-w-2xl mx-auto">
              Stay ahead with the latest packaging trends, design guides, sustainability tips, and brand-building strategies from industry experts.
            </p>
          </div>
        </div>
      </section>

      {/* BLOG GRID */}
      <section className="py-10 lg:py-14 bg-slate-50 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-30 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(16,150,137,0.08) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-6">
          <BlogGrid blogs={blogs} />
        </div>
      </section>

      {/* NEWSLETTER CTA */}
      <section className="relative py-12 lg:py-16 bg-brand-charcoal overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute -top-20 -right-20 w-72 h-72 bg-brand-primary/15 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-brand-primary/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-brand-primary/15 border border-brand-primary/30 backdrop-blur-sm mb-4">
            <Mail className="w-6 h-6 text-brand-primary" />
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white leading-tight mb-3">
            Get Packaging Insights{" "}
            <span className="bg-gradient-to-r from-brand-primary to-brand-primary/60 bg-clip-text text-transparent">
              Every Month
            </span>
          </h2>
          <p className="text-sm md:text-base text-white/75 leading-relaxed max-w-xl mx-auto mb-6">
            Join 10,000+ brand owners getting the latest packaging trends, design tips, and industry news — straight to your inbox.
          </p>

          <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="your@email.com"
              aria-label="Email address"
              className="flex-1 px-4 py-3 bg-white/10 backdrop-blur-md border border-white/15 text-white placeholder:text-white/50 text-sm rounded-lg focus:outline-none focus:border-brand-primary/60 focus:ring-2 focus:ring-brand-primary/20 transition-all"
            />
            <button
              type="submit"
              className="group relative inline-flex items-center justify-center gap-2 px-6 py-3 bg-brand-primary hover:bg-brand-primary/95 text-white font-semibold text-sm rounded-lg transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-brand-primary/40 hover:-translate-y-0.5 overflow-hidden whitespace-nowrap"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/15 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              <span className="relative flex items-center gap-2">
                Subscribe
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </form>

          <p className="text-[11px] text-white/50 mt-3">
            No spam. Unsubscribe anytime. Read our{" "}
            <Link href="/privacy-policy" className="text-brand-primary hover:underline">
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}
