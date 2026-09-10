import LegalPage from "@/components/legal";

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
              <p>
                When you place an order or contact us, we may collect
                information such as your name, email address, delivery address,
                phone number and details required to personalise your order.
              </p>
              <p>
                Our website may also collect technical information such as
                browser, device and website usage information.
              </p>
            </>
          ),
        },
        {
          title: "How we use your information",
          content: (
            <p>
              We use your information to process and personalise orders, arrange
              delivery, respond to enquiries, provide customer support and
              operate and improve our website.
            </p>
          ),
        },
        {
          title: "Payments",
          content: (
            <p>
              Payments may be processed by third-party payment providers. We do
              not intend to directly store your full payment card details on our
              website.
            </p>
          ),
        },
        {
          title: "Sharing information",
          content: (
            <p>
              We may share information with service providers where necessary to
              operate our business, such as payment processors, website
              providers and delivery companies. We do not sell your personal
              information.
            </p>
          ),
        },
        {
          title: "Cookies and analytics",
          content: (
            <p>
              Our website may use cookies or similar technologies to provide
              website functionality and understand how visitors use the site.
            </p>
          ),
        },
        {
          title: "Contact us",
          content: (
            <p>
              If you have a question about your personal information or this
              privacy policy, please contact WrappedWishes through our Contact
              page.
            </p>
          ),
        },
      ]}
    />
  );
}
