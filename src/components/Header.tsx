import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

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
    { label: "Sobre", id: "sobre" },
    { label: "Funcionalidades", id: "funcionalidades" },
    { label: "Metodologia", id: "metodologia" },
    { label: "Especialistas", id: "especialistas" },
    { label: "Parceiros", id: "parceiros" },
    { label: "Depoimentos", id: "depoimentos" },
    { label: "Planos", id: "planos" },
    { label: "FAQ", id: "faq" },
    { label: "Contato", id: "contato" }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-primary">
          KRONOS
        </div>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center space-x-8">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-foreground hover:text-primary transition-colors duration-200"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <Button 
            onClick={() => scrollToSection('planos')}
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6"
          >
            COMECE AGORA
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-foreground"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-background border-b border-border">
          <nav className="container mx-auto px-6 py-4 space-y-4">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left text-foreground hover:text-primary transition-colors duration-200 py-2"
              >
                {item.label}
              </button>
            ))}
            <Button 
              onClick={() => scrollToSection('planos')}
              className="w-full mt-4 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
            >
              COMECE AGORA
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}