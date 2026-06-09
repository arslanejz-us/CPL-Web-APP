"use client";

import { useState } from "react";
import { User, Mail, Phone, MessageSquare, ArrowRight, CheckCircle2 } from "lucide-react";

type FormData = {
  name: string;
  email: string;
  phone: string;
  description: string;
};

type SubmitState = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    description: "",
  });
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitState("submitting");
    setErrorMsg("");

    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          full_name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.description,
        }),
      });

      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "Failed to send message");

      setSubmitState("success");
      setFormData({ name: "", email: "", phone: "", description: "" });
      setTimeout(() => setSubmitState("idle"), 4000);
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : "Something went wrong";
      setErrorMsg(message);
      setSubmitState("error");
    }
  };

  if (submitState === "success") {
    return (
      <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-8 lg:p-10 h-full flex flex-col items-center justify-center text-center min-h-[500px]">
        <div className="w-20 h-20 rounded-full bg-green-50 flex items-center justify-center mb-4">
          <CheckCircle2 className="w-12 h-12 text-green-500" />
        </div>
        <h3 className="text-2xl font-extrabold text-brand-charcoal mb-2">Message Sent!</h3>
        <p className="text-slate-600 max-w-sm">
          Thank you for reaching out. Our team will get back to you within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <div className="relative bg-white rounded-2xl shadow-xl border border-slate-100 p-6 lg:p-10 overflow-hidden">
      {/* Gradient accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-primary via-brand-primary/60 to-transparent" />

      <div className="mb-6">
        <span className="inline-block mb-2">
          <span className="text-[10px] font-bold tracking-widest uppercase text-brand-primary">
            Get In Touch
          </span>
        </span>
        <h2 className="text-2xl md:text-3xl font-extrabold text-brand-charcoal mb-2 leading-tight">
          Send Us a Message
        </h2>
        <p className="text-sm text-slate-600">
          Fill out the form below and we&apos;ll respond within 24 hours.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5" noValidate>
        {/* Name */}
        <div>
          <label
            htmlFor="name"
            className="flex items-center gap-2 text-[11px] font-semibold text-slate-600 uppercase tracking-wide mb-2"
          >
            <User className="w-3.5 h-3.5 text-brand-primary" />
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="John Smith"
            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 text-sm rounded-lg focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/10 focus:bg-white hover:border-slate-300 transition-all"
          />
        </div>

        {/* Email + Phone */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="email"
              className="flex items-center gap-2 text-[11px] font-semibold text-slate-600 uppercase tracking-wide mb-2"
            >
              <Mail className="w-3.5 h-3.5 text-brand-primary" />
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="you@company.com"
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 text-sm rounded-lg focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/10 focus:bg-white hover:border-slate-300 transition-all"
            />
          </div>
          <div>
            <label
              htmlFor="phone"
              className="flex items-center gap-2 text-[11px] font-semibold text-slate-600 uppercase tracking-wide mb-2"
            >
              <Phone className="w-3.5 h-3.5 text-brand-primary" />
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+1 (555) 123-4567"
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 text-sm rounded-lg focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/10 focus:bg-white hover:border-slate-300 transition-all"
            />
          </div>
        </div>

        {/* Description */}
        <div>
          <label
            htmlFor="description"
            className="flex items-center gap-2 text-[11px] font-semibold text-slate-600 uppercase tracking-wide mb-2"
          >
            <MessageSquare className="w-3.5 h-3.5 text-brand-primary" />
            Description *
          </label>
          <textarea
            id="description"
            name="description"
            required
            rows={6}
            value={formData.description}
            onChange={handleChange}
            placeholder="Tell us about your project, packaging needs, quantity, timeline, or any specific requirements..."
            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 text-sm rounded-lg focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/10 focus:bg-white hover:border-slate-300 transition-all resize-none"
          />
        </div>

        {/* Error */}
        {submitState === "error" && errorMsg && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-3">
            <p className="text-red-700 text-xs">{errorMsg}</p>
          </div>
        )}

        {/* Submit */}
        <button
          type="submit"
          disabled={submitState === "submitting"}
          className="group relative w-full px-6 py-3.5 bg-brand-primary hover:bg-brand-primary/95 text-white font-semibold text-sm rounded-lg flex items-center justify-center gap-2 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-2xl hover:shadow-brand-primary/40 hover:-translate-y-0.5 overflow-hidden tracking-wide"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/15 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
          <span className="relative flex items-center gap-2">
            {submitState === "submitting" ? "Sending..." : (
              <>
                Send Message
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </span>
        </button>

        <p className="text-xs text-slate-500 text-center">
          By submitting this form, you agree to our{" "}
          <a href="/privacy-policy" className="text-brand-primary hover:underline font-semibold">
            Privacy Policy
          </a>
          .
        </p>
      </form>
    </div>
  );
}
