import { getCategoryBySlug, getSubcategoryBySlug } from "./categories";

export type ProductAvailability = "InStock" | "OutOfStock";

export type Product = {
  slug: string;
  name: string;
  description: string;
  shortDescription: string;
  price?: number;
  priceFrom?: boolean;
  currency: string;
  images: string[]; // first entry is the cover image used on cards
  categorySlug: string;
  subcategorySlug?: string;
  availability: ProductAvailability;
  sku: string;
  keywords: string[];
  active: boolean;
  featured?: boolean;
  orderOptions?: string[];
};

export const products: Product[] = [
  {
    slug: "personalised-birthday-party-bags",
    name: "Personalised Birthday Party Bags",
    description:
      "Personalised birthday party bags designed for children's celebrations. Choose your preferred theme, colours, name and age to create a unique party favour for your guests.",
    shortDescription:
      "Personalised party bags for children's birthday celebrations.",
    price: 12,
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
    active: true,
    featured: true,
  },
  {
    slug: "personalised-honey-bee-shaker-cake-topper",
    name: "Personalised Honey Bee Shaker Cake Topper",
    description:
      "Add a sweet touch to a special birthday with a personalised honey bee shaker cake topper featuring your child's name and age. Designed with playful bee details and colourful shaker elements, then handmade to order in Dunedin.",
    shortDescription:
      "A personalised honey bee shaker cake topper featuring your child's name and age.",
    price: 40,
    currency: "NZD",
    images: [
      "/products/cake-topper-honey-1.png",
      "/products/cake-topper-honey-2.png",
    ],
    categorySlug: "cake-toppers",
    availability: "InStock",
    sku: "WW-CT-BEE-SHAKER-001",
    keywords: [
      "honey bee cake topper NZ",
      "personalised bee cake topper",
      "bee birthday cake topper",
      "honey bee shaker cake topper",
      "shaker cake topper NZ",
      "custom bee cake topper",
    ],
    active: true,
    featured: true,
  },
  {
    slug: "personalised-dinosaur-cake-topper",
    name: "Personalised Dinosaur Cake Topper",
    description:
      "Make a dinosaur birthday cake extra special with a layered personalised topper featuring your child's name and age. Colours and wording can be customised to suit your celebration, and every topper is handmade to order in our Dunedin studio.",
    shortDescription:
      "A personalised dinosaur cake topper handmade with your child's name and age.",
    price: 20,
    currency: "NZD",
    images: ["/products/cake-topper-dino.jpg"],
    categorySlug: "cake-toppers",
    availability: "InStock",
    sku: "WW-CT-DINO-001",
    keywords: [
      "dinosaur cake topper NZ",
      "personalised dinosaur cake topper",
      "dinosaur birthday cake topper",
      "first birthday dinosaur topper",
    ],
    active: true,
    featured: true,
  },
  {
    slug: "personalised-butterfly-cake-topper",
    name: "Personalised Butterfly Cake Topper",
    description:
      "Celebrate with a layered butterfly cake topper personalised with a name and age. Choose colours to complement your party theme and create a sparkling centrepiece, handmade to order in our Dunedin studio.",
    shortDescription:
      "A layered butterfly birthday cake topper personalised with a name, age and colours.",
    price: 25,
    currency: "NZD",
    images: ["/products/cake-topper-butterfly.jpg"],
    categorySlug: "cake-toppers",
    availability: "InStock",
    sku: "WW-CT-BUTTERFLY-001",
    keywords: [
      "butterfly cake topper NZ",
      "personalised butterfly cake topper",
      "butterfly birthday cake topper",
      "custom name cake topper",
    ],
    active: true,
  },
  {
    slug: "personalised-soccer-cake-topper",
    name: "Personalised Soccer Cake Topper",
    description:
      "Celebrate a soccer-loving birthday with a personalised layered cake topper featuring your child's name and age. Choose colours and details to match their favourite team or party theme, then we will handmake your topper to order in Dunedin.",
    shortDescription:
      "A personalised soccer birthday cake topper featuring your child's name and age.",
    price: 25,
    currency: "NZD",
    images: [
      "/products/cake-topper-soccer-2.png",
      "/products/cake-topper-soccer-1.png",
    ],
    categorySlug: "cake-toppers",
    availability: "InStock",
    sku: "WW-CT-SOCCER-001",
    keywords: [
      "soccer cake topper NZ",
      "personalised soccer cake topper",
      "soccer birthday cake topper",
      "football cake topper",
      "custom soccer cake topper",
    ],
    active: true,
  },
  {
    slug: "personalised-rainbow-cake-topper",
    name: "Personalised Rainbow Cake Topper",
    description:
      "Add a colourful touch to a special birthday with a personalised rainbow cake topper featuring your child's name and age, surrounded by fluffy clouds and sparkling stars. Choose colours to match your celebration, then we will handmake your topper to order in Dunedin.",
    shortDescription:
      "A colourful personalised rainbow birthday cake topper featuring a name, age, clouds and stars.",
    price: 25,
    currency: "NZD",
    images: ["/products/cake-topper-rainbow.jpg"],
    categorySlug: "cake-toppers",
    availability: "InStock",
    sku: "WW-CT-RAINBOW-001",
    keywords: [
      "rainbow cake topper NZ",
      "personalised rainbow cake topper",
      "rainbow birthday cake topper",
      "rainbow name and age cake topper",
      "cloud and star cake topper",
      "custom rainbow cake topper",
    ],
    active: true,
  },
  {
    slug: "personalised-gift-packs",
    name: "Personalised Gift Packs",
    description:
      "Beautiful personalised gift packs created for birthdays and special occasions. Custom themes and designs are available.",
    shortDescription:
      "Personalised gift packs for birthdays and special occasions.",
    price: 25,
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
    active: true,
  },
  {
    slug: "magnetic-photo-prints",
    name: "Magnetic Photo Prints",
    description:
      "Turn favourite photos into personalised magnetic prints for the fridge, office or a thoughtful keepsake gift. Share your chosen images and we will prepare each print to order in our Dunedin studio.",
    shortDescription:
      "Personalised magnetic photo prints made from your favourite memories.",
    currency: "NZD",
    images: [],
    categorySlug: "gift-hampers",
    subcategorySlug: "magnets",
    availability: "InStock",
    sku: "WW-GH-MAG-001",
    keywords: [
      "magnetic photo prints NZ",
      "personalised photo magnets",
      "custom fridge magnets",
      "photo keepsake gift",
    ],
    active: false,
  },
  {
    slug: "personalised-keychains",
    name: "Personalised Keychains",
    description:
      "Create a personalised keychain with your chosen name, wording or design. Each keychain is made to order and is a practical little gift for birthdays, thank-yous and everyday keepsakes.",
    shortDescription:
      "Custom keychains personalised with a name, wording or special design.",
    currency: "NZD",
    images: [],
    categorySlug: "gift-hampers",
    availability: "InStock",
    sku: "WW-GH-KEY-001",
    keywords: [
      "personalised keychains NZ",
      "custom name keychain",
      "personalised keepsake",
      "small personalised gift",
    ],
    active: false,
  },
  {
    slug: "personalised-stacking-calendar",
    name: "Personalised Stacking Calendar",
    description:
      "A reusable stacking calendar personalised for your home, desk or as a thoughtful gift. Choose the wording, colours and finishing details to create a practical keepsake that can be enjoyed throughout the year.",
    shortDescription:
      "A reusable stacking calendar personalised with your chosen details.",
    currency: "NZD",
    images: [],
    categorySlug: "gift-hampers",
    availability: "InStock",
    sku: "WW-GH-CAL-001",
    keywords: [
      "personalised stacking calendar NZ",
      "reusable desk calendar",
      "custom perpetual calendar",
      "personalised home gift",
    ],
    active: false,
  },
  {
    slug: "paint-your-own-plaster-bulk-pack",
    name: "Bulk Paint-Your-Own Plaster Pack",
    description:
      "A creative activity pack for birthday parties, playgroups, classrooms and events. Choose a 30, 40 or 50-piece pack of ready-to-paint plaster figures, with the final price confirmed for your selected quantity and figure mix.",
    shortDescription:
      "Bulk ready-to-paint plaster figures in 30, 40 or 50-piece packs.",
    price: 30,
    priceFrom: true,
    currency: "NZD",
    images: [
      "/products/plaster-bulk-1.jpg",
      "/products/plaster-bulk-2.jpg",
      "/products/plaster-bulk-3.jpg",
      "/products/plaster-bulk-4.jpg",
    ],
    categorySlug: "plaster-crafts",
    availability: "InStock",
    sku: "WW-PC-BULK-001",
    keywords: [
      "bulk plaster figures NZ",
      "plaster painting party",
      "kids party activity",
      "classroom craft activity",
      "paint your own plaster",
    ],
    active: true,
    featured: true,
    orderOptions: ["30-piece pack", "40-piece pack", "50-piece pack"],
  },
  {
    slug: "small-paint-your-own-plaster-kit",
    name: "Small Paint-Your-Own Plaster Kit",
    description:
      "A small paint-your-own plaster kit packaged for an easy creative activity or gift. Choose one, two or three plaster figures, with the final contents and price confirmed when you enquire.",
    shortDescription:
      "A small paint-your-own kit with your choice of one to three plaster figures.",
    currency: "NZD",
    images: [],
    categorySlug: "plaster-crafts",
    availability: "InStock",
    sku: "WW-PC-SMALL-001",
    keywords: [
      "small plaster painting kit NZ",
      "paint your own plaster kit",
      "kids craft packet",
      "plaster figure activity",
      "small craft gift",
    ],
    active: true,
    orderOptions: ["1-figure packet", "2-figure packet", "3-figure packet"],
  },
];

export const activeProducts = products.filter(product => product.active);

export const featuredProducts = activeProducts.filter(
  product => product.featured
);

export function getProductBySlug(slug: string) {
  return activeProducts.find(product => product.slug === slug);
}

export function getProductImages(product: Product) {
  return product.images;
}

export function formatProductPrice(product: Product) {
  if (product.price === undefined) return "Price on enquiry";

  const formattedPrice = new Intl.NumberFormat("en-NZ", {
    style: "currency",
    currency: product.currency,
    maximumFractionDigits: 0,
  }).format(product.price);

  return `${product.priceFrom ? "From " : ""}${formattedPrice} NZD`;
}

export function getProductsByCategory(
  categorySlug: string,
  subcategorySlug?: string
) {
  return activeProducts.filter(
    product =>
      product.categorySlug === categorySlug &&
      (!subcategorySlug || product.subcategorySlug === subcategorySlug)
  );
}

/** Human-readable category string, e.g. "Gifts & Keepsakes → Magnetic Prints". */
export function getCategoryLabel(product: Product): string {
  const category = getCategoryBySlug(product.categorySlug);
  if (!category) return "";
  if (product.subcategorySlug) {
    const subcategory = getSubcategoryBySlug(
      product.categorySlug,
      product.subcategorySlug
    );
    if (subcategory) return `${category.name} → ${subcategory.name}`;
  }
  return category.name;
}

/** Prefers the same subcategory, then fills from the same category. */
export function getRelatedProducts(product: Product, limit = 4): Product[] {
  const sameSubcategory = product.subcategorySlug
    ? activeProducts.filter(
        candidate =>
          candidate.slug !== product.slug &&
          candidate.categorySlug === product.categorySlug &&
          candidate.subcategorySlug === product.subcategorySlug
      )
    : [];

  const sameCategory = activeProducts.filter(
    candidate =>
      candidate.slug !== product.slug &&
      candidate.categorySlug === product.categorySlug &&
      !sameSubcategory.some(match => match.slug === candidate.slug)
  );

  return [...sameSubcategory, ...sameCategory].slice(0, limit);
}
