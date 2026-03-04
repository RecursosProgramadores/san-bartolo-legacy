import HeroSection from "@/components/HeroSection";
import ContrastSection from "@/components/ContrastSection";
import DifferentialsSection from "@/components/DifferentialsSection";
import SocialProofSection from "@/components/SocialProofSection";
import { CtaSection, Footer, WhatsAppFloat } from "@/components/CtaFooter";

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      <HeroSection />
      <ContrastSection />
      <DifferentialsSection />
      <SocialProofSection />
      <CtaSection />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
};

export default Index;
