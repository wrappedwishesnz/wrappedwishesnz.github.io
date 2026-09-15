import {
  getRelatedProducts,
  getParentProduct,
  type Product,
} from "@/data/products";
import { ProductList } from "../list";
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
      <ProductList products={related} />
    </section>
  );
}
