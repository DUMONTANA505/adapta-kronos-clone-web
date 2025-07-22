import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

export function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen bg-gradient-hero flex items-center justify-center px-6">
      <div className="container mx-auto text-center max-w-4xl">
        {/* Main Title */}
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
          SUPERE A ESTAGNAÇÃO.<br />
          <span className="text-primary">TRANSFORME SUA VIDA.</span>
        </h1>

        {/* Supporting Text */}
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
          Com o KRONOS, você tem o apoio de um agente de IA personalizada e especialistas dedicados 
          para alcançar seu potencial máximo e prosperar na realidade total.
        </p>

        {/* Video Player */}
        <div className="bg-card rounded-lg p-8 shadow-2xl max-w-5xl mx-auto mb-12">
        <div className="aspect-video bg-muted rounded-lg overflow-hidden">
            <iframe 
              className="w-full h-full"
              src="https://www.youtube.com/embed/FBH37ow7uME"
              title="KRONOS - Aula Magna"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg"
            onClick={() => scrollToSection('planos')}
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-4 text-lg"
          >
            Quero Começar Agora
          </Button>
          
          <Button 
            variant="outline"
            size="lg"
            className="border-primary text-primary hover:bg-primary/10 px-8 py-4 text-lg"
          >
            <Play className="mr-2 h-5 w-5" />
            Assista à Aula Magna
          </Button>
        </div>
      </div>
    </section>
  );
}