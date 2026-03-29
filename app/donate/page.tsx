'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function DonatePage() {
    
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
            <section className="relative mt-[80px] w-full overflow-hidden h-[220px] md:h-[320px]">
                <img
                    src="/website media/Donate Now/Header.jpg"
                    alt="Donate Now"
                    className="w-full h-full object-cover"
                    data-aos="fade"
                />
                <div className="absolute inset-0 bg-[#012060]/10"></div>
              
                <div className="absolute inset-0 flex items-center justify-center">
                    <h1 
                        className="text-3xl md:text-5xl lg:text-5xl font-bold text-white text-center tracking-tight"
                        data-aos="zoom-in"
                        data-aos-delay="200"
                    >
                        Donate <span className="text-idara-orange">Now</span>
                    </h1>
                </div>
            </section>

            {/* ===== YOUR DONATION CAN CHANGE A LIFE ===== */}
            <section className="container mx-auto px-6 md:px-12 py-14 md:py-20 relative">
                {/* Decorative triangles - Animated to slide in */}
                {/* Triangle 1 */}
                <div
                    className="absolute right-6 sm:right-10 md:right-[16%] top-2 sm:top-2 md:top-[1%] w-0 h-0 z-20 rotate-15
                    border-t-[30px] sm:border-t-[40px] md:border-t-[50px] border-t-yellow-400
                    border-r-[30px] sm:border-r-[40px] md:border-r-[50px] border-r-transparent"
                    data-aos="fade-down-left"
                    data-aos-delay="400"
                ></div>

                {/* Triangle 2 */}
                <div
                    className="absolute right-4 sm:right-6 md:right-[10%] -top-8 sm:-top-9 md:-top-[14%] w-0 h-0 z-20 -rotate-90
                    border-t-[40px] sm:border-t-[50px] md:border-t-[60px] border-t-orange-500
                    border-r-[40px] sm:border-r-[50px] md:border-r-[60px] border-r-transparent"
                    data-aos="fade-down"
                    data-aos-delay="600"
                ></div>

                {/* Triangle 3 */}
                <div
                    className="absolute right-5 sm:right-8 md:right-[13%] top-8 sm:top-9 md:top-[14%] w-0 h-0 z-40 rotate-90
                    border-t-[40px] sm:border-t-[50px] md:border-t-[60px] border-t-cyan-500
                    border-r-[40px] sm:border-r-[50px] md:border-r-[60px] border-r-transparent"
                    data-aos="fade-up-left"
                    data-aos-delay="800"
                ></div>

                <div className="max-w-4xl" data-aos="fade-right">
                    <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
                        <span className="text-[#012060] font-semibold">Your Donation Can </span>
                        <span className="text-idara-orange font-extrabold">Change a Life Today</span>
                    </h2>
                    <p className="text-black text-base md:text-lg">
                        Every contribution you make helps provide education, food, healthcare, and emergency support to those who need it most.<br />
                        At Idara Al-Khair, we honor your trust as our greatest responsibility.
                    </p>
                </div>
            </section>

            {/* ===== WHERE YOUR DONATION GOES ===== */}
            <div className="bg-white py-6 -mt-12 relative z-20">
                <h3 className="text-3xl md:text-4xl font-bold text-center" data-aos="fade-up">
                    <span className="text-[#012060]">Where Your </span>
                    <span className="text-idara-orange">Donation Goes</span>
                </h3>
            </div>

            <section className="relative overflow-hidden -mt-1">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/website media/Donate Now/Background Image.jpg"
                        alt=""
                        className="w-full h-full object-cover grayscale opacity-90"
                    />
                </div>

                <div className="relative z-10 container mx-auto px-6 md:px-12 py-14 md:py-20">
                    {/* Four Impact Shapes - Dropping in staggered */}
                    <div className="flex flex-nowwrap justify-center gap-6 scale-100 md:scale-100 md:gap-8 -mt-20 mb-13 max-w-4xl mx-auto">
                        {[
                            { text: "Educating underprivileged children", color: "bg-idara-orange" },
                            { text: "Feeding families facing hunger", color: "bg-idara-yellow" },
                            { text: "Providing medical care to the sick", color: "bg-cyan-500" },
                            { text: "Supporting disaster-affected communities", color: "bg-[#012060]" },
                        ].map((item, i) => (
                            <div
                                key={i}
                                data-aos="fade-down"
                                data-aos-delay={i * 200}
                                className={`${item.color}  w-[150px] h-[180px] md:w-[170px] md:h-[200px] rounded-b-[90px] flex items-center justify-center p-5 shadow-lg transform transition-transform hover:scale-105`}
                            >
                                <p className="text-white text-center text-sm md:text-base font-semibold leading-tight">
                                    {item.text}
                                </p>
                            </div>
                        ))}
                    </div>

                    <p className="text-[#012060] text-center text-base font-semibold mb-16 mt-8" data-aos="fade-up">
                        We ensure that every donation is utilized responsibly and transparently.
                    </p>

                    {/* Types of Donation */}
                    <h3 className="text-3xl md:text-4xl font-bold text-center mb-8" data-aos="fade-up">
                        <span className="text-[#012060]">Types of </span>
                        <span className="text-idara-orange">Donation</span>
                    </h3>

                    <div className="max-w-3xl mx-auto mb-16" data-aos="fade-left">
                        <ul className="list-disc pl-6 space-y-4 text-gray-800 text-base md:text-xl">
                            <li className="font-semibold">Zakat - Eligible programs with complete Shariah compliance</li>
                            <li className="font-semibold">Sadaqah - Support any welfare initiative</li>
                            <li className="font-semibold">General Donation - Where the need is greatest</li>
                            <li className="font-semibold">Sponsor a Child / Family - Provide education, healthcare, and essentials</li>
                        </ul>
                    </div>

                    {/* How to Donate */}
                    <h3 className="text-3xl md:text-4xl font-bold text-center mb-8" data-aos="fade-up">
                        <span className="text-[#012060]">How to </span>
                        <span className="text-idara-orange">Donate</span>
                    </h3>

                    <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-8">
                        {["Bank Transfer", "Online", "Direct Deposit"].map((method, i) => (
                            <button 
                                key={i}
                                data-aos="zoom-in"
                                data-aos-delay={i * 150}
                                className={`${method === "Online" ? "bg-[#012060]" : "bg-idara-orange"} text-white px-8 md:px-10 py-3 rounded font-bold text-base md:text-lg shadow-lg hover:brightness-110 transition-all`}
                            >
                                {method}
                            </button>
                        ))}
                    </div>

                    <p className="text-[#012060] text-center text-base md:text-lg font-semibold" data-aos="fade-up">
                        Your generosity today can save a future tomorrow.
                    </p>
                </div>
            </section>

            {/* ===== FINAL CTA BUTTON ===== */}
            <section className="py-10 flex justify-center" data-aos="zoom-in-up">
                <button className="bg-[#012060] text-white px-14 py-4 rounded-lg font-black text-xl md:text-2xl shadow-2xl hover:scale-105 active:scale-95 transition-all tracking-tight border-2 border-[#012060]">
                    Donate Now
                </button>
            </section>

            <Footer />
        </main>
    );
}