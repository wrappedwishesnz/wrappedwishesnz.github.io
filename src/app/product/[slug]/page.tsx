import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { getProductBySlug, getCategoryLabel, products } from "@/data/products";
import { ProductGallery } from "@/components/products/gallery";
import { RelatedProducts } from "@/components/products/related";
import styles from "./product.module.scss";
import Enquiry from "@/components/enquiry";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return products.map(p => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  const product = getProductBySlug(slug);

  if (!product) {
    return {};
  }

  return {
    title: product.name,
    description: product.shortDescription,

    keywords: product.keywords,

    alternates: {
      canonical: `/product/${product.slug}`,
    },

    openGraph: {
      title: product.name,
      description: product.description,
      url: `/product/${product.slug}`,
      type: "website",
      images: product.images.map(image => ({ url: image, alt: product.name })),
    },
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) notFound();

  const siteUrl = "https://www.wrappedwishes.nz";
  const productUrl = `${siteUrl}/product/${slug}`;

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: product.images.map(img => `${siteUrl}${img}`),
    sku: product.sku,
    brand: { "@type": "Brand", name: "WrappedWishes" },
    category: getCategoryLabel(product),
    offers: {
      "@type": "Offer",
      url: productUrl,
      priceCurrency: product.currency,
      // price: product.price.toFixed(2),
      availability: `https://schema.org/${product.availability}`,
      itemCondition: "https://schema.org/NewCondition",
    },
  };

  const formattedPrice = new Intl.NumberFormat("en-NZ", {
    style: "currency",
    currency: product.currency,
  }).format(product.price);

  return (
    <>
      <section className={styles.detail}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
        />

        <div className={styles.wrap}>
          <Link href="/products" className={styles.back}>
            ← Back to shop
          </Link>

          <div className={styles.grid}>
            <ProductGallery images={product.images} alt={product.name} />

            <div className={styles.info}>
              <span className={styles.category}>
                {getCategoryLabel(product)}
              </span>
              <h1>{product.name}</h1>
              {/* <p className={styles.price}>Starts from {formattedPrice}</p> */}
              <p className={styles.description}>{product.description}</p>
              <Link href={"#enquiry"} className={styles.cta}>
                Enquire about this piece
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.relatedSection}>
        <div className={styles.wrap}>
          <RelatedProducts product={product} />
        </div>
      </section>

      <Enquiry />
    </>
  );
}
