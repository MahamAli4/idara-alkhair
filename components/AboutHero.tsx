import React from 'react';

const AboutHero = () => {
    return (
        <section className="relative h-[400px] lg:h-[500px] flex items-center justify-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop"
                    alt="Idara Al-Khair Students"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-idara-navy/60"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 text-center text-white px-4">
                <h1 className="text-5xl lg:text-7xl font-black mb-4">
                    About <span className="text-idara-orange">Us</span>
                </h1>
                <div className="w-24 h-1 bg-idara-orange mx-auto rounded-full"></div>
            </div>
        </section>
    );
};

export default AboutHero;
