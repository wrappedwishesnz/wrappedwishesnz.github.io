import LegalPage from "@/components/legal";
import { Paragraph } from "@/components/typography";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Read how WrappedWishes collects, uses and protects information provided through our website and custom order enquiries.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Privacy"
      title="Your privacy matters to us."
      intro="This policy explains how WrappedWishes may collect, use and protect information when you visit our website, contact us or place an order."
      sections={[
        {
          title: "Information we collect",
          content: (
            <>
              <Paragraph>
                When you place an order or contact us, we may collect
                information such as your name, email address, delivery address,
                phone number and details required to personalise your order.
              </Paragraph>
              <Paragraph>
                Our website may also collect technical information such as
                browser, device and website usage information.
              </Paragraph>
            </>
          ),
        },
        {
          title: "How we use your information",
          content: (
            <Paragraph>
              We use your information to process and personalise orders, arrange
              delivery, respond to enquiries, provide customer support and
              operate and improve our website.
            </Paragraph>
          ),
        },
        {
          title: "Payments",
          content: (
            <Paragraph>
              Payments may be processed by third-party payment providers. We do
              not intend to directly store your full payment card details on our
              website.
            </Paragraph>
          ),
        },
        {
          title: "Sharing information",
          content: (
            <Paragraph>
              We may share information with service providers where necessary to
              operate our business, such as payment processors, website
              providers and delivery companies. We do not sell your personal
              information.
            </Paragraph>
          ),
        },
        {
          title: "Cookies and analytics",
          content: (
            <Paragraph>
              Our website may use cookies or similar technologies to provide
              website functionality and understand how visitors use the site.
            </Paragraph>
          ),
        },
        {
          title: "Contact us",
          content: (
            <Paragraph>
              If you have a question about your personal information or this
              privacy policy, please contact WrappedWishes through our Contact
              page.
            </Paragraph>
          ),
        },
      ]}
    />
  );
}
