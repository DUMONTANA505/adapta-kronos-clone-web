export function PartnersSection() {
  const partners = [
    "TechCorp", "HealthFirst", "WellnessHub", "MindTech", "LifeStyle Pro", 
    "Innovation Labs", "Future Health", "Smart Living", "Biohack Inc", "Optimal Performance"
  ];

  const mediaLogos = [
    "Forbes", "Harvard Business Review", "TechCrunch", "Fast Company", 
    "Wired", "MIT Technology Review", "Inc. Magazine", "Bloomberg"
  ];

  return (
    <section id="parceiros" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Quem confia e reconhece
          </h2>
          <p className="text-xl text-muted-foreground">
            Parceiros e mídia internacional que validam nossa excelência
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Partners Section */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center text-foreground mb-8">
              Nossos Parceiros
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
              {partners.map((partner, index) => (
                <div 
                  key={index}
                  className="bg-gradient-card p-6 rounded-lg text-center hover:scale-105 transition-transform duration-300"
                >
                  <div className="text-foreground font-bold text-lg">
                    {partner}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Media Section */}
          <div>
            <h3 className="text-2xl font-bold text-center text-foreground mb-8">
              Reconhecimento da Mídia
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
              {mediaLogos.map((media, index) => (
                <div 
                  key={index}
                  className="bg-gradient-card p-6 rounded-lg text-center hover:scale-105 transition-transform duration-300"
                >
                  <div className="text-foreground font-bold">
                    {media}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}