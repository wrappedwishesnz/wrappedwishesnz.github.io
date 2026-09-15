import type { Metadata } from "next";
import { Fraunces, Nunito_Sans } from "next/font/google";
import { AppContextProvider } from "@/store";
import { Layout } from "@/layout";
import { GoogleAnalytics } from "@next/third-parties/google";

import "./globals.css";

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
const siteUrl = "https://www.wrappedwishes.nz";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Personalised Gifts & Party Supplies NZ | WrappedWishes",
    template: "%s | WrappedWishes NZ",
  },

  description:
    "Personalised gifts, birthday party bags, cake toppers and party decorations made with love in New Zealand.",

  openGraph: {
    title: "Personalised Gifts & Party Supplies NZ | WrappedWishes",
    description:
      "Personalised gifts, birthday party bags, cake toppers and party decorations made with love in New Zealand.",
    url: siteUrl,
    siteName: "WrappedWishes",
    type: "website",
    locale: "en_NZ",
    images: [
      {
        url: "/about.png",
        width: 1200,
        height: 630,
        alt: "WrappedWishes personalised gifts and party supplies",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Personalised Gifts & Party Supplies NZ | WrappedWishes",
    description:
      "Personalised gifts, birthday party bags, cake toppers and party decorations made with love in New Zealand.",
    images: ["/about.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "Personalised gifts and party supplies",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const businessJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "OnlineStore",
        "@id": `${siteUrl}/#business`,
        name: "WrappedWishes",
        url: siteUrl,
        logo: `${siteUrl}/logo.svg`,
        image: `${siteUrl}/about.png`,
        description:
          "A family-run Dunedin studio creating personalised gifts, party bags, cake toppers and party supplies for delivery across New Zealand.",
        email: "wrappedwishesnz@gmail.com",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Dunedin",
          addressCountry: "NZ",
        },
        areaServed: { "@type": "Country", name: "New Zealand" },
        sameAs: ["https://www.facebook.com/WrappedWishesNZ/"],
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: "WrappedWishes",
        inLanguage: "en-NZ",
        publisher: { "@id": `${siteUrl}/#business` },
      },
    ],
  };

  return (
    <html
      lang="en-NZ"
      className={`${nunito.variable} ${fraunces.variable} light h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(businessJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <AppContextProvider>
          <Layout>{children}</Layout>
        </AppContextProvider>
      </body>
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID ?? ""} />
    </html>
  );
}
