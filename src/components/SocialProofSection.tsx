import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { Play } from "lucide-react";

// Imports explícitos de "fotosentrega" (Fila 1)
import entrega1 from "@/assets/testimonios/fotosentrega/image.jpg";
import entrega2 from "@/assets/testimonios/fotosentrega/image12.jpg";
import entrega3 from "@/assets/testimonios/fotosentrega/image13.jpg";
import entrega4 from "@/assets/testimonios/fotosentrega/image14.jpg";
import entrega5 from "@/assets/testimonios/fotosentrega/image15.jpg";

// Imports explícitos de "firmasnotaria" (Fila 2)
import firma1 from "@/assets/testimonios/firmasnotaria/image.jpg";
import firma2 from "@/assets/testimonios/firmasnotaria/image10.jpg";
import firma3 from "@/assets/testimonios/firmasnotaria/image11.jpg";
import firma4 from "@/assets/testimonios/firmasnotaria/image12.jpg";
import firma5 from "@/assets/testimonios/firmasnotaria/image13.jpg";

const row1 = [entrega1, entrega2, entrega3, entrega4, entrega5];
const row2 = [firma1, firma2, firma3, firma4, firma5];

// Helper for infinite marquee
const ImageMarquee = ({ images, speed = 40, direction = "left" }: { images: string[], speed?: number, direction?: "left" | "right" }) => {
  return (
    <div className="flex overflow-hidden select-none border-y border-white/5 py-4">
      <motion.div
        animate={{
          x: direction === "left" ? [0, -1035] : [-1035, 0],
        }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex flex-nowrap min-w-full gap-4 px-2"
      >
        {[...images, ...images, ...images, ...images].map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt="Testimonio visual"
            className="h-48 md:h-64 aspect-[4/3] object-cover rounded-2xl cursor-pointer hover:scale-[1.02] hover:brightness-110 transition-all duration-300 shadow-xl"
            onClick={() => window.dispatchEvent(new CustomEvent("openLightbox", { detail: { src } }))}
          />
        ))}
      </motion.div>
    </div>
  );
};

// Vimeos 
const vimeoVideos = [
  "1174279115",
  "1174283172",
  "1174284982",
  "1174286088",
  "1174287029",
  "1174297506"
];

const VideoPlayer = ({ id }: { id: string }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const handleVideoPlay = (e: any) => {
      if (e.detail.id !== id) setIsPlaying(false);
    };
    window.addEventListener('custom-video-play', handleVideoPlay);
    return () => window.removeEventListener('custom-video-play', handleVideoPlay);
  }, [id]);

  const handlePlayToggle = () => {
    if (!isPlaying) {
      window.dispatchEvent(new CustomEvent('custom-video-play', { detail: { id } }));
      setIsPlaying(true);
    } else {
      setIsPlaying(false);
    }
  };

  return (
    <div className="w-full aspect-[9/16] rounded-2xl bg-bv-dark/80 border border-bv-gold/20 shadow-lg overflow-hidden relative group/play">
      {!isPlaying && (
        <div 
          className="absolute inset-0 z-20 flex items-center justify-center cursor-pointer group/playbtn"
          onClick={handlePlayToggle}
        >
          <div className="w-12 h-12 bg-bv-gold/90 rounded-full flex items-center justify-center pl-1 shadow-[0_0_20px_rgba(234,179,8,0.5)] backdrop-blur-sm group-hover/playbtn:scale-110 transition-transform">
            <Play className="w-6 h-6 text-bv-dark fill-bv-dark" />
          </div>
        </div>
      )}

      {isPlaying && (
        <div 
          className="absolute inset-0 z-20 cursor-pointer group/stop"
          onClick={handlePlayToggle}
        >
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/stop:opacity-100 transition-opacity duration-300">
            <div className="w-12 h-12 bg-bv-dark/70 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(0,0,0,0.5)] backdrop-blur-sm scale-90 group-hover/stop:scale-100 transition-transform">
              <div className="w-4 h-4 bg-white rounded-sm" />
            </div>
          </div>
        </div>
      )}

      <iframe
        src={`https://player.vimeo.com/video/${id}?title=0&byline=0&portrait=0&controls=0&dnt=1&playsinline=1${isPlaying ? '&autoplay=1' : ''}`}
        width="100%"
        height="100%"
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
        className="absolute inset-0 w-full h-full object-cover"
      />
    </div>
  );
};

const StaticVideoGrid = () => {
  return (
    <div className="w-full max-w-7xl mx-auto mt-8 border-y border-white/5 py-8">
      <div className="grid grid-cols-2 lg:grid-cols-6 gap-4">
        {vimeoVideos.map((id, idx) => (
          <VideoPlayer key={idx} id={id} />
        ))}
      </div>
    </div>
  );
};


const AnimatedCounter = ({ target, suffix = "", label }: { target: number; suffix?: string; label: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isInView.current) {
          isInView.current = true;
          const duration = 2000;
          const frameRate = 1000 / 60;
          const totalFrames = Math.round(duration / frameRate);
          let frame = 0;

          const easeOutQuad = (t: number) => t * (2 - t);

          const animate = () => {
            frame++;
            const progress = easeOutQuad(frame / totalFrames);
            setCount(Math.floor(progress * target));

            if (frame < totalFrames) {
              requestAnimationFrame(animate);
            } else {
              setCount(target);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex flex-col items-center justify-center p-8 rounded-3xl transition-all duration-500 hover:bg-white/5 group"
      style={{
        background: "linear-gradient(135deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.01) 100%)",
        border: "1px solid rgba(193, 154, 82, 0.15)",
        backdropFilter: "blur(10px)",
      }}
    >
      <div className="relative mb-2">
        <span className="font-display text-7xl md:text-9xl font-bold bv-gold-text tracking-tighter inline-block group-hover:scale-105 transition-transform duration-500">
          +{count.toLocaleString()}{suffix}
        </span>
        <div className="absolute -inset-4 bg-bv-gold/10 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      </div>
      <p className="text-bv-warm-white/40 uppercase tracking-[0.2em] text-xs font-bold mt-2 group-hover:text-bv-warm-white/70 transition-colors duration-300">
        {label}
      </p>
    </motion.div>
  );
};

const SocialProofSection = () => {
  return (
    <section className="bv-section bv-dark-bg py-24 md:py-40 relative overflow-hidden px-0 md:px-0 lg:px-0">

      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-bv-gold/20 to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-bv-gold/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-20 md:mb-28">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-bv-gold font-bold tracking-[0.3em] uppercase text-sm mb-6 block"
          >
            Nuestra Trayectoria
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display font-black uppercase tracking-tighter text-4xl md:text-5xl lg:text-[4rem] leading-[1.05] text-bv-warm-white mb-8"
          >
            MÁS DE <span className="text-bv-gold">800 FAMILIAS</span> <br className="hidden md:block" /> YA DECIDIERON SU FUTURO
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-bv-warm-white/50 text-xl font-light"
          >
            Números que hablan de confianza y realidad
          </motion.p>
        </div>

        {/* Single Primary Counter */}
        <div className="flex justify-center mb-16 md:mb-24">
          <div className="w-full max-w-md">
            <AnimatedCounter target={800} label="Lotes vendidos" />
          </div>
        </div>
      </div>

      {/* Section Title for Testimonials */}
      <div className="max-w-7xl mx-auto px-4 text-center mb-12 relative z-10">
        <motion.h3
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl lg:text-6xl font-display font-black tracking-tighter uppercase text-bv-warm-white leading-[1.05]"
        >
          ¡ELLOS CONFÍAN EN <br className="md:hidden" />
          <span className="text-bv-gold">BUENAVISTA CONDOMINIOS!</span>
        </motion.h3>
        <div className="w-32 h-[1px] bg-gradient-to-r from-transparent via-bv-gold/50 to-transparent mx-auto mt-8" />
      </div>

      {/* Image Marquees (Fotos Entrega y Firmas) y Shorts */}
      <div className="space-y-6 md:space-y-8 mb-24 overflow-hidden">
        {/* Row 1: Fotos Entrega (Left to Right) */}
        <ImageMarquee images={row1} direction="right" speed={80} />

        {/* Row 2: Firmas Notaria (Right to Left) */}
        <ImageMarquee images={row2} direction="left" speed={90} />

        {/* Row 3: Static Vimeo Videos Grid */}
        <StaticVideoGrid />
      </div>

      <div className="bv-container relative z-10 mt-16">
        {/* FOMO Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center py-16 px-8 rounded-[40px] relative overflow-hidden mx-4"
          style={{
            background: "linear-gradient(135deg, rgba(193, 154, 82, 0.08) 0%, rgba(0, 0, 0, 0) 100%)",
            border: "1px solid rgba(193, 154, 82, 0.1)",
          }}
        >
          <p className="text-bv-warm-white/70 text-2xl md:text-3xl font-display italic max-w-3xl mx-auto leading-relaxed">
            "Mientras algunos siguen evaluando… <br className="md:hidden" />
            <span className="text-bv-warm-white font-medium">otros ya están construyendo su <span className="bv-gold-text">futuro</span> en San Bartolo.</span>"
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialProofSection;
