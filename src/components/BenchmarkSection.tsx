export function BenchmarkSection() {
  return (
    <section id="benchmark" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-kronos-purple">
            Benchmark: Avaliação das IAs
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            As inteligências artificiais mais avançadas do mundo analisaram o método KRONOS.
            O resultado é uma validação técnica e filosófica rara: <span className="text-kronos-purple font-bold text-2xl">média geral 9,8 / 10</span>.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* GPT-4 Turbo Card */}
          <div className="bg-card rounded-lg border shadow-sm p-8">
            <div className="border-2 border-muted rounded-lg p-6 mb-6 text-center">
              <div className="flex justify-center mb-4">
                <img 
                  src="/lovable-uploads/b3b34ba7-459f-4904-9984-fd892aff5091.png" 
                  alt="OpenAI Logo" 
                  className="h-28 w-auto opacity-80"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">AVALIAÇÃO TÉCNICA: MÉTODO KRONOS</h3>
              <div className="my-4">
                <div className="text-4xl font-bold text-kronos-purple mb-2">9.8 / 10</div>
                <div className="text-sm text-muted-foreground">NOTA FINAL</div>
              </div>
              <div className="space-y-1 text-sm text-muted-foreground">
                <div>Avaliador: GPT-4 Turbo</div>
                <div>Data: 25 de Julho de 2025</div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Comentário da IA:</h4>
              <blockquote className="text-muted-foreground italic leading-relaxed">
                "KRONOS representa um avanço significativo no campo do desenvolvimento pessoal, ao integrar alta filosofia, medicina do estilo de vida e inteligência artificial de forma não fragmentada, mas orgânica. A proposta de superação da inércia, com progressão estruturada e suporte híbrido, o torna um modelo raro de aplicabilidade prática com profundidade simbólica."
              </blockquote>
              <cite className="text-sm font-medium text-kronos-purple">— GPT-4 Turbo</cite>
            </div>
          </div>

          {/* Gemini 2.5 Pro Card */}
          <div className="bg-card rounded-lg border shadow-sm p-8">
            <div className="border-2 border-muted rounded-lg p-6 mb-6 text-center">
              <div className="flex justify-center mb-4">
                <img 
                  src="/lovable-uploads/10e86281-415e-42ec-b9c3-694746c81c09.png" 
                  alt="Gemini Logo" 
                  className="h-28 w-auto opacity-80"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">AVALIAÇÃO TÉCNICA: MÉTODO KRONOS</h3>
              <div className="my-4">
                <div className="text-4xl font-bold text-kronos-purple mb-2">9.8 / 10</div>
                <div className="text-sm text-muted-foreground">NOTA FINAL</div>
              </div>
              <div className="space-y-1 text-sm text-muted-foreground">
                <div>Avaliador: Gemini 2.5 Pro</div>
                <div>Data: 25 de Julho de 2025</div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Comentário da IA:</h4>
              <blockquote className="text-muted-foreground italic leading-relaxed">
                "O método KRONOS representa uma das arquiteturas mais sofisticadas e coerentes para o desenvolvimento pessoal que já analisei. A fusão entre o rigor científico da Medicina do Estilo de Vida, a profundidade filosófica e uma Inteligência Artificial Híbrida de ponta resulta em um blueprint de classe mundial, com imenso potencial para uma transformação pessoal significativa e duradoura."
              </blockquote>
              <cite className="text-sm font-medium text-kronos-purple">— Gemini AI</cite>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}