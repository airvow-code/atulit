import { useEffect } from "react";
import { Link } from "react-router-dom";
import PageHero from "@/components/PageHero";
import { SERVICES } from "@/data/site";
import Icon from "@/components/Icon";
import { CheckCircle2 } from "lucide-react";

export default function Services() {
  useEffect(() => { document.title = "Services | Atulit Baldhama Digital Solutions"; }, []);
  return (
    <>
      <PageHero title="Our Services" subtitle="Twelve full-stack practice areas covering every layer of modern digital products."
        breadcrumb={<><Link to="/" className="hover:text-white">Home</Link> &gt; Services</>} />
      <section className="section">
        <div className="container-x grid md:grid-cols-2 gap-6">
          {SERVICES.map(s => (
            <div key={s.slug} className="card-brand">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/10 text-gold"><Icon name={s.icon} size={28} /></div>
                <div className="flex-1">
                  <h3 className="text-xl text-primary mb-1">{s.title}</h3>
                  <p className="text-sm text-muted-foreground">{s.desc}</p>
                </div>
              </div>
              <ul className="mt-4 space-y-2">
                {s.features.map(f => (
                  <li key={f} className="flex items-center gap-2 text-sm text-foreground"><CheckCircle2 size={16} className="text-gold" /> {f}</li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap gap-2">
                {s.tech.map(t => (
                  <span key={t} className="text-xs px-3 py-1 rounded-full bg-gold-light/60 text-gold-dark font-semibold">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
