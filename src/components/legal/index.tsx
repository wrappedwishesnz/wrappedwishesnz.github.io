import { ReactNode } from "react";
import Reveal from "../reveals";
import styles from "./legal.module.scss";
import { Eyebrow, Paragraph, Title } from "../typography";

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
      <header className={styles.hero}>
        <div className={styles.inner}>
          <Reveal as="div" className={styles.heading}>
            <Eyebrow className={styles.eyebrow}>{eyebrow}</Eyebrow>
            <Title as="h1" variant="page">
              {title}
            </Title>
            <Paragraph variant="lead">{intro}</Paragraph>
          </Reveal>
        </div>
      </header>

      <div className={styles.body}>
        <div className={styles.inner}>
          <div className={styles.content}>
            {sections.map(section => (
              <Reveal
                as="section"
                className={styles.section}
                key={section.title}>
                <Title variant="card">{section.title}</Title>
                <div>{section.content}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
