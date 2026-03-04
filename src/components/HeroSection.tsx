import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import logoBuenavista from "@/assets/logo-buenavista.png";
import heroImage from "@/assets/hero-buenavista.jpg";

const WHATSAPP_URL = "https://wa.me/51999999999?text=Hola%2C%20quiero%20agendar%20mi%20visita%20gratis%20al%20condominio";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Familias disfrutando en el condominio Buenavista"
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: "var(--gradient-hero-overlay)" }}
        />
      </div>

      {/* Nav */}
      <nav className="relative z-10 flex items-center justify-between px-4 md:px-12 py-4">
        <img src={logoBuenavista} alt="Buenavista Condominios" className="h-14 md:h-20 brightness-0 invert" />
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="bv-cta-button text-sm md:text-base !py-3 !px-6"
        >
          <MessageCircle className="w-5 h-5" />
          <span className="hidden sm:inline">Agenda tu visita GRATIS</span>
          <span className="sm:hidden">Agendar visita</span>
        </a>
      </nav>

      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 md:px-12 text-center max-w-5xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bv-headline text-bv-warm-white mb-6"
        >
          Imagínate despertando cada fin de semana en{" "}
          <span className="bv-gold-text italic">tu propio paraíso familiar…</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="bv-subheadline text-bv-warm-white/90 max-w-3xl mb-4"
        >
          Con club house funcionando, áreas comunes llenas de vida y el valor de tu terreno subiendo mes a mes… mientras otras familias ya están construyendo sus recuerdos aquí.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-bv-gold font-semibold text-base md:text-lg mb-10"
        >
          El único condominio consolidado de San Bartolo donde ya viven familias como la tuya.
        </motion.p>

        {/* Video placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="w-full max-w-3xl aspect-video rounded-2xl overflow-hidden mb-10 border-2 border-bv-gold/30"
          style={{ background: "hsla(0,0%,0%,0.5)" }}
        >
          <div className="w-full h-full flex flex-col items-center justify-center gap-4">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bv-gold-gradient flex items-center justify-center animate-pulse-gold cursor-pointer">
              <svg className="w-8 h-8 md:w-10 md:h-10 ml-1" fill="hsl(var(--bv-dark))" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
            <p className="text-bv-warm-white/70 text-sm font-body">
              Mira cómo viven las familias en Buenavista
            </p>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.a
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="bv-cta-button text-lg md:text-xl"
        >
          <MessageCircle className="w-6 h-6" />
          Agenda tu visita GRATIS por WhatsApp
        </motion.a>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="relative z-10 pb-8 flex justify-center"
      >
        <div className="w-6 h-10 border-2 border-bv-warm-white/40 rounded-full flex justify-center pt-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-bv-gold"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
