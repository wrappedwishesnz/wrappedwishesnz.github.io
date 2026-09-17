import Hero from "@/components/hero";
import Offerings from "@/components/offerings";
import HowItWorks from "@/components/howItWorks";
import About from "@/components/about";

import type { Metadata } from "next";
import Enquiry from "@/components/enquiry";
import FeaturedProducts from "@/components/featuredProducts";

export const metadata: Metadata = {
  title: { absolute: "Personalised Gifts & Party Supplies NZ | WrappedWishes" },
  description:
    "Shop handmade personalised gifts, birthday party bags, cake toppers and custom party supplies from our Dunedin studio, delivered throughout New Zealand.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Personalised Gifts & Party Supplies NZ | WrappedWishes",
    description:
      "Handmade personalised gifts, party bags, cake toppers and custom party supplies, made in Dunedin and delivered NZ-wide.",
    url: "/",
  },
};
export default function Home() {
  return (
    <>
      <Hero />
      <Offerings />
      <FeaturedProducts />
      <HowItWorks />
      <About />
      <Enquiry />
    </>
  );
}
