import {
  Zap,
  GraduationCap,
  DollarSign,
  Package,
  Ticket,
  Moon,
} from "lucide-react";
import React from "react";

const features = [
  {
    icon: Zap,
    title: "15-20 Minute Delivery",
    description:
      "Campus-only routes mean we're faster than city-wide services. No traffic, no delays — just quick delivery between classes.",
  },
  {
    icon: GraduationCap,
    title: "Delivered by Fellow Students",
    description:
      "Our couriers know every shortcut, building access code, and campus protocol. Student-to-student trust you can count on.",
  },
  {
    icon: DollarSign,
    title: "Flat 5 GHS Delivery Fee",
    description:
      "No surge pricing surprises. Transparent, affordable rates designed for student budgets. Pay with mobile money instantly.",
  },
  {
    icon: Package,
    title: "Everything in One App",
    description:
      "Food, parcels, documents, groceries — handle all your delivery needs from a single platform. No switching between apps.",
  },
  {
    icon: Ticket,
    title: "Subscribe & Save",
    description:
      "Get unlimited food deliveries, priority service, and exclusive discounts for just 25 GHS/month. Pay for itself in 5 orders.",
  },
  {
    icon: Moon,
    title: "Deliver When Gates Close",
    description:
      "Need something at 10 PM? Our student couriers have campus access even after regular hours. Available when you need us most.",
  },
];

const Features01Page = () => {
  return (
    <div id="features" className="min-h-full flex items-center justify-center py-32 px-4 bg-background">
      <div className="max-w-7xl w-full">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-4">
              Why Students Choose CarryCome
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              Campus delivery designed by students, for students.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group relative bg-card border border-border rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="mb-6 h-14 w-14 flex items-center justify-center bg-primary rounded-xl shadow-lg group-hover:shadow-2xl transition-shadow duration-300">
                <feature.icon className="w-7 h-7 text-primary-foreground" strokeWidth={2.5} />
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed text-[15px]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features01Page;