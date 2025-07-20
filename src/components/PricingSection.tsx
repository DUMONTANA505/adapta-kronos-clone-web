import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Star } from "lucide-react";

export function PricingSection() {
  const plans = [
    {
      name: "Iniciante",
      price: "R$ 97",
      period: "/mês",
      description: "Ideal para quem está começando sua jornada de transformação",
      features: [
        "Agente de IA personalizada básica",
        "1 sessão mensal com especialista",
        "Acesso à comunidade",
        "Relatórios de progresso",
        "Suporte por chat"
      ],
      highlighted: false
    },
    {
      name: "Completo",
      price: "R$ 197",
      period: "/mês",
      description: "Nossa recomendação para transformação completa",
      features: [
        "Agente de IA avançada e adaptativa",
        "4 sessões mensais com especialistas",
        "Plano personalizado completo",
        "Monitoramento 24/7",
        "Acesso prioritário à comunidade",
        "Materiais exclusivos",
        "Suporte prioritário"
      ],
      highlighted: true
    },
    {
      name: "Transformador",
      price: "R$ 397",
      period: "/mês",
      description: "Para quem busca resultados extraordinários",
      features: [
        "Agente de IA premium com deep learning",
        "Sessões ilimitadas com especialistas",
        "Mentoria 1:1 semanal",
        "Plano ultra-personalizado",
        "Acesso VIP à comunidade",
        "Workshops exclusivos",
        "Linha direta com especialistas",
        "Garantia de resultados"
      ],
      highlighted: false
    }
  ];

  return (
    <section id="planos" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Planos e Preços
          </h2>
          <p className="text-xl text-muted-foreground">
            Escolha o plano ideal para sua jornada de transformação
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative ${
                plan.highlighted 
                  ? 'bg-gradient-card border-primary scale-105 shadow-2xl' 
                  : 'bg-gradient-card border-border'
              } hover:scale-105 transition-transform duration-300`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                    <Star className="h-4 w-4 mr-1" />
                    MAIS POPULAR
                  </div>
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl font-bold text-foreground mb-2">
                  {plan.name}
                </CardTitle>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-primary">
                    {plan.price}
                  </span>
                  <span className="text-muted-foreground">
                    {plan.period}
                  </span>
                </div>
                <p className="text-muted-foreground text-sm">
                  {plan.description}
                </p>
              </CardHeader>
              
              <CardContent className="pt-0">
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                      <span className="text-foreground text-sm">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full ${
                    plan.highlighted 
                      ? 'bg-primary hover:bg-primary/90 text-primary-foreground' 
                      : 'bg-secondary hover:bg-secondary/80 text-secondary-foreground'
                  }`}
                >
                  Escolher Plano
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}