import type { Metadata } from "next";
import { products } from "@/data/products";
import styles from "./products.module.scss";
import { ProductList } from "@/components/products/list";

export const metadata: Metadata = {
  title: "Personalised Gifts & Party Products",
  description:
    "Browse personalised birthday party bags, cake toppers, gift packs and party favours from WrappedWishes.",
  alternates: {
    canonical: "/products",
  },
};

export default function ProductsPage() {
  return (
    <section className={styles.page}>
      <div className={styles.wrap}>
        <div className={styles.head}>
          <span className={styles.eyebrow}>Shop</span>
          <h1>Every piece, made to order.</h1>
          <p>
            Browse what I make — every item can be personalised to suit your
            occasion.
          </p>
        </div>
        <ProductList products={products} />
      </div>
    </section>
  );
}
