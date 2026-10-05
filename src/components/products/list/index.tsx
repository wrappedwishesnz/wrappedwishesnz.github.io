// src/components/product-list/index.tsx
import type { Product } from "@/data/products";
import { ProductCard } from "../card";
import styles from "./list.module.scss";
import { Paragraph } from "@/components/typography";

interface ProductListProps {
  products: Product[];
  emptyMessage?: string;
}

export function ProductList({
  products,
  emptyMessage = "No products to show yet.",
}: ProductListProps) {
  if (products.length === 0) {
    return <Paragraph className={styles.empty}>{emptyMessage}</Paragraph>;
  }

  return (
    <div className={styles.grid}>
      {products.map(product => (
        <ProductCard key={product.slug} product={product} />
      ))}
    </div>
  );
}
