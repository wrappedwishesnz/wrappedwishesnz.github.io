import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import {
  allProducts,
  getCategoryLabel,
  getParentProduct,
  getProductBySlug,
  getProductImages,
} from "@/data/products";
import { ProductGallery } from "@/components/products/gallery";
import { RelatedProducts } from "@/components/products/related";
import styles from "./product.module.scss";
import Enquiry from "@/components/enquiry";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return allProducts.map(product => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  const product = getProductBySlug(slug);

  if (!product) {
    return {};
  }

  const images = getProductImages(product);

  return {
    title: product.name,
    description: `${product.shortDescription} Handmade to order in Dunedin and available for delivery throughout New Zealand.`,

    keywords: product.keywords,

    alternates: {
      canonical: `/product/${product.slug}`,
    },

    openGraph: {
      title: `${product.name} NZ`,
      description: product.description,
      url: `/product/${product.slug}`,
      type: "website",
      images: images.map(image => ({ url: image, alt: product.name })),
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.name} NZ`,
      description: product.shortDescription,
      images: [images[0]],
    },
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) notFound();

  const siteUrl = "https://www.wrappedwishes.nz";
  const productUrl = `${siteUrl}/product/${slug}`;
  const parentProduct = getParentProduct(product);
  const images = getProductImages(product);
  const formattedPrice = new Intl.NumberFormat("en-NZ", {
    style: "currency",
    currency: product.currency,
    maximumFractionDigits: 0,
  }).format(product.price);

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: images.map(img => `${siteUrl}${img}`),
    sku: product.sku,
    brand: { "@type": "Brand", name: "WrappedWishes" },
    category: getCategoryLabel(product),
    offers: {
      "@type": "Offer",
      url: productUrl,
      priceCurrency: product.currency,
      price: product.price.toFixed(2),
      availability: `https://schema.org/${product.availability}`,
      itemCondition: "https://schema.org/NewCondition",
      seller: { "@id": `${siteUrl}/#business` },
    },
    ...(parentProduct && {
      isVariantOf: {
        "@type": "ProductGroup",
        name: parentProduct.name,
        url: `${siteUrl}/product/${parentProduct.slug}`,
      },
    }),
  };

  const productBreadcrumb = {
    "@type": "ListItem",
    position: parentProduct ? 4 : 3,
    name: product.name,
    item: productUrl,
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Products",
        item: `${siteUrl}/products`,
      },
      ...(parentProduct
        ? [
            {
              "@type": "ListItem",
              position: 3,
              name: parentProduct.name,
              item: `${siteUrl}/product/${parentProduct.slug}`,
            },
          ]
        : []),
      productBreadcrumb,
    ],
  };

  return (
    <>
      <section className={styles.detail}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(productJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbJsonLd).replace(/</g, "\\u003c"),
          }}
        />

        <div className={styles.wrap}>
          <Link
            href={
              parentProduct ? `/product/${parentProduct.slug}` : "/products"
            }
            className={styles.back}>
            ← Back to {parentProduct ? parentProduct.name : "shop"}
          </Link>

          <div className={styles.grid}>
            <ProductGallery images={images} alt={product.name} />

            <div className={styles.info}>
              <span className={styles.category}>
                {getCategoryLabel(product)}
              </span>
              <h1>{product.name}</h1>
              <div className={styles.purchaseMeta}>
                <p className={styles.price}>
                  {product.subProducts?.length ? "From " : ""}
                  {formattedPrice} NZD
                </p>
                <span className={styles.madeToOrder}>Made to order</span>
              </div>
              <p className={styles.description}>{product.description}</p>
              <Link href={"#enquiry"} className={styles.cta}>
                Enquire about this piece
              </Link>
              <p className={styles.enquiryHint}>
                Tell us the occasion, wording, colours, quantity and date. We’ll
                confirm the design, final price and turnaround time with you.
              </p>

              <ul className={styles.trustList} aria-label="Product benefits">
                <li>Handmade in Dunedin</li>
                <li>Personalised to order</li>
                <li>NZ-wide delivery</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.orderDetails} aria-labelledby="order-heading">
        <div className={styles.wrap}>
          <div className={styles.orderHeading}>
            <span className={styles.orderEyebrow}>Your custom order</span>
            <h2 id="order-heading">Made for your celebration.</h2>
          </div>
          <div className={styles.detailCards}>
            <article>
              <span>01</span>
              <h3>Make it yours</h3>
              <p>
                Share the occasion and the names, wording, colours or theme you
                would like us to work with.
              </p>
            </article>
            <article>
              <span>02</span>
              <h3>Confirm the details</h3>
              <p>
                We’ll talk through what is possible and confirm the design,
                price and current turnaround time before proceeding.
              </p>
            </article>
            <article>
              <span>03</span>
              <h3>Made and delivered</h3>
              <p>
                Your order is carefully handmade in our Dunedin studio and can
                be delivered throughout New Zealand.
              </p>
            </article>
          </div>
        </div>
      </section>

      <RelatedProducts product={product} />

      <Enquiry productName={product.name} />
    </>
  );
}
