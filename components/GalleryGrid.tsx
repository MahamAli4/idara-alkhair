import React from 'react';

const GalleryGrid = () => {
    // Selection of images from the website-media/gallery folder
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
        null, // Missing 12
        null, // Missing 13
        "/website-media/gallery/pic14.jpeg" // Box 14
    ];

    return (
        <section className="py-20 bg-white relative overflow-hidden">
            
            {/* Decorative Shape: Cyan Circle (Right) */}
            <div 
                className="absolute right-[-40px] top-[50%] w-[120px] h-[120px] bg-idara-cyan rounded-full z-20 opacity-100 hidden lg:block"
                data-aos="zoom-in"
                data-aos-delay="500"
            ></div>
            
            {/* Decorative Shape: Navy Pill & Yellow Dot (Left) */}
            <div className="absolute left-6 bottom-[5%] z-20 hidden lg:block" data-aos="fade-up">
                <div className="w-10 h-48 bg-[#012060] rounded-full mb-6 relative">
                    {/* Floating Yellow Triangle on Pill */}
                    <div className="absolute -top-4 -right-4 w-0 h-0 border-r-20 border-r-transparent border-b-20 border-b-idara-yellow transform -rotate-12"></div>
                </div>
                <div className="w-10 h-10 bg-idara-yellow rounded-full shadow-lg"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Section Title */}
                <div className="text-center mb-16" data-aos="fade-down">
                    <h2 className="text-4xl md:text-5xl font-black tracking-tight text-[#012060]">
                        Some <span className="text-idara-orange">Glimpses</span> of <span className="text-idara-orange">Idara Al-Khair</span>
                    </h2>
                </div>

                {/* Grid Layout - 4-Column Strict Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 auto-rows-[220px] md:auto-rows-[280px]">
                    
                    {/* ITEMS 1-8: Standard 1x1 */}
                    {galleryImages.slice(0, 8).map((src, idx) => (
                        <div key={idx} className="relative group overflow-hidden rounded-sm" data-aos="fade-up" data-aos-delay={idx * 100}>
                            <img src={src!} alt={`Gallery ${idx + 1}`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-[#012060]/10 group-hover:bg-transparent transition-colors duration-500"></div>
                        </div>
                    ))}

                    {/* ITEM 9: Huge Image (3x2) spanning across col 1-3, row 3-4 */}
                    <div className="lg:col-span-3 lg:row-span-2 relative group overflow-hidden rounded-sm" data-aos="zoom-in">
                        <img src={galleryImages[8]!} alt="Gallery 9" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-[#012060]/10 group-hover:bg-transparent transition-colors duration-500"></div>
                    </div>

                    {/* ITEM 10: Stacked Portrait (Col 4, Row 3) */}
                    <div className="relative group overflow-hidden rounded-sm" data-aos="fade-left">
                        <img src={galleryImages[9]!} alt="Gallery 10" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                        <div className="absolute top-2 left-2 w-0 h-0 border-l-30 border-l-transparent border-b-30 border-b-idara-yellow transform -rotate-45 z-10 opacity-80"></div>
                    </div>

                    {/* ITEM 11: Stacked Portrait (Col 4, Row 4) */}
                    <div className="relative group overflow-hidden rounded-sm" data-aos="fade-left" data-aos-delay="200">
                        <img src={galleryImages[10]!} alt="Gallery 11" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    </div>

                    {/* BOTTOM ROW (Box 12, 13, 14) */}
                    {/* Box 12: Placeholder */}
                    <div className="lg:col-span-1 relative bg-gray-50 rounded-sm flex items-center justify-center border-2 border-dashed border-gray-200 overflow-hidden" data-aos="fade-up">
                        <span className="text-gray-300 font-bold uppercase tracking-wider text-sm">Image Coming Soon</span>
                    </div>

                    {/* Box 13: Placeholder - Wide */}
                    <div className="lg:col-span-2 relative bg-gray-50 rounded-sm flex items-center justify-center border-2 border-dashed border-gray-200" data-aos="fade-up" data-aos-delay="100">
                        <span className="text-gray-300 font-bold uppercase tracking-wider text-sm">Gallery Updating...</span>
                        {/* Decorative Yellow Triangle */}
                        <div className="absolute bottom-4 right-4 w-0 h-0 border-r-25 border-r-transparent border-b-25 border-b-idara-yellow transform rotate-45 opacity-50"></div>
                    </div>

                    {/* Box 14: New Image pic14 */}
                    <div className="relative group overflow-hidden rounded-sm" data-aos="fade-up" data-aos-delay="200">
                        <img src={galleryImages[13]!} alt="Gallery 14" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-[#012060]/10 group-hover:bg-transparent transition-colors duration-500"></div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default GalleryGrid;
