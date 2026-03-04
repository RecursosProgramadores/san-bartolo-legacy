import { motion } from "framer-motion";
import { MessageCircle, Heart } from "lucide-react";
import aerialSanbartolo from "@/assets/aerial-sanbartolo.jpg";
import logoBuenavista from "@/assets/logo-buenavista.png";

const WHATSAPP_URL = "https://wa.me/51999999999?text=Hola%2C%20quiero%20agendar%20mi%20visita%20gratis%20al%20condominio";

const CtaSection = () => {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* BG */}
      <div className="absolute inset-0">
        <img src={aerialSanbartolo} alt="Vista aérea Buenavista" className="w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero-overlay)" }} />
      </div>

      <div className="relative z-10 bv-container text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <Heart className="w-10 h-10 text-bv-gold mx-auto mb-6" />
          <h2 className="bv-headline text-bv-warm-white mb-6">
            Tu futuro empieza con <span className="bv-gold-text italic">una visita</span>
          </h2>
          <p className="bv-subheadline text-bv-warm-white/85 mb-4 max-w-2xl mx-auto">
            Ven, recorre las etapas ya entregadas, conoce a las familias que ya viven aquí y decide si este es el lugar donde quieres construir tu legado.
          </p>
          <p className="text-bv-gold font-semibold mb-10 text-lg">
            Sin costo. Sin compromiso. Solo tú y tu futuro.
          </p>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bv-cta-button text-lg md:text-xl"
          >
            <MessageCircle className="w-6 h-6" />
            Agenda tu visita GRATIS por WhatsApp
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bv-dark-bg py-8 px-4 text-center">
    <img src={logoBuenavista} alt="Buenavista Condominios" className="h-12 mx-auto mb-4 brightness-0 invert opacity-60" />
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
    className="fixed bottom-6 right-6 z-50 w-14 h-14 md:w-16 md:h-16 rounded-full bv-gold-gradient flex items-center justify-center shadow-lg animate-pulse-gold hover:scale-110 transition-transform"
    aria-label="Agendar visita por WhatsApp"
  >
    <MessageCircle className="w-7 h-7 md:w-8 md:h-8 text-bv-dark" />
  </a>
);

export { CtaSection, Footer, WhatsAppFloat };
