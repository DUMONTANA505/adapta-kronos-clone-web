import { Header } from "@/components/Header";
import { KronosHeroSection } from "@/components/KronosHeroSection";
import { FundamentosSection } from "@/components/FundamentosSection";
import { FuncionalidadesSection } from "@/components/FuncionalidadesSection";
import { IAHibridaSection } from "@/components/IAHibridaSection";
import { AboutSection } from "@/components/AboutSection";
import { MethodologySection } from "@/components/MethodologySection";
import { ExpertsSection } from "@/components/ExpertsSection";
import { PartnersSection } from "@/components/PartnersSection";
import { MediaRecognitionSection } from "@/components/MediaRecognitionSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { PricingSection } from "@/components/PricingSection";
import { FAQSection } from "@/components/FAQSection";
import { NewsletterSection } from "@/components/NewsletterSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <KronosHeroSection />
      <FundamentosSection />
      <FuncionalidadesSection />
      <IAHibridaSection />
      <AboutSection />
      <MethodologySection />
      <ExpertsSection />
      <TestimonialsSection />
      <PricingSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;
