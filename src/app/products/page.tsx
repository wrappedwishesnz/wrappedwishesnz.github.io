import { Suspense } from "react";
import { Metadata } from "next";
import {
  ProductsContent,
  FallbackContent,
} from "@/components/products/content";

export const metadata: Metadata = {
  title: "Personalised Gifts & Party Supplies",
  description:
    "Browse personalised party bags, custom cake toppers, keepsake gifts and paint-your-own plaster kits, handmade in Dunedin with New Zealand-wide delivery.",
  alternates: { canonical: "/products" },
  openGraph: {
    title: "Personalised Gifts & Party Supplies NZ",
    description:
      "Browse handmade personalised gifts and party supplies from WrappedWishes in Dunedin.",
    url: "/products",
  },
};

export default function ProductsPage() {
  return (
    <Suspense fallback={<FallbackContent />}>
      <ProductsContent />
    </Suspense>
  );
}
