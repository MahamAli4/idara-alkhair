"use client";
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function TechnicalTrainingCentersPage() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            easing: 'ease-out-quad',
        });
    }, []);

    return (
        <main className="overflow-x-hidden bg-white">
            <Navbar />

            {/* ===== HERO BANNER ===== */}
            <section className="relative mt-20 w-full overflow-hidden h-[80vh]">
                <img
                    src="/website-media/technicaltrainingcenters/banner.jpg"
                    alt="Technical Training Centers"
                    className="w-full h-full object-cover"
                />
                <div
                    className="absolute inset-0 flex items-center justify-center px-4"
                    data-aos="zoom-in"
                >
                    <div className="max-w-5xl mx-auto text-center px-4">
                        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter">
                            Technical <span className="text-idara-orange">Training</span> Centers
                        </h1>
                    </div>
                </div>
            </section>

            {/* ===== CONTENT SECTION ===== */}
            <section className="container mx-auto px-6 md:px-12 py-16 md:py-24">
                <div className="max-w-4xl">
                    <h2
                        className="text-4xl md:text-5xl font-semibold leading-tight mb-8"
                        data-aos="fade-right"
                    >
                        <span className="text-[#012060]">Skills That Create</span>
                        <br />
                        <span className="text-idara-orange font-bold">Independence</span>
                    </h2>
                    <p
                        className="text-gray-700 text-lg md:text-xl font-medium leading-relaxed mb-8 max-w-3xl"
                        data-aos="fade-up"
                        data-aos-delay="200"
                    >
                        Our Technical Training Centers equip youth with practical, job-ready skills that lead to employment and self-reliance.
                    </p>
                    <p
                        className="text-lg md:text-xl"
                        data-aos="fade-up"
                        data-aos-delay="400"
                    >
                        <span className="text-idara-orange font-bold">Courses Include:-</span>
                        <span className="text-gray-700 font-medium"> Electrical & Mechanical Training · Vocational Skills · Hands-on Practical Learning</span>
                    </p>
                </div>
            </section>

            {/* ===== CREATIVE HIGHER-FIDELITY LAYOUT ===== */}
            <section className="container mx-auto px-6 md:px-30 ">
                <div
                    className="relative w-full h-100 md:h-125 lg:h-175 overflow-hidden bg-white"
                    style={{ backgroundImage: "url('/images/techtrainingcenterimg.png')", backgroundRepeat: "no-repeat", backgroundSize: "contain", backgroundPosition: "right center" }}
                    data-aos="fade-in"
                >
                    <div className="relative z-30 container h-full">
                        <div className="w-full flex flex-col font-montserrat select-none text-[#012060]">
                            <span
                                className="italic text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight mt-17 ml-6 md:ml-17"
                                data-aos="fade-right"
                                data-aos-delay="100"
                            >
                                We don't
                            </span>

                            <h3
                                className="font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-7xl italic tracking-tighter leading-[0.8] mb-2 text-[#012060] ml-6 md:ml-17"
                                data-aos="fade-right"
                                data-aos-delay="300"
                            >
                                just teach
                            </h3>

                            <div
                                className="gap-6 ml-16 md:ml-40 -mt-2"
                                data-aos="fade-right"
                                data-aos-delay="500"
                            >
                                <span className="italic text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight ml-16 md:ml-47">skills,</span>
                            </div>

                            <div
                                className="relative mt-8 md:mt-5 ml-4"
                                data-aos="fade-left"
                                data-aos-delay="700"
                            >
                                <span className="italic text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight ml-16 md:ml-48">We create</span>
                            </div>

                            <h3
                                className="font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-7xl italic tracking-tighter leading-[0.8] mt-5 text-[#012060] ml-16 md:ml-14"
                                data-aos="zoom-out-up"
                                data-aos-delay="900"
                            >
                                livelihoods
                            </h3>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== BOTTOM IMAGE SECTION ===== */}
            <section
                className="relative w-full overflow-hidden"
                data-aos="fade-up"
            >
                <img
                    src="/website-media/technicaltrainingcenters/footerimage.jpg"
                    alt="Idara Al-Khair Students Group"
                    className="w-full h-auto object-cover"
                />
            </section>

            <Footer />
        </main>
    );
}