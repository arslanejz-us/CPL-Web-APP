"use client";

import { useState } from "react";
import { Package, Zap, CheckCircle2 } from "lucide-react";

type Tab = "description" | "specifications" | "features";

type Spec = { label: string; value: string };
type FeatureRow = { label: string };

interface ProductDetailClientProps {
  productName: string;
  productId?: string;
  longDescription?: string;
  shortDescription?: string;
  specs: Spec[];
  features: FeatureRow[];
}

export default function ProductDetailClient({
  longDescription,
  shortDescription,
  specs,
  features,
}: ProductDetailClientProps) {
  const [activeTab, setActiveTab] = useState<Tab>("description");

  return (
    <div className="w-full">
      {/* Tab Navigation */}
      <div className="flex gap-8 mb-8 border-b border-slate-200">
        <button
          role="tab"
          aria-selected={activeTab === "description"}
          onClick={() => setActiveTab("description")}
          className={`flex items-center gap-2 py-4 px-0 font-medium text-sm transition-colors border-b-2 ${
            activeTab === "description"
              ? "text-brand-primary border-b-2 border-brand-primary"
              : "text-slate-500 border-b-2 border-transparent hover:text-slate-700"
          }`}
        >
          <Package className="w-4 h-4" />
          About
        </button>
        <button
          role="tab"
          aria-selected={activeTab === "specifications"}
          onClick={() => setActiveTab("specifications")}
          className={`flex items-center gap-2 py-4 px-0 font-medium text-sm transition-colors border-b-2 ${
            activeTab === "specifications"
              ? "text-brand-primary border-b-2 border-brand-primary"
              : "text-slate-500 border-b-2 border-transparent hover:text-slate-700"
          }`}
        >
          <Zap className="w-4 h-4" />
          Specifications
        </button>
        <button
          role="tab"
          aria-selected={activeTab === "features"}
          onClick={() => setActiveTab("features")}
          className={`flex items-center gap-2 py-4 px-0 font-medium text-sm transition-colors border-b-2 ${
            activeTab === "features"
              ? "text-brand-primary border-b-2 border-brand-primary"
              : "text-slate-500 border-b-2 border-transparent hover:text-slate-700"
          }`}
        >
          <CheckCircle2 className="w-4 h-4" />
          Features
        </button>
      </div>

      {/* Tab Panels */}
      <div className="bg-white border border-slate-200 rounded-xl p-8">
        {activeTab === "description" && (
          <div role="tabpanel">
            <h3 className="text-lg font-semibold text-brand-charcoal mb-4">Product Overview</h3>
            {longDescription || shortDescription ? (
              <p className="text-slate-700 leading-relaxed">
                {longDescription || shortDescription}
              </p>
            ) : (
              <p className="text-slate-700 leading-relaxed">
                A premium custom packaging solution designed to elevate your brand presence and protect products through storage and shipping. Customizable dimensions, finishes, and printing options let you create a unique unboxing experience.
              </p>
            )}
          </div>
        )}

        {activeTab === "specifications" && (
          <div role="tabpanel">
            <h3 className="text-lg font-semibold text-brand-charcoal mb-6">Technical Specifications</h3>
            {specs.length === 0 ? (
              <p className="text-slate-600">Detailed specifications will be added shortly.</p>
            ) : (
              <div className="divide-y divide-slate-200 border border-slate-200 rounded-lg overflow-hidden">
                {specs.map((s, idx) => (
                  <div
                    key={s.label}
                    className={`flex justify-between items-center px-6 py-4 ${
                      idx % 2 === 0 ? "bg-white" : "bg-slate-50"
                    }`}
                  >
                    <span className="font-medium text-slate-700">{s.label}</span>
                    <span className="text-brand-primary font-semibold">{s.value}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {activeTab === "features" && (
          <div role="tabpanel">
            <h3 className="text-lg font-semibold text-brand-charcoal mb-6">Premium Features</h3>
            {features.length === 0 ? (
              <p className="text-slate-600">Feature list coming soon.</p>
            ) : (
              <ul className="grid gap-3 sm:grid-cols-2">
                {features.map((f) => (
                  <li key={f.label} className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-brand-primary flex-shrink-0" />
                    <span className="text-slate-700">{f.label}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
