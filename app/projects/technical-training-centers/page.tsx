"use client";
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ArrowRight } from 'lucide-react';

export default function TechnicalTrainingCentersPage() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            easing: 'ease-out-quad',
        });
    }, []);

    const courses = [
        { name: "HVAC", image: "/website-media/technicaltrainingcenters/hvac.jpg", color: "bg-yellow-500/40" },
        { name: "Building Electrician", image: "/website-media/technicaltrainingcenters/building-electritions.jpg", color: "bg-blue-600/40" },
        { name: "Dress Making & Stitching", image: "/website-media/technicaltrainingcenters/dress-making.jpeg", color: "bg-orange-500/40" },
        { name: "Video Editing", image: "/website-media/technicaltrainingcenters/video_editing.jpg", color: "bg-[#0a2351]/50" },
        { name: "Graphic Designing", image: "/website-media/technicaltrainingcenters/ITInstitutpage.jpeg", color: "bg-yellow-600/40" },
        { name: "Mobile Repairing", image: "/website-media/technicaltrainingcenters/mobilerepair.jpeg", color: "bg-[#0a2351]/50" },
        { name: "Bike Repairing", image: "/website-media/technicaltrainingcenters/footer-top.jpeg", color: "bg-yellow-500/40" }
    ];

    return (
        <main className="overflow-x-hidden bg-white">
            <Navbar />

            {/* ===== HERO BANNER ===== */}
            <section className="relative mt-[80px] md:mt-[100px] w-full overflow-hidden h-[40vh] md:h-[60vh]">
                <img
                    src="/website-media/technicaltrainingcenters/banner.jpg"
                    alt="Technical Training Centers"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="max-w-6xl mx-auto text-center px-4" data-aos="zoom-in">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tight">
                            Technical <span className="text-idara-orange">Technical</span> Centers
                        </h1>
                    </div>
                </div>
            </section>

            {/* ===== SKILLS INTRO ===== */}
            <section className="container mx-auto px-4 py-12 md:py-20">
                <div className="max-w-4xl">
                    <h2 className="text-4xl md:text-6xl font-black text-idara-navy leading-[1.1] mb-6" data-aos="fade-right">
                        <span>Skills That Create</span>
                        <br />
                        <span className="text-idara-orange">Independence</span>
                    </h2>
                    <p className="text-gray-600 text-lg md:text-xl font-medium mb-6 max-w-3xl" data-aos="fade-up">
                        Our Technical Training Centers equip youth with practical, job-ready skills that lead to employment and self-reliance.
                    </p>
                    <div className="flex flex-wrap items-center gap-2 text-lg md:text-xl" data-aos="fade-up" data-aos-delay="200">
                        <span className="text-idara-orange font-bold uppercase tracking-wider text-base">Courses Include:-</span>
                        <span className="text-idara-navy font-semibold">Electrical & Mechanical Training · Vocational Skills · Hands-on Practical Learning</span>
                    </div>
                </div>
            </section>

            {/* ===== COURSE GRID ===== */}
            <section className="container mx-auto px-4 relative">
                {/* Decorative Triangles */}
                <div className="absolute left-0 lg:left-[-60px] top-40 w-0 h-0 border-l-40 border-l-transparent border-b-40 border-b-idara-yellow transform rotate-15 opacity-80 hidden lg:block"></div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10 max-w-10xl mx-auto">
                    {courses.slice(0, 4).map((course, idx) => (
                        <div key={idx} className="relative group overflow-hidden rounded-sm h-[200px] shadow-md border-b-4 border-transparent hover:border-idara-orange transition-all duration-300" data-aos="fade-up" data-aos-delay={idx * 100}>
                            <img src={course.image} alt={course.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                            <div className={`absolute inset-0 ${course.color} transition-opacity group-hover:opacity-60`}></div>
                            <div className="absolute inset-0 flex items-center justify-center p-4">
                                <h4 className="text-white font-black text-xl md:text-2xl text-center leading-tight drop-shadow-lg group-hover:scale-105 transition-transform duration-300">
                                    {course.name}
                                </h4>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 max-w-5xl mx-auto mt-6 md:mt-8">
                    {courses.slice(4).map((course, idx) => (
                        <div key={idx} className="relative group overflow-hidden rounded-sm h-[200px] shadow-md border-b-4 border-transparent hover:border-idara-orange transition-all duration-300" data-aos="fade-up" data-aos-delay={idx * 100 + 400}>
                            <img src={course.image} alt={course.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                            <div className={`absolute inset-0 ${course.color} transition-opacity group-hover:opacity-60`}></div>
                            <div className="absolute inset-0 flex items-center justify-center p-4">
                                {idx === 0 && (
                                    <div className="absolute -top-1 -left-1 w-0 h-0 border-l-30 border-l-transparent border-b-30 border-b-idara-cyan transform -rotate-45 z-20"></div>
                                )}
                                <h4 className="text-white font-black text-xl md:text-2xl text-center leading-tight drop-shadow-lg group-hover:scale-105 transition-transform duration-300">
                                    {course.name}
                                </h4>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ===== ENROLLMENT SECTION ===== */}
            <section className="bg-white overflow-hidden lg:pt-32 pb-0">
                <div className="container mx-auto px-4">
                    {/* Enroll Now Button - Positioned Higher */}
                    <div className="flex justify-center mb-24 lg:mb-20">
                        <button className="bg-idara-orange text-white px-12 py-4 rounded-full font-black text-xl md:text-2xl shadow-xl hover:bg-orange-600 hover:scale-105 transition-all active:scale-95 flex items-center gap-3 group" data-aos="zoom-in">
                            Enroll Now
                            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>

                    <div className="relative">
                        {/* Decorative Shape: Large Yellow Triangle at Top */}
                        <div className="absolute left-[45%] -top-20 w-0 h-0 border-l-25 border-l-transparent border-r-25 border-r-transparent border-b-45 border-b-idara-yellow transform rotate-15 hidden lg:block" data-aos="fade-down" data-aos-delay="400"></div>
                        
                        {/* Decorative Shape: Cyan Triangle Left */}
                        <div className="absolute left-0 top-0 w-0 h-0 border-r-40 border-r-transparent border-b-40 border-b-idara-cyan hidden lg:block" data-aos="fade-right" data-aos-delay="600"></div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 lg:items-end relative">
                            {/* Left Section: Typography */}
                            <div className="flex flex-col space-y-0 text-[#012060] select-none z-10 pb-10 md:pb-20 lg:pb-32" data-aos="fade-right">
                                 {/* Line 1: We don't */}
                                 <div className="mb-0">
                                    <span className="text-2xl md:text-3xl lg:text-4xl font-bold italic opacity-90 ml-20 md:ml-45">We don't</span>
                                 </div>
                                 
                                 {/* Line 2: just teach skills, */}
                                 <div className="flex items-baseline gap-2 -mt-2">
                                    <span className="text-5xl md:text-7xl lg:text-[90px] font-black italic ml-20 md:ml-40 leading-none tracking-tighter">just teach</span>
                                    <span className="text-xl md:text-2xl lg:text-3xl font-bold italic mb-2 md:mb-4">skills,</span>
                                 </div>

                                 {/* Line 3: We create livelihoods */}
                                 <div className="flex flex-col mt-4 lg:mt-8">
                                    <div className="mb-1">
                                        <span className="text-2xl md:text-3xl lg:text-4xl font-bold italic ml-8 md:ml-24 opacity-90">We create</span>
                                    </div>
                                    <span className="text-5xl md:text-7xl lg:text-[90px] font-black italic leading-none tracking-tighter">livelihoods</span>
                                 </div>
                            </div>

                            {/* Right Section: Focus Image & Shapes */}
                            <div className="relative mt-20 lg:mt-0 flex justify-end items-end" data-aos="fade-left">
                                {/* Focal Image with embedded shapes */}
                                <div className="relative max-w-[850px] w-full translate-y-1">
                                    <img 
                                        src="/website-media/technicaltrainingcenters/centerimage.png" 
                                        alt="Students working" 
                                        className="w-full h-auto object-contain relative z-10 drop-shadow-2xl"
                                    />
                                    
                                    {/* Additional Navy Bar Accent matching the image design */}
                                    {/* <div className="absolute -right-4 lg:-right-8 top-10 w-12 md:w-20 h-40 md:h-72 bg-[#012060] rounded-full z-20 shadow-2xl hidden md:block" data-aos="fade-left" data-aos-delay="300"></div>
                                     */}
                                    {/* Additional Yellow Circle Accent matching the image design */}
                                    {/* <div className="absolute -right-4 lg:-right-8 bottom-10 w-16 md:w-24 h-16 md:h-24 bg-idara-yellow rounded-full z-20 shadow-2xl hidden md:block" data-aos="zoom-in" data-aos-delay="500"></div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== BOTTOM COLLAGE ===== */}
            <section className="flex flex-row w-full h-[450px] md:h-[500px] items-stretch overflow-hidden" data-aos="fade-up">
                <div className="flex-2 relative overflow-hidden h-full">
                    <img
                        src="/website-media/technicaltrainingcenters/footerimage.jpg"
                        alt="Activities 1"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* <div className="absolute inset-0 bg-idara-navy/10 group-hover:bg-transparent transition-colors duration-500"></div> */}
                </div>
                <div className="flex-2 relative overflow-hidden h-full"> {/* Middle image is wider */}
                    <img
                        src="/website-media/technicaltrainingcenters/footer-top.jpeg"
                        alt="Activities 2"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* <div className="absolute inset-0 bg-idara-navy/10 group-hover:bg-transparent transition-colors duration-500"></div> */}
                    {/* Seamless Blending Overlays */}
                    {/* <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-idara-navy/20 to-transparent"></div>
                    <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-idara-navy/20 to-transparent"></div> */}
                </div>
                <div className="flex-2 relative overflow-hidden h-full">
                    <img
                        src="/website-media/technicaltrainingcenters/footer-top (2).jpeg"
                        alt="Activities 3"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* <div className="absolute inset-0 bg-idara-navy/10 group-hover:bg-transparent transition-colors duration-500"></div> */}
                </div>
            </section>

            <Footer />
        </main>
    );
}