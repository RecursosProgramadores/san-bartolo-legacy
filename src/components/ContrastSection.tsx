import { motion } from "framer-motion";
import { X, ShieldCheck, ImageIcon } from "lucide-react";
import legalDocs from "@/assets/legal-docs.jpg";

// Imports explícitos ZONAS SOCIALES
import zs1 from "@/assets/etapas/zonasociales/image2.jpg";
import zs2 from "@/assets/etapas/zonasociales/image3.jpg";
import zs3 from "@/assets/etapas/zonasociales/image8.jpg";
import zs4 from "@/assets/etapas/zonasociales/image11.jpg";
import zs5 from "@/assets/etapas/zonasociales/image14.jpg";
import zs6 from "@/assets/etapas/zonasociales/image15.jpg";
import zs7 from "@/assets/etapas/zonasociales/image16.jpg";
import zs8 from "@/assets/etapas/zonasociales/image17.jpg";
import zs9 from "@/assets/etapas/zonasociales/image19.jpeg";
const zSocialesData = { portada: zs1, gallery: [zs1, zs2, zs3, zs4, zs5, zs6, zs7, zs8, zs9] };

// Imports explícitos PISCINAS
import pPortada from "@/assets/etapas/piscinas/portada.jpg";
import p1 from "@/assets/etapas/piscinas/image.jpg";
import p2 from "@/assets/etapas/piscinas/image2.jpg";
import p3 from "@/assets/etapas/piscinas/image3.jpg";
const piscinasData = { portada: pPortada, gallery: [pPortada, p1, p2, p3] };

// Imports explícitos CANCHAS DEPORTIVAS
import cPortada from "@/assets/etapas/canchasdeportivas/portada.jpg";
import c1 from "@/assets/etapas/canchasdeportivas/image5.jpeg";
import c2 from "@/assets/etapas/canchasdeportivas/image7.jpeg";
import c3 from "@/assets/etapas/canchasdeportivas/image8.jpg";
import c4 from "@/assets/etapas/canchasdeportivas/image10.jpg";
const canchasData = { portada: cPortada, gallery: [cPortada, c1, c2, c3, c4] };

// Imports explícitos JUEGO NIÑOS
import jPortada from "@/assets/etapas/juegoninos/portada.jpg";
import j1 from "@/assets/etapas/juegoninos/image3.jpg";
import j2 from "@/assets/etapas/juegoninos/image4.jpg";
import j3 from "@/assets/etapas/juegoninos/image5.jpg";
import j4 from "@/assets/etapas/juegoninos/image8.jpg";
import j5 from "@/assets/etapas/juegoninos/image10.jpg";
import j6 from "@/assets/etapas/juegoninos/image13.jpg";
import j7 from "@/assets/etapas/juegoninos/image14.jpg";
const juegosData = { portada: jPortada, gallery: [jPortada, j1, j2, j3, j4, j5, j6, j7] };

// Imports explícitos PET FRIENDLY
import pfPortada from "@/assets/etapas/petfriendly/portada.jpeg";
import pf1 from "@/assets/etapas/petfriendly/image.jpg";
import pf2 from "@/assets/etapas/petfriendly/image2.jpeg";
const petData = { portada: pfPortada, gallery: [pfPortada, pf1, pf2] };

// Reusable Gallery Component for any number of images, completely static
const PhotoCollage = ({ images }: { images: string[] }) => {
  const count = images.length;

  // Lógica de Renderizado Premium para encajar EXACTAMENTE la cantidad de imágenes
  let gridClasses = "grid gap-2 p-2 w-full h-full min-h-[400px] md:min-h-[500px]";
  let itemClasses = (idx: number) => {
    // PET FRIENDLY (3 fotos) -> 1 grande a la izquierda, 2 cuadradas a la derecha
    if (count === 3) {
      if (idx === 0) return "col-span-1 row-span-2"; // Mitad izquierda entera
      return "col-span-1 row-span-1"; // Dos apiladas a la derecha
    }
    // PISCINAS (4 fotos) -> 1 grande arriba, 3 iguales abajo
    if (count === 4) {
      if (idx === 0) return "col-span-3 row-span-2"; // Principal enorme arriba
      return "col-span-1 row-span-1"; // Tres abajo
    }
    // CANCHAS DEPORTIVAS (5 fotos) -> 2 grandes arriba, 3 medianas abajo
    if (count === 5) {
      if (idx === 0 || idx === 1) return "col-span-3 row-span-2"; // Dos grandes arriba
      return "col-span-2 row-span-1"; // Tres abajo
    }
    // JUEGOS NIÑOS (8 fotos) -> Diseño Bento Box dinámico
    if (count === 8) {
      if (idx === 0) return "col-span-2 row-span-2"; // Grande principal
      if (idx === 1) return "col-span-2 row-span-1"; // Ancha arriba
      if (idx === 2 || idx === 3) return "col-span-1 row-span-1"; // Cuadritos
      if (idx === 4) return "col-span-2 row-span-2"; // Otra grande
      return "col-span-2 row-span-1"; // Resto
    }
    // ZONAS SOCIALES (9 fotos) -> 1 Enorme central, rodeada de 8 pequeñas
    if (count === 9) {
      if (idx === 4) return "col-span-2 row-span-2"; // El centro es grande
      return "col-span-1 row-span-1"; // El resto hace marco
    }

    // Fallback safe
    return "col-span-1 row-span-1";
  };

  // Ajustar filas/columnas maestras
  if (count === 3) gridClasses += " grid-cols-2 grid-rows-2";
  else if (count === 4) gridClasses += " grid-cols-3 grid-rows-3";
  else if (count === 5) gridClasses += " grid-cols-6 grid-rows-3";
  else if (count === 8) gridClasses += " grid-cols-4 grid-rows-4";
  else if (count === 9) gridClasses += " grid-cols-4 grid-rows-3";
  else gridClasses += " grid-cols-2 md:grid-cols-3 auto-rows-fr"; // Safe fallback

  return (
    <div className="w-full relative rounded-[2rem] overflow-hidden group border border-white/5 bg-white/5 shadow-2xl h-[450px] md:h-[600px]">
      <div className={`absolute inset-0 ${gridClasses}`}>
        {images.map((img, idx) => (
          <div key={idx} className={`relative rounded-xl md:rounded-2xl overflow-hidden group/item ${itemClasses(idx)}`}>
            {/* The image with premium filters and a subtle zoom effect to hide low resolution & pixelation */}
            <img 
              src={img} 
              alt={`Experiencia detalle ${idx + 1}`} 
              className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-700 group-hover/item:scale-110" 
              style={{
                filter: "contrast(1.15) saturate(1.1) brightness(0.9)"
              }}
            />
            {/* Inner vignette and gradient to add depth and hide edge pixelation */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10 mix-blend-multiply pointer-events-none transition-opacity duration-500 group-hover/item:opacity-70" />
            <div className="absolute inset-0 shadow-[inset_0_0_15px_rgba(0,0,0,0.3)] pointer-events-none rounded-xl md:rounded-2xl" />
          </div>
        ))}
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
                  "Proyecto con desarrollo real que puedes visitar hoy",
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

        {/* Section: THE SOLUTION (Experiencias en Familia) */}
        <div className="pt-20 border-t border-white/5 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-[1px] bg-gradient-to-r from-transparent via-bv-gold/50 to-transparent" />

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
                className="order-1"
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
                  Piscinas para toda la familia
                </h4>
                <p className="text-xl text-bv-gold/90 mb-6 italic font-display">
                  "Días de sol, diversión y relajación garantizada"
                </p>
                <p className="text-lg text-bv-warm-white/60 leading-relaxed">
                  Disfruta de piscinas diseñadas tanto para niños como para adultos, donde cada fin de semana se siente como unas verdaderas vacaciones.
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
                  Deporte y vida siempre activa
                </h4>
                <p className="text-xl text-bv-gold/90 mb-6 italic font-display">
                  "Porque mantenerse activo eleva tu calidad de vida"
                </p>
                <p className="text-lg text-bv-warm-white/60 leading-relaxed">
                  Forma equipos y juega partidos de fútbol, vóley, frontón o básquet con amigos y vecinos en instalaciones de primer nivel, a solo pasos de tu hogar.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                className="order-1 md:order-2"
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
                className="order-1"
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
                  Infancia libre y pura
                </h4>
                <p className="text-xl text-bv-gold/90 mb-6 italic font-display">
                  "Una niñez con más contacto con la naturaleza y menos pantallas"
                </p>
                <p className="text-lg text-bv-warm-white/60 leading-relaxed">
                  Amplios parques y zonas de estimulación completamente seguras donde los más pequeños podrán correr, saltar y crecer en libertad.
                </p>
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
                  Espacios Pet Friendly
                </h4>
                <p className="text-xl text-bv-gold/90 mb-6 italic font-display">
                  "Ellos también merecen un lugar diseñado para su felicidad"
                </p>
                <p className="text-lg text-bv-warm-white/60 leading-relaxed">
                  Un entorno expansivo donde tus compañeros peludos podrán correr y disfrutar con total libertad en áreas seguras creadas exclusivamente para ellos.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                className="order-1 md:order-2"
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
