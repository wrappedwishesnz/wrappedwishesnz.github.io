import Link from "next/link";
import type { Product } from "@/data/products";
import { ProductList } from "@/components/products/list";
import Enquiry from "@/components/enquiry";
import Reveal from "@/components/reveals";
import styles from "./landing.module.scss";

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
            <span className={styles.eyebrow}>{eyebrow}</span>
            <h1>{title}</h1>
            <p>{introduction}</p>
            <a href="#products" className={styles.cta}>
              Browse the collection
            </a>
          </Reveal>
        </section>

        <section
          className={styles.products}
          id="products"
          aria-labelledby="products-heading">
          <div className={styles.wrap}>
            <Reveal as="div" className={styles.sectionHeading}>
              <h2 id="products-heading">{sectionTitle}</h2>
              <p>{sectionCopy}</p>
            </Reveal>
            <ProductList products={products} />
          </div>
        </section>

        <section className={styles.information}>
          <div className={styles.wrap}>
            <Reveal as="div" className={styles.localBlock}>
              <span className={styles.eyebrow}>
                Dunedin made · NZ delivered
              </span>
              <h2>{localTitle}</h2>
              <p>{localCopy}</p>
              <Link href="/shipping-returns">
                Read about shipping and returns
              </Link>
            </Reveal>

            <div className={styles.detailGrid}>
              {details.map(detail => (
                <Reveal as="article" key={detail.title}>
                  <h2>{detail.title}</h2>
                  <p>{detail.copy}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.faq} aria-labelledby="faq-heading">
          <div className={styles.narrow}>
            <span className={styles.eyebrow}>Helpful details</span>
            <h2 id="faq-heading">Frequently asked questions</h2>
            <div className={styles.faqList}>
              {faqs.map(faq => (
                <Reveal as="article" key={faq.question}>
                  <h3>{faq.question}</h3>
                  <p>{faq.answer}</p>
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
