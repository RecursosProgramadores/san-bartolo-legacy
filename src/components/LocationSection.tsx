import { motion } from "framer-motion";
import ubicacionImage from "@/assets/ubicacion.jpg";

const LocationSection = () => {
    return (
        <section className="relative py-24 md:py-32 overflow-hidden bg-bv-dark">
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-bv-gold/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-bv-gold/5 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-12 lg:px-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Left Column: Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-left"
                    >
                        <h2 className="text-3xl md:text-5xl font-display font-bold text-bv-warm-white mb-8 leading-tight">
                            ¡Condominio de <br />
                            <span className="bv-gold-text italic">Alta Revalorización!</span>
                        </h2>

                        <p className="text-lg md:text-xl text-bv-warm-white/80 leading-relaxed mb-8 max-w-xl">
                            Ubicado en una zona de alta revalorización, Buenavista Condominios tiene acceso directo al <span className="text-bv-gold font-semibold">Km 50 de la Panamericana Sur</span>, en el corazón de San Bartolo. 🌅
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6 mt-10">
                            <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                                <div className="w-10 h-10 rounded-full bg-bv-gold/20 flex items-center justify-center flex-shrink-0">
                                    <span className="text-bv-gold font-bold">km</span>
                                </div>
                                <div>
                                    <h4 className="text-bv-warm-white font-semibold">Km 50</h4>
                                    <p className="text-sm text-bv-warm-white/60">Panamericana Sur</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                                <div className="w-10 h-10 rounded-full bg-bv-gold/20 flex items-center justify-center flex-shrink-0">
                                    <span className="text-bv-gold font-bold">📍</span>
                                </div>
                                <div>
                                    <h4 className="text-bv-warm-white font-semibold">San Bartolo</h4>
                                    <p className="text-sm text-bv-warm-white/60">Ubicación Privilegiada</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: Image */}
                    <div className="relative order-1 lg:order-2">
                        <div className="absolute -inset-4 bg-bv-gold/10 blur-2xl rounded-[40px] opacity-50" />
                        <div
                            className="relative rounded-[32px] overflow-hidden border-2 border-bv-gold/30 shadow-2xl bg-black/40 cursor-pointer group"
                            onClick={() => window.dispatchEvent(new CustomEvent("openLightbox", { detail: { src: ubicacionImage } }))}
                        >
                            <img
                                src={ubicacionImage}
                                alt="Mapa de ubicación Buenavista Condominios"
                                className="w-full h-auto object-contain transform group-hover:scale-[1.02] transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-bv-dark/40 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>

                        {/* Minimal floating badge */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -bottom-6 -right-6 md:right-0 p-4 rounded-2xl bg-bv-gold text-bv-dark font-bold shadow-xl z-20 pointer-events-none"
                        >
                            ¡Ubicación Real!
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default LocationSection;
