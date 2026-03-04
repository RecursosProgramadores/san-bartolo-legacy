import { motion } from "framer-motion";
import { X, Sparkles } from "lucide-react";
import cityStress from "@/assets/city-stress.jpg";
import dreamLifestyle from "@/assets/dream-lifestyle.jpg";

const painPoints = [
  "Vivir en un entorno que ya no representa lo que has logrado",
  "Tus hijos crecen sin espacios seguros para jugar",
  "Ruido, tráfico y estrés que nunca terminan",
  "Sentir que el tiempo pasa y no tienes algo verdaderamente tuyo",
];

const dreamPoints = [
  "Tus hijos corriendo libres en áreas verdes mientras tú disfrutas del club house con tu familia",
  "Reuniones familiares inolvidables junto a la piscina, con la tranquilidad de un condominio privado",
  "Tu mascota siendo parte de la comunidad, con espacios diseñados para ella",
  "Seguridad 24/7 y vecinos que se convierten en amigos de toda la vida",
  "Todo esto mientras el valor de tu lote crece constantemente",
];

const ContrastSection = () => {
  return (
    <section className="bv-section bv-cream-bg">
      <div className="bv-container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bv-headline text-foreground text-center mb-4"
        >
          ¿Te suena <span className="italic bv-gold-text">familiar</span>?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto text-lg"
        >
          La mayoría de familias viven en un lugar que ya no refleja quiénes son. Tú mereces algo diferente.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Pain */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl overflow-hidden"
          >
            <img src={cityStress} alt="Estrés urbano" className="w-full h-64 object-cover rounded-2xl opacity-60" />
            <div className="mt-6 space-y-4">
              <h3 className="font-display text-2xl font-bold text-foreground">Tu situación actual</h3>
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
                  <p className="text-muted-foreground">{point}</p>
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
            className="relative rounded-2xl overflow-hidden"
          >
            <img src={dreamLifestyle} alt="Vida en comunidad" className="w-full h-64 object-cover rounded-2xl" />
            <div className="mt-6 space-y-4">
              <h3 className="font-display text-2xl font-bold text-foreground">
                <span className="bv-gold-text">Imagínate</span> así…
              </h3>
              {dreamPoints.map((point, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i }}
                  className="flex items-start gap-3"
                >
                  <Sparkles className="w-5 h-5 text-bv-gold mt-0.5 shrink-0" />
                  <p className="text-foreground">{point}</p>
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
