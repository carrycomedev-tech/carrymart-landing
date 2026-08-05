"use client";

import React from "react";
import { Camera, Sparkles, Wallet, ArrowRight, Rocket } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/ui/animated-section";

const steps = [
  {
    step: "1",
    icon: Camera,
    title: "Snap & post for free",
    description:
      "List your item in under a minute: photos, price, category, done. Standard listings never cost a cedi.",
  },
  {
    step: "2",
    icon: Sparkles,
    title: "Get discovered",
    description:
      "Your listing hits the campus feed, search, and reels. Post stories to keep your shop in front of buyers.",
  },
  {
    step: "3",
    icon: Wallet,
    title: "Get paid, guaranteed",
    description:
      "Buyers pay into CarryPay escrow before you hand anything over. Confirm the deal and withdraw to MoMo.",
  },
];

const SellSection = () => {
  return (
    <section id="sell" className="w-full py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <AnimatedSection className="max-w-2xl mx-auto text-center mb-12 md:mb-16">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-[0.15em] mb-3">
            Sell on CarryMart
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-secondary">
            Turn your hustle into a campus storefront
          </h2>
          <p className="mt-4 text-base md:text-lg text-muted-foreground">
            Thrift drops, home-cooked food, braids, tickets, tech. If your
            campus wants it, CarryMart sells it.
          </p>
        </AnimatedSection>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-5 md:gap-6 mb-12 md:mb-16">
          {steps.map((step, index) => (
            <AnimatedSection key={step.title} delay={index * 0.1} direction="up">
              <div className="relative bg-muted rounded-3xl p-8 h-full">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                    <step.icon className="w-6 h-6 text-primary-foreground" strokeWidth={2.25} />
                  </div>
                  <span className="font-display text-5xl font-black text-secondary/10 leading-none">
                    {step.step}
                  </span>
                </div>

                <h3 className="font-display text-xl font-bold tracking-tight text-secondary mb-2.5">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Boost callout */}
        <AnimatedSection delay={0.2}>
          <div className="bg-white border border-border rounded-3xl p-8 md:p-10 flex flex-col md:flex-row md:items-center gap-6 md:gap-10 shadow-sharp">
            <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center shrink-0">
              <Rocket className="size-7 text-primary-foreground" strokeWidth={2.25} />
            </div>
            <div className="flex-1">
              <h3 className="font-display text-xl md:text-2xl font-bold tracking-tight text-secondary mb-1.5">
                Ready to sell more? Boost it.
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                7-day and 30-day boosts push your listing to the top of the
                campus feed. Pay right from your CarryPay wallet.
              </p>
            </div>
            <Button asChild size="lg" className="w-full md:w-auto shrink-0">
              <Link href="#download">
                Start selling
                <ArrowRight className="size-5" />
              </Link>
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default SellSection;
