export default function SectionHeading({ eyebrow, title, subtitle, center = true }) {
  return (
    <div className={`mb-12 ${center ? "text-center" : ""}`}>
      {eyebrow && <div className="text-sm font-semibold text-gold-dark uppercase tracking-wider mb-2">{eyebrow}</div>}
      <h2 className={`text-3xl md:text-4xl text-primary ${center ? "heading-accent" : ""}`}>{title}</h2>
      {subtitle && <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>}
    </div>
  );
}
