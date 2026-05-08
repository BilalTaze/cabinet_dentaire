import { motion } from "framer-motion";
import { Calendar, Phone, Sparkles, Shield, Crown, Wrench, Star, AlertCircle, Baby, ChevronRight, MapPin, Clock, Car, Accessibility, ArrowRight, Radio, Camera, ScanLine, Box, ShieldCheck, Cpu, Quote, ChevronLeft, ChevronRight as ChevronRightIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CABINET_CONFIG, SOINS, TEAM_MEMBERS, REVIEWS, FAQ_ITEMS, TECHNOLOGIES } from "@/config/cabinet";
import heroImg from "@/assets/hero-clinic.jpg";
import dentistFemale from "@/assets/dentist-female.jpg";
import dentistMale from "@/assets/dentist-male.jpg";
import cabinetReception from "@/assets/cabinet-reception.jpg";
import heroClinic from "@/assets/hero-clinic.jpg";
import dentalTech from "@/assets/dental-tech.jpg";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6 } }),
};

const cabinetGalleryImages = [heroClinic, cabinetReception, dentalTech, cabinetReception, heroClinic, dentalTech];
const cabinetGalleryLabels = ["Salle de soins", "Accueil", "Équipements", "Réception", "Cabinet", "Technologie"];

const soinIcons: Record<string, any> = { Sparkles, Shield, Crown, Wrench, Star, AlertCircle, Baby };

/* ============ HERO ============ */
const HeroSection = () => (
  <section className="relative min-h-[75vh] flex items-center overflow-hidden pt-[4.75rem] md:pt-[7.25rem]">
  <div className="absolute inset-0">
    <img src={heroImg} alt="Cabinet dentaire moderne" className="w-full h-full object-cover" fetchPriority="high" decoding="sync" />
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
            <Link to="/contact">
              <Phone size={18} className="mr-2" />
              Nous contacter
            </Link>
          </Button>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

/* ============ TRUST BANNER ============ */
const TrustBanner = () => {
  const items = [
    { icon: AlertCircle, label: "Urgences acceptées" },
    { icon: ShieldCheck, label: "Conventionné" },
    { icon: Accessibility, label: "Accès PMR" },
  ];
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
  );
};

/* ============ CABINET PRESENTATION ============ */
const CabinetPresentation = () => {
  const [activeCabinetImg, setActiveCabinetImg] = useState(0);

  const prevCabinetImg = () => setActiveCabinetImg(i => (i - 1 + cabinetGalleryImages.length) % cabinetGalleryImages.length);
  const nextCabinetImg = () => setActiveCabinetImg(i => (i + 1) % cabinetGalleryImages.length);

  return (
    <section className="section-padding bg-background">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.span variants={fadeUp} custom={0} className="text-accent font-medium text-sm uppercase tracking-wide">  </motion.span>
            <motion.h2 variants={fadeUp} custom={1} className="section-title mt-2 mb-6">Bienvenue à La Maison Dentaire</motion.h2>
            <motion.p variants={fadeUp} custom={2} className="text-muted-foreground leading-relaxed mb-4">
              La Maison Dentaire propose une prise en charge globale de la santé bucco-dentaire : soins conservateurs, urgences dentaires, esthétique du sourire, prévention et réhabilitation implantaire. Notre équipe s’attache à proposer des soins adaptés aux besoins de chaque patient, avec une attention particulière portée au confort et à la pédagogie.
            </motion.p>
            <motion.p variants={fadeUp} custom={3} className="text-muted-foreground leading-relaxed mb-6">
              Doté d’un plateau technique moderne et d’équipements de dernière génération, notre centre met tout en œuvre afin d’assurer précision, sécurité et qualité des soins. Nous prenons le temps d’écouter, d’expliquer et d’accompagner chaque patient à chaque étape de son parcours de soins.
            </motion.p>
            <motion.div variants={fadeUp} custom={4}>
              <Button variant="outline" className="border-accent text-accent hover:bg-mint-light" asChild>
                <Link to="/cabinet">Découvrir le cabinet <ChevronRight size={16} className="ml-1" /></Link>
              </Button>
            </motion.div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="space-y-3 max-w-lg mx-auto md:max-w-none w-full">
            <div className="relative rounded-2xl overflow-hidden aspect-[7/5] md:max-w-[560px] w-full mx-auto" style={{ boxShadow: "var(--shadow-card)" }}>
              <img
                src={cabinetGalleryImages[activeCabinetImg]}
                alt={cabinetGalleryLabels[activeCabinetImg]}
                className="w-full h-full object-cover transition-all duration-500"
                loading="lazy"
                decoding="async"
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
                {cabinetGalleryLabels[activeCabinetImg]} — {activeCabinetImg + 1}/{cabinetGalleryImages.length}
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2 md:max-w-[300px] mx-auto w-full">
              {cabinetGalleryImages.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveCabinetImg(i)}
                  className={`rounded-xl overflow-hidden aspect-square transition-all ${activeCabinetImg === i ? "ring-2 ring-accent scale-[0.97]" : "opacity-70 hover:opacity-100"}`}
                >
                  <img src={img} alt={cabinetGalleryLabels[i]} className="w-full h-full object-cover" loading="lazy" decoding="async" />
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

/* ============ SERVICES ============ */
const SoinsSection = () => {
  const [activeSoinIndex, setActiveSoinIndex] = useState(0);
  const mobileCarouselRef = useRef<HTMLDivElement | null>(null);
  const mobileSlideRefs = useRef<(HTMLDivElement | null)[]>([]);

  const scrollToSoin = (index: number) => {
    const nextIndex = (index + SOINS.length) % SOINS.length;
    const slide = mobileSlideRefs.current[nextIndex];

    if (!slide) {
      return;
    }

    slide.scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
    setActiveSoinIndex(nextIndex);
  };

  const handleMobileScroll = () => {
    const track = mobileCarouselRef.current;

    if (!track) {
      return;
    }

    const nextIndex = Math.round(track.scrollLeft / track.clientWidth);
    setActiveSoinIndex(current => (current === nextIndex ? current : nextIndex));
  };

  const activeSoin = SOINS[activeSoinIndex];

  return (
    <section className="section-padding bg-ivory">
      <div className="container">
        <div className="text-center mb-12">
          <span className="text-accent font-medium text-sm uppercase tracking-wide">Nos services</span>
          <h2 className="section-title mt-2 mb-4">Des soins adaptés à chaque besoin</h2>
          <p className="section-subtitle mx-auto">Une prise en charge complète, de la prévention aux traitements les plus avancés.</p>
        </div>

        <div className="md:hidden">
          <div
            ref={mobileCarouselRef}
            onScroll={handleMobileScroll}
            className="flex gap-4 overflow-x-auto overflow-y-hidden snap-x snap-mandatory scroll-smooth px-4 pb-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          >
            {SOINS.map((soin, i) => {
              const Icon = soinIcons[soin.icon] || Sparkles;

              return (
                <div
                  key={soin.id}
                  ref={el => {
                    mobileSlideRefs.current[i] = el;
                  }}
                  className="w-[85%] shrink-0 snap-start"
                >
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    custom={0}
                    className="glass-card p-6 flex h-full flex-col overflow-hidden"
                  >
                    <div className="w-12 h-12 rounded-xl bg-mint-light flex items-center justify-center mb-4">
                      <Icon size={22} className="text-accent" />
                    </div>
                    <h3 className="font-serif font-bold text-lg mb-2">{soin.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed flex-1">{soin.shortDesc}</p>
                    <Link to="/soins" className="mt-4 text-accent text-sm font-medium inline-flex items-center gap-1 hover:gap-2 transition-all">
                      En savoir plus <ArrowRight size={14} />
                    </Link>
                  </motion.div>
                </div>
              );
            })}
          </div>

          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => scrollToSoin(activeSoinIndex - 1)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-sm transition-colors hover:bg-secondary"
              aria-label="Voir le soin précédent"
            >
              <ChevronLeft size={18} />
            </button>

            <button
              type="button"
              onClick={() => scrollToSoin(activeSoinIndex + 1)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-sm transition-colors hover:bg-secondary"
              aria-label="Voir le soin suivant"
            >
              <ChevronRightIcon size={18} />
            </button>
          </div>
        </div>

        <div className="hidden md:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {SOINS.map((soin, i) => {
            const Icon = soinIcons[soin.icon] || Sparkles;

            return (
              <motion.div
                key={soin.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i * 0.5}
                className="glass-card p-6 flex flex-col"
              >
                <div className="w-12 h-12 rounded-xl bg-mint-light flex items-center justify-center mb-4">
                  <Icon size={22} className="text-accent" />
                </div>
                <h3 className="font-serif font-bold text-lg mb-2">{soin.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed flex-1">{soin.shortDesc}</p>
                <Link to="/soins" className="mt-4 text-accent text-sm font-medium inline-flex items-center gap-1 hover:gap-2 transition-all">
                  En savoir plus <ArrowRight size={14} />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

/* ============ FIRST VISIT ============ */
const FirstVisitSection = () => {
  const steps = [
    { icon: Phone, title: "Accueil & échange", desc: "Un accueil chaleureux et un échange pour comprendre vos besoins et attentes." },
    { icon: ScanLine, title: "Examen clinique complet", desc: "Un examen minutieux de votre bouche pour évaluer votre santé bucco-dentaire." },
    { icon: Radio, title: "Radiographie si nécessaire", desc: "Des clichés numériques pour un diagnostic précis et approfondi." },
    { icon: Star, title: "Plan de traitement", desc: "Un plan personnalisé, expliqué clairement, avec devis détaillé si nécessaire." },
  ];
  return (
    <section className="section-padding bg-background">
      <div className="container">   
        <div className="text-center mb-12">
          <span className="text-accent font-medium text-sm uppercase tracking-wide">Première visite</span>
          <h2 className="section-title mt-2 mb-4">Comment se passe votre première consultation ?</h2>
          <p className="section-subtitle mx-auto">Pas de stress ! Voici les étapes d'une première visite dans notre cabinet.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i} className="text-center p-6">
              <div className="w-16 h-16 rounded-2xl bg-mint-light flex items-center justify-center mx-auto mb-4">
                <step.icon size={28} className="text-accent" />
              </div>
              <div className="text-accent font-bold text-sm mb-2">Étape {i + 1}</div>
              <h3 className="font-serif font-bold text-lg mb-2">{step.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Button className="bg-accent hover:bg-mint-dark text-accent-foreground" style={{ boxShadow: "var(--shadow-button)" }} asChild>
            <a href={CABINET_CONFIG.doctolibProfileUrl} target="_blank" rel="noopener noreferrer">
              <Calendar size={18} className="mr-2" />
              Prendre rendez-vous
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

/* ============ TEAM ============ */
const TeamSection = () => (
  <section className="section-padding bg-ivory">
    <div className="container">
      <div className="text-center mb-12">
        <span className="text-accent font-medium text-sm uppercase tracking-wide">Notre équipe</span>
        <h2 className="section-title mt-2 mb-4">Des praticiens passionnés</h2>
        <p className="section-subtitle mx-auto">Une équipe à taille humaine, dévouée à votre santé bucco-dentaire.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {TEAM_MEMBERS.map((member, i) => (
          <motion.div key={member.id} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i} className="glass-card overflow-hidden">
            <img
              src={member.image === "female" ? dentistFemale : dentistMale}
              alt={member.name}
              className="w-full h-72 object-cover object-top"
              loading="lazy"
              decoding="async"
            />
            <div className="p-6">
              <h3 className="font-serif font-bold text-xl">{member.name}</h3>
              <p className="text-accent font-medium text-sm mb-2">{member.specialty}</p>
              <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">{member.diplomas}</p>
              <Link to={`/equipe#${member.id}`} className="mt-3 text-accent text-sm font-medium inline-flex items-center gap-1 hover:gap-2 transition-all">
                Voir le profil <ArrowRight size={14} />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

/* ============ TECHNOLOGIES ============ */
const TechSection = () => {
  const techIcons = [Radio, Camera, ScanLine, Box, ShieldCheck, Cpu];
  return (
    <section className="section-padding bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <span className="text-accent font-medium text-sm uppercase tracking-wide">Nos technologies</span>
          <h2 className="section-title mt-2 mb-4">Équipements de dernière génération</h2>
          <p className="section-subtitle mx-auto">Des technologies de pointe pour des soins plus précis, plus rapides et plus confortables.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TECHNOLOGIES.map((tech, i) => {
            const Icon = techIcons[i] || Cpu;
            return (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i * 0.5} className="glass-card p-6">
                <div className="w-12 h-12 rounded-xl bg-mint-light flex items-center justify-center mb-4">
                  <Icon size={22} className="text-accent" />
                </div>
                <h3 className="font-serif font-bold text-lg mb-2">{tech.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-3">{tech.description}</p>
                <span className="text-accent text-xs font-medium bg-mint-light px-3 py-1 rounded-full">{tech.benefit}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// /* ============ BEFORE / AFTER ============ */
// const beforeAfterCases = [
//   { label: "Blanchiment dentaire", before: dentistFemale, after: dentistMale },
//   { label: "Facettes céramique", before: cabinetReception, after: heroImg },
//   { label: "Alignement dentaire", before: heroImg, after: dentistFemale },
// ];

// const BeforeAfterSlider = ({ before, after }: { before: string; after: string }) => {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const [pos, setPos] = useState(50);
//   const dragging = useRef(false);

//   const updatePos = useCallback((clientX: number) => {
//     if (!containerRef.current) return;
//     const rect = containerRef.current.getBoundingClientRect();
//     const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
//     setPos((x / rect.width) * 100);
//   }, []);

//   const onPointerDown = (e: React.PointerEvent) => {
//     dragging.current = true;
//     (e.target as HTMLElement).setPointerCapture(e.pointerId);
//     updatePos(e.clientX);
//   };
//   const onPointerMove = (e: React.PointerEvent) => { if (dragging.current) updatePos(e.clientX); };
//   const onPointerUp = () => { dragging.current = false; };

//   return (
//     <div
//       ref={containerRef}
//       className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden cursor-col-resize select-none"
//       style={{ boxShadow: "var(--shadow-card)" }}
//       onPointerDown={onPointerDown}
//       onPointerMove={onPointerMove}
//       onPointerUp={onPointerUp}
//     >
//       <img src={after} alt="Après" className="absolute inset-0 w-full h-full object-cover" />
//       <div className="absolute inset-0 overflow-hidden" style={{ width: `${pos}%` }}>
//         <img src={before} alt="Avant" className="absolute inset-0 w-full h-full object-cover" style={{ minWidth: containerRef.current ? `${containerRef.current.offsetWidth}px` : "100%" }} />
//       </div>
//       <div className="absolute top-0 bottom-0" style={{ left: `${pos}%`, transform: "translateX(-50%)" }}>
//         <div className="w-0.5 h-full bg-white/90" />
//         <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center">
//           <GripVertical size={18} className="text-foreground" />
//         </div>
//       </div>
//       <span className="absolute top-3 left-3 bg-card/80 backdrop-blur-sm text-xs font-medium px-2 py-1 rounded-full">Avant</span>
//       <span className="absolute top-3 right-3 bg-card/80 backdrop-blur-sm text-xs font-medium px-2 py-1 rounded-full">Après</span>
//     </div>
//   );
// };

// const BeforeAfterSection = () => {
//   const [activeCase, setActiveCase] = useState(0);
//   return (
//     <section className="section-padding bg-ivory">
//       <div className="container">
//         <div className="text-center mb-12">
//           <span className="text-accent font-medium text-sm uppercase tracking-wide">Résultats</span>
//           <h2 className="section-title mt-2 mb-4">Avant / Après</h2>
//           <p className="section-subtitle mx-auto">Découvrez quelques exemples de transformations réalisées par notre équipe.</p>
//         </div>
//         <div className="max-w-2xl mx-auto">
//           <div className="flex justify-center gap-2 mb-6">
//             {beforeAfterCases.map((c, i) => (
//               <button
//                 key={i}
//                 onClick={() => setActiveCase(i)}
//                 className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeCase === i ? "bg-accent text-accent-foreground" : "bg-secondary text-muted-foreground hover:bg-secondary/80"}`}
//               >
//                 {c.label}
//               </button>
//             ))}
//           </div>
//           <BeforeAfterSlider before={beforeAfterCases[activeCase].before} after={beforeAfterCases[activeCase].after} />
//           <div className="mt-4 bg-secondary border border-border rounded-xl p-3 text-center">
//             <p className="text-xs text-muted-foreground">⚠️ Les résultats peuvent varier selon chaque patient. Ces images sont présentées à titre illustratif.</p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

/* ============ REVIEWS ============ */
const ReviewsSection = () => {
  const avgRating = (REVIEWS.reduce((a, r) => a + r.rating, 0) / REVIEWS.length).toFixed(1);
  return (
    <section className="section-padding bg-primary text-primary-foreground">
      <div className="container">
        <div className="text-center mb-12">
          <span className="text-accent font-medium text-sm uppercase tracking-wide">Avis patients</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mt-2 mb-4">Ce que disent nos patients</h2>
          <div className="flex items-center justify-center gap-4 mt-4">
            <div className="flex gap-1">{[1,2,3,4,5].map(s => <Star key={s} size={24} className="fill-accent text-accent" />)}</div>
            <span className="text-2xl font-bold">{avgRating}</span>
            <span className="text-primary-foreground/60">/ 5 • {REVIEWS.length} avis</span>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {REVIEWS.slice(0, 6).map((review, i) => (
            <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i * 0.3} className="bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 rounded-2xl p-6">
              <Quote size={20} className="text-accent mb-3" />
              <p className="text-primary-foreground/80 text-sm leading-relaxed mb-4">{review.text}</p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-sm">{review.author}</p>
                  <p className="text-primary-foreground/50 text-xs">{review.date}</p>
                </div>
                <div className="flex gap-0.5">{Array.from({ length: review.rating }).map((_, j) => <Star key={j} size={14} className="fill-accent text-accent" />)}</div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-8">
          <a href={`https://www.google.com/maps/place/?q=place_id:${CABINET_CONFIG.placeId}`} target="_blank" rel="noopener noreferrer" className="text-accent text-sm font-medium hover:underline">
            Voir tous les avis sur Google →
          </a>
        </div>
      </div>
    </section>
  );
};

/* ============ LOCATION ============ */
const LocationSection = () => (
  <section className="section-padding bg-ivory">
    <div className="container">
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <span className="text-accent font-medium text-sm uppercase tracking-wide">Nous trouver</span>
          <h2 className="section-title mt-2 mb-6">Localisation & horaires</h2>
          <div className="space-y-4 mb-6">
            <div className="flex items-start gap-3">
              <MapPin size={20} className="text-accent mt-1 shrink-0" />
              <div>
                <p className="font-medium">{CABINET_CONFIG.address}</p>
                <p className="text-muted-foreground text-sm">{CABINET_CONFIG.zip} {CABINET_CONFIG.city}</p>
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
          <a
            href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(CABINET_CONFIG.address + " " + CABINET_CONFIG.city)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-accent font-medium text-sm hover:underline"
          >
            <MapPin size={16} />
            Itinéraire Google Maps
          </a>
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
);

/* ============ INDEX PAGE ============ */
const Index = () => (
  <>
    <HeroSection />
    <TrustBanner />
    <CabinetPresentation />
    <SoinsSection />
    <FirstVisitSection />
    <TeamSection />
    {/* <BeforeAfterSection /> */}
    <TechSection />
    <ReviewsSection />
    <LocationSection />
  </>
);

export default Index;
