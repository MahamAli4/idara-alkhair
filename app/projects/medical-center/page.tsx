'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function MedicalCenterPage() {

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            easing: 'ease-out-quad',
            offset: 100,
        });
    }, []);

    return (
        <main className="overflow-x-hidden bg-white">
            <Navbar />

            {/* ===== HERO BANNER ===== */}
            <section
                className="relative mt-[118px] w-full overflow-hidden h-[220px] md:h-[320px]"
                data-aos="fade"
            >
                <img
                    src="/website media/Medical Center/banner.jpg"
                    alt="Al-Khair Medical Center"
                    className="w-full h-full object-container"
                />

                <div className="absolute inset-0 flex items-center justify-center px-4">
                    <h1
                        className="text-4xl md:text-6xl lg:text-5xl font-bold text-white text-center tracking-tighter"
                        data-aos="zoom-in"
                        data-aos-delay="200"
                    >
                        <span className="text-idara-orange">Medical</span> Center
                    </h1>
                </div>
            </section>

            {/* ===== CONTENT SECTION ===== */}
            <section className="container mx-auto px-6 md:px-12 py-16 md:py-24">
                <div data-aos="fade-up">
                    <h2 className="text-4xl md:text-4xl font-bold leading-tight mb-8">
                        <span className="text-[#012060]">Healthcare for Those </span>
                        <span className="text-idara-orange font-extrabold">Who Cannot Afford It</span>
                    </h2>
                    <p className="text-gray-700 text-lg md:text-xl font-medium leading-relaxed mb-8">
                        Our Medical Center provides accessible healthcare services to underserved communities.
                    </p>
                    <div data-aos="fade-up" data-aos-delay="300">
                        <p className="text-lg md:text-xl">
                            <span className="text-idara-orange font-extrabold">Services Include :-</span>
                            <span className="text-gray-700 font-medium"> OPD consultations · Basic diagnostics · Affordable medicines</span>
                            <br />
                            <span className="text-gray-500 font-medium italic block mt-2">Health is not a privilege - it is a right.</span>
                        </p>
                    </div>
                </div>
            </section>

            {/* ===== CREATIVE HIGHER-FIDELITY LAYOUT ===== */}
            <section className="container mx-auto px-6 md:px-12 bg-white">
                <div
                    className="relative w-full h-[600px] md:h-[700px] lg:h-[1000px]"
                    style={{ backgroundImage: "url('/website media/Medical Center/Center Image.png')", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center" }}
                    data-aos="fade-up"
                >

                    {/* Top Section: Highlighted Quote & Main Image */}
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 mb-16 px-4 lg:px-0">

                        {/* Decorative Branding Shapes */}
                        <div className="absolute inset-0 pointer-events-none">
                            {/* Yellow Circle - Slides in from left */}
                            <div
                                className="absolute left-0 top-[50%] w-[80px] md:w-[120px] h-[80px] md:h-[120px] bg-idara-yellow rounded-full z-10 shadow-lg transform -translate-x-4"
                                data-aos="fade-right"
                                data-aos-delay="800"
                            ></div>
                        </div>

                        {/* Stylized Quote/Text Section (Top Right) */}
                        <div className="relative z-40 flex-1 w-full text-right">
                            <div className="flex flex-col font-montserrat select-none lg:scale-110 lg:origin-right mt-10 mr-7">
                                <div
                                    className="flex items-center justify-end gap-4"
                                    data-aos="fade-left"
                                    data-aos-delay="400"
                                >
                                    <span className="text-[#012060] font-black text-xl sm:text-2xl md:text-3xl lg:text-5xl tracking-tight">"Reliable Care for</span>
                                </div>

                                <h3
                                    className="text-idara-orange font-black text-4xl sm:text-5xl md:text-6xl lg:text-8xl italic tracking-tighter leading-[0.8] mb-4"
                                    data-aos="zoom-in-left"
                                    data-aos-delay="600"
                                >
                                    Healthier
                                </h3>

                                <div
                                    className="flex items-center justify-end gap-6"
                                    data-aos="fade-left"
                                    data-aos-delay="800"
                                >
                                    <span className="text-[#012060] font-black text-2xl sm:text-3xl md:text-4xl lg:text-6xl tracking-tighter italic">Communities"</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== BOTTOM IMAGE ===== */}
            <section>
                <div
                    className="relative w-full overflow-hidden"
                    data-aos="fade-up"
                >
                    <img
                        src="/images/medicalfooter.jpg"
                        alt="Idara Al-Khair Medical Team"
                        className="w-full h-auto object-cover"
                    />
                </div>
            </section>

            <Footer />
        </main>
    );
}