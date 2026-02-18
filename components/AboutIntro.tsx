import React from 'react';

const AboutIntro = () => {
    return (
        <section className="py-20 lg:py-32 overflow-hidden bg-white">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    {/* Text Content */}
                    <div className="lg:w-1/2">
                        <h2 className="text-4xl lg:text-5xl font-black text-idara-navy mb-8">
                            About <span className="text-idara-orange">Us</span>
                        </h2>
                        <div className="space-y-6 text-lg text-gray-600 leading-relaxed font-medium">
                            <p>
                                Founded in 1987, Idara Al-Khair Welfare Society began with a single mission:
                                serving humanity without discrimination. What started as a small welfare
                                initiative has grown into a multi-sector organization impacting thousands
                                of families every year.
                            </p>
                            <p>
                                Our journey is rooted in trust, perseverance, and the unwavering belief
                                that every human deserves respect and opportunity.
                            </p>
                        </div>
                    </div>

                    {/* Creative Image Layout */}
                    <div className="lg:w-1/2 relative">
                        <div className="relative z-10">
                            <img
                                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop"
                                alt="Student"
                                className="w-[80%] ml-auto rounded-[40px] rounded-tr-none shadow-2xl z-10 relative"
                            />

                            {/* Decorative Elements matching design */}
                            <div className="absolute -top-10 right-[10%] w-20 h-40 bg-[#122241] rounded-full z-0"></div>
                            <div className="absolute -bottom-10 left-[10%] w-16 h-16 bg-idara-cyan rounded-full z-20"></div>
                            <div className="absolute top-1/2 -left-5 w-24 h-24 bg-idara-orange/20 rounded-full blur-xl z-0"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutIntro;
