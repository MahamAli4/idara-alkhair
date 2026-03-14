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

    return (
        <section className="bg-idara-navy relative z-10">
            <div className="container mx-auto ">
                
                <div className="flex flex-col lg:flex-row items-stretch bg-idara-navy overflow-hidden rounded-[30px] shadow-2xl">

                    {/* Left Image */}
                    <div 
                        data-aos="fade-right"
                        className="lg:w-1/2 w-full relative min-h-[450px] lg:min-h-full"
                    >
                        <img
                            src="/website media/Homepage/Center Image.jpg"
                            alt="Who We Are - Students"
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-idara-navy/10 pointer-events-none"></div>
                    </div>

                    {/* Right Text Content */}
                    <div 
                        data-aos="fade-left"
                        className="lg:w-1/2 w-full flex flex-col justify-center text-white p-8 lg:p-12"
                    >
                        <div className="max-w-full">

<<<<<<< HEAD
                            {/* Heading with Highlighted "We" */}
                            <h2 className="text-4xl md:text-5xl lg:text-[4.5rem] font-bold leading-[1.1] mb-5 tracking-tight">
                                Who <span className="text-idara-orange font-black">We</span> Are?
                            </h2>

                            {/* Description Paragraph */}
                            <p className="text-base md:text-[1.1rem] lg:text-[1.25rem] leading-relaxed mb-5 opacity-90 font-medium">
=======
                            {/* Heading */}
                            <h2 
                                data-aos="fade-up"
                                data-aos-delay="100"
                                className="text-[3.5rem] lg:text-[4.5rem] font-bold leading-[1.1] mb-5 tracking-tight"
                            >
                                Who <span className="text-idara-orange font-black">We</span> Are?
                            </h2>

                            {/* Paragraph */}
                            <p 
                                data-aos="fade-up"
                                data-aos-delay="200"
                                className="text-[1.1rem] lg:text-[1.25rem] leading-relaxed mb-5 opacity-90 font-medium"
                            >
>>>>>>> ffb34603a41677c9d7ebf3cb37c9c094e6ea9a10
                                Idara Al-Khair Welfare Society is a trusted non-profit organization
                                working across Pakistan to uplift underprivileged communities. Since
                                1987, our work has focused on long-term solutions rather than
                                temporary relief. Ensuring dignity, opportunity, and self-reliance
                                for individuals and families.
                            </p>

<<<<<<< HEAD
                            {/* Thematic Quote */}
                            <p className="text-base md:text-[1.1rem] lg:text-[1.25rem] italic font-semibold text-[#ffd033] mb-8 md:mb-12 leading-snug">
                                "We believe charity should not only relieve pain, but also restore hope."
                            </p>

                            {/* High-Fidelity Stats Cards Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6 mb-8 md:mb-5">

                                {/* Years Experience Card - Cyan */}
                                <div className="bg-idara-cyan aspect-square flex flex-col items-center justify-center p-2 sm:p-4 rounded-[12px] text-center shadow-lg transition-all hover:-translate-y-2 hover:shadow-idara-cyan/30">
                                    <h3 className="text-3xl sm:text-2xl lg:text-4xl font-black ">38 +</h3>
                                    <p className="text-xs sm:text-[0.8rem] lg:text-[1.5rem] font-bold uppercase tracking-wide">
=======
                            {/* Quote */}
                            <p 
                                data-aos="fade-up"
                                data-aos-delay="300"
                                className="text-[1.1rem] lg:text-[1.25rem] italic font-semibold text-[#ffd033] mb-12 leading-snug"
                            >
                                "We believe charity should not only relieve pain, but also restore hope."
                            </p>

                            {/* Stats Grid */}
                            <div 
                                data-aos="zoom-in"
                                data-aos-delay="400"
                                className="grid grid-cols-3 gap-4 lg:gap-6 mb-5"
                            >

                                <div className="bg-idara-cyan aspect-square flex flex-col items-center justify-center p-4 rounded-[12px] text-center shadow-lg transition-all hover:-translate-y-2 hover:shadow-idara-cyan/30">
                                    <h3 className="text-2xl lg:text-4xl font-black ">38 +</h3>
                                    <p className="text-[0.8rem] lg:text-[1.5rem] font-bold uppercase tracking-wide">
>>>>>>> ffb34603a41677c9d7ebf3cb37c9c094e6ea9a10
                                        Years
                                    </p>
                                    <p className="text-[10px] sm:text-[0.6rem] lg:text-[0.7rem] font-bold opacity-80 mt-1 uppercase leading-tight text-black">
                                        of continuous <br className="hidden sm:block" /> service
                                    </p>
                                </div>

<<<<<<< HEAD
                                {/* Individuals Supported Card - Orange */}
                                <div className="bg-idara-orange aspect-square flex flex-col items-center justify-center p-2 sm:p-4 rounded-[12px] text-center shadow-lg transition-all hover:-translate-y-2 hover:shadow-idara-orange/30">
                                    <h3 className="text-3xl sm:text-2xl lg:text-4xl font-black">850 K</h3>
                                    <p className="text-xs sm:text-[0.8rem] lg:text-[1rem] font-bold uppercase tracking-wide">
=======
                                <div className="bg-idara-orange aspect-square flex flex-col items-center justify-center p-4 rounded-[12px] text-center shadow-lg transition-all hover:-translate-y-2 hover:shadow-idara-orange/30">
                                    <h3 className="text-2xl lg:text-4xl font-black">850 K</h3>
                                    <p className="text-[0.8rem] lg:text-[1rem] font-bold uppercase tracking-wide">
>>>>>>> ffb34603a41677c9d7ebf3cb37c9c094e6ea9a10
                                        Individuals
                                    </p>
                                    <p className="text-[10px] sm:text-[0.6rem] lg:text-[0.7rem] text-black font-bold opacity-80 mt-1 uppercase leading-tight">
                                        supported
                                    </p>
                                </div>

<<<<<<< HEAD
                                {/* Students Card - Yellow */}
                                <div className="bg-idara-yellow aspect-square flex flex-col items-center justify-center p-2 sm:p-4 rounded-[12px] text-center shadow-lg transition-all hover:-translate-y-2 hover:shadow-idara-yellow/30">
                                    <h3 className="text-3xl sm:text-2xl lg:text-4xl font-black mb-1">6000</h3>
                                    <p className="text-xs sm:text-[0.8rem] lg:text-[1rem] font-bold uppercase tracking-wide">
=======
                                <div className="bg-idara-yellow aspect-square flex flex-col items-center justify-center p-4 rounded-[12px] text-center shadow-lg transition-all hover:-translate-y-2 hover:shadow-idara-yellow/30">
                                    <h3 className="text-2xl lg:text-4xl font-black mb-1">6000</h3>
                                    <p className="text-[0.8rem] lg:text-[1rem] font-bold uppercase tracking-wide">
>>>>>>> ffb34603a41677c9d7ebf3cb37c9c094e6ea9a10
                                        Students
                                    </p>
                                    <p className="text-[10px] sm:text-[0.6rem] lg:text-[0.7rem] text-black font-bold opacity-80 mt-1 uppercase leading-tight">
                                        currently <br className="hidden sm:block" /> benefiting
                                    </p>
                                </div>
                            </div>

<<<<<<< HEAD
                            {/* Full-width Welfare Bar */}
                            <div className="bg-[#a5c3f7] text-white py-6 md:py-8 px-6 md:px-10 rounded-[18px] text-center shadow-2xl relative overflow-hidden group">
                                {/* Decorative glow */}
=======
                            {/* Bottom Bar */}
                            <div 
                                data-aos="fade-up"
                                data-aos-delay="500"
                                className="bg-[#a5c3f7] text-white py-8 px-10 rounded-[18px] text-center shadow-2xl relative overflow-hidden group"
                            >
>>>>>>> ffb34603a41677c9d7ebf3cb37c9c094e6ea9a10
                                <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>

                                <h4 className="text-xl md:text-[1.1rem] lg:text-[2.1rem] font-black leading-tight relative z-10 italic">
                                    Multiple Welfare Programs
                                </h4>
<<<<<<< HEAD
                                <p className="text-xs sm:text-[0.6rem] lg:text-[0.9rem] font-black opacity-70 uppercase tracking-[0.1em] sm:tracking-[0.15em] mt-2 relative z-10 text-black">
=======

                                <p className="text-[0.6rem] lg:text-[0.9rem] font-black opacity-70 uppercase tracking-[0.15em] mt-1 relative z-10 text-black">
>>>>>>> ffb34603a41677c9d7ebf3cb37c9c094e6ea9a10
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