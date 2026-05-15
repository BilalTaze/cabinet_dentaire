'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { FAQ_ITEMS } from "@/config/cabinet"
import PageHero from "@/components/layout/PageHero"

const FAQClient = () => (
  <>
    <PageHero label="FAQ" title="Questions Fréquentes" subtitle="Retrouvez les réponses aux questions les plus fréquemment posées sur nos services, tarifs et modalités pratiques." />

    <section className="section-padding bg-background">
      <div className="container max-w-3xl">
        <Accordion type="single" collapsible className="space-y-3">
          {FAQ_ITEMS.map((item, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="glass-card px-6 border-none">
              <AccordionTrigger className="text-left font-medium text-sm md:text-base hover:no-underline py-5">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-5">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  </>
)

export default FAQClient
