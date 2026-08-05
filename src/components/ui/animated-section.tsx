"use client";

import React from "react";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";
import { useReducedMotion } from "@/lib/use-reduced-motion";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  duration?: number;
  once?: boolean;
}

export const AnimatedSection = ({
  children,
  className,
  delay = 0,
  direction = "up",
  duration = 0.6,
  once = true,
}: AnimatedSectionProps) => {
  const reducedMotion = useReducedMotion();
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: once,
  });
  const shown = inView || reducedMotion;

  const getTransform = () => {
    switch (direction) {
      case "up":
        return "translateY(40px)";
      case "down":
        return "translateY(-40px)";
      case "left":
        return "translateX(40px)";
      case "right":
        return "translateX(-40px)";
      default:
        return "none";
    }
  };

  return (
    <div
      ref={ref}
      className={cn(className)}
      style={{
        opacity: shown ? 1 : 0,
        transform: shown ? "none" : getTransform(),
        transition: reducedMotion
          ? undefined
          : `opacity ${duration}s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s, transform ${duration}s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
      }}
    >
      {children}
    </div>
  );
};

interface AnimatedTextProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span" | "div";
}

export const AnimatedText = ({
  children,
  className,
  delay = 0,
  as: Component = "div",
}: AnimatedTextProps) => {
  const reducedMotion = useReducedMotion();
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const shown = inView || reducedMotion;

  return (
    <Component
      ref={ref}
      className={cn(className)}
      style={{
        opacity: shown ? 1 : 0,
        transform: shown ? "none" : "translateY(20px)",
        transition: reducedMotion
          ? undefined
          : `opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s, transform 0.5s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
      }}
    >
      {children}
    </Component>
  );
};

interface StaggerChildrenProps {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
  baseDelay?: number;
}

export const StaggerChildren = ({
  children,
  className,
  staggerDelay = 0.1,
  baseDelay = 0,
}: StaggerChildrenProps) => {
  const reducedMotion = useReducedMotion();
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const shown = inView || reducedMotion;

  return (
    <div ref={ref} className={cn(className)}>
      {React.Children.map(children, (child, index) => (
        <div
          style={{
            opacity: shown ? 1 : 0,
            transform: shown ? "none" : "translateY(30px)",
            transition: reducedMotion
              ? undefined
              : `opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1) ${baseDelay + index * staggerDelay}s, transform 0.5s cubic-bezier(0.16, 1, 0.3, 1) ${baseDelay + index * staggerDelay}s`,
          }}
        >
          {child}
        </div>
      ))}
    </div>
  );
};
