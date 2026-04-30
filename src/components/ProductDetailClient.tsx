"use client";

import { ReactElement, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { quoteSchema, QuoteFormValues } from "@/lib/validations/quote.schema";
import styles from "./ProductDetailClient.module.css";

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
  rating?: number;
  reviewCount?: number;
}

export default function ProductDetailClient({
  productName,
  productId,
  longDescription,
  shortDescription,
  specs,
  features,
  rating = 4.9,
  reviewCount = 127,
}: ProductDetailClientProps): ReactElement {
  const [activeTab, setActiveTab] = useState<Tab>("description");
  const [submitState, setSubmitState] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<QuoteFormValues>({
    resolver: zodResolver(quoteSchema),
    defaultValues: {
      product_name: productName,
      product_id: productId,
    },
  });

  const onSubmit = async (data: QuoteFormValues) => {
    setSubmitState("submitting");
    setErrorMsg("");
    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, product_name: productName, product_id: productId }),
      });
      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.error || "Failed to submit quote");
      }
      setSubmitState("success");
      reset({ product_name: productName, product_id: productId });
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : "Something went wrong";
      setErrorMsg(message);
      setSubmitState("error");
    }
  };

  const fullStars = Math.floor(rating);
  const hasHalf = rating - fullStars >= 0.5;
  const stars =
    "★".repeat(fullStars) + (hasHalf ? "½" : "") + "☆".repeat(5 - fullStars - (hasHalf ? 1 : 0));

  return (
    <div className={styles.detailGrid}>
      {/* LEFT: Tabs */}
      <div className={styles.detailLeft}>
        <div className={styles.tabs} role="tablist" aria-label="Product details">
          <button
            role="tab"
            aria-selected={activeTab === "description"}
            aria-controls="tab-description"
            id="tab-btn-description"
            className={`${styles.tabBtn} ${activeTab === "description" ? styles.tabBtnActive : ""}`}
            onClick={() => setActiveTab("description")}
            type="button"
          >
            Description
          </button>
          <button
            role="tab"
            aria-selected={activeTab === "specifications"}
            aria-controls="tab-specifications"
            id="tab-btn-specifications"
            className={`${styles.tabBtn} ${activeTab === "specifications" ? styles.tabBtnActive : ""}`}
            onClick={() => setActiveTab("specifications")}
            type="button"
          >
            Product Information
          </button>
          <button
            role="tab"
            aria-selected={activeTab === "features"}
            aria-controls="tab-features"
            id="tab-btn-features"
            className={`${styles.tabBtn} ${activeTab === "features" ? styles.tabBtnActive : ""}`}
            onClick={() => setActiveTab("features")}
            type="button"
          >
            Features
          </button>
        </div>

        {activeTab === "description" && (
          <div
            role="tabpanel"
            id="tab-description"
            aria-labelledby="tab-btn-description"
            className={styles.tabPanel}
          >
            <h3 className={styles.tabPanelHeading}>About This Product</h3>
            {longDescription || shortDescription ? (
              <p className={styles.tabPanelText}>{longDescription || shortDescription}</p>
            ) : (
              <p className={styles.tabPanelText}>
                A premium custom packaging solution designed to elevate your brand
                presence and protect products through storage and shipping.
              </p>
            )}
            <p className={styles.tabPanelTextMuted}>
              Customizable dimensions, finishes, and printing options let you create a
              unique unboxing experience. Pair with our free 3D design support to nail
              the look before production.
            </p>
          </div>
        )}

        {activeTab === "specifications" && (
          <div
            role="tabpanel"
            id="tab-specifications"
            aria-labelledby="tab-btn-specifications"
            className={styles.tabPanel}
          >
            <div className={styles.specsTable}>
              {specs.length === 0 && (
                <p className={styles.tabPanelTextMuted}>
                  Detailed specifications will be added shortly.
                </p>
              )}
              {specs.map((s) => (
                <div key={s.label} className={styles.specRow}>
                  <span className={styles.specLabel}>{s.label}</span>
                  <span className={styles.specValue}>{s.value}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "features" && (
          <div
            role="tabpanel"
            id="tab-features"
            aria-labelledby="tab-btn-features"
            className={styles.tabPanel}
          >
            <h3 className={styles.tabPanelHeading}>Key Features</h3>
            <ul className={styles.featureList}>
              {features.length === 0 && (
                <li className={styles.tabPanelTextMuted}>
                  Feature list coming soon.
                </li>
              )}
              {features.map((f) => (
                <li key={f.label} className={styles.featureItem}>
                  <span aria-hidden className={styles.featureCheck}>
                    ✓
                  </span>
                  <span>{f.label}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* RIGHT: Quick summary + inline quote form */}
      <aside className={styles.detailRight}>
        <div className={styles.summaryCard}>
          <h3 className={styles.summaryTitle}>{productName}</h3>
          <div className={styles.ratingRow}>
            <span className={styles.stars} aria-hidden>
              {stars}
            </span>
            <span className={styles.reviewCount}>
              {rating.toFixed(1)} · {reviewCount.toLocaleString()} reviews
            </span>
          </div>
        </div>

        <div className={styles.quoteCard}>
          <h3 className={styles.quoteHeading}>Get a Custom Quote</h3>
          <p className={styles.quoteSub}>
            Tell us what you need — we&apos;ll respond with pricing in 24 hours.
          </p>

          {submitState === "success" ? (
            <div className={styles.successBox} role="status" aria-live="polite">
              <strong>Thanks!</strong> Your quote request was sent. Our team will
              email you within 24 hours.
            </div>
          ) : (
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)} noValidate>
              <div className={styles.field}>
                <label htmlFor="qd-name" className={styles.label}>
                  Full Name <span className={styles.req}>*</span>
                </label>
                <input
                  id="qd-name"
                  type="text"
                  className={styles.input}
                  aria-invalid={!!errors.full_name}
                  {...register("full_name")}
                />
                {errors.full_name && (
                  <p className={styles.fieldError}>{errors.full_name.message}</p>
                )}
              </div>

              <div className={styles.field}>
                <label htmlFor="qd-email" className={styles.label}>
                  Email <span className={styles.req}>*</span>
                </label>
                <input
                  id="qd-email"
                  type="email"
                  className={styles.input}
                  aria-invalid={!!errors.email}
                  {...register("email")}
                />
                {errors.email && (
                  <p className={styles.fieldError}>{errors.email.message}</p>
                )}
              </div>

              <div className={styles.field}>
                <label htmlFor="qd-company" className={styles.label}>
                  Company
                </label>
                <input
                  id="qd-company"
                  type="text"
                  className={styles.input}
                  {...register("company_name")}
                />
              </div>

              <div className={styles.field}>
                <label htmlFor="qd-phone" className={styles.label}>
                  Phone
                </label>
                <input
                  id="qd-phone"
                  type="tel"
                  className={styles.input}
                  {...register("phone")}
                />
              </div>

              <div className={styles.field}>
                <label htmlFor="qd-quantity" className={styles.label}>
                  Quantity
                </label>
                <input
                  id="qd-quantity"
                  type="number"
                  placeholder="Number of units"
                  className={styles.input}
                  {...register("quantity", { valueAsNumber: true })}
                />
                {errors.quantity && (
                  <p className={styles.fieldError}>{errors.quantity.message}</p>
                )}
              </div>

              <div className={styles.field}>
                <label htmlFor="qd-message" className={styles.label}>
                  Special Requirements
                </label>
                <textarea
                  id="qd-message"
                  rows={3}
                  placeholder="Any custom needs?"
                  className={styles.textarea}
                  {...register("message")}
                />
              </div>

              {submitState === "error" && errorMsg && (
                <p className={styles.formError} role="alert">
                  {errorMsg}
                </p>
              )}

              <button
                type="submit"
                className={styles.submitBtn}
                disabled={submitState === "submitting"}
              >
                {submitState === "submitting" ? "Sending..." : "Request Quote"}
              </button>
            </form>
          )}
        </div>
      </aside>
    </div>
  );
}
