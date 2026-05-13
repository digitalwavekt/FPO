import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Authorized Farmer Products Store in Jasrapur | Shree Shyam Krishi Samiti",
  description: "Visit Shree Shyam Krishi Utpadan Prasanskaran evam Vipannan Sahakari Samiti Ltd., Jasrapur for trusted farmer-linked authentic products including coriander powder, red chilli powder, turmeric powder, and corn daliya.",
  keywords: ["FPO products", "farmer products near me", "organic spices jasrapur", "direct farmer products", "authentic agriculture products", "FPO India products", "farmer spices store", "local agricultural products"],
  authors: [{ name: "Shree Shyam Krishi Samiti" }],
  creator: "Shree Shyam Krishi Samiti",
  publisher: "Shree Shyam Krishi Samiti",
  metadataBase: new URL("https://shreeshyamfpo.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Authorized Farmer Products Store in Jasrapur | Shree Shyam Krishi Samiti",
    description: "Trusted farmer-linked authentic products directly from FPO-certified collectives. Visit us in Jasrapur.",
    url: "https://shreeshyamfpo.com",
    siteName: "Shree Shyam Krishi Samiti",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1500937386664-56b1bdf3857c?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Shree Shyam Krishi Samiti - Farmer Products Store",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Authorized Farmer Products Store in Jasrapur | Shree Shyam Krishi Samiti",
    description: "Trusted farmer-linked authentic products directly from FPO-certified collectives.",
    images: ["https://images.unsplash.com/photo-1500937386664-56b1bdf3857c?w=1200&q=80"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Shree Shyam Krishi Utpadan Prasanskaran evam Vipannan Sahakari Samiti Ltd., Jasrapur",
              "image": "https://images.unsplash.com/photo-1500937386664-56b1bdf3857c?w=800&q=80",
              "url": "https://shreeshyamfpo.com",
              "telephone": ["+919549145596", "+917014643207"],
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Near Panchayat Bhawan",
                "addressLocality": "Jasrapur",
                "addressRegion": "Rajasthan",
                "addressCountry": "IN",
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "26.0",
                "longitude": "74.0",
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                "opens": "08:00",
                "closes": "20:00",
              },
              "priceRange": "&#8377;",
              "description": "Authorized FPO-linked retail initiative offering authentic farmer products directly to local customers.",
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Shree Shyam Krishi Utpadan Prasanskaran evam Vipannan Sahakari Samiti Ltd.",
              "url": "https://shreeshyamfpo.com",
              "logo": "https://shreeshyamfpo.com/logo.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+919549145596",
                "contactType": "customer service",
                "areaServed": "IN",
                "availableLanguage": ["Hindi", "English"],
              },
              "sameAs": [],
            }),
          }}
        />
      </head>
      <body className={`${inter.className} antialiased bg-white text-gray-900`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
