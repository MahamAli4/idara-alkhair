'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function HelpADreamPage() {

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            easing: 'ease-out-quad',
            offset: 120,
        });
    }, []);

    return (
        <main className="overflow-x-hidden bg-white">
            <Navbar />

            {/* ===== HERO BANNER ===== */}
            <section 
                className="relative mt-20 w-full overflow-hidden h-55 md:h-80"
                data-aos="fade"
            >
                <img
                    src="/website media/Help a Dream/Banner.jpg"
                    alt="Help a Dream"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-[#012060]/10"></div>

                <div className="absolute inset-0 flex items-center justify-center px-4">
                    <h1 
                        className="text-4xl md:text-6xl lg:text-5xl font-semibold text-white text-center tracking-tighter"
                        data-aos="zoom-in"
                        data-aos-delay="300"
                    >
                        Help a <span className="text-idara-orange font-extrabold">Dream</span>
                    </h1>
                </div>
            </section>

            {/* ===== CONTENT SECTION ===== */}
            <section className="container mx-auto px-6 md:px-12 py-16 md:pt-24 md:pb-32">
                <div className="flex flex-col items-start gap-12">
                    <div className="w-full" data-aos="fade-up">
                        <h2 className="text-3xl md:text-4xl font-black leading-[1.1] mb-8 text-[#012060]">
                            Help a Child <span className="text-idara-orange font-extrabold">Dream Again</span>
                        </h2>
                        <p className="text-black text-base md:text-lg leading-relaxed">
                            Thousands of children are forced to give up their education due to poverty. Help a Dream is Idara Al-Khair’s child sponsorship program designed to give deserving children access to education, healthcare, and basic necessities.
                        </p>
                    </div>
                </div>
            </section>

            {/* ===== WHAT YOUR SPONSORSHIP PROVIDES ===== */}
            <section className="container mx-auto px-6 md:px-14 pb-16 md:pb-24 -mt-10 md:-mt-20">
                <div className="flex flex-col items-start gap-8" data-aos="fade-right">
                    <div className="w-full">
                        <h2 className="text-3xl md:text-4xl font-black leading-[1.1] mb-8 text-[#012060]">
                            What Your <span className="text-idara-orange font-extrabold">Sponsorships</span> Provides?
                        </h2>
                    </div>
                </div>

                <div className="w-full overflow-hidden" data-aos="zoom-in" data-aos-duration="1200">
                    <div className="relative w-full h-60 md:h-90 lg:h-190">
                        <img
                            src="/website media/Help a Dream/Center image.png"
                            alt="Child dreaming"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                <p 
                    className="text-center text-[#012060] font-medium text-lg md:text-xl mt-6 px-4"
                    data-aos="fade-up"
                    data-aos-delay="400"
                >
                    “Your Sponsorship doesn’t just support a child – it transforms an entire family.”
                </p>
            </section>

            {/* ===== WHY SPONSOR SECTION ===== */}
            <section className="bg-gray-300 pt-16 md:pt-24 relative">
                <div className="container mx-auto px-6">
                    <h2 
                        className="text-3xl md:text-4xl font-black  text-center text-[#012060]"
                        data-aos="fade-up"
                    >
                        Why <span className="text-idara-orange font-bold">Sponsor</span> Through Idara Al-Khair
                    </h2>

                    <div 
                        className="mt-10 flex flex-col items-center text-lg font-semibold text-black gap-3 text-center"
                        data-aos="fade-up"
                        data-aos-delay="200"
                    >
                        <div className="flex flex-col md:flex-row gap-4 md:gap-12">
                            <p>• Transparent utilization of funds</p>
                            <p>• Regular updates on sponsored children</p>
                        </div>
                        <p>• Long-term impact through education</p>
                    </div>

                    <h2 
                        className="text-3xl md:text-4xl font-black text-center mt-14 text-[#012060]"
                        data-aos="fade-up"
                    >
                        One Decision.
                        <span className="text-idara-orange font-extrabold"> A Lifetime of Change</span>
                    </h2>

                    <p 
                        className="text-black font-semibold mt-6 text-lg text-center md:whitespace-nowrap px-4"
                        data-aos="fade-up"
                        data-aos-delay="200"
                    >
                        For a small monthly contribution, you can secure a child's future and help them dream without fear.
                    </p>

                    <div 
                        className="flex justify-center mt-8 pb-16"
                        data-aos="zoom-in"
                    >
                        <button className="bg-[#012060] rounded text-white px-10 py-3 text-xl font-semibold hover:scale-105 transition-transform shadow-2xl">
                            Sponsor a child today
                        </button>
                    </div>
                </div>

                {/* BOTTOM IMAGE */}
                <div 
                    className="w-full leading-0 block"
                    data-aos="fade-up"
                    data-aos-offset="50"
                >
                    <img
                        src="/images/helpadreamfooter.png"
                        alt="help a dream"
                        className="w-full h-full -mt-5 md:h-180 object-cover block"
                    />
                </div>
            </section>

            <Footer />
        </main>
    );
}