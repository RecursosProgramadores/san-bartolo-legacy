import { motion } from "framer-motion";
import { X, ShieldCheck, ImageIcon } from "lucide-react";
import legalDocs from "@/assets/legal-docs.jpg";

// Imports explícitos ZONAS SOCIALES
import zsPortada from "@/assets/etapas/zonasociales/portada.jpg";
import zs1 from "@/assets/etapas/zonasociales/image.jpg";
import zs2 from "@/assets/etapas/zonasociales/image2.jpg";
import zs3 from "@/assets/etapas/zonasociales/image3.jpg";
import zs4 from "@/assets/etapas/zonasociales/image4.jpg";
import zs5 from "@/assets/etapas/zonasociales/image5.jpg";
const zSocialesData = { portada: zsPortada, gallery: [zsPortada, zs1, zs2, zs3, zs4, zs5] };

// Imports explícitos PISCINAS
import pPortada from "@/assets/etapas/piscinas/portada.jpg";
import p1 from "@/assets/etapas/piscinas/image.jpg";
import p2 from "@/assets/etapas/piscinas/image2.jpg";
import p3 from "@/assets/etapas/piscinas/image3.jpg";
import p4 from "@/assets/etapas/piscinas/image4.jpg";
import p5 from "@/assets/etapas/piscinas/image5.jpg";
const piscinasData = { portada: pPortada, gallery: [pPortada, p1, p2, p3, p4, p5] };

// Imports explícitos CANCHAS DEPORTIVAS
import cPortada from "@/assets/etapas/canchasdeportivas/portada.jpg";
import c1 from "@/assets/etapas/canchasdeportivas/image.jpg";
import c2 from "@/assets/etapas/canchasdeportivas/image2.jpg";
import c3 from "@/assets/etapas/canchasdeportivas/image3.jpg";
import c4 from "@/assets/etapas/canchasdeportivas/image4.jpg";
import c5 from "@/assets/etapas/canchasdeportivas/image5.jpeg";
const canchasData = { portada: cPortada, gallery: [cPortada, c1, c2, c3, c4, c5] };

// Imports explícitos JUEGO NIÑOS
import jPortada from "@/assets/etapas/juegoninos/portada.jpg";
import j1 from "@/assets/etapas/juegoninos/image.jpg";
import j2 from "@/assets/etapas/juegoninos/image2.jpg";
import j3 from "@/assets/etapas/juegoninos/image3.jpg";
import j4 from "@/assets/etapas/juegoninos/image4.jpg";
import j5 from "@/assets/etapas/juegoninos/image5.jpg";
const juegosData = { portada: jPortada, gallery: [jPortada, j1, j2, j3, j4, j5] };

// Imports explícitos PET FRIENDLY
import pfPortada from "@/assets/etapas/petfriendly/portada.jpeg";
import pf1 from "@/assets/etapas/petfriendly/image.jpg";
import pf2 from "@/assets/etapas/petfriendly/image2.jpeg";
import pf3 from "@/assets/etapas/petfriendly/image3.jpg";
import pf4 from "@/assets/etapas/petfriendly/image4.jpg";
import pf5 from "@/assets/etapas/petfriendly/image5.jpg";
const petData = { portada: pfPortada, gallery: [pfPortada, pf1, pf2, pf3, pf4, pf5] };

// Reusable Collage Component for the Bento Grid look (6 Images)
const PhotoCollage = ({ images }: { images: string[] }) => {
  // Ensure we have 6 images for the full bento effect, filling with the first if not enough
  const img1 = images[0];
  const img2 = images[1] || images[0];
  const img3 = images[2] || images[0];
  const img4 = images[3] || images[0];
  const img5 = images[4] || images[0];
  const img6 = images[5] || images[0];

  return (
    <div className="w-full relative rounded-[2rem] overflow-hidden group border border-white/5 bg-white/5 shadow-2xl h-[450px] md:h-[600px]">
      <div className="absolute inset-0 grid grid-cols-4 grid-rows-3 gap-2 p-2">
        {/* Main Hero Image (Spans 2 cols, 2 rows) */}
        <div className="col-span-2 row-span-2 rounded-2xl overflow-hidden relative">
          <img src={img1} alt="Experiencia principal" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
          <div className="absolute inset-0 bg-bv-dark/10 group-hover:bg-transparent transition-colors duration-500" />
        </div>

        {/* Top Right large image (Spans 2 cols, 1 row) */}
        <div className="col-span-2 row-span-1 border border-transparent rounded-2xl overflow-hidden relative">
          <img src={img2} alt="Experiencia detalle" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
          <div className="absolute inset-0 bg-bv-dark/20 group-hover:bg-transparent transition-colors duration-500" />
        </div>

        {/* Middle Right small image (Spans 1 col, 1 row) */}
        <div className="col-span-1 row-span-1 rounded-2xl overflow-hidden relative">
          <img src={img3} alt="Experiencia detalle" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
          <div className="absolute inset-0 bg-bv-dark/20 group-hover:bg-transparent transition-colors duration-500" />
        </div>

        {/* Middle Right small image (Spans 1 col, 1 row) */}
        <div className="col-span-1 row-span-1 rounded-2xl overflow-hidden relative">
          <img src={img4} alt="Experiencia detalle" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
          <div className="absolute inset-0 bg-bv-dark/20 group-hover:bg-transparent transition-colors duration-500" />
        </div>

        {/* Bottom images (Row 3, spans 3 cols with 2 images) */}
        <div className="col-span-2 row-span-1 rounded-2xl overflow-hidden relative">
          <img src={img5} alt="Experiencia detalle" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 object-center" />
          <div className="absolute inset-0 bg-bv-dark/20 group-hover:bg-transparent transition-colors duration-500" />
        </div>
        <div className="col-span-2 row-span-1 rounded-2xl overflow-hidden relative">
          <img src={img6} alt="Experiencia detalle" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 object-center" />
          <div className="absolute inset-0 bg-bv-dark/20 group-hover:bg-transparent transition-colors duration-500" />
        </div>
      </div>
    </div>
  );
};


const ContrastSection = () => {
  return (
    <section className="bv-section bv-dark-bg py-24 md:py-32 relative overflow-hidden">
      {/* Cinematic gradient background overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-bv-dark via-bv-dark/95 to-bv-dark" />
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-bv-gold/10 to-transparent" />

      <div className="bv-container relative z-10 px-4 md:px-8 lg:px-12 xl:px-20">
        <div className="max-w-4xl mx-auto text-center mb-16 md:mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-bv-warm-white mb-6 leading-tight"
          >
            ¿Te ha pasado esto al buscar un <span className="italic bv-gold-text">proyecto inmobiliario</span>?
          </motion.h2>
        </div>

        {/* Section: THE PROBLEM (Real Estate Pain Points) */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24 md:mb-32">
          {/* Left Column: Negative Points */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col space-y-6"
          >
            <div className="space-y-4">
              {[
                "Proyectos que solo existen en planos.",
                "Promesas de club house, parques o áreas comunes que cuando visitas el lugar aún no existen.",
                "Inversiones que no se valorizan con el tiempo.",
                "Zonas donde el crecimiento urbano nunca llega.",
                "Proyectos donde no sabes quién está detrás."
              ].map((point, i) => (
                <div key={i} className="flex items-start gap-4 group">
                  <div className="w-6 h-6 rounded-full bg-destructive/10 flex items-center justify-center shrink-0 mt-1 border border-destructive/20 group-hover:bg-destructive/20 transition-colors">
                    <X className="w-3 h-3 text-destructive" />
                  </div>
                  <p className="text-base md:text-lg text-bv-warm-white/70 group-hover:text-bv-warm-white transition-colors duration-300">
                    {point}
                  </p>
                </div>
              ))}

              <div className="flex items-start gap-4 group mt-6">
                <div className="w-6 h-6 rounded-full bg-destructive/10 flex items-center justify-center shrink-0 mt-1 border border-destructive/20 group-hover:bg-destructive/20 transition-colors">
                  <X className="w-3 h-3 text-destructive" />
                </div>
                <div className="text-base md:text-lg text-bv-warm-white/70 group-hover:text-bv-warm-white transition-colors duration-300">
                  <p className="mb-2">Empresas que venden terrenos pero no tienen:</p>
                  <ul className="list-disc pl-6 space-y-1 text-bv-warm-white/50">
                    <li>Trayectoria</li>
                    <li>Proyectos desarrollados</li>
                    <li>Respaldo legal</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Connector & Assurance */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-bv-gold/20 to-transparent blur-3xl opacity-40" />
            <div className="relative rounded-[2rem] border border-bv-gold/20 bg-bv-dark/50 p-8 md:p-12 backdrop-blur-sm overflow-hidden group min-h-[400px] flex items-center">
              <div
                className="absolute inset-0 bg-cover bg-center opacity-20 mix-blend-luminosity group-hover:opacity-30 transition-opacity duration-700"
                style={{ backgroundImage: `url(${legalDocs})` }}
              />
              <div className="relative z-10 text-center w-full">
                <div className="w-20 h-20 mx-auto bg-bv-gold/10 rounded-full flex items-center justify-center mb-8 border border-bv-gold/30">
                  <ShieldCheck className="w-10 h-10 text-bv-gold" />
                </div>
                <p className="text-2xl md:text-3xl font-display text-bv-warm-white leading-relaxed">
                  Por eso <span className="text-bv-gold font-semibold">Buenavista</span> fue desarrollado para ofrecer lo que toda inversión inmobiliaria debería tener:<br /><br /><span className="italic block mt-2 text-3xl text-bv-gold">seguridad, respaldo y desarrollo real.</span>
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Section: THE SOLUTION (Experiencias en Familia) */}
        <div className="pt-20 border-t border-white/5 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-[1px] bg-gradient-to-r from-transparent via-bv-gold/50 to-transparent" />

          <div className="text-center mb-20 md:mb-32">
            <span className="text-[10px] uppercase tracking-[0.4em] text-bv-gold/70 mb-4 block font-bold">La Solución</span>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-bv-warm-white">
              Experiencias que puedes vivir en <span className="bv-gold-text italic">familia</span>
            </h3>
            <p className="text-xl md:text-2xl text-bv-warm-white/60 mt-6 font-light">
              Más de 25 espacios pensados para disfrutar en familia.
            </p>
          </div>

          <div className="space-y-20 md:space-y-32">

            {/* Block 1: Zonas Sociales */}
            <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center group">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="order-2 md:order-1"
              >
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-bv-gold font-display text-3xl font-bold opacity-30 group-hover:opacity-100 transition-opacity">01</span>
                  <div className="h-[2px] w-12 bg-bv-gold/30 group-hover:bg-bv-gold transition-colors" />
                </div>
                <h4 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-bv-warm-white mb-6">
                  Reuniones familiares al aire libre
                </h4>
                <p className="text-xl text-bv-gold/90 mb-6 italic font-display">
                  "Fines de semana que se disfrutan juntos en familia"
                </p>
                <p className="text-lg text-bv-warm-white/60 leading-relaxed">
                  Reuniones inolvidables con múltiples pérgolas, acogedoras fogatas y más de 40 parrillas a tu entera disposición.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                className="order-1 md:order-2"
              >
                <PhotoCollage
                  images={zSocialesData.gallery}
                />
              </motion.div>
            </div>

            {/* Block 2: Piscinas */}
            <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center group">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                className="order-1 aspect-[4/3] rounded-[2rem] overflow-hidden border border-white/10 relative cursor-pointer"
              >
                <PhotoCollage
                  images={piscinasData.gallery}
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="order-2"
              >
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-bv-gold font-display text-3xl font-bold opacity-30 group-hover:opacity-100 transition-opacity">02</span>
                  <div className="h-[2px] w-12 bg-bv-gold/30 group-hover:bg-bv-gold transition-colors" />
                </div>
                <h4 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-bv-warm-white mb-6">
                  Momentos para refrescarse y relajarse
                </h4>
                <p className="text-xl text-bv-gold/90 italic font-display">
                  "Días de sol, descanso y diversión"
                </p>
              </motion.div>
            </div>

            {/* Block 3: Canchas Deportivas */}
            <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center group">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="order-2 md:order-1"
              >
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-bv-gold font-display text-3xl font-bold opacity-30 group-hover:opacity-100 transition-opacity">03</span>
                  <div className="h-[2px] w-12 bg-bv-gold/30 group-hover:bg-bv-gold transition-colors" />
                </div>
                <h4 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-bv-warm-white mb-6">
                  Deporte y vida activa
                </h4>
                <div className="space-y-4 text-lg text-bv-warm-white/60 leading-relaxed">
                  <p>Partidos de fútbol, vóley, frontón o básquet con amigos y familia.</p>
                  <p>Un lugar donde el deporte se convierte en parte de la vida diaria.</p>
                  <p className="text-bv-gold font-medium mt-4">Porque crecer activo también es parte de una buena calidad de vida.</p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                className="order-1 md:order-2 aspect-[4/3] rounded-[2rem] overflow-hidden border border-white/10 relative cursor-pointer"
              >
                <PhotoCollage
                  images={canchasData.gallery}
                />
              </motion.div>
            </div>

            {/* Block 4: Juegos Niños */}
            <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center group">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                className="order-1 aspect-[4/3] rounded-[2rem] overflow-hidden border border-white/10 relative cursor-pointer"
              >
                <PhotoCollage
                  images={juegosData.gallery}
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="order-2"
              >
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-bv-gold font-display text-3xl font-bold opacity-30 group-hover:opacity-100 transition-opacity">04</span>
                  <div className="h-[2px] w-12 bg-bv-gold/30 group-hover:bg-bv-gold transition-colors" />
                </div>
                <h4 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-bv-warm-white mb-6">
                  Infancia con más libertad
                </h4>
                <div className="space-y-4 text-lg text-bv-warm-white/60 leading-relaxed">
                  <p>Espacios donde los niños pueden correr, jugar y divertirse al aire libre.</p>
                  <p className="text-bv-gold italic">Una infancia con más movimiento y menos pantallas.</p>
                </div>
              </motion.div>
            </div>

            {/* Block 5: Pet Friendly */}
            <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center group">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="order-2 md:order-1"
              >
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-bv-gold font-display text-3xl font-bold opacity-30 group-hover:opacity-100 transition-opacity">05</span>
                  <div className="h-[2px] w-12 bg-bv-gold/30 group-hover:bg-bv-gold transition-colors" />
                </div>
                <h4 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-bv-warm-white mb-6">
                  Momentos con tu mascota
                </h4>
                <p className="text-lg text-bv-warm-white/60 leading-relaxed">
                  Un entorno donde tu mascota también puede disfrutar con total libertad en áreas diseñadas y seguras.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                className="order-1 md:order-2 aspect-[4/3] rounded-[2rem] overflow-hidden border border-white/10 relative cursor-pointer"
              >
                <PhotoCollage
                  images={petData.gallery}
                />
              </motion.div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ContrastSection;
