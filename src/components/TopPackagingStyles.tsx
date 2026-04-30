"use client";
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import styles from './TopPackagingStyles.module.css';
import packagingData from '../data/Top-Packaging-Styles.json';
import BrandLogoSlider from './BrandLogoSlider';
import QuoteModal from './QuoteModal';

import Link from 'next/link';

export default function TopPackagingStyles() {
  const [cards, setCards] = useState<{ id: string; slug?: string; name?: string; title?: string; image?: string; hero_image_url?: string; link?: string; tag?: string; short_description?: string }[]>([]);
  const trackRef = useRef<HTMLDivElement>(null);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  // Duplicate cards 20 times for a pseudo-infinite loop effect
  useEffect(() => {
    const manyCards = Array(20).fill(packagingData).flat();
    setCards(manyCards);
  }, []);

  // Center the scroll position initially so user can scroll left or right endlessly
  useEffect(() => {
    if (trackRef.current && cards.length > 0) {
      // approx card width (300) + gap (16) = 316
      // Jump to the 10th set of items (middle)
      trackRef.current.scrollLeft = 316 * packagingData.length * 10;
    }
  }, [cards]);

  // Navigation handlers
  const handlePrev = () => {
    if (trackRef.current) {
      trackRef.current.scrollBy({ left: -316, behavior: 'smooth' }); // card width + gap
    }
  };
  const handleNext = () => {
    if (trackRef.current) {
      trackRef.current.scrollBy({ left: 316, behavior: 'smooth' });
    }
  };

  const handleQuoteClick = (e: React.MouseEvent) => {
    e.preventDefault(); // Stop link navigation
    setIsQuoteModalOpen(true);
  };

  return (
    <section className={styles.section}>
      {/* Top Bar with Brand Logos */}
      <div className={styles.topBarContainer}>
        <div className={styles.topBarLeft}>
          <span className={styles.topText}>Serving 5000+ Happy Customers!</span>
          <span className={styles.reviews}>
            <span className={styles.stars}>★★★★☆</span>
            <span className={styles.reviewText}>Trustpilot 4.9 Google Reviews</span>
          </span>
        </div>
        <div className={styles.topBarRight}>
          <BrandLogoSlider />
        </div>
      </div>

      {/* Header */}
      <div className={styles.header}>
        <h2 className={styles.title}>Top Packaging Styles</h2>
        <p className={styles.subTitle}>We cover all your packaging needs. Can&apos;t find yours?</p>
        <a href="#" className={styles.cta}>VIEW ALL →</a>
      </div>

      {/* Slider */}
      <div className={styles.sliderWrapper}>
        <div className={styles.sliderTrack} ref={trackRef}>
          {cards.map((item, idx) => (
            <Link href={item.link || '#'} key={idx} className={styles.card}>
              <Image
                src={item.image}
                alt={item.title}
                width={300}
                height={200}
                className={styles.cardImage}
                priority={idx < 4}
              />
              {item.tag && <span className={styles.cardTag}>{item.tag}</span>}
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <span className={styles.cardLink} onClick={handleQuoteClick}>Request a Quote</span>
            </Link>
          ))}
        </div>
        {/* Navigation Arrows */}
        <button className={`${styles.navBtn} ${styles.prev}`} aria-label="Previous" onClick={handlePrev}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 18 9 12 15 6"/></svg>
        </button>
        <button className={`${styles.navBtn} ${styles.next}`} aria-label="Next" onClick={handleNext}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"/></svg>
        </button>
      </div>

      {/* Quote Request Modal */}
      <QuoteModal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} />
    </section>
  );
}
