"use client";

import type { ReactElement } from "react";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import styles from "./WhyChooseUs.module.css";

type Feature = {
  title: string;
  description: string;
};

const FEATURES: Feature[] = [
  {
    title: "Industry-Leading Expertise",
    description:
      "15+ years designing custom packaging for cosmetics, food & beverage, retail, CBD, and luxury brands.",
  },
  {
    title: "7-Day Production Guarantee",
    description:
      "Tight launch deadline? We ship orders in as little as 7 business days with free expedited USA shipping.",
  },
  {
    title: "100% Eco-Friendly Materials",
    description:
      "FSC-certified Kraft, recycled cardboard, soy-based inks, and biodegradable finishes for sustainable brands.",
  },
  {
    title: "Free 3D Design Support",
    description:
      "Unlimited revisions, dielines, and photo-realistic 3D mockups from our in-house team — at zero cost.",
  },
  {
    title: "Global Shipping & Logistics",
    description:
      "Door-to-door delivery to 50+ countries with full tracking, customs handling, and warehousing options.",
  },
  {
    title: "Trusted by 5,000+ Brands",
    description:
      "From Shopify launches to Sephora shelves — 4.9★ rating across 1,200+ verified client reviews.",
  },
];

const AUTO_MS = 5000;

function CheckIcon(): ReactElement {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M20 6L9 17l-5-5"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function FeatureCard({ feature }: { feature: Feature }): ReactElement {
  return (
    <article className={styles.card}>
      <div className={styles.iconWrap}>
        <CheckIcon />
      </div>
      <h3 className={styles.title}>{feature.title}</h3>
      <p className={styles.description}>{feature.description}</p>
    </article>
  );
}

function useSlidesToShow(): number {
  const [n, setN] = useState(1);

  useEffect(() => {
    const mqLg = window.matchMedia("(min-width: 1024px)");
    const mqSm = window.matchMedia("(min-width: 640px)");

    const update = () => {
      if (mqLg.matches) setN(5);
      else if (mqSm.matches) setN(2);
      else setN(1);
    };

    update();
    mqLg.addEventListener("change", update);
    mqSm.addEventListener("change", update);
    return () => {
      mqLg.removeEventListener("change", update);
      mqSm.removeEventListener("change", update);
    };
  }, []);

  return n;
}

export default function WhyChooseUs(): ReactElement {
  const slidesToShow = useSlidesToShow();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  const isCarousel = slidesToShow < 5;
  const maxIndex = Math.max(0, FEATURES.length - slidesToShow);

  useEffect(() => {
    setIndex((i) => Math.min(i, maxIndex));
  }, [maxIndex]);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setReduceMotion(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  useEffect(() => {
    if (!isCarousel || paused || reduceMotion) return;

    const id = window.setInterval(() => {
      setIndex((i) => (i >= maxIndex ? 0 : i + 1));
    }, AUTO_MS);

    return () => window.clearInterval(id);
  }, [isCarousel, maxIndex, paused, reduceMotion]);

  const goTo = useCallback(
    (i: number) => {
      setIndex(Math.max(0, Math.min(maxIndex, i)));
    },
    [maxIndex],
  );

  /** Track is wider than viewport so N cards fit; translate by 1 card = 100/F% of track. */
  const trackWidthPct = (FEATURES.length / slidesToShow) * 100;
  const slideShareOfTrack = 100 / FEATURES.length;

  return (
    <section
      className={styles.section}
      aria-labelledby="why-choose-heading"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <h2 id="why-choose-heading" className={styles.heading}>
        Why 5,000+ Brands Choose Us for Premium Custom Packaging
      </h2>
      <p className={styles.subheading}>
        From emerging startups to global Fortune 500 brands, businesses trust us
        to deliver packaging that protects products, elevates unboxing, and
        builds lasting customer loyalty.
      </p>

      <div className={styles.desktopGrid}>
        {FEATURES.map((f) => (
          <FeatureCard key={f.title} feature={f} />
        ))}
      </div>

      <div className={styles.carouselShell}>
        <div className={styles.viewport}>
          <div
            className={styles.track}
            style={{
              width: `${trackWidthPct}%`,
              transform: `translateX(-${index * slideShareOfTrack}%)`,
            }}
          >
            {FEATURES.map((f) => (
              <div
                key={f.title}
                className={styles.slide}
                style={{ width: `${slideShareOfTrack}%` }}
              >
                <FeatureCard feature={f} />
              </div>
            ))}
          </div>
        </div>

        <div className={styles.dots} role="tablist" aria-label="Feature slides">
          {Array.from({ length: maxIndex + 1 }, (_, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Go to slide ${i + 1}`}
              className={`${styles.dot} ${i === index ? styles.dotActive : ""}`}
              onClick={() => goTo(i)}
            />
          ))}
        </div>
      </div>

      <div className={styles.ctaWrap}>
        <div className={styles.ctaButtons}>
          <Link href="/contact-us" className={styles.ctaPrimary}>
            Get My Free Quote in 60 Seconds
          </Link>
          <Link href="/products" className={styles.ctaSecondary}>
            Explore Our Packaging Solutions
            <span aria-hidden className={styles.ctaArrow}>
              →
            </span>
          </Link>
        </div>
        <p className={styles.ctaMicro}>
          No minimums on samples · Free design consultation · Money-back
          quality guarantee
        </p>
      </div>
    </section>
  );
}
