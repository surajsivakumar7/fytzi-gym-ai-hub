import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const targetAudience = [
  {
    title: "Gym Owners",
    benefits: [
      "Increase member retention with AI insights",
      "Automate daily operations and save time",
      "Track revenue and expenses in real-time",
      "Scale your business with data-driven decisions"
    ]
  },
  {
    title: "Personal Trainers",
    benefits: [
      "Manage client schedules effortlessly",
      "Track member progress and goals",
      "Send automated workout reminders",
      "Focus on training, not admin work"
    ]
  },
  {
    title: "Fitness Studios",
    benefits: [
      "Handle class bookings and capacity",
      "Monitor equipment usage and maintenance",
      "Engage members with targeted campaigns",
      "Optimize studio operations"
    ]
  },
  {
    title: "CrossFit & Yoga Centers",
    benefits: [
      "Specialized program management",
      "Community engagement tools",
      "Performance tracking for athletes",
      "Flexible membership options"
    ]
  },
  {
    title: "Chain Gym Franchises",
    benefits: [
      "Multi-location management dashboard",
      "Standardized operations across branches",
      "Centralized reporting and analytics",
      "Franchise-wide member database"
    ]
  }
];

const BenefitsSection = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium">
            🎯 Perfect For
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            Built for
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Every Fitness Business</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Whether you run a small personal training studio or a large gym franchise, Fytzi adapts to your unique needs.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {targetAudience.map((audience, index) => (
            <Card key={index} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6 group-hover:text-primary transition-colors">
                  {audience.title}
                </h3>
                
                <ul className="space-y-4">
                  {audience.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground leading-relaxed">
                        {benefit}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;