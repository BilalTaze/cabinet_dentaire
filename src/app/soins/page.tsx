import type { Metadata } from "next"
import SoinsClient from "./soins-client"

export const metadata: Metadata = {
  title: "Nos Soins Dentaires",
  description:
    "Soins conservateurs, implants, parodontologie, chirurgie, urgences dentaires et pédodontie à Strasbourg.",
  alternates: { canonical: "/soins" },
  openGraph: {
    title: "Nos Soins Dentaires | La Maison Dentaire",
    url: "https://la-maison-dentaire.fr/soins",
  },
}

export default function SoinsPage() {
  return <SoinsClient />
}
