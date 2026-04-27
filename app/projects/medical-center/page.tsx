'use client';

import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function MedicalCenterPage() {
    const [cmsData, setCmsData] = useState<any>({});

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            easing: 'ease-out-quad',
            offset: 100,
        });
        fetchCMSContent();
    }, []);

    const fetchCMSContent = async () => {
        try {
            const res = await fetch('/api/admin/content?pageName=medical-center', { cache: 'no-store' });
            if (res.ok) {
                const data = await res.json();
                console.log("CMS Data Received:", data);
                if (Array.isArray(data)) {
                    const formattedData = data.reduce((acc: any, item: any) => {
                        acc[item.key] = item.value;
                        return acc;
                    }, {});
                    setCmsData(formattedData);
                }
            } else {
                console.error("CMS Fetch Failed Status:", res.status);
            }
        } catch (err) {
            console.error("CMS load failed", err);
        }
    };

    const accentColor = cmsData['accent-color'] || '#f05a28';

    return (
        <main className="overflow-x-hidden bg-white">
            <Navbar />

            {/* ===== HERO BANNER (Matches Image) ===== */}
            <section className="relative mt-29.5 w-full overflow-hidden h-[400px] md:h-[500px]" data-aos="fade">
                <img
                    src={cmsData['hero-image'] || "/website-media/medicalcenter/banner.jpg"}
                    alt="Al-Khair Medical Center"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white text-center tracking-tight drop-shadow-2xl">
                        <span style={{ color: accentColor }}>{cmsData['hero-title']?.split(' ')[0] || 'Medical'}</span>
                        {' '}{cmsData['hero-title']?.split(' ').slice(1).join(' ') || 'Center'}
                    </h1>
                </div>
            </section>

            {/* ===== CONTENT SECTION (Matches Image) ===== */}
            <div className="container mx-auto px-6 md:px-12 pt-16 pb-0">
                <div data-aos="fade-up" className="max-w-4xl">
                    <h2 className="text-4xl md:text-5xl font-bold text-[#012060] mb-6 leading-tight">
                        {cmsData['content-heading-black'] || 'Healthcare for Those'}{' '}
                        <span style={{ color: accentColor }}>{cmsData['content-heading-orange'] || 'Who Cannot Afford It'}</span>
                    </h2>
                    <p className="text-gray-600 text-lg md:text-xl font-medium mb-8">
                        {cmsData['content-description'] || 'Our Medical Center provides accessible healthcare services to underserved communities.'}
                    </p>

                    <div className="space-y-1">
                        <p className="text-lg font-black" style={{ color: accentColor }}>
                            Services Include :- <span className="text-gray-600 font-bold">{cmsData['services-list'] || 'OPD consultations - Basic diagnostics - Affordable medicines'}</span>
                        </p>
                        <p className="text-gray-600 font-bold italic">
                            {cmsData['content-quote'] || 'Health is not a privilege - it is a right.'}
                        </p>
                    </div>
                </div>

                {/* ===== GRAPHIC SECTION (Full Container Width with Overlay Text) ===== */}
                <div className="relative mb-0 mt-20" data-aos="fade-up">
                    {/* Main Image Wrapper */}
                    <div className="relative w-full rounded-[3rem] overflow-hidden shadow-2xl">
                        <img
                            src={cmsData['middle-image'] || "/images/medicalcenter.png"}
                            alt="Medical Staff"
                            className="w-full h-auto min-h-[400px] object-cover"
                        />

                        {/* Gradient Overlay for Text Readability */}
                        <div className="absolute inset-0 bg-linear-to-tr from-transparent via-transparent to-[#012060]/40"></div>

                        {/* Top-Right Text Overlay */}
                        <div className="absolute top-12 right-12 text-right max-w-sm md:max-w-md z-10">
                            <div className="relative inline-block">
                                <span className="text-6xl absolute -left-8 -top-4 opacity-30 text-white">“</span>
                                <h3 className="text-3xl md:text-5xl font-black leading-none tracking-tighter text-white drop-shadow-lg">
                                    Reliable Care for<br />
                                    <span className="text-idara-yellow">Healthier</span><br />
                                    Communities”
                                </h3>
                                <div className="absolute -right-6 top-1/2 w-8 h-8 bg-emerald-400 transform rotate-45 opacity-90 shadow-lg"></div>
                            </div>
                        </div>
                    </div>

                    {/* Decorative Shapes (Floating behind/around) */}
                    <div className="absolute -left-10 -bottom-10 w-32 h-32 bg-idara-yellow rounded-full z-[-1] opacity-50 blur-2xl"></div>
                    <div className="absolute -right-5 -top-5 w-20 h-20 bg-idara-orange rounded-full z-[-1] opacity-30 blur-xl"></div>
                </div>

            </div>

            {/* ===== FULL WIDTH BOTTOM IMAGE SECTION ===== */}
            <div className="w-full overflow-hidden leading-0" data-aos="fade-up">
                <img
                    src="/images/medicalfooter.jpg"
                    alt="Medical Service"
                    className="w-full h-[500px] md:h-[600px] object-cover shadow-none"
                />
            </div>

            <Footer />
        </main>
    );
}