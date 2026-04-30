"use client";

import { ReactElement, useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./ProductsFilterClient.module.css";

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
      <div className={styles.filterBar} role="search">
        <div className={styles.field}>
          <label htmlFor="product-search" className={styles.label}>
            Search
          </label>
          <div className={styles.inputWrap}>
            <svg
              className={styles.searchIcon}
              viewBox="0 0 24 24"
              width="18"
              height="18"
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
              className={styles.input}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              autoComplete="off"
            />
          </div>
        </div>

        <div className={styles.field}>
          <label htmlFor="product-category" className={styles.label}>
            Category
          </label>
          <select
            id="product-category"
            className={styles.select}
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
          <button
            type="button"
            className={styles.clearBtn}
            onClick={clearFilters}
          >
            Clear filters
          </button>
        )}
      </div>

      <div className={styles.resultBar} aria-live="polite">
        Showing <strong>{filtered.length}</strong> of {products.length} products
      </div>

      {filtered.length === 0 ? (
        <div className={styles.emptyState}>
          <p>No products match your filters.</p>
          <button
            type="button"
            className={styles.emptyResetBtn}
            onClick={clearFilters}
          >
            Reset filters
          </button>
        </div>
      ) : (
        <div className={styles.grid}>
          {filtered.map((product) => (
            <Link
              href={`/products/${product.slug}`}
              key={product.id}
              className={styles.card}
            >
              <div className={styles.imageWrapper}>
                <Image
                  src={product.hero_image_url || "/images/hero-bg.png"}
                  alt={product.name}
                  fill
                  className={styles.image}
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className={styles.content}>
                {product.product_categories && (
                  <span className={styles.category}>
                    {product.product_categories.name}
                  </span>
                )}
                <h2 className={styles.productName}>{product.name}</h2>
                <p className={styles.description}>
                  {product.short_description || "Customizable packaging solution."}
                </p>
                <div className={styles.meta}>
                  {product.moq && <span>MOQ: {product.moq}</span>}
                  {product.lead_time && <span>Lead: {product.lead_time}</span>}
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
