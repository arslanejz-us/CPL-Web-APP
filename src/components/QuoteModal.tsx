import { ReactElement, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { quoteSchema, QuoteFormValues } from "@/lib/validations/quote.schema";
import styles from "./QuoteModal.module.css";

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function QuoteModal({ isOpen, onClose }: QuoteModalProps): ReactElement | null {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const { register, handleSubmit, formState: { errors }, reset } = useForm<QuoteFormValues>({
    resolver: zodResolver(quoteSchema),
  });

  if (!isOpen) return null;

  const onSubmit = async (data: QuoteFormValues) => {
    setIsSubmitting(true);
    setErrorMsg("");
    setSuccess(false);

    try {
      const response = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to submit quote");
      }

      setSuccess(true);
      reset();
      setTimeout(() => {
        onClose();
        setSuccess(false);
      }, 3000);
    } catch (error: unknown) {
      setErrorMsg(error instanceof Error ? error.message : 'Something went wrong');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContainer} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose} aria-label="Close modal">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
        </button>

        <div className={styles.modalHeader}>
          <h2>Get an Instant Quote</h2>
          <p>Fill out the form below and our packaging specialists will get back to you.</p>
        </div>

        {success ? (
          <div className="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400" role="alert">
            <span className="font-medium">Success!</span> Your quote request has been sent.
          </div>
        ) : (
          <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            {errorMsg && (
              <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                {errorMsg}
              </div>
            )}
            <div className={styles.row}>
              <div className={styles.half}>
                <label className={styles.label} htmlFor="full_name">Full Name*</label>
                <input type="text" className={styles.input} id="full_name" placeholder="John Doe" {...register("full_name")} />
                {errors.full_name && <p className="text-red-500 text-xs mt-1">{errors.full_name.message}</p>}
              </div>
              <div className={styles.half}>
                <label className={styles.label} htmlFor="email">Email*</label>
                <input type="email" className={styles.input} id="email" placeholder="john@example.com" {...register("email")} />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
              </div>
            </div>

            <div className={styles.row}>
              <div className={styles.half}>
                <label className={styles.label} htmlFor="phone">Phone</label>
                <input type="text" className={styles.input} id="phone" placeholder="(555) 123-4567" {...register("phone")} />
              </div>
              <div className={styles.half}>
                <label className={styles.label} htmlFor="quantity">Total Quantity</label>
                <input type="number" className={styles.input} id="quantity" placeholder="e.g. 1000" {...register("quantity", { valueAsNumber: true })} />
                {errors.quantity && <p className="text-red-500 text-xs mt-1">{errors.quantity.message}</p>}
              </div>
            </div>

            <div className={styles.row}>
              <div className={styles.half}>
                <label className={styles.label} htmlFor="size">Box Size</label>
                <input type="text" className={styles.input} id="size" placeholder="Length x Width x Depth" {...register("size")} />
              </div>
              <div className={styles.half}>
                <label className={styles.label} htmlFor="product_name">Box Type</label>
                <select className={styles.select} id="product_name" {...register("product_name")}>
                  <option value="">Select Box Type</option>
                  <option value="Straight Tuck Boxes">Straight Tuck Boxes</option>
                  <option value="Reverse Tuck Boxes">Reverse Tuck Boxes</option>
                  <option value="Mailer Box">Mailer Box</option>
                  <option value="Folding Cartons">Folding Cartons</option>
                  <option value="Rigid Boxes">Rigid Boxes</option>
                </select>
              </div>
            </div>

            <div className={styles.row}>
              <div className={styles.half} style={{ flex: '1 1 100%' }}>
                <label className={styles.label} htmlFor="message">Specifications</label>
                <textarea
                  className={styles.textarea}
                  id="message"
                  placeholder="Provide detailed packaging specifications including dimensions, materials, weight restrictions, and design references and we'll get back to you with an instant quote."
                  {...register("message")}
                ></textarea>
              </div>
            </div>

            <div className={styles.row}>
              <button type="submit" className={styles.submitBtn} disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Get Quote"}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
