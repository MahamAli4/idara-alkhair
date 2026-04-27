'use client';

import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function NorthCityHospitalPage() {
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
            const res = await fetch('/api/admin/content?pageName=north-city-hospital', { cache: 'no-store' });
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

    const heroColor = cmsData['hero-title-color'] || '#ed7d31'; // Screenshot Orange
    const idaraBlue = '#012060';

    return (
        <main className="overflow-x-hidden bg-white font-montserrat">
            <Navbar />

            {/* ===== HERO BANNER - With Blue Shade Overlay ===== */}
            <section className="relative mt-20 w-full h-[35vh] md:h-[70vh] overflow-hidden" data-aos="fade">
                <img
                    src="/website-media/northcity-hospital/ANCh-hero-banner.jpg"
                    alt="Al-Khair North City Hospital Hero"
                    className="w-full h-full object-cover"
                />
                {/* Premium Blue Shade Overlay */}
                <div className="absolute inset-0 bg-linear-to-r from-[#012060]/80 via-[#012060]/40 to-transparent z-10"></div>

                <div className="absolute inset-0 flex items-center justify-center z-20">
                    <h1 className="text-4xl md:text-8xl font-black text-white tracking-tighter text-center px-4 drop-shadow-2xl">
                        <span style={{ color: heroColor }}>Al-Khair</span> North City Hospital
                    </h1>
                </div>
            </section>

            {/* ===== MAIN CONTENT SECTION ===== */}
            <section className="relative w-full py-16 bg-white">
                <div className="container mx-auto px-6 md:px-12 lg:px-32">

                    {/* Header Intro */}
                    <div className="mb-14" data-aos="fade-up">
                        <h2 className="text-3xl md:text-5xl font-bold text-[#012060] mb-6 tracking-tight">
                            Healthcare with Dignity, Built for the People
                        </h2>
                        <p className="text-gray-800 text-lg md:text-xl leading-relaxed font-medium">
                            Al-Khair North City Hospital (ANCH) is an upcoming flagship healthcare project by Idara Al-Khair Welfare Society, currently under construction. This state-of-the-art hospital is being developed to serve the people of North Karachi with accessible, affordable, and quality medical care.
                        </p>
                    </div>

                    {/* About Project */}
                    <div className="mb-14" data-aos="fade-up">
                        <h3 className="text-2xl md:text-4xl font-bold text-[#012060] mb-4 tracking-tight">
                            About the Project
                        </h3>
                        <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
                            Al-Khair North City Hospital is more than just a medical facility - it is a commitment to community wellbeing. Designed with modern infrastructure and patient-centered care in mind, ANCH aims to bridge the healthcare gap in underserved areas.
                        </p>
                    </div>

                    {/* Why ANCH Matters */}
                    <div className="mb-14" data-aos="fade-up">
                        <h3 className="text-2xl md:text-4xl font-bold text-[#012060] mb-4 tracking-tight">
                            Why ANCH Matters
                        </h3>
                        <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
                            Thousands of families lack access to affordable healthcare. ANCH is being built to provide care with dignity and improve health outcomes.
                        </p>
                    </div>

                    {/* Mission */}
                    <div className="mb-16" data-aos="fade-up">
                        <h3 className="text-2xl md:text-4xl font-bold text-[#012060] mb-4 tracking-tight">
                            Be a Part of This Mission
                        </h3>
                        <p className="text-gray-700 text-lg md:text-xl leading-relaxed font-medium">
                            Your support can help complete construction, equip facilities, and provide care to those in need.
                        </p>
                    </div>

                    {/* Key Features */}
                    <div className="mb-20" data-aos="fade-up">
                        <h3 className="text-3xl md:text-4xl font-bold text-[#012060] mb-10 tracking-tight">
                            Key Features
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                            {/* Left Column */}
                            <div className="space-y-6">
                                <div className="flex items-start">
                                    <span className="text-gray-400 mr-3 mt-2 text-xs">●</span>
                                    <p className="text-lg md:text-xl text-gray-800">State-of-the-Art Healthcare Facility</p>
                                </div>
                                <div className="flex items-start">
                                    <span className="text-gray-400 mr-3 mt-2 text-xs">●</span>
                                    <p className="text-lg md:text-xl text-gray-800">
                                        <strong>A modern hospital equipped with advanced medical infrastructure</strong>, designed to deliver high-quality healthcare services.
                                    </p>
                                </div>
                                <div className="flex items-start">
                                    <span className="text-gray-400 mr-3 mt-2 text-xs">●</span>
                                    <p className="text-lg md:text-xl text-gray-800">Regular Community Health Camps</p>
                                </div>
                                <div className="flex items-start">
                                    <span className="text-gray-400 mr-3 mt-2 text-xs">●</span>
                                    <div>
                                        <p className="text-lg md:text-xl text-gray-800">Free and subsidized medical camps for:</p>
                                        <ul className="mt-2 ml-4 space-y-1 text-gray-600 list-none">
                                            <li>- Blood Pressure (BP) monitoring</li>
                                            <li>- Diabetes screening</li>
                                            <li>- General health checkups</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <span className="text-gray-400 mr-3 mt-2 text-xs">●</span>
                                    <div>
                                        <p className="text-lg md:text-xl text-gray-800">Health Meets Environment Initiative</p>
                                        <ul className="mt-2 ml-4 space-y-1 text-gray-600 list-none">
                                            <li>- Green spaces around the hospital</li>
                                            <li>- Awareness programs on healthy living</li>
                                            <li>- Community-driven environmental engagement</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Right Column */}
                            <div className="space-y-6">
                                <div className="flex items-start">
                                    <span className="text-gray-400 mr-3 mt-2 text-xs">●</span>
                                    <div>
                                        <p className="text-lg md:text-xl text-gray-800">Affordable & Accessible Care</p>
                                        <ul className="mt-2 ml-4 space-y-1 text-gray-600 list-none">
                                            <li>- Low-cost consultations</li>
                                            <li>- Affordable diagnostics</li>
                                            <li>- Subsidized treatments</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <span className="text-gray-400 mr-3 mt-2 text-xs">●</span>
                                    <div>
                                        <p className="text-lg md:text-xl text-gray-800">Emergency & Outpatient Services (Planned)</p>
                                        <ul className="mt-2 ml-4 space-y-1 text-gray-600 list-none">
                                            <li>- OPD (Outpatient Department)</li>
                                            <li>- Emergency response unit</li>
                                            <li>- Basic diagnostic facilities</li>
                                        </ul>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* ===== BOTTOM IMAGE SECTION (Construction Site) ===== */}
            <section className="relative w-full flex flex-col items-center">
                {/* Text First (Above Image) as per user's 'all text k last me aye ga' suggestion */}
                <div className="container mx-auto max-w-4xl text-center mb-10" data-aos="fade-up">
                    <h4 className="text-3xl md:text-5xl font-bold text-[#012060] mb-4">
                        Serving North Karachi at Its Core
                    </h4>
                    <p className="text-lg md:text-2xl font-medium text-gray-700">
                        ANCH will become a central healthcare hub for the community.
                    </p>
                </div>

                {/* Construction Image Container */}
                <div className="relative w-full h-[50vh] md:h-[70vh] overflow-hidden shadow-2xl" data-aos="zoom-in">
                    <img
                        src="/website-media/northcity-hospital/ANCH.png"
                        alt="ANCH Construction Site"
                        className="w-full h-full object-cover"
                    />
                    {/* Decorative Shapes Layered on Image */}
                    <div className="absolute top-[20%] right-[5%] z-30 flex-col items-center gap-6 hidden md:flex">
                        <div className="w-10 h-64 bg-[#012060] rounded-full" data-aos="fade-left"></div>
                        <div className="w-10 h-10 bg-idara-yellow rounded-full shadow-lg" data-aos="zoom-in" data-aos-delay="300"></div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
