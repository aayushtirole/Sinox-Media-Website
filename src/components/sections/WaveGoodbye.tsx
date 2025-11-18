export default function WaveGoodbye() {
  const problems = [
    "Inconsistent content quality",
    "Missed deadlines and delays",
    "Poor communication",
    "Hidden costs and fees",
    "Limited creative vision",
    "Lack of strategic planning"
  ];

  const stats = [
    { value: "1000+", label: "Projects Completed" },
    { value: "50M+", label: "Total Views" },
    { value: "5+", label: "Years Experience" },
    { value: "$10M+", label: "Revenue Generated" }
  ];

  return (
    <section className="py-20 xl:py-32 bg-background">
      <div className="container mx-auto px-4 xl:px-8">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-5xl xl:text-6xl font-bold leading-tight">
              Wave Goodbye To <br />
              <span className="gradient-text">Old Problems</span>
            </h2>
          </div>
          
          <div className="space-y-4">
            {problems.map((problem, index) => (
              <div 
                key={index}
                className="flex items-center gap-4 text-xl text-muted-foreground"
              >
                <div className="w-2 h-2 rounded-full bg-muted-foreground/30" />
                <span className="line-through">{problem}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-2 xl:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center p-8 rounded-[1.5rem] bg-secondary/50 hover:bg-secondary transition-smooth"
            >
              <div className="text-4xl xl:text-5xl font-bold gradient-text mb-2">
                {stat.value}
              </div>
              <div className="text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
