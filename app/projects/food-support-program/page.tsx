'use client';

import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function FoodSupportProgramPage() {
    const [cmsData, setCmsData] = useState<any>({});

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            easing: 'ease-out-cubic',
            offset: 50,
        });
        fetchCMSContent();
    }, []);

    const fetchCMSContent = async () => {
        try {
            const res = await fetch('/api/admin/content?pageName=food-support-program', { cache: 'no-store' });
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
    const accentColor = cmsData['content-heading-color'] || '#ed7d31';

    return (
        <main className="overflow-x-hidden bg-white">
            <Navbar />

            {/* ===== HERO BANNER ===== */}
            <section 
                className="relative mt-20 w-full overflow-hidden h-[60vh]"
                data-aos="fade"
            >
                <img
                    src={cmsData['hero-image'] || "/website-media/foodsupportprogram/banner.jpg"}
                    alt="Food Support Program"
                    className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 flex items-center justify-center px-4 text-center">
                    <h1 
                        className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white tracking-tighter drop-shadow-2xl"
                        data-aos="zoom-out-up"
                    >
                        <span style={{ color: heroColor }}>{cmsData['hero-title']?.split(' ')[0] || 'Food'}</span> 
                        {' '}{cmsData['hero-title']?.split(' ').slice(1).join(' ') || 'Support Program'}
                    </h1>
                </div>
            </section>

            {/* ===== FULL BACKGROUND IMAGE SECTION ===== */}
            <section className="relative w-full min-h-screen overflow-hidden">
                <img
                    src={cmsData['middle-image'] || "/images/centerimage.png"}
                    alt="Background"
                    className="absolute inset-0 w-full h-full object-cover"
                    data-aos="zoom-out"
                    data-aos-duration="2000"
                />
                <div className="absolute inset-0 bg-white/40"></div>

                <div className="relative z-10 container mx-auto px-6 md:px-12 pt-16 pb-12">
                    <div className="max-w-4xl" data-aos="fade-right">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                            <span className="text-[#012060]">{cmsData['content-heading-black'] || 'Fighting Hunger'} </span>
                            <span style={{ color: accentColor }} className="font-black">{cmsData['content-heading-orange'] || 'with Dignity'}</span>
                        </h2>

                        <p className="text-black text-lg md:text-xl leading-relaxed mb-6 max-w-3xl font-medium">
                            {cmsData['content-description'] || 'No family should sleep hungry. Our Food Support Program provides daily meals, monthly ration distributions, and seasonal food drives to families facing food insecurity.'}
                        </p>

                        <p className="text-lg md:text-xl">
                            <span style={{ color: accentColor }} className="font-bold">Program Highlights :-</span>
                            <span className="text-black font-semibold">
                                {" "}{cmsData['services-list'] || 'Daily meals for students & staff · Monthly ration packs · Ramadan & emergency food drives'}
                            </span>
                        </p>
                    </div>

                    {/* OVERLAY QUOTE */}
                    <div className="mt-20 max-w-4xl mx-auto">
                        <p className="leading-[1.1] font-montserrat select-none">
                            <span style={{ color: accentColor }} className="font-black text-4xl md:text-6xl" data-aos="fade-up">"Your support</span><br />
                            <span className="text-[#012060] font-black text-6xl md:text-8xl" data-aos="fade-up" data-aos-delay="200">ensures</span><br />
                            <span className="text-[#ffc000] font-black text-4xl md:text-5xl" data-aos="fade-up" data-aos-delay="400">no plate remain</span><br />
                            <span className="text-[#012060] font-black text-6xl md:text-9xl" data-aos="fade-up" data-aos-delay="600">empty"</span>
                        </p>
                    </div>
                </div>
            </section>

            {/* ===== BOTTOM IMAGE (Full Width) ===== */}
            <section className="relative w-full overflow-hidden leading-0" data-aos="fade-up">
                <img
                    src={cmsData['footer-image'] || "/website-media/foodsupportprogram/footer.jpg"}
                    alt="Footer Banner"
                    className="w-full h-auto object-cover"
                />
            </section>

            <Footer />
        </main>
    );
}