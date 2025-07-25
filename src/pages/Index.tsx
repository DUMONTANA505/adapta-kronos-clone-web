import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { MethodologySection } from "@/components/MethodologySection";
import { ExpertsSection } from "@/components/ExpertsSection";
import { PartnersSection } from "@/components/PartnersSection";
import { MediaRecognitionSection } from "@/components/MediaRecognitionSection";

import { PricingSection } from "@/components/PricingSection";
import { FAQSection } from "@/components/FAQSection";
import { NewsletterSection } from "@/components/NewsletterSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <MethodologySection />
      <ExpertsSection />
      <PartnersSection />
      <MediaRecognitionSection />
      
      <PricingSection />
      <FAQSection />
      <NewsletterSection />
      <Footer />
    </div>
  );
};

export default Index;
