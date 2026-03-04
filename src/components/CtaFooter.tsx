import { motion } from "framer-motion";
import { MessageCircle, Heart, Mail } from "lucide-react";
import familySunset from "@/assets/family-sunset.jpg";
import logoBuenavista from "@/assets/logo-buenavista.png";

const WHATSAPP_URL = "https://wa.me/51908930174?text=Hola%2C%20quiero%20agendar%20mi%20visita%20gratis%20al%20condominio";
const EMAIL = "condominiosbuenavista.net@gmail.com";

const CtaSection = () => {
  return (
    <section className="relative py-24 md:py-36 overflow-hidden">
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
            Tu futuro empieza con <span className="bv-gold-text italic">una visita</span>
          </h2>
          <p className="bv-subheadline text-bv-warm-white/85 mb-4 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
            Ven sin costo ni compromiso. Recorre lo que ya está construido, saluda a las familias que ya viven aquí y siente si este es tu lugar.
          </p>
          <p className="text-bv-gold font-semibold mb-12 text-lg md:text-xl">
            Tu legado empieza con un simple "Hola" por WhatsApp.
          </p>

          <motion.a
            whileHover={{ scale: 1.05, y: -4 }}
            whileTap={{ scale: 0.98 }}
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bv-cta-button text-xl md:text-2xl !px-12 !py-6"
            style={{ boxShadow: "0 8px 50px hsla(45, 82%, 53%, 0.4)" }}
          >
            <MessageCircle className="w-7 h-7" />
            Agenda tu visita GRATIS por WhatsApp
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bv-dark-bg py-10 px-4 text-center">
    <img src={logoBuenavista} alt="Buenavista Condominios" className="h-12 mx-auto mb-5 brightness-0 invert opacity-60" />
    <div className="flex items-center justify-center gap-2 mb-3">
      <Mail className="w-4 h-4 text-bv-warm-white/40" />
      <a href={`mailto:${EMAIL}`} className="text-bv-warm-white/50 text-sm hover:text-bv-gold transition-colors">
        {EMAIL}
      </a>
    </div>
    <div className="flex items-center justify-center gap-2 mb-4">
      <MessageCircle className="w-4 h-4 text-bv-warm-white/40" />
      <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-bv-warm-white/50 text-sm hover:text-bv-gold transition-colors">
        +51 908 930 174
      </a>
    </div>
    <p className="text-bv-warm-white/40 text-sm">
      © {new Date().getFullYear()} Buenavista Condominios. San Bartolo, Lima — Perú.
    </p>
    <p className="text-bv-warm-white/30 text-xs mt-2">
      Todos los derechos reservados. Imágenes referenciales del proyecto.
    </p>
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
    <MessageCircle className="w-8 h-8 md:w-9 md:h-9 text-bv-dark" />
  </a>
);

export { CtaSection, Footer, WhatsAppFloat };
