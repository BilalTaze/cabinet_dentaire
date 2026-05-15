import Link from "next/link"

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center bg-background">
      <div className="text-center">
        <p className="text-accent font-medium text-sm uppercase tracking-wide mb-4">Erreur 404</p>
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">Page introuvable</h1>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          La page que vous recherchez n'existe pas ou a été déplacée.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent text-accent-foreground font-medium hover:bg-mint-dark transition-colors"
        >
          Retour à l'accueil
        </Link>
      </div>
    </div>
  )
}
