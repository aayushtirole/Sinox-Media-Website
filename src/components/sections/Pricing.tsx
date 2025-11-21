import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Sparkles, Zap, Crown } from "lucide-react";
import { useNavigate } from "react-router-dom";

const pricingPlans = {
  india: [
    {
      name: "Starter",
      icon: Sparkles,
      price: "₹29,999",
      period: "/month",
      description: "Perfect for growing brands",
      features: [
        "10 videos per month",
        "HD quality (1080p)",
        "2 revisions per video",
        "Basic analytics",
        "Email support",
        "7-day turnaround"
      ]
    },
    {
      name: "Professional",
      icon: Zap,
      price: "₹59,999",
      period: "/month",
      description: "For established businesses",
      popular: true,
      features: [
        "25 videos per month",
        "4K quality",
        "Unlimited revisions",
        "Advanced analytics",
        "Priority support",
        "3-day turnaround",
        "Dedicated account manager",
        "Content strategy sessions"
      ]
    },
    {
      name: "Enterprise",
      icon: Crown,
      price: "Custom",
      period: "",
      description: "Tailored for large organizations",
      features: [
        "Unlimited videos",
        "8K quality available",
        "Unlimited revisions",
        "Custom analytics dashboard",
        "24/7 support",
        "Same-day turnaround",
        "Dedicated team",
        "Quarterly strategy reviews",
        "White-label options"
      ]
    }
  ],
  international: [
    {
      name: "Starter",
      icon: Sparkles,
      price: "$499",
      period: "/month",
      description: "Perfect for growing brands",
      features: [
        "10 videos per month",
        "HD quality (1080p)",
        "2 revisions per video",
        "Basic analytics",
        "Email support",
        "7-day turnaround"
      ]
    },
    {
      name: "Professional",
      icon: Zap,
      price: "$999",
      period: "/month",
      description: "For established businesses",
      popular: true,
      features: [
        "25 videos per month",
        "4K quality",
        "Unlimited revisions",
        "Advanced analytics",
        "Priority support",
        "3-day turnaround",
        "Dedicated account manager",
        "Content strategy sessions"
      ]
    },
    {
      name: "Enterprise",
      icon: Crown,
      price: "Custom",
      period: "",
      description: "Tailored for large organizations",
      features: [
        "Unlimited videos",
        "8K quality available",
        "Unlimited revisions",
        "Custom analytics dashboard",
        "24/7 support",
        "Same-day turnaround",
        "Dedicated team",
        "Quarterly strategy reviews",
        "White-label options"
      ]
    }
  ]
};

export default function Pricing() {
  const [region, setRegion] = useState<"india" | "international">("india");
  const navigate = useNavigate();
  const plans = pricingPlans[region];

  const handleGetStarted = (planName: string) => {
    // Navigate to specific plan page based on plan name
    const planRoutes: Record<string, string> = {
      'Starter': '/plans/starter',
      'Professional': '/plans/professional',
      'Enterprise': '/plans/enterprise'
    };
    
    const route = planRoutes[planName];
    if (route) {
      navigate(route);
    }
  };

  return (
    <section className="py-20 xl:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 xl:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl xl:text-5xl font-bold mb-4">
            Simple, <span className="gradient-text">Transparent Pricing</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Choose the plan that fits your needs
          </p>
          
          <div className="inline-flex items-center gap-2 p-1 bg-background rounded-full shadow-soft">
            <button
              onClick={() => setRegion("international")}
              className={`px-6 py-2 rounded-full transition-smooth ${
                region === "international"
                  ? "bg-primary text-primary-foreground shadow-glow"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Outside India
            </button>
            <button
              onClick={() => setRegion("india")}
              className={`px-6 py-2 rounded-full transition-smooth ${
                region === "india"
                  ? "bg-primary text-primary-foreground shadow-glow"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              For India
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`p-8 relative group cursor-pointer transition-all duration-300 hover:scale-[1.03] ${
                plan.popular 
                  ? "border-2 border-primary shadow-lg hover:border-primary hover:shadow-xl" 
                  : "border border-border hover:border-primary/60 hover:shadow-lg"
              }`}
              style={{ 
                borderRadius: "1.75rem"
              }}
            >
              
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground z-10">
                  Most Popular
                </Badge>
              )}
              
              <div className="text-center mb-8 relative z-10">
                <plan.icon className="w-12 h-12 text-primary mx-auto mb-4 transition-transform duration-300 group-hover:scale-110" />
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground mb-4">{plan.description}</p>
                <div className="flex items-end justify-center gap-1">
                  <span className="text-5xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground mb-2">{plan.period}</span>
                </div>
              </div>
              
              <ul className="space-y-4 mb-8 relative z-10">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 fade-in-up" style={{ animationDelay: `${idx * 0.05}s` }}>
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button
                onClick={() => handleGetStarted(plan.name)}
                className="w-full py-6 rounded-full transition-all duration-300 relative z-10 bg-primary hover:bg-primary/90 text-white font-semibold"
              >
                Get Started
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
