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
    subcategories: [],
  },
  {
    slug: "cake-toppers",
    name: "Cake Toppers",
    description: "Birthday & cupcake toppers, made to match your theme.",
    image: "/categories/cake-toppers.jpg",
    subcategories: [],
  },
  {
    slug: "gift-hampers",
    name: "Gift Hampers",
    description: "Customisable hampers, candy-wrapped treats & small toys.",
    image: "/categories/gift-hampers.jpg",
    subcategories: [],
  },
  {
    slug: "keepsakes",
    name: "Keepsakes",
    description: "Personalised photo & memory pieces, made to last.",
    image: "/categories/keepsakes.jpg",
    subcategories: [
      {
        slug: "shadow-boxes",
        name: "Shadow Boxes",
        description: "Framed keepsakes for photos, tickets & small treasures.",
        image: "/categories/shadow-boxes.jpg",
      },
      {
        slug: "magnets",
        name: "Magnetic Prints",
        description: "Personalised photo magnets.",
        image: "/categories/magnets.jpg",
      },
      {
        slug: "keychains",
        name: "Acrylic Keychains",
        description: "Custom-printed acrylic keychains.",
        image: "/categories/keychains.jpg",
      },
      {
        slug: "glass-etching",
        name: "Glass Etching",
        description: "Engraved glassware, personalised to order.",
        image: "/categories/glass-etching.jpg",
      },
    ],
  },
  {
    slug: "plaster-crafts",
    name: "Plaster Crafts",
    description:
      "Paint-your-own plaster pieces, craft kits & decorative shapes.",
    image: "/categories/plaster-crafts.jpg",
    subcategories: [
      {
        slug: "paint-your-own",
        name: "Paint Your Own",
        description: "Plaster pieces for kids to paint and decorate.",
        image: "/categories/paint-your-own.jpg",
      },
      {
        slug: "plaster-figures",
        name: "Plaster Figures",
        description: "Ready-to-paint plaster shapes, animals & decorations.",
        image: "/categories/plaster-figures.jpg",
      },
    ],
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
