import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Shield } from "lucide-react";
export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log("Newsletter signup:", email);
    setEmail("");
  };
  return <section id="contato" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Receba conteúdos exclusivos do KRONOS
          </h2>
          <p className="text-xl text-muted-foreground mb-12">Inscreva-se e desbloqueie novos insights sobre medicina de estilo de vida e performance pessoal</p>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-8">
            <div className="flex gap-4">
              <Input type="email" placeholder="Seu melhor e-mail" value={email} onChange={e => setEmail(e.target.value)} className="flex-1 bg-background border-border text-foreground placeholder:text-muted-foreground" required />
              <Button type="submit" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8">
                Cadastrar
              </Button>
            </div>
          </form>

          <div className="flex items-center justify-center text-muted-foreground text-sm">
            <Shield className="h-4 w-4 mr-2" />
            Seu e-mail está seguro conosco. Não enviamos spam.
          </div>
        </div>
      </div>
    </section>;
}