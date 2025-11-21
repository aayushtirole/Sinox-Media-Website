import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft, CheckCircle2, Loader2 } from "lucide-react";

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  company: string;
  serviceInterest: string;
  message: string;
}

export default function GetStartedPage() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    serviceInterest: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, serviceInterest: value }));
  };

  const validateForm = (): boolean => {
    if (!formData.fullName.trim()) {
      toast({
        title: "Validation Error",
        description: "Please enter your full name",
        variant: "destructive",
      });
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Validation Error",
        description: "Please enter a valid email address",
        variant: "destructive",
      });
      return false;
    }

    if (!formData.phone.trim()) {
      toast({
        title: "Validation Error",
        description: "Please enter your phone number",
        variant: "destructive",
      });
      return false;
    }

    if (!formData.serviceInterest) {
      toast({
        title: "Validation Error",
        description: "Please select a service you're interested in",
        variant: "destructive",
      });
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Log form data (in production, this would be sent to your backend)
      console.log("Trial signup data:", formData);

      toast({
        title: "Success! 🎉",
        description: "Your trial request has been submitted. We'll contact you within 24 hours.",
      });

      // Reset form
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        company: "",
        serviceInterest: "",
        message: "",
      });

      // Navigate back to home after 2 seconds
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 xl:px-8 py-4">
          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              onClick={() => navigate("/")}
              className="flex items-center gap-2 hover:bg-secondary"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Button>
            <h1 className="text-xl font-bold">
              Sinox <span className="text-primary">Media</span>
            </h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 xl:px-8 py-12 xl:py-20">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <CheckCircle2 className="w-4 h-4" />
              Start Your 1-Week Paid Trial
            </div>
            <h1 className="text-4xl xl:text-5xl font-bold mb-4">
              Get Started with <span className="gradient-text">Sinox Media</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Fill out the form below and our team will reach out to you within 24 hours to kickstart your content journey.
            </p>
          </div>

          {/* Form Card */}
          <Card className="p-8 xl:p-12" style={{ borderRadius: "1.75rem" }}>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Full Name */}
              <div className="space-y-2">
                <Label htmlFor="fullName" className="text-base font-medium">
                  Full Name <span className="text-primary">*</span>
                </Label>
                <Input
                  id="fullName"
                  name="fullName"
                  type="text"
                  placeholder="John Doe"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="h-12 rounded-xl"
                  required
                />
              </div>

              {/* Email & Phone */}
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-base font-medium">
                    Email Address <span className="text-primary">*</span>
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="h-12 rounded-xl"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-base font-medium">
                    Phone Number <span className="text-primary">*</span>
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="h-12 rounded-xl"
                    required
                  />
                </div>
              </div>

              {/* Company Name */}
              <div className="space-y-2">
                <Label htmlFor="company" className="text-base font-medium">
                  Company Name <span className="text-muted-foreground text-sm">(Optional)</span>
                </Label>
                <Input
                  id="company"
                  name="company"
                  type="text"
                  placeholder="Your Company Inc."
                  value={formData.company}
                  onChange={handleInputChange}
                  className="h-12 rounded-xl"
                />
              </div>

              {/* Service Interest */}
              <div className="space-y-2">
                <Label htmlFor="serviceInterest" className="text-base font-medium">
                  Service Interest <span className="text-primary">*</span>
                </Label>
                <Select value={formData.serviceInterest} onValueChange={handleSelectChange}>
                  <SelectTrigger className="h-12 rounded-xl">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="content">Content Creation</SelectItem>
                    <SelectItem value="shootings">Professional Shootings</SelectItem>
                    <SelectItem value="ideations">Creative Ideation</SelectItem>
                    <SelectItem value="packaging">Content Packaging</SelectItem>
                    <SelectItem value="distribution">Strategic Distribution</SelectItem>
                    <SelectItem value="full-service">Full Service Package</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <Label htmlFor="message" className="text-base font-medium">
                  Tell us about your project <span className="text-muted-foreground text-sm">(Optional)</span>
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Share your vision, goals, and what you hope to achieve..."
                  value={formData.message}
                  onChange={handleInputChange}
                  className="min-h-32 rounded-xl resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full h-14 rounded-full bg-primary hover:bg-primary-hover shadow-glow transition-smooth text-lg font-semibold disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    "Start My Trial"
                  )}
                </Button>
              </div>

              {/* Terms */}
              <p className="text-sm text-muted-foreground text-center pt-2">
                By submitting this form, you agree to our{" "}
                <a href="#" className="text-primary hover:underline">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="#" className="text-primary hover:underline">
                  Privacy Policy
                </a>
              </p>
            </form>
          </Card>

          {/* Benefits Section */}
          <div className="mt-12 grid grid-cols-1 xl:grid-cols-3 gap-6">
            <Card className="p-6 text-center bg-secondary/30 border-0" style={{ borderRadius: "1.25rem" }}>
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">Support Available</div>
            </Card>
            <Card className="p-6 text-center bg-secondary/30 border-0" style={{ borderRadius: "1.25rem" }}>
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Active Projects</div>
            </Card>
            <Card className="p-6 text-center bg-secondary/30 border-0" style={{ borderRadius: "1.25rem" }}>
              <div className="text-3xl font-bold text-primary mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Client Satisfaction</div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
