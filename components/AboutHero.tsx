import React from 'react';

const AboutHero = () => {
    return (
        <section className="relative h-[250px] md:h-[350px] flex items-center justify-center overflow-hidden mt-[80px] md:mt-[100px]">
            {/* Background Image - Full width */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/website media/About us/Top Banner.jpg"
                    alt="Idara Al-Khair Students"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Content containerized to match Navbar/Footer */}
            <div className="container mx-auto px-4 relative z-10 w-full text-center">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight">
                    About <span className="text-idara-orange font-black">Us</span>
                </h1>
            </div>
        </section>
    );
};

export default AboutHero;
