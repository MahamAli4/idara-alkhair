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
                className="relative mt-20 w-full overflow-hidden h-[80vh]"
                data-aos="fade"
            >
                <img
                    src="/website-media/itinstitute/banner.jpg"
                    alt="IT Institute Classroom"
                    className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-[#012060]/20"></div>

                <div className="absolute inset-0 flex items-center justify-center px-4">
                    <div className="max-w-5xl mx-auto text-center px-4">
                        <h1 
                            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white text-center tracking-tighter"
                            data-aos="zoom-out"
                            data-aos-delay="200"
                        >
                            <span className="text-idara-orange font-black">IT</span> Institute
                        </h1>
                    </div>
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
            <section className="container mx-auto px-6 md:px-12">
                <div className="relative">

                    {/* Decorative Shapes - Animated to appear like a UI loading */}
                    <div 
                        className="absolute right-0 md:-right-37.5 top-[-10%] w-10 md:w-11 h-25 md:h-30 bg-[#012060] rounded-full z-10"
                        data-aos="slide-down"
                        data-aos-delay="400"
                    ></div>
                    <div 
                        className="absolute -right-2 md:-right-37.25 top-[9%] w-4.5 md:w-11.25 h-4.5 md:h-11.25 bg-idara-yellow rounded-full z-10"
                        data-aos="zoom-in"
                        data-aos-delay="700"
                    ></div>
                    <div 
                        className="absolute -left-4 md:-left-42.5 top-[52%] w-12.5 md:w-22.5 h-12.5 md:h-21.25 bg-idara-yellow rounded-full z-10"
                        data-aos="fade-right"
                        data-aos-delay="500"
                    ></div>
                    <div 
                        className="absolute -right-8 md:-right-42.5 top-[52%] w-13.75 md:w-25 h-13.75 md:h-26.25 bg-idara-cyan rounded-full z-10"
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
                        className="absolute left-[-160] bottom-[-10%] md:bottom-[11%] w-30 md:w-25 h-30 md:h-25 bg-idara-cyan z-30"
                        style={{ clipPath: 'polygon(0% 70%, 70% 70%, 0% 0%)' }}
                        data-aos="fade-up-right"
                        data-aos-delay="600"
                    ></div>

                    {/* Two side-by-side images */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-70 relative z-5">
                        <div 
                            className="relative mt-6 overflow-hidden h-55 md:h-92.5 -mx-8 md:-mx-34"
                            data-aos="fade-up"
                        >
                            <img
                                src="/website-media/itinstitute/image01.jpg"
                                alt="IT students in computer lab"
                                className="w-full h-55 md:h-92.5 object-container"
                            />
                        </div>
                        <div 
                            className="relative mt-6 overflow-hidden h-55 md:h-92.5 -mx-8 md:-mx-30"
                            data-aos="fade-up"
                            data-aos-delay="200"
                        >
                            <img
                                src="/website-media/itinstitute/image02.jpg"
                                alt="Students learning digital skills"
                                className="w-full h-full object-container"
                            />
                        </div>
                    </div>

                    {/* Image 3 - Lower overlapping wider image */}
                    <div 
                        className="relative mt-3 overflow-hidden h-50 md:h-72.5 mb-[-90] -mx-6 md:-mx-34"
                        data-aos="zoom-in-up"
                        data-aos-delay="400"
                    >
                        <img
                            src="/website-media/itinstitute/image03.jpg"
                            alt="IT training session"
                            className="w-auto min-w-full h-62.5 md:h-87.5 object-container"
                        />
                    </div>
                </div>
            </section>

            {/* ===== FULL-WIDTH BOTTOM IMAGE ===== */}
            <section 
                className="relative mt-12.5 w-full overflow-hidden h-55 md:h-77.5"
                data-aos="fade-up"
            >
                <img
                    src="/website-media/itinstitute/footerimage.jpg"
                    alt="IT Institute students working"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-idara-cyan/60 mix-blend-multiply"></div>
            </section>

            <Footer />
        </main>
    );
}