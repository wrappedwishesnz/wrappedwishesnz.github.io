import Reveal from "../reveals";
import { offerings } from "../../data/content";
import { icons } from "./icons";
import styles from "./offerings.module.scss";
import Link from "next/link";

export default function Offerings() {
  return (
    <section className={styles.offerings} id="offerings">
      <div className={styles.wrap}>
        <Reveal as="div" className={styles.sectionHead}>
          <span className={styles.eyebrow}>What I make</span>
          <h2>Something for every occasion.</h2>
          <p>
            From heartfelt keepsakes to whimsical party extras — every piece is
            made by hand, just for you.
          </p>
          <Link href={"/products"} className={styles.cta}>
            View products
          </Link>
        </Reveal>

        <div className={styles.grid}>
          {offerings.map(item => (
            <div key={item.title} className={styles.card}>
              <div className={styles.hole} />
              <span className={styles.num}>{item.num}</span>
              <span className={styles.icon}>{icons[item.icon]}</span>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>

        {/* <Reveal as="div" className={styles.galleryStrip} id="gallery">
          {Array.from({ length: galleryPlaceholders }).map((_, i) => (
            <div className={styles.tile} key={i}>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5">
                <rect x="3" y="4" width="18" height="16" rx="2" />
                <circle cx="9" cy="10" r="2" />
                <path d="M21 16l-5-5-4 4-3-3-6 6" />
              </svg>
              Your product photo here
            </div>
          ))}
        </Reveal> */}
      </div>
    </section>
  );
}
