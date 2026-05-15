import type { Metadata } from "next"
import { DM_Sans, Playfair_Display } from "next/font/google"
import "./globals.css"
import { Providers } from "./providers"
import { ScrollToTop } from "./scroll-to-top"
import Layout from "@/components/layout/Layout"
import { Analytics } from "@vercel/analytics/next"

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
})

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://la-maison-dentaire.fr"),
  title: {
    default: "Dentiste à Strasbourg | La Maison Dentaire",
    template: "%s | La Maison Dentaire",
  },
  description:
    "La Maison Dentaire à Strasbourg – soins dentaires, implants, urgences et esthétique. Cabinet conventionné face à l'arrêt de tram Elsau.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "La Maison Dentaire | Dentiste à Strasbourg",
    description:
      "Des soins dentaires d'excellence dans un cadre moderne et rassurant à Strasbourg – Elsau.",
    type: "website",
    locale: "fr_FR",
    url: "https://la-maison-dentaire.fr",
  },
  robots: {
    index: true,
    follow: true,
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  name: "La Maison Dentaire",
  address: {
    "@type": "PostalAddress",
    streetAddress: "21 Rue Léonard de Vinci",
    addressLocality: "Strasbourg",
    postalCode: "67200",
    addressCountry: "FR",
  },
  telephone: "+33388677257",
  email: "info@la-maison-dentaire.fr",
  priceRange: "€€",
  url: "https://la-maison-dentaire.fr",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={`${dmSans.variable} ${playfairDisplay.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Providers>
          <ScrollToTop />
          <Layout>{children}</Layout>
        </Providers>
        <Analytics />
      </body>
    </html>
  )
}
