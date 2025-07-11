import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium">
                🚀 AI-Powered Gym Management
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-foreground">
                Transform Your
                <span className="bg-gradient-primary bg-clip-text text-transparent"> Gym </span>
                with Fytzi
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                Modern gym management software with AI automation, WhatsApp integration, and real-time analytics. Everything you need to grow your fitness business.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="hero" className="group">
                Start Free Trial
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button size="lg" variant="glass" className="group">
                <Play className="mr-2 h-4 w-4" />
                Watch Demo
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-6 pt-4">
              <div className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">500+</span> Gyms Trust Fytzi
              </div>
              <div className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">50K+</span> Members Managed
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative animate-scale-in">
            <div className="relative">
              <img
                src={heroImage}
                alt="Fytzi Gym Management Dashboard"
                className="w-full h-auto rounded-2xl shadow-elegant"
              />
              
              {/* Floating Cards */}
              <div className="absolute -top-6 -left-6 bg-card p-4 rounded-xl shadow-lg border animate-fade-in">
                <div className="text-sm font-medium text-foreground">AI Insights</div>
                <div className="text-xs text-muted-foreground">+23% Retention</div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 bg-card p-4 rounded-xl shadow-lg border animate-fade-in">
                <div className="text-sm font-medium text-foreground">WhatsApp</div>
                <div className="text-xs text-muted-foreground">Auto Reminders</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;