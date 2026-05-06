import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram, Facebook } from "lucide-react";
import logo from "@/assets/logo.png";
import { COMPANY, SERVICES } from "@/data/site";

export default function Footer() {
  return (
    <footer className="bg-background border-t-2 border-gold-light mt-12">
      <div className="container-x py-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src={logo} alt="logo" className="h-12 w-12 rounded-full ring-2 ring-gold-light" />
            <div>
              <div className="font-bold text-primary leading-tight">Atulit Baldhama</div>
              <div className="text-xs text-muted-foreground">Digital Solutions Pvt Ltd.</div>
            </div>
          </div>
          <p className="text-sm text-muted-foreground mb-4">{COMPANY.tagline}.</p>
          <div className="flex gap-3 text-gold">
            <a href="#" aria-label="LinkedIn" className="hover:text-gold-dark"><Linkedin size={20} /></a>
            <a href="#" aria-label="Twitter" className="hover:text-gold-dark"><Twitter size={20} /></a>
            <a href="#" aria-label="Instagram" className="hover:text-gold-dark"><Instagram size={20} /></a>
            <a href="#" aria-label="Facebook" className="hover:text-gold-dark"><Facebook size={20} /></a>
          </div>
        </div>

        <div>
          <h4 className="font-bold text-primary mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {[["/","Home"],["/about","About"],["/services","Services"],["/technologies","Technologies"],["/industries","Industries"],["/portfolio","Portfolio"],["/blog","Blog"],["/contact","Contact"]].map(([to,l]) => (
              <li key={to}><Link to={to} className="text-foreground hover:text-gold-dark">{l}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-primary mb-4">Our Services</h4>
          <ul className="space-y-2 text-sm">
            {SERVICES.slice(0, 8).map(s => (
              <li key={s.slug}><Link to="/services" className="text-foreground hover:text-gold-dark">{s.title}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-primary mb-4">Contact</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-2"><MapPin size={18} className="text-primary shrink-0 mt-0.5" /><span>{COMPANY.address}</span></li>
            <li className="flex gap-2"><Phone size={18} className="text-primary shrink-0" /><a href={`tel:${COMPANY.phone}`}>{COMPANY.phone}</a></li>
            <li className="flex gap-2"><Mail size={18} className="text-primary shrink-0" /><a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gold-light">
        <div className="container-x py-5 flex flex-col md:flex-row gap-3 items-center justify-between text-xs text-muted-foreground">
          <div>CIN: {COMPANY.cin} | GST: {COMPANY.gst} | © 2025 Atulit Baldhama Digital Solutions Pvt Ltd.</div>
          <div className="flex gap-4">
            <Link to="/terms-and-conditions" className="hover:text-gold-dark">Terms & Conditions</Link>
            <Link to="/privacy-policy" className="hover:text-gold-dark">Privacy Policy</Link>
            <Link to="/disclaimer" className="hover:text-gold-dark">Disclaimer</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
