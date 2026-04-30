import { ReactElement } from "react";
import Link from "next/link";
import styles from "./HeroPanel.module.css";

type TrustBadge = {
  value: string;
  label: string;
};

const TRUST_BADGES: TrustBadge[] = [
  { value: "5,000+", label: "Brands Served" },
  { value: "100%", label: "Custom Printed" },
  { value: "7 Days", label: "Fast Production" },
  { value: "70%", label: "Eco-Friendly" },
];

export default function HeroPanel(): ReactElement {
  return (
    <section className={styles.hero} aria-labelledby="hero-headline">
      <span aria-hidden className={`${styles.orb} ${styles.orbA}`} />
      <span aria-hidden className={`${styles.orb} ${styles.orbB}`} />

      <div className={styles.content}>
        <span className={styles.eyebrow}>Premium Custom Packaging</span>
        <h1 id="hero-headline" className={styles.headline}>
          Packaging That Elevates Your Brand
          <span className={styles.headlineAccent}>
            and Delights Your Customers
          </span>
        </h1>
        <p className={styles.subheadline}>
          From concept to production — sustainable, branded packaging delivered
          in as little as 7 days. Free design support on every order.
        </p>

        <div className={styles.actions}>
          <Link href="/products" className={styles.btnPrimary}>
            Browse Products
          </Link>
          <Link href="/contact-us" className={styles.btnSecondary}>
            Request a Quote
          </Link>
        </div>

        <ul className={styles.trustGrid} aria-label="Trust indicators">
          {TRUST_BADGES.map((badge) => (
            <li key={badge.label} className={styles.trustItem}>
              <strong className={styles.trustValue}>{badge.value}</strong>
              <span className={styles.trustLabel}>{badge.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
