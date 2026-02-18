'use client';

import React from 'react';

const WhoWeAre: React.FC = () => {
    return (
        <section className="bg-idara-navy relative z-10">
            <div className="container mx-auto ">
                {/* Main Section Container: Balanced split */}
                <div className="flex flex-col lg:flex-row items-stretch bg-idara-navy overflow-hidden rounded-[30px] shadow-2xl">
                    {/* Left Side: Image Content - Set to stretch and fill */}
                    <div className="lg:w-1/2 w-full relative min-h-[450px] lg:min-h-full">
                        <img
                            src="/images/whats.png"
                            alt="Who We Are - Students"
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                        />
                        {/* Subtle overlay to blend with navy theme if needed */}
                        <div className="absolute inset-0 bg-idara-navy/10 pointer-events-none"></div>
                    </div>

                    {/* Right Side: Text Content - Equal Width & Height */}
                    <div className="lg:w-1/2 w-full flex flex-col justify-center text-white p-8 lg:p-20">
                        <div className="max-w-full">

                            {/* Heading with Highlighted "We" */}
                            <h2 className="text-[3.5rem] lg:text-[4.8rem] font-black leading-[1.1] mb-8 tracking-tight">
                                Who <span className="text-idara-orange">We</span> Are?
                            </h2>

                            {/* Description Paragraph */}
                            <p className="text-[1.1rem] lg:text-[1.25rem] leading-relaxed mb-8 opacity-90 font-medium">
                                Idara Al-Khair Welfare Society is a trusted non-profit organization
                                working across Pakistan to uplift underprivileged communities. Since
                                1987, our work has focused on long-term solutions rather than
                                temporary relief. Ensuring dignity, opportunity, and self-reliance
                                for individuals and families.
                            </p>

                            {/* Thematic Quote */}
                            <p className="text-[1.1rem] lg:text-[1rem] italic font-semibold text-[#ffd033] mb-12 leading-snug">
                                "We believe charity should not only relieve pain, but also restore hope."
                            </p>

                            {/* High-Fidelity Stats Cards Grid */}
                            <div className="grid grid-cols-3 gap-4 lg:gap-6 mb-12">

                                {/* Years Experience Card - Cyan */}
                                <div className="bg-idara-cyan aspect-square flex flex-col items-center justify-center p-4 rounded-[12px] text-center shadow-lg transition-all hover:-translate-y-2 hover:shadow-idara-cyan/30">
                                    <h3 className="text-3xl lg:text-5xl font-black mb-1">38 +</h3>
                                    <p className="text-[0.8rem] lg:text-[1rem] font-bold uppercase tracking-wide">
                                        Years
                                    </p>
                                    <p className="text-[0.6rem] lg:text-[0.7rem] font-bold opacity-80 mt-1 uppercase leading-tight">
                                        of service
                                    </p>
                                </div>

                                {/* Individuals Supported Card - Orange */}
                                <div className="bg-idara-orange aspect-square flex flex-col items-center justify-center p-4 rounded-[12px] text-center shadow-lg transition-all hover:-translate-y-2 hover:shadow-idara-orange/30">
                                    <h3 className="text-3xl lg:text-5xl font-black mb-1">850 K</h3>
                                    <p className="text-[0.8rem] lg:text-[1rem] font-bold uppercase tracking-wide">
                                        People
                                    </p>
                                    <p className="text-[0.6rem] lg:text-[0.7rem] font-bold opacity-80 mt-1 uppercase leading-tight">
                                        supported
                                    </p>
                                </div>

                                {/* Students Card - Yellow */}
                                <div className="bg-idara-yellow aspect-square flex flex-col items-center justify-center p-4 rounded-[12px] text-center shadow-lg transition-all hover:-translate-y-2 hover:shadow-idara-yellow/30">
                                    <h3 className="text-3xl lg:text-5xl font-black mb-1">6000</h3>
                                    <p className="text-[0.8rem] lg:text-[1rem] font-bold uppercase tracking-wide">
                                        Students
                                    </p>
                                    <p className="text-[0.6rem] lg:text-[0.7rem] font-bold opacity-80 mt-1 uppercase leading-tight">
                                        benefiting
                                    </p>
                                </div>
                            </div>

                            {/* Full-width Welfare Bar */}
                            <div className="bg-[#a5c3f7] text-idara-navy py-8 px-10 rounded-[18px] text-center shadow-2xl relative overflow-hidden group">
                                {/* Decorative glow */}
                                <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>

                                <h4 className="text-[1.8rem] lg:text-[2.6rem] font-black leading-none relative z-10 italic">
                                    Multiple Welfare Programs
                                </h4>
                                <p className="text-[0.85rem] lg:text-[1.1rem] font-black opacity-70 uppercase tracking-[0.3em] mt-3 relative z-10">
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
