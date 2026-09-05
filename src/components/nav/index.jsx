"use client";
import useStickyNav from "@/hooks/useStickyNav";
import styles from "./navs.module.scss";
import Image from "next/image";
import Link from "next/link";

export default function Nav() {
  const scrolled = useStickyNav(40);

  return (
    <header className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.inner}>
        <Link href="/" className={styles.logo}>
          <Image alt="logo" src={"/logo.svg"} width={40} height={40} />
          WrappedWishes
        </Link>

        <ul className={styles.links}>
          {/* <li>
            <a href="#gallery">Gallery</a>
          </li> */}
          <li>
            <a href="#offerings">What I make</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
        </ul>

        <a
          href="#enquiry"
          className={`${styles.btn} ${styles.btnPrimary} ${styles.btnSmall}`}>
          Enquire
        </a>
      </div>
    </header>
  );
}
