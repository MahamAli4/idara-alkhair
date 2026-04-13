'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function EducationSchoolsCollegesPage() {
    
    useEffect(() => {
        AOS.init({
            duration: 900,
            once: true,
            easing: 'ease-out-cubic',
            offset: 80,
        });
    }, []);

    return (
        <main className="overflow-x-hidden bg-white">
            <Navbar />

            {/* ===== HERO BANNER ===== */}
            <section 
                className="relative mt-20 w-full overflow-hidden h-[80vh]"
                data-aos="fade-up"
            >
                <img
                    src="/website-media/educationschool&college/banner.jpg"
                    alt="Education Schools & College"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-[#012060]/10"></div>

                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="max-w-5xl mx-auto text-center px-4">
                        <h1 
                            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white text-center tracking-tighter"
                            data-aos="fade-down"
                            data-aos-delay="200"
                        >
                            <span className="text-idara-orange">EDUCATION</span> <br /> Schools & Colleges
                        </h1>
                    </div>
                </div>
            </section>

            {/* ===== CONTENT SECTION ===== */}
            <section className="container mx-auto px-5 md:px-8 py-8 md:py-20">
                <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">

                    {/* Left Text */}
                    <div className="md:w-1/2">
                        <h2 
                            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
                            data-aos="fade-right"
                        >
                            <span className="text-[#012060]">Educating Minds,</span>
                            <br />
                            <span className="text-idara-orange lg:text-5xl font-bold">Empowering Futures</span>
                        </h2>

                        <p 
                            className="text-gray-800 text-base md:text-lg leading-relaxed mb-5"
                            data-aos="fade-right"
                            data-aos-delay="200"
                        >
                            Education is at the heart of Idara Al-Khair's mission...
                        </p>

                        <p 
                            className="text-gray-600 text-base italic"
                            data-aos="fade-right"
                            data-aos-delay="350"
                        >
                            Our institutions focus on academic excellence, character building, and life skills.
                        </p>
                    </div>

                    {/* Right Image */}
                    <div 
                        className="md:w-1/2 relative flex justify-center"
                        data-aos="zoom-in"
                        data-aos-delay="200"
                    >
                        {/* {Shapes - Removed as requested}
                        <div className="absolute right-[5%] md:right-[10%] -top-4 w-12.5 md:w-16.25 h-32.5 md:h-42.5 bg-[#012060] rounded-full z-0" data-aos="zoom-in" data-aos-delay="300"></div>

                        <div className="absolute right-[0%] md:right-[5%] bottom-[5%] w-12.5 md:w-15 h-12.5 md:h-15 bg-idara-orange rounded-full z-0" data-aos="zoom-in" data-aos-delay="400"></div>

                        <div 
                            className="absolute left-[10%] bottom-[10%] w-10 md:w-12.5 h-10 md:h-12.5 bg-idara-cyan z-0"
                            style={{ clipPath: 'polygon(0 0, 100% 50%, 0 100%)' }}
                            data-aos="fade-up"
                            data-aos-delay="500"
                        ></div> */}

                        {/* Image */}
                        <div className="relative z-5 w-full h-[350px] md:h-[500px] flex justify-center">
                            <img
                                src="/website-media/educationschool&college/boyimage.jpg"
                                alt="Student"
                                className="h-full w-auto object-contain mx-auto"
                            />
                        </div>
                    </div>

                </div>
            </section>

            {/* ===== WHAT WE PROVIDE ===== */}
            <section 
                className="relative mx-4 md:mx-0 overflow-hidden bg-idara-yellow py-12 md:py-16 px-6 md:px-12"
                data-aos="fade-up"
            >
                <div className="container mx-auto max-w-5xl">

                    <h3 
                        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4"
                        data-aos="fade-down"
                    >
                        <span className="text-[#012060]">What We </span>
                        <span className="text-idara-orange italic">Provide :</span>
                    </h3>

                    <p 
                        className="text-white text-center text-sm md:text-lg mb-10 max-w-3xl mx-auto"
                        data-aos="fade-up"
                        data-aos-delay="200"
                    >
                        Quality education · Trained faculty · Safe learning environments · Affordable or free schooling.
                    </p>

                    {/* Bullets */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-4 mb-10 max-w-2xl mx-auto">
                        {[
                            "Compassion & Integrity",
                            "Sustainability",
                            "Transparency & Accountability",
                            "Community-Driven Impact"
                        ].map((item, i) => (
                            <div 
                                key={i}
                                className="flex items-center gap-3"
                                data-aos="fade-up"
                                data-aos-delay={i * 150}
                            >
                                <span className="text-idara-orange text-xl">✦</span>
                                <span className="text-[#012060] font-bold text-base md:text-lg">{item}</span>
                            </div>
                        ))}
                    </div>

                    {/* Images */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {[1,2,3].map((img, i) => (
                            <div 
                                key={i}
                                className="rounded-xl overflow-hidden shadow-lg border-4 border-white"
                                data-aos="zoom-in"
                                data-aos-delay={i * 200}
                            >
                                <img
                                    src={`/website-media/educationschool&college/image0${img}.${img === 3 ? 'jpg' : 'jpeg'}`}
                                    className="w-full h-45 md:h-50 object-cover"
                                />
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            {/* ===== FOOTER IMAGE ===== */}
            <section 
                className="relative mt-px w-full overflow-hidden h-55 md:h-77.5"
                data-aos="fade-up"
            >
                <img
                    src="/website-media/educationschool&college/footer.jpg"
                    alt="School children"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 mix-blend-multiply"></div>
            </section>

            <Footer />
        </main>
    );
}