import { ReactElement } from "react";
import styles from "./Testimonials.module.css";

type Testimonial = {
  text: string;
  author: string;
  role: string;
  rating: number;
};

const TESTIMONIALS: Testimonial[] = [
  {
    text: "CPL transformed our packaging. The quality is outstanding and the customer service is unmatched. We've shipped over 200,000 units with zero defect issues.",
    author: "Sarah Mitchell",
    role: "Founder, Artisan Foods Co",
    rating: 5,
  },
  {
    text: "We switched from our previous supplier and saved 30% while improving print quality. The 3D mockup process means there are no surprises in production.",
    author: "James Chen",
    role: "Supply Chain Manager, TechBox Ltd",
    rating: 5,
  },
  {
    text: "The ability to customize at scale is incredible. Our brand now really stands out on shelves and customers consistently mention the unboxing experience.",
    author: "Emma Rodriguez",
    role: "Director of Marketing, EcoStyle Beauty",
    rating: 5,
  },
];

function StarRow({ count }: { count: number }): ReactElement {
  return (
    <span className={styles.stars} aria-label={`Rated ${count} out of 5 stars`}>
      <span aria-hidden>{"★".repeat(count)}{"☆".repeat(5 - count)}</span>
    </span>
  );
}

export default function Testimonials(): ReactElement {
  return (
    <section className={styles.section} aria-labelledby="testimonials-heading">
      <div className={styles.inner}>
        <header className={styles.header}>
          <span className={styles.eyebrow}>Trusted Worldwide</span>
          <h2 id="testimonials-heading" className={styles.heading}>
            What Our Clients Say
          </h2>
          <p className={styles.subheading}>
            Real feedback from brand owners, supply chain leads, and marketing
            teams shipping with CPL.
          </p>
        </header>

        <ul className={styles.grid}>
          {TESTIMONIALS.map((t) => (
            <li key={t.author} className={styles.card}>
              <span aria-hidden className={styles.quoteMark}>
                &ldquo;
              </span>
              <StarRow count={t.rating} />
              <blockquote className={styles.quote}>{t.text}</blockquote>
              <footer className={styles.attribution}>
                <span className={styles.avatar} aria-hidden>
                  {t.author
                    .split(" ")
                    .map((p) => p[0])
                    .slice(0, 2)
                    .join("")}
                </span>
                <div>
                  <strong className={styles.author}>{t.author}</strong>
                  <span className={styles.role}>{t.role}</span>
                </div>
              </footer>
            </li>
          ))}
        </ul>

        <div className={styles.statRow} aria-label="Customer satisfaction stats">
          <div className={styles.stat}>
            <strong>4.9</strong>
            <span>Average Rating</span>
          </div>
          <div className={styles.stat}>
            <strong>1,200+</strong>
            <span>Verified Reviews</span>
          </div>
          <div className={styles.stat}>
            <strong>98%</strong>
            <span>Repeat Order Rate</span>
          </div>
        </div>
      </div>
    </section>
  );
}
