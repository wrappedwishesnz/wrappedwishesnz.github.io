import Reveal from "../reveals";
import styles from "./faq.module.scss";

const faqs = [
  {
    question: "How long does my order take to make?",
    answer:
      "Because our products are made to order, preparation times can vary depending on the item and how busy our little studio is. Please check the product page for the current turnaround time before ordering.",
  },
  {
    question: "Can I personalise my order?",
    answer:
      "Absolutely! Personalisation is at the heart of WrappedWishes. Available options are shown on each product page. Please double-check names, dates and spelling before submitting your order.",
  },
  {
    question: "Can I request something completely custom?",
    answer:
      "We love bringing special ideas to life. Get in touch with us and tell us what you have in mind. We'll let you know what's possible.",
  },
  {
    question: "Where are you based?",
    answer:
      "We're a small family-run home studio based in Dunedin, New Zealand.",
  },
  {
    question: "Do you ship throughout New Zealand?",
    answer:
      "Yes. We ship orders throughout New Zealand. Delivery times depend on your location and the courier service.",
  },
  {
    question: "Can I return a personalised item?",
    answer:
      "Because personalised products are made especially for you, we generally can't accept returns for a change of mind. If your order arrives damaged or we've made a mistake, please contact us and we'll work with you to make it right.",
  },
];

export default function FAQPage() {
  return (
    <div className={styles.page}>
      <div className={styles.inner}>
        <Reveal as="div" className={styles.heading}>
          <span className={styles.eyebrow}>FAQ</span>
          <h1>A few things you might be wondering.</h1>
          <p>
            From personalisation to delivery, here are answers to some of our
            most common questions.
          </p>
        </Reveal>

        <div className={styles.faqs}>
          {faqs.map(faq => (
            <Reveal as="div" className={styles.item} key={faq.question}>
              <h2>{faq.question}</h2>
              <p>{faq.answer}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
