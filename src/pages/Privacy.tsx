import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Privacy = () => {
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
            Política de Privacidad
          </h1>

          <div className="space-y-8 text-lg text-bv-warm-white/70 leading-relaxed font-light">
            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">1. Recopilación de Datos</h2>
              <p>
                Recopilamos información personal básica como nombre, correo electrónico y teléfono únicamente cuando usted la proporciona voluntariamente a través de nuestros formularios de contacto o WhatsApp.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">2. Uso de la Información</h2>
              <p>
                Sus datos serán utilizados exclusivamente para brindarle información sobre el proyecto, agendar visitas y enviarle comunicaciones comerciales relacionadas con Buenavista Condominios.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">3. Protección de Datos</h2>
              <p>
                Implementamos medidas de seguridad para proteger sus datos personales contra el acceso no autorizado o la divulgación indebida.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">4. Sus Derechos</h2>
              <p>
                Usted puede solicitar el acceso, corrección o eliminación de sus datos personales en cualquier momento contactándonos a través de nuestro correo oficial.
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

export default Privacy;
