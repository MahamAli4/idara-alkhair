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
                className="relative mt-20 w-full overflow-hidden h-[80vh]"
                data-aos="fade"
            >
                <img
                    src="/website-media/foodsupportprogram/banner.jpg"
                    alt="Food Support Program"
                    className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-[#012060]/20"></div>

                <div className="absolute inset-0 flex items-center justify-center px-4">
                    <div className="max-w-5xl mx-auto text-center px-4">
                        <h1 
                            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white text-center tracking-tighter"
                            data-aos="zoom-out-up"
                            data-aos-delay="200"
                        >
                            Food <span className="text-idara-orange">Support</span> Program
                        </h1>
                    </div>
                </div>
            </section>


            {/* ===== FULL BACKGROUND IMAGE SECTION ===== */}
            <section className="relative w-full min-h-302.5 overflow-hidden">

                {/* Background Image - Slight zoom on entrance for depth */}
                <img
                    src="/images/centerimage.png"
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
                            <div className="relative z-20 mt-15 mb-8 max-w-85 md:max-w-100">
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


            {/* ===== BOTTOM IMAGE ===== */}
            <section 
                className="relative w-full overflow-hidden"
                data-aos="fade-up"
            >
                <img
                    src="/website-media/foodsupportprogram/footer.jpg"
                    alt="Food distribution"
                    className="w-full h-auto object-cover"
                />
            </section>

            <Footer />

        </main>
    );
}