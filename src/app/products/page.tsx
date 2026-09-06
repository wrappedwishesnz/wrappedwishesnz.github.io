import { Suspense } from "react";
import { Metadata } from "next";
import {
  ProductsContent,
  FallbackContent,
} from "@/components/products/content";

export const metadata: Metadata = {
  title: "Shop | Wrapped Wishes",
  description:
    "Browse personalised gifts, party favours, cake toppers, gift hampers & keepsakes.",
  alternates: { canonical: "https://www.wrappedwishes.nz/products" },
};

export default function ProductsPage() {
  return (
    <Suspense fallback={<FallbackContent />}>
      <ProductsContent />
    </Suspense>
  );
}
