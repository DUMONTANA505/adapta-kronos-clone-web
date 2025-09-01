export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-kronos-darker py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Links */}
          <div className="flex flex-wrap items-center gap-6 mb-6 md:mb-0">
            <a 
              href="#" 
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              Termos de Uso
            </a>
            <a 
              href="#" 
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              Política de Privacidade
            </a>
            <a 
              href="#contato" 
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              Contato
            </a>
          </div>

          {/* KRONOS 2025 */}
          <div className="text-muted-foreground text-sm font-semibold">
            KRONOS 2025
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            Transformando vidas através da tecnologia e conhecimento especializado
          </p>
        </div>
      </div>
    </footer>
  );
}