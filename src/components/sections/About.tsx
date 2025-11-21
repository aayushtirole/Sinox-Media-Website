import { Card } from "@/components/ui/card";
import LiquidBlobReveal from "@/components/ui/LiquidBlobReveal";

export default function About() {
  const stats = [
    { value: "10,000+", label: "Community Members" },
    { value: "50+", label: "Cohort Graduates" },
    { value: "4,000+", label: "Videos Produced" },
    { value: "98%", label: "Client Satisfaction" }
  ];

  return (
    <section className="py-20 xl:py-32 bg-background">
      <div className="container mx-auto px-4 xl:px-8">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl xl:text-5xl font-bold mb-6">
                The Journey Behind <br />
                <span className="gradient-text">Sinox Media</span>
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Founded with a vision to revolutionize content creation, Sinox Media has grown 
                  from a small studio to a leading content production powerhouse.
                </p>
                <p>
                  Our team of creative professionals brings together decades of experience in 
                  storytelling, cinematography, and digital marketing to deliver content that 
                  doesn't just look good—it performs.
                </p>
                <p>
                  We believe in the power of authentic storytelling and strategic content creation 
                  to transform brands and connect with audiences on a deeper level.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="text-center p-6 rounded-[1.5rem] bg-secondary/50"
                >
                  <div className="text-3xl xl:text-4xl font-bold gradient-text mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <Card 
            className="gradient-border overflow-hidden"
            style={{ borderRadius: '1.75rem' }}
          >
            <LiquidBlobReveal
              imageUrl="https://miaoda-conversation-file.s3cdn.medo.dev/user-7nfgxgyfjw1s/conv-7nfh0jg65o8w/20251122/file-7ptbt51duwao.png"
              alt="The Journey Behind Sinox Media - Modern office workspace"
              className="aspect-[4/5]"
              blobSize={250}
              blurAmount={45}
              wobbleSpeed={0.8}
              inertia={0.12}
              hoverThreshold={100}
              imageStyle={{ objectFit: 'cover' }}
            />
          </Card>
        </div>
      </div>
    </section>
  );
}
