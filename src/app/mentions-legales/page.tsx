import type { Metadata } from "next"
import MentionsLegalesClient from "./mentions-legales-client"

export const metadata: Metadata = {
  title: "Mentions Légales",
  description:
    "Informations légales relatives à l'éditeur et à l'hébergement du site La Maison Dentaire.",
  alternates: { canonical: "/mentions-legales" },
}

export default function MentionsLegalesPage() {
  return <MentionsLegalesClient />
}
