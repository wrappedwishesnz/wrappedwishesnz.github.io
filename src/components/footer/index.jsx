"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrap}>
        <motion.div
          className={styles.cta}
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55, ease: [0.22, 0.85, 0.32, 1] }}>
          <div>
            <span className={styles.eyebrow}>Made especially for you</span>
            <h2>Planning a celebration?</h2>
            <p>
              Tell us your idea, colours and date. We’ll help you create
              something personal.
            </p>
          </div>
          <Link href="/#enquiry" className={styles.ctaButton}>
            Start an enquiry
            <span aria-hidden="true">→</span>
          </Link>
        </motion.div>

        <motion.div
          className={styles.grid}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08 } },
          }}>
          <motion.div className={styles.brand} variants={footerItemVariants}>
            <Link
              href="/"
              className={styles.logo}
              aria-label="WrappedWishes home">
              <span className={styles.logoMark}>
                <Image alt="" src="/logo.svg" width={38} height={38} />
              </span>
              WrappedWishes
            </Link>
            <p className={styles.tagline}>Gifts as unique as your wishes.</p>
            <p className={styles.location}>
              Handmade with care in Dunedin and delivered throughout New
              Zealand.
            </p>
          </motion.div>

          <motion.nav
            className={styles.linkGroup}
            aria-label="Shop"
            variants={footerItemVariants}>
            <h2>Shop</h2>
            <Link href="/cake-toppers">Personalised cake toppers</Link>
            <Link href="/paint-your-own-plaster-kits">
              Paint-your-own plaster kits
            </Link>
            <Link href="/products">All products</Link>
          </motion.nav>

          <motion.nav
            className={styles.linkGroup}
            aria-label="Customer help"
            variants={footerItemVariants}>
            <h2>Here to help</h2>
            <Link href="/faq">Frequently asked questions</Link>
            <Link href="/shipping-returns">Shipping &amp; returns</Link>
            <Link href="/contact">Contact us</Link>
          </motion.nav>

          <motion.div className={styles.connect} variants={footerItemVariants}>
            <h2>Follow along</h2>
            <p>
              See recent creations, new themes and behind-the-scenes updates.
            </p>
            <a
              href="https://www.facebook.com/WrappedWishesNZ/"
              className={styles.facebook}
              aria-label="Follow WrappedWishes on Facebook">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                aria-hidden="true">
                <path d="M15 8h-2c-1.1 0-2 .9-2 2v2H9v3h2v7h3v-7h2.2l.8-3H14v-1.6c0-.6.4-1 1-1h2V8z" />
              </svg>
              Facebook
            </a>
          </motion.div>
        </motion.div>

        <div className={styles.bottom}>
          <span>© {new Date().getFullYear()} WrappedWishes</span>
          <div className={styles.legal}>
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
          </div>
          <a href="#top" className={styles.backToTop}>
            Back to top <span aria-hidden="true">↑</span>
          </a>
        </div>
      </div>
    </footer>
  );
}

const footerItemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 0.85, 0.32, 1] },
  },
};
