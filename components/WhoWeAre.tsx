'use client';

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const WhoWeAre: React.FC = () => {

    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,
            easing: "ease-out-cubic",
            offset: 120
        });
    }, []);

    const currentYear = new Date().getFullYear();
    const yearsOfService = currentYear - 1987;

    return (
        <section className="bg-idara-navy relative z-10 py-10 lg:py-0">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                
                <div className="flex flex-col lg:flex-row items-stretch bg-idara-navy overflow-hidden rounded-3xl lg:rounded-[30px] shadow-2xl">

                    {/* Left Image */}
                    <div 
                        data-aos="fade-right"
                        className="lg:w-1/2 w-full relative min-h-[350px] sm:min-h-[450px] lg:min-h-full"
                    >
                        <img
                            src="/website-media/homepage/centerimage.jpg"
                            alt="Who We Are - Students"
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-idara-navy/10 pointer-events-none"></div>
                    </div>

                    {/* Right Text Content */}
                    <div 
                        data-aos="fade-left"
                        className="lg:w-1/2 w-full flex flex-col justify-center text-white p-6 sm:p-8 lg:p-12"
                    >
                        <div className="max-w-full">

                            {/* Heading */}
                            <h2 
                                data-aos="fade-up"
                                data-aos-delay="100"
                                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-5 tracking-tight"
                            >
                                Who <span className="text-idara-orange font-black">We</span> Are?
                            </h2>

                            {/* Paragraph */}
                            <p 
                                data-aos="fade-up"
                                data-aos-delay="200"
                                className="text-base sm:text-lg lg:text-[1.25rem] leading-relaxed mb-6 opacity-90 font-medium"
                            >
                                Idara Al-Khair Welfare Society is a trusted non-profit organization
                                working across Pakistan to uplift underprivileged communities. Since
                                1987, our work has focused on long-term solutions rather than
                                temporary relief. Ensuring dignity, opportunity, and self-reliance
                                for individuals and families.
                            </p>

                            {/* Quote */}
                            <p 
                                data-aos="fade-up"
                                data-aos-delay="300"
                                className="text-base sm:text-lg lg:text-[1.25rem] italic font-semibold text-[#ffd033] mb-8 lg:mb-12 leading-snug"
                            >
                                "We believe charity should not only relieve pain, but also restore hope."
                            </p>

                            {/* Stats Grid */}
                            <div 
                                data-aos="zoom-in"
                                data-aos-delay="400"
                                className="grid grid-cols-3 gap-3 sm:gap-4 lg:gap-6 mb-8 lg:mb-10"
                            >

                                <div className="bg-idara-cyan aspect-square flex flex-col items-center justify-center p-2 sm:p-4 rounded-[12px] text-center shadow-lg transition-all hover:-translate-y-2 hover:shadow-idara-cyan/30">
                                    <h3 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-black">{yearsOfService} +</h3>
                                    <p className="text-[10px] xs:text-[12px] sm:text-base lg:text-[1.2rem] font-bold uppercase tracking-wide">
                                        Years
                                    </p>
                                    <p className="hidden xs:block text-[8px] sm:text-[10px] lg:text-[0.7rem] font-bold opacity-80 mt-1 uppercase leading-tight text-black">
                                        of continuous <br className="hidden sm:block" /> service
                                    </p>
                                </div>

                                <div className="bg-idara-orange aspect-square flex flex-col items-center justify-center p-2 sm:p-4 rounded-[12px] text-center shadow-lg transition-all hover:-translate-y-2 hover:shadow-idara-orange/30">
                                    <h3 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-black">850 K</h3>
                                    <p className="text-[10px] xs:text-[12px] sm:text-base lg:text-[1.2rem] font-bold uppercase tracking-wide">
                                        Lives
                                    </p>
                                    <p className="hidden xs:block text-[8px] sm:text-[10px] lg:text-[0.7rem] text-black font-bold opacity-80 mt-1 uppercase leading-tight">
                                        supported
                                    </p>
                                </div>

                                <div className="bg-idara-yellow aspect-square flex flex-col items-center justify-center p-2 sm:p-4 rounded-[12px] text-center shadow-lg transition-all hover:-translate-y-2 hover:shadow-idara-yellow/30">
                                    <h3 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-black">6000</h3>
                                    <p className="text-[10px] xs:text-[12px] sm:text-base lg:text-[1.2rem] font-bold uppercase tracking-wide">
                                        Students
                                    </p>
                                    <p className="hidden xs:block text-[8px] sm:text-[10px] lg:text-[0.7rem] text-black font-bold opacity-80 mt-1 uppercase leading-tight">
                                        currently <br className="hidden sm:block" /> benefiting
                                    </p>
                                </div>
                            </div>

                            {/* Bottom Bar */}
                            <div 
                                data-aos="fade-up"
                                data-aos-delay="500"
                                className="bg-[#a5c3f7] text-white py-6 lg:py-8 px-6 lg:px-10 rounded-[18px] text-center shadow-2xl relative overflow-hidden group"
                            >
                                <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>

                                <h4 className="text-lg sm:text-xl md:text-3xl lg:text-4xl font-black leading-tight relative z-10 italic">
                                    Multiple Welfare Programs
                                </h4>

                                <p className="text-[8px] sm:text-[10px] lg:text-[0.9rem] font-black opacity-70 uppercase tracking-[0.15em] mt-1 relative z-10 text-black">
                                    OPERATING NATIONWIDE
                                </p>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default WhoWeAre;