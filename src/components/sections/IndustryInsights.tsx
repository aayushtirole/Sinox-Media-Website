import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Video, Camera, Lightbulb, Package, Share2, ArrowRight } from "lucide-react";

const tabs = [
  { id: "content", label: "Content", icon: Video },
  { id: "shootings", label: "Shootings", icon: Camera },
  { id: "ideations", label: "Ideations", icon: Lightbulb },
  { id: "packaging", label: "Packaging", icon: Package },
  { id: "distribution", label: "Distribution", icon: Share2 }
];

const tabContent = {
  content: {
    title: "Content Creation Excellence",
    description: "We craft compelling narratives that resonate with your audience and drive meaningful engagement. Our content strategy combines data-driven insights with creative storytelling to deliver results that matter.",
    points: [
      "Strategic content planning",
      "Multi-platform optimization",
      "Audience-focused storytelling",
      "Performance tracking & analytics"
    ]
  },
  shootings: {
    title: "Professional Production",
    description: "State-of-the-art equipment and experienced crews ensure every frame is perfect. From concept to final cut, we handle all aspects of video production with precision and creativity.",
    points: [
      "4K & 8K video production",
      "Professional lighting & sound",
      "On-location & studio shoots",
      "Experienced production team"
    ]
  },
  ideations: {
    title: "Creative Ideation",
    description: "Our brainstorming sessions bring fresh perspectives and innovative concepts to life. We collaborate closely with you to develop ideas that align with your brand vision and goals.",
    points: [
      "Collaborative workshops",
      "Trend analysis & research",
      "Concept development",
      "Storyboard creation"
    ]
  },
  packaging: {
    title: "Content Packaging",
    description: "Transform raw footage into polished, professional content ready for distribution. Our post-production team ensures every detail is perfect, from color grading to sound design.",
    points: [
      "Professional editing",
      "Color grading & VFX",
      "Sound design & mixing",
      "Motion graphics & animation"
    ]
  },
  distribution: {
    title: "Strategic Distribution",
    description: "Get your content in front of the right audience at the right time. We optimize distribution across all major platforms to maximize reach and engagement.",
    points: [
      "Multi-platform publishing",
      "SEO optimization",
      "Audience targeting",
      "Performance monitoring"
    ]
  }
};

export default function IndustryInsights() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("content");
  const content = tabContent[activeTab as keyof typeof tabContent];

  const handleTrialClick = () => {
    navigate("/get-started");
  };

  return (
    <section className="py-20 xl:py-32 bg-background">
      <div className="container mx-auto px-4 xl:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl xl:text-5xl font-bold mb-4">
            Our <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Comprehensive solutions for all your content needs
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full transition-smooth ${
                  activeTab === tab.id
                    ? "bg-primary text-primary-foreground shadow-glow"
                    : "bg-secondary text-foreground hover:bg-secondary/80"
                }`}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </button>
            ))}
          </div>
          
          <Card 
            className="p-8 xl:p-12 mb-8"
            style={{ borderRadius: '1.75rem' }}
          >
            <h3 className="text-3xl font-bold mb-4">{content.title}</h3>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              {content.description}
            </p>
            <ul className="grid grid-cols-1 xl:grid-cols-2 gap-4 mb-8">
              {content.points.map((point, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <Button 
              size="lg"
              onClick={handleTrialClick}
              className="px-8 py-6 rounded-full bg-primary hover:bg-primary-hover shadow-glow transition-smooth group"
            >
              Start 1-Week Paid Trial
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
}
