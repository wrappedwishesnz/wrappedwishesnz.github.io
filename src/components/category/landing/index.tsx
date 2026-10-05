import Link from "next/link";
import type { Product } from "@/data/products";
import { ProductList } from "@/components/products/list";
import Enquiry from "@/components/enquiry";
import Reveal from "@/components/reveals";
import styles from "./landing.module.scss";
import { Button } from "@/components/button";
import { Eyebrow, Paragraph, Title } from "@/components/typography";

type Faq = {
  question: string;
  answer: string;
};

type CategoryLandingProps = {
  eyebrow: string;
  title: string;
  introduction: string;
  products: Product[];
  sectionTitle: string;
  sectionCopy: string;
  localTitle: string;
  localCopy: string;
  details: Array<{ title: string; copy: string }>;
  faqs: Faq[];
};

export function CategoryLanding({
  eyebrow,
  title,
  introduction,
  products,
  sectionTitle,
  sectionCopy,
  localTitle,
  localCopy,
  details,
  faqs,
}: CategoryLandingProps) {
  return (
    <>
      <div>
        <section className={styles.hero}>
          <Reveal as="div" className={styles.narrow}>
            <Eyebrow className={styles.eyebrow}>{eyebrow}</Eyebrow>
            <Title as="h1" variant="page">
              {title}
            </Title>
            <Paragraph variant="lead">{introduction}</Paragraph>
            <Button href="#products" className={styles.cta}>
              Browse the collection
            </Button>
          </Reveal>
        </section>

        <section
          className={styles.products}
          id="products"
          aria-labelledby="products-heading">
          <div className={styles.wrap}>
            <Reveal as="div" className={styles.sectionHeading}>
              <Title id="products-heading">{sectionTitle}</Title>
              <Paragraph>{sectionCopy}</Paragraph>
            </Reveal>
            <ProductList products={products} />
          </div>
        </section>

        <section className={styles.information}>
          <div className={styles.wrap}>
            <Reveal as="div" className={styles.localBlock}>
              <Eyebrow className={styles.eyebrow}>
                Dunedin made · NZ delivered
              </Eyebrow>
              <Title>{localTitle}</Title>
              <Paragraph>{localCopy}</Paragraph>
              <Link href="/shipping-returns">
                Read about shipping and returns
              </Link>
            </Reveal>

            <div className={styles.detailGrid}>
              {details.map(detail => (
                <Reveal as="article" key={detail.title}>
                  <Title variant="card">{detail.title}</Title>
                  <Paragraph>{detail.copy}</Paragraph>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.faq} aria-labelledby="faq-heading">
          <div className={styles.narrow}>
            <Eyebrow className={styles.eyebrow}>Helpful details</Eyebrow>
            <Title id="faq-heading">Frequently asked questions</Title>
            <div className={styles.faqList}>
              {faqs.map(faq => (
                <Reveal as="article" key={faq.question}>
                  <Title as="h3" variant="card">
                    {faq.question}
                  </Title>
                  <Paragraph>{faq.answer}</Paragraph>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </div>

      <Enquiry />
    </>
  );
}
