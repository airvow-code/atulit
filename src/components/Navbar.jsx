import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";
import { COMPANY } from "@/data/site";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/technologies", label: "Technologies" },
  { to: "/industries", label: "Industries" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const loc = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [loc.pathname]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${scrolled ? "bg-background/95 backdrop-blur border-b border-gold-light shadow-sm" : "bg-background/80 backdrop-blur"}`}>
      <div className="container-x flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center gap-3 min-w-0">
          <img src={logo} alt="Atulit Baldhama logo" className="h-10 w-10 md:h-12 md:w-12 rounded-full ring-2 ring-gold-light shrink-0" />
          <span className="hidden sm:block font-display font-bold text-primary text-sm md:text-base leading-tight truncate">
            {COMPANY.shortName}
          </span>
        </Link>
        <nav className="hidden lg:flex items-center gap-1">
          {links.map(l => (
            <NavLink key={l.to} to={l.to} end={l.to === "/"}
              className={({ isActive }) =>
                `px-3 py-2 text-sm font-medium relative transition-colors ${isActive ? "text-primary" : "text-foreground hover:text-primary"} after:absolute after:left-3 after:right-3 after:-bottom-0.5 after:h-0.5 after:bg-gold after:scale-x-0 after:origin-left after:transition-transform hover:after:scale-x-100 ${isActive ? "after:scale-x-100" : ""}`}>
              {l.label}
            </NavLink>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link to="/contact" className="hidden md:inline-flex btn-primary !py-2 !px-4 text-sm">Get a Free Quote</Link>
          <button onClick={() => setOpen(!open)} className="lg:hidden text-primary p-2" aria-label="Menu">
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {open && (
        <div className="lg:hidden border-t border-gold-light bg-background animate-fade-in">
          <div className="container-x py-3 flex flex-col">
            {links.map(l => (
              <NavLink key={l.to} to={l.to} end={l.to === "/"}
                className={({ isActive }) => `py-3 border-b border-gold-light/60 text-sm font-medium ${isActive ? "text-primary" : "text-foreground"}`}>
                {l.label}
              </NavLink>
            ))}
            <Link to="/contact" className="btn-primary mt-4 w-full">Get a Free Quote</Link>
          </div>
        </div>
      )}
    </header>
  );
}
