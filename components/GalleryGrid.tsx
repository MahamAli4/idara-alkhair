import React from 'react';

const GalleryGrid = () => {
    // Selection of images from the website-media/gallery folder (14 total)
    const galleryImages = [
        "/website-media/gallery/pic1.jpeg",
        "/website-media/gallery/pic2.jpeg",
        "/website-media/gallery/pic3.jpeg",
        "/website-media/gallery/pic4.jpeg",
        "/website-media/gallery/pic5.jpeg",
        "/website-media/gallery/pic6.jpeg",
        "/website-media/gallery/pic7.jpeg",
        "/website-media/gallery/pic8.jpeg",
        "/website-media/gallery/pic9.jpeg",
        "/website-media/gallery/pic10.jpeg",
        "/website-media/gallery/pic11.jpeg",
        "/website-media/gallery/pic12.jpeg",
        "/website-media/gallery/pic13.jpeg",
        "/website-media/gallery/pic14.jpeg"
    ];

    return (
        <section className="py-20 bg-white relative overflow-hidden">
            
            {/* --- EXACT SHAPES FROM SCREENSHOT --- */}
            
            {/* 1. Left Side: Navy Bar + Yellow Circle (!) */}
            <div className="absolute left-[19%] bottom-[15%] md:flex flex-col-reverse items-center gap-3 z-20 hidden">
                <div className="w-10 h-48 bg-[#012060] rounded-full"></div>
                <div className="w-10 h-10 bg-idara-yellow rounded-full"></div>
            </div>

            {/* 2. Middle Right: Large Cyan Circle */}
            <div className="absolute top-[45%] right-[15%] w-15 h-15 md:w-40 md:h-40 bg-idara-cyan rounded-full z-20 opacity-100 hidden md:block"></div>

            {/* 3. Center Yellow Triangle (Near Big Image) */}
            <div className="absolute top-[48%] left-[64%] w-12 h-12 md:w-20 md:h-20 bg-idara-yellow opacity-90 z-30 hidden md:block" style={{ clipPath: 'polygon(100% 100%, 0 0, 0 100%)' }}></div>

            {/* 4. Small Yellow Triangle (Near Bottom Row) */}
            <div className="absolute bottom-[8%] left-[46%] w-6 h-6 md:w-10 md:h-10 bg-idara-yellow opacity-90 z-20 hidden md:block" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}></div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Section Title */}
                <div className="text-center mb-16" data-aos="fade-down">
                    <h2 className="text-4xl md:text-6xl font-black tracking-tight text-[#012060]">
                        Some <span className="text-idara-orange">Glimpses</span> of <span className="text-idara-orange font-black">Idara Al-Khair</span>
                    </h2>
                </div>

                {/* Grid Layout - Matching Screenshot Exactly */}
                <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 auto-rows-[200px] md:auto-rows-[250px]">
                    
                    {/* ROW 1: 4 Images (1-4) */}
                    {galleryImages.slice(0, 4).map((src, idx) => (
                        <div key={idx} className="relative group overflow-hidden rounded-xs" data-aos="fade-up" data-aos-delay={idx * 50}>
                            <img src={src} alt={`Gallery ${idx + 1}`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                        </div>
                    ))}

                    {/* ROW 2: 4 Images (5-8) */}
                    {galleryImages.slice(4, 8).map((src, idx) => (
                        <div key={idx + 4} className="relative group overflow-hidden rounded-xs" data-aos="fade-up" data-aos-delay={(idx + 4) * 50}>
                            <img src={src} alt={`Gallery ${idx + 5}`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                        </div>
                    ))}

                    {/* ROW 3 & 4: Huge Image (9) on left + 2 Stacked on right */}
                    <div className="lg:col-span-3 lg:row-span-2 relative group overflow-hidden rounded-xs" data-aos="zoom-in">
                        <img src={galleryImages[8]} alt="Gallery 9" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    </div>

                    <div className="relative group overflow-hidden rounded-xs" data-aos="fade-left">
                        <img src={galleryImages[9]} alt="Gallery 10" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    </div>

                    <div className="relative group overflow-hidden rounded-xs" data-aos="fade-left" data-aos-delay="100">
                        <img src={galleryImages[10]} alt="Gallery 11" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    </div>

                    {/* ROW 5: 3 Images (12, 13, 14) - Adjusted for 4-column span */}
                    <div className="lg:col-span-1 relative group overflow-hidden rounded-xs" data-aos="fade-up">
                        <img src={galleryImages[11]} alt="Gallery 12" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    </div>

                    <div className="lg:col-span-2 relative group overflow-hidden rounded-xs" data-aos="fade-up" data-aos-delay="100">
                        <img src={galleryImages[12]} alt="Gallery 13" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    </div>

                    <div className="lg:col-span-1 relative group overflow-hidden rounded-xs" data-aos="fade-up" data-aos-delay="200">
                        <img src={galleryImages[13]} alt="Gallery 14" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default GalleryGrid;
