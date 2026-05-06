import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import { ArrowRight, Rocket, Smile, Trophy, Cpu, CheckCircle2, Layers, Zap, Lock, Wrench, Globe2, Search, ClipboardList, Palette, Code2, FlaskConical, Send, ShieldCheck, Star } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import Counter from "@/components/Counter";
import Icon from "@/components/Icon";
import { SERVICES, INDUSTRIES, ALL_TECH } from "@/data/site";
import { useEffect, useState } from "react";
import logo from "@/assets/logo.png";

const stats = [
  { icon: Rocket, value: 150, label: "Projects Delivered" },
  { icon: Smile, value: 100, label: "Happy Clients" },
  { icon: Trophy, value: 5, label: "Years of Experience" },
  { icon: Cpu, value: 40, label: "Technologies Mastered" },
];

const why = [
  { icon: CheckCircle2, title: "Expert & Certified Team", text: "Hand-picked engineers with deep domain expertise." },
  { icon: Layers, title: "End-to-End IT Solutions", text: "From discovery to deployment and beyond." },
  { icon: Zap, title: "Agile & Fast Delivery", text: "Iterative sprints with weekly demos." },
  { icon: Lock, title: "Data Security First", text: "Enterprise-grade security baked in by default." },
  { icon: Wrench, title: "Post-Launch Support", text: "Continuous monitoring, updates and feature growth." },
  { icon: Globe2, title: "Pan-India & Global Reach", text: "Trusted partners serving clients across continents." },
];

const process = [
  { icon: Search, title: "Discovery" },
  { icon: ClipboardList, title: "Planning" },
  { icon: Palette, title: "Design" },
  { icon: Code2, title: "Development" },
  { icon: FlaskConical, title: "Testing" },
  { icon: Send, title: "Deployment" },
  { icon: ShieldCheck, title: "Support" },
];

const testimonials = [
  { quote: "Atulit transformed our legacy systems into a modern SaaS platform. Their team is exceptional.", name: "Rajesh Sharma", company: "FoodChain Pvt Ltd, Jaipur" },
  { quote: "The mobile app they built doubled our user engagement within 3 months. Highly recommended.", name: "Priya Mehta", company: "EduPro India, Mumbai" },
  { quote: "Professional, fast and incredibly skilled. Our blockchain platform launched flawlessly.", name: "Arjun Kapoor", company: "ChainLabs, Delhi" },
  { quote: "Best decision we made for our digital transformation journey. Truly world-class work.", name: "Neha Singh", company: "BuildRight Realty, Jaipur" },
];

export default function Home() {
  useEffect(() => { document.title = "Atulit Baldhama Digital Solutions | Innovating the Digital Future"; }, []);
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden mandala-bg">
        <div className="container-x py-16 md:py-24 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-gold-light bg-gold-light/30 text-xs font-semibold text-primary">
              ✦ Innovating the Digital Future
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] mb-6">
              Transforming Ideas into{" "}
              <span className="gradient-text">Powerful Digital Solutions</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl">
              We build mobile apps, custom software, SaaS platforms, AI solutions, blockchain apps & more — engineered for your business growth.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/services" className="btn-primary">Explore Our Services <ArrowRight size={18} /></Link>
              <Link to="/contact" className="btn-outline-gold">Talk to an Expert</Link>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-gold/20 rounded-full blur-3xl" />
            <div className="relative aspect-square max-w-md mx-auto rounded-full bg-gradient-to-br from-surface to-gold-light/40 p-8 shadow-gold-glow">
              <img src={logo} alt="Atulit emblem" className="w-full h-full object-contain animate-fade-in" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-surface border-y-2 border-gold-light">
        <div className="container-x py-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s, i) => (
            <div key={i}>
              <s.icon className="mx-auto mb-2 text-gold" size={32} />
              <div className="text-3xl md:text-4xl font-extrabold text-primary"><Counter to={s.value} /></div>
              <div className="text-sm text-foreground/70 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="section">
        <div className="container-x">
          <SectionHeading eyebrow="What We Do" title="Services Built to Scale" subtitle="Twelve full-service practice areas under one roof." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map(s => (
              <motion.div key={s.slug} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="card-brand">
                <Icon name={s.icon} className="text-gold mb-4" size={36} />
                <h3 className="text-xl text-primary mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{s.desc}</p>
                <Link to="/services" className="text-primary font-semibold text-sm inline-flex items-center gap-1 hover:text-primary-dark">Learn More <ArrowRight size={14} /></Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="section bg-surface">
        <div className="container-x">
          <SectionHeading eyebrow="Verticals" title="Industries We Serve" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {INDUSTRIES.map(i => (
              <div key={i.title} className="card-brand text-center bg-background">
                <div className="text-4xl mb-3">{i.emoji}</div>
                <h3 className="text-base text-primary">{i.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECH MARQUEE */}
      <section className="section">
        <div className="container-x">
          <SectionHeading eyebrow="Stack" title="Technologies We Master" />
        </div>
        <Marquee gradient gradientColor="#FFFFFF" speed={40} pauseOnHover>
          {ALL_TECH.map((t, i) => (
            <span key={i} className="mx-2 px-5 py-2 rounded-full border-2 border-gold bg-background text-primary font-semibold text-sm whitespace-nowrap">
              {t}
            </span>
          ))}
        </Marquee>
      </section>

      {/* WHY */}
      <section className="section bg-surface">
        <div className="container-x">
          <SectionHeading eyebrow="Our Edge" title="Why Choose Atulit?" />
          <div className="grid md:grid-cols-3 gap-6">
            {why.map(w => (
              <div key={w.title} className="card-brand bg-background">
                <w.icon className="text-gold mb-3" size={32} />
                <h3 className="text-lg text-primary mb-2">{w.title}</h3>
                <p className="text-sm text-muted-foreground">{w.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section">
        <div className="container-x">
          <SectionHeading eyebrow="Workflow" title="Our Process" />
          <div className="relative">
            <div className="hidden md:block absolute top-8 left-[6%] right-[6%] h-1 bg-gradient-to-r from-primary via-gold to-primary rounded-full" />
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-7 gap-6 relative">
              {process.map((p, idx) => (
                <div key={p.title} className="text-center">
                  <div className="mx-auto w-16 h-16 rounded-full bg-gradient-to-br from-primary to-gold flex items-center justify-center text-white shadow-gold-glow relative z-10">
                    <p.icon size={26} />
                  </div>
                  <div className="mt-3 text-xs text-gold-dark font-semibold">STEP {idx + 1}</div>
                  <div className="font-bold text-primary">{p.title}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <Testimonials items={testimonials} />

      {/* CTA */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary-dark to-gold-dark text-white">
        <div className="absolute inset-0 mandala-bg opacity-30" />
        <div className="container-x py-16 md:py-20 text-center relative">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4">Ready to Build Something Amazing?</h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">Let's turn your idea into a world-class digital product.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-white bg-transparent text-white font-semibold hover:bg-white hover:text-primary transition-colors">
            Start Your Project Today <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}

function Testimonials({ items }) {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setI(p => (p + 1) % items.length), 4500);
    return () => clearInterval(id);
  }, [paused, items.length]);
  return (
    <section className="section bg-surface">
      <div className="container-x">
        <SectionHeading eyebrow="Voices" title="What Our Clients Say" />
        <div className="max-w-3xl mx-auto" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="card-brand bg-background text-center p-8 md:p-10">
            <div className="flex justify-center gap-1 mb-4">
              {Array.from({ length: 5 }).map((_, k) => <Star key={k} size={20} className="fill-gold text-gold" />)}
            </div>
            <p className="italic text-muted-foreground text-lg mb-6">"{items[i].quote}"</p>
            <div className="font-bold text-primary">{items[i].name}</div>
            <div className="text-sm text-muted-foreground">{items[i].company}</div>
          </motion.div>
          <div className="flex justify-center gap-2 mt-6">
            {items.map((_, k) => (
              <button key={k} onClick={() => setI(k)} aria-label={`Go to slide ${k+1}`}
                className={`h-2 rounded-full transition-all ${k === i ? "w-8 bg-primary" : "w-2 bg-gold-light"}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
