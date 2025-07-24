import { Bot, Brain, Heart, Users, Zap, MessageCircle, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export function IAHibridaSection() {
  const especialistasInternos = [
    {
      name: "Dr. Educador",
      role: "Mentor de Aprendizado",
      description: "Especialista em pedagogia e desenvolvimento de habilidades, adapta métodos de ensino ao seu perfil único.",
      color: "kronos-purple",
      icon: Brain
    },
    {
      name: "Dr. Espelho",
      role: "Analista Comportamental",
      description: "Reflete seus padrões, identifica bloqueios e oferece insights profundos sobre seu comportamento.",
      color: "kronos-blue",
      icon: MessageCircle
    },
    {
      name: "Dr. Motivador",
      role: "Coach de Performance",
      description: "Mantém você energizado, focado e comprometido com suas metas através de estratégias personalizadas.",
      color: "kronos-cyan",
      icon: Zap
    },
    {
      name: "Dr. Estrategista",
      role: "Planejador Executivo",
      description: "Desenvolve planos de ação personalizados e otimiza sua jornada de transformação.",
      color: "kronos-gold",
      icon: Bot
    }
  ];

  const recursos = [
    {
      title: "Memória Dinâmica Completa",
      description: "A IA mantém histórico completo de todas suas interações, progressos e insights para orientação contextualizada.",
      icon: Brain,
      color: "kronos-purple"
    },
    {
      title: "Análise de Padrões",
      description: "Identifica automaticamente seus padrões comportamentais, pontos fortes e áreas de desenvolvimento.",
      icon: MessageCircle,
      color: "kronos-blue"
    },
    {
      title: "Escalada Inteligente",
      description: "Detecta quando você precisa de intervenção humana e conecta com especialistas reais automaticamente.",
      icon: Users,
      color: "kronos-cyan"
    },
    {
      title: "Personalização Profunda",
      description: "Adapta comunicação, sugestões e estratégias baseado no seu perfil psicológico e objetivos únicos.",
      icon: Heart,
      color: "kronos-gold"
    }
  ];

  return (
    <section id="ia-hibrida" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-card px-6 py-3 rounded-full mb-6">
            <Bot className="h-5 w-5 text-kronos-cyan mr-2" />
            <span className="text-kronos-cyan font-semibold">Tecnologia Avançada</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
            IA <span className="bg-gradient-text bg-clip-text text-transparent">Híbrida</span>
            <br />KRONOS 2.0
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A primeira inteligência artificial híbrida do mundo para desenvolvimento pessoal, 
            combinando tecnologia de ponta com sabedoria humana especializada.
          </p>
        </div>

        {/* Main IA Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Left: Chat Interface Mockup */}
          <div className="relative">
            <div className="bg-gradient-card p-6 rounded-2xl shadow-card">
              <div className="flex items-center space-x-3 mb-6 pb-4 border-b border-white/10">
                <div className="relative">
                  <div className="w-10 h-10 bg-gradient-button rounded-full flex items-center justify-center">
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-background" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">KRONOS 2.0</h3>
                  <p className="text-xs text-muted-foreground">Seu mentor pessoal • Online</p>
                </div>
              </div>

              {/* Chat Messages */}
              <div className="space-y-4 max-h-96 overflow-y-auto">
                <div className="bg-kronos-light p-3 rounded-lg">
                  <p className="text-sm">Olá! Analisei seu progresso esta semana. Notei que você tem superado suas metas de produtividade, mas detectei alguns padrões de procrastinação nas tardes. Que tal explorarmos estratégias para otimizar esse período?</p>
                </div>
                
                <div className="bg-kronos-purple/20 p-3 rounded-lg ml-8">
                  <p className="text-sm">Sim, exatamente! Como você conseguiu identificar isso?</p>
                </div>
                
                <div className="bg-kronos-light p-3 rounded-lg">
                  <p className="text-sm">Através da análise do seu padrão de tarefas concluídas e os dados do seu wearable que mostram queda de energia às 14h. O Dr. Estrategista sugere implementar uma micro-pausa energizante. O Dr. Educador recomenda técnicas específicas. Gostaria que eu detalhe?</p>
                </div>

                <div className="text-center py-2">
                  <div className="inline-flex items-center text-xs text-muted-foreground">
                    <Brain className="h-3 w-3 mr-1" />
                    Dr. Estrategista e Dr. Educador consultados
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Key Features */}
          <div className="space-y-6">
            <h3 className="text-3xl font-display font-bold mb-8">
              Recursos <span className="text-kronos-cyan">Avançados</span>
            </h3>
            
            {recursos.map((recurso, index) => (
              <div key={index} className={`bg-gradient-card p-6 rounded-xl border border-${recurso.color}/20 hover:border-${recurso.color}/40 transition-all duration-300`}>
                <div className="flex items-start space-x-4">
                  <div className={`p-3 bg-${recurso.color}/10 rounded-lg`}>
                    <recurso.icon className={`h-6 w-6 text-${recurso.color}`} />
                  </div>
                  <div>
                    <h4 className={`font-bold text-${recurso.color} mb-2`}>
                      {recurso.title}
                    </h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {recurso.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Especialistas Internos */}
        <div className="mb-16">
          <h3 className="text-3xl font-display font-bold text-center mb-12">
            Painel de <span className="bg-gradient-text bg-clip-text text-transparent">Especialistas Internos</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {especialistasInternos.map((especialista, index) => (
              <div 
                key={index}
                className={`bg-gradient-card p-6 rounded-xl text-center border border-${especialista.color}/20 hover:border-${especialista.color}/40 transition-all duration-300 hover:scale-105`}
              >
                <div className={`inline-flex p-4 bg-${especialista.color}/10 rounded-full mb-4`}>
                  <especialista.icon className={`h-8 w-8 text-${especialista.color}`} />
                </div>
                
                <h4 className={`font-bold text-${especialista.color} mb-2`}>
                  {especialista.name}
                </h4>
                
                <p className="text-sm font-semibold text-muted-foreground mb-3">
                  {especialista.role}
                </p>
                
                <p className="text-xs text-foreground/80 leading-relaxed">
                  {especialista.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Hybrid Model Explanation */}
        <div className="bg-gradient-card p-8 rounded-2xl text-center shadow-card">
          <h3 className="text-3xl font-display font-bold mb-6">
            <span className="bg-gradient-text bg-clip-text text-transparent">
              O Modelo Híbrido
            </span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <Bot className="h-12 w-12 text-kronos-purple mx-auto mb-4" />
              <h4 className="font-bold text-kronos-purple mb-2">IA Avançada</h4>
              <p className="text-sm text-muted-foreground">Disponível 24/7 com análise profunda de padrões e personalização extrema</p>
            </div>
            
            <div className="text-center">
              <ArrowRight className="h-12 w-12 text-kronos-gold mx-auto mb-4" />
              <h4 className="font-bold text-kronos-gold mb-2">Escalada Inteligente</h4>
              <p className="text-sm text-muted-foreground">Detecção automática de quando você precisa de intervenção humana</p>
            </div>
            
            <div className="text-center">
              <Users className="h-12 w-12 text-kronos-orange mx-auto mb-4" />
              <h4 className="font-bold text-kronos-orange mb-2">Especialistas Reais</h4>
              <p className="text-sm text-muted-foreground">Profissionais certificados assumem casos complexos com contexto completo</p>
            </div>
          </div>

          <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
            Quando a IA detecta que você precisa de atenção humana especializada, ela automatically 
            conecta você com nossos profissionais, fornecendo todo o contexto necessário para uma transição perfeita.
          </p>

          <Button 
            className="bg-gradient-button hover:shadow-glow transition-all duration-300 font-semibold px-8"
          >
            Experimentar IA Híbrida
            <MessageCircle className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}