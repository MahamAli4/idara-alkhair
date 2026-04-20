'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { 
    Megaphone, 
    Code2, 
    Monitor, 
    BrainCircuit, 
    PenTool, 
    Clapperboard, 
    Languages, 
    ShieldCheck, 
    ArrowRight 
} from 'lucide-react';

export default function ITInstitutePage() {
    
    useEffect(() => {
        AOS.init({
            duration: 900,
            once: true,
            easing: 'ease-in-out',
            offset: 80,
        });
    }, []);

    const courses = [
        { name: "Digital Marketing", icon: Megaphone },
        { name: "Web Development", icon: Code2 },
        { name: "CIT Fundamentals", icon: Monitor },
        { name: "AI Communication & Visualization", icon: BrainCircuit },
        { name: "Graphic Designing", icon: PenTool },
        { name: "Video Editing", icon: Clapperboard },
        { name: "English Language", icon: Languages },
        { name: "Cyber Security", icon: ShieldCheck }
    ];

    return (
        <main className="overflow-x-hidden bg-white">
            <Navbar />

            <section 
                className="relative mt-20 w-full overflow-hidden h-[40vh] md:h-[75vh]"
                data-aos="fade"
            >
                <img
                    src="/website-media/itinstitute/ait.jpeg"
                    alt="IT Institute Classroom"
                    className="w-full h-full object-cover"
                />

                {/* Left Side Blue Transparency Shade (matching image) */}
                <div className="absolute inset-0 bg-linear-to-r from-[#012060]/80 via-[#012060]/40 to-transparent"></div>

                <div className="absolute inset-0 flex items-center justify-center px-4">
                    <div className="max-w-5xl mx-auto text-center px-4">
                        <h1 
                            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white text-center tracking-tighter"
                            data-aos="zoom-out"
                            data-aos-delay="200"
                        >
                            IT <span className="text-idara-orange">Institute</span>
                        </h1>
                    </div>
                </div>
            </section>

            {/* ===== CONTENT & CARDS SECTION ===== */}
            <section className="relative w-full overflow-hidden min-h-screen">
                {/* Background with Transparent Shade */}
                <div 
                    className="absolute inset-0 z-0 bg-cover bg-center bg-fixed opacity-100"
                    style={{ backgroundImage: "url('/website-media/itinstitute/aitback.jpeg')" }}
                >
                    <div className="absolute inset-0 bg-white/90 backdrop-blur-[2px]"></div>
                </div>

                <div className="container mx-auto px-6 md:px-12 py-16 md:py-24 relative z-10">
                    {/* Decorative Shapes Layer */}
                    <div className="hidden lg:block">
                        {/* Top Right Shapes */}
                        <div className="absolute right-20 top-60 w-0 h-0 border-l-60 border-l-transparent border-r-40 border-r-transparent border-b-50 border-b-idara-cyan transform rotate-15" data-aos="fade-left"></div>
                        <div className="absolute right-0 top-90 w-12 h-40 bg-[#012060] rounded-full shadow-lg" data-aos="fade-left" data-aos-delay="200"></div>
                        <div className="absolute right-0 top-[550px] w-16 h-16 bg-idara-yellow rounded-full shadow-lg" data-aos="zoom-in" data-aos-delay="400"></div>
                        
                        {/* Middle Right Circle */}
                        <div className="absolute -right-20 top-[60%] w-48 h-48 bg-idara-cyan/30 rounded-full blur-3xl opacity-50"></div>
                        <div className="absolute -right-10 top-[65%] w-24 h-24 bg-idara-cyan rounded-full shadow-xl" data-aos="zoom-in"></div>

                        {/* Bottom Right Shape */}
                        <div className="absolute right-80 bottom-90 w-0 h-0 border-l-40 border-l-transparent border-r-40 border-r-transparent border-b-80 border-b-idara-yellow transform -rotate-25" data-aos="fade-up"></div>

                        {/* Middle Left Triangle */}
                        <div className="absolute left-10 top-[40%] w-0 h-0 border-r-45 border-r-transparent border-b-45 border-b-idara-yellow transform -rotate-12" data-aos="fade-right"></div>
                        
                        {/* Bottom Left Shapes */}
                        <div className="absolute left-6 bottom-0 z-0 w-12 h-64 bg-[#012060] rounded-full shadow-xl" data-aos="fade-right" data-aos-delay="300"></div>
                        <div className="absolute left-3 bottom-70 w-20 h-20 bg-idara-yellow rounded-full shadow-xl" data-aos="zoom-in" data-aos-delay="500"></div>
                        {/* <div className="absolute left-90 bottom-[550px] w-0 h-0 border-r-[35px] border-r-transparent border-b-[35px] border-b-idara-cyan" data-aos="fade-right"></div> */}
                    </div>

                    {/* Header Intro - Wider width matching header */}
                    <div className="max-w-full mx-auto mb-12 md:mb-16">
                        <h2 
                            className="text-4xl md:text-5xl lg:text-5xl font-extrabold text-[#012060] leading-tight mb-4 tracking-tight"
                            data-aos="fade-right"
                        >
                            Digital Skills for <span className="text-idara-orange">a Digital World</span>
                        </h2>
                        <p className="text-gray-700 text-lg md:text-xl font-medium mb-4 max-w-5xl" data-aos="fade-up">
                            The IT Institute prepares students for modern careers by providing training in essential digital and technology-based skills.
                        </p>
                        <div className="flex flex-wrap items-center gap-x-2 text-lg" data-aos="fade-up">
                            <span className="text-idara-orange font-bold">Focus Areas :-</span>
                            <span className="text-gray-800 font-semibold text-lg md:text-xl">Computer Literacy - IT & Software Basics - Freelancing & Digital Skills</span>
                        </div>
                        <p className="text-gray-700 font-medium text-lg md:text-xl mt-1" data-aos="fade-up">
                            Our goal is to prepare youth for sustainable income opportunities in today's digital economy.
                        </p>
                    </div>

                    {/* Cards Grid & CTA - Narrower width than text */}
                    <div className="max-w-5xl mx-auto">
                        <div className="flex flex-wrap justify-center gap-6 md:gap-x-10 md:gap-y-8 mb-16">
                            {courses.map((course, idx) => {
                                const Icon = course.icon;
                                return (
                                    <div 
                                        key={idx} 
                                        className="bg-[#012060] text-white p-8 md:p-10 rounded-[2.5rem] flex flex-col items-center text-center shadow-2xl hover:scale-105 transition-all duration-300 group relative overflow-hidden w-full md:w-[calc(50%-1.25rem)] lg:w-[calc(33.33%-1.75rem)]"
                                        data-aos="fade-up"
                                        data-aos-delay={idx * 50}
                                    >
                                        {/* Subtle Shine Effect */}
                                        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-white/5 rotate-45 group-hover:left-full transition-all duration-700"></div>
                                        
                                        <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                                            <Icon size={70} strokeWidth={1} className="text-white opacity-90" />
                                        </div>
                                        <h3 className="text-2xl md:text-3xl font-black mb-2 leading-tight uppercase tracking-wide">
                                            {course.name}
                                        </h3>
                                        <p className="text-idara-cyan font-bold text-lg">
                                            (Basic & Advanced)
                                        </p>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Enroll Now Button */}
                        <div className="flex justify-center" data-aos="zoom-in">
                            <button className="bg-idara-orange text-white px-12 py-4 rounded-full font-black text-2xl shadow-xl hover:bg-orange-600 hover:scale-105 transition-all active:scale-95 flex items-center gap-3">
                                Enroll Now
                                <ArrowRight className="w-6 h-6" />
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== FULL-WIDTH BOTTOM IMAGE ===== */}
            <section 
                className="relative mt-0 w-full overflow-hidden h-[40vh] md:h-[60vh]"
                data-aos="fade-up"
            >
                <img
                    src="/website-media/itinstitute/footerimage.jpg"
                    alt="IT Institute students working"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-idara-cyan/60 mix-blend-multiply"></div>
            </section>

            <Footer />
        </main>
    );
}