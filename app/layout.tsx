import type { Metadata } from "next";
import { Rufina, Noto_Sans } from "next/font/google";
import "./globals.css";

const rufina = Rufina({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-display",
});

const notoSans = Noto_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "JV Plumbing | Sacramento Licensed Plumber — 5 Stars Since 2017",
  description:
    "JV Plumbing — Sacramento's trusted, CA-licensed plumber since 2017. Perfect 5-star rating. Fair prices, on time, every time. Call Jesus Hernandez at (916) 591-8748.",
  keywords:
    "plumber Sacramento, licensed plumber Sacramento, drain clearing Sacramento, pipe repair Sacramento, JV Plumbing, 5 star plumber Sacramento",
  openGraph: {
    title: "JV Plumbing | 5-Star Sacramento Plumber Since 2017",
    description:
      "CA-licensed, perfect 5-star rating. Fair prices, always on time. Call (916) 591-8748.",
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
    <html lang="en" className={`${rufina.variable} ${notoSans.variable}`}>
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
                  dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
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
      <body style={{ fontFamily: "var(--font-body), system-ui, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
