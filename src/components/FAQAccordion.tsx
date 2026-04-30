"use client";

import { ReactElement, useState } from "react";
import styles from "./FAQAccordion.module.css";

type FAQ = { q: string; a: string };

interface FAQAccordionProps {
  items: FAQ[];
  allowMultiple?: boolean;
}

export default function FAQAccordion({
  items,
  allowMultiple = false,
}: FAQAccordionProps): ReactElement {
  const [openIndices, setOpenIndices] = useState<Set<number>>(new Set([0]));

  const toggle = (idx: number) => {
    setOpenIndices((prev) => {
      const next = new Set(allowMultiple ? prev : []);
      if (prev.has(idx)) {
        next.delete(idx);
      } else {
        next.add(idx);
      }
      return next;
    });
  };

  return (
    <div className={styles.list}>
      {items.map((item, idx) => {
        const isOpen = openIndices.has(idx);
        const panelId = `faq-panel-${idx}`;
        const buttonId = `faq-button-${idx}`;
        return (
          <div key={item.q} className={`${styles.item} ${isOpen ? styles.itemOpen : ""}`}>
            <h3 className={styles.itemHeading}>
              <button
                id={buttonId}
                type="button"
                className={styles.trigger}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggle(idx)}
              >
                <span className={styles.question}>{item.q}</span>
                <span aria-hidden className={styles.icon}>
                  <svg viewBox="0 0 24 24" width="22" height="22">
                    <path
                      d="M6 9l6 6 6-6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!isOpen}
              className={styles.panel}
            >
              <p className={styles.answer}>{item.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
