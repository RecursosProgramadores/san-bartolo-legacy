import { motion } from "framer-motion";
import { CheckCircle2, Zap, Droplets, Waves, Flame, ShieldAlert, Award } from "lucide-react";
import kidsPool from "@/assets/kids-pool.jpg";
import clubhouseEvent from "@/assets/clubhouse-event.jpg";
import petsArea from "@/assets/pets-area.jpg";
import poolCommunity from "@/assets/pool-community.jpg";

const stages = [
    {
        title: "Etapa 1",
        image: kidsPool,
        amenities: [
            "1 Piscina para disfrutar",
            "Zona de parrillas y zonas sociales",
            "1 Zona de juegos para niños",
            "Cancha de fútbol y básquet de cemento"
        ]
    },
    {
        title: "Etapa 2",
        image: poolCommunity,
        amenities: [
            "Cancha de fútbol",
            "Piscina recreativa",
            "1 Zona de juegos para niños",
            "Zona social y zona de parrillas"
        ]
    },
    {
        title: "Etapa 3",
        image: petsArea,
        amenities: [
            "Zona Pet Friendly",
            "Cancha de fútbol",
            "Cancha de voley",
            "2 Zonas sociales",
            "1 Área de parrillas",
            "2 Juegos para niños"
        ]
    },
    {
        title: "Etapa 4",
        image: clubhouseEvent,
        amenities: [
            "1 Zona de fogata",
            "1 Zona de juegos para niños",
            "1 Zona social y de parrilla",
            "1 Cancha de frontón"
        ]
    }
];

const services = [
    {
        title: "Puntos de Luz",
        icon: Zap,
        description: "Suministro de energía eléctrica a través de Luz del Sur."
    },
    {
        title: "Puntos de Agua",
        icon: Droplets,
        description: "Abastecimiento mediante reservorios, con conexión gestionada por Provinsur / Sedapal."
    },
    {
        title: "Sistema de Desagüe",
        icon: Waves,
        description: "Infraestructura para la correcta evacuación de aguas residuales."
    },
    {
        title: "Gas Natural",
        icon: Flame,
        description: "Instalación disponible a través de Gas Camisea."
    }
];

const StagesSection = () => {
    return (
        <section className="bv-section bv-dark-bg py-24 md:py-40 relative overflow-hidden">
            <div className="bv-container px-4 md:px-8 lg:px-12 relative z-10">

                {/* Header: Trayectoria */}
                <div className="max-w-4xl mx-auto text-center mb-24 md:mb-32">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-xs uppercase tracking-[0.4em] text-bv-gold/70 mb-4 block font-bold">Confianza y Realidad</span>
                        <h2 className="text-4xl md:text-7xl font-display font-bold text-bv-warm-white mb-8">Nuestra <span className="bv-gold-text italic">Trayectoria</span></h2>

                        <div className="grid md:grid-cols-2 gap-8 items-center mt-12 bg-white/5 backdrop-blur-md rounded-[2.5rem] p-8 md:p-12 border border-white/10">
                            <div className="text-center md:text-left">
                                <p className="text-bv-gold font-display font-bold text-5xl md:text-7xl mb-2">+800</p>
                                <p className="text-bv-warm-white text-xl md:text-2xl font-medium">Lotes vendidos</p>
                            </div>
                            <div className="text-center md:text-left md:border-l md:border-white/10 md:pl-12">
                                <p className="text-bv-warm-white/60 text-lg md:text-xl leading-relaxed">
                                    Más de 800 familias ya decidieron su futuro en Buenavista. Números que hablan de <strong>confianza y realidad</strong>.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Project Stages Cards */}
                <div className="mb-32">
                    <div className="flex items-center gap-3 mb-12">
                        <Award className="w-6 h-6 text-bv-gold" />
                        <h3 className="text-2xl md:text-3xl font-display font-bold text-bv-warm-white">Distribución por Etapas</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                        {stages.map((stage, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="group relative flex flex-col h-full bg-white/5 rounded-[2rem] overflow-hidden border border-white/10 hover:border-bv-gold/30 transition-all duration-500"
                            >
                                <div className="aspect-[4/3] overflow-hidden">
                                    <img src={stage.image} alt={stage.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-bv-dark via-transparent to-transparent opacity-80" />
                                    <div className="absolute top-4 left-4">
                                        <span className="px-4 py-1.5 rounded-full bg-bv-gold text-bv-dark text-xs font-bold uppercase tracking-widest">{stage.title}</span>
                                    </div>
                                </div>
                                <div className="p-8 flex-1 flex flex-col">
                                    <ul className="space-y-4 flex-1">
                                        {stage.amenities.map((item, j) => (
                                            <li key={j} className="flex items-start gap-3">
                                                <CheckCircle2 className="w-4 h-4 text-bv-gold shrink-0 mt-1" />
                                                <span className="text-bv-warm-white/70 text-sm md:text-base leading-snug">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Services Infrastructure */}
                <div className="relative p-8 md:p-16 rounded-[3rem] bg-bv-gold/5 border border-bv-gold/20 backdrop-blur-xl overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-bv-gold/10 blur-[100px] -mr-32 -mt-32 rounded-full" />

                    <div className="relative z-10">
                        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-12 mb-16">
                            <div className="max-w-2xl">
                                <span className="flex items-center gap-3 text-bv-gold font-bold uppercase tracking-widest text-xs mb-4">
                                    <ShieldAlert className="w-5 h-5" />
                                    Seguridad y Respaldo
                                </span>
                                <h3 className="text-3xl md:text-5xl font-display font-bold text-bv-warm-white mb-6">Servicios <span className="bv-gold-text italic">Básicos</span> e Infraestructura</h3>
                                <p className="text-bv-warm-white/60 text-lg">Todo lo necesario para construir tu futuro con total respaldo y seguridad 24/7.</p>
                            </div>
                            <div className="shrink-0 flex items-center gap-4 px-6 py-4 rounded-2xl bg-bv-gold text-bv-dark">
                                <ShieldAlert className="w-8 h-8" />
                                <div>
                                    <p className="text-xs uppercase font-bold tracking-widest">Protección Total</p>
                                    <p className="text-xl font-display font-bold">Seguridad 24/7</p>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {services.map((service, i) => (
                                <div key={i} className="group p-6 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-bv-gold/20 transition-all duration-300">
                                    <div className="w-12 h-12 rounded-xl bg-bv-gold/10 flex items-center justify-center mb-6 border border-bv-gold/20 group-hover:bg-bv-gold group-hover:text-bv-dark transition-all duration-300 text-bv-gold">
                                        <service.icon className="w-6 h-6" />
                                    </div>
                                    <h4 className="text-bv-warm-white font-bold text-lg mb-3">{service.title}</h4>
                                    <p className="text-bv-warm-white/50 text-sm leading-relaxed">{service.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default StagesSection;
