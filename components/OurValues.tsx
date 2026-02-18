import React from 'react';

const OurValues = () => {
    const values = [
        "Compassion & Integrity",
        "Sustainability",
        "Transparency & Accountability",
        "Community-Driven Impact"
    ];

    return (
        <section className="py-24 relative overflow-hidden bg-white">
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-6xl font-black text-idara-navy">
                        Our <span className="text-white relative inline-block">
                            <span className="relative z-10">Values</span>
                            <svg className="absolute w-full h-full left-0 top-0 -z-0 text-idara-orange opacity-90" viewBox="0 0 100 100" preserveAspectRatio="none">
                                <path d="M0 100 C 20 0 50 0 100 100 Z" fill="currentColor" />
                            </svg>
                        </span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 max-w-4xl mx-auto">
                    {values.map((value, index) => (
                        <div key={index} className="flex items-center space-x-4 group p-6 rounded-2xl transition-all hover:bg-gray-50">
                            <div className="w-3 h-3 bg-idara-orange rounded-full group-hover:scale-150 transition-transform"></div>
                            <h3 className="text-xl lg:text-2xl font-bold text-idara-navy group-hover:text-idara-orange transition-colors">
                                {value}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>

            {/* Background Texture/Image for subtle effect */}
            <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        </section>
    );
};

export default OurValues;
