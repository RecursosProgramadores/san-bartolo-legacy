import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Terms = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bv-dark-bg text-bv-warm-white py-20 px-4">
      <div className="bv-container max-w-4xl mx-auto">
        <button 
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-bv-gold hover:text-white transition-colors mb-12 group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          Volver al inicio
        </button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-display font-black uppercase tracking-tighter text-bv-gold mb-12">
            Términos y Condiciones
          </h1>

          <div className="space-y-8 text-lg text-bv-warm-white/70 leading-relaxed font-light">
            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">1. Introducción</h2>
              <p>
                Al acceder y utilizar el sitio web de Buenavista Condominios, usted acepta cumplir con estos términos y condiciones en su totalidad.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">2. Uso del Sitio</h2>
              <p>
                Este sitio web tiene como objetivo proporcionar información sobre el proyecto inmobiliario Buenavista Condominios. Las imágenes y descripciones son referenciales.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">3. Propiedad Intelectual</h2>
              <p>
                Todo el contenido, logos, imágenes y textos son propiedad exclusiva de Buenavista Condominios y están protegidos por las leyes de propiedad intelectual.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">4. Limitación de Responsabilidad</h2>
              <p>
                Buenavista Condominios no se hace responsable por errores técnicos o interrupciones en el servicio del sitio web.
              </p>
            </section>

            <p className="pt-12 text-sm text-bv-warm-white/40 italic">
              Última actualización: Marzo 2026
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Terms;
