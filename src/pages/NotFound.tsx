import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";
import { useEffect } from "react";

export default function NotFound() {
  useEffect(() => { document.title = "404 | Atulit Baldhama Digital Solutions"; }, []);
  return (
    <div className="min-h-[70vh] flex items-center justify-center mandala-bg">
      <div className="text-center px-4">
        <img src={logo} alt="logo" className="mx-auto h-24 w-24 rounded-full ring-4 ring-gold-light shadow-gold-glow mb-6" />
        <div className="text-7xl md:text-9xl font-extrabold gradient-text">404</div>
        <h1 className="text-2xl md:text-3xl text-primary mt-2 mb-4">Page Not Found</h1>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">The page you're looking for has wandered off the path. Let's get you back home.</p>
        <Link to="/" className="btn-primary">← Back to Home</Link>
      </div>
    </div>
  );
}
