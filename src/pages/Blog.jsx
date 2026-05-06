import { useEffect } from "react";
import { Link } from "react-router-dom";
import PageHero from "@/components/PageHero";

export default function Blog() {
  useEffect(() => { document.title = "Blog | Atulit Baldhama Digital Solutions"; }, []);
  const items = Array.from({ length: 6 });
  return (
    <>
      <PageHero title="Blog & Insights" subtitle="Engineering notes, product playbooks and industry insights."
        breadcrumb={<><Link to="/" className="hover:text-white">Home</Link> &gt; Blog</>} />
      <section className="section">
        <div className="container-x grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((_, i) => (
            <article key={i} className="card-brand">
              <div className="aspect-video rounded-xl bg-gradient-to-br from-gold/20 to-primary/10 mb-4" />
              <div className="text-xs text-gold-dark font-semibold uppercase tracking-wider">Insights</div>
              <h3 className="text-lg text-primary mt-1">Article Title #{i + 1}</h3>
              <p className="text-sm text-muted-foreground mt-1">A short preview of the article will appear here once we publish.</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
