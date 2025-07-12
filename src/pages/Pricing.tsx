import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Star } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "₹2,999",
      period: "one-time setup",
      description: "Perfect for small gyms and personal trainers",
      features: [
        "Up to 50 members",
        "Basic member management",
        "Attendance tracking",
        "Payment reminders",
        "WhatsApp integration",
        "1 month support"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "₹4,999",
      period: "one-time setup",
      description: "Ideal for growing fitness studios and gyms",
      features: [
        "Up to 200 members",
        "Advanced member management",
        "Trainer management",
        "AI-powered insights",
        "Document management",
        "WhatsApp automation",
        "Staff management",
        "Expense tracking",
        "3 months support"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "pricing",
      description: "Scalable solution for gym chains and franchises",
      features: [
        "Unlimited members",
        "Multi-location support",
        "Advanced AI features",
        "Custom integrations",
        "Priority support",
        "Staff training",
        "Custom branding",
        "Ongoing updates",
        "24/7 support"
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent mb-6">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Fytzi offers tailored pricing based on your business scale and needs. From one-time setup and branding to continuous support and feature updates, we ensure your gym runs smoothly with powerful automation and intuitive tools.
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get a fully customized gym management solution — without unnecessary features or hidden costs.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative transition-all duration-300 hover:shadow-elegant ${
                plan.popular ? 'border-primary shadow-lg scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-primary to-primary-glow text-white px-4 py-1 rounded-full text-sm font-medium flex items-center">
                    <Star className="w-4 h-4 mr-1" />
                    Most Popular
                  </div>
                </div>
              )}
              
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                <CardDescription className="text-base">{plan.description}</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-primary">{plan.price}</span>
                  <span className="text-muted-foreground ml-2">/{plan.period}</span>
                </div>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <Check className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full ${plan.popular ? 'bg-gradient-primary' : ''}`}
                  variant={plan.popular ? "default" : "outline"}
                >
                  {plan.name === "Enterprise" ? "Contact Sales" : "Get Started"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="bg-accent/50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Need a Custom Solution?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Every gym is unique. We offer fully customized solutions with specific features, integrations, and support levels tailored to your exact requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-primary">
              Schedule Free Demo
            </Button>
            <Button size="lg" variant="outline">
              Contact Sales Team
            </Button>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div>
              <h4 className="font-semibold mb-2">Is there a monthly subscription fee?</h4>
              <p className="text-muted-foreground">No hidden costs! Our Starter and Professional plans are one-time setup fees. Enterprise includes ongoing support and updates.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Can I upgrade my plan later?</h4>
              <p className="text-muted-foreground">Absolutely! You can upgrade anytime and only pay the difference. We'll help migrate your data seamlessly.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">What's included in the setup?</h4>
              <p className="text-muted-foreground">Complete installation, data migration, staff training, custom branding, and initial configuration based on your gym's needs.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Do you offer refunds?</h4>
              <p className="text-muted-foreground">Yes! We offer a 30-day money-back guarantee if you're not completely satisfied with our solution.</p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Pricing;