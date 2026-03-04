import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { Star, Quote } from "lucide-react";
import testimonialCouple from "@/assets/testimonial-couple.jpg";
import familyLifestyle from "@/assets/family-lifestyle.jpg";

const AnimatedCounter = ({ target, suffix = "" }: { target: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 2000;
          const steps = 60;
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
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="text-center">
      <span className="font-display text-5xl md:text-7xl font-bold bv-gold-text">
        +{count}{suffix}
      </span>
    </div>
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
    image: familyLifestyle,
  },
  {
    name: "Roberto Huamán",
    role: "Inversionista",
    quote: "Compré en la primera etapa y hoy mi lote vale el doble. Mejor inversión imposible.",
    image: null,
  },
  {
    name: "Familia Quispe Mendoza",
    role: "Vecinos desde 2023",
    quote: "Los fines de semana en el club house son sagrados. Nuestros hijos ya no quieren volver a Lima.",
    image: null,
  },
];

const SocialProofSection = () => {
  return (
    <section className="bv-section bv-cream-bg">
      <div className="bv-container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bv-headline text-foreground text-center mb-16"
        >
          Más de <span className="bv-gold-text">800 familias</span> ya decidieron
        </motion.h2>

        {/* Counters */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bv-card-elevated text-center"
          >
            <AnimatedCounter target={800} />
            <p className="text-muted-foreground mt-2 font-medium">Lotes vendidos</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bv-card-elevated text-center"
          >
            <AnimatedCounter target={150} />
            <p className="text-muted-foreground mt-2 font-medium">Familias viviendo</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bv-card-elevated text-center col-span-2 md:col-span-1"
          >
            <AnimatedCounter target={5} />
            <p className="text-muted-foreground mt-2 font-medium">Etapas entregadas</p>
          </motion.div>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bv-card-elevated"
            >
              <Quote className="w-8 h-8 text-bv-gold mb-4 opacity-50" />
              <p className="text-foreground text-lg leading-relaxed mb-6 italic">"{t.quote}"</p>
              <div className="flex items-center gap-4">
                {t.image ? (
                  <img src={t.image} alt={t.name} className="w-14 h-14 rounded-full object-cover" />
                ) : (
                  <div className="w-14 h-14 rounded-full bv-gold-gradient flex items-center justify-center">
                    <span className="font-bold text-bv-dark text-lg">{t.name[0]}</span>
                  </div>
                )}
                <div>
                  <p className="font-bold text-foreground">{t.name}</p>
                  <p className="text-sm text-muted-foreground">{t.role}</p>
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
          className="text-center text-muted-foreground text-lg italic max-w-2xl mx-auto"
        >
          "Mientras algunos siguen evaluando… <span className="bv-gold-text font-semibold">otros ya están construyendo su futuro en San Bartolo.</span>"
        </motion.p>
      </div>
    </section>
  );
};

export default SocialProofSection;
