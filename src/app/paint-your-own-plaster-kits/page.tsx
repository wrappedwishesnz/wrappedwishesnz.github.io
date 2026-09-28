import type { Metadata } from "next";
import { CategoryLanding } from "@/components/category/landing";
import { getProductsByCategory } from "@/data/products";

const siteUrl = "https://www.wrappedwishes.nz";
const pageUrl = `${siteUrl}/paint-your-own-plaster-kits`;
const products = getProductsByCategory("plaster-crafts");

export const metadata: Metadata = {
  title: "Paint-Your-Own Plaster Kits NZ | Kids' Craft Activities",
  description:
    "Shop paint-your-own plaster kits and bulk plaster figures for kids' parties, classrooms and playgroups. Prepared in Dunedin with NZ-wide delivery.",
  alternates: { canonical: "/paint-your-own-plaster-kits" },
  openGraph: {
    title: "Paint-Your-Own Plaster Kits NZ | WrappedWishes",
    description:
      "Bulk plaster painting packs for children's parties, classrooms and group craft activities across New Zealand.",
    url: "/paint-your-own-plaster-kits",
    type: "website",
    images: [
      {
        url: "/products/plaster-bulk-1.jpg",
        alt: "Bulk paint-your-own plaster figures for kids' activities",
      },
    ],
  },
};

export default function PlasterKitsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${pageUrl}#collection`,
        name: "Paint-Your-Own Plaster Kits New Zealand",
        url: pageUrl,
        description:
          "Paint-your-own plaster kits and bulk plaster figures prepared in Dunedin for delivery throughout New Zealand.",
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
            name: "Paint-Your-Own Plaster Kits",
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
        eyebrow="Paint-your-own plaster kits NZ"
        title="Creative plaster painting activities for little hands."
        introduction="Make your next birthday, classroom session or playgroup activity easy and creative with ready-to-paint plaster figures. Our plaster painting packs are prepared in Dunedin and available for children's activities throughout New Zealand."
        products={products}
        sectionTitle="Bulk plaster figures for parties and groups"
        sectionCopy="Choose a 30, 40 or 50-piece plaster party pack for birthdays, school holiday programmes, classrooms, playgroups and community events. The figures arrive ready for your group to decorate and enjoy."
        localTitle="Kids' plaster painting kits from Dunedin"
        localCopy="Our plaster craft packs are prepared by a small Dunedin business for local families, educators and event organisers, as well as customers throughout New Zealand. Tell us your group size, occasion and date when you enquire so we can help you choose a suitable pack and confirm delivery timing."
        details={[
          {
            title: "A hands-on party activity",
            copy: "Plaster painting gives children a creative activity during the celebration and a finished figure they can take home as a party keepsake.",
          },
          {
            title: "Bulk sizes for groups",
            copy: "Our current party packs are available with 30, 40 or 50 ready-to-paint plaster figures, making them useful for larger parties, classes and playgroups.",
          },
          {
            title: "Plan for your event",
            copy: "Share the number of children, the event date and your delivery location. We will confirm availability, the pack price and the current preparation timeframe.",
          },
        ]}
        faqs={[
          {
            question: "What sizes are the bulk plaster painting packs?",
            answer:
              "The current bulk pack can be ordered with 30, 40 or 50 ready-to-paint plaster figures. Tell us your group size when enquiring and we can help you select an option.",
          },
          {
            question:
              "Are plaster figures suitable for birthday party activities?",
            answer:
              "They are designed as a creative children's party or group activity. Children should be supervised by an adult, and the activity should be selected with the children's ages and needs in mind.",
          },
          {
            question: "Can you deliver plaster kits around New Zealand?",
            answer:
              "Yes. Plaster activity packs can be sent from Dunedin to customers around New Zealand. Enquire early with your event date and location so preparation and courier time can be allowed for.",
          },
          {
            question: "Are the packs useful for schools and playgroups?",
            answer:
              "Yes. Bulk plaster figures can be used for supervised classroom crafts, playgroups, school holiday programmes and community events as well as birthday parties.",
          },
        ]}
      />
    </>
  );
}
