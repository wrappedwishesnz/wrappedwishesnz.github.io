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
          <Image alt="WrappedWishes" src={"/logo.svg"} width={40} height={40} />
          WrappedWishes
        </Link>

        <ul className={styles.links}>
          {/* <li>
            <a href="#gallery">Gallery</a>
          </li> */}
          <li>
            <Link href="/#offerings">What I make</Link>
          </li>
          <li>
            <Link href="/#about">About</Link>
          </li>
        </ul>

        <Link
          href="/#enquiry"
          className={`${styles.btn} ${styles.btnPrimary} ${styles.btnSmall}`}>
          Enquire
        </Link>
      </div>
    </header>
  );
}
