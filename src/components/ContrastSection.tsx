import { motion } from "framer-motion";
import { X, CheckCircle2 } from "lucide-react";
import cityStress from "@/assets/city-stress.jpg";
import kidsPool from "@/assets/kids-pool.jpg";
import clubhouseEvent from "@/assets/clubhouse-event.jpg";
import petsArea from "@/assets/pets-area.jpg";
import parentsRelaxing from "@/assets/parents-relaxing.jpg";
import aerialSanBartolo from "@/assets/aerial-sanbartolo.jpg";

const painPoints = [
  "El agotamiento de vivir en un entorno que ya no refleja el nivel de éxito que has alcanzado",
  "La preocupación constante de que tus hijos crezcan en calles inseguras y ruidosas",
  "El estrés invisible del tráfico y la contaminación que te roba tiempo de calidad",
  "La sensación de que el tiempo pasa y aún no has asegurado ese refugio exclusivo para tu familia",
];

const ContrastSection = () => {
  return (
    <section className="bv-section bv-dark-bg py-24 md:py-48 relative overflow-hidden">
      {/* Cinematic gradient background overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-bv-dark via-bv-dark/95 to-bv-dark" />
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-bv-gold/10 to-transparent" />

      <div className="bv-container relative z-10 px-4 md:px-8 lg:px-12 xl:px-20">
        <div className="max-w-4xl mx-auto text-center mb-20 md:mb-32">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-7xl font-display font-bold text-bv-warm-white mb-8"
          >
            ¿Te suena <span className="italic bv-gold-text">familiar</span>?
          </motion.h2>
          <p className="text-lg md:text-2xl text-bv-warm-white/40 leading-relaxed max-w-2xl mx-auto">
            La mayoría de familias viven en un lugar que ya no refleja quiénes son. <br className="hidden md:block" /> Tú mereces algo diferente.
          </p>
        </div>

        <div className="grid lg:grid-cols-[0.8fr,1.2fr] gap-16 lg:gap-24 xl:gap-32 items-start">

          {/* Section: TU SITUACIÓN ACTUAL */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col"
          >
            <div className="relative mb-12 group">
              <div className="absolute -inset-1 bg-gradient-to-r from-destructive/30 to-transparent blur-3xl opacity-40 group-hover:opacity-60 transition duration-1000" />
              <div className="relative aspect-[16/10] rounded-[2.5rem] overflow-hidden grayscale contrast-125 brightness-75 border-2 border-white/5">
                <img src={cityStress} alt="Estrés urbano" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-bv-dark via-bv-dark/20 to-transparent" />
                <div className="absolute bottom-8 left-8">
                  <span className="text-[10px] uppercase tracking-[0.4em] text-bv-warm-white/40 mb-3 block font-bold">La realidad urbana</span>
                  <h3 className="text-2xl md:text-4xl font-display font-bold text-bv-warm-white">Tu situación actual</h3>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              {painPoints.map((point, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i }}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-8 h-8 rounded-xl bg-destructive/10 flex items-center justify-center shrink-0 mt-1 border border-destructive/20 group-hover:bg-destructive/20 transition-colors">
                    <X className="w-4 h-4 text-destructive" />
                  </div>
                  <p className="text-base md:text-lg text-bv-warm-white/50 group-hover:text-bv-warm-white/90 transition-colors duration-300 leading-relaxed">
                    {point}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Section: IMAGÍNATE ASÍ... (Premium Bento Collage) */}
          <div className="flex flex-col">
            <div className="mb-12">
              <span className="text-[10px] uppercase tracking-[0.4em] text-bv-gold/70 mb-3 block font-bold">Vida en comunidad</span>
              <h3 className="text-3xl md:text-5xl font-display font-bold text-bv-warm-white">
                <span className="bv-gold-text italic">Imagínate</span> así…
              </h3>
            </div>

            <div className="grid grid-cols-2 gap-4 md:gap-6 lg:gap-8 auto-rows-[1.2fr] md:auto-rows-[1fr]">
              {/* Card 1: Infancia Real (Tall) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="col-span-2 md:col-span-1 row-span-2 relative group overflow-hidden rounded-[2.5rem] border-2 border-bv-gold/30 shadow-2xl min-h-[400px]"
              >
                <img src={kidsPool} alt="Infancia" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-t from-bv-dark via-bv-dark/5 to-transparent" />
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="flex items-center gap-2 mb-3">
                    <CheckCircle2 className="w-4 h-4 text-bv-gold" />
                    <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-bv-gold">Infancia Real</span>
                  </div>
                  <p className="text-xl md:text-2xl text-bv-warm-white font-medium leading-tight">
                    Tus hijos explorando con total libertad en un entorno privado
                  </p>
                </div>
              </motion.div>

              {/* Card 2: Paz Absoluta */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="col-span-1 row-span-1 relative group overflow-hidden rounded-[2.5rem] border-2 border-white/5 min-h-[200px]"
              >
                <img src={clubhouseEvent} alt="Atardeceres" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                <div className="absolute inset-0 bg-bv-dark/60 group-hover:bg-bv-dark/40 transition-colors" />
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <p className="text-sm md:text-base text-bv-warm-white font-medium text-center">Atardeceres de paz absoluta</p>
                </div>
              </motion.div>

              {/* Card 3: Comunidad Selecta */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="col-span-1 row-span-1 relative group overflow-hidden rounded-[2.5rem] border-2 border-white/5 min-h-[200px]"
              >
                <img src={petsArea} alt="Comunidad" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                <div className="absolute inset-0 bg-bv-dark/60 group-hover:bg-bv-dark/40 transition-colors" />
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <p className="text-sm md:text-base text-bv-warm-white font-medium text-center">Comunidad que comparte tus valores</p>
                </div>
              </motion.div>

              {/* Card 4: Legado (Wide Card) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="col-span-2 row-span-1 relative group overflow-hidden rounded-[2.5rem] border-2 border-white/5 bg-white/5 backdrop-blur-md min-h-[200px]"
              >
                <img src={aerialSanBartolo} alt="Legado" className="absolute inset-0 w-full h-full object-cover opacity-50 blur-[2px] group-hover:scale-110 group-hover:opacity-80 group-hover:blur-0 transition-all duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-r from-bv-dark/80 via-transparent to-bv-dark/80" />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                  <CheckCircle2 className="w-8 h-8 text-bv-gold mb-4" />
                  <p className="text-xl md:text-3xl text-bv-warm-white font-display font-medium leading-tight max-w-lg">
                    Un legado tangible que tus hijos y nietos agradecerán
                  </p>
                </div>
              </motion.div>

              {/* Card 5: Inversion (Bottom Wide) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="col-span-2 relative p-8 md:p-12 rounded-[2.5rem] bg-bv-gold text-bv-dark overflow-hidden group border border-bv-gold/20"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent pointer-none" />
                <div className="relative z-10 flex flex-col md:flex-row items-center gap-6 justify-between text-center md:text-left">
                  <p className="text-2xl md:text-3xl font-display font-bold leading-tight">
                    La tranquilidad de hoy, será la gran inversión de tu mañana
                  </p>
                  <img src={parentsRelaxing} alt="Tranquilidad" className="w-32 h-32 rounded-full object-cover border-4 border-bv-dark/20 shadow-xl group-hover:scale-110 transition-transform duration-500" />
                </div>
              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContrastSection;
