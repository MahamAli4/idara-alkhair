import React from 'react';

const AboutIntro = () => {
    return (
        <section className="py-12 md:py-20 bg-white overflow-hidden">
            <div className="container mx-auto px-6 lg:px-20 max-w-7xl font-montserrat">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                    {/* Text Column */}
                    <div className="lg:w-[60%]">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-[#012060] tracking-tight">
                            About <span className="text-idara-orange">Us</span>
                        </h2>
                        <div className="space-y-6 text-base md:text-lg text-gray-800 leading-relaxed max-w-2xl">
                            <p className="font-medium">
                                Founded in 1987, Idara Al-Khair Welfare Society began with a single mission: serving humanity without discrimination. What started as a small welfare initiative has grown into a multi-sector organization impacting thousands of families every year.
                            </p>
                            <p className="font-medium">
                                Our journey is rooted in trust, perseverance, and the unwavering belief that every human deserves respect and opportunity.
                            </p>
                        </div>
                    </div>

                    {/* Image Column - Decorations adjusted to be tight to the image */}
                    <div className="lg:w-[40%] relative flex justify-center items-center">
                        <div className="relative">

                            {/* Main "D" Shape Image */}
                            <div
                                className="relative z-10 w-[260px] md:w-[300px] h-[380px] md:h-[480px] overflow-hidden bg-gray-100 shadow-xl"
                                style={{ borderRadius: '0px 180px 180px 180px' }}
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop"
                                    alt="Children smiling"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Dark Blue Pillar - Placed precisely */}
                            <div className="absolute top-6 -right-20 w-10 md:w-14 h-40 md:h-48 bg-[#001f54] rounded-full z-0"></div>

                            {/* Cyan Circle */}
                            <div className="absolute bottom-[38%] -right-20 w-14 md:w-16 h-14 md:h-16 bg-idara-cyan rounded-full z-20"></div>

                            {/* Bottom Left Triangle - EXACT MATCH */}
                            <div
                                className="absolute -bottom-6 -left-2 w-16 h-16 bg-idara-cyan z-0"
                                style={{
                                    // Isse triangle ka rukh (diagonal) image jaisa ho jayega
                                    clipPath: 'polygon(0 0, 0% 100%, 100% 100%)'
                                }}
                            ></div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AboutIntro;