import { Clock, Target, Heart, Brain, Zap, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function FundamentosSection() {
  const fundamentos = [
    {
      icon: Clock,
      name: "Kronos",
      subtitle: "Tempo Linear das Ações",
      description: "O domínio do tempo estruturado, onde organizamos ações concretas e construímos disciplina através de sistemas e rotinas que geram progresso mensurável.",
      color: "kronos-purple",
      gradient: "from-kronos-purple/20 to-kronos-purple/5",
      features: ["Gestão eficaz do tempo", "Sistemas de produtividade", "Disciplina estruturada", "Progresso mensurável"]
    },
    {
      icon: Target,
      name: "Kairós",
      subtitle: "Tempo Existencial da Oportunidade",
      description: "A sabedoria do momento oportuno, onde captamos o significado profundo das experiências e alinhamos nossas ações com propósito autêntico.",
      color: "kronos-blue",
      gradient: "from-kronos-blue/20 to-kronos-blue/5",
      features: ["Timing perfeito", "Propósito autêntico", "Oportunidades únicas", "Significado profundo"]
    },
    {
      icon: Heart,
      name: "Corpus",
      subtitle: "Espaço Físico e Bioenergético",
      description: "O templo onde a realidade se manifesta. Cuidamos do corpo físico, energia vital e ambiente para criar a base sólida da transformação.",
      color: "kronos-cyan",
      gradient: "from-kronos-cyan/20 to-kronos-cyan/5",
      features: ["Saúde física", "Energia vital", "Ambiente otimizado", "Base sólida"]
    },
    {
      icon: Brain,
      name: "Atmos",
      subtitle: "Instante Sensorial Puro",
      description: "A consciência plena do momento presente, onde desenvolvemos presença mindful e conectamos com nossa experiência sensorial direta.",
      color: "kronos-gold",
      gradient: "from-kronos-gold/20 to-kronos-gold/5",
      features: ["Presença mindful", "Experiência direta", "Consciência plena", "Momento presente"]
    },
    {
      icon: Zap,
      name: "Sophrén",
      subtitle: "Autogovernança e Domínio da Vontade",
      description: "O comando consciente da própria vida, onde desenvolvemos autocontrole, direção clara e a capacidade de moldar nosso destino.",
      color: "kronos-orange",
      gradient: "from-kronos-orange/20 to-kronos-orange/5",
      features: ["Autocontrole", "Direção clara", "Força de vontade", "Domínio pessoal"]
    }
  ];

  return (
    <section id="fundamentos" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-card px-6 py-3 rounded-full mb-6">
            <Zap className="h-5 w-5 text-kronos-gold mr-2" />
            <span className="text-kronos-gold font-semibold">A Quintessência</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
            Os 5 <span className="bg-gradient-text bg-clip-text text-transparent">Fundamentos</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A metodologia KRONOS estrutura-se em cinco pilares fundamentais que abordam 
            todas as dimensões da experiência humana para uma transformação integral.
          </p>
        </div>

        {/* Fundamentos Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {fundamentos.map((fundamento, index) => (
            <div 
              key={fundamento.name}
              className={`relative bg-gradient-to-br ${fundamento.gradient} p-8 rounded-2xl border border-${fundamento.color}/20 hover:border-${fundamento.color}/40 transition-all duration-500 group hover:shadow-elegant hover:scale-105`}
            >
              {/* Icon */}
              <div className="relative mb-6">
                <div className={`inline-flex p-4 bg-${fundamento.color}/10 rounded-xl`}>
                  <fundamento.icon className={`h-8 w-8 text-${fundamento.color}`} />
                </div>
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-foundation rounded-full flex items-center justify-center text-xs font-bold text-white">
                  {index + 1}
                </div>
              </div>

              {/* Content */}
              <h3 className={`text-2xl font-display font-bold text-${fundamento.color} mb-2`}>
                {fundamento.name}
              </h3>
              
              <p className="text-sm font-semibold text-muted-foreground mb-4">
                {fundamento.subtitle}
              </p>
              
              <p className="text-foreground/90 leading-relaxed mb-6">
                {fundamento.description}
              </p>

              {/* Features */}
              <div className="space-y-2">
                {fundamento.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center text-sm">
                    <div className={`w-2 h-2 bg-${fundamento.color} rounded-full mr-3`} />
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* Integration Message */}
        <div className="bg-gradient-card p-8 rounded-2xl text-center shadow-card">
          <h3 className="text-3xl font-display font-bold mb-4">
            <span className="bg-gradient-text bg-clip-text text-transparent">
              A Magia da Integração
            </span>
          </h3>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
            Quando os cinco fundamentos trabalham em harmonia, você não apenas melhora sua vida - 
            você <strong className="text-kronos-gold">desperta sua verdadeira essência</strong> e 
            acessa um nível de potencial que antes parecia impossível.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button 
              className="bg-gradient-button hover:shadow-glow transition-all duration-300 font-semibold px-8"
            >
              Despertar Minha Essência
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            
            <Button 
              variant="outline" 
              className="border-kronos-purple text-kronos-purple hover:bg-kronos-purple/10"
            >
              Ver Metodologia Completa
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}