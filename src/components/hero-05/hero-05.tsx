"use client";

import React from "react";
import { ShieldCheck, Smartphone, Lock, ReceiptText, Check, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/ui/animated-section";
import { PhoneMock } from "@/components/ui/phone-mock";

const bullets = [
  {
    icon: ShieldCheck,
    title: "Held in escrow until you confirm",
    description:
      "Your money sits safely in CarryPay and is released to the seller only after you confirm the handover.",
  },
  {
    icon: Smartphone,
    title: "Top up & withdraw with mobile money",
    description:
      "Fund your wallet or cash out your sales straight to MoMo. No bank account needed.",
  },
  {
    icon: Lock,
    title: "PIN-protected wallet",
    description:
      "Every payment and withdrawal is locked behind your wallet PIN.",
  },
  {
    icon: ReceiptText,
    title: "Receipts for every deal",
    description:
      "Digital receipts you can view, share, and fall back on if anything goes wrong.",
  },
];

const CarryPaySection = () => {
  return (
    <section id="carrypay" className="w-full py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <div className="bg-secondary rounded-[2rem] md:rounded-[2.5rem] overflow-hidden">
            <div className="grid lg:grid-cols-2 items-center">
              {/* Left — content */}
              <div className="p-8 sm:p-10 md:p-14 lg:p-16">
                <p className="text-xs font-semibold text-primary uppercase tracking-[0.15em] mb-3">
                  CarryPay Wallet
                </p>
                <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
                  Pay like you&apos;re face to face
                </h2>
                <p className="text-white/70 text-base md:text-lg leading-relaxed mb-10 max-w-md">
                  Campus deals used to run on trust alone. CarryPay adds an
                  escrow wallet in the middle, so buyers and sellers both walk
                  away safe.
                </p>

                <div className="space-y-6">
                  {bullets.map((bullet) => (
                    <div key={bullet.title} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                        <bullet.icon className="size-5 text-primary" strokeWidth={2.25} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white leading-snug">
                          {bullet.title}
                        </h3>
                        <p className="text-sm text-white/70 leading-relaxed mt-1">
                          {bullet.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-4">
                  <Button asChild size="lg" className="w-full sm:w-auto">
                    <Link href="#download">
                      Get the app
                      <ArrowRight className="size-5" />
                    </Link>
                  </Button>
                  <p className="text-sm text-white/60">
                    Free to set up. No card required.
                  </p>
                </div>
              </div>

              {/* Right — phone mock */}
              <div className="relative flex justify-center py-12 lg:py-16 px-8">
                {/* Brand glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px] rounded-full bg-primary/20 blur-3xl pointer-events-none" />

                <PhoneMock
                  src="/media/payments.mp4"
                  poster="/media/payments-poster.jpg"
                >
                  <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-secondary/70 to-transparent" />
                </PhoneMock>

                {/* Escrow status chip */}
                <div className="absolute bottom-20 lg:bottom-24 left-1/2 -translate-x-1/2 sm:translate-x-6 bg-white rounded-2xl shadow-sharp-xl px-5 py-4 flex items-center gap-3.5 w-max">
                  <div className="w-11 h-11 rounded-xl bg-primary flex items-center justify-center shrink-0">
                    <Check className="size-5 text-primary-foreground" strokeWidth={3} />
                  </div>
                  <div>
                    <p className="font-display font-extrabold text-secondary leading-tight">
                      GHS 120 released
                    </p>
                    <p className="text-sm text-muted-foreground leading-tight">
                      Delivery confirmed by buyer
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default CarryPaySection;
