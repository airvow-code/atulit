import { useEffect } from "react";
import { Link } from "react-router-dom";
import PageHero from "@/components/PageHero";
import { COMPANY } from "@/data/site";
import { Target, Eye, Users, Award, Heart, Lightbulb, Rocket, Shield } from "lucide-react";

const values = [
  { icon: Award, title: "Excellence" },
  { icon: Heart, title: "Integrity" },
  { icon: Lightbulb, title: "Innovation" },
  { icon: Users, title: "Collaboration" },
  { icon: Rocket, title: "Agility" },
  { icon: Shield, title: "Trust" },
];

export default function About() {
  useEffect(() => { document.title = "About Us | Atulit Baldhama Digital Solutions"; }, []);
  return (
    <>
      <PageHero title="About Us" subtitle="A Jaipur-rooted IT company building world-class digital products since 2019."
        breadcrumb={<><Link to="/" className="hover:text-white">Home</Link> &gt; About</>} />
      <section className="section">
        <div className="container-x max-w-4xl mx-auto space-y-5 text-foreground/90 leading-relaxed">
          <p>
            <strong className="text-primary">Atulit Baldhama Digital Solutions Pvt Ltd.</strong> is a Jaipur-based information technology company delivering end-to-end digital solutions to startups, enterprises and government partners since 2019. From mobile apps and custom software to SaaS, AI, blockchain and cloud, we engineer products that move businesses forward.
          </p>
          <p>
            Our multidisciplinary team blends design thinking with deep engineering rigor to ship resilient, secure and beautiful software. Whether it's modernizing a legacy system, launching a new SaaS product or scaling a marketplace to millions of users, we bring focused expertise and disciplined execution.
          </p>
          <p>
            What sets us apart is a commitment to long-term partnerships. We treat every project as our own — owning timelines, quality, and outcomes — while staying transparent and adaptive throughout the journey. Headquartered in Jaipur with clients across India and beyond, we're proudly building the next generation of Indian digital infrastructure.
          </p>
        </div>
      </section>

      <section className="section bg-surface">
        <div className="container-x grid md:grid-cols-2 gap-6">
          <div className="card-brand bg-background">
            <Eye className="text-gold mb-3" size={32} />
            <h3 className="text-2xl text-primary mb-2">Our Vision</h3>
            <p className="text-muted-foreground">To be the most trusted digital solutions partner — known for engineering excellence, cultural roots and global ambition.</p>
          </div>
          <div className="card-brand bg-background">
            <Target className="text-gold mb-3" size={32} />
            <h3 className="text-2xl text-primary mb-2">Our Mission</h3>
            <p className="text-muted-foreground">To empower businesses through innovative, secure and scalable technology — delivered with craftsmanship, transparency and care.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          <h2 className="text-3xl text-primary heading-accent text-center mb-12">Core Values</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {values.map(v => (
              <div key={v.title} className="card-brand text-center">
                <v.icon className="mx-auto text-gold mb-2" size={28} />
                <div className="font-bold text-primary text-sm">{v.title}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-surface">
        <div className="container-x">
          <h2 className="text-3xl text-primary heading-accent text-center mb-12">Our Team</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[1,2,3,4].map(i => (
              <div key={i} className="card-brand bg-background text-center">
                <div className="mx-auto w-24 h-24 rounded-full bg-gradient-to-br from-primary to-gold mb-4" />
                <div className="font-bold text-primary">Team Member</div>
                <div className="text-sm text-muted-foreground">Senior Engineer</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-x grid md:grid-cols-2 gap-8">
          <div className="card-brand">
            <h3 className="text-xl text-primary mb-4">Company Registration</h3>
            <ul className="space-y-2 text-sm">
              <li><strong>CIN:</strong> {COMPANY.cin}</li>
              <li><strong>GST:</strong> {COMPANY.gst}</li>
              <li><strong>Registered Office:</strong> {COMPANY.address}</li>
            </ul>
          </div>
          <div className="rounded-2xl overflow-hidden border-2 border-gold-light h-64">
            <iframe title="Map" src="https://www.google.com/maps?q=Jhotwara+Jaipur&output=embed" className="w-full h-full" loading="lazy" />
          </div>
        </div>
      </section>
    </>
  );
}
