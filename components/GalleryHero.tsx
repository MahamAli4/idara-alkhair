import React from 'react';

const GalleryHero = () => {
    return (
        <section className="relative h-[80vh] flex items-center justify-center overflow-hidden mt-[80px] md:mt-[100px]">

            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/website-media/about-us/topbanner.jpg"
                    alt="Idara Al-Khair Campus"
                    className="w-full h-full object-cover"
                />
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-navy/60 bg-black/50"></div>
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 relative z-10 w-full text-center">
                <h1
                    data-aos="fade-up"
                    data-aos-duration="400"
                    className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tight"
                >
                    Our <span className="text-idara-orange font-black">Gallery</span>
                </h1>
            </div>

        </section>
    );
};

export default GalleryHero;
