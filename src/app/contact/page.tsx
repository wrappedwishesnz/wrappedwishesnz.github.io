import ContactPage from "@/components/contact";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Our Dunedin Gift Studio",
  description:
    "Contact WrappedWishes in Dunedin about personalised gifts, party supplies, custom orders and delivery throughout New Zealand.",
  alternates: { canonical: "/contact" },
  openGraph: { url: "/contact" },
};

export default function Page() {
  return <ContactPage />;
}
