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
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
          SUPERE A ESTAGNAÇÃO.<br />
          <span className="text-primary">TRANSFORME SUA VIDA.</span>
        </h1>

        {/* Supporting Text */}
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
          Com o KRONOS, você tem o apoio de um agente de IA personalizada e especialistas dedicados 
          para alcançar seu potencial máximo e prosperar na realidade total.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
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

        {/* Video Player Placeholder */}
        <div className="bg-card rounded-lg p-8 shadow-2xl max-w-2xl mx-auto">
          <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
            <div className="text-center">
              <Play className="h-16 w-16 text-primary mx-auto mb-4" />
              <p className="text-muted-foreground">Player de vídeo incorporado</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}