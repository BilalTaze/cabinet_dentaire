'use client'

import { motion } from "framer-motion"
import { CABINET_CONFIG } from "@/config/cabinet"
import PageHero from "@/components/layout/PageHero"

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6 } }),
}

const Section = ({ title, children, i }: { title: string; children: React.ReactNode; i: number }) => (
  <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i} className="mb-10">
    <h2 className="text-xl font-serif font-bold text-foreground mb-4 pb-2 border-b border-border">{title}</h2>
    <div className="text-muted-foreground text-sm leading-relaxed space-y-2">{children}</div>
  </motion.div>
)

const MentionsLegalesClient = () => (
  <>
    <PageHero label="Légal" title="Mentions légales" subtitle="Informations légales relatives à l'éditeur et à l'hébergement du site." />

    <section className="section-padding bg-background">
      <div className="container max-w-3xl">

        <Section title="1. Éditeur du site" i={0}>
          <p><span className="font-medium text-foreground">Raison sociale :</span> {CABINET_CONFIG.name}</p>
          <p><span className="font-medium text-foreground">Adresse :</span> {CABINET_CONFIG.address}, {CABINET_CONFIG.zip} {CABINET_CONFIG.city}</p>
          <p><span className="font-medium text-foreground">Téléphone :</span> {CABINET_CONFIG.phone}</p>
          <p><span className="font-medium text-foreground">Email :</span> {CABINET_CONFIG.email}</p>
          <p><span className="font-medium text-foreground">Numéro SIRET :</span> 938 860 038 00026</p>
          <p><span className="font-medium text-foreground">Ordre professionnel :</span> Ordre des Chirurgiens-Dentistes du Bas-Rhin</p>
        </Section>

        <Section title="2. Directeur de la publication" i={1}>
          <p>Le directeur de la publication est le responsable du centre {CABINET_CONFIG.name}.</p>
          <p>Pour toute question : <a href={`mailto:${CABINET_CONFIG.email}`} className="text-accent underline">{CABINET_CONFIG.email}</a></p>
        </Section>

        <Section title="3. Hébergement" i={2}>
          <p><span className="font-medium text-foreground">Hébergeur :</span> Vercel Inc.</p>
          <p><span className="font-medium text-foreground">Adresse :</span> 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis</p>
          <p><span className="font-medium text-foreground">Site web :</span> vercel.com</p>
        </Section>

        <Section title="4. Propriété intellectuelle" i={3}>
          <p>
            L'ensemble des contenus présents sur ce site (textes, images, logos, vidéos, icônes) est protégé par le droit d'auteur et demeure la propriété exclusive de {CABINET_CONFIG.name}, sauf mention contraire.
          </p>
          <p>
            Toute reproduction, distribution, modification ou utilisation de ces contenus, même partielle, sans autorisation écrite préalable est strictement interdite.
          </p>
        </Section>

        <Section title="5. Limitation de responsabilité" i={4}>
          <p>
            {CABINET_CONFIG.name} s'efforce d'assurer l'exactitude et la mise à jour des informations diffusées sur ce site. Toutefois, nous ne pouvons garantir l'exactitude, la précision ou l'exhaustivité des informations mises à disposition.
          </p>
          <p>
            Les informations présentes sur ce site ont un caractère purement indicatif et ne sauraient se substituer à une consultation médicale.
          </p>
        </Section>

        <Section title="6. Liens hypertextes" i={5}>
          <p>
            Ce site peut contenir des liens vers des sites externes. {CABINET_CONFIG.name} n'exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu.
          </p>
        </Section>

        <Section title="7. Droit applicable" i={6}>
          <p>
            Le présent site est soumis au droit français. En cas de litige, les tribunaux français seront seuls compétents.
          </p>
        </Section>

        <p className="text-xs text-muted-foreground mt-8">Dernière mise à jour : mai 2025</p>
      </div>
    </section>
  </>
)

export default MentionsLegalesClient
