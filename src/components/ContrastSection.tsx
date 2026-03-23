import { motion } from "framer-motion";
import { X, ShieldCheck, ImageIcon } from "lucide-react";
import legalDocs from "@/assets/legal-docs.jpg";

// Imports explícitos ZONAS SOCIALES
import zs1 from "@/assets/etapas/zonasociales/cambio (1).jpeg";
import zs2 from "@/assets/etapas/zonasociales/image19.jpg";
import zs3 from "@/assets/etapas/zonasociales/image2.jpeg";
import zs4 from "@/assets/etapas/zonasociales/image3.jpg";
import zs5 from "@/assets/etapas/zonasociales/image30.jpg";
const zSocialesData = { portada: zs1, gallery: [zs1, zs2, zs3, zs4, zs5] };

// Imports explícitos PISCINAS
import p1 from "@/assets/etapas/piscinas/image.jpg";
import p2 from "@/assets/etapas/piscinas/image2.jpg";
import p3 from "@/assets/etapas/piscinas/image3.jpg";
const piscinasData = { portada: p1, gallery: [p1, p2, p3] };

// Imports explícitos CANCHAS DEPORTIVAS
import cPortada from "@/assets/etapas/canchasdeportivas/portada.jpeg";
import c1 from "@/assets/etapas/canchasdeportivas/image5.jpeg";
import c2 from "@/assets/etapas/canchasdeportivas/image7.jpeg";
import c3 from "@/assets/etapas/canchasdeportivas/image8.jpg";
import c4 from "@/assets/etapas/canchasdeportivas/image10.jpg";
const canchasData = { portada: cPortada, gallery: [cPortada, c1, c2, c3, c4] };

// Imports explícitos JUEGO NIÑOS
import j1 from "@/assets/etapas/juegoninos/image4.jpg";
import j3 from "@/assets/etapas/juegoninos/image41.jpeg";
import j4 from "@/assets/etapas/juegoninos/image5.jpg";
import j5 from "@/assets/etapas/juegoninos/image8.jpg";
const juegosData = { portada: j1, gallery: [j1, j3, j4, j5] };

// Imports explícitos PET FRIENDLY
import pfPortada from "@/assets/etapas/petfriendly/portada.jpeg";
import pf1 from "@/assets/etapas/petfriendly/image.jpg";
import pf2 from "@/assets/etapas/petfriendly/image2.jpeg";
const petData = { portada: pfPortada, gallery: [pfPortada, pf1, pf2] };

// Reusable Gallery Component for any number of images, completely static
const PhotoCollage = ({ images }: { images: string[] }) => {
  const count = images.length;

  // Desktop Grid Logic
  const getDesktopItemClasses = (idx: number) => {
    if (count === 3) {
      if (idx === 0) return "col-span-1 row-span-2";
      return "col-span-1 row-span-1";
    }
    if (count === 4) return "col-span-1 row-span-1";
    if (count === 5) {
      if (idx === 0 || idx === 1) return "col-span-3 row-span-2";
      return "col-span-2 row-span-1";
    }
    if (count === 8) {
      if (idx === 0 || idx === 4) return "col-span-2 row-span-2";
      if (idx === 1) return "col-span-2 row-span-1";
      return "col-span-1 row-span-1";
    }
    if (count === 9) {
      if (idx === 4) return "col-span-2 row-span-2";
      return "col-span-1 row-span-1";
    }
    return "col-span-1 row-span-1";
  };

  // Mobile Grid Logic (Vertical-first blocks)
  const getMobileItemClasses = (idx: number) => {
    if (count === 4) return "col-span-1 aspect-square"; // El usuario pidió un cuadrado 2x2 para Stage 04
    if (idx === 0) return "col-span-2 aspect-video"; // Primera imagen grande y completa para el resto
    return "col-span-1 aspect-square"; // El resto en parejas cuadradas
  };

  let desktopGridClasses = "grid gap-2 p-2 w-full h-full";
  if (count === 3) desktopGridClasses += " grid-cols-2 grid-rows-2";
  else if (count === 4) desktopGridClasses += " grid-cols-2 grid-rows-2";
  else if (count === 5) desktopGridClasses += " grid-cols-6 grid-rows-3";
  else if (count === 8) desktopGridClasses += " grid-cols-4 grid-rows-4";
  else if (count === 9) desktopGridClasses += " grid-cols-4 grid-rows-3";
  else desktopGridClasses += " grid-cols-2 auto-rows-fr";

  return (
    <div className="w-full relative group">
      {/* MOBILE: Vertical Grid Block (High Visibility, No Cuts) */}
      <div className="grid md:hidden grid-cols-2 gap-3 p-1 w-full relative">
        {images.map((img, idx) => (
          <div 
            key={idx} 
            className={`relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 ${getMobileItemClasses(idx)}`}
          >
            <img 
              src={img} 
              alt={`Detalle ${idx + 1}`} 
              className="absolute inset-0 w-full h-full object-cover" 
              style={{ filter: "contrast(1.05) saturate(1.1) brightness(0.95)" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-50" />
          </div>
        ))}
      </div>

      {/* DESKTOP: Premium Grid Collage */}
      <div className="hidden md:block w-full h-[500px] lg:h-[600px] xl:h-[700px] relative rounded-[2rem] overflow-hidden">
        <div className={`absolute inset-0 ${desktopGridClasses}`}>
          {images.map((img, idx) => (
            <div key={idx} className={`relative rounded-2xl overflow-hidden ${getDesktopItemClasses(idx)}`}>
              <img 
                src={img} 
                alt={`Detalle ${idx + 1}`} 
                className="absolute inset-0 w-full h-full object-cover" 
                style={{ filter: "contrast(1.1) saturate(1.1) brightness(0.9)" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10 mix-blend-multiply pointer-events-none opacity-40" />
              <div className="absolute inset-0 shadow-[inset_0_0_15px_rgba(0,0,0,0.3)] pointer-events-none rounded-2xl" />
            </div>
          ))}
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
            className="text-4xl md:text-5xl lg:text-5xl font-display font-black uppercase tracking-tighter leading-[1.05] text-bv-warm-white"
          >
            ¿Te ha pasado esto al buscar un <span className="text-bv-gold">proyecto inmobiliario?</span>
          </motion.h2>
        </div>

        {/* Section: THE COMPARISON (Problem vs Solution) */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-12 mb-24 md:mb-32">
          {/* Left Column: Otros proyectos */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-[2rem] border border-white/5 bg-white/[0.02] p-8 md:p-10 backdrop-blur-sm relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="15" y1="9" x2="9" y2="15" /><line x1="9" y1="9" x2="15" y2="15" /></svg>
            </div>
            
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-full bg-destructive/10 border border-destructive/20 flex items-center justify-center shrink-0">
                <X className="w-6 h-6 text-destructive" />
              </div>
              <h3 className="text-2xl font-display font-medium text-bv-warm-white/90">Otros proyectos</h3>
            </div>

            <ul className="space-y-6">
              {[
                "Proyectos que solo existen en planos",
                "Promesas de áreas comunes que aún no existen",
                "Proyectos ubicados en zonas muy alejadas de Lima",
                "Zonas sin expansión urbana",
                "Inversiones que generan dudas e incertidumbre",
                "Empresas sin trayectoria ni respaldo legal"
              ].map((item, i) => (
                <li key={i} className="flex gap-4">
                  <X className="w-5 h-5 text-destructive/70 shrink-0 mt-0.5" />
                  <span className="text-bv-warm-white/60 text-lg leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right Column: Nosotros (Buenavista) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="rounded-[2rem] border border-bv-gold/30 bg-bv-gold/[0.03] p-8 md:p-10 backdrop-blur-sm relative overflow-hidden group shadow-[0_0_40px_rgba(234,179,8,0.05)] hover:bg-bv-gold/5 transition-colors duration-500"
          >
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-bv-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            <div className="absolute -right-4 -top-4 p-8 opacity-10 transform group-hover:scale-110 transition-transform duration-700">
              <ShieldCheck className="w-32 h-32 text-bv-gold" />
            </div>

            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-full bg-bv-gold/10 border border-bv-gold/30 flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(234,179,8,0.3)]">
                  <ShieldCheck className="w-6 h-6 text-bv-gold" />
                </div>
                <h3 className="text-2xl font-display font-bold text-bv-gold">Buenavista Condominios</h3>
              </div>

              <ul className="space-y-6">
                {[
                  "Terrenos con desarrollo real que puedes visitar hoy",
                  "Más de 20 espacios familiares dentro del condominio",
                  "A solo 30 minutos de Lima en el km 50 de la Panamericana Sur",
                  "San Bartolo: zona con mayor crecimiento urbano de Lima",
                  "Más de 800 familias ya invirtieron con nosotros",
                  "+10 años de trayectoria y respaldo en SUNARP y SUNAT"
                ].map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <ShieldCheck className="w-5 h-5 text-bv-gold shrink-0 mt-0.5" />
                    <span className="text-bv-warm-white/90 text-lg leading-snug font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

      </div>

      <div className="w-full relative pt-20 border-t border-white/5 mx-auto z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-[1px] bg-gradient-to-r from-transparent via-bv-gold/50 to-transparent" />

        <div className="bv-container px-4 md:px-8 lg:px-12 xl:px-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto mb-16 md:mb-24"
          >
            <h3 className="font-display font-black uppercase tracking-tighter text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-bv-warm-white mb-6">
              Ofrecemos todo lo que una inversión inmobiliaria debería tener
            </h3>
            <p className="text-xl md:text-2xl text-bv-gold font-light tracking-wide">
              Más de 20 espacios pensados para disfrutar en familia.
            </p>
          </motion.div>
        </div>

        <div className="w-full max-w-[1920px] mx-auto space-y-12 md:space-y-24 px-4 md:px-8 lg:px-12 xl:px-24 pb-20">
          {[
            {
              num: "01", title: "Reuniones familiares al aire libre", subtitle: "Fines de semana que se disfrutan juntos en familia",
              desc: "Reuniones inolvidables con múltiples pérgolas, acogedoras fogatas y más de 40 parrillas a tu entera disposición.",
              images: zSocialesData.gallery
            },
            {
              num: "02", title: "Piscinas para toda la familia", subtitle: "Días de sol, diversión y relajación garantizada",
              desc: "Disfruta de piscinas diseñadas tanto para niños como para adultos, donde cada fin de semana se siente como unas verdaderas vacaciones.",
              images: piscinasData.gallery
            },
            {
              num: "03", title: "Deporte y vida siempre activa", subtitle: "Porque mantenerse activo eleva tu calidad de vida",
              desc: "Forma equipos y juega partidos de fútbol, vóley, frontón o básquet con amigos y vecinos en instalaciones de primer nivel, a solo pasos de tu hogar.",
              images: canchasData.gallery
            },
            {
              num: "04", title: "Infancia libre y pura", subtitle: "Una niñez con más contacto con la naturaleza y menos pantallas",
              desc: "Amplios parques y zonas de estimulación completamente seguras donde los más pequeños podrán correr, saltar y crecer en libertad.",
              images: juegosData.gallery
            },
            {
              num: "05", title: "Espacios Pet Friendly", subtitle: "Ellos también merecen un lugar diseñado para su felicidad",
              desc: "Un entorno expansivo donde tus compañeros peludos podrán correr y disfrutar con total libertad en áreas seguras creadas exclusivamente para ellos.",
              images: petData.gallery
            }
          ].map((stage, idx) => {
            const textOnLeft = idx % 2 === 0;
            return (
              <div key={idx} className="grid lg:grid-cols-2 gap-4 lg:gap-8 items-stretch group">
                <motion.div
                  initial={{ opacity: 0, x: textOnLeft ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className={`order-1 ${textOnLeft ? 'lg:order-1' : 'lg:order-2'} relative w-full h-full flex flex-col justify-center py-8 lg:p-12 xl:p-20 2xl:p-24`}
                >
                  <div className="flex items-center gap-6 mb-8 lg:mb-10">
                    <span className="text-bv-gold font-display text-4xl lg:text-5xl font-bold">{stage.num}</span>
                    <div className="h-[2px] w-16 md:w-24 bg-bv-gold/50" />
                  </div>
                  <h4 className="text-3xl md:text-5xl lg:text-[3.5rem] font-display font-bold text-white mb-6 lg:mb-8 leading-[1.05] tracking-tight">
                    {stage.title}
                  </h4>
                  <p className="text-xl md:text-2xl text-bv-gold mb-6 lg:mb-8 italic font-display">
                    "{stage.subtitle}"
                  </p>
                  <p className="text-lg md:text-xl text-white/70 leading-relaxed font-light">
                    {stage.desc}
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className={`order-2 ${textOnLeft ? 'lg:order-2' : 'lg:order-1'} relative w-full h-full`}
                >
                  <PhotoCollage images={stage.images} />
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ContrastSection;
