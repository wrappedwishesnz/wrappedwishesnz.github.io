import type { Metadata } from "next";
import { Fraunces, Nunito_Sans } from "next/font/google";
import { AppContextProvider } from "@/store";
import { Layout } from "@/layout";
import { GoogleAnalytics } from "@next/third-parties/google";

import "./globals.css";

const GA_ID = "G-NQVJH0XF31";

const nunito = Nunito_Sans({
  subsets: ["latin", "latin-ext"],
  variable: "--font-nunito",
  weight: ["400", "500", "600", "700"],
});

const fraunces = Fraunces({
  subsets: ["latin", "latin-ext"],
  variable: "--font-fraunces",
  weight: ["400", "500", "600", "700"],
});
const siteUrl = "https://www.wrappedwishes.nz/";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "WrappedWishes | Personalised Gifts & Party Supplies NZ",
    template: "%s | WrappedWishes",
  },

  description:
    "Personalised gifts, birthday party bags, cake toppers and party decorations made with love in New Zealand.",

  keywords: [
    "personalised gifts NZ",
    "birthday party bags NZ",
    "party favours NZ",
    "cake toppers NZ",
    "personalised party supplies",
    "custom gifts NZ",
  ],

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "WrappedWishes | Personalised Gifts & Party Supplies NZ",
    description:
      "Personalised gifts, birthday party bags, cake toppers and party decorations made with love in New Zealand.",
    url: siteUrl,
    siteName: "WrappedWishes",
    type: "website",
    locale: "en_NZ",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "WrappedWishes personalised gifts and party supplies",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "WrappedWishes | Personalised Gifts & Party Supplies NZ",
    description:
      "Personalised gifts, birthday party bags, cake toppers and party decorations made with love in New Zealand.",
    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${nunito.variable} ${fraunces.variable} light h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <AppContextProvider>
          <Layout>{children}</Layout>
        </AppContextProvider>
      </body>
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID ?? ""} />
    </html>
  );
}
