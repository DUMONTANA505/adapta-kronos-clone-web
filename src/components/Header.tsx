import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Sparkles } from "lucide-react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const menuItems = [
    { label: "Fundamentos", id: "fundamentos", color: "hover:text-kronos-purple" },
    { label: "Funcionalidades", id: "funcionalidades", color: "hover:text-kronos-blue" },
    { label: "Metodologia", id: "metodologia", color: "hover:text-kronos-cyan" },
    { label: "IA Híbrida", id: "ia-hibrida", color: "hover:text-kronos-gold" },
    { label: "Especialistas", id: "especialistas", color: "hover:text-kronos-orange" },
    { label: "Depoimentos", id: "depoimentos", color: "hover:text-foreground" }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-kronos-lighter/30">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <div className="relative">
            <Sparkles className="h-8 w-8 text-kronos-purple animate-pulse" />
          </div>
          <div className="text-2xl font-display font-bold bg-gradient-text bg-clip-text text-transparent">
            KRONOS
          </div>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center space-x-8">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`text-muted-foreground ${item.color} transition-all duration-300 font-medium`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <Button 
            onClick={() => scrollToSection('planos')}
            className="bg-gradient-button hover:shadow-glow transition-all duration-300 font-semibold px-6"
          >
            Despertar Agora
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-foreground p-2 rounded-lg hover:bg-kronos-light transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-gradient-card border-b border-kronos-lighter/30 m-4 rounded-lg">
          <nav className="container mx-auto px-6 py-4 space-y-4">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left text-muted-foreground ${item.color} transition-colors duration-200 py-2`}
              >
                {item.label}
              </button>
            ))}
            <Button 
              onClick={() => scrollToSection('planos')}
              className="w-full mt-4 bg-gradient-button hover:shadow-glow transition-all duration-300 font-semibold"
            >
              Despertar Agora
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}