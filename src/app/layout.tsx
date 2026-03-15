import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import PageShell from "@/components/PageShell";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.pnwx.com"),
  title: {
    default: "Pacific Northwest X-Ray Inc. — X-Ray & Radiology Equipment Supplier",
    template: "%s | Pacific Northwest X-Ray Inc.",
  },
  description:
    "Pacific Northwest X-Ray Inc. is your trusted source for X-Ray and radiology equipment, supplies, parts, and accessories. Serving medical, veterinary, and podiatric professionals nationwide since 1997.",
  keywords: [
    "X-Ray equipment",
    "radiology supplies",
    "medical imaging",
    "lead aprons",
    "radiation protection",
    "X-Ray parts",
    "portable X-Ray",
    "MRI accessories",
    "QC phantoms",
    "Pacific Northwest X-Ray",
  ],
  authors: [{ name: "Pacific Northwest X-Ray Inc." }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Pacific Northwest X-Ray Inc.",
    title: "Pacific Northwest X-Ray Inc. — X-Ray & Radiology Equipment Supplier",
    description:
      "Your complete source for X-Ray and radiology equipment, supplies, parts, and accessories. Serving customers nationwide since 1997.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pacific Northwest X-Ray Inc.",
    description:
      "Your complete source for X-Ray and radiology equipment, supplies, parts, and accessories.",
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
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Pacific Northwest X-Ray Inc.",
              description:
                "Medical equipment supplier specializing in X-Ray and radiology equipment, supplies, parts and accessories.",
              url: "https://www.pnwx.com",
              telephone: "503-667-3000",
              email: "SalesD@pnwx.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "P.O. Box 625",
                addressLocality: "Gresham",
                addressRegion: "OR",
                postalCode: "97030",
                addressCountry: "US",
              },
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                ],
                opens: "08:00",
                closes: "17:00",
              },
              foundingDate: "1997",
              areaServed: {
                "@type": "Country",
                name: "United States",
              },
              priceRange: "$$",
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Pacific Northwest X-Ray Inc.",
              url: "https://www.pnwx.com",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+1-800-827-9729",
                contactType: "sales",
                areaServed: "US",
                availableLanguage: "English",
              },
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased bg-white text-gray-800`}>
        <PageShell>{children}</PageShell>
      </body>
    </html>
  );
}
