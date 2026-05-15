'use client'

import { motion } from "framer-motion"

interface PageHeroProps {
  label: string
  title: string
  subtitle: string
}

const PageHero = ({ label, title, subtitle }: PageHeroProps) => (
  <section className="bg-ivory pt-[4.75rem] md:pt-[7.25rem] border-b border-border">
    <div className="container py-8 md:py-10">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <span className="text-accent font-medium text-sm uppercase tracking-wide block mb-2">{label}</span>
        <div className="w-8 h-0.5 bg-accent mb-6" />
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground leading-tight mb-4">{title}</h1>
        <p className="text-muted-foreground text-lg max-w-xl leading-relaxed">{subtitle}</p>
      </motion.div>
    </div>
  </section>
)

export default PageHero
