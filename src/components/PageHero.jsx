import { motion } from "framer-motion";

export default function PageHero({ title, subtitle, breadcrumb }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary-dark to-gold-dark text-white">
      <div className="absolute inset-0 mandala-bg opacity-30" />
      <div className="container-x py-16 md:py-24 relative">
        {breadcrumb && (
          <div className="text-sm text-white/80 mb-3">{breadcrumb}</div>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold">
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-white/90 max-w-2xl text-lg">
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}
