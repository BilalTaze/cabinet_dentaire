import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { BLOG_ARTICLES } from "@/config/cabinet"
import BlogArticleClient from "./blog-article-client"

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  return BLOG_ARTICLES.map(article => ({ slug: article.id }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = BLOG_ARTICLES.find(a => a.id === params.slug)
  if (!article) return {}
  return {
    title: article.title,
    description: article.excerpt,
    alternates: { canonical: `/blog/${article.id}` },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
      url: `https://la-maison-dentaire.fr/blog/${article.id}`,
    },
  }
}

export default function BlogArticlePage({ params }: Props) {
  const article = BLOG_ARTICLES.find(a => a.id === params.slug)
  if (!article) notFound()
  return <BlogArticleClient article={article} />
}
