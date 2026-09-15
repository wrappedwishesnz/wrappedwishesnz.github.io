import {
  getRelatedProducts,
  getParentProduct,
  type Product,
} from "@/data/products";
import { ProductList } from "../list";
import Link from "next/link";
import styles from "./related.module.scss";

interface RelatedProductsProps {
  product: Product;
}

export function RelatedProducts({ product }: RelatedProductsProps) {
  const related = getRelatedProducts(product);
  const parent = getParentProduct(product);

  if (related.length === 0) return null;

  return (
    <section className={styles.related}>
      <h2>
        {product.subProducts?.length
          ? "Choose a design"
          : parent
            ? `More ${parent.name.toLowerCase()}`
            : "You might also like"}
      </h2>
      {product.subProducts?.length ? (
        <p className={styles.intro}>
          Pick a featured design below, or tell us about another theme you have
          in mind.
        </p>
      ) : null}
      <ProductList products={related} />
      {product.subProducts?.length ? (
        <div className={styles.customOrder}>
          <div>
            <h3>Have another theme in mind?</h3>
            <p>
              Share your idea, preferred colours, name and age, and we’ll talk
              through a custom cake topper with you.
            </p>
          </div>
          <Link href="#enquiry">Request a custom design</Link>
        </div>
      ) : null}
    </section>
  );
}
