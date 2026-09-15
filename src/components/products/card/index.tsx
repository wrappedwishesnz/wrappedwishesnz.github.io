"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import {
  getCategoryLabel,
  getProductImages,
  type Product,
} from "@/data/products";
import styles from "./card.module.scss";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const coverImage = getProductImages(product)[0];
  const formattedPrice = new Intl.NumberFormat("en-NZ", {
    style: "currency",
    currency: product.currency,
    maximumFractionDigits: 0,
  }).format(product.price);
  const designCount = product.subProducts?.length ?? 0;

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.35, ease: [0.22, 0.85, 0.32, 1] }}>
      <Link href={`/product/${product.slug}`} className={styles.card}>
        <div className={styles.hole} />
        <span className={styles.category}>{getCategoryLabel(product)}</span>

        <div className={styles.thumb}>
          <span className={styles.badge}>Made to order</span>
          {coverImage ? (
            <Image
              src={coverImage}
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

        <div className={styles.meta}>
          <span className={styles.price}>
            {designCount ? "From " : ""}
            {formattedPrice} NZD
          </span>
          {designCount > 0 && (
            <span className={styles.designs}>
              {designCount} designs available
            </span>
          )}
        </div>

        <div className={styles.footer}>
          <span>View {designCount ? "designs" : "details"}</span>
          <ArrowUpRight className={styles.arrow} size={16} strokeWidth={2} />
        </div>
      </Link>
    </motion.div>
  );
}
