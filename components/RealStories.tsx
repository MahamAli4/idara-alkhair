'use client';

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const RealStories: React.FC = () => {

  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      easing: "ease-out-cubic",
      offset: 120
    });
  }, []);

  return (
    <section className="relative min-h-[600px] sm:min-h-[700px] flex items-center py-16 sm:py-20 overflow-hidden bg-[#012060]">

      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/website-media/homepage/backgroundimage02.jpg"
          alt="Background Collage"
          className="w-full h-full object-cover opacity-100"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">

          {/* LEFT CONTENT */}
          <div
            data-aos="fade-right"
            className="w-full lg:w-1/2 mb-12 lg:mb-0 text-center lg:text-left"
          >
            <div className="max-w-xl mx-auto lg:mx-0">

              <h2
                data-aos="fade-up"
                className="text-3xl xs:text-4xl md:text-6xl lg:text-7xl font-black text-white uppercase tracking-tighter mb-0 leading-tight"
              >
                Real Stories
              </h2>

              <h2
                data-aos="fade-up"
                data-aos-delay="150"
                className="text-3xl xs:text-4xl md:text-6xl lg:text-7xl font-black text-[#f18e1d] leading-[0.85] uppercase tracking-tighter mb-8 sm:mb-16"
              >
                Real Impact.
              </h2>

              <div className="space-y-8 sm:space-y-12">

                <div
                  data-aos="fade-up"
                  data-aos-delay="250"
                  className="max-w-lg mx-auto lg:mx-0"
                >
                  <p className="text-lg sm:text-xl md:text-2xl text-white font-medium leading-tight mb-3">
                    "Because of Idara Al-Khair, my children are studying and dreaming again."
                  </p>

                  <p className="text-[#f7b467] font-bold text-base sm:text-lg md:text-xl italic">
                    Parent of a sponsored student.
                  </p>
                </div>

                <div
                  data-aos="fade-up"
                  data-aos-delay="350"
                  className="max-w-lg mx-auto lg:mx-0"
                >
                  <p className="text-lg sm:text-xl md:text-2xl text-white font-medium leading-tight mb-3">
                    "Your support reached us when we had nothing left."
                  </p>

                  <p className="text-[#f7b467] font-bold text-base sm:text-lg md:text-xl italic">
                    Disaster Relief Beneficiary
                  </p>
                </div>

              </div>
            </div>
          </div>

          {/* RIGHT MAP */}
          <div
            data-aos="zoom-in"
            className="w-full lg:w-1/2 flex justify-center items-center"
          >
            <div className="relative w-full max-w-[650px] lg:max-w-[1300px] flex items-center justify-center transform scale-100 sm:scale-110 lg:scale-[1.15] lg:translate-x-10">

              {/* Glow */}
              <div className="absolute inset-0 bg-blue-500/10 blur-[120px] sm:blur-[180px] rounded-full"></div>

              {/* Map Image */}
              <img
                src="/website-media/homepage/pakistanmap.png"
                alt="Pakistan Map Collage"
                className="w-full h-auto drop-shadow-[0_30px_60px_rgba(0,0,0,0.4)] lg:drop-shadow-[0_60px_90px_rgba(0,0,0,0.5)]"
              />

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default RealStories;