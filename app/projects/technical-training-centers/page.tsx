"use client";
import React, { useEffect } from 'react';
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
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
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
            <section className="bg-white overflow-hidden">
                <div className="container mx-auto px-4">
                    {/* Enroll Now Button - Positioned Higher */}
                    <div className="flex justify-center mb-16 md:mb-24">
                        <button className="bg-idara-orange text-white px-10 py-3 rounded-full font-black text-xl md:text-2xl shadow-xl hover:bg-orange-600 hover:scale-105 transition-all active:scale-95" data-aos="zoom-in">
                            Enroll Now
                        </button>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 lg:items-center relative max-w-7xl mx-auto">
                        {/* Decorative Shape: Large Yellow Triangle */}
                        <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-full mb-10 w-0 h-0 border-l-40 border-l-transparent border-b-40 border-b-idara-yellow transform rotate-[-15deg] hidden lg:block" data-aos="fade-down"></div>

                        {/* Left Section: Typography */}
                        <div className="flex flex-col space-y-0 text-idara-navy select-none" data-aos="fade-right">
                             {/* Line 1: We don't */}
                             <div>
                                <span className="text-3xl md:text-3xl lg:text-4xl font-bold italic ml-12 opacity-90">We don't</span>
                             </div>
                             
                             {/* Line 2: just teach skills, */}
                             <div className="flex flex-col lg:flex-row lg:items-center -mt-2">
                                <span className="text-5xl md:text-7xl lg:text-[95px] font-black italic leading-tight tracking-tighter">just teach</span>
                                <div className="flex items-center lg:ml-8 mt-10 lg:mt-30 pr-8 border-r-4 border-idara-navy h-fit">
                                     <span className="text-xl md:text-2xl lg:text-3xl font-bold italic">skills,</span>
                                </div>
                             </div>

                             {/* Line 3: We create livelihoods */}
                             <div className="flex flex-col mt-4 lg:mt-8">
                                <div className="mb-2">
                                    <span className="text-2xl md:text-3xl lg:text-4xl font-bold italic lg:ml-24 opacity-90">We create</span>
                                </div>
                                <span className="text-5xl md:text-7xl lg:text-[95px] font-black italic leading-tight tracking-tighter">livelihoods</span>
                             </div>
                        </div>

                        {/* Right Section: Focus Image & Shapes */}
                        <div className="relative mt-20 lg:mt-0" data-aos="fade-left">
                            {/* Focal Image */}
                            <img 
                                src="/website-media/technicaltrainingcenters/centerimage.png" 
                                alt="Students working" 
                                className="w-full h-auto object-contain relative z-10 drop-shadow-2xl"
                            />
                            
                            {/* Brand Shapes - Restored to match image */}
                            {/* <div className="absolute -left-8 md:-left-12 top-1/2 -translate-y-1/2 w-0 h-0 border-l-40 md:border-l-60 border-l-transparent border-b-40 md:border-b-60 border-b-idara-cyan transform -rotate-45 z-0"></div>
                            
                            <div className="absolute -right-4 lg:-right-10 top-[40%] w-10 md:w-16 h-40 md:h-64 bg-[#0a2351] rounded-full z-20 shadow-lg"></div>
                            
                            <div className="absolute -right-4 lg:-right-10 bottom-[10%] w-12 md:w-20 h-12 md:h-20 bg-idara-yellow rounded-full z-20 shadow-lg"></div> */}
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
                    <div className="absolute inset-0 bg-idara-navy/10 group-hover:bg-transparent transition-colors duration-500"></div>
                </div>
                <div className="flex-2 relative overflow-hidden h-full"> {/* Middle image is wider */}
                    <img
                        src="/website-media/technicaltrainingcenters/footer-top.jpeg"
                        alt="Activities 2"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-idara-navy/10 group-hover:bg-transparent transition-colors duration-500"></div>
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
                    <div className="absolute inset-0 bg-idara-navy/10 group-hover:bg-transparent transition-colors duration-500"></div>
                </div>
            </section>

            <Footer />
        </main>
    );
}