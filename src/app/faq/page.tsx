import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQAccordion from "@/components/FAQAccordion";
import NewsletterCTA from "@/components/NewsletterCTA";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "FAQ — CPL Packaging",
  description:
    "Answers to the most common questions about minimum order quantities, shipping, sustainable materials, design support, and samples.",
};

const FAQS = [
  {
    q: "What is your minimum order quantity?",
    a: "Minimum order quantities vary by product, ranging from 50 to 5,000 units. Most of our folding boxes have a 200–500 unit minimum. Contact us for product-specific MOQs.",
  },
  {
    q: "How long does production and shipping take?",
    a: "Standard lead times are 10–14 days for most products, with rush delivery (5–7 days) available for an additional fee. We ship internationally to 50+ countries with full tracking.",
  },
  {
    q: "Do you offer sustainable / eco-friendly options?",
    a: "Yes. Over 70% of our product line is made from recyclable, compostable, or biodegradable materials including FSC-certified Kraft, recycled cardboard, soy-based inks, and biodegradable finishes.",
  },
  {
    q: "Can I get a sample before placing an order?",
    a: "Absolutely. Plain samples are complimentary and ship in 2–3 business days. Custom-printed samples are available at-cost so you can verify color, finish, and structure before committing to a full run.",
  },
  {
    q: "Do you offer design services?",
    a: "Yes — our in-house design team provides free dieline templates, photo-realistic 3D mockups, and unlimited revisions. Custom artwork design is included on orders over 1,000 units.",
  },
  {
    q: "What file formats do you accept for artwork?",
    a: "We accept PDF, AI, PSD, EPS, and ZIP files. For best print results, send vector artwork at 300 DPI in CMYK with 0.125\" bleed. Our team will review every file and flag any issues before production.",
  },
  {
    q: "Can I order custom shapes and dielines?",
    a: "Yes. We support fully custom dielines, die-cuts, embossing, debossing, and intricate finishing. Send your concept and our design team will engineer a production-ready dieline at no cost.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept all major credit cards, ACH transfers, and wire payments. For orders over $10,000 we offer Net-30 terms to qualified businesses after a quick credit check.",
  },
];

export default function FAQPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "FAQ" },
        ]}
      />

      <div className={styles.container}>
        <header className={styles.header}>
          <span className={styles.eyebrow}>Help Center</span>
          <h1 className={styles.title}>Frequently Asked Questions</h1>
          <p className={styles.subtitle}>
            Everything you need to know about ordering, materials, design
            support, and shipping. Don&apos;t see your question? Reach out and our
            packaging specialists will get back within 24 hours.
          </p>
        </header>

        <FAQAccordion items={FAQS} />

        <div className={styles.footerCta}>
          <h2 className={styles.footerCtaTitle}>Still have questions?</h2>
          <p className={styles.footerCtaText}>
            Our team is happy to walk you through pricing, materials, or
            structural options for your specific product.
          </p>
          <div className={styles.footerCtaActions}>
            <Link href="/contact-us" className={styles.btnPrimary}>
              Talk to a Specialist
            </Link>
            <Link href="/products" className={styles.btnSecondary}>
              Browse Products
            </Link>
          </div>
        </div>

        <NewsletterCTA variant="insight" source="faq-page" />
      </div>
    </>
  );
}
