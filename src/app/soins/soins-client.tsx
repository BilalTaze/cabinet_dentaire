'use client'

import { motion } from "framer-motion"
import { Calendar, Clock, Shield, Heart, ArrowRight, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CABINET_CONFIG, SOINS } from "@/config/cabinet"
import { useState, useRef, useEffect } from "react"
import PageHero from "@/components/layout/PageHero"

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6 } }),
}

const SoinsClient = () => {
  const [activeSoin, setActiveSoin] = useState<string | null>(null)
  const selected = SOINS.find(s => s.id === activeSoin)
  const detailRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (selected && detailRef.current) {
      const headerOffset = 112
      const y = detailRef.current.getBoundingClientRect().top + window.scrollY - headerOffset
      window.scrollTo({ top: y, behavior: "smooth" })
    }
  }, [activeSoin])

  return (
    <>
      <PageHero label="Nos services" title="Nos Services" subtitle="Prévention, soins et suivi dentaire." />

      <section className="section-padding bg-background">
        <div className="container">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
            {SOINS.map((soin, i) => (
              <motion.button
                key={soin.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i * 0.3}
                onClick={() => setActiveSoin(activeSoin === soin.id ? null : soin.id)}
                className={`glass-card p-6 text-left transition-all ${activeSoin === soin.id ? "ring-2 ring-accent" : ""}`}
              >
                <div className="w-20 h-20 shrink-0 rounded-xl overflow-hidden mb-4">
                  <img src={`/logo_accueil/logo_page_${i + 1}.jpeg`} alt={soin.title} className="w-full h-full object-cover" loading="lazy" decoding="async" />
                </div>
                <h3 className="font-serif font-bold text-lg mb-2">{soin.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{soin.shortDesc}</p>
                <span className="mt-3 text-accent text-sm font-medium inline-flex items-center gap-1">
                  {activeSoin === soin.id ? "Fermer" : "Détails"} <ArrowRight size={14} />
                </span>
              </motion.button>
            ))}
          </div>

          {selected && (
            <motion.div ref={detailRef} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="glass-card p-8 max-w-3xl mx-auto">
              <h2 className="font-serif font-bold text-2xl mb-4">{selected.title}</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">{selected.description}</p>
              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                {[
                  { label: "Quand consulter ?", value: selected.whenToConsult, icon: AlertCircle },
                  { label: "Déroulement", value: selected.procedure, icon: Heart },
                  { label: "Durée", value: selected.duration, icon: Clock },
                  { label: "Confort", value: selected.comfort, icon: Shield },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-mint-light flex items-center justify-center shrink-0">
                      <item.icon size={18} className="text-accent" />
                    </div>
                    <div>
                      <p className="font-medium text-sm mb-1">{item.label}</p>
                      <p className="text-muted-foreground text-sm">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="bg-mint-light rounded-xl p-4 mb-6">
                <p className="text-sm font-medium mb-1">💡 Conseils après le soin</p>
                <p className="text-muted-foreground text-sm">{selected.afterCare}</p>
              </div>
              <Button className="bg-accent hover:bg-mint-dark text-accent-foreground" style={{ boxShadow: "var(--shadow-button)" }} asChild>
                <a href={CABINET_CONFIG.doctolibProfileUrl} target="_blank" rel="noopener noreferrer">
                  <Calendar size={18} className="mr-2" />
                  Prendre rendez-vous
                </a>
              </Button>
            </motion.div>
          )}
        </div>
      </section>
    </>
  )
}

export default SoinsClient
