import { getRelatedProducts, type Product } from "@/data/products";
import { ProductList } from "../list";
import styles from "./related.module.scss";

interface RelatedProductsProps {
  product: Product;
}

export function RelatedProducts({ product }: RelatedProductsProps) {
  const related = getRelatedProducts(product);

  if (related.length === 0) return null;

  return (
    <div className={styles.relatedSection}>
      <div className={styles.wrap}>
        <section className={styles.related}>
          <h2>You might also like</h2>
          <ProductList products={related} />
        </section>
      </div>
    </div>
  );
}
