import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { MethodologySection } from "@/components/MethodologySection";
import { ExpertsSection } from "@/components/ExpertsSection";
import { PartnersSection } from "@/components/PartnersSection";
import { MediaRecognitionSection } from "@/components/MediaRecognitionSection";
import { BenchmarkSection } from "@/components/BenchmarkSection";
import { IntentionsSection } from "@/components/IntentionsSection";

import { PricingSection } from "@/components/PricingSection";
import { FAQSection } from "@/components/FAQSection";
import { NewsletterSection } from "@/components/NewsletterSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <AboutSection />
      
      {/* Frase de destaque antes das funcionalidades */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-kronos-purple">
            KRONOS NÃO É UM CURSO. É UM ESTILO DE VIDA.
          </h2>
        </div>
      </section>
      
      <ExpertsSection />
      <FeaturesSection />
      <MethodologySection />
      <PartnersSection />
      <MediaRecognitionSection />
      <BenchmarkSection />
      <IntentionsSection />
      
      <PricingSection />
      <FAQSection />
      <NewsletterSection />
      <Footer />
    </div>
  );
};

export default Index;
