import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Product } from "@/data/products";
import styles from "./product.module.scss";
import { products, getProductBySlug } from "@/data/products";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return products.map(product => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  const product = getProductBySlug(slug);

  if (!product) {
    return {};
  }

  return {
    title: product.name,
    description: product.description,

    keywords: product.keywords,

    alternates: {
      canonical: `/products/${product.slug}`,
    },

    openGraph: {
      title: product.name,
      description: product.description,
      url: `/products/${product.slug}`,
      type: "website",
      images: [
        {
          url: product.image,
          alt: product.name,
        },
      ],
    },
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;

  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const siteUrl = "https://www.wrappedwishes.nz";
  const productUrl = `${siteUrl}/products/${product.slug}`;
  const imageUrl = `${siteUrl}${product.image}`;

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",

    name: product.name,

    description: product.description,

    image: [imageUrl],

    sku: product.sku,

    brand: {
      "@type": "Brand",
      name: "WrappedWishes",
    },

    category: product.category,

    offers: {
      "@type": "Offer",
      url: productUrl,
      priceCurrency: product.currency,
      price: product.price.toFixed(2),
      availability: `https://schema.org/${product.availability}`,
      itemCondition: "https://schema.org/NewCondition",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productJsonLd),
        }}
      />

      <section className={styles.detail}>
        <div className={styles.wrap}>
          <Link href="/products" className={styles.back}>
            ← Back to shop
          </Link>

          <div className={styles.grid}>
            <div className={styles.gallery}>
              <div className={styles.mainImage}>
                <span>{product.image}</span>
              </div>
              {/* {product.images.length > 1 && (
                <div className={styles.thumbs}>
                  {product.images.map((img, i) => (
                    <button
                      key={img}
                      type="button"
                      className={`${styles.thumb} ${i === 0 ? styles.active : ""}`}>
                      <span>{img}</span>
                    </button>
                  ))}
                </div>
              )} */}
            </div>

            <div className={styles.info}>
              <span className={styles.category}>{product.category}</span>
              <h1 className={styles.name}>{product.name}</h1>
              <p className={styles.price}>{product.price}</p>
              <p className={styles.description}>{product.description}</p>
              <Link href="#enquiry" className={styles.cta}>
                Enquire about this piece
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
