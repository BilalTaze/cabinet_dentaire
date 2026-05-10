import { motion } from "framer-motion";
import { ShieldCheck, Heart, Users, FilePenLine, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CABINET_CONFIG } from "@/config/cabinet";
import { Calendar } from "lucide-react";
import { useState } from "react";
import cabinetReception from "@/assets/cabinet-reception.jpg";
import heroClinic from "@/assets/hero-clinic.jpg";
import dentalTech from "@/assets/dental-tech.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 } as const,
  visible: (i: number = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6 } }),
};

const Cabinet = () => {

  return (
    <>
      {/* Hero */}
      <section className="relative h-[32vh] md:h-[36vh] flex items-center overflow-hidden pt-[4.75rem] md:pt-[7.25rem]">
        <div className="absolute inset-0">
          <img src={cabinetReception} alt="Le Centre" className="w-full h-full object-cover" fetchPriority="high" decoding="sync" />
          <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        </div>
        <div className="container relative z-10">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-serif font-bold text-primary-foreground">Le Centre</motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-primary-foreground/80 text-lg mt-4 max-w-xl">
            Un espace dédié à votre santé bucco-dentaire à Strasbourg
          </motion.p>
        </div>
      </section>

      {/* Présentation */}
      <section className="section-padding bg-background">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <motion.div variants={fadeUp} custom={0} className="mb-6">
                <span className="text-accent font-medium text-sm uppercase tracking-wide block mb-2">Le centre</span>
                <div className="w-8 h-0.5 bg-accent" />
              </motion.div>

              <motion.h2 variants={fadeUp} custom={1} className="section-title mb-6">
                Un espace moderne dédié à votre santé bucco-dentaire
              </motion.h2>

              <motion.p variants={fadeUp} custom={2} className="text-muted-foreground leading-relaxed mb-8">
                La Maison Dentaire accueille adultes et enfants à Strasbourg – Elsau dans un environnement moderne dédié à la santé bucco-dentaire. Le centre dispose de plusieurs salles de soins, d'un espace d'accueil ainsi que d'équipements numériques dédiés au diagnostic et aux traitements.
              </motion.p>

              <motion.div variants={fadeUp} custom={3} className="space-y-6 mb-8">
                {[
                  {
                    icon: MapPin,
                    title: "Facilement accessible",
                    desc: "Situé face à l'arrêt de tram Elsau et à proximité des principaux axes, le centre est facilement accessible en transports en commun comme en voiture. Un parking relais est disponible à proximité.",
                  },
                  {
                    icon: Users,
                    title: "Organisation des soins",
                    desc: "L'organisation du centre a été pensée afin d'assurer un parcours de soins fluide et un accompagnement adapté à chaque patient.",
                  },
                ].map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="flex gap-4 items-start">
                    <div className="w-14 h-14 rounded-xl bg-mint-light flex items-center justify-center shrink-0">
                      <Icon size={22} className="text-accent" />
                    </div>
                    <div>
                      <h3 className="font-serif font-semibold text-accent text-base mb-1">{title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </motion.div>

              <motion.div variants={fadeUp} custom={4}>
                <Button size="lg" className="bg-accent hover:bg-mint-dark text-accent-foreground font-medium px-8" style={{ boxShadow: "var(--shadow-button)" }} asChild>
                  <a href={CABINET_CONFIG.doctolibProfileUrl} target="_blank" rel="noopener noreferrer">
                    <Calendar size={20} className="mr-2" />
                    Prendre rendez-vous
                  </a>
                </Button>
              </motion.div>
            </motion.div>

            <motion.img
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              src={heroClinic}
              alt="Intérieur du cabinet"
              className="rounded-3xl w-full object-cover aspect-[4/5] hidden md:block"
              style={{ boxShadow: "var(--shadow-card)" }}
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </section>

      {/* Valeurs */}
      <section className="section-padding bg-ivory">
        <div className="container">
          <div className="text-center mb-12">
            <span className="text-accent font-medium text-sm uppercase tracking-wide">Nos engagements</span>
            <h2 className="section-title mt-2 mb-4">Notre approche</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: FilePenLine, title: "Accessibilité", desc: "Des soins conventionnés et des solutions adaptées à chaque patient." },
              { icon: Heart, title: "Bienveillance", desc: "Une pris en charge attentive, humaine et rassurante." },
              { icon: ShieldCheck, title: "Hygiène & Sécurité", desc: "Protocoles rigoureux de stérilisation et traçabilité numérique des instruments." },
              { icon: Users, title: "Transparence", desc: "Des explications claires et des devis détaillés avant chaque traitement." },
            ].map((v, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i} className="glass-card p-6 text-center">
                <div className="w-16 h-16 rounded-2xl bg-mint-light flex items-center justify-center mx-auto mb-4">
                  <v.icon size={26} className="text-accent" />
                </div>
                <h3 className="font-[Cormorant] font-bold text-lg mb-2">{v.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16 bg-primary text-center">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-foreground mb-4">Prêt à nous rendre visite ?</h2>
          <p className="text-primary-foreground/70 mb-8 max-w-lg mx-auto">Prenez rendez-vous en ligne et découvrez notre cabinet en personne.</p>
          <Button size="lg" className="bg-accent hover:bg-mint-dark text-accent-foreground" style={{ boxShadow: "var(--shadow-button)" }} asChild>
            <a href={CABINET_CONFIG.doctolibProfileUrl} target="_blank" rel="noopener noreferrer">
              <Calendar size={20} className="mr-2" />
              Prendre rendez-vous
            </a>
          </Button>
        </div>
      </section>
    </>
  );
};

export default Cabinet;
