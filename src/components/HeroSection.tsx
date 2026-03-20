import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import logoBuenavista from "@/assets/logos/logo-buenavista.png";
import whatsappIcon from "@/assets/logos/whatsapp.svg";
import heroImage from "@/assets/hero-buenavista.jpg";

const WHATSAPP_URL = "https://wa.me/51908930174?text=Hola%2C%20quiero%20agendar%20mi%20visita%20gratis%20al%20condominio";

const HeroSection = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  useEffect(() => {
    const handleVideoPlay = (e: any) => {
      if (e.detail.id !== 'hero') setIsVideoPlaying(false);
    };
    window.addEventListener('custom-video-play', handleVideoPlay);
    return () => window.removeEventListener('custom-video-play', handleVideoPlay);
  }, []);

  const handlePlayToggle = () => {
    if (!isVideoPlaying) {
      window.dispatchEvent(new CustomEvent('custom-video-play', { detail: { id: 'hero' } }));
      setIsVideoPlaying(true);
    } else {
      setIsVideoPlaying(false);
    }
  };

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
          <div className="text-left order-2 lg:order-1 lg:pr-8 flex flex-col justify-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-display font-black uppercase text-3xl md:text-5xl lg:text-[3.5rem] leading-[1.05] tracking-tighter text-white mb-6"
              style={{
                textShadow: "0px 4px 40px rgba(255, 255, 255, 0.2), 0px 2px 10px rgba(0, 0, 0, 0.5)",
              }}
            >
              Estás a un paso de darle a tu familia el <span className="text-bv-gold">estilo de vida</span> que siempre imaginaste, en el <span className="text-bv-gold">condominio más prestigioso</span> de San Bartolo
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-white/80 mb-10 text-lg md:text-xl lg:max-w-xl font-light tracking-wide"
            >
              Descubre por qué más de 800 familias están construyendo su futuro en su propio lote, con áreas exclusivas pensadas para disfrutar en familia todos los días.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex justify-start"
            >
              <a
                href="#cta-section"
                className="group relative inline-flex items-center justify-center gap-3 bg-[#0B4B8B] hover:bg-[#083A6D] text-white font-bold text-base md:text-lg px-8 py-5 rounded-xl transition-all duration-300 overflow-hidden"
                style={{ boxShadow: "0 10px 30px rgba(11, 75, 139, 0.4)" }}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('cta-section')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-700" />
                <img
                  src={whatsappIcon}
                  alt="WhatsApp"
                  className="w-5 h-5 md:w-6 md:h-6 object-contain flex-shrink-0"
                  style={{ filter: "brightness(0) invert(1)" }}
                />
                <span className="relative z-10 tracking-widest uppercase text-sm md:text-base">Agendar Visita Gratis</span>
              </a>
            </motion.div>
          </div>

          {/* Right Column: Video */}
          <motion.div
            initial={{ opacity: 0, x: 30, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="order-1 lg:order-2 w-full max-w-[300px] md:max-w-[340px] mx-auto aspect-[9/16] rounded-[32px] md:rounded-[40px] overflow-hidden border-[3px] border-bv-gold/30 shadow-[0_0_50px_rgba(234,179,8,0.2)] relative group transform lg:scale-105 lg:-translate-y-4"
            style={{
              background: "hsla(0,0%,0%,0.8)",
              backdropFilter: "blur(12px)",
            }}
          >
            <div className={`absolute inset-0 bg-bv-gold/5 transition-colors duration-500 z-0 pointer-events-none ${isVideoPlaying ? 'hidden' : 'group-hover:bg-transparent'}`} />
            
            {!isVideoPlaying && (
              <div 
                className="absolute inset-0 z-20 flex items-center justify-center cursor-pointer group/play"
                onClick={handlePlayToggle}
              >
                <div className="w-16 h-16 bg-bv-gold/90 rounded-full flex items-center justify-center pl-1.5 shadow-[0_0_30px_rgba(234,179,8,0.5)] backdrop-blur-sm group-hover/play:scale-110 transition-transform">
                  <Play className="w-8 h-8 text-bv-dark fill-bv-dark" />
                </div>
              </div>
            )}

            {isVideoPlaying && (
              <div 
                className="absolute inset-0 z-20 cursor-pointer group/stop"
                onClick={handlePlayToggle}
              >
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/stop:opacity-100 transition-opacity duration-300">
                  <div className="w-16 h-16 bg-bv-dark/70 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(0,0,0,0.5)] backdrop-blur-sm scale-90 group-hover/stop:scale-100 transition-transform">
                    <div className="w-5 h-5 bg-white rounded-sm" /> 
                  </div>
                </div>
              </div>
            )}

            <iframe
              width="100%"
              height="100%"
              src={`https://player.vimeo.com/video/1174305856?title=0&byline=0&portrait=0&controls=0&dnt=1&playsinline=1${isVideoPlaying ? '&autoplay=1' : ''}`}
              title="Vimeo video player"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
              className="relative z-10 w-full h-full object-cover scale-[1.02]"
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
