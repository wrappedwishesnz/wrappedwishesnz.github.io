// src/components/product-card/index.tsx
import Link from "next/link";
import type { Product } from "@/data/products";
import styles from "./card.module.scss";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/products/${product.slug}`} className={styles.card}>
      <div className={styles.hole} />
      <span className={styles.category}>{product.category}</span>
      <div className={styles.thumb}>
        <span>{product.image}</span>
      </div>
      <h3 className={styles.title}>{product.name}</h3>
      <p className={styles.blurb}>{product.description}</p>
      <span className={styles.price}>{product.price}</span>
    </Link>
  );
}
