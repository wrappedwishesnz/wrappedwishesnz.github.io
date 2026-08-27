import Reveal from "../reveals";
import styles from "./about.module.scss";

export default function About() {
  return (
    <section className={styles.about} id="about">
      <div className={styles.inner}>
        <Reveal as="div" className={styles.art} aria-hidden="true">
          <svg viewBox="0 0 200 200" fill="none">
            <circle cx="100" cy="100" r="70" fill="var(--paper)" />

            <path
              d="M88 60 C 82 46, 96 34, 108 42"
              stroke="var(--gold)"
              strokeWidth="2"
              fill="none"
              stroke-linecap="round"
            />
            <g transform="translate(108 40)">
              <path
                d="M0 0c-7-10-20-8-16 2-4 6 8 8 12 4 2-2 3-3 4-6z"
                fill="var(--gold)"
              />
              <path
                d="M0 0c7-10 20-8 16 2 4 6-8 8-12 4-2-2-3-3-4-6z"
                fill="var(--gold-soft)"
              />
              <circle cx="0" cy="0" r="3.4" fill="var(--gold)" />
            </g>

            <g transform="translate(98 112) rotate(-8)">
              <path
                d="M-34 -24 H24 L38 -10 V26 A6 6 0 0 1 32 32 H-34 A6 6 0 0 1 -40 26 V-18 A6 6 0 0 1 -34 -24 Z"
                fill="var(--rose-soft)"
                stroke="var(--wine)"
                strokeWidth="1.6"
              />
              <circle
                cx="-24"
                cy="-12"
                r="3.6"
                fill="var(--paper)"
                stroke="var(--wine)"
                strokeWidth="1.4"
              />
              <path
                d="M-14 -2 q8 -6 18 0"
                stroke="var(--wine)"
                strokeWidth="1.6"
                stroke-linecap="round"
              />
              <path
                d="M-14 9 q14 -8 28 0"
                stroke="var(--wine)"
                strokeWidth="1.6"
                stroke-linecap="round"
              />
              <path
                d="M-14 20 q10 -6 20 0"
                stroke="var(--wine)"
                strokeWidth="1.6"
                stroke-linecap="round"
              />
            </g>

            <g transform="translate(140 128)">
              <path
                d="M0 0 C 6 -14, 2 -26, -6 -34"
                stroke="var(--sage)"
                strokeWidth="2"
                fill="none"
                stroke-linecap="round"
              />
              <ellipse
                cx="-2"
                cy="-12"
                rx="5"
                ry="9"
                fill="var(--sage)"
                transform="rotate(-30 -2 -12)"
              />
              <ellipse
                cx="-7"
                cy="-25"
                rx="4"
                ry="7"
                fill="var(--sage-deep)"
                transform="rotate(-10 -7 -25)"
              />
            </g>

            <circle cx="62" cy="70" r="2.2" fill="var(--gold)" />
            <circle cx="150" cy="80" r="2" fill="var(--rose)" />
          </svg>
        </Reveal>

        <Reveal as="div" className={styles.copy}>
          <span className={styles.eyebrow}>About</span>
          <h2>A small home studio, big on detail.</h2>
          <p>
            WrappedWishes is a one-woman, home-based studio in New Zealand,
            making personalised gifts, shadow boxes, party favours and gift
            boxes by hand — one order at a time.
          </p>
          <p>
            Every piece is made to order, so nothing leaves the workbench until
            it&apos;s exactly right. No two gifts are quite the same, because no
            two wishes are either.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
