"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck, Tag } from "lucide-react";
import Link from "next/link";
import React from "react";
import { PhoneMock } from "@/components/ui/phone-mock";

const stats = [
  { value: "GHS 0", label: "To post a listing" },
  { value: "100%", label: "Escrow protected" },
  { value: "9", label: "Categories" },
];

const Hero03 = () => {
  return (
    <section
      id="hero"
      className="relative w-full pt-28 pb-16 md:pt-36 md:pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Decorative background */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        {/* Fading grid */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(0,11,41,0.045) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,11,41,0.045) 1px, transparent 1px)",
            backgroundSize: "44px 44px",
            maskImage:
              "radial-gradient(ellipse 90% 65% at 50% 0%, black 30%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 90% 65% at 50% 0%, black 30%, transparent 100%)",
          }}
        />
        {/* Soft brand glows */}
        <div className="absolute -top-32 right-0 w-[520px] h-[520px] rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-0 -left-32 w-[440px] h-[440px] rounded-full bg-secondary/[0.04] blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 lg:gap-16 items-center">
        {/* Left — copy */}
        <div className="max-w-xl mx-auto lg:mx-0 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 rounded-full bg-muted border border-border px-4 py-1.5 mb-6 opacity-0 animate-fade-in-up">
            <span className="relative flex w-2 h-2">
              <span className="absolute inline-flex w-full h-full rounded-full bg-primary opacity-75 animate-ping" />
              <span className="relative inline-flex w-2 h-2 rounded-full bg-primary" />
            </span>
            <span className="text-sm font-medium text-secondary/80">
              Built for campuses across Ghana
            </span>
          </div>

          {/* Holds at 5xl through lg — 6xl overflows the two-column layout at
              ~1024px and orphans the last word onto its own line. */}
          <h1 className="font-display text-4xl sm:text-5xl xl:text-6xl leading-[1.05] font-black tracking-[-0.03em] text-secondary opacity-0 animate-fade-in-up animation-delay-100">
            <span className="block">
              Buy it. <span className="text-gradient-brand">Sell it.</span>
            </span>
            <span className="block">Right on campus.</span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed text-pretty opacity-0 animate-fade-in-up animation-delay-200">
            CarryMart is where students shop and sell everything from fashion
            and food to electronics, books, and beauty. Discover deals in reels,
            chat with sellers instantly, and pay safely with the CarryPay escrow
            wallet.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 opacity-0 animate-fade-in-up animation-delay-300">
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto shadow-glow hover:shadow-glow"
            >
              <Link href="#download">
                Get the app
                <ArrowRight className="size-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-secondary/30 w-full sm:w-auto"
            >
              <Link href="#sell">Start selling</Link>
            </Button>
          </div>

          {/* Stats */}
          <dl className="mt-12 grid grid-cols-3 divide-x divide-border/70 border-t border-border/70 pt-8 max-w-md mx-auto lg:mx-0 opacity-0 animate-fade-in-up animation-delay-400">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="px-2 sm:px-4 first:pl-0 text-center lg:text-left"
              >
                <dd className="font-display text-xl sm:text-2xl font-extrabold text-secondary tracking-tight">
                  {stat.value}
                </dd>
                <dt className="mt-1 text-xs sm:text-sm text-muted-foreground">
                  {stat.label}
                </dt>
              </div>
            ))}
          </dl>
        </div>

        {/* Right — phone mock */}
        <div className="relative flex justify-center lg:justify-end lg:pr-10 opacity-0 animate-scale-in animation-delay-300">
          {/* Soft brand glow behind the phone */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full bg-primary/10 blur-3xl pointer-events-none animate-pulse-glow" />

          <PhoneMock
            src="/media/shopper.mp4"
            poster="/media/shopper-poster.jpg"
          >
            {/* Bottom gradient so the chip reads clearly */}
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-secondary/60 to-transparent" />
          </PhoneMock>

          {/* Floating chips */}
          <div className="absolute top-10 -left-2 sm:left-4 lg:-left-6 bg-white rounded-2xl shadow-sharp-lg border border-border px-4 py-3 flex items-center gap-3 animate-float">
            <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center shrink-0">
              <Tag className="size-4 text-primary-foreground" strokeWidth={2.5} />
            </div>
            <div>
              <p className="font-display font-bold text-sm text-secondary leading-tight">Sneakers · GHS 250</p>
              <p className="text-xs text-muted-foreground leading-tight">Just listed near you</p>
            </div>
          </div>

          <div className="absolute bottom-12 -right-2 sm:right-4 lg:-right-4 bg-white rounded-2xl shadow-sharp-lg border border-border px-4 py-3 flex items-center gap-3 animate-float animation-delay-500">
            <div className="w-9 h-9 rounded-xl bg-secondary flex items-center justify-center shrink-0">
              <ShieldCheck className="size-4 text-white" strokeWidth={2.5} />
            </div>
            <div>
              <p className="font-display font-bold text-sm text-secondary leading-tight">Escrow protected</p>
              <p className="text-xs text-muted-foreground leading-tight">Released when you confirm</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero03;
