import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Target, Users, Zap } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Mission-Driven",
      description: "Empowering fitness businesses to reach their full potential through innovative technology."
    },
    {
      icon: Users,
      title: "Customer-Centric",
      description: "Every feature is designed with gym owners and their members' success in mind."
    },
    {
      icon: Zap,
      title: "Innovation First",
      description: "Leveraging AI and automation to solve real-world fitness industry challenges."
    }
  ];

  const milestones = [
    { year: "2023", event: "Fytzi Founded", description: "Started with a vision to revolutionize gym management" },
    { year: "2024", event: "AI Integration", description: "Launched AI-powered features for automated insights" },
    { year: "2024", event: "500+ Gyms", description: "Reached milestone of serving 500+ fitness businesses" },
    { year: "2024", event: "WhatsApp Automation", description: "Introduced seamless WhatsApp integration for member communication" }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-hero">
          <div className="container mx-auto px-6 text-center">
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium">
                📖 About Fytzi
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground">
                Transforming Fitness
                <span className="bg-gradient-primary bg-clip-text text-transparent"> Management </span>
                Worldwide
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                We're on a mission to empower gym owners with intelligent, automated solutions that help them focus on what matters most - their members' fitness journey.
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <h2 className="text-4xl font-bold text-foreground">Our Story</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Fytzi was born from the frustration of seeing talented gym owners struggle with outdated management systems. 
                    Our founder, having worked closely with fitness businesses, recognized the need for a modern, AI-powered solution.
                  </p>
                  <p>
                    We started with a simple goal: make gym management as effortless as a perfect workout. Today, we're proud to serve 
                    over 500 fitness businesses, helping them streamline operations, boost member engagement, and grow their revenue.
                  </p>
                  <p>
                    From our base in Tamil Nadu, India, we're building technology that understands the unique challenges of the fitness 
                    industry and provides intelligent solutions that scale with your business.
                  </p>
                </div>
              </div>
              
              <div className="space-y-6">
                <Card className="p-6 bg-accent/20 border-accent">
                  <CardContent className="p-0">
                    <div className="grid grid-cols-2 gap-6">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-foreground">500+</div>
                        <div className="text-sm text-muted-foreground">Gyms Served</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-foreground">50K+</div>
                        <div className="text-sm text-muted-foreground">Members Managed</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-foreground">99%</div>
                        <div className="text-sm text-muted-foreground">Uptime</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-foreground">24/7</div>
                        <div className="text-sm text-muted-foreground">Support</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-4">Our Values</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                The principles that drive everything we do at Fytzi
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="text-center hover:shadow-elegant transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                      <value.icon className="h-8 w-8 text-accent-foreground" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-4">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-4">Our Journey</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Key milestones in our mission to revolutionize fitness management
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex gap-6 pb-12 last:pb-0">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                      {milestone.year}
                    </div>
                    {index !== milestones.length - 1 && (
                      <div className="w-0.5 h-16 bg-border mt-4"></div>
                    )}
                  </div>
                  
                  <div className="flex-1 pt-2">
                    <h3 className="text-xl font-bold text-foreground mb-2">{milestone.event}</h3>
                    <p className="text-muted-foreground">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold text-foreground mb-8">Meet Our Team</h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              A passionate team of fitness enthusiasts and technology experts dedicated to your success.
            </p>
            
            <Card className="max-w-md mx-auto">
              <CardContent className="p-8 text-center">
                <div className="w-24 h-24 bg-gradient-primary rounded-full mx-auto mb-6 flex items-center justify-center text-white text-2xl font-bold">
                  SS
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Suraj Suri</h3>
                <p className="text-muted-foreground mb-4">Founder & CEO</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Passionate about combining technology with fitness to create solutions that make a real difference 
                  in people's lives and businesses.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;