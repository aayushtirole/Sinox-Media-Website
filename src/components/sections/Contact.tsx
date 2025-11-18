import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 xl:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 xl:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl xl:text-5xl font-bold mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to elevate your content? Let's discuss your project and bring your vision to life.
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="p-8 xl:p-10 bg-background" style={{ borderRadius: '1.5rem' }}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-2">
                  Full Name *
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full rounded-xl"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-2">
                  Email Address *
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="w-full rounded-xl"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold mb-2">
                  Phone Number
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+1 (234) 567-890"
                  className="w-full rounded-xl"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold mb-2">
                  Message *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project..."
                  className="w-full rounded-xl min-h-32"
                />
              </div>

              <Button
                type="submit"
                className="w-full py-6 text-base font-bold rounded-xl shadow-glow hover:shadow-glow-hover transition-smooth"
                style={{ backgroundColor: '#FF2E2E' }}
              >
                Send Message
              </Button>
            </form>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="p-8 bg-background hover:shadow-float transition-smooth" style={{ borderRadius: '1.5rem' }}>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Email Us</h3>
                  <p className="text-muted-foreground mb-2">
                    Send us an email anytime
                  </p>
                  <a 
                    href="mailto:hello@sinoxmedia.com" 
                    className="text-primary font-semibold hover:underline"
                  >
                    hello@sinoxmedia.com
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-background hover:shadow-float transition-smooth" style={{ borderRadius: '1.5rem' }}>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Call Us</h3>
                  <p className="text-muted-foreground mb-2">
                    Mon-Fri from 9am to 6pm
                  </p>
                  <a 
                    href="tel:+1234567890" 
                    className="text-primary font-semibold hover:underline"
                  >
                    +1 (234) 567-890
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-background hover:shadow-float transition-smooth" style={{ borderRadius: '1.5rem' }}>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Visit Us</h3>
                  <p className="text-muted-foreground mb-2">
                    Come say hello at our studio
                  </p>
                  <p className="text-foreground font-semibold">
                    123 Creative Street<br />
                    Studio City, CA 90210
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
