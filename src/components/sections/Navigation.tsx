import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const menuItems = [
  { label: "Home", href: "#home" },
  { label: "Process", href: "#process" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Pricing", href: "#pricing" },
  { label: "About", href: "#about" }
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "pt-3" : "pt-6"
      }`}
    >
      <div className="container mx-auto px-4 xl:px-8">
        <div
          className={`bg-background rounded-[16px] transition-all duration-300 ${
            isScrolled
              ? "py-4 px-6 xl:px-8"
              : "py-6 px-7 xl:px-9"
          }`}
          style={{
            boxShadow: "0 8px 24px rgba(0, 0, 0, 0.08)"
          }}
        >
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#home" className="flex items-center gap-3 group">
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center transition-smooth group-hover:scale-105"
                style={{ backgroundColor: "#FF2E2E" }}
              >
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <span className="font-bold text-xl hidden xl:block">Sinox Media</span>
            </a>

            {/* Desktop Menu */}
            <div className="hidden xl:flex items-center gap-8">
              {menuItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="relative text-[16px] font-medium text-foreground hover:text-primary transition-smooth group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </div>

            {/* Desktop CTAs */}
            <div className="hidden xl:flex items-center gap-3">
              <Button
                variant="outline"
                className="px-6 py-2 rounded-full border-2 border-foreground bg-background text-foreground hover:bg-secondary transition-smooth hover:shadow-float hover:-translate-y-0.5"
              >
                Audit Your Page
              </Button>
              <Button
                className="px-6 py-2 rounded-full shadow-glow transition-smooth hover:shadow-glow-hover hover:-translate-y-0.5"
                style={{ backgroundColor: "#FF2E2E" }}
              >
                Contact Us
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="xl:hidden p-2 hover:bg-secondary rounded-lg transition-smooth"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="xl:hidden mt-6 pt-6 border-t border-border space-y-4 animate-fade-in">
              {menuItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-[16px] font-medium text-foreground hover:text-primary transition-smooth py-2"
                >
                  {item.label}
                </a>
              ))}
              <div className="flex flex-col gap-3 pt-4">
                <Button
                  variant="outline"
                  className="w-full px-6 py-3 rounded-full border-2 border-foreground bg-background text-foreground hover:bg-secondary transition-smooth"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Audit Your Page
                </Button>
                <Button
                  className="w-full px-6 py-3 rounded-full shadow-glow transition-smooth"
                  style={{ backgroundColor: "#FF2E2E" }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact Us
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
