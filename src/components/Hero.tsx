"use client";

import { ReactElement, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Hero.module.css";

const slidesData = [
  {
    title: "Coffee Bags",
    image: "/images/hero-bg.png",
    links: ["Low MOQ Bags", "Premium Bags", "Pouches"],
    shopLink: "/coffee-bags"
  },
  {
    title: "Cups",
    image: "/images/hero-bg.png",
    links: ["Hot Cups", "Clear Cups", "Ice Cream Cups", "Sleeves"],
    shopLink: "/cups"
  },
  {
    title: "Mailers",
    image: "/images/hero-bg.png",
    links: ["Poly Mailers", "Kraft Mailers", "Bubble Mailers"],
    shopLink: "/mailers"
  },
  {
    title: "Boxes",
    image: "/images/hero-bg.png",
    links: ["Mailer Boxes", "Folding Cartons", "Rigid Boxes"],
    shopLink: "/boxes"
  }
];

export default function Hero(): ReactElement {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(2);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setCardsToShow(1);
      } else {
        setCardsToShow(2);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => {
      if (prev + cardsToShow >= slidesData.length) return 0;
      return prev + 1;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => {
      if (prev === 0) return slidesData.length - cardsToShow;
      return prev - 1;
    });
  };

  return (
    <section className={styles.heroSection}>
      <div className={styles.carouselContainer}>
        <div 
          className={styles.carouselTrack}
          style={{ transform: `translateX(-${currentIndex * (100 / cardsToShow)}%)` }}
        >
          {slidesData.map((slide, index) => (
            <div 
              key={index} 
              className={styles.carouselSlide} 
              style={{ flex: `0 0 ${100 / cardsToShow}%` }}
            >
              <div className={styles.slideInner}>
                <Image 
                  src={slide.image} 
                  alt={slide.title} 
                  fill 
                  className={styles.slideImage} 
                  priority={index < 2}
                />
                <div className={styles.overlay}></div>
                <div className={styles.slideContent}>
                  <h2 className={styles.slideTitle}>{slide.title}</h2>
                  <div className={styles.slideFooter}>
                    <div className={styles.slideLinks}>
                      {slide.links.map((link, i) => (
                        <Link key={i} href="#" className={styles.footerLink}>{link}</Link>
                      ))}
                    </div>
                    <Link href={slide.shopLink} className={styles.shopNow}>
                      Shop now <span className={styles.arrow}>→</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <button className={`${styles.navButton} ${styles.prevButton}`} onClick={prevSlide} aria-label="Previous">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 18 9 12 15 6" /></svg>
        </button>
        <button className={`${styles.navButton} ${styles.nextButton}`} onClick={nextSlide} aria-label="Next">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6" /></svg>
        </button>
      </div>
    </section>
  );
}
