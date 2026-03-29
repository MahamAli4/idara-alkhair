'use client';

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero: React.FC = () => {
    return (
        <section className="pt-[180px] pb-[120px] bg-white overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center">
                    {/* Left Content Side */}
                    <div className="lg:w-1/2 mb-10 lg:mb-0 relative z-10">
                        <h1 className="hero-title font-bold">
                            Changing <span className="text-idara-orange font-black">Lives</span><br />
                            Today. Building a Better<br />
                            <span className="text-idara-orange font-black">Tomorrow.</span>
                        </h1>
                        <p className="text-[1.5rem] text-idara-navy opacity-80 mb-12 max-w-full">
                            For over 38 years, Idara Al-Khair Welfare Society has been serving humanity with compassion, transparency, and purpose. From educating children to feeding the hungry and providing healthcare to those who cannot afford it, we stand with those who need support the most.
                        </p>
                        <button className="btn-help-family">
                            Help a Family Today
                        </button>

                        {/* Cyan Triangle behind text area */}
                        <div className="hero-tri-cyan shadow-sm"></div>
                    </div>

                    {/* Right Graphic Side */}
                    <div className="lg:w-1/2 w-full mt-12 lg:mt-0 flex justify-center items-center">
                        <div className="relative w-full max-w-[550px] h-[550px] md:h-[650px]">

          
              {/* Main Image */}
              <img
                data-aos="zoom-in"
                data-aos-delay="800"
                src="/website media/Homepage/Homepage Picture.jpg"
                alt="Idara Al-Khair Students"
                className="absolute inset-0 w-full h-full object-contain z-30 transform scale-100"
              />

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;