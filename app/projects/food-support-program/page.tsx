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
        <main className="overflow-x-hidden bg-white font-montserrat">
            <Navbar />

            {/* ===== HERO BANNER - With Blue Shade on Left ===== */}
            <section className="relative mt-0 md:mt-20 w-full h-[40vh] md:h-[70vh] overflow-hidden" data-aos="fade">
                <img
                    src="/website-media/foodsupportprogram/hero-banner.jpg"
                    alt="Food Support Program Hero"
                    className="w-full h-full object-cover block"
                />
                {/* Intense Blue Shade on Left */}
                <div className="absolute inset-0 bg-linear-to-r from-[#012060]/85 via-[#012060]/40 to-transparent z-10"></div>

                <div className="absolute inset-0 flex items-center justify-center z-20">
                    <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-black text-white tracking-tighter text-center drop-shadow-2xl px-4">
                        Food <span style={{ color: heroColor }}>Support</span> Program
                    </h1>
                </div>
            </section>

            {/* ===== MAIN CONTENT SECTION ===== */}
            <section className="relative w-full bg-white overflow-hidden pt-10 md:pt-16 pb-0">

                {/* 1. Black & White Crowd Background */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="/website-media/foodsupportprogram/BG.png"
                        alt="Background"
                        className="w-full h-full object-cover grayscale opacity-100"
                    />
                    <div className="absolute inset-0 bg-white/50"></div>
                </div>

                {/* 2. CORRECTED YELLOW SHAPE (Restored Color & Proportion) */}
                {/* <div className="absolute top-0 left-0 w-[90%] h-[95%] bg-[#ffc000] rounded-br-[60%] z-10 hidden md:block opacity-100"></div> */}

                <div className="container mx-auto px-4 md:px-12 relative z-20">

                    {/* Top Content Area */}
                    <div className="pt-4 sm:pt-8 md:pt-12 max-w-full relative z-30">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black mb-4 sm:mb-6 tracking-tighter leading-[0.95]" data-aos="fade-right">
                            <span className="text-[#012060]">Fighting Hunger </span><br className="sm:hidden"/>
                            <span style={{ color: accentColor }}>with Dignity</span>
                        </h2>

                        <p className="text-[#012060] text-base sm:text-lg md:text-2xl font-bold max-w-3xl mb-6 sm:mb-8 leading-relaxed" data-aos="fade-right" data-aos-delay="200">
                            {cmsData['content-description'] || "No family should sleep hungry. Our Food Support Program provides daily meals, monthly ration distributions, and seasonal food drives to families facing food insecurity."}
                        </p>

                        <div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center text-base sm:text-lg md:text-xl font-black gap-y-1 gap-x-2" data-aos="fade-right" data-aos-delay="400">
                            <span className="text-idara-orange uppercase tracking-widest">Program Highlights :-</span>
                            <span className="text-[#012060] font-bold">Daily meals for students & staff - Monthly ration packs - Ramadan & emergency food drives.</span>
                        </div>
                    </div>

                    {/* Middle Flex Area: Quote + Girl Image (Dominant Right) */}
                    <div className="flex flex-col lg:flex-row items-center justify-between mt-8 sm:mt-12 md:mt-16 lg:mt-24">

                        {/* QUOTE (Left Side - 40%) */}
                        <div className="w-full lg:w-[50%] relative z-40 mb-12 lg:mb-0">
                            <p className="leading-none font-black select-none tracking-tighter text-left">
                                <span className="text-idara-orange text-xl sm:text-2xl md:text-4xl lg:text-5xl" data-aos="fade-up">"Your support</span><br />
                                <span className="text-[#012060] text-4xl sm:text-5xl md:text-7xl lg:text-9xl" data-aos="fade-up" data-aos-delay="200">ensures</span><br />
                                <span className="text-[#ffc000] text-xl sm:text-2xl md:text-4xl lg:text-5xl" data-aos="fade-up" data-aos-delay="400">no plate remain</span><br />
                                <span className="text-[#012060] text-4xl sm:text-5xl md:text-7xl lg:text-9xl" data-aos="fade-up" data-aos-delay="600">empty"</span>
                            </p>
                        </div>

                        {/* GIRL IMAGE (Right Side - 60%) - Responsive Scaled */}
                        <div className="w-full lg:w-[60%] relative flex justify-end items-end mt-6 lg:mt-[-200px]">

                            {/* --- SMALLER DECORATIVE SHAPES --- */}
                            {/* Cyan Triangle (Top Right) */}
                            <div className="absolute top-[10%] right-[30%] w-10 h-10 md:w-14 md:h-14 bg-idara-cyan opacity-100 z-30" style={{ clipPath: 'polygon(100% 0, 0% 100%, 100% 100%)' }} data-aos="zoom-in"></div>

                            {/* Navy Bar (Pill) - Slimmer */}
                            <div className="absolute top-[35%] right-[0%] w-12 md:w-15 h-44 md:h-[300px] bg-[#012060] rounded-full z-10 hidden sm:block" data-aos="fade-left"></div>

                            {/* Yellow Circle - Smaller */}
                            <div className="absolute bottom-[15%] right-[0%] w-10 h-10 md:w-20 md:h-20 bg-idara-yellow rounded-full z-30 shadow-2xl" data-aos="zoom-in" data-aos-delay="300"></div>

                            {/* Yellow Triangle (Middle) - Smaller */}
                            <div className="absolute top-[45%] left-[5%] w-8 h-8 md:w-12 md:h-12 bg-idara-yellow z-30 hidden sm:block" style={{ clipPath: 'polygon(100% 100%, 0 0, 0 100%)' }}></div>

                            {/* Orange Triangle (Bottom Left) - Smaller */}
                            <div className="absolute bottom-[15%] left-[15%] w-10 h-10 md:w-14 md:h-14 bg-idara-orange z-30" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}></div>

                            {/* THE HUGE GIRL IMAGE (Responsive Scaled) */}
                            <div className="relative z-20 w-[140%] -ml-[20%] sm:w-[120%] sm:-ml-[10%] lg:w-[160%] lg:ml-0 lg:-mr-64 xl:w-[170%] xl:-mr-80 mb-0" data-aos="fade-left" data-aos-duration="1500">
                                <img
                                    src="/website-media/foodsupportprogram/kids.png"
                                    alt="Smiling Girl"
                                    className="w-full h-auto block drop-shadow-[0_35px_35px_rgba(0,0,0,0.5)]"
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ===== BOTTOM IMAGE ===== */}
            <section className="relative w-full overflow-hidden leading-0" data-aos="fade-up">
                <img
                    src="/website-media/foodsupportprogram/footer.jpg"
                    alt="Food Distribution"
                    className="w-full h-auto object-cover"
                />
            </section>

            <Footer />
        </main>
    );
}