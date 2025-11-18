import { Card } from "@/components/ui/card";

export default function SocialProof() {
  return (
    <section className="py-20 xl:py-32 bg-background">
      <div className="container mx-auto px-4 xl:px-8">
        <Card 
          className="gradient-border p-12 xl:p-16"
          style={{ borderRadius: '1.75rem' }}
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl xl:text-5xl font-bold mb-4">
              Trusted by <span className="gradient-text">Industry Leaders</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              See what makes us different
            </p>
          </div>
          
          <div className="grid grid-cols-2 xl:grid-cols-4 gap-8">
            <div className="relative aspect-square rounded-[1.5rem] overflow-hidden shadow-soft">
              <img 
                src="https://miaoda-site-img.s3cdn.medo.dev/images/ce4420c7-1b93-4afe-b644-d4ad847d699d.jpg"
                alt="Team collaboration"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative aspect-square rounded-[1.5rem] overflow-hidden shadow-soft">
              <img 
                src="https://miaoda-site-img.s3cdn.medo.dev/images/0844b21b-33e9-4501-bd16-e051a1d9b0c5.jpg"
                alt="Content strategy"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative aspect-square rounded-[1.5rem] overflow-hidden shadow-soft">
              <img 
                src="https://miaoda-site-img.s3cdn.medo.dev/images/eda0f15c-7558-434a-8a11-b2a343b75512.jpg"
                alt="Production equipment"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative aspect-square rounded-[1.5rem] overflow-hidden shadow-soft">
              <img 
                src="https://miaoda-site-img.s3cdn.medo.dev/images/ff9232c1-025a-4830-9280-2035c72342b7.jpg"
                alt="Portfolio showcase"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
