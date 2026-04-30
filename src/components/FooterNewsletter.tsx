"use client";

import { ReactElement, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  newsletterSchema,
  NewsletterFormValues,
} from "@/lib/validations/newsletter.schema";
import styles from "./FooterNewsletter.module.css";

export default function FooterNewsletter(): ReactElement {
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
    defaultValues: { source: "footer" },
  });

  const onSubmit = async (data: NewsletterFormValues) => {
    setStatus("submitting");
    setErrorMsg("");
    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, source: "footer" }),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "Subscription failed");
      setStatus("success");
      reset({ source: "footer" });
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : "Something went wrong";
      setErrorMsg(message);
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <p className={styles.successMsg} role="status" aria-live="polite">
        ✓ You&apos;re subscribed. Check your inbox for a welcome message.
      </p>
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)} noValidate>
      <label htmlFor="footer-newsletter-email" className={styles.srOnly}>
        Email address
      </label>
      <div className={styles.inputRow}>
        <input
          id="footer-newsletter-email"
          type="email"
          placeholder="your@email.com"
          className={styles.input}
          aria-invalid={!!errors.email}
          disabled={status === "submitting"}
          {...register("email")}
        />
        <button
          type="submit"
          className={styles.submitBtn}
          disabled={status === "submitting"}
        >
          {status === "submitting" ? "..." : "Subscribe"}
        </button>
      </div>
      {errors.email && (
        <p className={styles.errorText} role="alert">
          {errors.email.message}
        </p>
      )}
      {status === "error" && errorMsg && !errors.email && (
        <p className={styles.errorText} role="alert">
          {errorMsg}
        </p>
      )}
    </form>
  );
}
