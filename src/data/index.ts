import { categories } from "./categories";

import { products } from "./products";

export const activeCategories = categories
  .map(category => {
    const categoryProducts = products.filter(
      product => product.categorySlug === category.slug
    );

    if (categoryProducts.length === 0) {
      return undefined;
    }

    return {
      ...category,
      subcategories: category.subcategories.filter(subcategory =>
        categoryProducts.some(
          product => product.subcategorySlug === subcategory.slug
        )
      ),
    };
  })
  .filter(category => category !== undefined);
