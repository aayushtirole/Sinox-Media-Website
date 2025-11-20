import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    question: "What types of content do you create?",
    answer: "We create a wide range of content including social media videos, brand campaigns, product launches, testimonials, behind-the-scenes content, educational videos, and more. Our team specializes in both short-form and long-form content across all major platforms."
  },
  {
    question: "How long does it take to produce a video?",
    answer: "Turnaround time varies by plan and project complexity. Our Starter plan offers 7-day turnaround, Professional plan offers 3-day turnaround, and Enterprise clients can get same-day delivery. Rush orders are available for urgent projects."
  },
  {
    question: "Do you offer revisions?",
    answer: "Yes! Our Starter plan includes 2 revisions per video, while Professional and Enterprise plans include unlimited revisions. We work closely with you to ensure the final product exceeds your expectations."
  },
  {
    question: "What is your pricing structure?",
    answer: "We offer three main plans: Starter, Professional, and Enterprise. Pricing varies based on your location (India vs International) and specific needs. All plans include transparent pricing with no hidden fees. Contact us for a custom quote for Enterprise solutions."
  },
  {
    question: "Can you help with content strategy?",
    answer: "Absolutely! Our Professional and Enterprise plans include content strategy sessions. We analyze your brand, audience, and goals to develop a comprehensive content strategy that drives results."
  },
  {
    question: "What platforms do you optimize content for?",
    answer: "We optimize content for all major platforms including Instagram, YouTube, TikTok, Facebook, LinkedIn, Twitter, and more. Each video is tailored to the specific requirements and best practices of your target platforms."
  },
  {
    question: "Do you provide analytics and reporting?",
    answer: "Yes! All plans include analytics. Starter plan gets basic analytics, Professional plan receives advanced analytics, and Enterprise clients get a custom analytics dashboard with detailed insights and quarterly strategy reviews."
  },
  {
    question: "What makes Sinox Media different?",
    answer: "We combine creative excellence with strategic thinking and reliable execution. Our team brings years of experience, cutting-edge equipment, and a commitment to quality that sets us apart. Plus, we offer transparent pricing, unlimited revisions (on select plans), and dedicated support."
  },
  {
    question: "How do I get started?",
    answer: "Getting started is easy! Click the 'Contact Us' button to schedule a free consultation. We'll discuss your needs, goals, and how we can help. From there, we'll create a custom plan and timeline for your project."
  },
  {
    question: "Do you work with international clients?",
    answer: "Yes! We work with clients worldwide. We have specific pricing for Indian and international markets, and our team is experienced in working across different time zones and cultural contexts."
  },
  {
    question: "What is your refund policy?",
    answer: "We offer a satisfaction guarantee. If you're not happy with the initial concept, we'll work with you to make it right. For our 2-week paid trial, if you're not satisfied within the first two weeks, we'll provide a full refund."
  },
  {
    question: "Can you handle large-scale projects?",
    answer: "Absolutely! Our Enterprise plan is designed for large organizations with extensive content needs. We can scale our team and resources to match your requirements, whether you need dozens of videos per month or comprehensive multi-platform campaigns."
  }
];

export default function FAQ() {
  const midpoint = Math.ceil(faqData.length / 2);
  const leftColumn = faqData.slice(0, midpoint);
  const rightColumn = faqData.slice(midpoint);

  return (
    <section className="py-20 xl:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 xl:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl xl:text-5xl font-bold mb-4">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Everything you need to know about our services
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
            <Accordion type="single" collapsible className="space-y-4">
              {leftColumn.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-background rounded-[1.5rem] px-6 border-none"
                >
                  <AccordionTrigger className="text-left font-semibold hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            
            <Accordion type="single" collapsible className="space-y-4">
              {rightColumn.map((faq, index) => (
                <AccordionItem 
                  key={index + midpoint} 
                  value={`item-${index + midpoint}`}
                  className="bg-background rounded-[1.5rem] px-6 border-none"
                >
                  <AccordionTrigger className="text-left font-semibold hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
