import { motion } from "framer-motion";
import { Clock, ArrowRight } from "lucide-react";
import { BLOG_ARTICLES } from "@/config/cabinet";
import { Link } from "react-router-dom";
import PageHero from "@/components/layout/PageHero";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6 } }),
};

const Blog = () => (
  <>
    <PageHero label="Conseils & Prévention" title="Conseils Dentaires" subtitle="Des informations simples pour mieux comprendre et préserver votre santé bucco-dentaire." />

    <section className="section-padding bg-background">
      <div className="container">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {BLOG_ARTICLES.map((article, i) => (
            <motion.div key={article.id} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i * 0.3}>
              <Link to={`/blog/${article.id}`} className="glass-card p-6 flex flex-col h-full group block">
                <span className="text-accent text-xs font-medium bg-mint-light px-3 py-1 rounded-full w-fit mb-4">{article.category}</span>
                <h2 className="font-serif font-bold text-lg mb-2 group-hover:text-accent transition-colors">{article.title}</h2>
                <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-4">{article.excerpt}</p>
                <div className="flex items-center justify-between text-sm">
                  <span className="flex items-center gap-1 text-muted-foreground"><Clock size={14} />{article.readTime}</span>
                  <span className="text-accent font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">Lire <ArrowRight size={14} /></span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default Blog;
