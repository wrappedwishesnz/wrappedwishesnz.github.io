import { getCategoryBySlug, getSubcategoryBySlug } from "./categories";

export type ProductAvailability = "InStock" | "OutOfStock";

export type Product = {
  slug: string;
  name: string;
  description: string;
  shortDescription: string;
  price: number;
  currency: string;
  images: string[]; // first entry is the cover image used on cards
  categorySlug: string;
  subcategorySlug?: string;
  availability: ProductAvailability;
  sku: string;
  keywords: string[];
};

export const products: Product[] = [
  {
    slug: "personalised-birthday-party-bags",
    name: "Personalised Birthday Party Bags",
    description:
      "Personalised birthday party bags designed for children's celebrations. Choose your preferred theme, colours, name and age to create a unique party favour for your guests.",
    shortDescription:
      "Personalised party bags for children's birthday celebrations.",
    price: 8,
    currency: "NZD",
    images: [
      "/products/birthday-party-bag-1.jpg",
      "/products/birthday-party-bag-2.jpg",
      "/products/birthday-party-bag-3.jpg",
    ],
    categorySlug: "party-favours",
    availability: "InStock",
    sku: "WW-PB-001",
    keywords: [
      "birthday party bags",
      "personalised party bags",
      "party favours",
      "birthday favours",
      "party bags NZ",
    ],
  },
  {
    slug: "personalised-cake-toppers",
    name: "Personalised Cake Toppers",
    description:
      "Custom cake toppers designed to match your birthday celebration. Choose your preferred colours, name, age and theme.",
    shortDescription:
      "Custom cake toppers for birthdays and special celebrations.",
    price: 5,
    currency: "NZD",
    images: [
      "/products/cake-topper-1.jpg",
      "/products/cake-topper-2.jpg",
      "/products/cake-topper-3.jpg",
    ],
    categorySlug: "cake-toppers",
    availability: "InStock",
    sku: "WW-CT-001",
    keywords: [
      "cake toppers",
      "personalised cake topper",
      "birthday cake topper",
      "custom cake topper NZ",
    ],
  },
  {
    slug: "personalised-gift-packs",
    name: "Personalised Gift Packs",
    description:
      "Beautiful personalised gift packs created for birthdays and special occasions. Custom themes and designs are available.",
    shortDescription:
      "Personalised gift packs for birthdays and special occasions.",
    price: 15,
    currency: "NZD",
    images: ["/products/gift-pack-1.jpg", "/products/gift-pack-2.jpg"],
    categorySlug: "gift-hampers",
    availability: "InStock",
    sku: "WW-GP-001",
    keywords: [
      "personalised gifts",
      "birthday gift packs",
      "gift packs NZ",
      "custom gifts NZ",
    ],
  },
  // {
  //   slug: "memory-shadow-box",
  //   name: "Memory Shadow Box",
  //   description:
  //     "A framed keepsake for photos, tickets & small treasures — arranged by hand behind glass. Tell us what you'd like included and we'll help plan the layout.",
  //   shortDescription:
  //     "A framed keepsake for photos, tickets & small treasures.",
  //   price: 85,
  //   currency: "NZD",
  //   images: [
  //     "/products/shadow-box-1.jpg",
  //     "/products/shadow-box-2.jpg",
  //     "/products/shadow-box-3.jpg",
  //   ],
  //   categorySlug: "keepsakes",
  //   subcategorySlug: "shadow-boxes",
  //   availability: "InStock",
  //   sku: "WW-SB-001",
  //   keywords: ["shadow box", "memory box", "keepsake frame NZ"],
  // },
  {
    slug: "paint-your-own-plaster-bulk-pack",
    name: "Paint Your Own Plaster Bulk Pack",
    description:
      "A fun and creative activity for birthday parties, playgroups, classrooms and events. Choose from a selection of ready-to-paint plaster figures and order in bulk for your group.",
    shortDescription:
      "Ready-to-paint plaster figures for parties, groups and craft activities.",
    price: 60,
    currency: "NZD",
    images: [
      "/products/plaster-bulk-1.png",
      "/products/plaster-bulk-2.png",
      "/products/plaster-bulk-3.png",
    ],
    categorySlug: "plaster-crafts",
    subcategorySlug: "paint-your-own",
    availability: "InStock",
    sku: "WW-PC-002",
    keywords: [
      "plaster painting party",
      "bulk plaster figures",
      "kids party activity",
      "party craft NZ",
      "paint your own plaster",
      "kids craft activity",
    ],
  },
];

export function getProductBySlug(slug: string) {
  return products.find(p => p.slug === slug);
}

export function getProductsByCategory(
  categorySlug: string,
  subcategorySlug?: string
) {
  return products.filter(
    p =>
      p.categorySlug === categorySlug &&
      (!subcategorySlug || p.subcategorySlug === subcategorySlug)
  );
}

/** Human-readable category string, e.g. "Keepsakes" or "Keepsakes > Shadow Boxes" */
export function getCategoryLabel(product: Product): string {
  const category = getCategoryBySlug(product.categorySlug);
  if (!category) return "";
  if (product.subcategorySlug) {
    const sub = getSubcategoryBySlug(
      product.categorySlug,
      product.subcategorySlug
    );
    if (sub) return `${category.name} > ${sub.name}`;
  }
  return category.name;
}

/** Prefers same subcategory, falls back to same category, excludes itself. */
export function getRelatedProducts(product: Product, limit = 4): Product[] {
  const sameSubcategory = product.subcategorySlug
    ? products.filter(
        p =>
          p.slug !== product.slug &&
          p.categorySlug === product.categorySlug &&
          p.subcategorySlug === product.subcategorySlug
      )
    : [];

  if (sameSubcategory.length >= limit) return sameSubcategory.slice(0, limit);

  const sameCategory = products.filter(
    p =>
      p.slug !== product.slug &&
      p.categorySlug === product.categorySlug &&
      !sameSubcategory.some(s => s.slug === p.slug)
  );

  return [...sameSubcategory, ...sameCategory].slice(0, limit);
}
