import {
  MapPin,
  CreditCard,
  PiggyBank,
  GraduationCap,
} from "lucide-react";
import React from "react";

const features = [
  {
    icon: MapPin,
    title: "Real-time Tracking",
    description:
      "Stay in the loop with live updates from pickup to drop-off. Know exactly where your order or rider is—right on your phone.",
  },
  {
    icon: CreditCard,
    title: "Easy Payment Options",
    description:
      "Pay your way, effortlessly. From mobile money to secure in-app payments, we make every transaction smooth and student-friendly.",
  },
  {
    icon: PiggyBank,
    title: "Cost-effective Delivery",
    description:
      "Affordable deliveries without compromise. Enjoy quick service at student-budget prices, optimized for campus routes.",
  },
  {
    icon: GraduationCap,
    title: "Student-friendly Earning Opportunities",
    description:
      "Turn your daily rides and errands into income. Deliver for others, earn rewards, and grow your savings—right from campus.",
  },
];

const Features01Page = () => {
  return (
    <div className="min-h-full flex items-center justify-center py-32 px-4 bg-background">
      <div className="max-w-7xl w-full">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-4">
            Why Students Love CarryCome
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience fast, reliable, and rewarding campus delivery built just for students.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
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