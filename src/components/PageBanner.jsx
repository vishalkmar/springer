import { motion } from "framer-motion";

export function PageBanner({
  title,
  subtitle,
  image = "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
}) {
  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-[#42a1f5]/40 to-[#42a1f5]/20" />
        <div className="absolute inset-0 bg-black/10" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl text-white md:text-6xl lg:text-8xl font-bold font-display mb-6 drop-shadow-2xl uppercase tracking-tighter leading-none">
            {title}
          </h1>

          {subtitle && (
            <div className="bg-white/10 backdrop-blur-md px-8 py-3 rounded-full inline-block border border-white/20">
              <p className="text-sm md:text-lg font-medium tracking-widest uppercase text-white">
                {subtitle}
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
