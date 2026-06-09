"use client";

import { useState } from "react";
import { ChevronDown, Search } from "lucide-react";

type FAQ = { q: string; a: string; category: string };

interface FAQClientProps {
  items: FAQ[];
  categories: string[];
}

export default function FAQClient({ items, categories }: FAQClientProps) {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const filtered = items.filter((item) => {
    const matchesCategory = activeCategory === "All" || item.category === activeCategory;
    const matchesSearch =
      searchQuery === "" ||
      item.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.a.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      {/* Search Bar */}
      <div className="mb-6">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search frequently asked questions..."
            className="w-full pl-12 pr-4 py-3.5 bg-white border border-slate-200 text-slate-900 placeholder:text-slate-400 text-sm rounded-xl focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/10 hover:border-slate-300 transition-all shadow-sm"
          />
        </div>
      </div>

      {/* Category Tabs */}
      <div className="mb-6 flex flex-wrap gap-2">
        {["All", ...categories].map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setActiveCategory(cat);
              setOpenIndex(0);
            }}
            className={`px-4 py-2 text-xs font-bold tracking-wide uppercase rounded-full transition-all duration-300 ${
              activeCategory === cat
                ? "bg-brand-primary text-white shadow-md shadow-brand-primary/30"
                : "bg-white text-slate-600 border border-slate-200 hover:border-brand-primary hover:text-brand-primary"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Accordion */}
      {filtered.length === 0 ? (
        <div className="bg-white rounded-2xl border border-slate-100 p-10 text-center shadow-sm">
          <p className="text-slate-500 text-sm">
            No questions match your search. Try a different keyword.
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          {filtered.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={`${item.q}-${idx}`}
                className={`group bg-white rounded-xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "border-brand-primary/40 shadow-lg shadow-brand-primary/5"
                    : "border-slate-100 hover:border-slate-200 shadow-sm hover:shadow-md"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-4 px-5 lg:px-6 py-4 text-left"
                >
                  <div className="flex items-start gap-3 flex-1">
                    <span className="flex-shrink-0 mt-0.5 w-6 h-6 rounded-md bg-gradient-to-br from-brand-primary/15 to-brand-primary/5 text-brand-primary text-[10px] font-bold flex items-center justify-center">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={`text-sm md:text-base font-semibold transition-colors ${
                        isOpen ? "text-brand-primary" : "text-brand-charcoal group-hover:text-brand-primary"
                      }`}
                    >
                      {item.q}
                    </span>
                  </div>
                  <ChevronDown
                    className={`flex-shrink-0 w-5 h-5 transition-all duration-300 ${
                      isOpen ? "text-brand-primary rotate-180" : "text-slate-400"
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-5 lg:px-6 pb-5 pl-14">
                      <div className="border-t border-slate-100 pt-4">
                        <p className="text-sm text-slate-600 leading-relaxed">{item.a}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}
