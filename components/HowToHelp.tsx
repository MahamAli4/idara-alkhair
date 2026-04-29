'use client';

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Link from 'next/link';

const HowToHelp: React.FC = () => {

  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      easing: "ease-out-cubic",
      offset: 120
    });
  }, []);

  const helpOptions = [
    { title: "Donate", image: "/website-media/homepage/card01.jpg", href: "/donate" },
    { title: "Sponsor a Child", image: "/website-media/homepage/card02.jpeg", href: "/contact" },
    { title: "Volunteer", image: "/website-media/homepage/card03.jpeg", href: "/contact/volunteer-form" }
  ];

  return (
    <section className="bg-white pt-24 relative overflow-visible">

      {/* Heading */}
      <div className="container mx-auto px-4 sm:px-6 text-center mb-10 sm:mb-16">
        <h2
          data-aos="fade-up"
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#012060] mb-4 tracking-tight"
        >
          How You Can <span className="text-idara-orange">Help?</span>
        </h2>

        <p
          data-aos="fade-up"
          data-aos-delay="150"
          className="text-base sm:text-lg md:text-2xl text-gray-700 mx-auto font-medium px-2 sm:px-0"
        >
          Your support can <span className="font-bold text-[#012060]">change lives</span>, immediately and forever.
        </p>
      </div>

      {/* Cards */}
      <div className="container mx-auto px-4 sm:px-6 relative z-30 mb-16 sm:mb-20 md:-mb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-16 max-w-lg md:max-w-7xl mx-auto">

          {helpOptions.map((option, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 200}
              className="flex flex-col items-center group"
            >
              <div className="relative w-full aspect-3/4 border-8 sm:border-12 border-white shadow-xl sm:shadow-2xl overflow-hidden bg-white transition-all duration-500 hover:-translate-y-2 sm:hover:-translate-y-4 rounded-lg sm:rounded-none">

                <img
                  src={option.image}
                  alt={option.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Vibrant Blue Overlay - Matching Screenshot */}
                <div className="absolute inset-0 bg-idara-cyan/50 mix-blend-multiply transition-opacity group-hover:opacity-40"></div>
                <div className="absolute inset-0 bg-linear-to-t from-[#012060]/40 to-transparent opacity-60"></div>

                {/* Bottom Label/Button Area */}
                <div className="absolute bottom-0 left-0 right-0 p-1.5 sm:p-2 bg-white">
                  <Link 
                    href={option.href}
                    className="block w-full py-3 sm:py-4 bg-white text-[#012060] font-black text-lg sm:text-xl md:text-2xl uppercase tracking-tighter hover:text-idara-orange transition-all text-center no-underline border-2 border-transparent hover:border-idara-orange/20 rounded-sm"
                  >
                    {option.title}
                  </Link>
                </div>

              </div>
            </div>
          ))}

        </div>
      </div>

    </section>
  );
};

export default HowToHelp;