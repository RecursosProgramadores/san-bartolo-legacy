import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import ContrastSection from "@/components/ContrastSection";
import DifferentialsSection from "@/components/DifferentialsSection";
import StagesSection from "@/components/StagesSection";
import SocialProofSection from "@/components/SocialProofSection";
import LocationSection from "@/components/LocationSection";
import FaqSection from "@/components/FaqSection";
import { CtaSection, Footer, WhatsAppFloat } from "@/components/CtaFooter";

const Lightbox = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    const handleOpen = (e: any) => setSelectedImage(e.detail.src);
    window.addEventListener("openLightbox", handleOpen);
    return () => window.removeEventListener("openLightbox", handleOpen);
  }, []);

  if (!selectedImage) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-10"
      onClick={() => setSelectedImage(null)}
    >
      <motion.button
        className="absolute top-6 right-6 text-white/70 hover:text-white"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <X className="w-10 h-10" />
      </motion.button>
      <motion.img
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        src={selectedImage}
        alt="Imagen ampliada"
        className="max-w-full max-h-full rounded-2xl shadow-2xl object-contain"
        onClick={(e) => e.stopPropagation()}
      />
    </motion.div>
  );
};

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      <HeroSection />
      <ContrastSection />
      <DifferentialsSection />
      <StagesSection />
      <SocialProofSection />
      <LocationSection />
      <CtaSection />
      <FaqSection />
      <Lightbox />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
};

export default Index;
