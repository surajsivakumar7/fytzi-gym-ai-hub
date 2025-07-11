import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Globe, ArrowRight } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium">
                📬 Get Started Today
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
                Ready to
                <span className="bg-gradient-primary bg-clip-text text-transparent"> Transform </span>
                Your Gym?
              </h2>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                Join 500+ gym owners who have revolutionized their business with Fytzi. Book a free demo and see the difference AI-powered management can make.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center">
                  <Mail className="h-6 w-6 text-accent-foreground" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Email</div>
                  <div className="text-muted-foreground">surajsuri279@gmail.com</div>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center">
                  <Globe className="h-6 w-6 text-accent-foreground" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Website</div>
                  <div className="text-muted-foreground">www.fyzi.in</div>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-accent-foreground" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Location</div>
                  <div className="text-muted-foreground">Ramasamy Hill, Aruvankadu, TamilNadu</div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-4">
              <Button size="lg" variant="hero" className="group">
                Book Free Demo Now
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

          {/* Right Content - Contact Form */}
          <Card className="shadow-elegant">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Request a Demo</CardTitle>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">First Name</label>
                  <Input placeholder="John" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Last Name</label>
                  <Input placeholder="Doe" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Email</label>
                <Input type="email" placeholder="john@gymname.com" />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Gym Name</label>
                <Input placeholder="Your Gym Name" />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Number of Members</label>
                <Input placeholder="e.g., 200" />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Message</label>
                <Textarea 
                  placeholder="Tell us about your gym and what you're looking for..."
                  className="min-h-[100px]"
                />
              </div>
              
              <Button className="w-full" size="lg" variant="hero">
                Send Demo Request
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              
              <p className="text-xs text-muted-foreground text-center">
                We'll get back to you within 24 hours to schedule your personalized demo.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;