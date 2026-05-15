import type { Metadata } from "next"
import BlogClient from "./blog-client"

export const metadata: Metadata = {
  title: "Conseils Dentaires",
  description:
    "Des informations simples pour mieux comprendre et préserver votre santé bucco-dentaire.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Conseils Dentaires | La Maison Dentaire",
    url: "https://la-maison-dentaire.fr/blog",
  },
}

export default function BlogPage() {
  return <BlogClient />
}
