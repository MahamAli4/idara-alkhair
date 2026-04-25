import React from 'react';

const GalleryHero = () => {
    return (
        <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden mt-[80px] md:mt-[100px]">

            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/website-media/itinstitute/ait.jpeg"
                    alt="Gallery Hero Banner"
                    className="w-full h-full object-cover"
                />
                
                {/* --- PROFESSIONAL BLUE GRADIENT SHADE (Matching Screenshot) --- */}
                {/* Solid Dark Blue on the left, fading to transparent on the right */}
                <div className="absolute inset-0 z-10 bg-linear-to-r from-[#012060] via-[#012060]/70 to-transparent"></div>
                
                {/* Overall Subtle Dark Overlay for better text contrast */}
                <div className="absolute inset-0 z-0 bg-black/20"></div>
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 relative z-20 w-full text-center">
                <h1
                    data-aos="fade-up"
                    data-aos-duration="600"
                    className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-white tracking-tighter drop-shadow-2xl"
                >
                    Our <span className="text-idara-orange font-black">Gallery</span>
                </h1>
            </div>

        </section>
    );
};

export default GalleryHero;
