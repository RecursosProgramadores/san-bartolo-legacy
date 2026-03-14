import { motion } from "framer-motion";
import familyLifestyleImage from "@/assets/family-lifestyle.jpg";
import { Compass, Sparkles, Users } from "lucide-react";

const VisitSection = () => {
    return (
        <section className="bv-section bv-dark-bg py-24 md:py-32 relative overflow-hidden">
            {/* Ambient Background Elements */}
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-bv-gold/5 blur-[120px] rounded-full -translate-y-1/2 -translate-x-1/4" />
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-bv-gold/10 to-transparent" />

            <div className="bv-container px-4 md:px-8 lg:px-12 xl:px-20 relative z-10">

                {/* Header Title & Description */}
                <div className="max-w-4xl mx-auto text-center mb-16 md:mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-xs uppercase tracking-[0.4em] text-bv-gold/70 mb-4 block font-bold">Vive el Proyecto</span>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-bv-warm-white mb-8 leading-tight">
                            Conoce <span className="bv-gold-text italic">Buenavista</span> en persona
                        </h2>

                        <p className="text-lg md:text-xl text-bv-warm-white/70 leading-relaxed mb-6 max-w-3xl mx-auto">
                            La mejor forma de entender el proyecto es visitando y recorriendo el condominio.
                        </p>
                        <p className="text-lg text-bv-warm-white/50 leading-relaxed max-w-3xl mx-auto">
                            Durante la visita te asesoraremos para entender qué es lo ideal para ti y tu familia, y evaluar juntos si Buenavista es la opción adecuada para ustedes.
                        </p>
                    </motion.div>
                </div>

                {/* Content Area: Image + Blocks */}
                <div className="grid lg:grid-cols-[1fr,1.1fr] gap-12 lg:gap-20 items-center">

                    {/* Left: Sticky Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative lg:h-[700px] order-2 lg:order-1"
                    >
                        <div className="lg:sticky lg:top-32 w-full h-full">
                            <div className="absolute -inset-4 bg-bv-gold/10 blur-2xl rounded-[3rem] opacity-40" />
                            <div className="relative w-full h-full aspect-[4/5] lg:aspect-auto rounded-[2.5rem] overflow-hidden border border-white/10 group shadow-2xl">
                                <img
                                    src={familyLifestyleImage}
                                    alt="Visita Buenavista con tu familia"
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-bv-dark via-bv-dark/20 to-transparent opacity-80" />

                                {/* Bottom Floating Badge */}
                                <div className="absolute bottom-8 left-8 right-8">
                                    <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20">
                                        <p className="text-bv-warm-white text-lg font-medium leading-snug">
                                            "El primer paso hacia el futuro que tu familia merece."
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: The Process Steps */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="order-1 lg:order-2 flex flex-col justify-center"
                    >
                        <h3 className="text-2xl md:text-3xl font-display font-bold text-bv-warm-white mb-10 pb-6 border-b border-white/10">
                            Cómo es la visita al condominio
                        </h3>

                        <div className="space-y-12">
                            {/* Step 1 */}
                            <div className="group flex gap-6 md:gap-8">
                                <div className="shrink-0 flex flex-col items-center">
                                    <div className="w-14 h-14 rounded-full bg-bv-gold/10 flex items-center justify-center border border-bv-gold/30 group-hover:bg-bv-gold transition-colors duration-300">
                                        <Compass className="w-6 h-6 text-bv-gold group-hover:text-bv-dark transition-colors duration-300" />
                                    </div>
                                    <div className="w-[2px] h-full bg-gradient-to-b from-bv-gold/30 to-transparent mt-4" />
                                </div>
                                <div className="pb-10">
                                    <h4 className="text-2xl font-display font-bold text-bv-warm-white mb-3">Recorre el condominio</h4>
                                    <p className="text-lg text-bv-warm-white/60 leading-relaxed">
                                        Podrás conocer las áreas comunes, el entorno y ver cómo se está desarrollando el proyecto en tiempo real.
                                    </p>
                                </div>
                            </div>

                            {/* Step 2 */}
                            <div className="group flex gap-6 md:gap-8">
                                <div className="shrink-0 flex flex-col items-center">
                                    <div className="w-14 h-14 rounded-full bg-bv-gold/10 flex items-center justify-center border border-bv-gold/30 group-hover:bg-bv-gold transition-colors duration-300">
                                        <Sparkles className="w-6 h-6 text-bv-gold group-hover:text-bv-dark transition-colors duration-300" />
                                    </div>
                                    <div className="w-[2px] h-full bg-gradient-to-b from-bv-gold/30 to-transparent mt-4" />
                                </div>
                                <div className="pb-10">
                                    <h4 className="text-2xl font-display font-bold text-bv-warm-white mb-3">Vive la experiencia</h4>
                                    <p className="text-lg text-bv-warm-white/60 leading-relaxed">
                                        La visita está pensada para que puedas disfrutar el lugar y experimentar de primera mano cómo sería estar aquí con tu familia.
                                    </p>
                                </div>
                            </div>

                            {/* Step 3 */}
                            <div className="group flex gap-6 md:gap-8">
                                <div className="shrink-0">
                                    <div className="w-14 h-14 rounded-full bg-bv-gold/10 flex items-center justify-center border border-bv-gold/30 group-hover:bg-bv-gold transition-colors duration-300 shadow-[0_0_30px_rgba(234,179,8,0.2)]">
                                        <Users className="w-6 h-6 text-bv-gold group-hover:text-bv-dark transition-colors duration-300" />
                                    </div>
                                </div>
                                <div>
                                    <h4 className="text-2xl font-display font-bold text-bv-warm-white mb-3">Ven con tu familia</h4>
                                    <p className="text-lg text-bv-warm-white/60 leading-relaxed">
                                        Puedes venir con toda tu familia e incluso con tu mascota, ya que el proyecto cuenta con extensos espacios <span className="text-bv-gold">pet friendly</span> donde todos son bienvenidos.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* CTA Button */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mt-12 pt-10"
                        >
                            <a
                                href="#cta-section"
                                onClick={(e) => {
                                    e.preventDefault();
                                    document.getElementById('cta-section')?.scrollIntoView({ behavior: 'smooth' });
                                }}
                                className="inline-flex items-center justify-center w-full sm:w-auto px-10 py-5 rounded-full bg-bv-gold text-bv-dark font-bold text-lg hover:scale-105 transition-transform duration-300 shadow-[0_0_40px_rgba(234,179,8,0.3)]"
                            >
                                Agendar mi visita al Condominio
                            </a>
                        </motion.div>

                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default VisitSection;
