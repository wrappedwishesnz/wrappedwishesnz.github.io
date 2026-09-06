// src/data/validate-products.ts
import { products } from "./products";
import { getCategoryBySlug, getSubcategoryBySlug } from "./categories";

export function validateProducts() {
  const errors: string[] = [];
  for (const p of products) {
    if (!getCategoryBySlug(p.categorySlug)) {
      errors.push(`${p.slug}: unknown categorySlug "${p.categorySlug}"`);
    }
    if (
      p.subcategorySlug &&
      !getSubcategoryBySlug(p.categorySlug, p.subcategorySlug)
    ) {
      errors.push(`${p.slug}: unknown subcategorySlug "${p.subcategorySlug}"`);
    }
  }
  return errors;
}
