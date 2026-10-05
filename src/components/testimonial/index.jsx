import Reveal from "../reveals";
import { testimonials } from "../../data/content";
import styles from "./testimonial.module.scss";
import { Eyebrow, Paragraph, Title } from "../typography";

export default function Testimonials() {
  return (
    <section id="testimonials">
      <div className={styles.wrap}>
        <Reveal as="div" className={styles.sectionHead}>
          <Eyebrow className={styles.eyebrow}>Kind words</Eyebrow>
          <Title>What customers say.</Title>
        </Reveal>

        <div className={styles.grid}>
          {testimonials.map(t => (
            <div className={styles.card} key={t.name}>
              <div className={styles.stars}>★★★★★</div>
              <Paragraph className={styles.quote}>
                &ldquo;{t.quote}&rdquo;
              </Paragraph>
              <div className={styles.who}>{t.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
