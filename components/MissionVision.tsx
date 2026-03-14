import React from 'react';

const MissionVisionValues = () => {
    return (
        <>
            <section className="relative py-24 overflow-hidden min-h-[800px] flex items-center">
                {/* Grayscale Background Student Photo - High Visibility */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="/website media/About us/Background Image.jpg"
                        alt="Students background"
                        className="w-full h-full object-cover grayscale opacity-100"
                    />
                    {/* Light gray overlay to soften the image slightly while keeping it clear
                    <div className="absolute inset-0 bg-gray-200/30"></div> */}
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    {/* Mission and Vision Boxes - Exact Colors and Layout */}
                    <div className="flex flex-col md:flex-row gap-0 w-full mb-20 overflow-hidden shadow-2xl">
                        {/* Mission Box (Warm Orange) */}
                        <div className="flex-1 bg-[#ec7c2b]/70 p-7 md:p-12 text-white text-center flex flex-col justify-center items-center">
                            <h2 className="text-5xl md:text-7xl font-bold mb-5 tracking-tighter">Mission</h2>
                            <p className="text-xl md:text-2xl font-medium leading-relaxed ">
                                A society where every individual has access to education, healthcare, food, and a dignified life.
                            </p>
                        </div>

                        {/* Vision Box (Deep Navy) */}
                        <div className="flex-1 bg-[#002e82]/70 p-8 md:p-12 text-white text-center flex flex-col justify-center items-center border-l-0 md:border-l border-white/10">
                            <h2 className="text-5xl md:text-7xl font-bold mb-5 tracking-tighter">Vision</h2>
                            <p className="text-xl md:text-2xl font-medium leading-relaxed">
                                To empower underprivileged communities through sustainable education, healthcare services, food support, and social welfare programs while maintaining transparency and accountability at every step.
                            </p>
                        </div>
                    </div>

                    {/* Our Values Section - Precise Alignment */}
                    <div className="w-full">
                        <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-[#002e82] text-center mb-10 md:mb-16 uppercase tracking-tighter drop-shadow-lg">
                            Our <span className='text-white font-black'>Values</span>
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-8 md:gap-y-12 px-4 md:px-8 lg:px-20">
                            {[
                                "Compassion & Integrity",
                                "Sustainability",
                                "Transparency & Accountability",
                                "Community-Driven Impact"
                            ].map((value, index) => (
                                <div key={index} className="flex items-center space-x-4 md:space-x-6">
                                    <div className="w-3 md:w-3.5 h-3 md:h-3.5 bg-[#002e82] rounded-full shrink-0 shadow-sm"></div>
                                    <span className="text-lg sm:text-xl md:text-3xl lg:text-4xl font-bold text-[#012060] tracking-tight">
                                        {value}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Student Group Banner Image - Full Width */}
            <div className="w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
                <img
                    src="/website media/About us/Footer Image.jpg"
                    alt="Idara Al-Khair Students Group"
                    className="w-full h-full object-cover"
                />
            </div>
        </>
    );
};

export default MissionVisionValues;
