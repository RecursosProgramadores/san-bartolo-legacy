import { motion } from "framer-motion";
import equipotrabajoImage from "@/assets/equipotrabajo.png";
import { Users, Target, ShieldCheck } from "lucide-react";

const TeamSection = () => {
    return (
        <section className="bv-section bv-dark-bg py-24 md:py-32 relative overflow-hidden">
            {/* Ambient Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-b from-bv-dark via-bv-dark/95 to-bv-dark" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-bv-gold/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="bv-container relative z-10 px-4 md:px-8 lg:px-12 xl:px-20">

                <div className="grid lg:grid-cols-[1fr,1.2fr] gap-12 lg:gap-20 items-center">

                    {/* Left: Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="order-2 lg:order-1 flex flex-col justify-center"
                    >
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-10 h-10 rounded-full bg-bv-gold/10 flex items-center justify-center border border-bv-gold/30">
                                <Users className="w-5 h-5 text-bv-gold" />
                            </div>
                            <span className="text-sm uppercase tracking-[0.3em] font-bold text-bv-gold/90">
                                Nuestro Equipo
                            </span>
                        </div>

                        <h2 className="font-display font-black uppercase tracking-tighter text-4xl md:text-5xl lg:text-[4rem] text-bv-warm-white mb-10 leading-[1.05]">
                            Un proyecto desarrollado por <br className="hidden lg:block" /><span className="text-bv-gold">un equipo comprometido</span>
                        </h2>

                        <div className="space-y-6">
                            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-bv-gold/5 rounded-bl-[100px] blur-xl" />
                                <div className="flex items-start gap-4 relative z-10">
                                    <ShieldCheck className="w-8 h-8 text-bv-gold shrink-0 mt-1 opacity-90" />
                                    <div>
                                        <h4 className="text-xl font-display font-bold text-bv-gold mb-3">Compromiso Sólido</h4>
                                        <p className="text-lg text-bv-warm-white/70 leading-relaxed font-light">
                                            Detrás de Buenavista hay un equipo enfocado en desarrollar un proyecto sólido y en acompañar a cada familia durante todo el proceso.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm relative overflow-hidden mt-6">
                                <div className="absolute bottom-0 right-0 w-32 h-32 bg-bv-gold/5 rounded-tl-[100px] blur-xl" />
                                <div className="flex items-start gap-4 relative z-10">
                                    <Target className="w-8 h-8 text-bv-gold shrink-0 mt-1 opacity-90" />
                                    <div>
                                        <h4 className="text-xl font-display font-bold text-bv-gold mb-3">Nuestra Misión</h4>
                                        <p className="text-lg text-bv-warm-white/70 leading-relaxed font-light">
                                            Crear un lugar donde más familias puedan invertir con seguridad y construir su futuro.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </motion.div>

                    {/* Right: Premium Image Showcase & Stats (STATIC) */}
                    <div className="order-1 lg:order-2 flex flex-col gap-6 lg:ml-auto w-full max-w-[600px] lg:-mt-12 xl:-mt-20">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            {/* Decorative Background Frame */}
                            <div className="absolute -inset-4 md:-inset-8 bg-gradient-to-tr from-bv-gold/20 via-bv-dark to-transparent rounded-[3rem] blur-2xl opacity-40" />

                            {/* Main Image Container */}
                            <div className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden border border-white/10 p-2 shadow-2xl bg-[#1d1d1b]">
                                <div className="w-full h-full rounded-[2rem] overflow-hidden relative">
                                    <img
                                        src={equipotrabajoImage}
                                        alt="Equipo de Trabajo Buenavista"
                                        className="w-full h-full object-cover grayscale-[10%]"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#1d1d1b]/60 via-[#1d1d1b]/10 to-transparent" />
                                </div>
                            </div>
                        </motion.div>

                        {/* Additional Trust Block (+10 years) */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="p-6 md:p-8 rounded-[2rem] bg-gradient-to-br from-white/5 to-transparent border border-white/10 backdrop-blur-sm relative overflow-hidden flex flex-col md:flex-row items-start md:items-center gap-6 group"
                        >
                            <div className="absolute top-0 right-0 w-40 h-40 bg-bv-gold/5 rounded-full blur-2xl" />

                            <div className="text-bv-gold font-display font-bold text-4xl lg:text-5xl shrink-0 flex items-center md:flex-col md:items-start text-center md:text-left gap-2 md:gap-0">
                                <span>+10</span>
                                <span className="text-xl lg:text-2xl text-bv-gold/80 md:block md:-mt-1 font-medium">años</span>
                            </div>

                            <div className="hidden md:block w-[1px] h-16 bg-white/10 shrink-0" />

                            <div>
                                <p className="text-lg md:text-xl text-bv-warm-white font-medium mb-1">
                                    Trayectoria Inmobiliaria
                                </p>
                                <p className="text-bv-warm-white/60 text-sm leading-relaxed">
                                    Experiencia comprobada desarrollando proyectos seguros, rentables y diseñados para el bienestar de la familia.
                                </p>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default TeamSection;
