import Image from "next/image";
import Link from "next/link";
import styles from "./footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrap}>
        <div className={styles.cta}>
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
        </div>

        <div className={styles.grid}>
          <div className={styles.brand}>
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
          </div>

          <nav className={styles.linkGroup} aria-label="Shop">
            <h2>Shop</h2>
            <Link href="/cake-toppers">Personalised cake toppers</Link>
            <Link href="/paint-your-own-plaster-kits">
              Paint-your-own plaster kits
            </Link>
            <Link href="/products">All products</Link>
          </nav>

          <nav className={styles.linkGroup} aria-label="Customer help">
            <h2>Here to help</h2>
            <Link href="/faq">Frequently asked questions</Link>
            <Link href="/shipping-returns">Shipping &amp; returns</Link>
            <Link href="/contact">Contact us</Link>
          </nav>

          <div className={styles.connect}>
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
          </div>
        </div>

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
