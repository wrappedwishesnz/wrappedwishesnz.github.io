import Enquiry from "../enquiry";
import Reveal from "../reveals";
import styles from "./contact.module.scss";
import { Eyebrow, Paragraph, Title } from "../typography";

export default function ContactPage() {
  return (
    <div className={styles.page}>
      <div className={styles.inner}>
        <Reveal as="div" className={styles.copy}>
          <Eyebrow className={styles.eyebrow}>Contact Us</Eyebrow>

          <Title as="h1" variant="page">
            We'd love to hear from you.
          </Title>

          <Paragraph variant="lead">
            Have a question about an order, personalisation or something you'd
            love us to create? Send us a message and we'll get back to you as
            soon as we can.
          </Paragraph>

          <div className={styles.details}>
            <div>
              <strong>Email</strong>
              <a href="mailto:wrappedwishesnz@gmail.com">
                wrappedwishesnz@gmail.com
              </a>
            </div>

            <div>
              <strong>Based in</strong>
              <span>Dunedin, New Zealand</span>
            </div>
          </div>
        </Reveal>

        <Reveal as="div" className={styles.formCard}>
          <Enquiry isContactForm />
        </Reveal>
      </div>
    </div>
  );
}
