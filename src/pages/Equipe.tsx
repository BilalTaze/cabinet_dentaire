import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CABINET_CONFIG, TEAM_MEMBERS } from "@/config/cabinet";
import { useEffect } from "react";
import PageHero from "@/components/layout/PageHero";
import { useLocation } from "react-router-dom";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6 } }),
};

const Equipe = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.replace("#", ""));
      if (el) {
        const headerOffset = 112;
        const y = el.getBoundingClientRect().top + window.scrollY - headerOffset;
        setTimeout(() => window.scrollTo({ top: y, behavior: "smooth" }), 300);
      }
    }
  }, [hash]);

  return (
  <>
    <PageHero label="Notre équipe" title="Notre Équipe" subtitle="Une équipe de praticiens à votre écoute" />

    <section className="section-padding bg-background">
      <div className="container">
        <div className="space-y-16">
          {TEAM_MEMBERS.map((member, i) => (
            <motion.div key={member.id} id={member.id} initial="hidden" whileInView="visible" viewport={{ once: true }} className={`grid md:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "md:[direction:rtl] [&>*]:md:[direction:ltr]" : ""}`}>
              <motion.div
                variants={fadeUp}
                custom={0}
                className="rounded-2xl w-full max-w-[250px] aspect-[3/4] bg-mint-light flex items-center justify-center"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                <motion.span
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="text-accent/40 text-9xl font-serif font-bold"
                >
                  {member.name.charAt(0)}
                </motion.span>
              </motion.div>
              <motion.div variants={fadeUp} custom={1}>
                <h2 className="font-serif font-bold text-3xl mb-1">{member.name}</h2>
                <p className="text-muted-foreground text-sm mt-2 mb-6">
                  {member.title} {member.bio.charAt(0).toLowerCase() + member.bio.slice(1)}
                </p>

                <Button className="bg-accent hover:bg-mint-dark text-accent-foreground" style={{ boxShadow: "var(--shadow-button)" }} asChild>
                  <a href={CABINET_CONFIG.doctolibProfileUrl} target="_blank" rel="noopener noreferrer">
                    <Calendar size={18} className="mr-2" />
                    Prendre RDV
                  </a>
                </Button>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </>
  );
};

export default Equipe;
