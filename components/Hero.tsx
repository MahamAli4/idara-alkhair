'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero: React.FC = () => {
    return (
        <section className="pt-32 lg:pt-[180px] pb-16 lg:pb-[120px] bg-white overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center">
                    {/* Left Content Side */}
                    <div className="lg:w-1/2 mb-10 lg:mb-0 relative z-40">
                        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-[4.5rem] font-bold leading-[1.1] text-idara-navy mb-6 tracking-tight">
                            Changing <span className="text-idara-orange font-black">Lives</span><br className="hidden md:block" />
                            Today. Building a Better <br className="hidden md:block" />
                            <span className="text-idara-orange font-black">Tomorrow.</span>
                        </h1>
                        <p className="text-base sm:text-lg md:text-xl lg:text-[1.5rem] lg:leading-relaxed text-idara-navy opacity-80 mb-8 md:mb-12 max-w-full">
                            For over 38 years, Idara Al-Khair Welfare Society has been serving humanity with compassion, transparency, and purpose. From educating children to feeding the hungry and providing healthcare to those who cannot afford it, we stand with those who need support the most.
                        </p>
                        <Link href="/donate" className="btn-help-family no-underline inline-block">
                            Help a Family Today
                        </Link>

                        {/* Cyan Triangle behind text area */}
                        <div className="hero-tri-cyan shadow-sm"></div>
                    </div>

                    {/* Right Graphic Side */}
                    <div className="lg:w-1/2 w-full mt-12 lg:mt-0 flex justify-center items-center">
                        <div className="relative w-full max-w-[550px] aspect-square lg:h-[650px] mx-auto">

              {/* Orange Shape */}
              {/* <div
                data-aos="zoom-in"
                data-aos-delay="100"
                className="absolute top-[10%] left-[1%] w-[50%] h-[75%] bg-[#f37021] z-0"
                style={{ borderRadius: '0px 150px 150px 150px' }}
              ></div> */}

              {/* Yellow Pill */}
              {/* <div
                data-aos="zoom-in"
                data-aos-delay="200"
                className="absolute top-[20%] right-[3%] w-[42%] h-[75%] bg-[#ffc20e] rounded-full z-0"
              ></div> */}

              {/* Navy Pill */}
              {/* <div
                data-aos="fade-left"
                data-aos-delay="300"
                className="absolute top-[22%] right-[-2%] w-[28%] h-14 bg-[#012060] rounded-full z-10"
              ></div> */}

              {/* Cyan Circle */}
              {/* <div
                data-aos="zoom-in"
                data-aos-delay="350"
                className="absolute top-[20%] left-[44%] w-14 h-14 bg-idara-cyan rounded-full z-20 shadow-sm"
              ></div> */}

              {/* Dark Circle */}
              {/* <div
                data-aos="zoom-in"
                data-aos-delay="400"
                className="absolute -bottom-6 left-[32%] w-28 h-28 bg-[#012060] rounded-full z-20"
              ></div> */}

              {/* Cyan Triangle */}
              {/* <div
                data-aos="fade-right"
                data-aos-delay="450"
                className="absolute top-[55%] -left-10 w-16 h-16 bg-idara-cyan z-20"
                style={{ clipPath: 'polygon(0 0, 0% 100%, 100% 100%)' }}
              ></div> */}

              {/* Main Image */}
              <img
                data-aos="zoom-in"
                data-aos-delay="800"
                src="/website-media/homepage/homepagepicture.jpg"
                alt="Idara Al-Khair Students"
                className="absolute inset-0 w-full h-full object-contain z-30 transform scale-[1.15] sm:scale-125 lg:scale-150 origin-bottom lg:origin-center"
              />

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;