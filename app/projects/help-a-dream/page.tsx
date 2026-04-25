'use client';

import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function HelpADreamPage() {
    const [cmsData, setCmsData] = useState<any>({});

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            easing: 'ease-out-quad',
            offset: 120,
        });
        fetchCMSContent();
    }, []);

    const fetchCMSContent = async () => {
        try {
            const res = await fetch('/api/admin/content?pageName=help-a-dream', { cache: 'no-store' });
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
            <section 
                className="relative mt-20 w-full overflow-hidden h-[60vh]"
                data-aos="fade"
            >
                <img
                    src={cmsData['hero-image'] || "/website-media/helpadream/banner.jpg"}
                    alt="Help a Dream"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-[#012060]/10 text-center flex items-center justify-center">
                    <h1 
                        className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter drop-shadow-2xl"
                        data-aos="zoom-in"
                    >
                        <span style={{ color: heroColor }}>{cmsData['hero-title']?.split(' ')[0] || 'Help'}</span> 
                        {' '}{cmsData['hero-title']?.split(' ').slice(1).join(' ') || 'A Dream'}
                    </h1>
                </div>
            </section>

            {/* ===== CONTENT SECTION ===== */}
            <section className="container mx-auto px-6 md:px-12 py-16 md:pt-24 md:pb-32">
                <div className="flex flex-col items-start gap-12">
                    <div className="w-full" data-aos="fade-up">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] mb-8 text-[#012060]">
                            {cmsData['content-heading-black'] || 'Help a Child'} <span style={{ color: accentColor }} className="font-extrabold">{cmsData['content-heading-orange'] || 'Dream Again'}</span>
                        </h2>
                        <p className="text-black text-lg md:text-xl leading-relaxed font-medium">
                            {cmsData['content-description'] || 'Thousands of children are forced to give up their education due to poverty. Help a Dream is Idara Al-Khair’s child sponsorship program designed to give deserving children access to education, healthcare, and basic necessities.'}
                        </p>
                    </div>
                </div>
            </section>

            {/* ===== WHAT YOUR SPONSORSHIP PROVIDES ===== */}
            <section className="container mx-auto px-6 md:px-14 pb-16 md:pb-24 -mt-10 md:-mt-20">
                <div className="flex flex-col items-start gap-8" data-aos="fade-right">
                    <div className="w-full">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] mb-8 text-[#012060]">
                            What Your <span style={{ color: accentColor }} className="font-extrabold">Sponsorships</span> Provides?
                        </h2>
                    </div>
                </div>

                <div className="w-full overflow-hidden" data-aos="zoom-in" data-aos-duration="1200">
                    <div className="relative w-full h-auto rounded-4xl overflow-hidden shadow-2xl">
                        <img
                            src={cmsData['middle-image'] || "/website-media/helpadream/centerimage.png"}
                            alt="Sponsorship"
                            className="w-full object-cover"
                        />
                    </div>
                </div>

                <p className="text-center text-[#012060] font-black text-xl md:text-2xl mt-8 px-4" data-aos="fade-up">
                    {cmsData['content-quote'] || '“Your Sponsorship doesn’t just support a child – it transforms an entire family.”'}
                </p>
            </section>

            {/* ===== WHY SPONSOR SECTION ===== */}
            <section className="bg-gray-50 pt-16 md:pt-24 relative">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-center text-[#012060]" data-aos="fade-up">
                        Why <span style={{ color: accentColor }} className="font-bold">Sponsor</span> Through Idara Al-Khair
                    </h2>

                    <div className="mt-10 flex flex-col items-center text-lg md:text-xl font-bold text-black gap-4 text-center" data-aos="fade-up">
                        <p className="max-w-3xl leading-relaxed">
                            {cmsData['services-list'] || '• Transparent utilization of funds • Regular updates on sponsored children • Long-term impact through education'}
                        </p>
                    </div>

                    <div className="flex justify-center mt-12 pb-20">
                        <button style={{ backgroundColor: '#012060' }} className="rounded-2xl text-white px-12 py-5 text-2xl font-black hover:scale-105 transition-all shadow-2xl shadow-[#012060]/30 active:scale-95">
                            Sponsor a child today
                        </button>
                    </div>
                </div>

                {/* BOTTOM IMAGE (Full Width) */}
                <div className="w-full leading-0 block overflow-hidden" data-aos="fade-up">
                    <img
                        src={cmsData['footer-image'] || "/images/helpadreamfooter.png"}
                        alt="Footer"
                        className="w-full h-auto object-cover block"
                    />
                </div>
            </section>

            <Footer />
        </main>
    );
}