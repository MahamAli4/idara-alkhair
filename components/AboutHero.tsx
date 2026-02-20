import React from 'react';

const AboutHero = () => {
    return (
        <section className="relative h-[250px] md:h-[350px] flex items-center justify-center overflow-hidden mt-[80px] md:mt-[100px]">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1542810634-71277d95dc24?q=80&w=2070&auto=format&fit=crop"
                    alt="Idara Al-Khair Students"
                    className="w-full h-full object-cover"
                />
                {/* Specific overlay: Deep blue on the left fading out */}
                <div className="absolute inset-0 bg-linear-to-r from-[#012060] via-[#012060]/70 to-transparent"></div>
            </div>

            {/* Content centered */}
            <div className="relative z-10 w-full text-center px-6">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight">
                    About <span className="text-idara-orange">Us</span>
                </h1>
            </div>
        </section>
    );
};

export default AboutHero;
