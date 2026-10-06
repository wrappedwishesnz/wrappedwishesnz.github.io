import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import {
  activeProducts,
  formatProductPrice,
  getCategoryLabel,
  getProductBySlug,
  getProductImages,
} from "@/data/products";
import { ProductGallery } from "@/components/products/gallery";
import { RelatedProducts } from "@/components/products/related";
import styles from "./product.module.scss";
import Enquiry from "@/components/enquiry";
import { Button } from "@/components/button";
import { Eyebrow, Paragraph, Title } from "@/components/typography";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return activeProducts.map(product => ({ slug: product.slug }));
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
      ...(images.length > 0 && {
        images: images.map(image => ({ url: image, alt: product.name })),
      }),
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.name} NZ`,
      description: product.shortDescription,
      ...(images[0] && { images: [images[0]] }),
    },
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) notFound();

  const siteUrl = "https://www.wrappedwishes.nz";
  const productUrl = `${siteUrl}/product/${slug}`;
  const images = getProductImages(product);
  const formattedPrice = formatProductPrice(product);
  const categoryPath = `/products?category=${product.categorySlug}`;
  const shopUrl = `${siteUrl}/products`;
  const categoryUrl = `${siteUrl}${categoryPath}`;

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    ...(images.length > 0 && {
      image: images.map(img => `${siteUrl}${img}`),
    }),
    sku: product.sku,
    brand: { "@type": "Brand", name: "WrappedWishes" },
    category: getCategoryLabel(product),
    ...(product.price !== undefined && {
      offers: {
        "@type": "Offer",
        url: productUrl,
        priceCurrency: product.currency,
        price: product.price.toFixed(2),
        availability: `https://schema.org/${product.availability}`,
        itemCondition: "https://schema.org/NewCondition",
        seller: { "@id": `${siteUrl}/#business` },
      },
    }),
  };

  const productBreadcrumb = {
    "@type": "ListItem",
    position: 4,
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
        name: "Shop",
        item: shopUrl,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: getCategoryLabel(product),
        item: categoryUrl,
      },
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
          <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
            <Link href="/products">Shop</Link>
            <span aria-hidden="true">/</span>
            <Link href={categoryPath}>{getCategoryLabel(product)}</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">{product.name}</span>
          </nav>

          <div className={styles.grid}>
            <ProductGallery images={images} alt={product.name} />

            <div className={styles.info}>
              <Eyebrow className={styles.category}>
                {getCategoryLabel(product)}
              </Eyebrow>
              <Title as="h1" variant="page">
                {product.name}
              </Title>
              <div className={styles.purchaseMeta}>
                <Paragraph className={styles.price}>{formattedPrice}</Paragraph>
                <span className={styles.madeToOrder}>Made to order</span>
              </div>
              <Paragraph className={styles.description} variant="lead">
                {product.description}
              </Paragraph>
              {product.orderOptions?.length ? (
                <div className={styles.options}>
                  <Title variant="card">Available order sizes</Title>
                  <ul>
                    {product.orderOptions.map(option => (
                      <li key={option}>{option}</li>
                    ))}
                  </ul>
                </div>
              ) : null}
              {product.themeOptions?.length ? (
                <div className={styles.options}>
                  <Title variant="card">Available themes</Title>
                  <ul>
                    {product.themeOptions.map(theme => (
                      <li key={theme}>{theme}</li>
                    ))}
                  </ul>
                </div>
              ) : null}
              <Button href="#enquiry" className={styles.cta}>
                Enquire about this piece
              </Button>
              <Paragraph className={styles.enquiryHint} variant="small">
                Tell us the occasion, wording, colours, quantity and date. We’ll
                confirm the design, final price and turnaround time with you.
              </Paragraph>

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
            <Eyebrow className={styles.orderEyebrow}>Your custom order</Eyebrow>
            <Title id="order-heading">Made for your celebration.</Title>
          </div>
          <div className={styles.detailCards}>
            <article>
              <span>01</span>
              <Title as="h3" variant="card">
                Make it yours
              </Title>
              <Paragraph variant="small">
                Share the occasion and the names, wording, colours or theme you
                would like us to work with.
              </Paragraph>
            </article>
            <article>
              <span>02</span>
              <Title as="h3" variant="card">
                Confirm the details
              </Title>
              <Paragraph variant="small">
                We’ll talk through what is possible and confirm the design,
                price and current turnaround time before proceeding.
              </Paragraph>
            </article>
            <article>
              <span>03</span>
              <Title as="h3" variant="card">
                Made and delivered
              </Title>
              <Paragraph variant="small">
                Your order is carefully handmade in our Dunedin studio and can
                be delivered throughout New Zealand.
              </Paragraph>
            </article>
          </div>
        </div>
      </section>

      <RelatedProducts product={product} />

      <Enquiry productName={product.name} />
    </>
  );
}
