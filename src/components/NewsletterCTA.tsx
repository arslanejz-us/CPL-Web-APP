"use client";

import { ReactElement, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  newsletterSchema,
  NewsletterFormValues,
} from "@/lib/validations/newsletter.schema";
import styles from "./NewsletterCTA.module.css";

type Variant = "conversion" | "insight" | "updates";

interface NewsletterCTAProps {
  variant?: Variant;
  source?: string;
  className?: string;
}

const COPY: Record<
  Variant,
  { eyebrow: string; heading: string; subheading: string; button: string }
> = {
  conversion: {
    eyebrow: "Subscriber-Only Offer",
    heading: "Get 10% Off Your First Custom Order",
    subheading:
      "Join 12,000+ brand owners who get exclusive packaging deals, design tips, and early access to new materials — straight to their inbox.",
    button: "Send My Discount",
  },
  insight: {
    eyebrow: "Industry Newsletter",
    heading: "Stay Ahead of the Packaging Curve",
    subheading:
      "Get monthly trend reports, sustainability updates, and case studies from brands scaling with custom packaging.",
    button: "Subscribe Free",
  },
  updates: {
    eyebrow: "New Drops",
    heading: "Be First to Know What's New",
    subheading:
      "New materials, finishes, and packaging styles drop every month. Get early access plus subscriber-only pricing.",
    button: "Notify Me",
  },
};

export default function NewsletterCTA({
  variant = "conversion",
  source = "product-page",
  className = "",
}: NewsletterCTAProps): ReactElement {
  const copy = COPY[variant];
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">(
    "idle",
  );
  const [errorMsg, setErrorMsg] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<NewsletterFormValues>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: { source },
  });

  const onSubmit = async (data: NewsletterFormValues) => {
    setStatus("submitting");
    setErrorMsg("");
    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, source }),
      });
      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.error || "Subscription failed");
      }
      setStatus("success");
      reset({ source });
    } catch (error: any) {
      setErrorMsg(error.message);
      setStatus("error");
    }
  };

  return (
    <section
      className={`${styles.wrap} ${className}`}
      aria-labelledby="newsletter-heading"
    >
      <div className={styles.inner}>
        <span className={styles.eyebrow}>{copy.eyebrow}</span>
        <h2 id="newsletter-heading" className={styles.heading}>
          {copy.heading}
        </h2>
        <p className={styles.subheading}>{copy.subheading}</p>

        {status === "success" ? (
          <div className={styles.successBox} role="status" aria-live="polite">
            <span className={styles.successIcon} aria-hidden>
              ✓
            </span>
            <div>
              <strong>You're in.</strong> Check your inbox — your discount code
              is on its way.
            </div>
          </div>
        ) : (
          <form className={styles.form} onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className={styles.fieldRow}>
              <label htmlFor="newsletter-email" className={styles.srOnly}>
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                placeholder="Enter your work email"
                className={styles.input}
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "newsletter-error" : undefined}
                disabled={status === "submitting"}
                {...register("email")}
              />
              <button
                type="submit"
                className={styles.button}
                disabled={status === "submitting"}
              >
                {status === "submitting" ? "Sending..." : copy.button}
              </button>
            </div>

            {errors.email && (
              <p id="newsletter-error" className={styles.errorText} role="alert">
                {errors.email.message}
              </p>
            )}
            {status === "error" && errorMsg && !errors.email && (
              <p className={styles.errorText} role="alert">
                {errorMsg}
              </p>
            )}

            <p className={styles.disclaimer}>
              No spam. Unsubscribe anytime. Two emails a month, max.
            </p>
          </form>
        )}

        <ul className={styles.trustStrip} aria-label="Trust indicators">
          <li>
            <span aria-hidden>✓</span> Trusted by 5,000+ brands
          </li>
          <li>
            <span aria-hidden>✓</span> 4.9★ from 1,200+ reviews
          </li>
          <li>
            <span aria-hidden>✓</span> GDPR compliant
          </li>
        </ul>
      </div>
    </section>
  );
}
