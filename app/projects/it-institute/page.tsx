'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function ITInstitutePage() {
    
    useEffect(() => {
        AOS.init({
            duration: 900,
            once: true,
            easing: 'ease-in-out',
            offset: 80,
        });
    }, []);

    return (
        <main className="overflow-x-hidden bg-white">
            <Navbar />

            {/* ===== HERO BANNER ===== */}
            <section 
                className="relative mt-[80px] w-full overflow-hidden h-[220px] md:h-[320px]"
                data-aos="fade"
            >
                <img
                    src="/website media/IT Institute/Banner.jpg"
                    alt="IT Institute Classroom"
                    className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-[#012060]/20"></div>

                <div className="absolute inset-0 flex items-center justify-center px-4">
                    <h1 
                        className="text-4xl md:text-6xl lg:text-5xl font-bold text-white text-center tracking-tighter"
                        data-aos="zoom-out"
                        data-aos-delay="200"
                    >
                        IT <span className="text-idara-orange">Institute</span>
                    </h1>
                </div>
            </section>

            {/* ===== CONTENT SECTION ===== */}
            <section className="container mx-auto px-6 md:px-12 py-16 md:py-24">
                <div className="max-w-4xl">
                    <h2 
                        className="text-3xl md:text-5xl font-semibold leading-tight mb-6"
                        data-aos="fade-right"
                    >
                        <span className="text-[#012060]">Digital Skills for </span>
                        <span className="text-idara-orange font-extrabold">a Digital World</span>
                    </h2>
                    <p 
                        className="text-black text-base md:text-lg leading-relaxed mb-6 max-w-3xl"
                        data-aos="fade-up"
                        data-aos-delay="200"
                    >
                        The IT Institute prepares students for modern careers by providing training in essential digital and technology-based skills.
                    </p>
                    <p 
                        className="text-base md:text-lg mb-2"
                        data-aos="fade-up"
                        data-aos-delay="400"
                    >
                        <span className="text-idara-orange font-bold ">Focus Areas :-</span>
                        <span className="text-black">  Computer Literacy · IT & Software Basics · Freelancing & Digital Skills</span>
                    </p>
                    <p 
                        className="text-black text-base"
                        data-aos="fade-up"
                        data-aos-delay="600"
                    >
                        Our goal is to prepare youth for sustainable income opportunities in today's digital economy.
                    </p>
                </div>
            </section>

            {/* ===== CREATIVE IMAGE LAYOUT ===== */}
            <section className="relative container mx-auto px-6 md:px-12 pb-8 md:pb-12">
                <div className="relative max-w-4xl mx-auto">

                    {/* Decorative Shapes - Animated to appear like a UI loading */}
                    <div 
                        className="absolute right-0 md:right-[-150px] top-[-10%] w-[40px] md:w-[44px] h-[100px] md:h-[120px] bg-[#012060] rounded-full z-10"
                        data-aos="slide-down"
                        data-aos-delay="400"
                    ></div>
                    <div 
                        className="absolute right-[-8px] md:right-[-149px] top-[9%] w-[18px] md:w-[45px] h-[18px] md:h-[45px] bg-idara-yellow rounded-full z-10"
                        data-aos="zoom-in"
                        data-aos-delay="700"
                    ></div>
                    <div 
                        className="absolute -left-4 md:left-[-170px] top-[52%] w-[50px] md:w-[90px] h-[50px] md:h-[85px] bg-idara-yellow rounded-full z-10"
                        data-aos="fade-right"
                        data-aos-delay="500"
                    ></div>
                    <div 
                        className="absolute -right-8 md:right-[-170px] top-[52%] w-[55px] md:w-[100px] h-[55px] md:h-[105px] bg-idara-cyan rounded-full z-10"
                        data-aos="fade-left"
                        data-aos-delay="500"
                    ></div>
                    
                    <div
                        className="absolute right-[46%] top-[54%] w-0 h-0 z-20"
                        style={{
                            borderTop: "50px solid #facc15",
                            borderRight: "50px solid transparent"
                        }}
                        data-aos="zoom-in"
                        data-aos-delay="800"
                    ></div>

                    <div 
                        className="absolute left-[-160] bottom-[-10%] md:bottom-[11%] w-[120px] md:w-[100px] h-[120px] md:h-[100px] bg-idara-cyan z-30"
                        style={{ clipPath: 'polygon(0% 70%, 70% 70%, 0% 0%)' }}
                        data-aos="fade-up-right"
                        data-aos-delay="600"
                    ></div>

                    {/* Two side-by-side images */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-70 relative z-5">
                        <div 
                            className="relative mt-6 overflow-hidden h-[220px] md:h-[370px] -mx-8 md:-mx-34"
                            data-aos="fade-up"
                        >
                            <img
                                src="/website media/IT Institute/Image 01.jpg"
                                alt="IT students in computer lab"
                                className="w-full h-[220px] md:h-[370px] object-container"
                            />
                        </div>
                        <div 
                            className="relative mt-6 overflow-hidden h-[220px] md:h-[370px] -mx-8 md:-mx-30"
                            data-aos="fade-up"
                            data-aos-delay="200"
                        >
                            <img
                                src="/website media/IT Institute/Image 02.jpg"
                                alt="Students learning digital skills"
                                className="w-full h-full object-container"
                            />
                        </div>
                    </div>

                    {/* Image 3 - Lower overlapping wider image */}
                    <div 
                        className="relative mt-3 overflow-hidden h-[200px] md:h-[290px] mb-[-90] -mx-6 md:-mx-34"
                        data-aos="zoom-in-up"
                        data-aos-delay="400"
                    >
                        <img
                            src="/website media/IT Institute/Image 03.jpg"
                            alt="IT training session"
                            className="w-auto min-w-full h-[250px] md:h-[350px] object-container"
                        />
                    </div>
                </div>
            </section>

            {/* ===== FULL-WIDTH BOTTOM IMAGE ===== */}
            <section 
                className="relative mt-[80px] w-full overflow-hidden h-[220px] md:h-[320px]"
                data-aos="fade-up"
            >
                <img
                    src="/website media/IT Institute/Footer Image.jpg"
                    alt="IT Institute students working"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-idara-cyan/60 mix-blend-multiply"></div>
            </section>

            <Footer />
        </main>
    );
}