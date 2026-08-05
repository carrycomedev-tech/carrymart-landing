"use client";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star } from "lucide-react";
import { AnimatedSection } from "@/components/ui/animated-section";

const testimonials = [
  {
    id: 1,
    name: "Nana A.",
    designation: "Thrift seller, KNUST",
    testimonial:
      "Sold my Air Force 1s the same night I posted them. The buyer paid into escrow, we met at the library, and the money hit my wallet on the spot. No 'I'll send it later' stories.",
    rating: 5,
  },
  {
    id: 2,
    name: "Efua S.",
    designation: "2nd Year, University of Ghana",
    testimonial:
      "I found my braider through a reel, chatted with her right in the app, and paid with CarryPay. Everything in one place. I never had to share my number.",
    rating: 5,
  },
  {
    id: 3,
    name: "Kojo B.",
    designation: "Food vendor, UCC",
    testimonial:
      "A 7-day boost got my chicken and rice in front of halls I'd never sold to before. CarryMart basically became my storefront.",
    rating: 5,
  },
];

const Testimonials = () => (
  <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
    <div className="max-w-7xl mx-auto">
      {/* Section Header */}
      <AnimatedSection className="max-w-2xl mx-auto text-center mb-12 md:mb-16">
        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-[0.15em] mb-3">
          Testimonials
        </p>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-secondary">
          Made for how campus trades
        </h2>
        <p className="mt-4 text-base md:text-lg text-muted-foreground">
          From thrift flips to food runs, this is CarryMart in action.
        </p>
      </AnimatedSection>

      {/* Testimonials Grid */}
      <div className="grid md:grid-cols-3 gap-5 md:gap-6">
        {testimonials.map((testimonial, index) => (
          <AnimatedSection key={testimonial.id} delay={index * 0.08} direction="up">
            <div className="bg-muted rounded-3xl p-7 md:p-8 h-full flex flex-col">
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: testimonial.rating }, (_, i) => (
                  <Star key={i} className="size-4.5 fill-primary text-primary" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-secondary/90 leading-relaxed flex-1">
                &ldquo;{testimonial.testimonial}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3.5 mt-7 pt-6 border-t border-border">
                <Avatar className="size-11">
                  <AvatarFallback className="font-display font-bold bg-secondary text-white">
                    {testimonial.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold text-secondary leading-tight">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground mt-0.5">
                    {testimonial.designation}
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
