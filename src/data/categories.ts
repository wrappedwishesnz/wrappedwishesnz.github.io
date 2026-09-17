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
export const categories: Category[] = [
  {
    slug: "party-favours",
    name: "Party Favours",
    description:
      "Thoughtful little gifts and fun surprises to make every celebration memorable.",
    image: "/categories/party-favours.jpg",
    subcategories: [] as Subcategory[],
  },
  {
    slug: "cake-toppers",
    name: "Cake Toppers",
    description:
      "Personalised cake toppers made to match your celebration, theme and special moment.",
    image: "/categories/cake-toppers.jpg",
    subcategories: [] as Subcategory[],
  },
  {
    slug: "gift-hampers",
    name: "Gifts & Keepsakes",
    description:
      "Custom gifts and keepsakes made to celebrate birthdays, memories and special occasions.",
    image: "/categories/gift-hampers.jpg",
    subcategories: [
      {
        slug: "magnets",
        name: "Photo Magnets",
        description:
          "Turn favourite memories into personalised keepsakes for the fridge or home.",
        image: "/categories/magnets.jpg",
      },
    ],
  },
  {
    slug: "plaster-crafts",
    name: "Plaster Art & Craft Kits",
    description:
      "Creative paint-your-own activities for parties, playtime, gifts and little artists.",
    image: "/categories/plaster-crafts.jpg",
    subcategories: [] as Subcategory[],
  },
];

export type CategorySlug = (typeof categories)[number]["slug"];

export function getCategoryBySlug(slug: string) {
  return categories.find(c => c.slug === slug);
}

export function getSubcategoryBySlug(categorySlug: string, subSlug: string) {
  return getCategoryBySlug(categorySlug)?.subcategories.find(
    s => s.slug === subSlug
  );
}
