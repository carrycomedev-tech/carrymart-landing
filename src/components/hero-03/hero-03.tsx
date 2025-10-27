import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Bike, Truck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { RegistrationModal } from "@/components/registration-modal";

const Hero03 = () => {
  return (
    <div id="hero" className="min-h-screen w-full flex flex-col gap-16 items-center justify-center px-6 py-30">
      <div className="text-center max-w-3xl">
        <Badge
          variant="secondary"
          className="rounded-full py-1 border-border"
          asChild
        >
          <Link href="#">
          Coming Soon v1.0.0 (beta) <ArrowUpRight className="ml-1 size-4" />
          </Link>
        </Badge>
        <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl text-secondary lg:text-7xl md:leading-[1.2] font-bold tracking-tighter">
          Deliver. Ride. Earn <br /> Right on Campus.
        </h1>
        <p className="mt-6 md:text-lg">
         Turn your daily campus rides into real rewards. Whether you’re heading to class or grabbing lunch, help fellow students get what they need — and earn as you go.
        </p>
        <div className="mt-10 flex items-center justify-center gap-4">
          <RegistrationModal>
            <Button size="lg" className="rounded-full text-base">
              Become a Courier <Truck className="h-5! w-5!" />
            </Button>
          </RegistrationModal>
          <Button
            variant="outline"
            size="lg"
            className="rounded-full text-base shadow-none"
          >
            <Bike className="h-5! w-5!" /> Become a Rider
          </Button>
        </div>
      </div>
      <div className="w-full max-w-(--breakpoint-xl) mx-auto aspect-video bg-accent rounded-xl relative overflow-hidden">
        <Image 
          src="/assets/hero-image.png"
          alt="CarryCome delivery service"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default Hero03;
