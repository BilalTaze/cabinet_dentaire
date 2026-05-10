import { motion } from "framer-motion";
import { CABINET_CONFIG } from "@/config/cabinet";
import PageHero from "@/components/layout/PageHero";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6 } }),
};

const Section = ({ title, children, i }: { title: string; children: React.ReactNode; i: number }) => (
  <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i} className="mb-10">
    <h2 className="text-xl font-serif font-bold text-foreground mb-4 pb-2 border-b border-border">{title}</h2>
    <div className="text-muted-foreground text-sm leading-relaxed space-y-2">{children}</div>
  </motion.div>
);

const PolitiqueConfidentialite = () => (
  <>
    <PageHero label="Légal" title="Politique de confidentialité" subtitle="Comment nous collectons, utilisons et protégeons vos données personnelles." />

    <section className="section-padding bg-background">
      <div className="container max-w-3xl">

        <Section title="1. Responsable du traitement" i={0}>
          <p><span className="font-medium text-foreground">Cabinet :</span> {CABINET_CONFIG.name}</p>
          <p><span className="font-medium text-foreground">Adresse :</span> {CABINET_CONFIG.address}, {CABINET_CONFIG.zip} {CABINET_CONFIG.city}</p>
          <p><span className="font-medium text-foreground">Email :</span> <a href={`mailto:${CABINET_CONFIG.email}`} className="text-accent underline">{CABINET_CONFIG.email}</a></p>
          <p><span className="font-medium text-foreground">Téléphone :</span> {CABINET_CONFIG.phone}</p>
        </Section>

        <Section title="2. Données collectées" i={1}>
          <p>Nous collectons les données suivantes lorsque vous utilisez notre formulaire de contact :</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>Nom et prénom</li>
            <li>Adresse email</li>
            <li>Numéro de téléphone</li>
            <li>Message libre</li>
          </ul>
          <p className="mt-2">
            Des données de navigation (adresse IP, pages visitées, durée de visite) peuvent être collectées automatiquement via nos outils d'analyse.
          </p>
        </Section>

        <Section title="3. Finalité du traitement" i={2}>
          <p>Vos données sont collectées pour les finalités suivantes :</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>Répondre à vos demandes de contact ou d'information</li>
            <li>Gérer les prises de rendez-vous</li>
            <li>Améliorer notre site web grâce aux statistiques de navigation (données anonymisées)</li>
          </ul>
        </Section>

        <Section title="4. Base légale" i={3}>
          <p>Le traitement de vos données repose sur :</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><span className="font-medium text-foreground">Votre consentement</span> — lors de l'envoi du formulaire de contact</li>
            <li><span className="font-medium text-foreground">L'intérêt légitime</span> — pour l'amélioration de nos services</li>
            <li><span className="font-medium text-foreground">L'obligation légale</span> — pour la conservation des données médicales (dossiers patients)</li>
          </ul>
        </Section>

        <Section title="5. Durée de conservation" i={4}>
          <ul className="list-disc list-inside space-y-1">
            <li>Données de contact : 3 ans à compter du dernier contact</li>
            <li>Dossiers patients : 10 ans conformément à la réglementation médicale</li>
            <li>Données de navigation : 13 mois maximum</li>
          </ul>
        </Section>

        <Section title="6. Destinataires des données" i={5}>
          <p>
            Vos données sont destinées exclusivement aux membres du cabinet {CABINET_CONFIG.name}. Elles ne sont jamais vendues, louées ou transmises à des tiers à des fins commerciales.
          </p>
          <p>
            Certains prestataires techniques (hébergeur, outil de formulaire) peuvent y avoir accès dans le cadre de leur mission, dans le strict respect du RGPD.
          </p>
        </Section>

        <Section title="7. Cookies" i={6}>
          <p>Notre site utilise des cookies techniques nécessaires à son bon fonctionnement, ainsi que des cookies d'analyse d'audience (Vercel Analytics) permettant de mesurer l'audience de manière anonyme.</p>
          <p>Vous pouvez désactiver les cookies dans les paramètres de votre navigateur. Cela peut affecter certaines fonctionnalités du site.</p>
        </Section>

        <Section title="8. Vos droits (RGPD)" i={7}>
          <p>Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez des droits suivants :</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><span className="font-medium text-foreground">Droit d'accès</span> — obtenir une copie de vos données</li>
            <li><span className="font-medium text-foreground">Droit de rectification</span> — corriger des données inexactes</li>
            <li><span className="font-medium text-foreground">Droit à l'effacement</span> — demander la suppression de vos données</li>
            <li><span className="font-medium text-foreground">Droit d'opposition</span> — vous opposer à un traitement</li>
            <li><span className="font-medium text-foreground">Droit à la portabilité</span> — recevoir vos données dans un format lisible</li>
          </ul>
          <p className="mt-3">
            Pour exercer ces droits, contactez-nous par email :{" "}
            <a href={`mailto:${CABINET_CONFIG.email}`} className="text-accent underline">{CABINET_CONFIG.email}</a>
            {" "}ou par courrier à notre adresse.
          </p>
          <p>
            En cas de litige, vous pouvez introduire une réclamation auprès de la{" "}
            <span className="font-medium text-foreground">CNIL</span> (Commission Nationale de l'Informatique et des Libertés) — <span className="text-accent">www.cnil.fr</span>.
          </p>
        </Section>

        <Section title="9. Sécurité" i={8}>
          <p>
            Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données contre toute perte, accès non autorisé, divulgation ou altération (chiffrement HTTPS, accès restreint, etc.).
          </p>
        </Section>

        <p className="text-xs text-muted-foreground mt-8">Dernière mise à jour : mai 2025</p>
      </div>
    </section>
  </>
);

export default PolitiqueConfidentialite;
