export function ModulesSection() {
  const modules = [
    {
      number: "1",
      name: "KRONOS",
      title: "Gestão do Tempo"
    },
    {
      number: "2", 
      name: "KAIROS",
      title: "Momento Oportuno"
    },
    {
      number: "3",
      name: "ATMOS", 
      title: "Respiração e Energia"
    },
    {
      number: "4",
      name: "CORPUS",
      title: "Corpo e Movimento"
    },
    {
      number: "5",
      name: "SOFRHEN",
      title: "Autocontrole Mental"
    },
    {
      number: "6",
      name: "SOPHIA",
      title: "Sabedoria e Conhecimento"
    }
  ];

  return (
    <section id="modulos" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Os 6 Módulos da Jornada
          </h2>
          <p className="text-xl text-muted-foreground">
            Uma transformação completa em etapas estruturadas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {modules.map((module, index) => (
            <div 
              key={index}
              className="bg-gradient-card p-8 rounded-xl text-center hover:scale-105 transition-transform duration-300 border border-border"
            >
              <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-primary-foreground">
                  {module.number}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">
                {module.name}
              </h3>
              <p className="text-muted-foreground">
                {module.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}