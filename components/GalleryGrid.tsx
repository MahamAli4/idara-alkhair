import React from 'react';

const GalleryGrid = () => {
    // Selection of images from the website-media folder
    const images = [
        "/website-media/technicaltrainingcenters/banner.jpg",
        "/website-media/educationschool&college/boyimage.jpg",
        "/website-media/medicalcenter/banner.jpg",
        "/website-media/about-us/pic01.jpg",
        "/website-media/foodsupportprogram/banner.jpg",
        "/website-media/itinstitute/image01.jpg",
        "/website-media/shoppage/instagrampicture.jpg",
        "/website-media/disasterreliefprogram/centerimage.jpg",
        "/website-media/helpadream/banner.jpg",
        "/website-media/rotibank/banner.jpg",
        "/website-media/shoppage/image02.jpg",
        "/website-media/itinstitute/image02.jpg",
    ];

    return (
        <section className="py-20 bg-white relative overflow-hidden">
            
            {/* Decorative Shape: Cyan Circle (Right) */}
            <div className="absolute right-[-50px] top-[40%] w-[100px] h-[100px] bg-idara-cyan rounded-full z-0 opacity-80 hidden lg:block"></div>
            
            {/* Decorative Shape: Navy Pill & Yellow Dot (Left) */}
            <div className="absolute left-10 bottom-[20%] z-0 hidden lg:block">
                <div className="w-8 h-32 bg-idara-navy rounded-full mb-4"></div>
                <div className="w-8 h-8 bg-idara-yellow rounded-full"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Section Title */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-idara-navy">
                        Some <span className="text-idara-orange">Glimpses</span> of <span className="text-idara-orange">Idara Al-Khair</span>
                    </h2>
                </div>

                {/* Grid Layout */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[250px]">
                    
                    {/* Item 1: Wide */}
                    <div className="lg:col-span-2 relative group overflow-hidden rounded-lg shadow-lg">
                        <img src={images[0]} alt="Gallery 1" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </div>

                    {/* Item 2 */}
                    <div className="relative group overflow-hidden rounded-lg shadow-lg">
                        <img src={images[1]} alt="Gallery 2" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                        
                        {/* Decorative Yellow Triangle (Top Left) */}
                        <div className="absolute -top-4 -left-4 w-0 h-0 border-l-30 border-l-transparent border-b-30 border-b-idara-yellow transform -rotate-45 z-10"></div>
                    </div>

                    {/* Item 3 */}
                    <div className="relative group overflow-hidden rounded-lg shadow-lg">
                        <img src={images[2]} alt="Gallery 3" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    </div>

                    {/* Item 4 */}
                    <div className="relative group overflow-hidden rounded-lg shadow-lg">
                        <img src={images[3]} alt="Gallery 4" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    </div>

                    {/* Item 5: Tall */}
                    <div className="lg:row-span-2 relative group overflow-hidden rounded-lg shadow-lg">
                        <img src={images[4]} alt="Gallery 5" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    </div>

                    {/* Item 6 */}
                    <div className="relative group overflow-hidden rounded-lg shadow-lg">
                        <img src={images[5]} alt="Gallery 6" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    </div>

                    {/* Item 7 */}
                    <div className="relative group overflow-hidden rounded-lg shadow-lg">
                        <img src={images[6]} alt="Gallery 7" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                        
                        {/* Decorative Yellow Triangle (Bottom Right) */}
                        <div className="absolute -bottom-2 -right-2 w-0 h-0 border-left-[20px] border-left-transparent border-bottom-[20px] border-bottom-idara-yellow transform rotate-45 z-10"></div>
                    </div>

                    {/* Item 8: Wide */}
                    <div className="lg:col-span-2 lg:row-span-2 relative group overflow-hidden rounded-lg shadow-lg">
                        <img src={images[7]} alt="Gallery 8" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    </div>

                    {/* Item 9 */}
                    <div className="relative group overflow-hidden rounded-lg shadow-lg">
                        <img src={images[8]} alt="Gallery 9" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    </div>

                    {/* Item 10 */}
                    <div className="relative group overflow-hidden rounded-lg shadow-lg">
                        <img src={images[9]} alt="Gallery 10" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    </div>

                    {/* Item 11 */}
                    <div className="relative group overflow-hidden rounded-lg shadow-lg lg:col-span-2">
                        <img src={images[10]} alt="Gallery 11" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default GalleryGrid;
