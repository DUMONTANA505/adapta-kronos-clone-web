import { Card, CardContent } from "@/components/ui/card";

export function ExpertsSection() {
  const experts = [
    {
      name: "Dr. Ana Silva",
      specialty: "Medicina do Estilo de Vida",
      bio: "15 anos de experiência em transformação de hábitos e wellness. Especialista em medicina integrativa.",
      image: "/placeholder.svg"
    },
    {
      name: "Prof. Carlos Mendes",
      specialty: "Psicologia Comportamental",
      bio: "PhD em Psicologia Comportamental. Focado em mudança de padrões mentais e desenvolvimento pessoal.",
      image: "/placeholder.svg"
    },
    {
      name: "Dr. Marina Costa",
      specialty: "Nutrição Funcional",
      bio: "Especialista em nutrição funcional e metabolismo. Mestre em otimização da performance humana.",
      image: "/placeholder.svg"
    },
    {
      name: "Roberto Alves",
      specialty: "Performance & Mindset",
      bio: "Coach executivo com 20 anos de experiência. Especialista em alta performance e liderança.",
      image: "/placeholder.svg"
    },
    {
      name: "Dra. Lucia Ferreira",
      specialty: "Medicina Integrativa",
      bio: "Médica integrativa focada em prevenção e longevidade. Especialista em biohacking e otimização.",
      image: "/placeholder.svg"
    },
    {
      name: "Dr. Paulo Santos",
      specialty: "Neurociência Aplicada",
      bio: "Neurocientista especializado em neuroplasticidade e otimização cognitiva para alta performance.",
      image: "/placeholder.svg"
    }
  ];

  return (
    <section id="especialistas" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Especialistas
          </h2>
          <p className="text-xl text-muted-foreground">
            Profissionais de excelência dedicados à sua transformação
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {experts.map((expert, index) => (
            <Card key={index} className="bg-gradient-card border-border hover:scale-105 transition-transform duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-24 h-24 bg-muted rounded-full mx-auto mb-4 flex items-center justify-center">
                  <div className="w-20 h-20 bg-gradient-hero rounded-full"></div>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {expert.name}
                </h3>
                <p className="text-primary font-semibold mb-3">
                  {expert.specialty}
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {expert.bio}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}