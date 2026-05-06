import { useEffect } from "react";
import { Link } from "react-router-dom";
import PageHero from "@/components/PageHero";
import Icon from "@/components/Icon";
import { INDUSTRIES } from "@/data/site";
import { CheckCircle2 } from "lucide-react";

export default function Industries() {
  useEffect(() => { document.title = "Industries | Atulit Baldhama Digital Solutions"; }, []);
  return (
    <>
      <PageHero title="Industries We Serve" subtitle="Specialized digital expertise across eight high-impact verticals."
        breadcrumb={<><Link to="/" className="hover:text-white">Home</Link> &gt; Industries</>} />
      <section className="section">
        <div className="container-x grid md:grid-cols-2 gap-6">
          {INDUSTRIES.map(i => (
            <div key={i.title} className="card-brand">
              <div className="flex items-center gap-3 mb-3">
                <div className="text-3xl">{i.emoji}</div>
                <h3 className="text-xl text-primary">{i.title}</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-4">{i.desc}</p>
              <ul className="grid sm:grid-cols-2 gap-2">
                {i.solutions.map(s => (
                  <li key={s} className="flex items-center gap-2 text-sm"><CheckCircle2 size={16} className="text-gold" /> {s}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
