export type Product = {
  slug: string;
  name: string;
  description: string;
  shortDescription: string;
  price: number;
  currency: string;
  image: string;
  category: string;
  availability: "InStock" | "OutOfStock";
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
    image: "/products/birthday-party-bag.jpg",
    category: "Party Bags",
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
    image: "/products/cake-topper.jpg",
    category: "Cake Toppers",
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
    image: "/products/gift-pack.jpg",
    category: "Gift Packs",
    availability: "InStock",
    sku: "WW-GP-001",
    keywords: [
      "personalised gifts",
      "birthday gift packs",
      "gift packs NZ",
      "custom gifts NZ",
    ],
  },
];

export function getProductBySlug(slug: string) {
  return products.find(product => product.slug === slug);
}
