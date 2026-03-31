'use client';

import { useEffect } from 'react'; // Added useEffect
import AOS from 'aos'; // Added AOS
import 'aos/dist/aos.css'; // Added AOS styles

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function ShopPage() {
    
    // Initialize AOS
    useEffect(() => {
        AOS.init({
            duration: 1000, // Animation speed
            once: true,     // Whether animation should happen only once - while scrolling down
            easing: 'ease-out',
            offset: 100,    // Trigger point (px)
        });
    }, []);

    return (
        <main className="overflow-x-hidden bg-white">
            <Navbar />

            {/* ===== HERO BANNER ===== */}
            {/* Using fade-in for the banner */}
            <section 
                className="relative mt-[80px] w-full overflow-hidden h-[220px] md:h-[320px]"
                data-aos="fade"
            >
                <img
                    src="/website-media/shoppage/banner.jpg"
                    alt="Idara Shop"
                    className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 flex items-center justify-center px-4">
                    <h1 
                        className="text-4xl md:text-6xl lg:text-5xl font-bold text-white text-center tracking-tighter"
                        data-aos="zoom-in" 
                        data-aos-delay="200"
                    >
                        IAK <span className="text-idara-orange">Shops</span>
                    </h1>
                </div>
            </section>

            {/* ===== MISSION STATEMENT ===== */}
            <section className="container mx-auto px-6 md:px-12 py-16 md:py-24">
                <div className="max-w-4xl">
                    <h2 
                        className="text-3xl md:text-5xl font-semibold leading-tight mb-6"
                        data-aos="slide-up"
                    >
                        <span className="text-[#012060]">Purpose‐Driven </span>
                        <span className="text-idara-orange font-extrabold">Shopping</span>
                    </h2>
                    <p 
                        className="text-black mt-6 text-lg text-center whitespace-nowrap"
                        data-aos="fade-up"
                        data-aos-delay="300"
                    >
                        Support our welfare initiatives by purchasing from our shop. Every purchase contributes directly to our programs.
                    </p>
                </div>
            </section>

            <div className="flex justify-center py-10 relative">
                <div 
                    className="w-[90%] md:w-[70%] rounded-lg -mt-14 overflow-visible shadow-[0_-10px_20px_rgba(0,0,0,0.25),-10px_0_20px_rgba(0,0,0,0.2),10px_0_20px_rgba(0,0,0,0.2)] relative"
                    data-aos="fade-up"
                >
                    <img
                        src="/website-media/shoppage/instagrampicture.jpg"
                        alt="Instagram"
                        className="w-full h-auto object-cover"
                    />
                    {/* Triangle 1 */}
                    <div
                        className="absolute right-[8%] top-[1%] w-0 h-0 z-20 rotate-3"
                        style={{
                            borderTop: "50px solid #facc15",
                            borderRight: "50px solid transparent"
                        }}
                        data-aos="zoom-in"
                        data-aos-delay="500"
                    ></div>

                    {/* Triangle 2 */}
                    <div
                        className="absolute right-[0%] -top-[4%] w-0 h-0 z-20 rotate-270"
                        style={{
                            borderTop: "60px solid #f97316",
                            borderRight: "60px solid transparent"
                        }}
                        data-aos="zoom-in"
                        data-aos-delay="700"
                    ></div>

                    {/* Triangle 3 */}
                    <div
                        className="absolute right-[5%] top-[7%] w-0 h-0 z-40 rotate-90"
                        style={{
                            borderTop: "60px solid #06b6d4",
                            borderRight: "60px solid transparent"
                        }}
                        data-aos="zoom-in"
                        data-aos-delay="900"
                    ></div>
                </div>
            </div>

            <section className="bg-gray-300 py-16 md:py-45 -mt-10 md:-mt-29">
                <h2 
                    className="text-3xl md:text-4xl font-black mt-4 md:-mt-23 text-center text-[#012060]"
                    data-aos="fade-right"
                >
                    Shop with purpose, <span className="text-idara-orange font-extrabold">Give with impact</span>
                </h2>
            </section>

            <div className="flex flex-col justify-center py-10 relative">
                <div className="flex flex-col justify-center py-10 relative">
                    {/* Big main image */}
                    <div 
                        className="w-[95%] md:w-[85%] -mt-20 md:-mt-75 overflow-hidden relative mx-auto"
                        data-aos="zoom-out"
                    >
                        <img
                            src="/website-media/shoppage/image01.jpg"
                            alt="Instagram"
                            className="w-full h-[500px] md:h-[800px] object-cover rounded-lg"
                        />
                    </div>

                    {/* Three grid images - staggered animation */}
                    <div className="flex flex-wrap md:flex-nowrap justify-center gap-4 md:gap-6 -mt-10 md:-mt-35 relative z-10 px-4 md:px-0">
                        <img
                            src="/website-media/shoppage/image02.jpg"
                            alt="Grid 1"
                            className="w-[45%] md:w-[25%] h-auto object-cover rounded-xl border-4 border-white shadow-lg"
                            data-aos="fade-up"
                            data-aos-delay="100"
                        />
                        <img
                            src="/website-media/shoppage/image03.jpg"
                            alt="Grid 2"
                            className="w-[45%] md:w-[25%] h-auto object-cover rounded-xl border-4 border-white shadow-lg"
                            data-aos="fade-up"
                            data-aos-delay="300"
                        />
                        <img
                            src="/website-media/shoppage/image04.jpg"
                            alt="Grid 3"
                            className="w-[45%] md:w-[25%] h-auto object-cover rounded-xl border-4 border-white shadow-lg"
                            data-aos="fade-up"
                            data-aos-delay="500"
                        />
                    </div>
                    <div 
                        className="flex justify-center mt-8"
                        data-aos="zoom-in"
                        data-aos-anchor-placement="top-bottom"
                    >
                        <button className="bg-idara-orange px-16 py-3 text-2xl font-medium text-white rounded-[4px] hover:bg-opacity-90 transition-all active:scale-95 shadow-sm">
                            Shop Now
                        </button>
                    </div>
                </div>
            </div>

            <Footer />

            <style jsx>{`
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-marquee {
                    display: flex;
                    animation: marquee 30s linear infinite;
                }
            `}</style>
        </main>
    );
}