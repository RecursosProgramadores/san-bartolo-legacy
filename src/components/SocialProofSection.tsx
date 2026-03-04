import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { Star, Quote } from "lucide-react";
import testimonialCouple from "@/assets/testimonial-couple.jpg";
import testimonialMaria from "@/assets/testimonial-maria.jpg";
import testimonialRoberto from "@/assets/testimonial-roberto.jpg";
import testimonialQuispe from "@/assets/testimonial-quispe.jpg";

const AnimatedCounter = ({ target, suffix = "", label }: { target: number; suffix?: string; label: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 2500;
          const steps = 80;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="text-center py-8"
    >
      <span className="font-display text-6xl md:text-8xl font-bold bv-gold-text" style={{ textShadow: "0 0 40px hsla(45, 82%, 53%, 0.3)" }}>
        +{count}{suffix}
      </span>
      <p className="text-bv-warm-white/60 mt-3 font-medium text-lg">{label}</p>
    </motion.div>
  );
};

const testimonials = [
  {
    name: "Carlos y Andrea",
    role: "Padres de familia",
    quote: "Lo que más nos dio tranquilidad fue ver que ya estaba todo construido. No compramos un plano, compramos una realidad.",
    image: testimonialCouple,
  },
  {
    name: "María Elena",
    role: "Madre soltera emprendedora",
    quote: "Mis hijos por fin tienen un lugar seguro donde crecer. El condominio les cambió la vida… y a mí también.",
    image: testimonialMaria,
  },
  {
    name: "Roberto Huamán",
    role: "Inversionista",
    quote: "Compré en la primera etapa y hoy mi lote vale el doble. Mejor inversión imposible.",
    image: testimonialRoberto,
  },
  {
    name: "Familia Quispe Mendoza",
    role: "Vecinos desde 2023",
    quote: "Los fines de semana en el club house son sagrados. Nuestros hijos ya no quieren volver a Lima.",
    image: testimonialQuispe,
  },
];

const SocialProofSection = () => {
  return (
    <section className="bv-section bv-dark-bg py-20 md:py-32">
      <div className="bv-container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bv-headline text-bv-warm-white text-center mb-6"
        >
          Más de <span className="bv-gold-text">800 familias</span> ya decidieron
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-bv-warm-white/50 mb-16 text-lg max-w-xl mx-auto"
        >
          Números que hablan por sí solos
        </motion.p>

        {/* Counters */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          <div className="rounded-2xl p-6 text-center" style={{ background: "hsla(45, 82%, 53%, 0.05)", border: "1px solid hsla(45, 82%, 53%, 0.15)" }}>
            <AnimatedCounter target={800} label="Lotes vendidos" />
          </div>
          <div className="rounded-2xl p-6 text-center" style={{ background: "hsla(45, 82%, 53%, 0.05)", border: "1px solid hsla(45, 82%, 53%, 0.15)" }}>
            <AnimatedCounter target={150} label="Familias viviendo actualmente" />
          </div>
          <div className="rounded-2xl p-6 text-center" style={{ background: "hsla(45, 82%, 53%, 0.05)", border: "1px solid hsla(45, 82%, 53%, 0.15)" }}>
            <AnimatedCounter target={5} label="Etapas entregadas" />
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1"
              style={{
                background: "hsla(0, 0%, 100%, 0.04)",
                border: "1px solid hsla(45, 82%, 53%, 0.1)",
                boxShadow: "0 4px 30px hsla(0, 0%, 0%, 0.2)",
              }}
            >
              <Quote className="w-8 h-8 text-bv-gold mb-5 opacity-40" />
              <p className="text-bv-warm-white/90 text-lg leading-relaxed mb-8 italic">"{t.quote}"</p>
              <div className="flex items-center gap-4">
                <img
                  src={t.image}
                  alt={`IMAGEN_REAL: ${t.name} - testimonio Buenavista`}
                  className="w-16 h-16 rounded-full object-cover border-2 border-bv-gold/30"
                />
                <div>
                  <p className="font-bold text-bv-warm-white">{t.name}</p>
                  <p className="text-sm text-bv-warm-white/50">{t.role}</p>
                </div>
                <div className="ml-auto flex gap-0.5">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-bv-gold text-bv-gold" />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* FOMO line */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-bv-warm-white/60 text-lg italic max-w-2xl mx-auto"
        >
          "Mientras algunos siguen evaluando… <span className="bv-gold-text font-semibold">otros ya están construyendo su futuro en San Bartolo.</span>"
        </motion.p>
      </div>
    </section>
  );
};

export default SocialProofSection;
