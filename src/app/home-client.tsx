'use client'

import { motion } from "framer-motion"
import { Calendar, Phone, AlertCircle, ChevronRight, MapPin, Clock, Accessibility, ArrowRight, Radio, Camera, ScanLine, Box, ShieldCheck, Cpu, ChevronLeft, ChevronRight as ChevronRightIcon, Train, Navigation as NavigationIcon, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CABINET_CONFIG, SOINS, TEAM_MEMBERS, TECHNOLOGIES } from "@/config/cabinet"
import heroImg from "@/assets/cabinet1.webp"
import Image from "next/image"
import { useRef, useState } from "react"
import Link from "next/link"

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6 } }),
}

const cabinetGalleryImages = [
  "/images/image_accueil/cabinet1.webp",
  "/images/image_accueil/accueil.webp",
  "/images/image_accueil/cabinet2.webp",
]

/* ============ HERO ============ */
const HeroSection = () => (
  <section className="relative min-h-[75vh] flex items-center overflow-hidden pt-[4.75rem] md:pt-[7.25rem]">
    <div className="absolute inset-0">
      <Image src={heroImg} alt="Cabinet dentaire moderne" fill priority className="object-cover scale-100" />
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
    </div>

    <div className="container relative z-10 py-12 md:py-16">
      <motion.div initial="hidden" animate="visible" className="max-w-xl">
        <motion.p variants={fadeUp} custom={0} className="text-accent font-medium text-sm md:text-base mb-4 tracking-wide uppercase">
          {CABINET_CONFIG.name}
        </motion.p>
        <motion.h1 variants={fadeUp} custom={1} className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary-foreground leading-tight mb-6">
          {CABINET_CONFIG.slogan}
        </motion.h1>
        <motion.p variants={fadeUp} custom={2} className="text-primary-foreground/80 text-lg md:text-xl leading-relaxed mb-8 max-w-xl font-sans">
          {CABINET_CONFIG.subtitle}
        </motion.p>
        <motion.div variants={fadeUp} custom={3} className="flex flex-col sm:flex-row gap-3">
          <Button size="lg" className="bg-accent hover:bg-mint-dark text-accent-foreground font-medium text-base px-8" style={{ boxShadow: "var(--shadow-button)" }} asChild>
            <a href={CABINET_CONFIG.doctolibProfileUrl} target="_blank" rel="noopener noreferrer">
              <Calendar size={20} className="mr-2" />
              Prendre rendez-vous
            </a>
          </Button>
          <Button size="lg" className="bg-card text-foreground hover:bg-card/90 font-medium text-base border border-border" asChild>
            <Link href="/contact">
              <Phone size={18} className="mr-2" />
              Nous contacter
            </Link>
          </Button>
        </motion.div>
      </motion.div>
    </div>
  </section>
)

/* ============ TRUST BANNER ============ */
const TrustBanner = () => {
  const items = [
    { icon: AlertCircle, label: "Urgences acceptées" },
    { icon: ShieldCheck, label: "Conventionné" },
    { icon: Accessibility, label: "Accès PMR" },
  ]
  return (
    <section className="bg-card border-y border-border">
      <div className="container py-6 flex flex-wrap items-center justify-center gap-4 md:gap-8">
        {items.map(({ icon: Icon, label }) => (
          <div key={label} className="trust-badge">
            <Icon size={18} className="text-accent" />
            <span>{label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

/* ============ CABINET PRESENTATION ============ */
const CabinetPresentation = () => {
  const [activeCabinetImg, setActiveCabinetImg] = useState(0)

  const prevCabinetImg = () => setActiveCabinetImg(i => (i - 1 + cabinetGalleryImages.length) % cabinetGalleryImages.length)
  const nextCabinetImg = () => setActiveCabinetImg(i => (i + 1) % cabinetGalleryImages.length)

  return (
    <section className="py-10 md:py-20 bg-background">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.span variants={fadeUp} custom={0} className="text-accent font-medium text-sm uppercase tracking-wide">  </motion.span>
            <motion.h2 variants={fadeUp} custom={1} className="section-title mt-2 mb-6">Bienvenue à La Maison Dentaire</motion.h2>
            <motion.p variants={fadeUp} custom={2} className="text-muted-foreground leading-relaxed mb-4">
              La Maison Dentaire propose une prise en charge complète de la santé bucco-dentaire : soins conservateurs, urgences dentaires, prévention, esthétique du sourire et réhabilitation implantaire. Notre équipe accompagne chaque patient avec une attention particulière portée au confort, à l'écoute et à la qualité des soins.
            </motion.p>
            <motion.p variants={fadeUp} custom={3} className="text-muted-foreground leading-relaxed mb-6">
              Pensé pour le confort des patients et l'organisation des soins, le centre dispose de plusieurs salles de soins, d'un espace d'accueil moderne et d'équipements numériques dédiés au diagnostic et aux traitements, afin d'assurer des soins précis et adaptés à chacun.
            </motion.p>
            <motion.div variants={fadeUp} custom={4}>
              <Button variant="outline" className="border-accent text-accent hover:bg-mint-light" asChild>
                <Link href="/cabinet">Découvrir le centre <ChevronRight size={16} className="ml-1" /></Link>
              </Button>
            </motion.div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="space-y-3 max-w-lg mx-auto md:max-w-none w-full">
            <div className="relative rounded-2xl overflow-hidden aspect-[7/5] md:max-w-[560px] w-full mx-auto" style={{ boxShadow: "var(--shadow-card)" }}>
              <Image
                src={cabinetGalleryImages[activeCabinetImg]}
                alt="Cabinet dentaire"
                fill
                className="object-cover transition-all duration-500"
              />
              <button
                onClick={prevCabinetImg}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-card/80 backdrop-blur-sm flex items-center justify-center hover:bg-card transition-colors"
                aria-label="Image précédente"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={nextCabinetImg}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-card/80 backdrop-blur-sm flex items-center justify-center hover:bg-card transition-colors"
                aria-label="Image suivante"
              >
                <ChevronRightIcon size={20} />
              </button>
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-card/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium">
                {activeCabinetImg + 1}/{cabinetGalleryImages.length}
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2 md:max-w-[300px] mx-auto w-full">
              {cabinetGalleryImages.map((label, i) => (
                <button
                  key={i}
                  onClick={() => setActiveCabinetImg(i)}
                  className={`relative rounded-xl overflow-hidden aspect-square transition-all ${activeCabinetImg === i ? "ring-2 ring-accent scale-[0.97]" : "opacity-70 hover:opacity-100"}`}
                >
                  <Image src={label} alt={`Vue du cabinet ${i + 1}`} fill className="object-cover" />
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

/* ============ SERVICES ============ */
const SoinsSection = () => {
  const [activeSoinIndex, setActiveSoinIndex] = useState(0)
  const mobileCarouselRef = useRef<HTMLDivElement | null>(null)
  const mobileSlideRefs = useRef<(HTMLDivElement | null)[]>([])

  const scrollToSoin = (index: number) => {
    const nextIndex = (index + SOINS.length) % SOINS.length
    const slide = mobileSlideRefs.current[nextIndex]
    if (!slide) return
    slide.scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" })
    setActiveSoinIndex(nextIndex)
  }

  const handleMobileScroll = () => {
    const track = mobileCarouselRef.current
    if (!track) return
    const nextIndex = Math.round(track.scrollLeft / track.clientWidth)
    setActiveSoinIndex(current => (current === nextIndex ? current : nextIndex))
  }

  return (
    <section className="py-10 md:py-14 bg-ivory">
      <div className="container">
        <div className="text-center mb-12">
          <span className="text-accent font-medium text-sm uppercase tracking-wide">Nos services</span>
          <h2 className="section-title mt-2 mb-4">Des soins adaptés à chaque besoin</h2>
          <p className="section-subtitle mx-auto">Prévention, soins et suivi dentaire.</p>
        </div>

        <div className="md:hidden">
          <div
            ref={mobileCarouselRef}
            onScroll={handleMobileScroll}
            className="flex gap-4 overflow-x-auto overflow-y-hidden snap-x snap-mandatory scroll-smooth px-4 pb-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          >
            {SOINS.map((soin, i) => (
              <div
                key={soin.id}
                ref={el => { mobileSlideRefs.current[i] = el }}
                className="w-[85%] shrink-0 snap-start"
              >
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0} className="glass-card p-6 flex h-full flex-col overflow-hidden">
                  <div className="w-20 h-20 shrink-0 rounded-xl overflow-hidden mb-4">
                    <Image src={`/images/logo_accueil/logo_page_${i + 1}.jpeg`} alt={soin.title} width={80} height={80} className="w-full h-full object-cover" />
                  </div>
                  <h3 className="font-serif font-bold text-lg mb-2">{soin.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-1">{soin.shortDesc}</p>
                  <Link href="/soins" className="mt-4 text-accent text-sm font-medium inline-flex items-center gap-1 hover:gap-2 transition-all">
                    En savoir plus <ArrowRight size={14} />
                  </Link>
                </motion.div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex items-center justify-center gap-4">
            <button type="button" onClick={() => scrollToSoin(activeSoinIndex - 1)} className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-sm transition-colors hover:bg-secondary" aria-label="Voir le soin précédent">
              <ChevronLeft size={18} />
            </button>
            <button type="button" onClick={() => scrollToSoin(activeSoinIndex + 1)} className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-sm transition-colors hover:bg-secondary" aria-label="Voir le soin suivant">
              <ChevronRightIcon size={18} />
            </button>
          </div>
        </div>

        <div className="hidden md:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {SOINS.map((soin, i) => (
            <motion.div key={soin.id} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i * 0.5} className="glass-card p-6 flex flex-col">
              <div className="w-20 h-20 shrink-0 rounded-xl overflow-hidden mb-4">
                <Image src={`/images/logo_accueil/logo_page_${i + 1}.jpeg`} alt={soin.title} width={80} height={80} className="w-full h-full object-cover" />
              </div>
              <h3 className="font-serif font-bold text-lg mb-2">{soin.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed flex-1">{soin.shortDesc}</p>
              <Link href="/soins" className="mt-4 text-accent text-sm font-medium inline-flex items-center gap-1 hover:gap-2 transition-all">
                En savoir plus <ArrowRight size={14} />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ============ TEAM ============ */
const MemberCard = ({ member, i }: { member: typeof TEAM_MEMBERS[0]; i: number }) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={fadeUp}
    custom={i}
    whileHover={{ y: -6, transition: { type: "spring", stiffness: 300, damping: 20 } }}
    className="bg-card rounded-2xl overflow-hidden group cursor-default"
    style={{ boxShadow: "var(--shadow-card)" }}
  >
    <div className="relative h-56 bg-gradient-to-b from-mint-light/50 to-mint-light flex items-center justify-center overflow-hidden">
      <span className="font-serif font-bold text-[5rem] leading-none text-accent/20 select-none transition-all duration-300 group-hover:scale-125 group-hover:text-accent/30">
        {member.name.replace(/Dr\.\s*/, "").charAt(0)}
      </span>
      <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
    <div className="px-5 py-4 text-center">
      <h3 className="font-serif font-bold text-base text-foreground">{member.name}</h3>
      <p className="text-accent text-sm font-medium mt-0.5">{member.title}</p>
    </div>
  </motion.div>
)

const TeamSection = () => {
  const firstRow = TEAM_MEMBERS.slice(0, 4)
  const secondRow = TEAM_MEMBERS.slice(4)

  const mobilePairs: (typeof TEAM_MEMBERS)[] = []
  for (let i = 0; i < TEAM_MEMBERS.length; i += 2) {
    mobilePairs.push(TEAM_MEMBERS.slice(i, i + 2))
  }

  const [activeMobileSlide, setActiveMobileSlide] = useState(0)
  const mobileCarouselRef = useRef<HTMLDivElement | null>(null)
  const mobileSlideRefs = useRef<(HTMLDivElement | null)[]>([])

  const scrollToSlide = (index: number) => {
    const nextIndex = (index + mobilePairs.length) % mobilePairs.length
    const slide = mobileSlideRefs.current[nextIndex]
    if (!slide) return
    slide.scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" })
    setActiveMobileSlide(nextIndex)
  }

  const handleMobileScroll = () => {
    const track = mobileCarouselRef.current
    if (!track) return
    const nextIndex = Math.round(track.scrollLeft / track.clientWidth)
    setActiveMobileSlide(current => (current === nextIndex ? current : nextIndex))
  }

  return (
    <section className="py-10 md:py-14 bg-ivory">
      <div className="container">
        <div className="text-center mb-12">
          <span className="text-accent font-medium text-sm uppercase tracking-wide">Notre équipe</span>
          <h2 className="section-title mt-2 mb-4">Des praticiens à votre écoute</h2>
          <p className="section-subtitle mx-auto">Une équipe attentive pour vous accompagner au quotidien.</p>
        </div>

        <div className="md:hidden">
          <div ref={mobileCarouselRef} onScroll={handleMobileScroll} className="flex overflow-x-auto overflow-y-hidden snap-x snap-mandatory scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            {mobilePairs.map((pair, slideIndex) => (
              <div key={slideIndex} ref={el => { mobileSlideRefs.current[slideIndex] = el }} className="w-full shrink-0 snap-start grid grid-cols-2 gap-3 px-1">
                {pair.map((member, j) => (
                  <MemberCard key={member.id} member={member} i={slideIndex * 2 + j} />
                ))}
              </div>
            ))}
          </div>
          <div className="mt-6 flex items-center justify-center gap-4">
            <button type="button" onClick={() => scrollToSlide(activeMobileSlide - 1)} className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-sm transition-colors hover:bg-secondary" aria-label="Voir les praticiens précédents">
              <ChevronLeft size={18} />
            </button>
            <button type="button" onClick={() => scrollToSlide(activeMobileSlide + 1)} className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-sm transition-colors hover:bg-secondary" aria-label="Voir les praticiens suivants">
              <ChevronRightIcon size={18} />
            </button>
          </div>
        </div>

        <div className="hidden md:block">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {firstRow.map((m, i) => <MemberCard key={m.id} member={m} i={i} />)}
          </div>
          {secondRow.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-5">
              {secondRow.map((m, i) => <MemberCard key={m.id} member={m} i={i + 4} />)}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

/* ============ TECHNOLOGIES ============ */
const TechSection = () => {
  const techIcons = [Radio, Camera, ScanLine, Box, ShieldCheck, Cpu]
  const techImages = [
    "/images/image_equipement/radio_numérique.jpeg",
    "/images/image_equipement/intra_oral.jpeg",
    "/images/image_equipement/optique_3D.jpeg",
    "/images/image_equipement/scanner_3D.jpeg",
    "/images/image_equipement/sterilisation.jpeg",
    "/images/image_equipement/equipement.webp",
  ]

  const [activeTechIndex, setActiveTechIndex] = useState(0)
  const techCarouselRef = useRef<HTMLDivElement | null>(null)
  const techSlideRefs = useRef<(HTMLDivElement | null)[]>([])

  const scrollToTech = (index: number) => {
    const nextIndex = (index + TECHNOLOGIES.length) % TECHNOLOGIES.length
    const slide = techSlideRefs.current[nextIndex]
    if (!slide) return
    slide.scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" })
    setActiveTechIndex(nextIndex)
  }

  const handleTechScroll = () => {
    const track = techCarouselRef.current
    if (!track) return
    const nextIndex = Math.round(track.scrollLeft / track.clientWidth)
    setActiveTechIndex(current => (current === nextIndex ? current : nextIndex))
  }

  return (
    <section className="py-10 md:py-14 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <span className="text-accent font-medium text-sm uppercase tracking-wide">Notre équipement</span>
          <h2 className="section-title mt-2 mb-4">Un plateau technique moderne</h2>
          <p className="section-subtitle mx-auto">Des équipements modernes au service de la qualité et de la sécurité des soins.</p>
        </div>

        <div className="md:hidden">
          <div ref={techCarouselRef} onScroll={handleTechScroll} className="flex gap-4 overflow-x-auto overflow-y-hidden snap-x snap-mandatory scroll-smooth px-4 pb-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            {TECHNOLOGIES.map((tech, i) => {
              const Icon = techIcons[i] || Cpu
              return (
                <div key={i} ref={el => { techSlideRefs.current[i] = el }} className="w-[85%] shrink-0 snap-start">
                  <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0} className="glass-card p-6 h-full">
                    <div className="rounded-xl overflow-hidden mb-4 h-56">
                      <Image src={techImages[i]} alt={tech.title} width={400} height={176} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 shrink-0 rounded-xl bg-mint-light flex items-center justify-center">
                        <Icon size={20} className="text-accent" />
                      </div>
                      <div>
                        <h3 className="font-serif font-bold text-lg mb-2">{tech.title}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-3">{tech.description}</p>
                        <span className="text-accent text-xs font-medium bg-mint-light px-3 py-1 rounded-full">{tech.benefit}</span>
                      </div>
                    </div>
                  </motion.div>
                </div>
              )
            })}
          </div>
          <div className="mt-6 flex items-center justify-center gap-4">
            <button type="button" onClick={() => scrollToTech(activeTechIndex - 1)} className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-sm transition-colors hover:bg-secondary" aria-label="Voir la technologie précédente">
              <ChevronLeft size={18} />
            </button>
            <button type="button" onClick={() => scrollToTech(activeTechIndex + 1)} className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-sm transition-colors hover:bg-secondary" aria-label="Voir la technologie suivante">
              <ChevronRightIcon size={18} />
            </button>
          </div>
        </div>

        <div className="hidden md:grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TECHNOLOGIES.map((tech, i) => {
            const Icon = techIcons[i] || Cpu
            return (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i * 0.5} className="glass-card p-6">
                <div className="rounded-xl overflow-hidden mb-4 h-52">
                  <Image src={techImages[i]} alt={tech.title} width={400} height={176} className="w-full h-full object-cover" />
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 shrink-0 rounded-xl bg-mint-light flex items-center justify-center">
                    <Icon size={20} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-lg mb-2">{tech.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-3">{tech.description}</p>
                    <span className="text-accent text-xs font-medium bg-mint-light px-3 py-1 rounded-full">{tech.benefit}</span>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* ============ LOCATION ============ */
const LocationSection = () => (
  <section className="py-10 md:py-14 bg-ivory">
    <div className="container">
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <span className="text-accent font-medium text-sm uppercase tracking-wide">Nous trouver</span>
          <h2 className="section-title mt-2 mb-6">Accès & horaires</h2>
          <div className="space-y-4 mb-6">
            <div className="flex items-start gap-3">
              <MapPin size={20} className="text-accent mt-1 shrink-0" />
              <div>
                <p className="font-medium">{CABINET_CONFIG.address}</p>
                <p className="text-muted-foreground text-sm">{CABINET_CONFIG.zip} {CABINET_CONFIG.city}</p>
                <div className="flex items-center gap-1.5 mt-1.5 text-muted-foreground text-sm">
                  <div className="flex items-center gap-1.5 bg-mint-light rounded-full px-3 py-1">
                    <Train size={14} className="text-accent shrink-0" />
                    <span>Face à l'arrêt de tram Elsau</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone size={20} className="text-accent mt-1 shrink-0" />
              <a href={`tel:${CABINET_CONFIG.phone}`} className="font-medium hover:text-accent transition-colors">{CABINET_CONFIG.phone}</a>
            </div>
            <div className="flex items-start gap-3">
              <Clock size={20} className="text-accent mt-1 shrink-0" />
              <div className="text-sm">
                {CABINET_CONFIG.openingHours.map(h => (
                  <div key={h.day} className="flex justify-between gap-8 py-1">
                    <span className="font-medium">{h.day}</span>
                    <span className="text-muted-foreground">{h.hours}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="space-y-3">
            <a
              href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(CABINET_CONFIG.address + " " + CABINET_CONFIG.city)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 border border-accent/40 text-accent font-medium text-sm rounded-xl px-4 py-3 hover:bg-mint-light transition-colors"
            >
              <span className="flex items-center gap-2">
                <NavigationIcon size={16} />
                Voir l'itinéraire
              </span>
              <ExternalLink size={15} className="shrink-0" />
            </a>
            <div className="flex items-center gap-2 text-muted-foreground text-sm">
              <ShieldCheck size={17} className="text-accent shrink-0" />
              <span>Urgences dentaires acceptées selon disponibilités.</span>
            </div>
          </div>
        </div>
        <div className="rounded-2xl overflow-hidden h-80 md:h-auto" style={{ boxShadow: "var(--shadow-card)" }}>
          <iframe
            src={CABINET_CONFIG.googleMapsEmbedUrl}
            width="100%"
            height="100%"
            style={{ border: 0, minHeight: 320 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Localisation du cabinet"
          />
        </div>
      </div>
    </div>
  </section>
)

/* ============ INDEX PAGE ============ */
const HomeClient = () => (
  <>
    <HeroSection />
    <TrustBanner />
    <CabinetPresentation />
    <SoinsSection />
    <TeamSection />
    <TechSection />
    <LocationSection />
  </>
)

export default HomeClient
