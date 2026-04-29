'use client';

import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function EducationSchoolsCollegesPage() {
    const [cmsData, setCmsData] = useState<any>({});

    useEffect(() => {
        AOS.init({
            duration: 900,
            once: true,
            easing: 'ease-out-cubic',
            offset: 80,
        });
        fetchCMSContent();
    }, []);

    const fetchCMSContent = async () => {
        try {
            const res = await fetch('/api/admin/content?pageName=education-schools-colleges', { cache: 'no-store' });
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
                className="relative mt-0 md:mt-20 w-full h-[40vh] md:h-[80vh] overflow-hidden"
                data-aos="fade-up"
            >
                <img
                    src={cmsData['hero-image'] || "/website-media/educationschool&college/banner.jpg"}
                    alt="Education"
                    className="w-full h-full object-cover block"
                />
                <div className="absolute inset-0 bg-[#012060]/10 flex items-center justify-center">
                    <h1 className="text-3xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white text-center tracking-tighter drop-shadow-2xl px-4" data-aos="fade-down">
                        <span style={{ color: heroColor }}>{cmsData['hero-title']?.split(' ')[0] || 'EDUCATION'}</span> 
                        <br />
                        {cmsData['hero-title']?.split(' ').slice(1).join(' ') || 'Schools & Colleges'}
                    </h1>
                </div>
            </section>

            {/* ===== CONTENT SECTION ===== */}
            <section className="container mx-auto px-5 md:px-8 py-8 md:py-20">
                <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                    <div className="md:w-1/2">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 sm:mb-6" data-aos="fade-right">
                            <span className="text-[#012060]">{cmsData['content-heading-black'] || 'Educating Minds,'}</span>
                            <br />
                            <span style={{ color: accentColor }} className="text-2xl sm:text-4xl lg:text-5xl font-bold">{cmsData['content-heading-orange'] || 'Empowering Futures'}</span>
                        </h2>

                        <p className="text-gray-800 text-base sm:text-lg md:text-xl font-medium leading-relaxed mb-6" data-aos="fade-right">
                            {cmsData['content-description'] || "Education is at the heart of Idara Al-Khair's mission. Our institutions focus on academic excellence, character building, and life skills."}
                        </p>
                    </div>

                    <div className="md:w-1/2 relative flex justify-center w-full" data-aos="zoom-in">
                        <div className="relative z-5 w-[90%] sm:w-full h-[250px] sm:h-[350px] md:h-[500px] flex justify-center rounded-3xl sm:rounded-4xl overflow-hidden shadow-2xl">
                            <img
                                src={cmsData['middle-image'] || "/website-media/educationschool&college/boyimage.jpg"}
                                alt="Student"
                                className="h-full w-auto object-contain mx-auto"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== WHAT WE PROVIDE ===== */}
            <section className="relative overflow-hidden bg-idara-yellow py-10 md:py-16 px-4 sm:px-6 md:px-12" data-aos="fade-up">
                <div className="container mx-auto max-w-5xl">
                    <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6">
                        <span className="text-[#012060]">What We </span>
                        <span style={{ color: accentColor }} className="italic">Provide :</span>
                    </h3>

                    <p className="text-white text-center text-base sm:text-lg md:text-xl font-bold mb-8 sm:mb-10 max-w-3xl mx-auto">
                        {cmsData['services-list'] || 'Quality education · Trained faculty · Safe learning environments · Affordable or free schooling.'}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-3 sm:gap-y-4 mb-10 sm:mb-12 max-w-2xl mx-auto">
                        {[
                            "Compassion & Integrity",
                            "Sustainability",
                            "Transparency & Accountability",
                            "Community-Driven Impact"
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-2 sm:gap-3">
                                <span style={{ color: accentColor }} className="text-lg sm:text-xl">✦</span>
                                <span className="text-[#012060] font-black text-base sm:text-lg">{item}</span>
                            </div>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                        {[1,2,3].map((img, i) => (
                            <div key={i} className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white group cursor-pointer" data-aos="zoom-in">
                                <img
                                    src={cmsData[`gallery-image-${img}`] || `/website-media/educationschool&college/image0${img}.${img === 3 ? 'jpg' : 'jpeg'}`}
                                    className="w-full h-40 sm:h-52 object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== FOOTER IMAGE (Full Width) ===== */}
            <section className="relative mt-px w-full overflow-hidden h-[25vh] sm:h-[30vh] md:h-[40vh] lg:h-80 leading-0" data-aos="fade-up">
                <img
                    src={cmsData['footer-image'] || "/website-media/educationschool&college/footer.jpg"}
                    alt="Footer Banner"
                    className="w-full h-full object-cover block"
                />
            </section>

            <Footer />
        </main>
    );
}