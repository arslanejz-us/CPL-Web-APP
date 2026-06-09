"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Calendar, ArrowRight, Search, BookOpen } from "lucide-react";

export type Blog = {
  id: string;
  slug: string;
  title: string;
  excerpt?: string;
  featured_image_url?: string;
  published_at?: string;
  author_name?: string;
  blog_categories?: { name: string; slug?: string };
};

interface BlogGridProps {
  blogs: Blog[];
}

function formatDate(date?: string) {
  if (!date) return "";
  return new Date(date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function estimateReadTime(excerpt?: string) {
  const wordsPerMinute = 200;
  const words = (excerpt || "").split(" ").length;
  const minutes = Math.max(2, Math.ceil(words / wordsPerMinute) + 3);
  return `${minutes} min read`;
}

const PAGE_SIZE = 9;

export default function BlogGrid({ blogs }: BlogGridProps) {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const categories = useMemo(() => {
    const set = new Set<string>();
    blogs.forEach((b) => {
      if (b.blog_categories?.name) set.add(b.blog_categories.name);
    });
    return ["All", ...Array.from(set)];
  }, [blogs]);

  const filtered = useMemo(() => {
    return blogs.filter((b) => {
      const matchesCat =
        activeCategory === "All" || b.blog_categories?.name === activeCategory;
      const q = search.trim().toLowerCase();
      const matchesSearch =
        !q ||
        b.title.toLowerCase().includes(q) ||
        (b.excerpt || "").toLowerCase().includes(q);
      return matchesCat && matchesSearch;
    });
  }, [blogs, activeCategory, search]);

  const visible = filtered.slice(0, visibleCount);
  const canLoadMore = filtered.length > visibleCount;

  const onCategoryChange = (cat: string) => {
    setActiveCategory(cat);
    setVisibleCount(PAGE_SIZE);
  };

  const onSearchChange = (val: string) => {
    setSearch(val);
    setVisibleCount(PAGE_SIZE);
  };

  return (
    <>
      {/* Filter / Search Toolbar */}
      <div className="mb-8 bg-white rounded-2xl border border-slate-100 shadow-sm p-4 md:p-5">
        <div className="flex flex-col lg:flex-row gap-3 lg:items-center">
          {/* Search */}
          <div className="relative flex-1 lg:max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={search}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search articles..."
              aria-label="Search articles"
              className="w-full pl-11 pr-4 py-2.5 bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 text-sm rounded-lg focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/10 focus:bg-white hover:border-slate-300 transition-all"
            />
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-2 lg:ml-auto" role="tablist" aria-label="Filter by category">
            {categories.map((cat) => (
              <button
                key={cat}
                role="tab"
                aria-selected={activeCategory === cat}
                onClick={() => onCategoryChange(cat)}
                className={`px-3.5 py-1.5 text-[11px] font-bold tracking-wide uppercase rounded-full transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-brand-primary text-white shadow-md shadow-brand-primary/30"
                    : "bg-slate-50 text-slate-600 border border-slate-200 hover:border-brand-primary hover:text-brand-primary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Result count */}
        <div className="mt-3 flex items-center justify-between">
          <p className="text-xs text-slate-500">
            Showing{" "}
            <span className="font-bold text-brand-charcoal">{visible.length}</span> of{" "}
            <span className="font-bold text-brand-charcoal">{filtered.length}</span>{" "}
            {filtered.length === 1 ? "article" : "articles"}
          </p>
          {(search || activeCategory !== "All") && (
            <button
              onClick={() => {
                setSearch("");
                setActiveCategory("All");
                setVisibleCount(PAGE_SIZE);
              }}
              className="text-xs font-semibold text-brand-primary hover:underline"
            >
              Clear filters
            </button>
          )}
        </div>
      </div>

      {/* Empty State */}
      {filtered.length === 0 ? (
        <div className="bg-white rounded-2xl border border-slate-100 p-12 lg:p-16 text-center shadow-sm">
          <div className="w-14 h-14 mx-auto mb-3 rounded-full bg-gradient-to-br from-brand-primary/15 to-brand-primary/5 flex items-center justify-center">
            <BookOpen className="w-7 h-7 text-brand-primary" />
          </div>
          <h3 className="text-lg font-extrabold text-brand-charcoal mb-1">No articles found</h3>
          <p className="text-sm text-slate-600">
            Try a different keyword or clear the filters.
          </p>
        </div>
      ) : (
        <>
          {/* SCALABLE GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {visible.map((blog) => (
              <article
                key={blog.id}
                className="group h-full bg-white rounded-2xl overflow-hidden border border-slate-100 hover:border-brand-primary/30 shadow-sm hover:shadow-2xl hover:shadow-brand-primary/10 hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                {/* Image - consistent 16:10 aspect */}
                <Link
                  href={`/blogs/${blog.slug}`}
                  className="relative aspect-[16/10] overflow-hidden bg-slate-100 block"
                  aria-label={`Read ${blog.title}`}
                >
                  <Image
                    src={blog.featured_image_url || "/images/hero-bg.png"}
                    alt={blog.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    loading="lazy"
                  />
                  {/* Subtle dark overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Category badge */}
                  {blog.blog_categories?.name && (
                    <div className="absolute top-3 left-3">
                      <span className="inline-block px-2.5 py-1 rounded-md bg-white/95 backdrop-blur-sm text-brand-primary text-[10px] font-bold tracking-widest uppercase shadow-md">
                        {blog.blog_categories.name}
                      </span>
                    </div>
                  )}
                </Link>

                {/* Content */}
                <div className="p-5 md:p-6 flex flex-col flex-1">
                  {/* Date + Read Time */}
                  <div className="flex items-center gap-3 text-[11px] text-slate-500 mb-3">
                    {blog.published_at && (
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3 h-3" />
                        {formatDate(blog.published_at)}
                      </span>
                    )}
                    <span className="w-1 h-1 rounded-full bg-slate-300" />
                    <span className="text-brand-primary font-semibold">
                      {estimateReadTime(blog.excerpt)}
                    </span>
                  </div>

                  {/* H2 Title - SEO friendly */}
                  <h2 className="text-base md:text-lg font-extrabold text-brand-charcoal mb-2 leading-snug line-clamp-2 group-hover:text-brand-primary transition-colors">
                    <Link href={`/blogs/${blog.slug}`} className="block">
                      {blog.title}
                    </Link>
                  </h2>

                  {/* Excerpt - 2-3 lines */}
                  <p className="text-sm text-slate-600 leading-relaxed mb-5 line-clamp-3 flex-1">
                    {blog.excerpt || "Read this article to learn more about packaging insights, design trends, and brand-building strategies."}
                  </p>

                  {/* Read More CTA */}
                  <Link
                    href={`/blogs/${blog.slug}`}
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-brand-primary mt-auto pt-3 border-t border-slate-100 group/cta"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 group-hover/cta:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Load More */}
          {canLoadMore && (
            <div className="mt-10 flex justify-center">
              <button
                onClick={() => setVisibleCount((c) => c + PAGE_SIZE)}
                className="group relative inline-flex items-center justify-center gap-2 px-7 py-3 bg-brand-primary hover:bg-brand-primary/95 text-white font-semibold text-sm rounded-lg transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-brand-primary/40 hover:-translate-y-0.5 overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/15 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                <span className="relative flex items-center gap-2">
                  Load More Articles
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            </div>
          )}
        </>
      )}
    </>
  );
}
