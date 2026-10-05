"use client";

import { useSearchParams } from "next/navigation";
import { CategoryFilter } from "@/components/category/filter";
import { ProductList } from "@/components/products/list";
import { activeProducts } from "@/data/products";
import { getCategoryBySlug, getSubcategoryBySlug } from "@/data/categories";
import styles from "./content.module.scss";
import Enquiry from "@/components/enquiry";
import { Eyebrow, Paragraph, Title } from "@/components/typography";

export function FallbackContent() {
  return (
    <section className={styles.page}>
      <div className={styles.wrap}>
        <div className={styles.head}>
          <Title as="h1" variant="page">
            Shop
          </Title>
        </div>
      </div>
    </section>
  );
}
export function ProductsContent() {
  const searchParams = useSearchParams();
  const categorySlug = searchParams.get("category") ?? undefined;
  const subcategorySlug = searchParams.get("sub") ?? undefined;

  const category = categorySlug ? getCategoryBySlug(categorySlug) : undefined;
  const subcategory =
    categorySlug && subcategorySlug
      ? getSubcategoryBySlug(categorySlug, subcategorySlug)
      : undefined;

  const filtered = activeProducts.filter(p => {
    if (categorySlug && p.categorySlug !== categorySlug) return false;
    if (subcategorySlug && p.subcategorySlug !== subcategorySlug) return false;
    return true;
  });

  const heading =
    category && subcategory
      ? `${category.name} → ${subcategory.name}`
      : (category?.name ?? "All products");
  const description =
    subcategory?.description ??
    category?.description ??
    "Every piece, made to order — browse everything I make.";

  return (
    <>
      <section className={styles.page}>
        <div className={styles.wrap}>
          <div className={styles.head}>
            <Eyebrow className={styles.eyebrow}>Shop</Eyebrow>
            <Title as="h1" variant="page">
              {heading}
            </Title>
            <Paragraph variant="lead">{description}</Paragraph>
          </div>
        </div>
      </section>

      <section className={styles.gridSection}>
        <div className={styles.wrap}>
          <CategoryFilter />
          <ProductList products={filtered} />
        </div>
      </section>

      <Enquiry />
    </>
  );
}
