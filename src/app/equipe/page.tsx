import type { Metadata } from "next"
import EquipeClient from "./equipe-client"

export const metadata: Metadata = {
  title: "Notre Équipe",
  description:
    "Rencontrez l'équipe de chirurgiens-dentistes de La Maison Dentaire à Strasbourg. Des praticiens diplômés et à l'écoute de chaque patient.",
  alternates: { canonical: "/equipe" },
  openGraph: {
    title: "Notre Équipe | La Maison Dentaire",
    url: "https://la-maison-dentaire.fr/equipe",
  },
}

export default function EquipePage() {
  return <EquipeClient />
}
