import Hero from "@/components/hero";
import Offerings from "@/components/offerings";
import HowItWorks from "@/components/howItWorks";
import About from "@/components/about";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Personalised Gifts & Party Supplies NZ",
  description:
    "Shop personalised birthday party bags, cake toppers, gift packs and custom party decorations from WrappedWishes.",
  alternates: {
    canonical: "/",
  },
};
export default function Home() {
  return (
    <>
      <Hero />
      <Offerings />
      <HowItWorks />
      <About />
    </>
  );
}
