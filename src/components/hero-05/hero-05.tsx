import React from "react";
import { Target, Globe, Zap } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="w-full bg-[#FFCC00]/5 py-20 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Side - Text */}
        <div>
          <h2 className="font-urbanist text-3xl md:text-4xl font-extrabold text-[#080231] mb-6">
            About <span className="text-[#FFCC00]">CarryCome</span>
          </h2>

          <p className="font-outfit text-lg text-[#080231]/80 leading-relaxed mb-6">
            CarryCome is more than just a delivery app — it’s a student-powered
            movement that connects campus life with speed, reliability, and
            opportunity. Our goal is to make everyday errands and deliveries
            effortless for students by leveraging the community around them.
          </p>

          <p className="font-outfit text-lg text-[#080231]/80 leading-relaxed mb-6">
            Whether it’s food, documents, or small parcels, CarryCome empowers
            students to deliver what matters most — while earning rewards and
            strengthening campus connections.
          </p>

          <div className="space-y-3">
            <div>
              <h3 className="font-urbanist text-xl font-semibold text-[#080231] flex items-center gap-2">
                <Target className="size-5 text-[#FFCC00]" />
                Our Mission
              </h3>
              <p className="font-outfit text-[#080231]/75 leading-relaxed">
                To make campus life easier and more connected through
                fast, reliable, and rewarding peer-to-peer delivery.
              </p>
            </div>

            <div>
              <h3 className="font-urbanist text-xl font-semibold text-[#080231] flex items-center gap-2">
                <Globe className="size-5 text-[#FFCC00]" />
                Our Vision
              </h3>
              <p className="font-outfit text-[#080231]/75 leading-relaxed">
                To create a collaborative ecosystem where students support each
                other’s daily needs through technology and trust.
              </p>
            </div>

            <div>
              <h3 className="font-urbanist text-xl font-semibold text-[#080231] flex items-center gap-2">
                <Zap className="size-5 text-[#FFCC00]" />
                Our Commitment
              </h3>
              <p className="font-outfit text-[#080231]/75 leading-relaxed">
                We’re dedicated to reliability, student empowerment, and
                delivering with care — every time, everywhere on campus.
              </p>
            </div>
          </div>
        </div>

        {/* Right Side - Illustration or Image */}
        <div
          className="w-full h-[400px] lg:h-[500px] rounded-2xl bg-cover bg-center shadow-lg"
          style={{
            backgroundImage:
              "url('/assets/about-carrycome-3d.png')",
          }}
        />
      </div>
    </section>
  );
};

export default AboutSection;
