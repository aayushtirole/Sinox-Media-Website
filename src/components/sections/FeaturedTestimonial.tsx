import { Card } from "@/components/ui/card";
import { Users, TrendingUp, Heart } from "lucide-react";

export default function FeaturedTestimonial() {
  return (
    <section className="py-20 xl:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 xl:px-8">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-video rounded-[1.75rem] overflow-hidden shadow-float">
            <img 
              src="https://miaoda-site-img.s3cdn.medo.dev/images/59a88efd-b9dd-45d2-9af9-2c5dae8a5382.jpg"
              alt="Client Testimonial"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/20">
              <div className="w-20 h-20 rounded-full bg-primary/90 backdrop-blur-sm flex items-center justify-center cursor-pointer hover:scale-110 transition-smooth shadow-glow">
                <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-white border-b-8 border-b-transparent ml-1" />
              </div>
            </div>
          </div>
          
          <Card className="gradient-border p-8 xl:p-12 bg-foreground text-background" style={{ borderRadius: '1.75rem' }}>
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl xl:text-4xl font-bold mb-4">
                  "Sinox Media transformed our brand presence"
                </h3>
                <p className="text-lg opacity-80">
                  Working with Sinox Media has been a game-changer for our content strategy. 
                  Their attention to detail and creative vision exceeded all expectations.
                </p>
              </div>
              
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-2xl font-bold">500K+</div>
                  <div className="text-sm opacity-70">Followers</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <TrendingUp className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-2xl font-bold">250%</div>
                  <div className="text-sm opacity-70">Growth</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <Heart className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-2xl font-bold">15M+</div>
                  <div className="text-sm opacity-70">Engagement</div>
                </div>
              </div>
              
              <div className="pt-4 border-t border-background/20">
                <p className="font-semibold text-lg">Sarah Johnson</p>
                <p className="opacity-70">CEO, TechVentures Inc.</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
