import Link from "next/link";
import { featuredProducts } from "@/data/products";
import { ProductList } from "@/components/products/list";
import styles from "./featured.module.scss";

export default function FeaturedProducts() {
  return (
    <section className={styles.section} aria-labelledby="featured-heading">
      <div className={styles.wrap}>
        <div className={styles.heading}>
          <div>
            <span className={styles.eyebrow}>Popular picks</span>
            <h2 id="featured-heading">Made personal, just for them.</h2>
            <p>
              Explore handmade favourites for birthdays, parties and thoughtful
              moments. Every piece can be tailored through a personal order.
            </p>
          </div>
          <Link href="/products" className={styles.shopLink}>
            Shop all products →
          </Link>
        </div>

        <ProductList products={featuredProducts.slice(0, 3)} />
      </div>
    </section>
  );
}
