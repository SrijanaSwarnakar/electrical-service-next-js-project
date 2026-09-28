import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

import Navbar from "@/components/Navbar";
import { company } from "@/data/company";
import Script from "next/script";
import Footer from "@/components/Footer";

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.prokopelec.com.au"),
  title: "Prokop Electrical Services | Electricians in Melbourne",
  description: "Prokop Electrical Services is a family-run electrical company based in Melbourne providing electrical, security, data, access control, home automation and split system AC services.",
  keywords: "Electrician Melbourne, residential electrician, commercial electrician, security systems, data cabling, home automation, split system AC",
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "https://www.prokopelec.com.au",
    title: "Prokop Electrical Services | Trusted Electricians in Melbourne",
    description: "Proud family-run electrical company based in Melbourne delivering a range of electrical services to a high standard.",
    siteName: "Prokop Electrical Services",
    images: [
      {
        url: "/images/fbpage.jpg",
        width: 1200,
        height: 630,
        alt: "Prokop Electrical Services Team",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Prokop Electrical Services | Electricians in Melbourne",
    description: "Proud family-run electrical company based in Melbourne delivering a range of electrical services to a high standard.",
    images: ["/images/fbpage.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: company.name,
    image: "https://www.prokopelec.com.au/images/page-logo.jpg",
    description: company.description,
    address: {
      "@type": "PostalAddress",
      streetAddress: company.address.line1,
      addressLocality: company.address.city,
      addressRegion: company.address.state,
      postalCode: company.address.postcode,
      addressCountry: company.address.country,
    },
    telephone: company.phone,
    email: company.email,
    url: "https://www.prokopelec.com.au",
    priceRange: "$$",
  };

  return (
    <html lang="en" className={inter.variable}>
      <head>
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col antialiased pt-[88px]">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
