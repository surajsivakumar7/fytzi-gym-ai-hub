import { Dumbbell, Mail, MapPin, Globe } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Dumbbell className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold text-foreground">Fytzi</span>
            </div>
            
            <p className="text-muted-foreground leading-relaxed">
              Modern gym management software with AI automation, designed to help fitness businesses grow and thrive.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Quick Links</h3>
            <nav className="flex flex-col gap-2">
              <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
                Features
              </a>
              <a href="#benefits" className="text-muted-foreground hover:text-foreground transition-colors">
                Benefits
              </a>
              <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Pricing
              </a>
            </nav>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Support</h3>
            <nav className="flex flex-col gap-2">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Documentation
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Help Center
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Terms of Service
              </a>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Mail className="h-4 w-4 text-muted-foreground mt-1" />
                <span className="text-muted-foreground text-sm">surajsuri279@gmail.com</span>
              </div>
              
              <div className="flex items-start gap-3">
                <Globe className="h-4 w-4 text-muted-foreground mt-1" />
                <span className="text-muted-foreground text-sm">www.fyzi.in</span>
              </div>
              
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-muted-foreground mt-1" />
                <span className="text-muted-foreground text-sm">
                  Ramasamy Hill, Aruvankadu, TamilNadu
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/50 mt-12 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © 2024 Fytzi. All rights reserved. Built with ❤️ for the fitness community.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;