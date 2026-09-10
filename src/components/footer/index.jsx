import Image from "next/image";
import styles from "./footer.module.scss";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrap}>
        <div className={styles.top}>
          <div>
            <a href="#top" className={styles.logo}>
              <Image alt="logo" src={"/logo.svg"} width={30} height={30} />
              WrappedWishes
            </a>
            <p className={styles.tagline}>Gifts as unique as your wishes.</p>
            <div className={styles.links}>
              <Link href="/faq">FAQ</Link>
              <Link href="/contact">Contact</Link>
              <Link href="/shipping-returns">Shipping & Returns</Link>
              <Link href="/privacy">Privacy Policy</Link>
              <Link href="/terms">Terms & Conditions</Link>
            </div>
          </div>

          <div className={styles.social}>
            <a
              href="https://www.facebook.com/WrappedWishesNZ/"
              aria-label="Facebook">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6">
                <path d="M15 8h-2c-1.1 0-2 .9-2 2v2H9v3h2v7h3v-7h2.2l.8-3H14v-1.6c0-.6.4-1 1-1h2V8z" />
              </svg>
            </a>
          </div>
        </div>

        <div className={styles.bottom}>
          <span>
            © {new Date().getFullYear()} Wrapped Wishes. Handmade in New
            Zealand.
          </span>
          <span>Made to order · Posted NZ-wide</span>
        </div>
      </div>
    </footer>
  );
}
