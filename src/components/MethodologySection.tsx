import { Search, MapPin, Users, BarChart3, UsersRound } from "lucide-react";

export function MethodologySection() {
  const steps = [
    {
      number: 1,
      icon: Search,
      title: "Diagnóstico Inteligente",
      description: "Avaliação completa do seu estado atual através de IA avançada e análise especializada."
    },
    {
      number: 2,
      icon: MapPin,
      title: "Caminho Personalizado",
      description: "Criação de um plano único e adaptado aos seus objetivos, necessidades e estilo de vida."
    },
    {
      number: 3,
      icon: Users,
      title: "Mentoria e Suporte",
      description: "Acompanhamento contínuo com especialistas e suporte 24/7 do seu agente de IA."
    },
    {
      number: 4,
      icon: BarChart3,
      title: "Monitoramento Contínuo",
      description: "Análise constante do seu progresso com ajustes automáticos para otimizar resultados."
    },
    {
      number: 5,
      icon: UsersRound,
      title: "Comunidade Ativa",
      description: "Conexão com uma rede de apoio de pessoas que compartilham os mesmos objetivos."
    }
  ];

  return (
    <section id="metodologia" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Metodologia KRONOS
          </h2>
          <p className="text-xl text-primary font-semibold">
            Sua Jornada de Transformação
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="flex flex-col md:flex-row items-center mb-12 last:mb-0"
            >
              <div className="flex-shrink-0 w-24 h-24 bg-primary rounded-full flex items-center justify-center mb-6 md:mb-0 md:mr-8">
                <span className="text-2xl font-bold text-primary-foreground">
                  {step.number}
                </span>
              </div>
              
              <div className="bg-gradient-card p-8 rounded-xl flex-1 text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start mb-4">
                  <step.icon className="h-8 w-8 text-primary mr-3" />
                  <h3 className="text-xl font-bold text-foreground">
                    {step.title}
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}