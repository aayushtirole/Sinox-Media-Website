import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Check, Sparkles, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { createContactSubmission } from "@/db/api";

export default function StarterPage() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const planDetails = {
    name: "Starter Plan",
    price: "₹29,999 / $499",
    description: "Perfect for growing brands looking to establish their content presence",
    features: [
      "10 videos per month",
      "HD quality (1080p)",
      "2 revisions per video",
      "Basic analytics",
      "Email support",
      "7-day turnaround"
    ]
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await createContactSubmission({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: `Starter Plan Inquiry: ${formData.message}`
      });

      toast({
        title: "Request Submitted!",
        description: "We'll get back to you within 24 hours.",
      });

      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit request. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 xl:px-8 py-4">
          <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <section className="py-20 xl:py-32">
        <div className="container mx-auto px-4 xl:px-8">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 xl:gap-16 items-start">
            {/* Left Side - Plan Details */}
            <div className="space-y-8">
              <div>
                <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Starter Plan
                </Badge>
                <h1 className="text-5xl xl:text-6xl font-bold mb-4">
                  Start Your Content Journey
                </h1>
                <p className="text-xl text-muted-foreground">
                  {planDetails.description}
                </p>
              </div>

              <Card className="p-8 gradient-border" style={{ borderRadius: "1.5rem" }}>
                <div className="mb-6">
                  <div className="flex items-end gap-2 mb-2">
                    <span className="text-4xl font-bold">{planDetails.price}</span>
                    <span className="text-muted-foreground mb-1">/month</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Billed monthly • Cancel anytime
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="font-semibold text-lg">What's included:</h3>
                  <ul className="space-y-3">
                    {planDetails.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>

              <Card className="p-6 bg-secondary/30 border-0" style={{ borderRadius: "1.5rem" }}>
                <h3 className="font-semibold mb-2">Perfect for:</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Small businesses and startups</li>
                  <li>• Content creators building their brand</li>
                  <li>• Companies testing video marketing</li>
                  <li>• Brands with consistent monthly content needs</li>
                </ul>
              </Card>
            </div>

            {/* Right Side - Contact Form */}
            <div className="xl:sticky xl:top-24">
              <Card className="p-8 shadow-float" style={{ borderRadius: "1.5rem" }}>
                <div className="mb-6">
                  <h2 className="text-3xl font-bold mb-2">Get Started Today</h2>
                  <p className="text-muted-foreground">
                    Fill out the form below and our team will reach out within 24 hours to discuss your project.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                      className="h-12"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@company.com"
                      required
                      className="h-12"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 000-0000"
                      className="h-12"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Tell us about your project
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Share details about your content needs, goals, and timeline..."
                      rows={5}
                      className="resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full h-12 text-base font-semibold bg-primary hover:bg-primary/90 text-white rounded-full shadow-glow hover:shadow-glow-hover transition-all"
                  >
                    {loading ? "Submitting..." : "Submit Request"}
                  </Button>

                  <p className="text-xs text-center text-muted-foreground">
                    By submitting this form, you agree to our Terms of Service and Privacy Policy
                  </p>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
