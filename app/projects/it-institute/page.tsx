'use client';

import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import {
    ArrowRight
} from 'lucide-react';

export default function ITInstitutePage() {
    const [cmsData, setCmsData] = useState<any>({});

    useEffect(() => {
        AOS.init({
            duration: 900,
            once: true,
            easing: 'ease-in-out',
            offset: 80,
        });
        fetchCMSContent();
    }, []);

    const fetchCMSContent = async () => {
        try {
            const res = await fetch('/api/admin/content?pageName=it-institute', { cache: 'no-store' });
            if (res.ok) {
                const data = await res.json();
                if (Array.isArray(data)) {
                    const formattedData = data.reduce((acc: any, item: any) => {
                        acc[item.key] = item.value;
                        return acc;
                    }, {});
                    setCmsData(formattedData);
                }
            }
        } catch (err) {
            console.error("CMS load failed", err);
        }
    };

    const courseImages = [
        "/website-media/itinstitute/digital-marketing.jpg",
        "/website-media/itinstitute/cit-fundamentals.jpg",
        "/website-media/itinstitute/ai-Communication.jpg",
        "/website-media/itinstitute/graphic-designing.jpg",
        "/website-media/itinstitute/english-language.jpg",
        "/website-media/itinstitute/cyber-security.jpg"
    ];

    return (
        <main className="overflow-x-hidden bg-white">
            <Navbar />

            {/* ===== HERO BANNER - With Blue Left Shade ===== */}
            <section className="relative mt-0 md:mt-20 w-full h-[40vh] md:h-[70vh] overflow-hidden" data-aos="fade">
                <img
                    src={cmsData['hero-image'] || "/website-media/itinstitute/ait.jpeg"}
                    alt="IT Institute"
                    className="w-full h-full object-cover block"
                />
                {/* Dark Blue Left Shade from Screenshot */}
                <div className="absolute inset-0 bg-linear-to-r from-[#012060]/90 via-[#012060]/40 to-transparent z-10"></div>

                <div className="absolute inset-0 flex items-center justify-center z-20">
                    <h1 className="text-4xl sm:text-6xl md:text-8xl font-black text-white text-center tracking-tighter drop-shadow-2xl">
                        IT <span className="text-idara-orange">INSTITUTE</span>
                    </h1>
                </div>
            </section>

            {/* ===== CONTENT SECTION ===== */}
            <section className="relative w-full py-12 sm:py-16 md:py-24 bg-white">

                {/* --- EXACT SHAPES FROM SCREENSHOT --- */}

                {/* 1. Top Right Cyan Triangle */}
                <div className="absolute top-[10%] right-[12%] w-10 h-10 md:w-16 md:h-16 bg-idara-cyan opacity-90 z-20 hidden lg:block" style={{ clipPath: 'polygon(100% 0, 0% 100%, 100% 100%)' }}></div>

                {/* 2. Middle Right Bar + Circle (!) */}
                <div className="absolute top-[20%] right-[8%] lg:flex flex-col items-center gap-2 z-20 hidden">
                    <div className="w-10 h-40 bg-[#012060] rounded-full"></div>
                    <div className="w-10 h-10 bg-idara-yellow rounded-full"></div>
                </div>

                {/* 3. Large Cyan Circle (Middle Right) */}
                <div className="absolute top-[50%] right-[5%] w-20 h-20 md:w-28 md:h-28 bg-idara-cyan rounded-full opacity-90 z-20 hidden lg:block"></div>

                {/* 4. Yellow Triangle (Bottom Right of Grid) */}
                <div className="absolute bottom-[10%] right-[10%] w-12 h-12 md:w-20 md:h-20 bg-idara-yellow opacity-90 z-20 hidden lg:block" style={{ clipPath: 'polygon(100% 100%, 0 0, 0 100%)' }}></div>

                {/* 5. Bottom Left Bar + Circle (!) */}
                <div className="absolute bottom-[10%] left-[5%] lg:flex flex-col-reverse items-center gap-3 z-20 hidden">
                    <div className="w-8 h-48 bg-[#012060] rounded-full"></div>
                    <div className="w-10 h-10 bg-idara-yellow rounded-full"></div>
                </div>

                {/* 6. Small Yellow Triangle (Bottom Center) */}
                <div className="absolute bottom-[40%] left-[45%] w-6 h-6 md:w-10 md:h-10 bg-idara-yellow opacity-90 z-20 hidden lg:block" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}></div>

                <div className="container mx-auto px-4 sm:px-6 relative z-10">
                    <div className="max-w-full mx-auto mb-10 sm:mb-16 px-2 sm:px-6">
                        <h2 className="text-3xl sm:text-4xl md:text-7xl font-black text-[#012060] mb-4 tracking-tighter">
                            Digital Skills for <br className="hidden sm:block md:hidden"/> <span className="text-idara-orange">a Digital World</span>
                        </h2>
                        <p className="text-gray-700 text-base sm:text-lg md:text-xl font-medium max-w-5xl leading-relaxed mb-6">
                            The IT Institute prepares students for modern careers by providing training in essential digital and technology-based skills.
                        </p>
                        <div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-x-2 gap-y-1 text-base sm:text-lg md:text-xl mb-4">
                            <span className="text-idara-orange font-black uppercase tracking-widest text-sm sm:text-base md:text-lg">Focus Areas :-</span>
                            <span className="text-[#012060] font-bold text-sm sm:text-base md:text-lg">Computer Literacy - IT & Software Basics - Freelancing & Digital Skills</span>
                        </div>
                    </div>

                    {/* Image Grid */}
                    <div className="max-w-5xl mx-auto">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10 justify-items-center mb-16">
                            {courseImages.map((img, idx) => (
                                <div
                                    key={idx}
                                    className="w-full max-w-[320px] shadow-2xl rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-300 bg-white"
                                    data-aos="zoom-in"
                                    data-aos-delay={idx * 100}
                                >
                                    <img
                                        src={img}
                                        alt="Course Card"
                                        className="w-full h-auto block"
                                    />
                                </div>
                            ))}
                        </div>

                        {/* Enroll Button */}
                        <div className="flex justify-center" data-aos="zoom-in">
                            <a
                                href="https://ait.iak.ngo/courses"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-idara-orange text-white px-16 py-4 rounded-xl font-black text-2xl shadow-2xl hover:scale-105 transition-all active:scale-95 inline-block text-center"
                            >
                                Enroll Now
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== BOTTOM LAB IMAGE WITH INTENSE CYAN SHADE ===== */}
            <section className="relative w-full h-[40vh] md:h-[60vh] overflow-hidden" data-aos="fade-up">
                <img
                    src="/website-media/itinstitute/before-footer.jpg"
                    alt="IT Lab"
                    className="w-full h-full object-cover"
                />
                {/* Intense Cyan/Teal Shade from Screenshot */}
                <div className="absolute inset-0 bg-idara-cyan/60 mix-blend-multiply z-10"></div>
                <div className="absolute inset-0 bg-linear-to-t from-[#012060]/30 to-transparent z-20"></div>
            </section>

            <Footer />
        </main>
    );
}