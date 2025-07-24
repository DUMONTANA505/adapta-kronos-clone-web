export function PartnersSection() {
  const stakeholders = ["Tally Health", "Superpower", "Equinox", "Early Medical", "Lanserhof Tegernsee", "Oura Ring", "WHOOP", "DNAfit", "Equinox", "The Well"];

  // Duplicar stakeholders para movimento infinito
  const duplicatedStakeholders = [...stakeholders, ...stakeholders];
  return <section id="stakeholders" className="bg-gradient-section py-0">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Stakeholders
          </h2>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Infinite Carousel */}
          <div className="overflow-hidden">
            <div className="flex animate-scroll-infinite">
              {duplicatedStakeholders.map((stakeholder, index) => <div key={index} className="flex-shrink-0 mx-8 bg-gradient-card px-8 py-4 whitespace-nowrap bg-slate-950 rounded-full">
                  <div className="text-foreground font-semibold text-lg px-0">
                    {stakeholder}
                  </div>
                </div>)}
            </div>
          </div>
        </div>
      </div>
    </section>;
}