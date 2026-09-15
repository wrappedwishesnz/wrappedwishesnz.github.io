import FAQPage from "@/components/faq";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Personalised Gift & Party Supply FAQs",
  description:
    "Answers about WrappedWishes custom orders, personalisation, turnaround times, returns and delivery across New Zealand.",
  alternates: { canonical: "/faq" },
  openGraph: { url: "/faq" },
};

export default function Page() {
  return <FAQPage />;
}
