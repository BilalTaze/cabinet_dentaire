import type { Metadata } from "next"
import HomeClient from "./home-client"

export const metadata: Metadata = {
  title: "Dentiste à Strasbourg",
  description:
    "La Maison Dentaire à Strasbourg – soins dentaires, implants, urgences et esthétique. Cabinet conventionné face à l'arrêt de tram Elsau.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "La Maison Dentaire | Dentiste à Strasbourg",
    description:
      "Des soins dentaires d'excellence dans un cadre moderne et rassurant à Strasbourg – Elsau.",
    url: "https://la-maison-dentaire.fr",
  },
}

export default function HomePage() {
  return <HomeClient />
}
