export type Subcategory = {
  slug: string;
  name: string;
  description: string;
  image: string;
};

export type Category = {
  slug: string;
  name: string;
  description: string;
  image: string;
  subcategories: Subcategory[];
};

export const categories = [
  {
    slug: "party-favours",
    name: "Party Favours",
    description: "Birthday return gifts & themed party packs.",
    image: "/categories/party-favours.jpg",
    subcategories: [] as Subcategory[],
  },
  {
    slug: "cake-toppers",
    name: "Cake Toppers",
    description: "Birthday & cupcake toppers, made to match your theme.",
    image: "/categories/cake-toppers.jpg",
    subcategories: [] as Subcategory[],
  },
  {
    slug: "gift-hampers",
    name: "Gifts & Keepsakes",
    description:
      "Personalised gift packs, photo keepsakes and thoughtful custom pieces.",
    image: "/categories/gift-hampers.jpg",
    subcategories: [
      {
        slug: "magnets",
        name: "Magnetics",
        description: "Personalised photo magnets.",
        image: "/categories/magnets.jpg",
      },
    ],
  },
  {
    slug: "plaster-crafts",
    name: "Plaster Crafts",
    description:
      "Paint-your-own plaster pieces, craft kits & decorative shapes.",
    image: "/categories/plaster-crafts.jpg",
    subcategories: [] as Subcategory[],
  },
] as const satisfies Category[];

export type CategorySlug = (typeof categories)[number]["slug"];

export function getCategoryBySlug(slug: string) {
  return categories.find(c => c.slug === slug);
}

export function getSubcategoryBySlug(categorySlug: string, subSlug: string) {
  return getCategoryBySlug(categorySlug)?.subcategories.find(
    s => s.slug === subSlug
  );
}
