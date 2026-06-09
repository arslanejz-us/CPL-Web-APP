"use client";

import { ReactElement, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { quoteSchema, QuoteFormValues } from "@/lib/validations/quote.schema";
import { CheckCircle2, Upload, ArrowRight, X } from "lucide-react";

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
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

export default function QuoteModal({ isOpen, onClose }: QuoteModalProps): ReactElement | null {
  const [submitState, setSubmitState] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [consentChecked, setConsentChecked] = useState(false);
  const [unit, setUnit] = useState("Inches");

  const { register, handleSubmit, formState: { errors }, reset, watch } = useForm<QuoteFormValues>({
    resolver: zodResolver(quoteSchema),
  });

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) onClose();
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const onSubmit = async (data: QuoteFormValues) => {
    if (!consentChecked) {
      setErrorMsg("Please consent to receive communications");
      setSubmitState("error");
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
        body: JSON.stringify({ ...data, size: sizeString }),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "Failed to submit quote");

      setSubmitState("success");
      reset();
      setConsentChecked(false);
      setTimeout(() => {
        onClose();
        setSubmitState("idle");
      }, 3000);
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : "Something went wrong";
      setErrorMsg(message);
      setSubmitState("error");
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-charcoal/70 backdrop-blur-sm animate-in fade-in duration-300"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl animate-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-brand-charcoal flex items-center justify-center transition-all duration-200"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header with gradient accent */}
        <div className="relative px-6 pt-8 pb-6 border-b border-slate-100 overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-primary via-brand-primary/60 to-transparent" />
          <span className="inline-block mb-2">
            <span className="text-[10px] font-bold tracking-widest uppercase text-brand-primary">
              Free Quote
            </span>
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-brand-charcoal mb-2 leading-tight">
            Get an Instant Quote
          </h2>
          <p className="text-sm text-slate-600">
            Fill out the form below and our packaging specialists will get back to you within 24 hours.
          </p>
        </div>

        {/* Form Body */}
        <div className="p-6">
          {submitState === "success" ? (
            <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
              <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-3" />
              <p className="text-lg font-bold text-brand-charcoal mb-1">Quote Submitted!</p>
              <p className="text-sm text-slate-600">We&apos;ll contact you within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
              {/* Section 1: Contact Info */}
              <div className="space-y-3">
                <span className="text-[10px] font-semibold uppercase tracking-widest text-slate-400 block">
                  Contact
                </span>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div>
                    <label htmlFor="modal_full_name" className="block text-[11px] font-medium text-slate-500 uppercase tracking-wide mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="modal_full_name"
                      placeholder="Name"
                      className="w-full px-3 py-2 bg-white border border-slate-300 text-slate-900 placeholder:text-slate-300 text-sm rounded-md focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/10 transition-all"
                      {...register("full_name")}
                    />
                    {errors.full_name && <p className="text-red-500 text-xs mt-0.5">{errors.full_name.message}</p>}
                  </div>
                  <div>
                    <label htmlFor="modal_email" className="block text-[11px] font-medium text-slate-500 uppercase tracking-wide mb-1">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="modal_email"
                      placeholder="Email"
                      className="w-full px-3 py-2 bg-white border border-slate-300 text-slate-900 placeholder:text-slate-300 text-sm rounded-md focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/10 transition-all"
                      {...register("email")}
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-0.5">{errors.email.message}</p>}
                  </div>
                  <div>
                    <label htmlFor="modal_phone" className="block text-[11px] font-medium text-slate-500 uppercase tracking-wide mb-1">
                      Phone
                    </label>
                    <input
                      type="text"
                      id="modal_phone"
                      placeholder="Phone"
                      className="w-full px-3 py-2 bg-white border border-slate-300 text-slate-900 placeholder:text-slate-300 text-sm rounded-md focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/10 transition-all"
                      {...register("phone")}
                    />
                  </div>
                </div>
              </div>

              {/* Section 2: Order Details */}
              <div className="border-t border-slate-100 pt-4 space-y-3">
                <span className="text-[10px] font-semibold uppercase tracking-widest text-slate-400 block">
                  Order Details
                </span>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="modal_material" className="block text-[11px] font-medium text-slate-500 uppercase tracking-wide mb-1">
                      Material
                    </label>
                    <select
                      id="modal_material"
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
                    <label htmlFor="modal_quantity" className="block text-[11px] font-medium text-slate-500 uppercase tracking-wide mb-1">
                      Quantity
                    </label>
                    <input
                      type="number"
                      id="modal_quantity"
                      placeholder="5000"
                      className="w-full px-3 py-2 bg-white border border-slate-300 text-slate-900 placeholder:text-slate-300 text-sm rounded-md focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/10 transition-all"
                      {...register("quantity", { valueAsNumber: true })}
                    />
                  </div>
                </div>
              </div>

              {/* Section 3: Dimensions */}
              <div className="border-t border-slate-100 pt-4 space-y-3">
                <span className="text-[10px] font-semibold uppercase tracking-widest text-slate-400 block">
                  Dimensions
                </span>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  <div>
                    <label htmlFor="modal_length" className="block text-[11px] font-medium text-slate-500 uppercase tracking-wide mb-1">
                      Length
                    </label>
                    <input
                      type="text"
                      id="modal_length"
                      placeholder="12"
                      className="w-full px-3 py-2 bg-white border border-slate-300 text-slate-900 placeholder:text-slate-300 text-sm rounded-md focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/10 transition-all"
                      {...register("size")}
                    />
                  </div>
                  <div>
                    <label htmlFor="modal_width" className="block text-[11px] font-medium text-slate-500 uppercase tracking-wide mb-1">
                      Width
                    </label>
                    <input
                      type="text"
                      id="modal_width"
                      placeholder="8"
                      className="w-full px-3 py-2 bg-white border border-slate-300 text-slate-900 placeholder:text-slate-300 text-sm rounded-md focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/10 transition-all"
                      {...register("printing")}
                    />
                  </div>
                  <div>
                    <label htmlFor="modal_height" className="block text-[11px] font-medium text-slate-500 uppercase tracking-wide mb-1">
                      Height
                    </label>
                    <input
                      type="text"
                      id="modal_height"
                      placeholder="4"
                      className="w-full px-3 py-2 bg-white border border-slate-300 text-slate-900 placeholder:text-slate-300 text-sm rounded-md focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/10 transition-all"
                      {...register("finishing")}
                    />
                  </div>
                  <div>
                    <label htmlFor="modal_unit" className="block text-[11px] font-medium text-slate-500 uppercase tracking-wide mb-1">
                      Unit
                    </label>
                    <select
                      id="modal_unit"
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
              <div className="border-t border-slate-100 pt-4 space-y-3">
                <span className="text-[10px] font-semibold uppercase tracking-widest text-slate-400 block">
                  Additional Info
                </span>
                <div>
                  <label htmlFor="modal_message" className="block text-[11px] font-medium text-slate-500 uppercase tracking-wide mb-1">
                    Specifications
                  </label>
                  <textarea
                    id="modal_message"
                    placeholder="Colors, finishes, special requirements..."
                    rows={3}
                    className="w-full px-3 py-2 bg-white border border-slate-300 text-slate-900 placeholder:text-slate-300 text-sm rounded-md focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/10 transition-all resize-none"
                    {...register("message")}
                  />
                </div>

                {/* File Upload */}
                <div>
                  <label htmlFor="modal_design_upload" className="flex items-center gap-2 border border-dashed border-slate-300 rounded-md px-3 py-2.5 cursor-pointer hover:border-brand-primary hover:bg-brand-primary/5 transition-colors">
                    <Upload className="w-3.5 h-3.5 text-slate-400" />
                    <span className="text-xs text-slate-500">Upload design file (optional)</span>
                  </label>
                  <input
                    type="file"
                    id="modal_design_upload"
                    className="sr-only"
                    accept=".pdf,.png,.jpg,.jpeg,.ai,.psd"
                  />
                </div>
              </div>

              {/* Consent Checkbox */}
              <div className="flex items-start gap-2 border-t border-slate-100 pt-4">
                <input
                  type="checkbox"
                  id="modal_consent"
                  checked={consentChecked}
                  onChange={(e) => setConsentChecked(e.target.checked)}
                  className="mt-1 w-4 h-4 rounded border-slate-300 text-brand-primary focus:ring-2 focus:ring-brand-primary/30 cursor-pointer flex-shrink-0"
                />
                <label htmlFor="modal_consent" className="text-xs text-slate-600 cursor-pointer leading-snug">
                  I agree to receive communications from Custom Packaging Lane.{" "}
                  <a href="#" className="text-brand-primary hover:underline font-semibold">Privacy</a> &{" "}
                  <a href="#" className="text-brand-primary hover:underline font-semibold">Terms</a>.
                </label>
              </div>

              {/* Error Message */}
              {submitState === "error" && errorMsg && (
                <div className="bg-red-50 border border-red-200 rounded-md p-3">
                  <p className="text-red-700 text-xs">{errorMsg}</p>
                </div>
              )}

              {/* Submit Button - Modern Premium CTA */}
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
      </div>
    </div>
  );
}
