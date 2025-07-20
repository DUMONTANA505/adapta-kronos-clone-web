import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Maria Santos",
      age: 34,
      quote: "Em 3 meses com o KRONOS, consegui transformar completamente minha rotina e energia. A IA personalizada realmente entende minhas necessidades.",
      rating: 5
    },
    {
      name: "João Silva",
      age: 28,
      quote: "Nunca pensei que poderia ter tanto foco e clareza. Os especialistas do KRONOS me guiaram para um novo nível de performance.",
      rating: 5
    },
    {
      name: "Ana Costa",
      age: 42,
      quote: "A metodologia do KRONOS mudou minha perspectiva sobre desenvolvimento pessoal. Resultados reais e duradouros.",
      rating: 5
    },
    {
      name: "Pedro Oliveira",
      age: 36,
      quote: "Saí da estagnação e descobri meu verdadeiro potencial. O suporte 24/7 da IA faz toda a diferença no dia a dia.",
      rating: 5
    },
    {
      name: "Carla Mendes",
      age: 29,
      quote: "Construí hábitos saudáveis que realmente funcionam. A abordagem científica do KRONOS é impressionante.",
      rating: 5
    },
    {
      name: "Rafael Torres",
      age: 38,
      quote: "Transformei desafios em oportunidades de crescimento. O KRONOS me deu as ferramentas para prosperar.",
      rating: 5
    }
  ];

  return (
    <section id="depoimentos" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Transformações Reais. Vidas Inspiradas.
          </h2>
          <p className="text-xl text-muted-foreground">
            Histórias de pessoas que superaram seus limites com o KRONOS
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-gradient-card border-border hover:scale-105 transition-transform duration-300">
              <CardContent className="p-6">
                {/* Stars */}
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-primary fill-current" />
                  ))}
                </div>
                
                {/* Quote */}
                <blockquote className="text-foreground mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                
                {/* Author */}
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4">
                    <span className="text-primary-foreground font-bold">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">
                      {testimonial.name}
                    </div>
                    <div className="text-muted-foreground text-sm">
                      {testimonial.age} anos
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}