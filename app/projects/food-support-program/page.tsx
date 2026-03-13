'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function FoodSupportProgramPage() {

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            easing: 'ease-out-cubic',
            offset: 50,
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
                    src="/website media/Food Support Program/Banner.jpg"
                    alt="Food Support Program"
                    className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-[#012060]/20"></div>

                <div className="absolute inset-0 flex items-center justify-center px-4">
                    <h1 
                        className="text-4xl md:text-6xl lg:text-5xl font-bold text-white text-center tracking-tighter"
                        data-aos="zoom-out-up"
                        data-aos-delay="200"
                    >
                        Food <span className="text-[#ed7d31]">Support</span> Program
                    </h1>
                </div>
            </section>


            {/* ===== FULL BACKGROUND IMAGE SECTION ===== */}
            <section className="relative w-full min-h-[1210px] overflow-hidden">

                {/* Background Image - Slight zoom on entrance for depth */}
                <img
                    src="/images/CenterImage.png"
                    alt="Child smiling"
                    className="absolute inset-0 w-full h-full object-cover"
                    data-aos="zoom-out"
                    data-aos-duration="2000"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-white/20"></div>

                {/* CONTENT + CREATIVE LAYOUT */}
                <div className="relative z-10">

                    {/* TEXT CONTENT */}
                    <div className="container mx-auto px-6 md:px-12 pt-12 pb-8 md:pt-16 md:pb-12">
                        <div className="max-w-4xl" data-aos="fade-right">
                            <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
                                <span className="text-[#012060]">Fighting Hunger </span>
                                <span className="text-[#ed7d31] font-black">with Dignity</span>
                            </h2>

                            <p className="text-black text-base md:text-lg leading-relaxed mb-5 max-w-3xl">
                                No family should sleep hungry. Our Food Support Program provides daily meals, monthly ration distributions, and seasonal food drives to families facing food insecurity.
                            </p>

                            <p className="text-base md:text-lg">
                                <span className="text-[#ed7d31] font-bold">
                                    Program Highlights :-
                                </span>
                                <span className="text-black">
                                    {" "}Daily meals for students & staff · Monthly ration packs · Ramadan & emergency food drives
                                </span>
                            </p>
                        </div>
                    </div>


                    {/* CREATIVE IMAGE LAYOUT */}
                    <section className="relative container mx-auto px-6 md:px-12 pb-16">
                        <div className="relative max-w-4xl mx-auto">
                            
                            {/* Stylized Quote - Staggered entrance */}
                            <div className="relative z-20 mt-15 mb-8 max-w-[340px] md:max-w-[400px]">
                                <p className="leading-[1.1] font-montserrat select-none">
                                    <span 
                                        className="text-idara-orange font-black text-3xl md:text-5xl inline-block"
                                        data-aos="fade-up"
                                        data-aos-delay="300"
                                    >
                                        "Your support
                                    </span>
                                    <br />
                                    <span 
                                        className="text-[#012060] font-black text-5xl md:text-7xl inline-block"
                                        data-aos="fade-up"
                                        data-aos-delay="500"
                                    >
                                        ensures
                                    </span>
                                    <br />
                                    <span 
                                        className="text-[#ffc000] font-black text-3xl md:text-4xl inline-block"
                                        data-aos="fade-up"
                                        data-aos-delay="700"
                                    >
                                        no plate remain
                                    </span>
                                    <br />
                                    <span 
                                        className="text-[#012060] font-black text-5xl md:text-8xl inline-block"
                                        data-aos="fade-up"
                                        data-aos-delay="900"
                                    >
                                        empty"
                                    </span>
                                </p>
                            </div>

                        </div>
                    </section>

                </div>
            </section>


<<<<<<< HEAD
            {/* ===== BOTTOM IMAGE ===== */}
            <section 
                className="relative w-full overflow-hidden"
                data-aos="fade-up"
            >
                <img
                    src="/website media/Food Support Program/Footer.jpg"
                    alt="Food distribution"
                    className="w-full h-auto object-cover"
                />
=======
                    {/* Decorative Shapes */}
                    {/* Navy rounded pill - right */}
                    <div className="absolute -right-4 md:right-[-20px] top-[20%] w-[45px] md:w-[60px] h-[110px] md:h-[150px] bg-[#012060] rounded-full z-10"></div>
                    {/* Orange/Yellow circle - right below pill */}
                    <div className="absolute -right-2 md:right-[-10px] top-[45%] w-[50px] md:w-[65px] h-[50px] md:h-[65px] bg-idara-orange rounded-full z-10"></div>
                    {/* Cyan triangle - center right */}
                    <div className="absolute right-[30%] top-[25%] w-[30px] md:w-[40px] h-[30px] md:h-[40px] bg-idara-cyan z-10"
                        style={{ clipPath: 'polygon(0 0, 100% 50%, 0 100%)' }}></div>
                    {/* Orange triangle - center */}
                    <div className="absolute left-[50%] top-[55%] w-[35px] md:w-[45px] h-[35px] md:h-[45px] bg-idara-orange z-10"
                        style={{ clipPath: 'polygon(0 0, 100% 50%, 0 100%)' }}></div>
                    {/* Orange triangle - bottom left */}
                    <div className="absolute left-8 md:left-12 bottom-[35%] w-[35px] md:w-[45px] h-[35px] md:h-[45px] bg-idara-orange z-10"
                        style={{ clipPath: 'polygon(0 100%, 50% 0, 100% 100%)' }}></div>
                    {/* Cyan circle - bottom right */}
                    <div className="absolute right-[10%] bottom-[25%] w-[40px] md:w-[50px] h-[40px] md:h-[50px] bg-idara-cyan rounded-full z-10"></div>

                    {/* Yellow swoosh / curve shape behind main image */}
                    <div className="absolute top-[-5%] right-[5%] w-[70%] h-[60%] z-0">
                        <svg viewBox="0 0 600 400" className="w-full h-full" preserveAspectRatio="none">
                            <path
                                d="M600,0 Q400,50 350,200 Q300,350 100,400 L600,400 Z"
                                fill="#FFB300"
                            />
                        </svg>
                    </div>

                    {/* Stylized Quote Text */}
                    <div className="relative z-20 mb-6 max-w-[340px] md:max-w-[400px]">
                        <p className="leading-[1.1]">
                            <span className="text-idara-orange font-black text-2xl md:text-4xl">"Your support</span>
                            <br />
                            <span className="text-white font-black text-4xl sm:text-5xl md:text-7xl" style={{ WebkitTextStroke: '2px #012060', paintOrder: 'stroke fill' }}>ensures</span>
                            <br />
                            <span className="text-[#012060] italic text-lg md:text-2xl font-medium">no plate remain</span>
                            <br />
                            <span className="text-[#012060] font-black text-4xl sm:text-5xl md:text-7xl italic">empty"</span>
                        </p>
                    </div>

                    {/* Main Image - B&W style child */}
                    <div className="relative z-5 md:ml-[15%] rounded-xl overflow-hidden shadow-2xl">
                        <img
                            src="/website media/Food Support Program/Center Image.png"
                            alt="Child smiling - food support"
                            className="w-full h-[300px] md:h-[420px] object-cover grayscale"
                        />
                    </div>

                    {/* Lower overlapping food distribution images */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative z-6 -mt-12 md:-mt-20">
                        <div className="rounded-xl overflow-hidden shadow-2xl border-4 border-white">
                            <img
                                src="/website media/Food Support Program/Footer.jpg"
                                alt="Food distribution to families"
                                className="w-full h-[200px] md:h-[260px] object-cover"
                            />
                        </div>
                        <div className="rounded-xl overflow-hidden shadow-2xl border-4 border-white">
                            <img
                                src="/website media/About us/Background Image.jpg"
                                alt="Community food drive"
                                className="w-full h-[200px] md:h-[260px] object-cover"
                            />
                        </div>
                    </div>
                </div>
>>>>>>> eb9d2f8ba66949931884d44be0414745c204e5f5
            </section>

            <Footer />

        </main>
    );
}