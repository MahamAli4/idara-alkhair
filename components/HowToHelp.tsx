'use client';
import React from 'react';

const HowToHelp: React.FC = () => {
    const helpOptions = [
        { title: "Donate", image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop" },
        { title: "Sponsor a Child", image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop" },
        { title: "Volunteer", image: "https://images.unsplash.com/photo-1559027615-cd9d7a9bbc52?q=80&w=2070&auto=format&fit=crop" }
    ];

    return (
        <section className="bg-white pt-24 relative overflow-visible">
            <div className="container mx-auto px-4 text-center mb-16">
                <h2 className="text-5xl md:text-7xl font-bold text-[#012060] mb-6">
                    How You Can <span className="text-[#f15a24]">Help?</span>
                </h2>
                <p className="text-xl text-gray-700 max-w-2xl mx-auto">
                    Your support can <span className="font-semibold">change lives</span>, immediately and forever.
                </p>
            </div>

            {/* Negative margin push cards down into the footer area */}
            <div className="container mx-auto px-4 relative z-30 -mb-40 md:-mb-52">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10 max-w-6xl mx-auto">
                    {helpOptions.map((option, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <div className="relative w-full aspect-3/4 border-10 border-white shadow-2xl overflow-hidden bg-white group">
                                <img src={option.image} alt={option.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />

                                {/* Teal/Cyan Overlay */}
                                <div className="absolute inset-0 bg-idara-cyan/45 mix-blend-multiply"></div>

                                {/* White Button - Exactly like image */}
                                <div className="absolute bottom-0 left-0 right-0 p-1 bg-white">
                                    <button className="w-full py-3 bg-white text-gray-800 font-black text-xl md:text-2xl uppercase tracking-tighter hover:bg-gray-500 transition-colors">
                                        {option.title}
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowToHelp;