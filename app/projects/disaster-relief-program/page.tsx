"use client";

import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function DisasterReliefProgramPage() {
    const [cmsData, setCmsData] = useState<any>({});

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            easing: 'ease-out-cubic',
        });
        fetchCMSContent();
    }, []);

    const fetchCMSContent = async () => {
        try {
            const res = await fetch('/api/admin/content?pageName=disaster-relief-program', { cache: 'no-store' });
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

    const heroColor = cmsData['hero-title-color'] || '#f05a28';
    const accentColor = cmsData['content-heading-color'] || '#f05a28';

    return (
        <main className="overflow-x-hidden bg-white">
            <Navbar />

            {/* ===== HERO BANNER ===== */}
            <section className="relative mt-0 md:mt-20 w-full h-[40vh] md:h-[80vh] overflow-hidden">
                <img
                    src={cmsData['hero-image'] || "/website-media/disasterreliefprogram/bannerimagecopy.jpg"}
                    alt="Disaster Relief"
                    className="w-full h-full object-cover block"
                />
                <div className="absolute inset-0 bg-[#012060]/10 flex items-center justify-center">
                    <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white text-center tracking-tighter drop-shadow-2xl" data-aos="zoom-in">
                        <span style={{ color: heroColor }}>{cmsData['hero-title']?.split(' ')[0] || 'DISASTER'}</span> 
                        {' '}{cmsData['hero-title']?.split(' ').slice(1).join(' ') || 'Relief Program'}
                    </h1>
                </div>
            </section>

            {/* === CONTENT SECTION === */}
            <section className="container mx-auto px-6 md:px-12 py-16 md:py-24">
                <div className="max-w-4xl">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6 text-[#012060]" data-aos="fade-right">
                        {cmsData['content-heading-black'] || 'Standing with'} <span style={{ color: accentColor }}>{cmsData['content-heading-orange'] || 'Communities in Crises'}</span>
                    </h2>

                    <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-6 max-w-3xl font-medium" data-aos="fade-up">
                        {cmsData['content-description'] || 'During natural disasters and emergencies, Idara Al-Khair responds swiftly with relief efforts.'}
                    </p>

                    <p className="text-lg md:text-xl" data-aos="fade-up">
                        <span style={{ color: accentColor }} className="font-black uppercase tracking-widest text-base">Our Response Includes :- </span>
                        <span className="text-[#012060] font-bold">
                            {cmsData['services-list'] || 'Emergency food & supplies · Medical assistance · Rehabilitation support.'}
                        </span>
                    </p>
                </div>
            </section>

            {/* QUOTE SECTION */}
            <section className="container mx-auto px-6 md:px-12">
                <div className="max-w-4xl mx-auto py-12">
                    <p className="leading-[1.1] font-black" data-aos="fade-up">
                        <span className="text-[#012060] text-4xl md:text-6xl">"We </span>
                        <span className="text-idara-yellow text-6xl md:text-8xl">Stand by</span><br />
                        <span className="text-[#012060] text-3xl md:text-5xl opacity-90">communities when they</span><br />
                        <span className="inline-block translate-x-20 md:translate-x-40">
                            <span style={{ color: accentColor }} className="text-6xl md:text-9xl">need</span>
                            <span className="text-[#012060] text-3xl md:text-5xl"> it most"</span>
                        </span>
                    </p>
                </div>
            </section>

            {/* MIDDLE IMAGE (Full Width) */}
            <section className="w-full h-[400px] md:h-[700px] overflow-hidden mt-12 mb-0" data-aos="fade-up">
                <img
                    src={cmsData['middle-image'] || "/website-media/disasterreliefprogram/centerimage.jpg"}
                    alt="Relief Work"
                    className="w-full h-full object-cover"
                />
            </section>

            {/* BOTTOM IMAGE (Full Width) */}
            <section className="relative w-full overflow-hidden h-55 md:h-80 leading-0" data-aos="fade-up">
                <img
                    src={cmsData['footer-image'] || "/images/footerimage.jpg"}
                    alt="Workers"
                    className="w-full h-full object-cover"
                />
            </section>

            <Footer />
        </main>
    );
}