import type { Metadata } from "next";
import { CategoryLanding } from "@/components/category/landing";
import { getProductsByCategory } from "@/data/products";

const siteUrl = "https://www.wrappedwishes.nz";
const pageUrl = `${siteUrl}/cake-toppers`;
const products = getProductsByCategory("cake-toppers");

export const metadata: Metadata = {
  title: "Cake Toppers Dunedin & NZ",
  description:
    "Shop personalised cake toppers handmade in Dunedin for birthdays across New Zealand. Custom names, ages, colours and themes, with NZ-wide delivery.",
  alternates: { canonical: "/cake-toppers" },
  openGraph: {
    title: "Cake Toppers Dunedin & NZ | WrappedWishes",
    description:
      "Custom birthday cake toppers handmade in Dunedin and delivered throughout New Zealand.",
    url: "/cake-toppers",
    type: "website",
    images: [
      {
        url: "/products/cake-topper-honey-1.png",
        alt: "Personalised birthday cake topper handmade in Dunedin",
      },
    ],
  },
};

export default function CakeToppersPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${pageUrl}#collection`,
        name: "Personalised Cake Toppers New Zealand",
        url: pageUrl,
        description:
          "Personalised birthday cake toppers handmade in Dunedin and delivered throughout New Zealand.",
        isPartOf: { "@id": `${siteUrl}/#website` },
        mainEntity: {
          "@type": "ItemList",
          itemListElement: products.map((product, index) => ({
            "@type": "ListItem",
            position: index + 1,
            url: `${siteUrl}/product/${product.slug}`,
            name: product.name,
          })),
        },
      },
      {
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
            name: "Cake Toppers",
            item: pageUrl,
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <CategoryLanding
        eyebrow="Personalised cake toppers NZ"
        title="Cake toppers made especially for their celebration."
        introduction="Create a memorable centrepiece with a personalised cake topper featuring their name, age and favourite theme. Every topper is made to order in our Dunedin studio and can be delivered to birthdays throughout New Zealand."
        products={products}
        sectionTitle="Shop personalised birthday cake toppers"
        sectionCopy="Choose from dinosaur, butterfly, soccer, rainbow and honey bee designs. Each design can be personalised for the birthday child and coordinated with the colours of your cake or party."
        localTitle="Custom cake toppers in Dunedin, delivered NZ-wide"
        localCopy="WrappedWishes is a small, family-run Dunedin studio. Local customers can enquire about a topper for an upcoming celebration, while customers elsewhere in New Zealand can have their finished topper carefully packed and sent by courier. Please allow time for personalisation, making and delivery when planning your cake."
        details={[
          {
            title: "Personalised for you",
            copy: "Tell us the name, age, colours and theme for the celebration. We will confirm the details and create a topper specifically for your cake.",
          },
          {
            title: "Themes children love",
            copy: "Our current collection includes dinosaurs, butterflies, rainbows, soccer and honey bees, with layered and shaker-style options available.",
          },
          {
            title: "Made to order",
            copy: "Each topper is individually prepared rather than taken from mass-produced stock. Enquire early so we can confirm the design and current turnaround time.",
          },
        ]}
        faqs={[
          {
            question: "Can you personalise a cake topper with a name and age?",
            answer:
              "Yes. Our cake toppers can be personalised with a child's name and age. Colour and theme choices vary by design and are confirmed before we make your order.",
          },
          {
            question: "Do you make cake toppers in Dunedin?",
            answer:
              "Yes. WrappedWishes makes personalised cake toppers in our Dunedin home studio for local celebrations and customers throughout New Zealand.",
          },
          {
            question: "Can cake toppers be delivered around New Zealand?",
            answer:
              "Yes. We can send completed cake toppers throughout New Zealand. Enquire with your event date and location so we can confirm the current making and delivery timeframe.",
          },
          {
            question: "How do I order a custom birthday cake topper?",
            answer:
              "Choose a design and send an enquiry with the name, age, preferred colours, celebration date and delivery location. We will confirm the design, price and turnaround time with you.",
          },
        ]}
      />
    </>
  );
}
