"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { getCategoryLabel, type Product } from "@/data/products";
import styles from "./card.module.scss";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const formattedPrice = new Intl.NumberFormat("en-NZ", {
    style: "currency",
    currency: product.currency,
  }).format(product.price);

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.35, ease: [0.22, 0.85, 0.32, 1] }}>
      <Link href={`/product/${product.slug}`} className={styles.card}>
        <div className={styles.hole} />
        <span className={styles.category}>{getCategoryLabel(product)}</span>

        <div className={styles.thumb}>
          {product.images[0] ? (
            <Image
              src={product.images[0]}
              alt={product.name}
              fill
              sizes="(max-width: 720px) 50vw, 25vw"
              className={styles.image}
            />
          ) : (
            <span>{product.name}</span>
          )}
        </div>

        <h3 className={styles.title}>{product.name}</h3>
        <p className={styles.blurb}>{product.shortDescription}</p>

        <div className={styles.footer}>
          <span className={styles.price}>{formattedPrice}</span>
          <ArrowUpRight className={styles.arrow} size={16} strokeWidth={2} />
        </div>
      </Link>
    </motion.div>
  );
}
