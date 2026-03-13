"use client"; // Required for AOS initialization in Next.js
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function DisasterReliefProgramPage() {
    useEffect(() => {
        AOS.init({
            duration: 1000, // Animation speed
            once: true,     // Whether animation should happen only once - while scrolling down
            easing: 'ease-out-cubic',
        });
    }, []);

    return (
        <main className="overflow-x-hidden bg-white">
            <Navbar />

            {/* ===== HERO BANNER ===== */}
            <section className="relative mt-[118px] w-full overflow-hidden h-[220px] md:h-[320px]">
                <img
                    src="/website media/Disaster Relief Program/Banner Image copy.jpg"
                    alt="Disaster Relief Program"
                    className="w-full h-full object-cover"
                />
<<<<<<< HEAD
                <div className="absolute inset-0 bg-[#012060]/10"></div>

                <div 
                    className="absolute inset-0 flex items-center justify-center px-4"
                    data-aos="zoom-in" // Zoom-in effect for the main title
                >
                    <h1 className="text-4xl md:text-6xl lg:text-4xl font-bold text-white text-center tracking-tighter">
                        <span className="text-idara-orange font-black">DISASTER</span> Relief Program
=======
                {/* Dark overlay */}
                {/* <div className="absolute inset-0 bg-[#012060]/55"></div> */}
                {/* Title */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white text-center tracking-tight">
                        <span className="text-idara-orange font-black italic">DISASTER</span> Relief Program
>>>>>>> eb9d2f8ba66949931884d44be0414745c204e5f5
                    </h1>
                </div>
            </section>

            {/* ===== CONTENT SECTION ===== */}
            <section className="container mx-auto px-6 md:px-12 py-16 md:py-24">
                <div className="max-w-4xl">
                    <h2 
                        className="text-2xl md:text-4xl font-semibold leading-tight mb-6"
                        data-aos="fade-right" // Slide in from left
                    >
                        <span className="text-[#012060]">Standing with </span>
                        <span className="text-idara-orange font-extrabold">Communities in Crises</span>
                    </h2>

                    <p 
                        className="text-gray-700 text-base md:text-lg leading-relaxed mb-6 max-w-3xl"
                        data-aos="fade-up"
                        data-aos-delay="200" // Staggered delay
                    >
                        During natural disasters and emergencies, Idara Al-Khair responds swiftly with relief efforts.
                    </p>

                    <p 
                        className="text-base md:text-lg"
                        data-aos="fade-up"
                        data-aos-delay="400"
                    >
                        <span className="text-idara-orange font-extrabold">Our Response Includes :- </span>
                        <span className="text-gray-700">
                            Emergency food & supplies · Medical assistance · Rehabilitation support.
                        </span>
                    </p>
                </div>
            </section>

            {/* ===== CREATIVE IMAGE LAYOUT ===== */}
            <section className="w-full h-full mx-auto px-6 md:px-12">
                <div className="relative max-w-4xl mx-auto">

                    {/* Decorative Shapes with different effects */}
                    <div 
                        data-aos="fade-down"
                        className="absolute left-0 md:left-[-10px] top-[2%] w-[40px] md:w-[55px] h-[110px] md:h-[150px] bg-[#012060] rounded-full z-10"
                    ></div>

                    <div 
                        data-aos="zoom-in"
                        data-aos-delay="300"
                        className="absolute left-0 md:left-[-10px] top-[24%] w-[45px] md:w-[55px] h-[45px] md:h-[55px] bg-idara-yellow rounded-full z-10"
                    ></div>

                    <div
                        data-aos="fade-left"
                        className="absolute right-[7%] top-[18%] w-0 h-0 z-10"
                        style={{
                            borderBottom: "45px solid #06b6d4",
                            borderLeft: "45px solid transparent"
                        }}
                    ></div>

                    {/* Quote Text */}
                    <div 
                        className="relative z-20 mb-6 ml-12 md:ml-20 -mt-7 max-w-[380px] md:max-w-[480px]"
                        data-aos="fade-up"
                    >
                        <p className="leading-[1.1]">
                            <span className="text-[#012060] font-black text-3xl md:text-5xl">"We </span>
                            <span className="text-idara-yellow font-black text-5xl md:text-7xl">Stand by</span>
                            <br />
                            <span className="text-[#012060] font-semibold text-3xl md:text-4xl">
                                communities when they
                            </span>
                            <br />
                            <span className="inline-block translate-x-78">
                                <span className="text-idara-orange font-black text-5xl md:text-7xl ">need</span>
                                <span className="text-[#012060] font-black text-2xl md:text-4xl "> it most"</span>
                            </span>
                        </p>
                    </div>

                    {/* Main Image */}
                    <div 
                        className="relative mt-1 overflow-hidden h-[200px] md:h-[550px] mb-[-70] -mx-6 md:-mx-58"
                        data-aos="fade-up"
                    >
                        <img
                            src="/website media/Disaster Relief Program/Center Image.jpg"
                            alt="Disaster relief work"
                            className="w-full h-[300px] md:h-[570px] object-cover transition-transform duration-700 hover:scale-105"
                        />
                    </div>

<<<<<<< HEAD
=======
                    {/* Lower overlapping images */}
                    {/* <div className="grid grid-cols-2 md:grid-cols-3 gap-3 relative z-6 -mt-10 md:-mt-16 mx-2 md:mx-6">
                        <div className="rounded-xl overflow-hidden shadow-2xl border-4 border-white">
                            <img
                                src="/website media/Disaster Relief Program/Footer Image.jpg"
                                alt="Relief workers helping"
                                className="w-full h-[160px] md:h-[220px] object-cover"
                            />
                        </div>
                        <div className="rounded-xl overflow-hidden shadow-2xl border-4 border-white">
                            <img
                                src="/website media/Food Support Program/Footer.jpg"
                                alt="Supply distribution"
                                className="w-full h-[160px] md:h-[220px] object-cover"
                            />
                        </div>
                        <div className="hidden md:block rounded-xl overflow-hidden shadow-2xl border-4 border-white">
                            <img
                                src="/website media/Homepage/Background Image 02.jpg"
                                alt="Rehabilitation support"
                                className="w-full h-[220px] object-cover"
                            />
                        </div>
                    </div> */}
>>>>>>> eb9d2f8ba66949931884d44be0414745c204e5f5
                </div>
            </section>

            {/* ===== FULL-WIDTH BOTTOM IMAGE ===== */}
            <section 
                className="relative mt-[30px] w-full overflow-hidden h-[220px] md:h-[320px]"
                data-aos="fade-up"
            >
                <img
                    src="/images/Footer Image.jpg"
                    alt="relief workers helping"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 mix-blend-multiply"></div>
            </section>

            <Footer />
        </main>
    );
}