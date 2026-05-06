import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PageHero from "@/components/PageHero";
import { TECH_TABS } from "@/data/site";

export default function Technologies() {
  const tabs = Object.keys(TECH_TABS);
  const [active, setActive] = useState(tabs[0]);
  useEffect(() => { document.title = "Technologies | Atulit Baldhama Digital Solutions"; }, []);
  return (
    <>
      <PageHero title="Technologies" subtitle="The modern stack that powers every product we ship."
        breadcrumb={<><Link to="/" className="hover:text-white">Home</Link> &gt; Technologies</>} />
      <section className="section">
        <div className="container-x">
          <div className="flex flex-wrap gap-2 mb-8 justify-center">
            {tabs.map(t => (
              <button key={t} onClick={() => setActive(t)}
                className={`px-4 py-2 rounded-full text-sm font-semibold border-2 transition-all ${active === t ? "bg-primary border-primary text-white shadow-red-soft" : "bg-background border-gold-light text-foreground hover:border-gold hover:text-primary"}`}>
                {t}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap gap-3 justify-center max-w-4xl mx-auto">
            {TECH_TABS[active].map(tech => (
              <span key={tech} className="px-5 py-2.5 rounded-full border-2 border-gold bg-background text-primary font-semibold shadow-sm hover:shadow-gold-glow transition-shadow">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
