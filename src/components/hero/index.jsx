import styles from "./hero.module.scss";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <span className={`${styles.floaty} ${styles.f1}`} />
      <span className={`${styles.floaty} ${styles.f2}`} />
      <span className={`${styles.floaty} ${styles.f3}`} />
      <span className={`${styles.floaty} ${styles.f4}`} />

      <div className={styles.inner}>
        <div className={styles.copy}>
          <span className={styles.eyebrow}>Handmade in New Zealand</span>
          <h1>
            Personalised gifts
            <br />
            for every <em>occasion.</em>
          </h1>
          <p>
            Personalised gifts, shadow boxes, party bags, and curated gift boxes
            — all handcrafted and made to order. Posted NZ-wide, or delivered
            locally.
          </p>
          <div className={styles.ctas}>
            <a href="#enquiry" className={`${styles.btn} ${styles.btnPrimary}`}>
              Start your order
            </a>
            {/* <a href="#gallery" className={`${styles.btn} ${styles.btnGhost}`}>
              View gallery
            </a> */}
          </div>
        </div>

        <div className={styles.art} aria-hidden="true">
          <svg viewBox="0 0 420 460" fill="none">
            <ellipse
              cx="210"
              cy="410"
              rx="150"
              ry="18"
              fill="var(--ink)"
              opacity="0.06"
            />
            <rect
              x="95"
              y="210"
              width="230"
              height="170"
              rx="10"
              fill="var(--rose-soft)"
            />
            <rect
              x="95"
              y="210"
              width="230"
              height="170"
              rx="10"
              fill="url(#boxShade)"
            />
            <rect x="192" y="210" width="36" height="170" fill="var(--wine)" />

            <g className={styles.lid}>
              <rect
                x="78"
                y="180"
                width="264"
                height="42"
                rx="10"
                fill="var(--wine)"
              />
              <rect
                x="78"
                y="180"
                width="264"
                height="42"
                rx="10"
                fill="url(#lidShade)"
              />
              <rect
                x="188"
                y="180"
                width="44"
                height="42"
                fill="var(--wine-deep)"
              />
            </g>

            <g className={styles.bow}>
              <path
                d="M210 178c-10-34-58-40-70-14-10 22 16 32 34 24 8-4 12-6 18-10z"
                fill="var(--gold)"
              />
              <path
                d="M210 178c10-34 58-40 70-14 10 22-16 32-34 24-8-4-12-6-18-10z"
                fill="var(--gold-soft)"
              />
              <circle cx="210" cy="178" r="11" fill="var(--gold)" />
            </g>

            <defs>
              <linearGradient
                id="boxShade"
                x1="95"
                y1="210"
                x2="325"
                y2="380"
                gradientUnits="userSpaceOnUse">
                <stop stopColor="white" stopOpacity="0.25" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="lidShade"
                x1="78"
                y1="180"
                x2="342"
                y2="222"
                gradientUnits="userSpaceOnUse">
                <stop stopColor="white" stopOpacity="0.18" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </section>
  );
}
