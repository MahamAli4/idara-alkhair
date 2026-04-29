import React from 'react';

const AboutIntro = () => {
    return (
        <section className="py-8 sm:py-12 md:py-20 bg-white overflow-hidden">
            <div className="container mx-auto px-4 font-montserrat">
                <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-12 lg:gap-20">

                    {/* Text Column */}
                    <div 
                        className="lg:w-[60%] w-full"
                        data-aos="fade-right"
                    >
                        <h2 
                            className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-[#012060] tracking-tight"
                            data-aos="fade-up"
                        >
                            About <span className="text-idara-orange font-black">Us</span>
                        </h2>

                        <div 
                            className="space-y-4 sm:space-y-6 text-sm sm:text-base md:text-lg text-gray-800 leading-relaxed max-w-2xl"
                            data-aos="fade-up"
                            data-aos-delay="150"
                        >
                            <p className="font-medium">
                                Founded in 1987, Idara Al-Khair Welfare Society began with a single mission: serving humanity without discrimination. What started as a small welfare initiative has grown into a multi-sector organization impacting thousands of families every year.
                            </p>

                            <p className="font-medium">
                                Our journey is rooted in trust, perseverance, and the unwavering belief that every human deserves respect and opportunity.
                            </p>
                        </div>
                    </div>

                    {/* Image Column */}
                    <div 
                        className="lg:w-[40%] relative flex justify-center items-center"
                        data-aos="fade-left"
                    >
                        <div className="relative">

                            {/* Main Image */}
                            <div
                                className="relative z-10 w-[200px] sm:w-[260px] md:w-[300px] h-[300px] sm:h-[380px] md:h-[480px] overflow-hidden bg-gray-100 shadow-xl group"
                                style={{ borderRadius: '0px 180px 180px 180px' }}
                                data-aos="zoom-in"
                                data-aos-delay="200"
                            >
                                <img
                                    src="/images/aboutus03.jpeg"
                                    alt="Children smiling"
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 group-hover:brightness-110"
                                />
                            </div>

                            {/* Dark Blue Pill - hidden on mobile */}
                            <div 
                                className="hidden sm:block absolute top-6 -right-20 w-10 md:w-14 h-40 md:h-48 bg-[#001f54] rounded-full z-0"
                                data-aos="fade-left"
                                data-aos-delay="300"
                            ></div>

                            {/* Cyan Circle - hidden on mobile */}
                            <div 
                                className="hidden sm:block absolute bottom-[38%] -right-20 w-14 md:w-16 h-14 md:h-16 bg-idara-cyan rounded-full z-20"
                                data-aos="zoom-in"
                                data-aos-delay="350"
                            ></div>

                            {/* Triangle - hidden on mobile */}
                            <div
                                className="hidden sm:block absolute -bottom-6 -left-2 w-16 h-16 bg-idara-cyan z-0"
                                style={{
                                    clipPath: 'polygon(0 0, 0% 100%, 100% 100%)'
                                }}
                                data-aos="fade-up"
                                data-aos-delay="400"
                            ></div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AboutIntro;