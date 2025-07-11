import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Users, 
  Calendar, 
  CreditCard, 
  UserCheck, 
  MessageSquare, 
  Brain,
  BarChart3,
  FileText,
  Shield,
  Clock,
  DollarSign,
  Briefcase
} from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Member Management",
    description: "Add, update, and track members with full profile and attendance logs."
  },
  {
    icon: Calendar,
    title: "Smart Attendance Tracker",
    description: "AI-assisted calendar view to analyze patterns in attendance and member engagement."
  },
  {
    icon: CreditCard,
    title: "Plan & Payment Management",
    description: "Create, edit, and monitor plans with automated due date reminders and payment status."
  },
  {
    icon: UserCheck,
    title: "Trainer Management",
    description: "Assign members to trainers, track sessions, and manage specialties with ease."
  },
  {
    icon: MessageSquare,
    title: "AI-Powered WhatsApp Automation",
    description: "Send automated follow-ups, reminders, and promotional messages customized by AI."
  },
  {
    icon: Brain,
    title: "AI Chat Assistant",
    description: "Smart assistant trained on your gym data for instant answers to membership queries."
  },
  {
    icon: BarChart3,
    title: "AI Reports & Insights",
    description: "Get AI-generated insights on member retention, peak hours, and plan popularity."
  },
  {
    icon: FileText,
    title: "Document Upload & Preview",
    description: "Upload and preview ID proofs, health certificates, invoices safely in the cloud."
  },
  {
    icon: Shield,
    title: "Role-Based Access Control",
    description: "Secure login access for admin, trainers, and staff with permissions management."
  },
  {
    icon: Clock,
    title: "Staff Management",
    description: "Track staff attendance, manage schedules, and monitor salary payments."
  },
  {
    icon: DollarSign,
    title: "Expense Tracking",
    description: "Monitor and categorize all gym expenses for better financial management."
  },
  {
    icon: Briefcase,
    title: "Business Analytics",
    description: "Comprehensive dashboards with real-time insights into your gym's performance."
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium">
            🧩 Powerful Features
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            Everything You Need to
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Grow Your Gym</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From AI-powered automation to comprehensive member management, Fytzi provides all the tools modern gym owners need.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 border-border/50"
            >
              <CardHeader className="space-y-4">
                <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <feature.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl font-semibold text-foreground">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;