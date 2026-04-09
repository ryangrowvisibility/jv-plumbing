import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "JV Plumbing | Sacramento Plumber — Fair Prices, 5-Star Rated Since 2017",
  description:
    "JV Plumbing — Sacramento's trusted licensed plumber since 2017. Fair prices, on time, 5-star rated. Call Jesus Hernandez at (916) 591-8748.",
  keywords:
    "plumber Sacramento, licensed plumber Sacramento, drain clearing Sacramento, pipe repair Sacramento, JV Plumbing",
  openGraph: {
    title: "JV Plumbing | Sacramento Plumber — 5 Stars Since 2017",
    description:
      "Sacramento's licensed plumber. Fair prices, on time, 5-star rated. Call (916) 591-8748.",
    type: "website",
    locale: "en_US",
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
              "@type": "Plumber",
              name: "JV Plumbing",
              telephone: "(916) 591-8748",
              address: {
                "@type": "PostalAddress",
                streetAddress: "949 North Ave Unit 4",
                addressLocality: "Sacramento",
                addressRegion: "CA",
                postalCode: "95838",
                addressCountry: "US",
              },
              priceRange: "$$",
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                    "Sunday",
                  ],
                  opens: "07:00",
                  closes: "19:00",
                },
              ],
              areaServed: "Sacramento, CA",
              foundingDate: "2017",
            }),
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
