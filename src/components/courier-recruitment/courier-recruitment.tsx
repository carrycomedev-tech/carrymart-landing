import React from "react";
import {
  Clock,
  DollarSign,
  Package,
  CreditCard,
  MapPin,
  Users,
  CheckCircle,
} from "lucide-react";

const timelineSteps = [
  {
    step: "1",
    icon: Clock,
    title: "Flexible Schedule",
    description: "Work between classes, choose your own hours, no fixed commitment required.",
  },
  {
    step: "2",
    icon: DollarSign,
    title: "Competitive Pay",
    description: "Earn competitive hourly rates plus delivery bonuses and keep 100% of your tips.",
  },
  {
    step: "3",
    icon: Package,
    title: "Provided Equipment",
    description: "We supply helmets, reflective vests, delivery bags, and phone mounts — just bring your bike.",
  },
  {
    step: "4",
    icon: CreditCard,
    title: "Weekly Payments",
    description: "Get paid for your work regularly with mobile money transfers.",
  },
  {
    step: "5",
    icon: MapPin,
    title: "Campus Access",
    description: "Use your student ID advantage to deliver where external services can't reach.",
  },
  {
    step: "6",
    icon: Users,
    title: "Build Your Network",
    description: "Meet students across campus while earning money and staying active.",
  },
];

const CourierRecruitment = () => {
  return (
    <section className="w-full bg-background py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-4">
            Earn While You Study
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Join student couriers making real income on their own schedule.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/20 hidden md:block"></div>

            <div className="space-y-8">
              {timelineSteps.map((step, index) => (
                <div key={step.title} className="relative flex items-center">
                  {/* Timeline dot */}
                  <div className="flex-shrink-0 w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-lg relative z-10">
                    <step.icon className="w-8 h-8 text-primary-foreground" strokeWidth={2} />
                  </div>

                  {/* Content */}
                  <div className="ml-6 flex-1">
                    <div className="bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300">
                      <div className="flex items-center gap-3 mb-2">
                        {/* <span className="text-sm font-semibold text-primary bg-primary/10 px-2 py-1 rounded">
                          Step {step.step}
                        </span> */}
                        <h3 className="text-xl font-semibold text-foreground">
                          {step.title}
                        </h3>
                      </div>

                      <p className="text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-5">
          <button className="bg-primary text-primary-foreground py-3 px-8 rounded-lg font-semibold hover:bg-primary/90 transition-colors text-lg">
            Apply to Ride →
          </button>

          {/* <div className="mt-8">
            <img
              src="/assets/blog-earn-student.png"
              alt="Student courier receiving payment on phone, smiling, bicycle nearby, campus setting"
              className="mx-auto rounded-lg shadow-lg max-w-md"
            />
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default CourierRecruitment;