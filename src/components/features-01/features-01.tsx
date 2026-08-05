"use client";

import {
  ShieldCheck,
  MessagesSquare,
  Rocket,
  MapPin,
  QrCode,
  Smartphone,
} from "lucide-react";
import React from "react";
import { AnimatedSection } from "@/components/ui/animated-section";

const features = [
  {
    icon: ShieldCheck,
    title: "Escrow that protects both sides",
    description:
      "Buyers pay into CarryPay, and the money is released only when delivery is confirmed. No 'pay first, pray later'.",
  },
  {
    icon: MessagesSquare,
    title: "Deals happen in real time",
    description:
      "Built-in chat with instant messages: negotiate, agree, and buy without ever sharing your number.",
  },
  {
    icon: Rocket,
    title: "Boost your listings",
    description:
      "Put your item in front of the whole campus with 7-day or 30-day boosts. Standard listings are always free.",
  },
  {
    icon: MapPin,
    title: "Campus-by-campus markets",
    description:
      "Every campus gets its own feed, so listings are always nearby. Switch campuses to browse markets across Ghana.",
  },
  {
    icon: QrCode,
    title: "Profiles you can trust",
    description:
      "Every seller has a public shop profile with a QR code. Scan to view their listings or share yours anywhere.",
  },
  {
    icon: Smartphone,
    title: "Top up & cash out with MoMo",
    description:
      "Fund your CarryPay wallet and withdraw your earnings straight to mobile money, protected by your PIN.",
  },
];

const Features01Page = () => {
  return (
    <section id="features" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-muted">
      <div className="max-w-7xl w-full mx-auto">
        {/* Section Header */}
        <AnimatedSection className="max-w-2xl mx-auto text-center mb-12 md:mb-16">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-[0.15em] mb-3">
            Why CarryMart
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-secondary">
            Built for how students actually trade
          </h2>
          <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
            Safe payments, real conversations, and a market that lives where you do.
          </p>
        </AnimatedSection>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {features.map((feature, index) => (
            <AnimatedSection key={feature.title} delay={index * 0.06} direction="up">
              <div className="bg-white rounded-3xl p-7 md:p-8 border border-border/60 hover:shadow-sharp-lg hover:-translate-y-1 transition-all duration-300 h-full">
                <div className="mb-5 h-12 w-12 flex items-center justify-center bg-primary rounded-xl">
                  <feature.icon className="w-6 h-6 text-primary-foreground" strokeWidth={2.25} />
                </div>

                <h3 className="font-display text-lg md:text-xl font-bold tracking-tight text-secondary mb-2">
                  {feature.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features01Page;
