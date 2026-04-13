'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ShoppingBasket, HeartPulse, HardHat } from 'lucide-react';

const WhatWeDo: React.FC = () => {

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
      offset: 120
    });
  }, []);

  return (
    <>
      <section
        className="py-24 relative overflow-hidden"
        style={{
          backgroundImage: `url('/website-media/homepage/backgroundimage.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >

        <div className="container mx-auto px-4 relative z-10">

          {/* Heading */}
          <div className="text-center mb-16">
            <h2
              data-aos="fade-up"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#012060] font-bold mb-4"
            >
              What we <span className="text-idara-orange font-black">Do?</span>
            </h2>

            <p
              data-aos="fade-up"
              data-aos-delay="150"
              className="text-[1.5rem] text-gray-900 max-w-3xl mx-auto leading-relaxed"
            >
              Providing quality education through schools, colleges,
              technical centers, and IT institutes to break the cycle of
              poverty.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10 max-w-[350px] md:max-w-none mx-auto">

            {/* Card 1 */}
            <Link
              href="/projects/food-support-program"
              data-aos="zoom-in"
              data-aos-delay="100"
              className="bg-[#01b7c5] text-white p-8 lg:p-10 rounded-[30px] text-center transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl flex flex-col items-center relative overflow-hidden group no-underline h-full"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `radial-gradient(circle at 20px 20px, white 2px, transparent 2px)`,
                    backgroundSize: '30px 30px'
                  }}
                />
              </div>

              <div className="w-20 h-20 lg:w-24 lg:h-24 bg-white rounded-full flex items-center justify-center mb-5 lg:mb-6 text-idara-cyan shadow-lg relative z-10">
                <ShoppingBasket size={48} />
              </div>

              <h3 className="text-2xl sm:text-3xl font-black mb-4 relative z-10">
                Food Support
              </h3>

              <p className="text-[1.1rem] opacity-95 leading-relaxed relative z-10 text-[#012060]">
                Daily meals for our students and emergency food distributions to family in deep hungry.
              </p>
            </Link>

            {/* Card 2 */}
            <Link
              href="/projects/medical-center"
              data-aos="zoom-in"
              data-aos-delay="200"
              className="bg-[#01b7c5] text-white p-8 lg:p-10 rounded-[30px] text-center transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl flex flex-col items-center relative overflow-hidden group no-underline h-full"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `radial-gradient(circle at 20px 20px, white 2px, transparent 2px)`,
                    backgroundSize: '30px 30px'
                  }}
                />
              </div>

              <div className="w-20 h-20 lg:w-24 lg:h-24 bg-white rounded-full flex items-center justify-center mb-5 lg:mb-6 text-idara-cyan shadow-lg relative z-10">
                <HeartPulse size={48} />
              </div>

              <h3 className="text-2xl sm:text-3xl font-black mb-4 relative z-10">
                Healthcare
              </h3>

              <p className="text-[1.1rem] opacity-95 leading-relaxed relative z-10 text-[#012060]">
                Affordable medical services for communities with limited access to healthcare.
              </p>
            </Link>

            {/* Card 3 */}
            <Link
              href="/projects/disaster-relief-program"
              data-aos="zoom-in"
              data-aos-delay="300"
              className="bg-[#01b7c5] text-white p-8 lg:p-10 rounded-[30px] text-center transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl flex flex-col items-center relative overflow-hidden group no-underline h-full"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `radial-gradient(circle at 20px 20px, white 2px, transparent 2px)`,
                    backgroundSize: '30px 30px'
                  }}
                />
              </div>

              <div className="w-20 h-20 lg:w-24 lg:h-24 bg-white rounded-full flex items-center justify-center mb-5 lg:mb-6 text-idara-cyan shadow-lg relative z-10">
                <HardHat size={48} />
              </div>

              <h3 className="text-2xl sm:text-3xl font-black mb-4 relative z-10">
                Social Welfare & Relief
              </h3>

              <p className="text-[1.1rem] opacity-95 leading-relaxed relative z-10 text-[#012060]">
                Rapid response during disasters and continuous support for vulnerable families.
              </p>
            </Link>

          </div>
        </div>
      </section>

      {/* Bottom Image */}
      <div
        data-aos="fade-up"
        className="relative w-full h-[300px] md:h-[400px] lg:h-[500px]"
      >
        <img
          src="/website-media/homepage/seapraterimage.jpg"
          alt="What We Do Gallery"
          className="w-full h-full object-cover"
        />
      </div>
    </>
  );
};

export default WhatWeDo;