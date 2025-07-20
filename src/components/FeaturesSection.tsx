import { Bot, Users, HeartHandshake } from "lucide-react";

export function FeaturesSection() {
  const features = [
    {
      icon: Bot,
      title: "Agente de IA Personalizada",
      description: "Inteligente, adaptável, aprende com seu progresso e oferece orientações personalizadas para seu desenvolvimento contínuo."
    },
    {
      icon: Users,
      title: "Consultoria com Especialistas",
      description: "Mentoria humana de alto nível com profissionais experientes dedicados ao seu crescimento pessoal e profissional."
    },
    {
      icon: HeartHandshake,
      title: "Estilo de Vida e Bem-Estar",
      description: "Baseado na Medicina do Estilo de Vida, focando em hábitos saudáveis para corpo, mente e espírito."
    }
  ];

  return (
    <section id="funcionalidades" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Como o KRONOS te impulsiona
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-gradient-card p-8 rounded-xl text-center hover:scale-105 transition-transform duration-300"
            >
              <feature.icon className="h-16 w-16 text-foreground mx-auto mb-6" />
              <h3 className="text-xl font-bold text-foreground mb-4">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}