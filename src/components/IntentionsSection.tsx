import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Lightbulb, Target, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const intentions = [
  {
    text: "Porque não quero mais adiar o que sei que preciso fazer.",
    journey: "Jornada Genesis",
    icon: Lightbulb
  },
  {
    text: "Porque entendi que inteligência sem ação é só ruído.",
    journey: "Jornada Titan",
    icon: Target
  },
  {
    text: "Porque decidi me tornar minha prioridade — de verdade.",
    journey: "Jornada Phanteon",
    icon: Star
  },
  {
    text: "Porque quero me mover com direção, não por impulso.",
    journey: "Jornada Titan",
    icon: Target
  },
  {
    text: "Porque já tentei sozinho, agora quero um ecossistema real.",
    journey: "Jornada Phanteon",
    icon: Star
  },
  {
    text: "Porque a mudança começa quando assumo responsabilidade.",
    journey: "Jornada Genesis",
    icon: Lightbulb
  },
  {
    text: "Porque KRONOS me pareceu feito sob medida para quem sente que o tempo está pedindo mais de nós.",
    journey: "Jornada Phanteon",
    icon: Star
  }
];

export const IntentionsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % intentions.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % intentions.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + intentions.length) % intentions.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  return (
    <section className="py-20 bg-gradient-section relative overflow-hidden">
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Por que escolhi entrar na <span className="text-kronos-purple">Jornada KRONOS</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            KRONOS não é um curso, é um compromisso com uma nova forma de viver.<br />
            Quem já decidiu dar o primeiro passo compartilha o que os moveu.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {intentions.map((intention, index) => {
                const IconComponent = intention.icon;
                return (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <div className="bg-card border border-border rounded-xl p-8 md:p-12 shadow-lg hover:shadow-xl transition-all duration-300 mx-auto max-w-3xl">
                      {/* Icon */}
                      <div className="flex justify-center mb-6">
                        <div className="w-16 h-16 rounded-full bg-kronos-purple/10 flex items-center justify-center">
                          <IconComponent className="w-8 h-8 text-foreground" />
                        </div>
                      </div>
                      
                      {/* Quote */}
                      <blockquote className="text-center">
                        <p className="text-lg md:text-2xl font-medium text-foreground mb-6 leading-relaxed italic">
                          "{intention.text}"
                        </p>
                        <footer className="text-sm md:text-base text-kronos-purple font-semibold">
                          {intention.journey}
                        </footer>
                      </blockquote>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Navigation buttons */}
          <Button
            variant="outline"
            size="icon"
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-background/80 backdrop-blur border-border hover:bg-background hover:border-kronos-purple"
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          
          <Button
            variant="outline"
            size="icon"
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-background/80 backdrop-blur border-border hover:bg-background hover:border-kronos-purple"
          >
            <ChevronRight className="w-4 h-4" />
          </Button>

          {/* Dots indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {intentions.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-kronos-purple w-8' 
                    : 'bg-muted hover:bg-muted-foreground/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};