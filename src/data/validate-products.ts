// src/data/validate-products.ts
import { products } from "./products";
import { getCategoryBySlug, getSubcategoryBySlug } from "./categories";

export function validateProducts() {
  const errors: string[] = [];
  const slugs = new Set<string>();
  const skus = new Set<string>();

  for (const p of products) {
    if (slugs.has(p.slug)) errors.push(`${p.slug}: duplicate slug`);
    if (skus.has(p.sku)) errors.push(`${p.slug}: duplicate sku "${p.sku}"`);
    slugs.add(p.slug);
    skus.add(p.sku);

    if (!getCategoryBySlug(p.categorySlug)) {
      errors.push(`${p.slug}: unknown categorySlug "${p.categorySlug}"`);
    }
    if (
      p.subcategorySlug &&
      !getSubcategoryBySlug(p.categorySlug, p.subcategorySlug)
    ) {
      errors.push(`${p.slug}: unknown subcategorySlug "${p.subcategorySlug}"`);
    }
    if (p.priceFrom && p.price === undefined) {
      errors.push(`${p.slug}: priceFrom requires a price`);
    }
  }
  return errors;
}
