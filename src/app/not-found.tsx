import Link from "next/link";
import type { Metadata } from "next";
import styles from "./not-found.module.scss";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className={styles.page}>
      <div className={styles.card}>
        <span className={styles.code}>404</span>
        <span className={styles.eyebrow}>This wish wandered off</span>
        <h1>We couldn’t find that page.</h1>
        <p>
          The page may have moved, but there are still plenty of personalised
          creations to discover.
        </p>
        <div className={styles.actions}>
          <Link href="/products" className={styles.primary}>
            Browse all products
          </Link>
          <Link href="/cake-toppers" className={styles.secondary}>
            Shop cake toppers
          </Link>
        </div>
      </div>
    </section>
  );
}
