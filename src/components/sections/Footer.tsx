import { Instagram, Twitter, Linkedin, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";
import PolicyModal from "@/components/ui/PolicyModal";
import { privacyPolicyContent, termsOfServiceContent, cookiePolicyContent } from "@/data/policyContent";

type PolicyType = "privacy" | "terms" | "cookies" | null;

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [openPolicy, setOpenPolicy] = useState<PolicyType>(null);

  const getPolicyContent = () => {
    switch (openPolicy) {
      case "privacy":
        return { title: "Privacy Policy", content: privacyPolicyContent };
      case "terms":
        return { title: "Terms of Service", content: termsOfServiceContent };
      case "cookies":
        return { title: "Cookie Policy", content: cookiePolicyContent };
      default:
        return { title: "", content: null };
    }
  };

  const { title, content } = getPolicyContent();

  return (
    <>
      <footer className="bg-foreground text-background py-16">
        <div className="container mx-auto px-4 xl:px-8">
          <div className="grid grid-cols-1 xl:grid-cols-4 gap-12 mb-12">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold gradient-text">Sinox Media</h3>
              <p className="opacity-80 leading-relaxed">
                Premium content production for brands and ventures. 
                Strategy, storytelling, and high-quality content.
              </p>
              <div className="flex gap-4">
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-background/10 hover:bg-primary flex items-center justify-center transition-smooth"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-background/10 hover:bg-primary flex items-center justify-center transition-smooth"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-background/10 hover:bg-primary flex items-center justify-center transition-smooth"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-background/10 hover:bg-primary flex items-center justify-center transition-smooth"
                  aria-label="YouTube"
                >
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-4">Services</h4>
              <ul className="space-y-2 opacity-80">
                <li><a href="#" className="hover:text-primary transition-smooth">Content Creation</a></li>
                <li><a href="#" className="hover:text-primary transition-smooth">Video Production</a></li>
                <li><a href="#" className="hover:text-primary transition-smooth">Brand Strategy</a></li>
                <li><a href="#" className="hover:text-primary transition-smooth">Social Media</a></li>
                <li><a href="#" className="hover:text-primary transition-smooth">Post Production</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-4">Company</h4>
              <ul className="space-y-2 opacity-80">
                <li><a href="#" className="hover:text-primary transition-smooth">About Us</a></li>
                <li><a href="#" className="hover:text-primary transition-smooth">Our Team</a></li>
                <li><a href="#" className="hover:text-primary transition-smooth">Careers</a></li>
                <li><a href="#" className="hover:text-primary transition-smooth">Portfolio</a></li>
                <li><a href="#" className="hover:text-primary transition-smooth">Blog</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-4">Contact</h4>
              <ul className="space-y-3 opacity-80">
                <li className="flex items-start gap-3">
                  <Mail className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <a href="mailto:hello@sinoxmedia.com" className="hover:text-primary transition-smooth">
                    hello@sinoxmedia.com
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <a href="tel:+1234567890" className="hover:text-primary transition-smooth">
                    +1 (234) 567-890
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <a 
                    href="https://www.google.com/maps/search/?api=1&query=123+Creative+Street+Studio+City+CA+90210" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-smooth"
                  >
                    123 Creative Street, Studio City, CA 90210
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-background/20">
            <div className="flex flex-col xl:flex-row justify-between items-center gap-4">
              <p className="opacity-80 text-sm">
                {currentYear} Sinox Media
              </p>
              <div className="flex gap-6 text-sm opacity-80">
                <button 
                  onClick={() => setOpenPolicy("privacy")}
                  className="hover:text-primary transition-smooth cursor-pointer"
                >
                  Privacy Policy
                </button>
                <button 
                  onClick={() => setOpenPolicy("terms")}
                  className="hover:text-primary transition-smooth cursor-pointer"
                >
                  Terms of Service
                </button>
                <button 
                  onClick={() => setOpenPolicy("cookies")}
                  className="hover:text-primary transition-smooth cursor-pointer"
                >
                  Cookie Policy
                </button>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-sm opacity-80">All systems operational</span>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <PolicyModal
        isOpen={openPolicy !== null}
        onClose={() => setOpenPolicy(null)}
        title={title}
        content={content}
      />
    </>
  );
}
