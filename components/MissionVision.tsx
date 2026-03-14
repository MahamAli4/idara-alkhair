import React from 'react';

const MissionVisionValues = () => {
    return (
        <>
            <section className="relative py-24 overflow-hidden min-h-[800px] flex items-center">

                {/* Grayscale Background */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="/website media/About us/Background Image.jpg"
                        alt="Students background"
                        className="w-full h-full object-cover grayscale opacity-70"
                    />
                </div>

                <div className="container mx-auto px-4 relative z-10">

                    {/* Mission & Vision Boxes */}
                    <div className="flex flex-col md:flex-row gap-3 w-full mb-20 overflow-hidden shadow-2xl">

                        {/* Mission Box */}
                        <div
                            className="flex-1 bg-[#D26F2B]/70 p-7 md:p-12 text-white text-center flex flex-col justify-center items-center"
                            data-aos="fade-right"
                        >
                            <h2 className="text-4xl md:text-6xl font-medium mb-5">Mission</h2>
                            <p className="text-xl md:text-2xl">
                                A society where every individual has access to education, healthcare, food, and a dignified life.
                            </p>
                        </div>

                        {/* Vision Box */}
                        <div
                            className="flex-1 bg-idara-navy/80 p-8 md:p-12 text-white text-center flex flex-col justify-center items-center border-l-0 md:border-l border-white/10"
                            data-aos="fade-left"
                            data-aos-delay="150"
                        >
                            <h2 className="text-4xl md:text-6xl font-medium mb-5">Vision</h2>
                            <p className="md:text-2xl">
                                To empower underprivileged communities through sustainable education, healthcare services, food support, and social welfare programs while maintaining transparency and accountability at every step.
                            </p>
                        </div>

                    </div>

                    {/* Our Values */}
                    <div className="w-full">
<<<<<<< HEAD
                        <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-[#002e82] text-center mb-10 md:mb-16 uppercase tracking-tighter drop-shadow-lg">
                            Our <span className='text-white font-black'>Values</span>
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-8 md:gap-y-12 px-4 md:px-8 lg:px-20">
=======
                        <h2
                            className="text-5xl md:text-5xl font-medium text-idara-navy text-center mb-18 tracking-tighter  drop-shadow-lg"
                            data-aos="fade-up"
                        >
                            Our <span className='text-white font-black'>Values</span>
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 text-center gap-x-44 gap-y-12 px-8 lg:px-33">
>>>>>>> ffb34603a41677c9d7ebf3cb37c9c094e6ea9a10
                            {[
                                "Compassion & Integrity",
                                "Sustainability",
                                "Transparency & Accountability",
                                "Community-Driven Impact"
                            ].map((value, index) => (
<<<<<<< HEAD
                                <div key={index} className="flex items-center space-x-4 md:space-x-6">
                                    <div className="w-3 md:w-3.5 h-3 md:h-3.5 bg-[#002e82] rounded-full shrink-0 shadow-sm"></div>
                                    <span className="text-lg sm:text-xl md:text-3xl lg:text-4xl font-bold text-[#012060] tracking-tight">
=======
                                <div
                                    key={index}
                                    className="flex items-center space-x-6"
                                    data-aos="fade-up"
                                    data-aos-delay={index * 150}
                                >
                                    <div className="w-3.5 h-3.5 bg-[#012060] rounded-full shrink-0 shadow-sm"></div>
                                    <span className="text-2xl md:text-3xl lg:text-2xl font-bold text-idara-navy tracking-tight">
>>>>>>> ffb34603a41677c9d7ebf3cb37c9c094e6ea9a10
                                        {value}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer Banner Image */}
            <div className="w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
                <img
                    src="/website media/About us/Footer Image.jpg"
                    alt="Idara Al-Khair Students Group"
                    className="w-full h-full object-cover"
                    data-aos="zoom-in"
                />
            </div>
        </>
    );
};

export default MissionVisionValues;