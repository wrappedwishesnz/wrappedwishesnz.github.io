"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { CategoryFilter } from "@/components/category/filter";
import { ProductList } from "@/components/products/list";
import { products } from "@/data/products";
import { getCategoryBySlug, getSubcategoryBySlug } from "@/data/categories";
import styles from "./products.module.scss";

export default function ProductsPage() {
  return (
    <section className={styles.page}>
      <div className={styles.wrap}>
        <Suspense
          fallback={
            <div className={styles.head}>
              <h1>Shop</h1>
            </div>
          }>
          <ProductsFiltered />
        </Suspense>
      </div>
    </section>
  );
}

function ProductsFiltered() {
  const searchParams = useSearchParams();
  const categorySlug = searchParams.get("category") ?? undefined;
  const subcategorySlug = searchParams.get("sub") ?? undefined;

  const category = categorySlug ? getCategoryBySlug(categorySlug) : undefined;
  const subcategory =
    categorySlug && subcategorySlug
      ? getSubcategoryBySlug(categorySlug, subcategorySlug)
      : undefined;

  const filtered = products.filter(p => {
    if (categorySlug && p.categorySlug !== categorySlug) return false;
    if (subcategorySlug && p.subcategorySlug !== subcategorySlug) return false;
    return true;
  });

  const heading = subcategory?.name ?? category?.name ?? "All products";
  const description =
    subcategory?.description ??
    category?.description ??
    "Every piece, made to order — browse everything I make.";

  return (
    <>
      <div className={styles.head}>
        <span className={styles.eyebrow}>Shop</span>
        <h1>{heading}</h1>
        <p>{description}</p>
      </div>

      <CategoryFilter />

      <ProductList products={filtered} />
    </>
  );
}
