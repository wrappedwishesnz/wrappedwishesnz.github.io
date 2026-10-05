import LegalPage from "@/components/legal";
import { Paragraph } from "@/components/typography";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Terms for made-to-order and personalised products purchased from WrappedWishes in New Zealand.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Terms & Conditions"
      title="The little details."
      intro="These terms apply when you use the WrappedWishes website or purchase products from us."
      sections={[
        {
          title: "Made-to-order products",
          content: (
            <Paragraph>
              Many WrappedWishes products are handmade and made to order.
              Because of the handmade nature of our products, small variations
              may occur between items.
            </Paragraph>
          ),
        },
        {
          title: "Personalisation",
          content: (
            <Paragraph>
              Customers are responsible for checking names, dates, wording and
              other personalisation details before submitting an order. We will
              create your product using the information supplied with your
              order.
            </Paragraph>
          ),
        },
        {
          title: "Pricing and payment",
          content: (
            <Paragraph>
              Prices are displayed in New Zealand dollars unless otherwise
              stated. Payment must be successfully completed before we begin
              processing an order.
            </Paragraph>
          ),
        },
        {
          title: "Order changes",
          content: (
            <Paragraph>
              If you need to change an order, please contact us as soon as
              possible. Once production has started, we may not be able to
              change personalised details or cancel the order.
            </Paragraph>
          ),
        },
        {
          title: "Product images",
          content: (
            <Paragraph>
              We do our best to represent our products accurately. Colours may
              appear slightly different depending on your screen, materials and
              the handmade nature of the item.
            </Paragraph>
          ),
        },
        {
          title: "Shipping",
          content: (
            <Paragraph>
              Estimated delivery times are not guaranteed. Once an order has
              been handed to the delivery provider, delays outside our
              reasonable control may occur.
            </Paragraph>
          ),
        },
        {
          title: "Returns and problems",
          content: (
            <Paragraph>
              Please see our Shipping & Returns page for information about
              personalised products, damaged items, incorrect orders and
              returns.
            </Paragraph>
          ),
        },
        {
          title: "Contact",
          content: (
            <Paragraph>
              If you have any questions about these terms, please contact
              WrappedWishes through our Contact page.
            </Paragraph>
          ),
        },
      ]}
    />
  );
}
