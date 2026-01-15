import { motion } from "framer-motion";

export function PageBanner({ title, subtitle, image = "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop" }) {
  return (
    <section className="relative h-[40vh] md:h-[60vh] lg:h-[70vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#094090]/80 to-[#094090]/60 mix-blend-multiply" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center text-white">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold font-display mb-4 drop-shadow-lg uppercase tracking-tight">
            {title}
          </h1>
          {subtitle && <p className="text-lg md:text-2xl font-light opacity-90 max-w-3xl mx-auto">{subtitle}</p>}
        </motion.div>
      </div>
    </section>
  );
}
