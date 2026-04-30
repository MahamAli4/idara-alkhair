'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
    Award, 
    Users, 
    Heart, 
    BookOpen, 
    Building2, 
    Clock, 
    Target, 
    Eye, 
    TrendingUp, 
    Globe,
    GraduationCap
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AboutHero from '@/components/AboutHero';
import AboutIntro from '@/components/AboutIntro';
import MissionVision from '@/components/MissionVision';
import StatsSection from '@/components/StatsSection';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutPage = () => {
    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            easing: "ease-out-cubic"
        });
    }, []);

    const organizationStats = [
        {
            icon: GraduationCap,
            label: "Education Focus",
            number: "35+",
            description: "Years of providing quality education to the underprivileged.",
        },
        {
            icon: Users,
            label: "Lives Impacted",
            number: "850K+",
            description: "Individuals supported through various welfare programs.",
        },
        {
            icon: Building2,
            label: "Infrastructure",
            number: "12+",
            description: "Schools and community centers across Pakistan.",
        },
        {
            icon: TrendingUp,
            label: "Success Rate",
            number: "92%",
            description: "Of our students successfully transition to higher education.",
        }
    ];

    const timeline = [
        {
            icon: <Award className="w-5 h-5 text-white animate-bounce" />, 
            border: "border-idara-orange", 
            arrow: "border-l-idara-orange", 
            title: "Founded in 1987", 
            desc: "The journey began with the establishment of the first primary school for underprivileged children.", 
            left: true
        },
        {
            icon: <Users className="w-5 h-5 text-white animate-bounce" />, 
            border: "border-idara-cyan", 
            arrow: "border-r-idara-cyan", 
            title: "Growth in 1992", 
            desc: "Expansion into more communities with the opening of a second campus to meet growing demand.", 
            left: false
        },
        {
            icon: <Heart className="w-5 h-5 text-white animate-bounce" />, 
            border: "border-idara-orange", 
            arrow: "border-l-idara-orange", 
            title: "Healthcare in 1995", 
            desc: "Launched initial medical camps and basic healthcare initiatives for student families.", 
            left: true
        },
        {
            icon: <BookOpen className="w-5 h-5 text-white animate-bounce" />, 
            border: "border-idara-cyan", 
            arrow: "border-r-idara-cyan", 
            title: "College Level in 2005", 
            desc: "Al-Khair College was established, providing higher secondary education to students.", 
            left: false
        },
        {
            icon: <Building2 className="w-5 h-5 text-white animate-bounce" />, 
            border: "border-idara-orange", 
            arrow: "border-l-idara-orange", 
            title: "Holistic Welfare", 
            desc: "Integrated vocational training and food security programs into the core mission.", 
            left: true
        },
        {
            icon: <Clock className="w-5 h-5 text-white animate-bounce" />, 
            border: "border-idara-cyan", 
            arrow: "border-r-idara-cyan", 
            title: "Tech Innovation 2024", 
            desc: "First Software House and IT training center established to bridge the digital divide.", 
            left: false
        },
    ];

    const first = timeline[0];
    const last = timeline[timeline.length - 1];
    const middle = timeline.slice(1, -1);

    return (
        <main className="overflow-x-hidden bg-white">
            <Navbar />
            
            {/* Original Hero & Intro Sections */}
            <AboutHero />
            <AboutIntro />

            {/* Chairman & Board Section */}
            <section id="president-message" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-10 bg-gray-50/30">
                <div className="container mx-auto">
                    <div className="mb-16">
                        <div className="flex flex-col lg:flex-row items-center justify-center mb-4 text-center lg:text-left">
                            <div className="hidden lg:block flex-1 mr-8">
                                <div className="h-0.5 bg-linear-to-l from-idara-orange via-idara-cyan to-transparent"></div>
                            </div>
                            <div className="px-4 sm:px-8">
                                <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-idara-navy tracking-tight">
                                    Message from the <span className="text-idara-orange">President</span>
                                </h2>
                            </div>
                            <div className="hidden lg:block flex-1 ml-8">
                                <div className="h-0.5 bg-linear-to-r from-idara-orange via-idara-cyan to-transparent"></div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center bg-white rounded-[40px] p-8 sm:p-12 shadow-2xl shadow-idara-navy/5 border border-gray-100">
                        <div className="flex justify-center items-center order-1 lg:order-0 relative">
                            <Image
                                src="/website-media/about-us/chairmain.jpg"
                                alt="President Mohammad Mazahir"
                                width={600}
                                height={600}
                                className="rounded-3xl shadow-2xl object-cover w-full max-w-[500px] h-auto transition-all duration-700 hover:scale-[1.02]"
                                priority
                            />
                        </div>
                        <div className="text-center lg:text-left">
                            <h3 className="text-3xl sm:text-4xl xl:text-5xl font-black text-idara-navy mb-6 tracking-tight">
                                Mohammad Mazahir
                            </h3>
                            <div className="space-y-6">
                                <p className="text-base lg:text-lg text-justify text-gray-700 leading-relaxed font-medium opacity-90">
                                    Born in 1954 in District Dadu, Sindh, Mohammad Mazahir completed his Master’s in Chemistry from the University of Karachi. Coming from a middle-class background and being socially conscious from a young age, he dedicated himself to helping the poor, often using his own resources. After moving to Karachi, he became involved in social welfare, especially in underprivileged areas like Orangi Town, Landhi, and Korangi.
                                </p>
                                <p className="text-base lg:text-lg text-justify text-gray-700 leading-relaxed font-medium opacity-90">
                                    Throughout his journey, Mazahir faced several challenges: convincing families to send their children to school for free, overcoming parental dependence on child labor, recruiting and retaining teachers with limited funds, and dealing with student dropouts due to economic pressures. Despite these obstacles, his commitment and grassroots approach have transformed the lives of many underprivileged children through access to education.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision Section (New Styled Version) */}
            {/* <section id="mission-vision-new" className="px-4 sm:px-8 md:px-12 lg:px-20 py-24 bg-white relative">
                <div className="mb-20">
                    <div className="flex flex-col lg:flex-row items-center justify-center text-center lg:text-left mb-4">
                        <div className="hidden lg:block flex-1 mr-8">
                            <div className="h-0.5 bg-linear-to-l from-idara-cyan via-idara-orange to-transparent"></div>
                        </div>
                        <div className="px-4 sm:px-8">
                            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-idara-navy tracking-tight">
                                Our Mission <span className="text-idara-orange">& Vision</span>
                            </h2>
                        </div>
                        <div className="hidden lg:block flex-1 ml-8">
                            <div className="h-0.5 bg-linear-to-r from-idara-cyan via-idara-orange to-transparent"></div>
                        </div>
                    </div>
                </div>

                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14">
                    <div className="group relative rounded-[40px] shadow-2xl overflow-hidden h-[450px] lg:h-[500px] flex items-center justify-center transform transition-transform duration-500 hover:-translate-y-2">
                        <img src="/website-media/homepage/quality-education.jpg" alt="Mission" className="absolute inset-0 w-full h-full object-cover z-0 transition-transform duration-700 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-idara-navy/70 z-10 backdrop-blur-[2px]" />
                        <div className="relative z-20 flex flex-col justify-center items-center p-8 lg:p-14 w-full h-full text-center">
                            <h3 className="text-3xl lg:text-4xl font-black text-white tracking-widest mb-4 uppercase">Mission</h3>
                            <div className="w-16 h-1 bg-idara-orange rounded-full mb-6" />
                            <p className="text-base lg:text-lg text-white/90 leading-relaxed font-medium">
                                Our mission is to empower underserved communities by providing quality education, accessible healthcare, and humanitarian support—enabling every individual to lead a dignified, productive life.
                            </p>
                        </div>
                    </div>
                    <div className="group relative rounded-[40px] shadow-2xl overflow-hidden h-[450px] lg:h-[500px] flex items-center justify-center transform transition-transform duration-500 hover:-translate-y-2">
                        <img src="/website-media/homepage/health-care.jpg" alt="Vision" className="absolute inset-0 w-full h-full object-cover z-0 transition-transform duration-700 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-idara-navy/70 z-10 backdrop-blur-[2px]" />
                        <div className="relative z-20 flex flex-col justify-center items-center p-8 lg:p-14 w-full h-full text-center">
                            <h3 className="text-3xl lg:text-4xl font-black text-white tracking-widest mb-4 uppercase">Vision</h3>
                            <div className="w-16 h-1 bg-idara-cyan rounded-full mb-6" />
                            <p className="text-base lg:text-lg text-white/90 leading-relaxed font-medium">
                                Our vision is a society where every person has access to quality education, healthcare, and basic necessities—fostering sustainable development and social harmony for all.
                            </p>
                        </div>
                    </div>
                </div>
            </section> */}

            {/* Organization Stats */}
            <section className="py-24 bg-idara-navy relative overflow-hidden">
                <div className="container mx-auto px-4 relative z-10">
                    <div className="mb-20">
                        <div className="flex flex-col lg:flex-row items-center justify-center text-center">
                            <div className="hidden lg:block flex-1 mr-8">
                                <div className="h-px bg-linear-to-l from-white/20 via-idara-orange to-transparent"></div>
                            </div>
                            <div className="px-6">
                                <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight">
                                    Our <span className="text-idara-orange">Organization</span>
                                </h2>
                            </div>
                            <div className="hidden lg:block flex-1 ml-8">
                                <div className="h-px bg-linear-to-r from-white/20 via-idara-orange to-transparent"></div>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {organizationStats.map((stat, index) => (
                            <motion.div
                                key={index}
                                className="group relative overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl rounded-3xl p-8 text-center flex flex-col items-center gap-4 transition-all duration-500"
                                whileHover={{ y: -10 }}
                            >
                                <div className="relative z-10 flex flex-col items-center">
                                    <div className="w-16 h-16 bg-white/10 group-hover:bg-idara-orange backdrop-blur-md rounded-2xl flex items-center justify-center mb-6 border border-white/10 transition-all duration-500">
                                        <stat.icon className="w-8 h-8 text-idara-orange group-hover:text-white transition-colors duration-500" />
                                    </div>
                                    <div className="text-4xl lg:text-5xl font-black text-white mb-4 tracking-tighter">{stat.number}</div>
                                    <p className="text-sm lg:text-base text-white/50 font-medium leading-relaxed">
                                        {stat.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Achievements Counter Section */}
            <StatsSection />

            {/* Our Journey Section */}
            <section id="our-journey" className="py-24 bg-white">
                <div className="mb-20">
                    <div className="flex items-center justify-center">
                        <div className="hidden lg:block flex-1 mr-8">
                            <div className="h-0.5 bg-linear-to-l from-idara-orange via-idara-cyan to-transparent"></div>
                        </div>
                        <div className="text-center px-8">
                            <h2 className="text-4xl lg:text-6xl font-bold text-idara-navy mb-4 tracking-tight">Our <span className="text-idara-orange">Journey</span></h2>
                        </div>
                        <div className="hidden lg:block flex-1 ml-8">
                            <div className="h-0.5 bg-linear-to-r from-idara-orange via-idara-cyan to-transparent"></div>
                        </div>
                    </div>
                </div>
                <div className="relative max-w-4xl mx-auto px-6 lg:px-0">
                    <div className="absolute left-1/2 top-0 h-full w-1 bg-linear-to-b from-idara-orange via-idara-cyan to-idara-navy opacity-20 -translate-x-1/2 rounded-full hidden sm:block"></div>
                    <div className="flex flex-col gap-10 relative z-10">
                        <div className="flex flex-col sm:flex-row items-center relative" data-aos="fade-up">
                            <div className="absolute left-1/2 -translate-x-1/2 z-20 hidden sm:block">
                                <div className="w-12 h-12 rounded-full bg-idara-orange shadow-xl flex items-center justify-center ring-4 ring-white">
                                    {first.icon}
                                </div>
                            </div>
                            <div className="w-full sm:w-1/2 flex justify-start pl-0 sm:pl-12">
                                <div className={`relative bg-white border border-gray-100 rounded-3xl p-8 shadow-xl border-l-8 ${first.border} w-full transition-all hover:shadow-2xl`}>
                                    <h4 className="font-black text-idara-navy text-2xl mb-3 flex items-center gap-3">{first.title}</h4>
                                    <p className="text-gray-600 text-base font-medium leading-relaxed">{first.desc}</p>
                                </div>
                            </div>
                        </div>
                        {!showAll && (
                            <div className="flex justify-center py-4 relative z-20">
                                <button className="px-8 py-3 bg-idara-navy text-white rounded-full font-bold hover:bg-idara-orange transition-all" onClick={() => setShowAll(true)}>View Full Timeline</button>
                            </div>
                        )}
                        {showAll && middle.map((item, idx) => (
                            <div key={idx} className={`flex flex-col sm:${item.left ? 'flex-row' : 'flex-row-reverse'} items-center relative`} data-aos="fade-up">
                                <div className="absolute left-1/2 -translate-x-1/2 z-20 hidden sm:block">
                                    <div className={`w-12 h-12 rounded-full ${item.left ? 'bg-idara-cyan' : 'bg-idara-orange'} shadow-xl flex items-center justify-center ring-4 ring-white`}>
                                        {item.icon}
                                    </div>
                                </div>
                                <div className={`w-full sm:w-1/2 flex ${item.left ? 'justify-start pl-0 sm:pl-12' : 'justify-end pr-0 sm:pr-12'}`}>
                                    <div className={`relative bg-white border border-gray-100 rounded-3xl p-8 shadow-xl ${item.left ? 'border-l-8' : 'border-r-8'} ${item.border} w-full transition-all hover:shadow-2xl`}>
                                        <h4 className="font-black text-idara-navy text-2xl mb-3 flex items-center gap-3">{item.title}</h4>
                                        <p className="text-gray-600 text-base font-medium leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                        {showAll && (
                            <div className="flex justify-center py-4 relative z-20">
                                <button className="px-8 py-3 bg-idara-navy text-white rounded-full font-bold hover:bg-idara-orange transition-all" onClick={() => setShowAll(false)}>Show Less</button>
                            </div>
                        )}
                        <div className="flex flex-col sm:flex-row items-center relative" data-aos="fade-up">
                            <div className="absolute left-1/2 -translate-x-1/2 z-20 hidden sm:block">
                                <div className="w-12 h-12 rounded-full bg-idara-cyan shadow-xl flex items-center justify-center ring-4 ring-white">
                                    {last.icon}
                                </div>
                            </div>
                            <div className="w-full sm:w-1/2 flex justify-start pl-0 sm:pl-12">
                                <div className={`relative bg-white border border-gray-100 rounded-3xl p-8 shadow-xl border-l-8 ${last.border} w-full transition-all hover:shadow-2xl`}>
                                    <h4 className="font-black text-idara-navy text-2xl mb-3 flex items-center gap-3">{last.title}</h4>
                                    <p className="text-gray-600 text-base font-medium leading-relaxed">{last.desc}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Original Full-width Students Image Section (Moved to Footer top) */}
            <MissionVision />

            <Footer />
        </main>
    );
};

export default AboutPage;
