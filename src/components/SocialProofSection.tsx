import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { Star, Quote, Heart } from "lucide-react";
// import testimonialCouple from "@/assets/testimonial-couple.jpg"; // Removed
// import testimonialMaria from "@/assets/testimonial-maria.jpg"; // Removed
// import testimonialRoberto from "@/assets/testimonial-roberto.jpg"; // Removed
// import testimonialQuispe from "@/assets/testimonial-quispe.jpg"; // Removed

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
        {/* We repeat the images to make it truly infinite */}
        {[...images, ...images, ...images, ...images].map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt="Testimonio visual"
            className="h-48 md:h-64 aspect-[4/3] object-cover rounded-2xl cursor-pointer hover:scale-[1.02] transition-transform duration-300"
            onClick={() => window.dispatchEvent(new CustomEvent("openLightbox", { detail: { src } }))}
          />
        ))}
      </motion.div>
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
          const duration = 2000; // 2 seconds
          const frameRate = 1000 / 60; // 60fps
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

// Removed testimonials array

const SocialProofSection = () => {
  // Use Vite's glob import to get all testimonial images
  const imagesObj = import.meta.glob("@/assets/testimonios/*.jpg", { eager: true, query: "?url" });
  const allImages = Object.values(imagesObj).map((mod: any) => mod.default || mod);

  // Split images into 3 groups for the 3 rows
  const row1 = allImages.slice(0, 14);
  const row2 = allImages.slice(14, 28);
  const row3 = allImages.slice(28);

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
            className="bv-headline text-bv-warm-white mb-8"
          >
            Más de <span className="bv-gold-text italic">800 familias</span> <br className="hidden md:block" /> ya decidieron su futuro
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
      <div className="max-w-7xl mx-auto px-4 text-center mb-12 md:mb-20 relative z-10">
        <motion.h3
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-2xl md:text-4xl font-display font-bold tracking-[0.2em] uppercase text-bv-warm-white leading-tight"
        >
          ¡Ellos confían en <br className="md:hidden" />
          <span className="bv-gold-text">Buenavista Condominios!</span>
        </motion.h3>
        <div className="w-32 h-[1px] bg-gradient-to-r from-transparent via-bv-gold/50 to-transparent mx-auto mt-8" />
      </div>

      {/* Image Marquees */}
      <div className="space-y-4 md:space-y-8 mb-24 md:mb-40 overflow-hidden">
        <ImageMarquee images={row1} direction="left" speed={60} />
        <ImageMarquee images={row2} direction="right" speed={70} />
        <ImageMarquee images={row3} direction="left" speed={65} />
      </div>

      <div className="bv-container relative z-10">
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
