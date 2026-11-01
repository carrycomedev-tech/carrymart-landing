"use client";

import React from "react";
import { ArrowRight, Rocket } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/ui/animated-section";
import { cn } from "@/lib/utils";

const steps = [
  {
    title: "Snap & post for free",
    description:
      "List your item in under a minute: photos, price, category, done. Standard listings never cost a cedi.",
  },
  {
    title: "Get discovered",
    description:
      "Your listing hits the campus feed, search, and reels. Post stories to keep your shop in front of buyers.",
  },
  {
    title: "Meet and hand it over",
    description:
      "Agree a spot on campus in chat, meet your buyer between lectures, and close the deal face to face.",
  },
];

/* The one dark band on the page. Every other section is cards on white, so
   the steps drop the card chrome and read as a single connected timeline:
   a row on desktop, a column with the rail down the left on phones. */
const SellSection = () => {
  return (
    <section
      id="sell"
      className="w-full py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-secondary"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <AnimatedSection className="max-w-2xl mx-auto text-center mb-12 md:mb-16">
          <p className="text-xs font-semibold text-white/60 uppercase tracking-[0.15em] mb-3">
            Sell on CarryMart
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
            Turn your hustle into a campus storefront
          </h2>
          <p className="mt-4 text-base md:text-lg text-white/70">
            Thrift drops, home-cooked food, braids, tickets, tech. If your
            campus wants it, CarryMart sells it.
          </p>
        </AnimatedSection>

        {/* Steps */}
        <ol className="grid md:grid-cols-3 mb-12 md:mb-16">
          {steps.map((step, index) => {
            const isLast = index === steps.length - 1;

            return (
              <li key={step.title}>
                <AnimatedSection
                  delay={index * 0.1}
                  direction="up"
                  className="flex md:block gap-5 h-full"
                >
                  {/* Marker, with the rail running on to the next one */}
                  <div className="flex flex-col md:flex-row items-center shrink-0 md:mb-6">
                    <span className="flex size-12 items-center justify-center rounded-full bg-primary font-display text-lg font-extrabold text-primary-foreground">
                      {index + 1}
                    </span>
                    {!isLast && (
                      <span
                        aria-hidden
                        className="flex-1 w-px md:w-auto md:h-px bg-white/15 my-3 md:my-0 md:mx-4"
                      />
                    )}
                  </div>

                  <div className={cn("md:pr-10", !isLast && "pb-8 md:pb-0")}>
                    <h3 className="font-display text-xl font-bold tracking-tight text-white mb-2.5">
                      {step.title}
                    </h3>
                    <p className="text-white/70 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </AnimatedSection>
              </li>
            );
          })}
        </ol>

        {/* Boost callout */}
        <AnimatedSection delay={0.2}>
          <div className="bg-white/[0.06] border border-white/10 rounded-3xl p-8 md:p-10 flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
            <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center shrink-0">
              <Rocket className="size-7 text-primary-foreground" strokeWidth={2.25} />
            </div>
            <div className="flex-1">
              <h3 className="font-display text-xl md:text-2xl font-bold tracking-tight text-white mb-1.5">
                Ready to sell more? Boost it.
              </h3>
              <p className="text-white/70 leading-relaxed">
                7-day and 30-day boosts push your listing to the top of the
                campus feed, right when your buyers are looking.
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
