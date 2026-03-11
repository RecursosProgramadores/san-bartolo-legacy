import { motion } from "framer-motion";
import { Heart, Mail, MessageCircle, MapPin, ShieldCheck, ExternalLink } from "lucide-react";
import familySunset from "@/assets/family-sunset.jpg";
import logoBuenavista from "@/assets/logos/logo-buenavista.png";
import whatsappIcon from "@/assets/logos/whatsapp.svg";
import facebookIcon from "@/assets/logos/facebook.svg";
import instagramIcon from "@/assets/logos/instagram.svg";
import tiktokIcon from "@/assets/logos/tiktok.svg";
import youtubeIcon from "@/assets/logos/youtube.svg";
import libroReclamaciones from "@/assets/logos/libroreclamaciones.jpeg";

const WHATSAPP_URL = "https://wa.me/51908930174?text=Hola%2C%20quiero%20agendar%20mi%20visita%20gratis%20al%20condominio";
const EMAIL = "condominiosbuenavista.net@gmail.com";

const CtaSection = () => {
  return (
    <section id="cta-section" className="relative py-24 md:py-36 overflow-hidden">
      {/* BG */}
      <div className="absolute inset-0">
        <img src={familySunset} alt="IMAGEN_REAL: Familia al atardecer en Buenavista" className="w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, hsla(0,0%,0%,0.7) 0%, hsla(0,0%,0%,0.5) 50%, hsla(0,0%,0%,0.8) 100%)" }} />
      </div>

      <div className="relative z-10 bv-container text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <Heart className="w-12 h-12 text-bv-gold mx-auto mb-8" />
          <h2 className="bv-headline text-bv-warm-white mb-8">
            Tu futuro empieza con <span className="bv-gold-text italic">una experiencia exclusiva</span>
          </h2>
          <p className="bv-subheadline text-bv-warm-white/85 mb-8 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
            Te invitamos a una visita privada, sin compromiso alguno, para que sientas la paz de lo que ya es una realidad. Descubre por qué otras familias visionarias ya han asegurado su lugar en Buenavista.
          </p>
          <div className="bg-bv-gold/10 backdrop-blur-sm border border-bv-gold/20 rounded-2xl p-6 mb-12 max-w-xl mx-auto">
            <p className="text-bv-gold font-bold text-lg md:text-xl">
              Reserva hoy tu visita de cortesía y comienza a construir tu legado.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-14">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <img
                src={logoBuenavista}
                alt="Buenavista Condominios"
                className="h-32 md:h-32 object-contain"
                style={{ filter: "brightness(1.5) contrast(1.1) drop-shadow(0 0 20px rgba(255,255,255,0.15))" }}
              />
            </motion.div>

            <motion.a
              whileHover={{ scale: 1.05, y: -4 }}
              whileTap={{ scale: 0.98 }}
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bv-cta-button text-lg md:text-2xl !px-10 !py-6 text-center"
              style={{ boxShadow: "0 8px 50px hsla(45, 82%, 53%, 0.4)" }}
            >
              <img
                src={whatsappIcon}
                alt="WhatsApp"
                className="w-7 h-7 shrink-0 object-contain"
                style={{ filter: "brightness(0) saturate(100%)" }}
              />
              Agendar mi visita gratuita para conocer Buenavista en persona
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bv-dark-bg pt-20 pb-10 px-4 relative overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-bv-gold/20 to-transparent" />

    <div className="bv-container relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">

        {/* Column 1: Brand & Social */}
        <div className="flex flex-col items-start">
          <img
            src={logoBuenavista}
            alt="Buenavista Condominios"
            className="h-16 mb-6 object-contain"
            style={{ filter: "brightness(1.5) contrast(1.1)" }}
          />
          <p className="text-bv-warm-white/50 text-base leading-relaxed mb-8 max-w-xs text-left">
            El refugio más exclusivo de San Bartolo. Donde la seguridad, la paz y la naturaleza se unen para crear el legado de tu familia.
          </p>
        </div>

        {/* Column 2: Contact Info */}
        <div className="text-left">
          <h4 className="text-bv-gold font-display font-bold text-lg mb-8 uppercase tracking-widest">Contacto</h4>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <MapPin className="w-5 h-5 text-bv-gold shrink-0 mt-1" />
              <p className="text-bv-warm-white/60 text-sm leading-relaxed">
                Km 50 de la Panamericana Sur,<br />San Bartolo, Lima - Perú.
              </p>
            </div>
            <a href={`mailto:${EMAIL}`} className="flex items-center gap-4 group">
              <Mail className="w-5 h-5 text-bv-gold shrink-0" />
              <span className="text-bv-warm-white/60 text-sm group-hover:text-bv-gold transition-colors">{EMAIL}</span>
            </a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
              <div className="w-5 h-5 shrink-0 flex items-center justify-center">
                <img src={whatsappIcon} className="w-5 h-5 brightness-0 invert opacity-70 group-hover:opacity-100 transition-opacity" />
              </div>
              <span className="text-bv-warm-white/60 text-sm group-hover:text-bv-gold transition-colors">+51 908 930 174</span>
            </a>
          </div>
        </div>

        {/* Column 3: Trust & Legal */}
        <div className="text-left">
          <h4 className="text-bv-gold font-display font-bold text-lg mb-8 uppercase tracking-widest">Seguridad Legal</h4>
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-bv-gold" />
              <span className="text-bv-warm-white/60 text-sm">Partida SUNARP Activa</span>
            </div>
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-bv-gold" />
              <span className="text-bv-warm-white/60 text-sm">Registro SUNAT al día</span>
            </div>
            <div className="pt-4">
              <p className="text-[10px] text-bv-warm-white/40 mb-3 tracking-widest uppercase">Atención al cliente</p>
              <a
                href="#"
                className="inline-flex items-center gap-2 p-3 rounded-xl bg-white/5 border border-white/10 hover:border-bv-gold/30 hover:bg-white/10 transition-all group"
              >
                <img src={libroReclamaciones} alt="Libro de Reclamaciones" className="h-8 object-contain" />
                <span className="text-xs text-bv-warm-white/60 group-hover:text-bv-gold">Libro de Reclamaciones</span>
                <ExternalLink className="w-3 h-3 text-bv-warm-white/30" />
              </a>
            </div>
          </div>
        </div>

        {/* Column 4: Experience */}
        <div className="text-left">
          <h4 className="text-bv-gold font-display font-bold text-lg mb-8 uppercase tracking-widest">Vívelo</h4>
          <p className="text-bv-warm-white/50 text-sm leading-relaxed mb-6">
            Agende su visita y descubra por qué más de 800 familias han elegido Buenavista como su lugar de paz.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-xs font-bold uppercase tracking-widest text-bv-dark bg-bv-gold px-6 py-3 rounded-full hover:scale-105 transition-transform"
          >
            Agendar mi visita gratis
          </a>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-left">
          <p className="text-bv-warm-white/40 text-xs">
            © {new Date().getFullYear()} <span className="text-bv-warm-white/60 text-sm font-medium">Buenavista Condominios</span>. Todos los derechos reservados.
          </p>
          <p className="text-bv-warm-white/20 text-[10px] mt-1">Imágenes referenciales sujetas a variaciones durante el desarrollo del proyecto.</p>
        </div>

        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 opacity-70 hover:opacity-100 transition-opacity">
          <span className="text-[10px] text-bv-warm-white/40 uppercase tracking-widest">Desarrollado por</span>
          <span className="text-bv-gold font-display font-bold italic tracking-tighter text-lg">Fly Software</span>
        </div>
      </div>
    </div>
  </footer>
);

const WhatsAppFloat = () => (
  <a
    href={WHATSAPP_URL}
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 w-16 h-16 md:w-18 md:h-18 rounded-full bv-gold-gradient flex items-center justify-center hover:scale-110 transition-transform"
    style={{ boxShadow: "0 4px 30px hsla(45, 82%, 53%, 0.5)" }}
    aria-label="Agendar visita por WhatsApp"
  >
    <img src={whatsappIcon} alt="WhatsApp" className="w-8 h-8 md:w-9 md:h-9 object-contain brightness-0" />
  </a>
);

export { CtaSection, Footer, WhatsAppFloat };
