"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { useReducedMotion } from "@/lib/use-reduced-motion";

type PhoneMockProps = {
  /** Video played inside the phone screen. */
  src: string;
  poster?: string;
  className?: string;
  /** Optional overlay rendered on top of the screen (chips, gradients). */
  children?: React.ReactNode;
};

/**
 * A CSS phone frame with a looping muted video as the screen. Used for the
 * hero and CarryPay showcases instead of static screenshots. The clip is
 * decorative — the surrounding copy carries the meaning — so it is hidden from
 * assistive tech, and it holds on the poster frame under reduced motion.
 */
export const PhoneMock = ({ src, poster, className, children }: PhoneMockProps) => {
  const reducedMotion = useReducedMotion();

  return (
    <div
      className={cn(
        // isolate keeps the notch's z-10 inside the frame. Without it the notch
        // wins against the floating chips that sit alongside the phone, and on
        // phones the hero chip lands at exactly notch height.
        "relative isolate w-[270px] sm:w-[300px] rounded-[2.9rem] bg-secondary p-2.5 shadow-sharp-xl",
        className
      )}
    >
      <div className="relative aspect-[9/19] rounded-[2.35rem] overflow-hidden bg-secondary">
        <video
          key={reducedMotion ? "still" : "playing"}
          src={reducedMotion ? undefined : src}
          poster={poster}
          autoPlay={!reducedMotion}
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
          tabIndex={-1}
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Notch */}
        <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-24 h-6 bg-secondary rounded-full z-10" />
        {children}
      </div>
    </div>
  );
};
