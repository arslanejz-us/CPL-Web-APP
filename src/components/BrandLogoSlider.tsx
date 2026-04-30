import { ReactElement } from "react";
import Image from "next/image";
import styles from "./BrandLogoSlider.module.css";

const logos = [
  "Bakers-Recovery.png",
  "Beetle-Juice.png",
  "BluBlocker.png",
  "Calvin-Klein.png",
  "Culturelle.png",
  "Dole.png",
  "Harmless.png",
  "Haygood.png",
  "Old-Spice.png",
  "Primary-Arms.png",
  "Spinster.png",
  "Viome.png"
];

export default function BrandLogoSlider(): ReactElement {
  return (
    <section className={styles.brandSection}>
      <div className={styles.sliderContainer}>
        <div className={styles.sliderTrack}>
          {/* First set of logos */}
          {logos.map((logo, index) => (
            <div key={`logo-1-${index}`} className={styles.slide}>
              <Image 
                src={`/brand-logos/${logo}`} 
                alt={logo.replace('.png', '')} 
                width={160} 
                height={90} 
                className={styles.logoImage}
              />
            </div>
          ))}
          {/* Second set of logos for continuous scroll */}
          {logos.map((logo, index) => (
            <div key={`logo-2-${index}`} className={styles.slide}>
              <Image 
                src={`/brand-logos/${logo}`} 
                alt={logo.replace('.png', '')} 
                width={160} 
                height={90} 
                className={styles.logoImage}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
