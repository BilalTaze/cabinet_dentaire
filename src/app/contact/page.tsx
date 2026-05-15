import type { Metadata } from "next"
import ContactClient from "./contact-client"

export const metadata: Metadata = {
  title: "Nous Contacter",
  description:
    "Contactez La Maison Dentaire à Strasbourg par téléphone, email ou via notre formulaire en ligne.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Nous Contacter | La Maison Dentaire",
    url: "https://la-maison-dentaire.fr/contact",
  },
}

export default function ContactPage() {
  return <ContactClient />
}
