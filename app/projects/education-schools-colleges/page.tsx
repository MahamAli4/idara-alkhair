'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function EducationSchoolsCollegesPage() {
    
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
                className="relative mt-[80px] w-full overflow-hidden h-[220px] md:h-[320px]"
                data-aos="fade"
            >
                <img
                    src="/website media/Education School & College/Banner.jpg"
                    alt="Education Schools & College"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-[#012060]/20"></div>

                <div className="absolute inset-0 flex items-center justify-center px-4">
                    <h1 
                        className="text-4xl md:text-6xl lg:text-5xl font-bold text-white text-center tracking-tighter"
                        data-aos="zoom-in"
                        data-aos-delay="200"
                    >
                        <span className="text-idara-orange italic">Education</span> - Schools & College
                    </h1>
                </div>
            </section>

            {/* ===== CONTENT SECTION - Two Column ===== */}
            <section className="container mx-auto px-6 md:px-12 py-16 md:py-24">
                <div className="flex flex-col md:flex-row items-start gap-10 md:gap-16">
                    {/* Left - Text */}
                    <div className="md:w-1/2" data-aos="fade-right">
                        <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
                            <span className="text-[#012060]">Educating Minds,</span>
                            <br />
                            <span className="text-idara-orange italic">Empowering Futures</span>
                        </h2>
                        <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-5 max-w-lg">
                            Education is at the heart of Idara Al-Khair's mission. We operate multiple schools and colleges that provide quality education to students from low-income backgrounds, enabling them to break the cycle of poverty.
                        </p>
                        <p className="text-gray-600 text-base italic" data-aos="fade-up" data-aos-delay="400">
                            Our institutions focus on academic excellence, character building, and life skills.
                        </p>
                    </div>

                    {/* Right - Student Image with Decorative Shapes */}
                    <div className="md:w-1/2 relative flex justify-center" data-aos="fade-left">
                        {/* Navy rounded rectangle - behind image */}
                        <div 
                            className="absolute right-[5%] md:right-[10%] -top-4 w-[50px] md:w-[65px] h-[130px] md:h-[170px] bg-[#012060] rounded-full z-0"
                            data-aos="slide-down"
                            data-aos-delay="600"
                        ></div>
                        {/* Orange circle - bottom right */}
                        <div 
                            className="absolute right-[0%] md:right-[5%] bottom-[5%] w-[50px] md:w-[60px] h-[50px] md:h-[60px] bg-idara-orange rounded-full z-0"
                            data-aos="zoom-in"
                            data-aos-delay="800"
                        ></div>
                        {/* Cyan triangle - bottom left */}
                        <div 
                            className="absolute left-[10%] bottom-[10%] w-[40px] md:w-[50px] h-[40px] md:h-[50px] bg-idara-cyan z-0"
                            style={{ clipPath: 'polygon(0 0, 100% 50%, 0 100%)' }}
                            data-aos="fade-right"
                            data-aos-delay="700"
                        ></div>

                        {/* Student Image */}
                        <div className="w-[280px] md:w-[350px] overflow-hidden shadow-2xl relative z-10">
                            <img
                                src="/website media/Education School & College/Boy Image.jpg"
                                alt="Student in school uniform"
                                className="w-full h-[350px] md:h-[430px] object-cover"
                                data-aos="zoom-out"
                                data-aos-duration="1500"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== WHAT WE PROVIDE - Yellow Section ===== */}
            <section 
                className="relative mx-4 md:mx-8 rounded-2xl overflow-hidden bg-idara-yellow py-12 md:py-16 px-6 md:px-12"
                data-aos="fade-up"
            >
                <div className="container mx-auto max-w-5xl">
                    <h3 className="text-3xl md:text-4xl font-bold text-center mb-4" data-aos="fade-down">
                        <span className="text-[#012060]">What We </span>
                        <span className="text-idara-orange italic">Provide :</span>
                    </h3>
                    <p className="text-[#012060]/80 text-center text-base md:text-lg mb-10 max-w-3xl mx-auto">
                        Quality education · Trained faculty · Safe learning environments · Affordable or free schooling.
                    </p>

                    {/* Bullet Points - Two Columns Staggered */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-4 mb-10 max-w-2xl mx-auto">
                        {[
                            "Compassion & Integrity",
                            "Sustainability",
                            "Transparency & Accountability",
                            "Community-Driven Impact"
                        ].map((text, index) => (
                            <div 
                                key={index} 
                                className="flex items-center gap-3"
                                data-aos="fade-right"
                                data-aos-delay={index * 150}
                            >
                                <span className="text-idara-orange text-xl">✦</span>
                                <span className="text-[#012060] font-bold text-base md:text-lg">{text}</span>
                            </div>
                        ))}
                    </div>

                    {/* Three Images Row */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {[
                            { src: "/website media/Education School & College/Image 01.jpeg", alt: "Students in classroom" },
                            { src: "/website media/Education School & College/Image 02.jpeg", alt: "Students learning together" },
                            { src: "/website media/Education School & College/Image 03.jpg", alt: "Happy students" }
                        ].map((img, index) => (
                            <div 
                                key={index} 
                                className="rounded-xl overflow-hidden shadow-lg border-4 border-white"
                                data-aos="zoom-in"
                                data-aos-delay={index * 200}
                            >
                                <img
                                    src={img.src}
                                    alt={img.alt}
                                    className="w-full h-[180px] md:h-[200px] object-cover"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== FULL-WIDTH BOTTOM IMAGE ===== */}
            <section 
                className="relative mx-4 md:mx-8 mt-6 rounded-2xl overflow-hidden h-[220px] md:h-[320px]"
                data-aos="zoom-out"
                data-aos-offset="50"
            >
                <img
                    src="/website media/Education School & College/Footer.jpg"
                    alt="School children crowd"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a2351]/40 to-transparent"></div>
            </section>

            <Footer />
        </main>
    );
}