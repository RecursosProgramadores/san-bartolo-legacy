import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import familyLifestyleImage from "@/assets/family-lifestyle.jpeg";
import { Compass, Sparkles, Users, Play } from "lucide-react";

const VisitSection = () => {
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);

    useEffect(() => {
        const handleVideoPlay = (e: any) => {
            if (e.detail.id !== 'visit') setIsVideoPlaying(false);
        };
        window.addEventListener('custom-video-play', handleVideoPlay);
        return () => window.removeEventListener('custom-video-play', handleVideoPlay);
    }, []);

    const handlePlayToggle = () => {
        if (!isVideoPlaying) {
            window.dispatchEvent(new CustomEvent('custom-video-play', { detail: { id: 'visit' } }));
            setIsVideoPlaying(true);
        } else {
            setIsVideoPlaying(false);
        }
    };

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
                        <h2 className="font-display font-black uppercase tracking-tighter text-4xl md:text-5xl lg:text-6xl text-bv-warm-white mb-8 leading-[1.05]">
                            Agenda tu visita gratuita<br className="hidden md:block" />y conoce el proyecto <span className="text-bv-gold">hoy mismo</span>
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
                        <div className="lg:sticky lg:top-32 w-full h-full relative group/play">
                            {!isVideoPlaying && (
                                <div 
                                    className="absolute inset-0 z-20 flex items-center justify-center cursor-pointer rounded-3xl group/playbtn"
                                    onClick={handlePlayToggle}
                                >
                                    <div className="w-16 h-16 bg-bv-gold/90 rounded-full flex items-center justify-center pl-1.5 shadow-[0_0_30px_rgba(234,179,8,0.5)] backdrop-blur-sm group-hover/playbtn:scale-110 transition-transform">
                                        <Play className="w-8 h-8 text-bv-dark fill-bv-dark" />
                                    </div>
                                </div>
                            )}

                            {isVideoPlaying && (
                                <div 
                                    className="absolute inset-0 z-20 cursor-pointer rounded-3xl group/stop"
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
                                src={`https://player.vimeo.com/video/1174299260?title=0&byline=0&portrait=0&controls=0&dnt=1&playsinline=1${isVideoPlaying ? '&autoplay=1' : ''}`}
                                width="100%"
                                height="100%"
                                frameBorder="0"
                                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                                className="w-full h-full aspect-[4/5] lg:aspect-[9/16] object-cover rounded-3xl relative z-10"
                            />
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
