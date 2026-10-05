import Reveal from "../reveals";
import { Eyebrow, Paragraph, Title } from "../typography";
import { steps } from "../../data/content";
import styles from "./how.module.scss";

export default function HowItWorks() {
  return (
    <section id="how">
      <div className={styles.wrap}>
        <Reveal as="div" className={styles.sectionHead}>
          <Eyebrow className={styles.eyebrow}>How it works</Eyebrow>
          <Title>Simple, personal, stress-free.</Title>
        </Reveal>

        <div className={styles.steps}>
          {steps.map(step => (
            <Reveal as="div" className={styles.step} key={step.num}>
              <div className={styles.numRing}>{step.num}</div>
              <Title as="h3" variant="card">
                {step.title}
              </Title>
              <Paragraph>{step.desc}</Paragraph>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
