import type { ReactElement } from "react";
import Link from "next/link";
import styles from "./Hero.module.css";

export default function Hero(): ReactElement {
  return (
    <section className={styles.heroContainer}>
      <div className={styles.heroContent}>
        <h1 className={styles.heading}>
          Get Custom Packaging – Designed Around Your Brand
        </h1>
        <p className={styles.description}>
          Delivered within 7 days with free shipping in the USA. 
        </p>
        <Link href="/categories" className={styles.ctaButton}>
          Explore Categories
        </Link>
      </div>
    </section>
  );
}
