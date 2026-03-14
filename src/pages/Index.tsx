import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import ContrastSection from "@/components/ContrastSection";
import SocialProofSection from "@/components/SocialProofSection";
import LocationSection from "@/components/LocationSection";
import VisitSection from "@/components/VisitSection";
import TeamSection from "@/components/TeamSection";
import { CtaSection, Footer, WhatsAppFloat } from "@/components/CtaFooter";
import { ChevronLeft, ChevronRight } from "lucide-react";

const GalleryLightbox = () => {
  const [images, setImages] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(-1);

  useEffect(() => {
    const handleOpen = (e: any) => {
      if (e.detail.srcs) {
        setImages(e.detail.srcs);
        setCurrentIndex(e.detail.index || 0);
      } else if (e.detail.src) {
        setImages([e.detail.src]);
        setCurrentIndex(0);
      }
    };
    window.addEventListener("openLightbox", handleOpen);
    return () => window.removeEventListener("openLightbox", handleOpen);
  }, []);

  const closeLightbox = () => {
    setImages([]);
    setCurrentIndex(-1);
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  if (currentIndex === -1 || images.length === 0) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-10"
      onClick={closeLightbox}
    >
      {/* Cierre */}
      <motion.button
        className="absolute top-6 right-6 z-50 text-white/70 hover:text-white"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <X className="w-10 h-10" />
      </motion.button>

      {/* Navegación izq */}
      {images.length > 1 && (
        <motion.button
          className="absolute left-4 md:left-10 z-50 p-3 rounded-full bg-black/40 text-white/70 hover:text-white hover:bg-black/60 hidden md:block"
          onClick={prevImage}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronLeft className="w-8 h-8" />
        </motion.button>
      )}

      {/* Imagen actual */}
      <motion.img
        key={currentIndex}
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
        src={images[currentIndex]}
        alt={`Imagen ampliada ${currentIndex + 1}`}
        className="max-w-full max-h-full rounded-2xl shadow-2xl object-contain"
        onClick={(e) => {
          e.stopPropagation();
          if (images.length > 1) {
            nextImage(e);
          }
        }}
      />

      {/* Navegación der */}
      {images.length > 1 && (
        <motion.button
          className="absolute right-4 md:right-10 z-50 p-3 rounded-full bg-black/40 text-white/70 hover:text-white hover:bg-black/60 hidden md:block"
          onClick={nextImage}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronRight className="w-8 h-8" />
        </motion.button>
      )}

      {/* Indicador Mobile */}
      {images.length > 1 && (
        <div className="absolute bottom-6 text-white/50 text-sm md:hidden bg-black/50 px-4 py-2 rounded-full backdrop-blur-sm">
          Toque la imagen para la siguiente ({currentIndex + 1} / {images.length})
        </div>
      )}
    </motion.div>
  );
};

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      <HeroSection />
      <ContrastSection />
      <SocialProofSection />
      <LocationSection />
      <VisitSection />
      <TeamSection />
      <CtaSection />
      <GalleryLightbox />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
};

export default Index;
