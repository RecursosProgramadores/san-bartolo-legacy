import { motion } from "framer-motion";
import { Shield, MapPin, FileCheck, TrendingUp } from "lucide-react";
import poolCommunity from "@/assets/pool-community.jpg";
import aerialSanbartolo from "@/assets/aerial-sanbartolo.jpg";

const differentials = [
  {
    icon: Shield,
    title: "Proyecto ya consolidado",
    description:
      "Más de 800 lotes vendidos, etapas desarrolladas, club houses funcionando y familias viviendo. Mientras otros venden promesas en papel, aquí ya puedes tocar y vivir el resultado.",
    fomo: "Las etapas ya entregadas se vendieron rápido. Las nuevas no duran mucho.",
    image: poolCommunity,
  },
  {
    icon: MapPin,
    title: "Ubicación estratégica en San Bartolo",
    description:
      "3er distrito más seguro de Lima, a solo 30 minutos por la Panamericana Sur (Km 50). Cerca de boulevards, comercio en crecimiento y con la playa a minutos. Zona de alta revalorización.",
    fomo: "El crecimiento urbano de San Bartolo ya empezó. Los que entraron primero hoy celebran.",
    image: aerialSanbartolo,
  },
  {
    icon: FileCheck,
    title: "Respaldo legal total",
    description:
      "Partida registral verificable en SUNARP y RUC activo en SUNAT. Compra con total tranquilidad y documentación al 100%.",
    fomo: "No arriesgues tu inversión con proyectos sin respaldo. Aquí todo es verificable.",
    image: null,
  },
];

const DifferentialsSection = () => {
  return (
    <section className="bv-section bv-dark-bg">
      <div className="bv-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="bv-headline mb-4">
            ¿Por qué <span className="bv-gold-text italic">Buenavista</span> es diferente?
          </h2>
          <p className="bv-subheadline text-bv-warm-white/70 max-w-2xl mx-auto">
            No vendemos sueños. Mostramos realidades. Ven y compruébalo tú mismo.
          </p>
        </motion.div>

        <div className="space-y-12 md:space-y-20">
          {differentials.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`flex flex-col ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-8 md:gap-12 items-center`}
            >
              {/* Image */}
              {item.image ? (
                <div className="w-full md:w-1/2 rounded-2xl overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 md:h-80 object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              ) : (
                <div className="w-full md:w-1/2 rounded-2xl overflow-hidden bg-bv-forest/20 h-64 md:h-80 flex items-center justify-center">
                  <div className="text-center p-8">
                    <FileCheck className="w-20 h-20 text-bv-gold mx-auto mb-4" />
                    <p className="text-bv-warm-white/60 text-sm">SUNARP • SUNAT • Documentación verificable</p>
                  </div>
                </div>
              )}

              {/* Content */}
              <div className="w-full md:w-1/2 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bv-gold-gradient flex items-center justify-center shrink-0">
                    <item.icon className="w-6 h-6 text-bv-dark" />
                  </div>
                  <h3 className="font-display text-2xl md:text-3xl font-bold">{item.title}</h3>
                </div>
                <p className="text-bv-warm-white/80 text-lg leading-relaxed">{item.description}</p>
                <div className="flex items-start gap-2 pt-2">
                  <TrendingUp className="w-5 h-5 text-bv-gold mt-0.5 shrink-0" />
                  <p className="text-bv-gold font-medium text-sm italic">{item.fomo}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* FOMO banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center border border-bv-gold/30 rounded-2xl p-8 md:p-12"
          style={{ background: "hsla(45, 82%, 53%, 0.05)" }}
        >
          <p className="text-bv-gold font-display text-xl md:text-2xl font-semibold italic">
            "El precio sube con cada etapa nueva que entregamos.<br className="hidden md:block" />
            Mientras lo piensas, otros ya están asegurando su futuro."
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default DifferentialsSection;
