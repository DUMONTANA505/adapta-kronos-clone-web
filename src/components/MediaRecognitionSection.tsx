export function MediaRecognitionSection() {
  const mediaOutlets = ["Forbes", "Harvard Business Review", "TechCrunch", "Fast Company", "Wired", "MIT Technology Review", "Inc. Magazine", "Bloomberg", "Forbes", "Vogue"];

  // Duplicar outlets para movimento infinito
  const duplicatedOutlets = [...mediaOutlets, ...mediaOutlets];
  return <section id="media-recognition" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            Reconhecimento da Mídia
          </h2>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Infinite Carousel */}
          <div className="overflow-hidden">
            <div className="flex animate-scroll-infinite">
              {duplicatedOutlets.map((outlet, index) => <div key={index} className="flex-shrink-0 mx-8 bg-gradient-card px-8 py-4 rounded-lg whitespace-nowrap">
                  <div className="text-foreground font-semibold text-lg px-0">
                    {outlet}
                  </div>
                </div>)}
            </div>
          </div>
        </div>
      </div>
    </section>;
}