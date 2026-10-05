"use client";
import { useEffect, useRef, useState } from "react";
import useStickyNav from "@/hooks/useStickyNav";
import styles from "./navs.module.scss";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Nav() {
  const scrolled = useStickyNav(40);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef(null);

  useEffect(() => {
    if (!menuOpen) return;

    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = event => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`${styles.nav} ${
        scrolled || menuOpen ? styles.scrolled : ""
      } ${menuOpen ? styles.menuOpen : ""}`}>
      <div className={styles.inner}>
        <Link href="/" className={styles.logo} onClick={closeMenu}>
          <Image alt="WrappedWishes" src={"/logo.svg"} width={40} height={40} />
          WrappedWishes
        </Link>

        <ul className={styles.links}>
          <li>
            <Link href="/products">Shop</Link>
          </li>
          <li className={styles.priorityLink}>
            <Link href="/cake-toppers">Cake toppers</Link>
          </li>
          <li className={styles.priorityLink}>
            <Link href="/paint-your-own-plaster-kits">Plaster kits</Link>
          </li>
          <li>
            <Link href="/#how">How it works</Link>
          </li>
          <li>
            <Link href="/#about">About</Link>
          </li>
          <li>
            <Link href="/faq">FAQ</Link>
          </li>
        </ul>

        <Link
          href="/#enquiry"
          className={`${styles.btn} ${styles.btnPrimary} ${styles.btnSmall} ${styles.desktopCta}`}>
          Enquire
        </Link>

        <button
          ref={menuButtonRef}
          type="button"
          className={styles.mobileToggle}
          aria-label={
            menuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen(open => !open)}>
          {menuOpen ? <X size={25} /> : <Menu size={25} />}
        </button>
      </div>

      {menuOpen && (
        <nav
          id="mobile-navigation"
          className={styles.mobilePanel}
          aria-label="Mobile navigation">
          <Link href="/products" onClick={closeMenu}>
            Shop all products
          </Link>
          <Link href="/cake-toppers" onClick={closeMenu}>
            Cake toppers
          </Link>
          <Link href="/paint-your-own-plaster-kits" onClick={closeMenu}>
            Paint your own plaster kits
          </Link>
          <Link href="/#how" onClick={closeMenu}>
            How it works
          </Link>
          <Link href="/#about" onClick={closeMenu}>
            About
          </Link>
          <Link href="/faq" onClick={closeMenu}>
            FAQ
          </Link>
          <Link href="/contact" onClick={closeMenu}>
            Contact
          </Link>
          <Link
            href="/#enquiry"
            className={styles.mobileCta}
            onClick={closeMenu}>
            Enquire now
          </Link>
        </nav>
      )}
    </header>
  );
}
