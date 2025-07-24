import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
export function FAQSection() {
  const faqs = [{
    question: "Como funciona a IA personalizada do KRONOS?",
    answer: "Nossa IA utiliza algoritmos avançados de machine learning para analisar seus padrões comportamentais, progressos e objetivos. Ela se adapta continuamente às suas necessidades, fornecendo orientações personalizadas e ajustando estratégias baseadas em seus resultados reais."
  }, {
    question: "Qual a diferença entre os planos?",
    answer: "O plano Iniciante oferece recursos básicos para começar sua transformação. O Completo inclui IA avançada e mais sessões com especialistas. O Transformador oferece acesso premium com mentoria ilimitada e garantia de resultados. Cada plano é projetado para diferentes níveis de comprometimento."
  }, {
    question: "Como são as sessões com especialistas?",
    answer: "As sessões são realizadas online ou presencialmente (quando disponível) com profissionais certificados em suas áreas. Cada sessão é personalizada baseada em seu perfil e objetivos, incluindo avaliações, orientações práticas e acompanhamento de progresso."
  }, {
    question: "Posso cancelar minha assinatura a qualquer momento?",
    answer: "Sim, você pode cancelar sua assinatura a qualquer momento sem taxas de cancelamento. Continuará tendo acesso aos recursos até o final do período pago. Recomendamos pelo menos 3 meses para ver resultados significativos."
  }, {
    question: "O KRONOS oferece garantia de resultados?",
    answer: "O plano Transformador inclui nossa garantia de resultados. Se você seguir o programa conforme orientado por 90 dias e não ver melhorias mensuráveis, oferecemos reembolso completo. Nossa metodologia cientificamente comprovada tem alta taxa de sucesso."
  }, {
    question: "Como a privacidade dos meus dados é protegida?",
    answer: "Seguimos rigorosos protocolos de segurança e privacidade. Todos os dados são criptografados e armazenados em servidores seguros. Nunca compartilhamos informações pessoais com terceiros. Você tem controle total sobre seus dados e pode removê-los a qualquer momento."
  }, {
    question: "Preciso de equipamentos especiais para usar o KRONOS?",
    answer: "Não. O KRONOS funciona através de aplicativo mobile e plataforma web, acessível de qualquer dispositivo. Alguns recursos opcionais podem se beneficiar de wearables (smartwatch, fitness tracker), mas não são obrigatórios."
  }];
  return <section id="faq" className="bg-background py-[80px]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Perguntas Frequentes
          </h2>
          <p className="text-xl text-muted-foreground">
            Tire suas dúvidas sobre o KRONOS
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => <AccordionItem key={index} value={`item-${index}`} className="bg-gradient-card rounded-lg px-6 border-border">
                <AccordionTrigger className="text-left text-foreground hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>)}
          </Accordion>
        </div>
      </div>
    </section>;
}