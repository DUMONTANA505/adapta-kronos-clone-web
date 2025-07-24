import { 
  UserCheck, 
  BarChart3, 
  MessageCircle, 
  CheckSquare, 
  Users, 
  FileText, 
  TrendingUp, 
  Library, 
  Target, 
  UserX, 
  Watch, 
  Radio 
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function FuncionalidadesSection() {
  const funcionalidades = [
    {
      id: "onboarding",
      icon: UserCheck,
      title: "Diagnóstico & Onboarding",
      subtitle: "Seu ponto de partida personalizado",
      description: "Questionários imersivos como o Diagnóstico KRONOS e 360 Funcional criam seu perfil inicial altamente personalizado.",
      features: ["Diagnóstico KRONOS completo", "Análise 360 funcional", "Perfil de potência inicial", "Zona de prontidão"],
      color: "kronos-purple",
      category: "essencial"
    },
    {
      id: "profile",
      icon: BarChart3,
      title: "KronosProfile Dashboard",
      subtitle: "Visualização do seu potencial",
      description: "Dashboard interativo que exibe seu estado atual nos três pilares: Mente, Corpo e Espírito/Vontade.",
      features: ["Dashboard visual dinâmico", "Três pilares fundamentais", "Pontuação em tempo real", "Plano estratégico"],
      color: "kronos-blue",
      category: "essencial"
    },
    {
      id: "ia-chat",
      icon: MessageCircle,
      title: "IA Híbrida KRONOS 2.0",
      subtitle: "Seu mentor pessoal 24/7",
      description: "Agente de IA que utiliza seu histórico completo e painel de especialistas internos para orientação empática.",
      features: ["Chat inteligente 24/7", "Histórico completo", "Especialistas internos", "Orientação contextualizada"],
      color: "kronos-cyan",
      category: "essencial"
    },
    {
      id: "tasks",
      icon: CheckSquare,
      title: "Gestão de Tarefas Inteligente",
      subtitle: "Produtividade alinhada ao propósito",
      description: "Sistema integrado onde tarefas são personalizadas pela IA ou especialistas, sempre alinhadas ao seu plano.",
      features: ["Tarefas personalizadas", "Recomendações IA", "Alinhamento estratégico", "Sistema produtividade"],
      color: "kronos-gold",
      category: "produtividade"
    },
    {
      id: "community",
      icon: Users,
      title: "Comunidade Colaborativa",
      subtitle: "Jornada coletiva de transformação",
      description: "Espaço social seguro para criar posts, interagir com membros e oferecer suporte mútuo na jornada.",
      features: ["Rede social integrada", "Posts diversos", "Suporte mútuo", "Combate ao isolamento"],
      color: "kronos-orange",
      category: "social"
    },
    {
      id: "reports",
      icon: FileText,
      title: "Relatórios de Progresso",
      subtitle: "Consolidação do aprendizado",
      description: "Relatórios periódicos em PDF com análise detalhada, gráficos visuais e insights da IA.",
      features: ["Relatórios em PDF", "Análise detalhada", "Gráficos visuais", "Insights IA"],
      color: "kronos-purple",
      category: "analytics"
    },
    {
      id: "charts",
      icon: TrendingUp,
      title: "Dashboard de Evolução",
      subtitle: "Visualize sua transformação",
      description: "Interface gráfica com Radar comparativo, Linha do Tempo e análises comportamentais visuais.",
      features: ["Gráfico de radar", "Linha do tempo", "Comparativo evolução", "Análises visuais"],
      color: "kronos-blue",
      category: "analytics"
    },
    {
      id: "library",
      icon: Library,
      title: "Biblioteca Multimídia",
      subtitle: "Conhecimento curado exclusivo",
      description: "Centro de conteúdos (vídeos, áudios, textos, PDFs) recomendados progressivamente conforme seu avanço.",
      features: ["Conteúdo multimídia", "Curadoria exclusiva", "Liberação progressiva", "Recomendações IA"],
      color: "kronos-cyan",
      category: "conteudo"
    },
    {
      id: "goals",
      icon: Target,
      title: "Metas Personalizadas",
      subtitle: "Planejamento de médio/longo prazo",
      description: "Definição de metas maiores com quebra em tarefas semanais, notificações e ajustes automáticos.",
      features: ["Metas de longo prazo", "Quebra em tarefas", "Notificações inteligentes", "Ajustes automáticos"],
      color: "kronos-gold",
      category: "produtividade"
    },
    {
      id: "handoff",
      icon: UserX,
      title: "Escalada para Especialistas",
      subtitle: "Modelo híbrido inteligente",
      description: "IA identifica quando é necessária intervenção humana e aciona especialistas com resumo completo.",
      features: ["Detecção automática", "Escalada inteligente", "Resumo do caso", "Transição suave"],
      color: "kronos-orange",
      category: "essencial"
    },
    {
      id: "wearables",
      icon: Watch,
      title: "Integração Wearables",
      subtitle: "Dados objetivos de saúde",
      description: "Conexão com dispositivos vestíveis para coletar dados de sono, frequência cardíaca e atividade física.",
      features: ["Smartwatches", "Anéis inteligentes", "Dados de saúde", "Insights precisos"],
      color: "kronos-purple",
      category: "futuro"
    },
    {
      id: "radio",
      icon: Radio,
      title: "Rádio KRONOS",
      subtitle: "Estados mentais otimizados",
      description: "Canal de áudio contínuo com trilhas, sons binaurais e meditações para induzir estados específicos.",
      features: ["Trilhas exclusivas", "Sons binaurais", "Meditações guiadas", "Estados mentais"],
      color: "kronos-blue",
      category: "conteudo"
    }
  ];

  const categories = [
    { id: "essencial", label: "Essenciais", color: "kronos-purple" },
    { id: "produtividade", label: "Produtividade", color: "kronos-blue" },
    { id: "analytics", label: "Analytics", color: "kronos-cyan" },
    { id: "social", label: "Social", color: "kronos-gold" },
    { id: "conteudo", label: "Conteúdo", color: "kronos-orange" },
    { id: "futuro", label: "Futuro", color: "kronos-purple" }
  ];

  return (
    <section id="funcionalidades" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-card px-6 py-3 rounded-full mb-6">
            <MessageCircle className="h-5 w-5 text-kronos-blue mr-2" />
            <span className="text-kronos-blue font-semibold">KRONOS 1.0</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
            <span className="bg-gradient-text bg-clip-text text-transparent">12 Funcionalidades</span>
            <br />Principais do App
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Uma plataforma completa que combina tecnologia avançada, inteligência artificial híbrida 
            e acompanhamento humano especializado para sua transformação integral.
          </p>
        </div>

        {/* Tabs by Category */}
        <Tabs defaultValue="essencial" className="max-w-7xl mx-auto">
          <TabsList className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 h-auto p-1 bg-gradient-card">
            {categories.map((category) => (
              <TabsTrigger 
                key={category.id} 
                value={category.id}
                className={`text-sm font-medium text-${category.color} data-[state=active]:bg-${category.color}/20 data-[state=active]:text-${category.color}`}
              >
                {category.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {funcionalidades
                  .filter(func => func.category === category.id)
                  .map((func) => (
                    <div 
                      key={func.id}
                      className={`bg-gradient-card p-6 rounded-2xl border border-${func.color}/20 hover:border-${func.color}/40 transition-all duration-300 group hover:shadow-elegant hover:scale-105`}
                    >
                      {/* Icon & Title */}
                      <div className="flex items-start space-x-4 mb-4">
                        <div className={`p-3 bg-${func.color}/10 rounded-xl`}>
                          <func.icon className={`h-6 w-6 text-${func.color}`} />
                        </div>
                        <div className="flex-1">
                          <h3 className={`text-lg font-bold text-${func.color} mb-1`}>
                            {func.title}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {func.subtitle}
                          </p>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-foreground/90 text-sm leading-relaxed mb-4">
                        {func.description}
                      </p>

                      {/* Features */}
                      <div className="space-y-2">
                        {func.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center text-xs">
                            <div className={`w-1.5 h-1.5 bg-${func.color} rounded-full mr-2`} />
                            <span className="text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>

                      {/* Category Badge */}
                      <div className="mt-4 pt-4 border-t border-white/10">
                        <div className={`inline-flex px-3 py-1 bg-${func.color}/10 text-${func.color} text-xs font-medium rounded-full`}>
                          {categories.find(c => c.id === func.category)?.label}
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Summary Stats */}
        <div className="mt-16 bg-gradient-card p-8 rounded-2xl text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "12", label: "Funcionalidades Integradas", color: "text-kronos-purple" },
              { number: "24/7", label: "IA Híbrida Disponível", color: "text-kronos-blue" },
              { number: "360°", label: "Visão Completa do Progresso", color: "text-kronos-cyan" },
              { number: "∞", label: "Possibilidades de Crescimento", color: "text-kronos-gold" }
            ].map((stat, index) => (
              <div key={index}>
                <div className={`text-3xl font-display font-bold ${stat.color} mb-2`}>
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
    </section>
  );
}