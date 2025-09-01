import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Check, Star, X, Rocket, Phone } from "lucide-react";
import { useState } from "react";

export function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(false);
  const [showWaitlist, setShowWaitlist] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("");
  const [email, setEmail] = useState("");
  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    whatsapp: ""
  });

  const handlePlanSelection = (planName: string) => {
    setSelectedPlan(planName);
    setShowWaitlist(true);
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você pode implementar a lógica para enviar os dados de contato
    console.log('Dados de contato:', contactData);
    setContactData({ name: "", email: "", whatsapp: "" });
    setShowContactForm(false);
    // Adicionar toast ou feedback de sucesso aqui
  };

  const handleWaitlistSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você pode implementar a lógica para enviar o email para a lista de espera
    console.log(`Email ${email} adicionado à lista de espera para o plano ${selectedPlan}`);
    setEmail("");
    setShowWaitlist(false);
    // Adicionar toast ou feedback de sucesso aqui
  };

  const plans = [{
    name: "Genesis",
    monthlyPrice: 97,
    annualPrice: 970,
    description: "Ideal para quem está começando sua jornada de transformação",
    features: ["Agente de IA personalizada básica", "1 sessão mensal com especialista", "Acesso à comunidade", "Relatórios de progresso", "Suporte por chat"],
    highlighted: false
  }, {
    name: "Titan",
    monthlyPrice: 197,
    annualPrice: 1970,
    description: "Nossa recomendação para transformação completa",
    features: ["Agente de IA avançada e adaptativa", "4 sessões mensais com especialista", "Plano personalizado completo", "Monitoramento 24/7", "Acesso prioritário à comunidade", "Materiais exclusivos", "Suporte prioritário"],
    highlighted: true
  }, {
    name: "Phanteon",
    monthlyPrice: 397,
    annualPrice: 3970,
    description: "Para quem busca resultados extraordinários",
    features: ["Agente de IA premium com deep learning", "Sessões ilimitadas com especialista", "Mentoria 1:1 semanal", "Plano ultra-personalizado", "Acesso VIP à comunidade", "Workshops exclusivos", "Linha direta com especialista", "Garantia de resultados"],
    highlighted: false
  }];
  return <section id="planos" className="py-20 bg-black relative">
      <div className="absolute inset-0 bg-black"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl text-white mb-6 font-bold md:text-7xl">Valores</h2>
          <p className="text-2xl font-semibold text-white">
            Escolha a jornada ideal para sua transformação
          </p>
          
          {/* Toggle Mensal/Anual */}
          <div className="flex items-center justify-center mt-8 mb-8">
            <div className="bg-card border border-border rounded-lg p-1 flex">
              <button
                onClick={() => setIsAnnual(false)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${!isAnnual ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground'}`}
              >
                Mensal
              </button>
              <button
                onClick={() => setIsAnnual(true)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-2 ${isAnnual ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground'}`}
              >
                Anual
                <span className="bg-green-500/20 text-green-400 px-2 py-1 rounded text-xs">
                  20% OFF
                </span>
              </button>
            </div>
          </div>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto relative">
          {plans.map((plan, index) => <Card key={index} className={`relative ${plan.highlighted ? 'bg-gradient-card border-primary scale-105 shadow-2xl' : 'bg-gradient-card border-border'} hover:scale-105 transition-transform duration-300`}>
              {plan.highlighted && <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                    <Star className="h-4 w-4 mr-1" />
                    RECOMENDADO
                  </div>
                </div>}
              
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl font-bold text-foreground mb-2">
                  {plan.name}
                </CardTitle>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-primary line-through opacity-50">
                    R$ {isAnnual ? plan.annualPrice.toLocaleString() : plan.monthlyPrice}
                  </span>
                  <div className="text-2xl font-bold text-green-400 mt-2">
                    GRÁTIS
                  </div>
                  <span className="text-muted-foreground text-sm">
                    primeiro mês
                  </span>
                  {isAnnual && (
                    <div className="mt-2">
                      <div className="text-xs text-muted-foreground">
                        Depois R$ {(plan.annualPrice / 12).toFixed(2).replace('.', ',')}/mês
                      </div>
                    </div>
                  )}
                </div>
                <p className="text-muted-foreground text-sm">
                  {plan.description}
                </p>
              </CardHeader>
              
              <CardContent className="pt-0">
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => <li key={featureIndex} className="flex items-center">
                      <Check className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                      <span className="text-foreground text-sm">
                        {feature}
                      </span>
                    </li>)}
                </ul>
                
                <Button 
                  onClick={() => handlePlanSelection(plan.name)}
                  className={`w-full ${plan.highlighted ? 'bg-primary hover:bg-primary/90 text-primary-foreground' : 'bg-secondary hover:bg-secondary/80 text-secondary-foreground'}`}
                >
                  Escolher Plano
                </Button>
              </CardContent>
            </Card>)}
        </div>

        {/* Texto promocional */}
        <div className="text-center mt-12">
          <div 
            onClick={() => setShowContactForm(true)}
            className="bg-purple-500/10 border-2 border-purple-500 rounded-lg p-6 max-w-2xl mx-auto cursor-pointer hover:bg-purple-500/20 transition-all duration-300 hover:scale-105 animate-pulse hover:animate-none relative overflow-hidden group"
          >
            {/* Efeito de brilho */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-300/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            
            <div className="relative z-10 flex items-center justify-center mb-3">
              <Rocket className="h-8 w-8 text-purple-300 mr-3 animate-bounce" />
              <p className="text-purple-200 font-bold text-xl uppercase">
                FAÇA SUA INSCRIÇÃO AGORA
              </p>
              <Rocket className="h-8 w-8 text-purple-300 ml-3 animate-bounce" />
            </div>
            <p className="text-purple-300 font-semibold text-lg mb-3 relative z-10">
              Primeiro mês grátis, sem condição de compra.
            </p>
            <p className="text-purple-400 font-medium text-base relative z-10">
              Receba 1 mês de mentoria para o aplicativo KRONOS, com acesso a quatro módulos exclusivos.
            </p>
          </div>
        </div>
      </div>

      {/* Modal de Lista de Espera */}
      <Dialog open={showWaitlist} onOpenChange={setShowWaitlist}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center text-2xl font-bold text-foreground">
              Lista de Espera - {selectedPlan}
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="text-center">
              <p className="text-muted-foreground mb-4">
                Seja um dos primeiros a ter acesso ao KRONOS. Deixe seu email e receba notificações exclusivas sobre o lançamento.
              </p>
            </div>
            <form onSubmit={handleWaitlistSubmit} className="space-y-4">
              <div>
                <Label htmlFor="email" className="text-foreground">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="seu@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full"
                />
              </div>
              <div className="flex gap-3">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setShowWaitlist(false)}
                  className="flex-1"
                >
                  Cancelar
                </Button>
                <Button
                  type="submit"
                  className="flex-1 bg-primary hover:bg-primary/90"
                >
                  Entrar na Lista
                </Button>
              </div>
            </form>
          </div>
        </DialogContent>
      </Dialog>

      {/* Modal de Formulário de Contato */}
      <Dialog open={showContactForm} onOpenChange={setShowContactForm}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center text-2xl font-bold text-foreground flex items-center justify-center gap-2">
              <Rocket className="h-6 w-6 text-primary" />
              Inscrição KRONOS
              <Rocket className="h-6 w-6 text-primary" />
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="text-center">
              <p className="text-muted-foreground mb-4">
                Preencha seus dados e garante seu acesso ao primeiro mês gratuito do KRONOS!
              </p>
            </div>
            <form onSubmit={handleContactSubmit} className="space-y-4">
              <div>
                <Label htmlFor="name" className="text-foreground">
                  Nome Completo
                </Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Seu nome completo"
                  value={contactData.name}
                  onChange={(e) => setContactData({...contactData, name: e.target.value})}
                  required
                  className="w-full"
                />
              </div>
              <div>
                <Label htmlFor="contact-email" className="text-foreground">
                  Email
                </Label>
                <Input
                  id="contact-email"
                  type="email"
                  placeholder="seu@email.com"
                  value={contactData.email}
                  onChange={(e) => setContactData({...contactData, email: e.target.value})}
                  required
                  className="w-full"
                />
              </div>
              <div>
                <Label htmlFor="whatsapp" className="text-foreground flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  WhatsApp
                </Label>
                <Input
                  id="whatsapp"
                  type="tel"
                  placeholder="(11) 99999-9999"
                  value={contactData.whatsapp}
                  onChange={(e) => setContactData({...contactData, whatsapp: e.target.value})}
                  required
                  className="w-full"
                />
              </div>
              <div className="flex gap-3">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setShowContactForm(false)}
                  className="flex-1"
                >
                  Cancelar
                </Button>
                <Button
                  type="submit"
                  className="flex-1 bg-primary hover:bg-primary/90 flex items-center gap-2"
                >
                  <Rocket className="h-4 w-4" />
                  Garantir Acesso
                </Button>
              </div>
            </form>
          </div>
        </DialogContent>
      </Dialog>
    </section>;
}