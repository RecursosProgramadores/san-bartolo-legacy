import { motion } from "framer-motion";
import ubicacionImage from "@/assets/ubicacion.jpg";
import graficaImage from "@/assets/grafica.jpg";
import sunatImage1 from "@/assets/sunat.jpg";
import sunatImage2 from "@/assets/sunat2.jpg";
import { TrendingUp, MapPin, Scale } from "lucide-react";

const LocationSection = () => {
    return (
        <section className="relative py-24 md:py-32 overflow-hidden bg-bv-dark">
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-bv-gold/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-bv-gold/5 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-12 lg:px-20">

                <div className="text-center mb-20 md:mb-32">
                    <span className="text-[10px] uppercase tracking-[0.4em] text-bv-gold/70 mb-4 block font-bold">Inversión Segura</span>
                    <h2 className="font-display font-black uppercase tracking-tighter text-3xl md:text-5xl lg:text-6xl text-bv-warm-white leading-[1.05]">
                        ¡3 razones que hacen de <span className="text-bv-gold">Buenavista</span> una inversión segura!
                    </h2>
                </div>

                <div className="space-y-24 md:space-y-32">

                    {/* Block 1: Alta Revalorización */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            className="order-2 lg:order-1"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 rounded-xl bg-bv-gold/10 flex items-center justify-center border border-bv-gold/30">
                                    <TrendingUp className="w-6 h-6 text-bv-gold" />
                                </div>
                                <h3 className="text-2xl md:text-4xl font-display font-bold text-bv-warm-white">
                                    Alta revalorización
                                </h3>
                            </div>

                            <p className="text-lg md:text-xl text-bv-warm-white/80 leading-relaxed mb-6">
                                Tu inversión se revaloriza constantemente con el paso de los años.
                            </p>

                            <div className="mb-6">
                                <p className="text-bv-warm-white/70 mb-3 font-medium">Esto ocurre por dos factores clave:</p>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-bv-gold mt-2.5 shrink-0" />
                                        <span className="text-bv-warm-white/60 text-lg">Crecimiento urbano de San Bartolo</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-bv-gold mt-2.5 shrink-0" />
                                        <span className="text-bv-warm-white/60 text-lg">Avance constante de obra dentro del proyecto</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 border-l-4 border-l-bv-gold">
                                <p className="text-bv-gold italic font-display text-xl leading-snug">
                                    "Una inversión que puede convertirse en patrimonio para tu familia y legado para tus hijos."
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-100px" }}
                            className="order-1 lg:order-2 relative group cursor-pointer"
                            onClick={() => window.dispatchEvent(new CustomEvent("openLightbox", { detail: { src: graficaImage } }))}
                        >
                            <div className="absolute -inset-4 bg-bv-gold/5 blur-xl rounded-[2rem] opacity-0 group-hover:opacity-50 transition-opacity duration-500 pointer-events-none" />
                            <img
                                src={graficaImage}
                                alt="Gráfica de Alta Revalorización"
                                className="w-full h-auto rounded-2xl shadow-xl transform group-hover:scale-[1.02] transition-transform duration-500"
                            />
                        </motion.div>
                    </div>

                    {/* Block 2: Ubicación Estratégica */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-100px" }}
                            className="order-1 relative group cursor-pointer"
                            onClick={() => window.dispatchEvent(new CustomEvent("openLightbox", { detail: { src: ubicacionImage } }))}
                        >
                            <div className="absolute -inset-4 bg-bv-gold/10 blur-2xl rounded-[40px] opacity-30 group-hover:opacity-60 transition-opacity duration-500 pointer-events-none" />
                            <img
                                src={ubicacionImage}
                                alt="Mapa de ubicación Buenavista Condominios"
                                className="relative w-full h-auto rounded-[2rem] shadow-2xl transform group-hover:scale-[1.02] transition-transform duration-500"
                            />

                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -bottom-6 -right-6 md:right-0 p-4 rounded-2xl bg-bv-gold text-bv-dark font-bold shadow-xl z-20 pointer-events-none"
                            >
                                ¡Ubicación Real!
                            </motion.div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            className="order-2 text-left"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 rounded-xl bg-bv-gold/10 flex items-center justify-center border border-bv-gold/30">
                                    <MapPin className="w-6 h-6 text-bv-gold" />
                                </div>
                                <h3 className="text-2xl md:text-4xl font-display font-bold text-bv-warm-white">
                                    Ubicación estratégica
                                </h3>
                            </div>

                            <p className="text-lg md:text-xl text-bv-warm-white/80 leading-relaxed mb-8">
                                Ubicado en <span className="text-white font-semibold">San Bartolo</span>, uno de los distritos más seguros de Lima.
                            </p>

                            <p className="text-lg text-bv-warm-white/60 leading-relaxed mb-10">
                                A solo 30 minutos de la ciudad, con acceso directo al <span className="text-bv-gold font-semibold">Km 50 de la Panamericana Sur.</span><br /><br />
                                San Bartolo hoy destaca como una de las zonas con mayor crecimiento urbano e inversión inmobiliaria del sur de Lima.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-6">
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
                                        <p className="text-sm text-bv-warm-white/60">Sur de Lima</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Block 3: Respaldo legal claro */}
                    <div className="grid grid-cols-1 lg:grid-cols-[1fr,1.3fr] gap-12 lg:gap-20 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            className="order-2 lg:order-1"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 rounded-xl bg-bv-gold/10 flex items-center justify-center border border-bv-gold/30">
                                    <Scale className="w-6 h-6 text-bv-gold" />
                                </div>
                                <h3 className="text-2xl md:text-4xl font-display font-bold text-bv-warm-white">
                                    Respaldo legal claro
                                </h3>
                            </div>

                            <p className="text-lg md:text-xl text-bv-warm-white/80 leading-relaxed mb-8">
                                Compra con documentación verificable y mayor <span className="text-bv-gold font-semibold">seguridad para tu inversión.</span>
                            </p>

                            <div className="space-y-4">
                                <div className="flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-bv-gold/30 transition-colors">
                                    <div className="w-2 h-10 bg-bv-gold rounded-full" />
                                    <p className="text-lg text-bv-warm-white/90 font-medium">
                                        Terrenos con partida registral activa en SUNARP.
                                    </p>
                                </div>
                                <div className="flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-bv-gold/30 transition-colors">
                                    <div className="w-2 h-10 bg-bv-gold rounded-full" />
                                    <p className="text-lg text-bv-warm-white/90 font-medium">
                                        Empresa registrada en SUNAT.
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-100px" }}
                            className="order-1 lg:order-2 grid grid-cols-2 gap-4 md:gap-8 items-center"
                        >
                            <div
                                className="relative group cursor-pointer transform -rotate-2"
                                onClick={() => window.dispatchEvent(new CustomEvent("openLightbox", { detail: { src: sunatImage1 } }))}
                            >
                                <div className="absolute -inset-2 bg-bv-gold/10 blur-xl rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                                <img
                                    src={sunatImage1}
                                    alt="Respaldo Legal SUNARP"
                                    className="w-full h-auto rounded-xl shadow-lg transform group-hover:scale-105 group-hover:rotate-0 transition-all duration-500"
                                />
                            </div>
                            <div
                                className="relative group cursor-pointer transform rotate-2 translate-y-8"
                                onClick={() => window.dispatchEvent(new CustomEvent("openLightbox", { detail: { src: sunatImage2 } }))}
                            >
                                <div className="absolute -inset-2 bg-bv-gold/10 blur-xl rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                                <img
                                    src={sunatImage2}
                                    alt="Respaldo Legal SUNAT"
                                    className="w-full h-auto rounded-xl shadow-lg transform group-hover:scale-105 group-hover:rotate-0 transition-all duration-500"
                                />
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default LocationSection;
