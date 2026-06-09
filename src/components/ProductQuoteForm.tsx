"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { quoteSchema, QuoteFormValues } from "@/lib/validations/quote.schema";
import { CheckCircle2, Upload, ArrowRight } from "lucide-react";

interface ProductQuoteFormProps {
  productName: string;
  productId?: string;
}

const MATERIAL_OPTIONS = [
  "Kraft",
  "Cardboard",
  "Corrugated",
  "Rigid Board",
  "Eco Recycled",
  "Metallic",
];

const UNIT_OPTIONS = ["Inches", "Centimeters", "Millimeters"];

export default function ProductQuoteForm({ productName, productId }: ProductQuoteFormProps) {
  const [submitState, setSubmitState] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [consentChecked, setConsentChecked] = useState(false);
  const [unit, setUnit] = useState("Inches");

  const { register, handleSubmit, formState: { errors }, reset, watch } = useForm<QuoteFormValues>({
    resolver: zodResolver(quoteSchema),
    defaultValues: { product_name: productName, product_id: productId },
  });

  const onSubmit = async (data: QuoteFormValues) => {
    if (!consentChecked) {
      setErrorMsg("Please consent to receive communications");
      return;
    }

    setSubmitState("submitting");
    setErrorMsg("");
    try {
      const length = watch("size") || "";
      const width = data.printing || "";
      const height = data.finishing || "";
      const dimensions = [length, width, height].filter(Boolean).join(" x ");
      const sizeString = dimensions ? `${dimensions} ${unit}` : "";

      const response = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          product_name: productName,
          product_id: productId,
          size: sizeString,
        }),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "Failed to submit quote");
      setSubmitState("success");
      reset({ product_name: productName, product_id: productId });
      setConsentChecked(false);
      setTimeout(() => setSubmitState("idle"), 3000);
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : "Something went wrong";
      setErrorMsg(message);
      setSubmitState("error");
    }
  };

  return (
    <div className="bg-white rounded-xl p-5 shadow-sm border border-slate-200">
      <div className="mb-5">
        <h3 className="text-base font-semibold text-brand-charcoal mb-0.5">Get a Quote</h3>
        <p className="text-xs text-slate-500">Share your packaging requirements</p>
      </div>

      {submitState === "success" ? (
        <div className="bg-green-50 border border-green-200 rounded-lg p-5 text-center">
          <CheckCircle2 className="w-12 h-12 text-green-500 mx-auto mb-2" />
          <p className="text-sm font-semibold text-brand-charcoal mb-0.5">Quote Submitted!</p>
          <p className="text-xs text-slate-600">We&apos;ll contact you within 24 hours.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-4">
          {/* Section 1: Contact Info */}
          <div className="border-t border-slate-100 pt-3 mt-1 space-y-3">
            <span className="text-[10px] font-semibold uppercase tracking-widest text-slate-400 block">Contact</span>
            <div className="grid grid-cols-3 gap-3">
              <div>
                <label htmlFor="full_name" className="block text-[11px] font-medium text-slate-500 uppercase tracking-wide mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="full_name"
                  placeholder="Name"
                  className="w-full px-3 py-2 bg-white border border-slate-300 text-slate-900 placeholder:text-slate-300 text-sm rounded-md focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/10 transition-all"
                  {...register("full_name")}
                />
                {errors.full_name && <p className="text-red-500 text-xs mt-0.5">{errors.full_name.message}</p>}
              </div>
              <div>
                <label htmlFor="email" className="block text-[11px] font-medium text-slate-500 uppercase tracking-wide mb-1">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Email"
                  className="w-full px-3 py-2 bg-white border border-slate-300 text-slate-900 placeholder:text-slate-300 text-sm rounded-md focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/10 transition-all"
                  {...register("email")}
                />
                {errors.email && <p className="text-red-500 text-xs mt-0.5">{errors.email.message}</p>}
              </div>
              <div>
                <label htmlFor="phone" className="block text-[11px] font-medium text-slate-500 uppercase tracking-wide mb-1">
                  Phone
                </label>
                <input
                  type="text"
                  id="phone"
                  placeholder="Phone"
                  className="w-full px-3 py-2 bg-white border border-slate-300 text-slate-900 placeholder:text-slate-300 text-sm rounded-md focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/10 transition-all"
                  {...register("phone")}
                />
              </div>
            </div>
          </div>

          {/* Section 2: Order Details */}
          <div className="border-t border-slate-100 pt-3 space-y-3">
            <span className="text-[10px] font-semibold uppercase tracking-widest text-slate-400 block">Order Details</span>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label htmlFor="material" className="block text-[11px] font-medium text-slate-500 uppercase tracking-wide mb-1">
                  Material
                </label>
                <select
                  id="material"
                  className="w-full px-3 py-2 bg-white border border-slate-300 text-slate-900 text-sm rounded-md focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/10 transition-all appearance-none cursor-pointer"
                  {...register("material")}
                >
                  <option value="">Choose...</option>
                  {MATERIAL_OPTIONS.map((mat) => (
                    <option key={mat} value={mat}>
                      {mat}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="quantity" className="block text-[11px] font-medium text-slate-500 uppercase tracking-wide mb-1">
                  Quantity
                </label>
                <input
                  type="number"
                  id="quantity"
                  placeholder="5000"
                  className="w-full px-3 py-2 bg-white border border-slate-300 text-slate-900 placeholder:text-slate-300 text-sm rounded-md focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/10 transition-all"
                  {...register("quantity", { valueAsNumber: true })}
                />
              </div>
            </div>
          </div>

          {/* Section 3: Dimensions */}
          <div className="border-t border-slate-100 pt-3 space-y-3">
            <span className="text-[10px] font-semibold uppercase tracking-widest text-slate-400 block">Dimensions</span>
            <div className="grid grid-cols-4 gap-3">
              <div>
                <label htmlFor="length" className="block text-[11px] font-medium text-slate-500 uppercase tracking-wide mb-1">
                  Length
                </label>
                <input
                  type="text"
                  id="length"
                  placeholder="12"
                  className="w-full px-3 py-2 bg-white border border-slate-300 text-slate-900 placeholder:text-slate-300 text-sm rounded-md focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/10 transition-all"
                  {...register("size")}
                />
              </div>
              <div>
                <label htmlFor="width" className="block text-[11px] font-medium text-slate-500 uppercase tracking-wide mb-1">
                  Width
                </label>
                <input
                  type="text"
                  id="width"
                  placeholder="8"
                  className="w-full px-3 py-2 bg-white border border-slate-300 text-slate-900 placeholder:text-slate-300 text-sm rounded-md focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/10 transition-all"
                  {...register("printing")}
                />
              </div>
              <div>
                <label htmlFor="height" className="block text-[11px] font-medium text-slate-500 uppercase tracking-wide mb-1">
                  Height
                </label>
                <input
                  type="text"
                  id="height"
                  placeholder="4"
                  className="w-full px-3 py-2 bg-white border border-slate-300 text-slate-900 placeholder:text-slate-300 text-sm rounded-md focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/10 transition-all"
                  {...register("finishing")}
                />
              </div>
              <div>
                <label htmlFor="unit" className="block text-[11px] font-medium text-slate-500 uppercase tracking-wide mb-1">
                  Unit
                </label>
                <select
                  id="unit"
                  value={unit}
                  onChange={(e) => setUnit(e.target.value)}
                  className="w-full px-3 py-2 bg-white border border-slate-300 text-slate-900 text-sm rounded-md focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/10 transition-all appearance-none cursor-pointer"
                >
                  {UNIT_OPTIONS.map((u) => (
                    <option key={u} value={u}>
                      {u}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Section 4: Additional Info */}
          <div className="border-t border-slate-100 pt-3 space-y-3">
            <span className="text-[10px] font-semibold uppercase tracking-widest text-slate-400 block">Additional Info</span>
            <div>
              <label htmlFor="message" className="block text-[11px] font-medium text-slate-500 uppercase tracking-wide mb-1">
                Specifications
              </label>
              <textarea
                id="message"
                placeholder="Colors, finishes, special requirements..."
                rows={3}
                className="w-full px-3 py-2 bg-white border border-slate-300 text-slate-900 placeholder:text-slate-300 text-sm rounded-md focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/10 transition-all resize-none"
                {...register("message")}
              />
            </div>

            {/* File Upload */}
            <div>
              <label htmlFor="design_upload" className="flex items-center gap-2 border border-dashed border-slate-300 rounded-md px-3 py-2.5 cursor-pointer hover:border-brand-primary hover:bg-brand-primary/5 transition-colors">
                <Upload className="w-3.5 h-3.5 text-slate-400" />
                <span className="text-xs text-slate-500">Upload design file (optional)</span>
              </label>
              <input type="file" id="design_upload" className="sr-only" accept=".pdf,.png,.jpg,.jpeg,.ai,.psd" />
            </div>
          </div>

          {/* Consent Checkbox */}
          <div className="flex items-start gap-2 border-t border-slate-100 pt-4">
            <input
              type="checkbox"
              id="consent"
              checked={consentChecked}
              onChange={(e) => setConsentChecked(e.target.checked)}
              className="mt-1 w-4 h-4 rounded border-slate-300 text-brand-primary focus:ring-2 focus:ring-brand-primary/30 cursor-pointer flex-shrink-0"
            />
            <label htmlFor="consent" className="text-xs text-slate-600 cursor-pointer leading-snug">
              I agree to receive communications from Custom Packaging Lane. <a href="#" className="text-brand-primary hover:underline font-semibold">Privacy</a> & <a href="#" className="text-brand-primary hover:underline font-semibold">Terms</a>.
            </label>
          </div>

          {/* Error Message */}
          {submitState === "error" && errorMsg && (
            <div className="bg-red-50 border border-red-200 rounded-md p-3">
              <p className="text-red-700 text-xs">{errorMsg}</p>
            </div>
          )}

          {/* Submit Button - Premium CTA with modern animations */}
          <button
            type="submit"
            disabled={submitState === "submitting"}
            className="group relative w-full px-6 py-3 bg-brand-primary hover:bg-brand-primary/95 text-white font-semibold text-sm rounded-lg flex items-center justify-center gap-2 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-2xl hover:shadow-brand-primary/40 hover:-translate-y-0.5 overflow-hidden tracking-wide"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/15 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            <span className="relative flex items-center gap-2">
              {submitState === "submitting" ? "Sending..." : (
                <>
                  Get My Free Quote
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </span>
          </button>
        </form>
      )}
    </div>
  );
}
