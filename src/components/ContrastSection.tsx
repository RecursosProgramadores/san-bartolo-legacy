import { motion } from "framer-motion";
import { X, Sparkles } from "lucide-react";
import cityStress from "@/assets/city-stress.jpg";
import dreamLifestyle from "@/assets/dream-lifestyle.jpg";
import kidsPool from "@/assets/kids-pool.jpg";
import clubhouseEvent from "@/assets/clubhouse-event.jpg";
import petsArea from "@/assets/pets-area.jpg";
import parentsRelaxing from "@/assets/parents-relaxing.jpg";

const painPoints = [
  "Vivir en un entorno que ya no representa lo que has logrado",
  "Tus hijos crecen sin espacios seguros para jugar",
  "Ruido, tráfico y estrés que nunca terminan",
  "Sentir que el tiempo pasa y no tienes algo verdaderamente tuyo",
];

const dreamPoints = [
  {
    text: "Tus hijos corriendo libres en áreas verdes mientras tú disfrutas del club house con tu familia",
    image: kidsPool,
    imageAlt: "IMAGEN_REAL: Niños disfrutando en la piscina del condominio Buenavista",
  },
  {
    text: "Reuniones familiares inolvidables junto a la piscina, con la tranquilidad de un condominio privado",
    image: clubhouseEvent,
    imageAlt: "IMAGEN_REAL: Familia en el club house de Buenavista",
  },
  {
    text: "Tu mascota siendo parte de la comunidad, con espacios diseñados para ella",
    image: petsArea,
    imageAlt: "IMAGEN_REAL: Mascotas jugando en áreas verdes del condominio",
  },
  {
    text: "Seguridad 24/7 y vecinos que se convierten en amigos de toda la vida",
    image: parentsRelaxing,
    imageAlt: "IMAGEN_REAL: Padres relajados disfrutando del atardecer en el condominio",
  },
  {
    text: "Todo esto mientras el valor de tu lote crece constantemente",
    image: null,
    imageAlt: "",
  },
];

const ContrastSection = () => {
  return (
    <section className="bv-section bv-dark-bg py-20 md:py-32">
      <div className="bv-container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bv-headline text-bv-warm-white text-center mb-4"
        >
          ¿Te suena <span className="italic bv-gold-text">familiar</span>?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-center text-bv-warm-white/60 mb-20 max-w-2xl mx-auto text-lg"
        >
          La mayoría de familias viven en un lugar que ya no refleja quiénes son. Tú mereces algo diferente.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          {/* Pain */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden mb-8">
              <img src={cityStress} alt="Estrés urbano" className="w-full h-72 object-cover rounded-2xl opacity-50" />
            </div>
            <h3 className="font-display text-2xl md:text-3xl font-bold text-bv-warm-white mb-6">Tu situación actual</h3>
            <div className="space-y-5">
              {painPoints.map((point, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i }}
                  className="flex items-start gap-3"
                >
                  <X className="w-5 h-5 text-destructive mt-0.5 shrink-0" />
                  <p className="text-bv-warm-white/70">{point}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Dream */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden mb-8">
              <img src={dreamLifestyle} alt="Vida en comunidad Buenavista" className="w-full h-72 object-cover rounded-2xl" />
            </div>
            <h3 className="font-display text-2xl md:text-3xl font-bold text-bv-warm-white mb-6">
              <span className="bv-gold-text">Imagínate</span> así…
            </h3>
            <div className="space-y-6">
              {dreamPoints.map((point, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i }}
                >
                  <div className="flex items-start gap-3 mb-3">
                    <Sparkles className="w-5 h-5 text-bv-gold mt-0.5 shrink-0" />
                    <p className="text-bv-warm-white/90">{point.text}</p>
                  </div>
                  {point.image && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                      className="ml-8 rounded-xl overflow-hidden"
                    >
                      <img
                        src={point.image}
                        alt={point.imageAlt}
                        className="w-full h-48 object-cover rounded-xl hover:scale-105 transition-transform duration-700"
                      />
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContrastSection;
