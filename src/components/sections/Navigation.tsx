import { useState } from "react";

const menuItems = [
  { label: "Home", href: "#home" },
  { label: "Process", href: "#process" },
  { label: "Portfolio", href: "#shortform" },
  { label: "Pricing", href: "#pricing" },
  { label: "About", href: "#about" }
];

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="sinox-nav">
      <div className="nav-inner">
        {/* Logo */}
        <a href="#home" className="logo-square hover-scale">
          SM
        </a>

        {/* Desktop Menu */}
        <ul className="nav-center">
          {menuItems.map((item, index) => (
            <li key={index}>
              <a href={item.href} className="underline-slide">{item.label}</a>
            </li>
          ))}
        </ul>

        {/* Desktop CTAs */}
        <div className="nav-right">
          <button 
            className="btn-primary ripple"
            onClick={() => {
              const contactSection = document.getElementById('contact');
              contactSection?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Contact Us
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="nav-hamburger"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="mobile-menu-dropdown">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="mobile-ctas">
              <button 
                className="btn-primary" 
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  const contactSection = document.getElementById('contact');
                  contactSection?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Contact Us
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
