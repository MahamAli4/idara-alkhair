'use client';

import React from 'react';

const RealStories: React.FC = () => {
    return (
        <section className="relative min-h-[700px] flex items-center py-20 overflow-hidden bg-[#012060]">

            {/* Background Image - The dark collage background */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/website media/Homepage/Background Image 02.jpg"
                    alt="Background Collage"
                    className="w-full h-full object-cover opacity-100"
                />
                {/* Overlay to ensure text readability if needed
                <div className="absolute inset-0 bg-[#012060]/40"></div> */}
            </div>

            <div className="container mx-auto px-6 relative z-10 p-10">
                <div className="flex flex-col lg:flex-row items-center">

                    {/* Left SIDE: CONTENT */}
                    <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
                        <div className="max-w-xl">
                            <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-white uppercase tracking-tighter mb-0 leading-tight">
                                Real Stories
                            </h2>
                            <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-[#f18e1d] leading-[0.85] uppercase tracking-tighter mb-12 md:mb-16">
                                Real Impact.
                            </h2>

                            <div className="space-y-12">
                                <div className="max-w-lg">
                                    <p className="text-xl md:text-2xl text-white font-medium leading-tight mb-3">
                                        "Because of Idara Al-Khair, my children are studying and dreaming again."
                                    </p>
                                    <p className="text-[#f7b467] font-bold text-lg md:text-xl italic">
                                        Parent of a sponsored student.
                                    </p>
                                </div>

                                <div className="max-w-lg">
                                    <p className="text-xl md:text-2xl text-white font-medium leading-tight mb-3">
                                        "Your support reached us when we had nothing left."
                                    </p>
                                    <p className="text-[#f7b467] font-bold text-lg md:text-xl italic">
                                        Disaster Relief Beneficiary
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full lg:w-1/2 flex justify-center items-center">
                        <div className="relative w-full max-w-[1200px] flex items-center justify-center transform scale-110 lg:scale-[1.2]">

                            {/* Huge Blue Glow behind map */}
                            <div className="absolute inset-0 bg-blue-500/15 blur-[150px] rounded-full"></div>

                            {/* The SVG Container with proper sizing */}
                            <img
                                src="/website media/Homepage/pakistan map.png"
                                alt="Pakistan Map Collage"
                                className="w-full h-auto drop-shadow-[0_40px_60px_rgba(0,0,0,0.6)]"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default RealStories;
