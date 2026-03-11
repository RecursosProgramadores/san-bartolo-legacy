import { motion } from "framer-motion";
import { Shield, MapPin, FileCheck, TrendingUp } from "lucide-react";
import clubhouseEvent from "@/assets/clubhouse-event.jpg";
import aerialSanbartolo from "@/assets/aerial-sanbartolo.jpg";
import legalDocs from "@/assets/legal-docs.jpg";

const differentials = [
  {
    icon: Shield,
    title: "La paz de una realidad palpable",
    description:
      "A diferencia de las promesas en papel, aquí el estilo de vida ya existe. Caminar por las áreas verdes, ver el club house funcionando y a las familias viviendo es la única garantía real para tu inversión.",
    fomo: "Las mejores ubicaciones se agotan mientras otros siguen esperando planos.",
    image: clubhouseEvent,
    imageAlt: "Estilo de vida real y consolidado en Buenavista",
  },
  {
    icon: MapPin,
    title: "El refugio perfecto, en el lugar correcto",
    description:
      "Ubicado en la zona de mayor exclusividad y seguridad de San Bartolo. Un entorno diseñado para quienes valoran la privacidad sin alejarse de la conectividad que el éxito exige.",
    fomo: "San Bartolo es el nuevo epicentro del lujo costero. Entrar ahora es asegurar tu lugar.",
    image: aerialSanbartolo,
    imageAlt: "Exclusiva ubicación en San Bartolo",
  },
  {
    icon: FileCheck,
    title: "Certeza absoluta para tu patrimonio",
    description:
      "Toda la documentación está lista y verificada. Nuestra prioridad es que tu única preocupación sea imaginar cómo será tu nueva casa, no los papeles.",
    fomo: "La exclusividad requiere respaldo. Aquí construyes sobre cimientos legales sólidos.",
    image: legalDocs,
    imageAlt: "Seguridad jurídica total para tu inversión",
  },
];

const DifferentialsSection = () => {
  return (
    <section className="bv-section bv-cream-bg py-20 md:py-32">
      <div className="bv-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="bv-headline text-foreground mb-4">
            ¿Por qué <span className="bv-gold-text italic">Buenavista</span> es diferente?
          </h2>
          <p className="bv-subheadline text-muted-foreground max-w-2xl mx-auto">
            No vendemos sueños. Mostramos realidades. Ven y compruébalo tú mismo.
          </p>
        </motion.div>

        <div className="space-y-16 md:space-y-24">
          {differentials.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className={`flex flex-col ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-10 md:gap-16 items-center`}
            >
              {/* Image */}
              <div className="w-full md:w-1/2 rounded-2xl overflow-hidden group cursor-pointer"
                style={{ boxShadow: "var(--shadow-elegant)" }}>
                <img
                  src={item.image}
                  alt={item.imageAlt}
                  className="w-full h-72 md:h-96 object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Content */}
              <div className="w-full md:w-1/2 space-y-5">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bv-gold-gradient flex items-center justify-center shrink-0"
                    style={{ boxShadow: "0 4px 20px hsla(45, 82%, 53%, 0.3)" }}>
                    <item.icon className="w-7 h-7 text-bv-dark" />
                  </div>
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground">{item.title}</h3>
                </div>
                <p className="text-muted-foreground text-lg leading-relaxed">{item.description}</p>
                <div className="flex items-start gap-2 pt-2 p-4 rounded-xl"
                  style={{ background: "hsla(45, 82%, 53%, 0.08)" }}>
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
          className="mt-20 text-center border border-bv-gold/30 rounded-2xl p-10 md:p-14"
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
