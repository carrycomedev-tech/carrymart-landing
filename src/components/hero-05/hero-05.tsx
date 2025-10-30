import React from "react";
import { Bike, Zap, Package, Star } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="w-full bg-[#FFCC00]/5 py-20 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Side - Text */}
        <div>
          <h2 className="font-urbanist text-3xl md:text-4xl font-extrabold text-[#080231] mb-6">
            Built for <span className="text-[#FFCC00]">Campus Life</span>
          </h2>

          <p className="font-outfit text-lg text-[#080231]/80 leading-relaxed mb-6">
            CarryCome started because we understood the struggle — racing between classes, missing meals, waiting for deliveries that never fit your schedule.
          </p>

          <p className="font-outfit text-lg text-[#080231]/80 leading-relaxed mb-6">
            We're a student-focused delivery platform designed specifically for campus life. Unlike city-wide services, we understand University of Ghana's unique challenges: gate restrictions, building access codes, and the need for fast, affordable delivery that works around your academic schedule.
          </p>

          <p className="font-outfit text-lg text-[#080231]/80 leading-relaxed mb-6">
            Our student couriers aren't just delivering packages — they're fellow students earning income while helping their peers. They know the shortcuts through campus, the fastest routes to every hall, and exactly how to navigate when you need something urgently.
          </p>

          <p className="font-outfit text-lg text-[#080231]/80 leading-relaxed mb-8">
            From late-night study sessions to early morning exams, we're here to make campus life easier. One app. Multiple categories. Delivered by students who get it.
          </p>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center gap-2">
              <Bike className="size-5 text-[#FFCC00]" />
              <span className="font-urbanist text-sm font-semibold text-[#080231]">20+ Student Couriers</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="size-5 text-[#FFCC00]" />
              <span className="font-urbanist text-sm font-semibold text-[#080231]">15-20 Min Average Delivery</span>
            </div>
            <div className="flex items-center gap-2">
              <Package className="size-5 text-[#FFCC00]" />
              <span className="font-urbanist text-sm font-semibold text-[#080231]">4 Delivery Categories</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="size-5 text-[#FFCC00]" />
              <span className="font-urbanist text-sm font-semibold text-[#080231]">4.8/5 Average Rating</span>
            </div>
          </div>
        </div>

        {/* Right Side - Illustration or Image */}
        <div
          className="w-full h-[500px] lg:h-[600px] rounded-2xl bg-cover bg-center shadow-lg"
          style={{
            backgroundImage:
              "url('/assets/blog-community.png')",
          }}
        />
      </div>
    </section>
  );
};

export default AboutSection;
