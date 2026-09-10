import { ReactNode } from "react";
import Reveal from "../reveals";
import styles from "./legal.module.scss";

type Section = {
  title: string;
  content: ReactNode;
};

type Props = {
  eyebrow: string;
  title: string;
  intro: string;
  sections: Section[];
};

export default function LegalPage({ eyebrow, title, intro, sections }: Props) {
  return (
    <div className={styles.page}>
      <div className={styles.inner}>
        <Reveal as="header" className={styles.heading}>
          <span className={styles.eyebrow}>{eyebrow}</span>
          <h1>{title}</h1>
          <p>{intro}</p>
        </Reveal>

        <div className={styles.content}>
          {sections.map(section => (
            <Reveal as="section" className={styles.section} key={section.title}>
              <h2>{section.title}</h2>
              <div>{section.content}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
