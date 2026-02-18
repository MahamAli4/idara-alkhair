'use client';

import React from 'react';

const HowToHelp: React.FC = () => {
    const helpOptions = [
        {
            title: "Donate",
            image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop",
            btnText: "Donate Now"
        },
        {
            title: "Sponsor a Child",
            image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop",
            btnText: "Sponsor a Child"
        },
        {
            title: "Volunteer",
            image: "https://images.unsplash.com/photo-1559027615-cd9d7a9bbc52?q=80&w=2070&auto=format&fit=crop",
            btnText: "Join as Volunteer"
        }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-[3.5rem] lg:text-[4.5rem] font-black mb-4">
                        How You Can <span className="text-idara-orange">Help?</span>
                    </h2>
                    <p className="text-[1.2rem] text-gray-500 max-w-2xl mx-auto leading-relaxed">
                        Your support can change lives, immediately and forever. Every contribution builds a better tomorrow.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
                    {helpOptions.map((option, index) => (
                        <div key={index} className="group relative h-[400px] overflow-hidden rounded-[24px] shadow-2xl">
                            <img
                                src={option.image}
                                alt={option.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                <h3 className="text-3xl font-black text-white mb-6 uppercase tracking-tight">{option.title}</h3>
                                <button className="w-full py-4 bg-idara-orange text-white font-bold rounded-[12px] transition-all duration-300 hover:bg-[#d65d20] shadow-lg">
                                    {option.btnText}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowToHelp;
