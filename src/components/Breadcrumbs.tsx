import { ReactElement } from "react";
import Link from "next/link";
import styles from "./Breadcrumbs.module.css";

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  dark?: boolean;
}

export default function Breadcrumbs({ items, dark = false }: BreadcrumbsProps): ReactElement {
  return (
    <nav
      className={`${styles.wrap} ${dark ? 'bg-transparent border-0 p-0' : ''}`}
      style={dark ? { background: 'transparent', border: 'none', padding: '0' } : {}}
      aria-label="Breadcrumb"
    >
      <ol className={styles.list}>
        {items.map((item, idx) => {
          const isLast = idx === items.length - 1;
          return (
            <li key={`${idx}-${item.label}`} className={styles.item}>
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className={styles.link}
                  style={dark ? { color: 'rgba(255, 255, 255, 0.8)' } : {}}
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  className={styles.current}
                  aria-current={isLast ? "page" : undefined}
                  style={dark ? { color: 'white' } : {}}
                >
                  {item.label}
                </span>
              )}
              {!isLast && (
                <span
                  aria-hidden
                  className={styles.sep}
                  style={dark ? { color: 'rgba(255, 255, 255, 0.4)' } : {}}
                >
                  /
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
