import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function FeaturedTestimonial() {
  return (
    <section className="py-20 xl:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 xl:px-8">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 items-center">
          {/* Left: Video Player */}
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
          
          {/* Right: Long-Form Video Production Card */}
          <Card className="gradient-border p-10 xl:p-12 bg-background" style={{ borderRadius: '1.75rem' }}>
            <div className="space-y-6">
              {/* Heading */}
              <div>
                <h3 className="text-3xl xl:text-4xl font-bold mb-4 text-foreground">
                  Long-Form Video Production
                </h3>
                <p className="text-base xl:text-lg text-muted-foreground leading-relaxed">
                  Create compelling long-form content that captivates your audience. 
                  From documentaries to in-depth tutorials, we craft stories that resonate 
                  and drive meaningful engagement.
                </p>
              </div>
              
              {/* Bullet List */}
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span className="text-foreground">Professional scripting and storyboarding</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span className="text-foreground">High-quality cinematography and editing</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span className="text-foreground">Strategic content optimization for platforms</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span className="text-foreground">End-to-end production management</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span className="text-foreground">Dedicated creative team support</span>
                </li>
              </ul>
              
              {/* CTA Button */}
              <div className="pt-4">
                <Button 
                  className="w-full py-6 text-base font-bold rounded-xl shadow-glow hover:shadow-glow-hover transition-smooth hover:-translate-y-0.5"
                  style={{ backgroundColor: '#FF2E2E' }}
                >
                  Start Your Long-Form Project
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
