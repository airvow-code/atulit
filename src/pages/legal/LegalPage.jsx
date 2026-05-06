import { Link } from "react-router-dom";
import PageHero from "@/components/PageHero";
import { useEffect } from "react";

export default function LegalPage({ title, slug, lastUpdated, children }) {
  useEffect(() => { document.title = `${title} | Atulit Baldhama Digital Solutions`; }, [title]);
  return (
    <>
      <PageHero title={title}
        breadcrumb={<><Link to="/" className="hover:text-white">Home</Link> &gt; {title}</>} />
      <section className="section">
        <div className="container-x max-w-4xl mx-auto">
          <div className="text-sm text-muted-foreground mb-6">Last Updated: {lastUpdated}</div>
          <article className="prose-legal space-y-6 text-foreground/90 leading-relaxed">
            {children}
          </article>
          <div className="mt-12">
            <Link to="/" className="btn-primary">← Back to Home</Link>
          </div>
        </div>
      </section>
    </>
  );
}

export function LegalSection({ title, children }) {
  return (
    <section>
      <h2 className="text-2xl text-primary mb-3">{title}</h2>
      <div className="h-px bg-gradient-to-r from-gold to-transparent mb-4" />
      <div className="space-y-3 text-sm md:text-base">{children}</div>
    </section>
  );
}
