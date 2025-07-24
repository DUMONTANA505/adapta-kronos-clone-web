import { Button } from "@/components/ui/button";
import { Play, ArrowRight, Sparkles, Clock, Target, Heart, Brain, Zap } from "lucide-react";

export function KronosHeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-kronos-purple/20 rounded-full filter blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-kronos-blue/15 rounded-full filter blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-kronos-cyan/10 rounded-full filter blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-6xl mx-auto">
          {/* Icon and Badge */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="bg-gradient-card p-6 rounded-full shadow-glow">
                <Sparkles className="h-16 w-16 text-kronos-gold" />
              </div>
              <div className="absolute -top-2 -right-2 bg-kronos-purple px-3 py-1 rounded-full text-xs font-semibold">
                IA Híbrida
              </div>
            </div>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-8 leading-tight">
            <span className="bg-gradient-text bg-clip-text text-transparent">
              KRONOS
            </span>
            <br />
            <span className="text-foreground">A Quintessência</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed">
            O programa definitivo de desenvolvimento pessoal que combina{" "}
            <span className="text-kronos-purple font-semibold">IA Híbrida</span>,{" "}
            <span className="text-kronos-blue font-semibold">Especialistas Humanos</span> e{" "}
            <span className="text-kronos-cyan font-semibold">Medicina do Estilo de Vida</span>{" "}
            para superar definitivamente a procrastinação, inércia e estagnação.
          </p>

          {/* Five Foundations Preview */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {[
              { icon: Clock, name: "Kronos", color: "text-kronos-purple" },
              { icon: Target, name: "Kairós", color: "text-kronos-blue" },
              { icon: Heart, name: "Corpus", color: "text-kronos-cyan" },
              { icon: Brain, name: "Atmos", color: "text-kronos-gold" },
              { icon: Zap, name: "Sophrén", color: "text-kronos-orange" }
            ].map((foundation, index) => (
              <div key={foundation.name} className="bg-gradient-card px-4 py-3 rounded-lg flex items-center space-x-2 hover:shadow-elegant transition-all duration-300">
                <foundation.icon className={`h-5 w-5 ${foundation.color}`} />
                <span className="text-sm font-medium">{foundation.name}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              onClick={() => scrollToSection('planos')}
              size="lg"
              className="bg-gradient-button hover:shadow-glow transition-all duration-300 text-lg font-semibold px-8 py-4"
            >
              Despertar Meu Potencial Agora
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              onClick={() => scrollToSection('fundamentos')}
              variant="outline"
              size="lg"
              className="border-kronos-purple text-kronos-purple hover:bg-kronos-purple/10 text-lg font-semibold px-8 py-4"
            >
              <Play className="mr-2 h-5 w-5" />
              Conhecer a Metodologia
            </Button>
          </div>

          {/* Video Preview Section */}
          <div className="relative max-w-4xl mx-auto">
            <div className="bg-gradient-card p-8 rounded-2xl shadow-card">
              <h3 className="text-2xl font-display font-bold mb-6 bg-gradient-text bg-clip-text text-transparent">
                Aula Magna: Os 5 Fundamentos do KRONOS
              </h3>
              
              {/* Video Placeholder - Replace with actual video */}
              <div className="relative aspect-video bg-kronos-dark rounded-xl overflow-hidden group cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-r from-kronos-purple/20 to-kronos-blue/20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-gradient-button p-6 rounded-full shadow-glow group-hover:scale-110 transition-transform duration-300">
                    <Play className="h-12 w-12 text-white fill-current" />
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-black/50 backdrop-blur-sm p-4 rounded-lg">
                    <p className="text-white font-semibold">
                      Descubra como os 5 fundamentos podem transformar sua vida em 45 minutos
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "12", label: "Funcionalidades Principais", color: "text-kronos-purple" },
              { number: "5", label: "Fundamentos Essenciais", color: "text-kronos-blue" },
              { number: "24/7", label: "IA Híbrida Disponível", color: "text-kronos-cyan" },
              { number: "∞", label: "Potencial a Despertar", color: "text-kronos-gold" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className={`text-4xl font-display font-bold ${stat.color} mb-2`}>
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-kronos-purple rounded-full flex justify-center">
          <div className="w-1 h-3 bg-kronos-purple rounded-full animate-pulse mt-2" />
        </div>
      </div>
    </section>
  );
}