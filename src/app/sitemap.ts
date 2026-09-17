import type { MetadataRoute } from "next";
import { activeProducts, getProductImages } from "@/data/products";

const siteUrl = "https://www.wrappedwishes.nz";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: MetadataRoute.Sitemap = [
    { url: siteUrl, changeFrequency: "monthly", priority: 1 },
    { url: `${siteUrl}/products`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${siteUrl}/faq`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${siteUrl}/contact`, changeFrequency: "yearly", priority: 0.5 },
    {
      url: `${siteUrl}/shipping-returns`,
      changeFrequency: "yearly",
      priority: 0.4,
    },
    { url: `${siteUrl}/privacy`, changeFrequency: "yearly", priority: 0.2 },
    { url: `${siteUrl}/terms`, changeFrequency: "yearly", priority: 0.2 },
  ];

  const productPages: MetadataRoute.Sitemap = activeProducts.map(product => ({
    url: `${siteUrl}/product/${product.slug}`,
    changeFrequency: "monthly",
    priority: 0.8,
    images: getProductImages(product).map(image => `${siteUrl}${image}`),
  }));

  return [...pages, ...productPages];
}
