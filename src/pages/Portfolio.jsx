import { useEffect } from "react";
import { Link } from "react-router-dom";
import PageHero from "@/components/PageHero";

export default function Portfolio() {
  useEffect(() => { document.title = "Portfolio | Atulit Baldhama Digital Solutions"; }, []);
  const items = Array.from({ length: 6 });
  return (
    <>
      <PageHero title="Portfolio" subtitle="Selected case studies from our recent engagements."
        breadcrumb={<><Link to="/" className="hover:text-white">Home</Link> &gt; Portfolio</>} />
      <section className="section">
        <div className="container-x grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((_, i) => (
            <div key={i} className="card-brand">
              <div className="aspect-video rounded-xl bg-gradient-to-br from-primary/10 to-gold/20 mb-4" />
              <h3 className="text-lg text-primary">Case Study #{i + 1}</h3>
              <p className="text-sm text-muted-foreground mt-1">Coming soon — a featured project showcasing our craft.</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
