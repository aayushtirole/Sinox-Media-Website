import { Card } from "@/components/ui/card";
import { Instagram } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Michael Chen",
    role: "Founder, FitLife",
    content: "Sinox Media helped us scale our content from 10K to 500K followers in just 6 months. Their strategic approach and creative execution are unmatched.",
    instagram: "@fitlife"
  },
  {
    id: 2,
    name: "Emma Rodriguez",
    role: "CMO, StyleHub",
    content: "The quality of work and attention to detail is exceptional. Every video feels premium and perfectly aligned with our brand identity.",
    instagram: "@stylehub"
  },
  {
    id: 3,
    name: "David Park",
    role: "CEO, TechFlow",
    content: "Working with Sinox Media has been transformative. They don't just create content, they create experiences that resonate with our audience.",
    instagram: "@techflow"
  },
  {
    id: 4,
    name: "Sophie Anderson",
    role: "Director, GreenEarth",
    content: "Fast turnaround, incredible quality, and always exceeding expectations. Sinox Media is our go-to partner for all content needs.",
    instagram: "@greenearth"
  },
  {
    id: 5,
    name: "James Wilson",
    role: "Founder, FoodieBox",
    content: "The ROI we've seen from our content campaigns has been phenomenal. Sinox Media truly understands what drives engagement.",
    instagram: "@foodiebox"
  },
  {
    id: 6,
    name: "Lisa Thompson",
    role: "Marketing Lead, BeautyPro",
    content: "Professional, creative, and always on time. The team at Sinox Media makes the entire process seamless and enjoyable.",
    instagram: "@beautypro"
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 xl:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 xl:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl xl:text-5xl font-bold mb-4">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Real results from real partnerships
          </p>
        </div>
        
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <Card 
              key={testimonial.id}
              className="p-8 hover:shadow-float transition-smooth"
              style={{ 
                borderRadius: '1.5rem',
                background: 'linear-gradient(135deg, hsl(0 0% 100%), hsl(0 0% 98%))'
              }}
            >
              <div className="space-y-4">
                <p className="text-lg leading-relaxed">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center justify-between pt-4 border-t">
                  <div>
                    <p className="font-bold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                  <Instagram className="w-6 h-6 text-primary" />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
