import { motion } from "framer-motion";
import { ChevronDown, CheckCircle2, Users } from "lucide-react";
import { useState } from "react";
import familyLifestyle from "@/assets/family-lifestyle.jpg";
import poolCommunity from "@/assets/pool-community.jpg";

const faqs = [
    {
        question: "¿La visita al condominio tiene algún costo o compromiso?",
        answer: "<strong>No.</strong> La visita es <strong>completamente gratuita</strong> y sin ningún compromiso de compra.",
    },
    {
        question: "¿Puedo ir a la visita con mi familia?",
        answer: "<strong>Sí.</strong> Puedes venir con tu familia e incluso con tu mascota, ya que el proyecto cuenta con espacios <strong>pet friendly</strong>.",
    },
    {
        question: "¿Qué se puede ver exactamente durante la visita?",
        answer: "Durante la visita te asesoraremos para entender qué es lo ideal para ti y tu familia y evaluar juntos si somos la opción adecuada para ustedes. Además, la visita está pensada para que puedas <strong>vivir la experiencia</strong> y disfrutar tiempo en familia de todo lo que ofrece el condominio.",
    },
    {
        question: "¿Para qué tipo de personas está pensado Buenavista Condominios?",
        answer: "Está pensado para familias que buscan vivir un <strong>estilo de vida más exclusivo</strong> y mejorar su calidad de vida. Hoy más de <strong>800 familias</strong> ya forman parte de Buenavista Condominios.",
    },
    {
        question: "¿El condominio tiene respaldo legal?",
        answer: "<strong>Sí.</strong> Los terrenos cuentan con <strong>partida registral activa emitida por SUNARP</strong>, lo que garantiza la seguridad legal de la compra. Además, la empresa se encuentra <strong>formalmente registrada en SUNAT</strong>.",
    },
];

const FaqItem = ({ question, answer, isOpen, onClick }: { question: string; answer: string; isOpen: boolean; onClick: () => void }) => {
    return (
        <div className="border-b border-white/5 py-6">
            <button
                onClick={onClick}
                className="flex w-full items-center justify-between text-left group"
            >
                <span className={`text-lg md:text-xl font-medium transition-colors ${isOpen ? 'text-bv-gold' : 'text-bv-warm-white group-hover:text-bv-gold/80'}`}>
                    {question}
                </span>
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    className="shrink-0 ml-4"
                >
                    <ChevronDown className={`w-6 h-6 ${isOpen ? 'text-bv-gold' : 'text-bv-warm-white/30'}`} />
                </motion.div>
            </button>
            <motion.div
                initial={false}
                animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                className="overflow-hidden"
            >
                <p
                    className="pt-4 text-bv-warm-white/60 leading-relaxed text-base md:text-lg"
                    dangerouslySetInnerHTML={{ __html: answer }}
                />
            </motion.div>
        </div>
    );
};

const FaqSection = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="bv-section bv-dark-bg py-24 md:py-40 relative overflow-hidden">
            <div className="bv-container px-4 md:px-8 lg:px-12 relative z-10">
                <div className="grid lg:grid-cols-[1.2fr,0.8fr] gap-16 lg:gap-24 items-start">

                    {/* FAQ Content */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="mb-12"
                        >
                            <span className="text-xs uppercase tracking-[0.4em] text-bv-gold/70 mb-3 block font-bold">Transparencia Total</span>
                            <h2 className="text-4xl md:text-6xl font-display font-bold text-bv-warm-white mb-6">Preguntas <span className="bv-gold-text italic">Frecuentes</span></h2>
                            <p className="text-bv-warm-white/40 text-lg md:text-xl font-light">
                                Resolvemos tus dudas para que agendes tu visita con total tranquilidad.
                            </p>
                        </motion.div>

                        <div className="space-y-2">
                            {faqs.map((faq, i) => (
                                <FaqItem
                                    key={i}
                                    question={faq.question}
                                    answer={faq.answer}
                                    isOpen={openIndex === i}
                                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Social Proof / Visit Evidence */}
                    <div className="space-y-8 lg:mt-20">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="relative p-8 rounded-[2.5rem] bg-bv-gold/5 border border-bv-gold/20 backdrop-blur-sm overflow-hidden"
                        >
                            <Users className="w-10 h-10 text-bv-gold mb-6" />
                            <p className="text-2xl md:text-3xl font-display font-medium text-bv-warm-white leading-tight mb-6">
                                Únete a las <span className="bv-gold-text">familias visionarias</span> que ya viven la experiencia
                            </p>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="aspect-square rounded-2xl overflow-hidden border border-white/10">
                                    <img src={familyLifestyle} alt="Familia visitando" className="w-full h-full object-cover" />
                                </div>
                                <div className="aspect-square rounded-2xl overflow-hidden border border-white/10">
                                    <img src={poolCommunity} alt="Comunidad en la piscina" className="w-full h-full object-cover" />
                                </div>
                            </div>

                            <div className="mt-8 flex items-center gap-3 text-bv-warm-white/60">
                                <CheckCircle2 className="w-5 h-5 text-bv-gold" />
                                <span className="text-sm font-medium">Fotos reales del condominio</span>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="p-8 rounded-[2.5rem] bg-bv-dark-bg border border-bv-gold/10 text-center"
                        >
                            <p className="text-bv-warm-white/40 mb-2 text-sm uppercase tracking-widest">¿Tienes más dudas?</p>
                            <p className="text-bv-warm-white text-lg font-medium">Estamos listos para asesorarte personalmente</p>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default FaqSection;
