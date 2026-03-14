import { motion } from "framer-motion";
import logoBuenavista from "@/assets/logos/logo-buenavista.png";
import whatsappIcon from "@/assets/logos/whatsapp.svg";
import heroImage from "@/assets/hero-buenavista.jpg";

const WHATSAPP_URL = "https://wa.me/51908930174?text=Hola%2C%20quiero%20agendar%20mi%20visita%20gratis%20al%20condominio";

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
        <div className="absolute inset-0 bg-bv-dark/40" />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(180deg, hsla(0,0%,0%,0.85) 0%, hsla(0,0%,0%,0.4) 30%, hsla(0,0%,0%,0.4) 60%, hsla(0,0%,0%,0.9) 100%)" }}
        />
      </div>

      {/* Nav */}
      <nav className="relative z-10 flex items-center justify-between px-4 md:px-12 py-6">
        <img
          src={logoBuenavista}
          alt="Buenavista Condominios"
          className="h-14 md:h-20 object-contain mx-auto md:mx-0"
          style={{ filter: "brightness(1.5) contrast(1.1) drop-shadow(0 0 15px rgba(255,255,255,0.2))" }}
        />
      </nav>

      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col justify-center px-4 md:px-12 lg:px-20 max-w-[1400px] mx-auto py-8 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr,1.2fr] gap-10 lg:gap-16 items-center lg:-mt-20">
          {/* Left Column: Text */}
          <div className="text-left order-2 lg:order-1 lg:pr-8">
            <motion.h1
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bv-headline text-bv-warm-white mb-6 text-3xl md:text-4xl lg:text-5xl leading-tight"
            >
              Estás a un paso de darle a tu familia el <span className="bv-gold-text italic">estilo de vida</span> que siempre imaginaste
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="bv-subheadline text-bv-warm-white/90 mb-10 text-lg md:text-xl lg:max-w-xl"
            >
              Descubre por qué más de 800 familias ya decidieron invertir en el condominio más prestigioso de San Bartolo.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex justify-start"
            >
              <a
                href="#cta-section"
                className="bv-cta-button text-base md:text-lg !px-6 md:!px-10 !py-4 md:!py-5 text-center"
                style={{ boxShadow: "0 8px 50px hsla(45, 82%, 53%, 0.4)" }}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('cta-section')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <img
                  src={whatsappIcon}
                  alt="WhatsApp"
                  className="w-5 h-5 md:w-6 md:h-6 object-contain flex-shrink-0"
                  style={{ filter: "brightness(0) saturate(100%)" }}
                />
                Quiero agendar mi visita totalmente GRATIS
              </a>
            </motion.div>
          </div>

          {/* Right Column: Video */}
          <motion.div
            initial={{ opacity: 0, x: 30, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="order-1 lg:order-2 w-full aspect-video rounded-[32px] overflow-hidden border-2 border-bv-gold/30 shadow-2xl relative group transform lg:scale-110 lg:-translate-y-8"
            style={{
              background: "hsla(0,0%,0%,0.6)",
              backdropFilter: "blur(12px)",
              boxShadow: "0 0 80px hsla(45, 82%, 53%, 0.2)"
            }}
          >
            <div className="absolute inset-0 bg-bv-gold/5 group-hover:bg-transparent transition-colors duration-500 z-0 pointer-events-none" />
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/nwxartVkleY?si=NqNSCmTdvgBCdzIv"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="relative z-10"
            />
          </motion.div>
        </div>
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
