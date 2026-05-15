import type { Metadata } from "next"
import FAQClient from "./faq-client"

export const metadata: Metadata = {
  title: "Questions Fréquentes",
  description:
    "Retrouvez les réponses aux questions les plus fréquemment posées sur nos services, tarifs et modalités pratiques.",
  alternates: { canonical: "/faq" },
  openGraph: {
    title: "Questions Fréquentes | La Maison Dentaire",
    url: "https://la-maison-dentaire.fr/faq",
  },
}

export default function FAQPage() {
  return <FAQClient />
}
