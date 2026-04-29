import React from 'react';

const MissionVisionValues = () => {
    return (
        <>
            <section className="relative py-12 sm:py-16 md:py-24 overflow-hidden min-h-auto md:min-h-200 flex items-center">

                {/* Grayscale Background */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="/website-media/about-us/backgroundimage.jpg"
                        alt="Students background"
                        className="w-full h-full object-cover grayscale opacity-70"
                    />
                </div>

                <div className="container mx-auto px-4 relative z-10">

                    {/* Mission & Vision Boxes */}
                    <div className="flex flex-col md:flex-row gap-3 w-full mb-10 sm:mb-16 md:mb-20 overflow-hidden shadow-2xl">

                        {/* Mission Box */}
                        <div
                            className="flex-1 bg-[#D26F2B]/70 p-6 sm:p-7 md:p-12 text-white text-center flex flex-col justify-center items-center"
                            data-aos="fade-right"
                        >
                            <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-medium mb-3 sm:mb-5">Mission</h2>
                            <p className="text-base sm:text-xl md:text-2xl">
                                A society where every individual has access to education, healthcare, food, and a dignified life.
                            </p>
                        </div>

                        {/* Vision Box */}
                        <div
                            className="flex-1 bg-idara-navy/80 p-6 sm:p-8 md:p-12 text-white text-center flex flex-col justify-center items-center border-l-0 md:border-l border-white/10"
                            data-aos="fade-left"
                            data-aos-delay="150"
                        >
                            <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-medium mb-3 sm:mb-5">Vision</h2>
                            <p className="text-base sm:text-xl md:text-2xl">
                                To empower underprivileged communities through sustainable education, healthcare services, food support, and social welfare programs while maintaining transparency and accountability at every step.
                            </p>
                        </div>

                    </div>

                    {/* Our Values */}
                    <div className="w-full flex flex-col items-center">
                        {/* Heading */}
                        <h2
                            className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-medium text-idara-navy text-center mb-8 sm:mb-14 md:mb-20 px-4 md:px-7 lg:px-1 tracking-tighter drop-shadow-lg"
                            data-aos="fade-up"
                        >
                            Our <span className='text-white font-black'>Values</span>
                        </h2>

                        {/* Values Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 text-left gap-x-55 gap-y-5 sm:gap-y-8 px-4 md:px-8 lg:px-16">
                            {[
                                "Compassion & Integrity",
                                "Sustainability",
                                "Transparency & Accountability",
                                "Community-Driven Impact"
                            ].map((value, index) => (
                                <div
                                    key={index}
                                    className="flex items-start gap-3 sm:gap-4 md:gap-6"
                                    data-aos="fade-up"
                                    data-aos-delay={index * 150}
                                >
                                    {/* Bullet */}
                                    <div className="mt-2 w-3 h-3 sm:w-3.5 sm:h-3.5 bg-[#012060] rounded-full shrink-0 shadow-sm"></div>

                                    {/* Text */}
                                    <span className="text-lg sm:text-2xl md:text-3xl lg:text-2xl font-bold text-idara-navy tracking-tight">
                                        {value}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer Banner Image */}
            <div className="w-full h-[30vh] sm:h-100 md:h-125 lg:h-150 overflow-hidden">
                <img
                    src="/website-media/about-us/footerimage.jpg"
                    alt="Idara Al-Khair Students Group"
                    className="w-full h-full object-cover block"
                    data-aos="zoom-in"
                />
            </div>
        </>
    );
};

export default MissionVisionValues;