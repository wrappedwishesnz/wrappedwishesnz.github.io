import type { Metadata } from "next";
import styles from "./not-found.module.scss";
import { Button } from "@/components/button";
import { Eyebrow, Paragraph, Title } from "@/components/typography";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className={styles.page}>
      <div className={styles.card}>
        <span className={styles.code}>404</span>
        <Eyebrow className={styles.eyebrow}>This wish wandered off</Eyebrow>
        <Title as="h1" variant="page">
          We couldn’t find that page.
        </Title>
        <Paragraph variant="lead">
          The page may have moved, but there are still plenty of personalised
          creations to discover.
        </Paragraph>
        <div className={styles.actions}>
          <Button href="/products" className={styles.primary}>
            Browse all products
          </Button>
          <Button
            href="/cake-toppers"
            variant="secondary"
            className={styles.secondary}>
            Shop cake toppers
          </Button>
        </div>
      </div>
    </section>
  );
}
