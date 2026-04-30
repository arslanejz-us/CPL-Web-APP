"use client";

import { ReactElement, useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";

type ProductCardData = {
  id: string;
  slug: string;
  name: string;
  short_description?: string | null;
  hero_image_url?: string | null;
  moq?: string | number | null;
  lead_time?: string | null;
  product_categories?: { name: string; slug: string } | null;
};

interface ProductsFilterClientProps {
  products: ProductCardData[];
}

export default function ProductsFilterClient({
  products,
}: ProductsFilterClientProps): ReactElement {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<string>("all");

  const categories = useMemo(() => {
    const seen = new Map<string, string>();
    products.forEach((p) => {
      if (p.product_categories) {
        seen.set(p.product_categories.slug, p.product_categories.name);
      }
    });
    return Array.from(seen.entries()).map(([slug, name]) => ({ slug, name }));
  }, [products]);

  const filtered = useMemo(() => {
    const term = search.trim().toLowerCase();
    return products.filter((p) => {
      const matchesCategory =
        category === "all" || p.product_categories?.slug === category;
      const matchesSearch =
        !term ||
        p.name.toLowerCase().includes(term) ||
        (p.short_description?.toLowerCase().includes(term) ?? false) ||
        (p.product_categories?.name.toLowerCase().includes(term) ?? false);
      return matchesCategory && matchesSearch;
    });
  }, [products, category, search]);

  const clearFilters = () => {
    setSearch("");
    setCategory("all");
  };

  const hasActiveFilters = search.trim() !== "" || category !== "all";

  return (
    <>
      {/* Filter Bar */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8 p-5 bg-white rounded-2xl border border-border shadow-sm" role="search">
        {/* Search */}
        <div className="flex-1">
          <label htmlFor="product-search" className="block text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-1.5">
            Search
          </label>
          <div className="relative">
            <svg
              className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
            >
              <circle cx="11" cy="11" r="7" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input
              id="product-search"
              type="search"
              placeholder="Search by product name or description"
              className="w-full pl-9 pr-4 py-2.5 text-sm border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-brand-primary/30 focus:border-brand-primary transition-colors"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              autoComplete="off"
            />
          </div>
        </div>

        {/* Category */}
        <div className="sm:w-56">
          <label htmlFor="product-category" className="block text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-1.5">
            Category
          </label>
          <select
            id="product-category"
            className="w-full px-3 py-2.5 text-sm border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-brand-primary/30 focus:border-brand-primary transition-colors"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="all">All categories</option>
            {categories.map((c) => (
              <option key={c.slug} value={c.slug}>
                {c.name}
              </option>
            ))}
          </select>
        </div>

        {hasActiveFilters && (
          <div className="sm:self-end">
            <button
              type="button"
              className="w-full sm:w-auto px-4 py-2.5 text-sm font-medium text-brand-primary border border-brand-primary/30 rounded-lg hover:bg-brand-primary/5 transition-colors"
              onClick={clearFilters}
            >
              Clear filters
            </button>
          </div>
        )}
      </div>

      {/* Results count */}
      <p className="text-sm text-muted-foreground mb-6" aria-live="polite">
        Showing <span className="font-semibold text-foreground">{filtered.length}</span> of {products.length} products
      </p>

      {filtered.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-muted-foreground mb-4">No products match your filters.</p>
          <button
            type="button"
            className="px-5 py-2.5 text-sm font-semibold bg-brand-primary text-white rounded-lg hover:bg-brand-light transition-colors"
            onClick={clearFilters}
          >
            Reset filters
          </button>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((product) => (
            <Link
              href={`/products/${product.slug}`}
              key={product.id}
              className="group block bg-white border border-border rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-black/5 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="relative h-52 bg-slate-50 overflow-hidden">
                <Image
                  src={product.hero_image_url || "/images/hero-bg.png"}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-6">
                {product.product_categories && (
                  <span className="inline-block text-xs font-semibold text-brand-accent uppercase tracking-widest mb-2">
                    {product.product_categories.name}
                  </span>
                )}
                <h2 className="text-lg font-display font-bold text-brand-navy mb-2 group-hover:text-brand-primary transition-colors">
                  {product.name}
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-2">
                  {product.short_description || "Customizable packaging solution."}
                </p>
                <div className="flex items-center gap-4 text-xs text-muted-foreground pt-3 border-t border-border">
                  {product.moq && (
                    <span className="flex items-center gap-1">
                      <span className="font-semibold text-foreground">MOQ:</span> {product.moq}
                    </span>
                  )}
                  {product.lead_time && (
                    <span className="flex items-center gap-1">
                      <span className="font-semibold text-foreground">Lead:</span> {product.lead_time}
                    </span>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
