import LegalPage from "@/components/legal";
import { Paragraph } from "@/components/typography";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shipping & Returns",
  description:
    "Learn about processing times, NZ-wide shipping, personalised order changes, damaged items and returns at WrappedWishes.",
  alternates: { canonical: "/shipping-returns" },
  openGraph: { url: "/shipping-returns" },
};

export default function ShippingReturnsPage() {
  return (
    <LegalPage
      eyebrow="Shipping & Returns"
      title="Made with care, sent with care."
      intro="Everything at WrappedWishes is made to order in our Dunedin home studio. Here's what you need to know about shipping, personalised orders and returns."
      sections={[
        {
          title: "Processing times",
          content: (
            <Paragraph>
              As our products are made to order, please allow time for us to
              create your item before it is dispatched. Current processing times
              may vary depending on the product and order volume.
            </Paragraph>
          ),
        },
        {
          title: "Shipping",
          content: (
            <Paragraph>
              We ship throughout New Zealand. Delivery times begin once your
              order has been completed and handed to the courier.
            </Paragraph>
          ),
        },
        {
          title: "Personalised items",
          content: (
            <Paragraph>
              Please carefully check all names, dates and other personalised
              details before placing your order. We create your item using the
              information you provide.
            </Paragraph>
          ),
        },
        {
          title: "Returns",
          content: (
            <Paragraph>
              Because personalised products are created specifically for you, we
              generally cannot accept returns or exchanges for a change of mind.
            </Paragraph>
          ),
        },
        {
          title: "Damaged or incorrect orders",
          content: (
            <Paragraph>
              If your item arrives damaged or we've made an error with your
              order, please contact us as soon as possible with your order
              details and photos of the issue so we can help.
            </Paragraph>
          ),
        },
      ]}
    />
  );
}
