import type { Metadata } from "next"
import PolitiqueConfidentialiteClient from "./politique-confidentialite-client"

export const metadata: Metadata = {
  title: "Politique de Confidentialité",
  description:
    "Comment La Maison Dentaire collecte, utilise et protège vos données personnelles.",
  alternates: { canonical: "/politique-confidentialite" },
}

export default function PolitiqueConfidentialitePage() {
  return <PolitiqueConfidentialiteClient />
}
