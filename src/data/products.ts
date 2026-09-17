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
      "Fun and thoughtful party bags made to match your child's birthday theme. Choose the theme, colours, name and age to create a special favour for each guest.",
    shortDescription:
      "Personalised party bags made to match your birthday theme.",
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
      "A playful honey bee cake topper personalised with your child's name and age. Colourful shaker details and bee-inspired elements make it a fun centrepiece for a special birthday cake.",
    shortDescription:
      "A colourful honey bee shaker topper personalised with a name and age.",
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
      "A fun layered dinosaur cake topper made especially for a dinosaur-loving birthday. Add your child's name and age, and choose colours to complement your party theme.",
    shortDescription:
      "A fun layered dinosaur topper made especially for their birthday cake.",
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
  },
  {
    slug: "personalised-butterfly-cake-topper",
    name: "Personalised Butterfly Cake Topper",
    description:
      "A delicate layered butterfly cake topper personalised with a name and age. Choose colours to complement the cake and create a beautiful centrepiece for the celebration.",
    shortDescription:
      "A delicate butterfly topper personalised with a name, age and colours.",
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
    featured: true,
  },
  {
    slug: "personalised-soccer-cake-topper",
    name: "Personalised Soccer Cake Topper",
    description:
      "A custom soccer cake topper for football-loving birthday celebrations. Add a name and age, then choose colours and details to complement the party theme or favourite team.",
    shortDescription:
      "A custom soccer topper for football-loving birthday celebrations.",
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
    featured: true,
  },
  {
    slug: "personalised-rainbow-cake-topper",
    name: "Personalised Rainbow Cake Topper",
    description:
      "A cheerful rainbow cake topper personalised with a name and age, surrounded by fluffy clouds and sparkling stars. Choose your colours to create a bright addition to any birthday cake.",
    shortDescription:
      "A cheerful rainbow topper with a personalised name, age, clouds and stars.",
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
      "Thoughtful gift packs created for birthdays and special occasions. Choose a theme and personalised details to create a gift made especially for the recipient.",
    shortDescription: "Custom gift packs for birthdays and special occasions.",
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
    name: "Personalised Photo Magnets",
    description:
      "Turn favourite photos into personalised magnets for the fridge, office or a thoughtful keepsake. Share your chosen images and we'll turn your memories into something you can enjoy every day.",
    shortDescription:
      "Favourite memories turned into personalised photo magnets.",
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
      "A small personalised gift made with your chosen name, wording or design. Perfect for birthdays, thank-yous, party favours or keeping a special name close at hand.",
    shortDescription:
      "Custom keychains personalised with a name, wording or design.",
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
      "A reusable stacking calendar designed for your home, desk or as a thoughtful gift. Personalise the wording, colours and finishing details to create a practical keepsake you'll enjoy year after year.",
    shortDescription:
      "A reusable personalised calendar for your home, desk or as a gift.",
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
    name: "Paint-Your-Own Plaster Party Pack",
    description:
      "A creative activity pack for birthday parties, playgroups, classrooms and events. Choose from 30, 40 or 50 ready-to-paint plaster figures, with options to suit your group and occasion.",
    shortDescription:
      "Ready-to-paint plaster figures for parties, classrooms and group activities.",
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
    name: "Paint-Your-Own Plaster Kit",
    description:
      "A simple creative kit for painting, playing and displaying. Choose one, two or three plaster figures and enjoy an easy activity at home, as a gift or as part of a celebration.",
    shortDescription:
      "A fun paint-your-own activity with your choice of one to three plaster figures.",
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
    active: false,
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
