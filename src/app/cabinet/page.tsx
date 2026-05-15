import type { Metadata } from "next"
import CabinetClient from "./cabinet-client"

export const metadata: Metadata = {
  title: "Notre Cabinet Dentaire",
  description:
    "Découvrez La Maison Dentaire à Strasbourg – Elsau. Cabinet dentaire moderne, conventionné, accessible PMR, face à l'arrêt de tram Elsau.",
  alternates: { canonical: "/cabinet" },
  openGraph: {
    title: "Notre Cabinet Dentaire | La Maison Dentaire",
    url: "https://la-maison-dentaire.fr/cabinet",
  },
}

export default function CabinetPage() {
  return <CabinetClient />
}
