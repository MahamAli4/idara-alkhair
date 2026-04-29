import React from 'react';

const AboutHero = () => {
    return (
        <section className="relative h-[40vh] md:h-[60vh] flex items-center justify-center overflow-hidden mt-0 md:mt-[80px] lg:mt-[100px]">

            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/website-media/about-us/topbanner.jpg"
                    alt="Idara Al-Khair Students"
                    className="w-full h-full object-cover block"
                />
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 relative z-10 w-full text-center">
                <h1
                    data-aos="fade-up"
                    data-aos-duration="400"
                    className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight"
                >
                    About <span className="text-idara-orange font-bold">Us</span>
                </h1>
            </div>

        </section>
    );
};

export default AboutHero;