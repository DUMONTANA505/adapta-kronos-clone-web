import { Target, Eye, TrendingUp, Heart, Zap } from "lucide-react";

export function AboutSection() {
  const benefits = [
    {
      icon: Target,
      text: "Sair da inércia e desbloquear seu verdadeiro potencial"
    },
    {
      icon: Eye,
      text: "Ganhar clareza e foco em meio ao caos"
    },
    {
      icon: TrendingUp,
      text: "Desenvolver-se continuamente com apoio personalizado"
    },
    {
      icon: Heart,
      text: "Construir hábitos saudáveis para corpo, mente e espírito"
    },
    {
      icon: Zap,
      text: "Transformar desafios em oportunidades de crescimento"
    }
  ];

  return (
    <section id="sobre" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            O KRONOS é para você que busca...
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-gradient-card p-8 rounded-xl text-center hover:scale-105 transition-transform duration-300"
            >
              <benefit.icon className="h-12 w-12 text-foreground mx-auto mb-6" />
              <p className="text-foreground text-lg leading-relaxed">
                {benefit.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}