'use client';

import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Upload, CheckCircle, Smartphone, Mail, User, GraduationCap, Briefcase, MapPin, FileText, Loader2, AlertCircle } from 'lucide-react';
import JobApplicationModal from '@/components/JobApplicationModal';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';

export default function CareersPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [jobs, setJobs] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedJob, setSelectedJob] = useState<any>(null);

    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
        fetchJobs();
    }, []);

    const fetchJobs = async () => {
        try {
            const res = await fetch('/api/jobs');
            const data = await res.json();
            if (res.ok) {
                setJobs(data.jobs || []);
            }
        } catch (error) {
            console.error('Error fetching jobs:', error);
        } finally {
            setLoading(false);
        }
    };

    const openJobApplication = (job: any) => {
        setSelectedJob(job);
        setIsModalOpen(true);
    };

    const openGeneralApplication = () => {
        setSelectedJob({ title: 'General Application', id: 4, location: 'Karachi, Pakistan', jobType: 'Full_Time' });
        setIsModalOpen(true);
    };



    return (
        <main className="min-h-screen bg-white overflow-hidden font-montserrat">
            <Navbar />

            {/* ===== HERO SECTION ===== */}
            <section className="relative h-[450px] md:h-[60vh] flex items-center justify-center mt-20">
                <div className="absolute inset-0 z-0">
                    <Image 
                        src="/images/hero.png" 
                        alt="Careers at Al-Khair"
                        fill
                        className="object-cover brightness-[0.7]"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/10 flex flex-col items-center justify-center">
                         <h2 className="text-white/40 text-7xl md:text-[14rem] font-black absolute top-10 select-none pointer-events-none uppercase tracking-tighter opacity-10">MAKERSPACE</h2>
                    </div>
                </div>
                
                <div className="container mx-auto px-6 relative z-10 text-center" data-aos="zoom-out">
                    <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold text-white tracking-tight">
                        Build your <span className="text-idara-orange">Career at AIT</span>
                    </h1>
                </div>
            </section>

            {/* ===== INTRODUCTION SECTION ===== */}
            <section className="py-20 bg-white">
                <div className="container mx-auto">
                    <h2 className="text-3xl md:text-6xl font-black text-idara-navy mb-12 leading-none" data-aos="fade-up">
                        Careers at <span className="text-idara-orange">Al-Khair Welfare Society</span>
                    </h2>
                    
                    <div className="space-y-8 text-gray-700 leading-relaxed text-xl" data-aos="fade-up" data-aos-delay="200">
                        <p className="font-medium text-gray-600">
                            At Idara Al-Khair (IAK), we don't just offer jobs — we create opportunities to make a real difference. As a part of Idara Al-Khair, 
                            our mission is to empower underserved communities through quality education and practical skills.
                        </p>
                        <p className="font-medium text-gray-600">
                            We are always looking for passionate, dedicated, and purpose-driven individuals who believe in transforming lives through knowledge. 
                            Whether you're an educator, creative professional, or technical expert, IAK provides a platform where your skills 
                            meet the needs of the underprivileged.
                        </p>
                    </div>
                </div>
            </section>

            {/* ===== PERFECT MATCH COLLAGE SECTION ===== */}
            <section className="relative">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-20 lg:gap-x-12">
                        
                        {/* FIRST COLUMN - Image 1 & Looking For & Buttons */}
                        <div className="lg:col-span-4 space-y-8">
                            {/* Image 1 with Yellow Triangle */}
                            <div className="relative group" data-aos="fade-right">
                                <div className="absolute top-3 left-0 w-8 h-16 md:w-18 md:h-18 z-20 pointer-events-none">
                                    <svg viewBox="0 0 100 100" className="w-full h-full">
                                        <path d="M0 0H100L0 100V0Z" fill="#F37335" />
                                    </svg>
                                </div>
                                <div className="rounded-[90px_90px_90px_90px] overflow-hidden shadow-2xl border-4 border-white aspect-5/4 relative">
                                    <Image src="/website-media/itinstitute/image02.jpg" alt="Team Work" fill className="object-cover" />
                                </div>
                            </div>

                            {/* Who we are looking for? */}
                            <div className="space-y-4" data-aos="fade-up">
                                <h3 className="text-3xl md:text-4xl font-black text-[#012060]">
                                    Who we are <span className="text-idara-orange">looking for?</span>
                                </h3>
                                <p className="text-gray-500 font-bold">We welcome individuals who are:</p>
                                <ul className="space-y-1 text-gray-600 font-bold">
                                    {['Passionate about education and social impact', 'Skilled in their respective fields', 'Creative, proactive, and responsible', 'Willing to learn and grow with us'].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <span className="text-idara-orange text-xl leading-none pt-1">◇</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>

                                {/* Resume Buttons (Side-by-Side as in Image) */}
                                <div className="pt-10">
                                    <h4 className="text-2xl md:text-3xl font-black text-[#012060] mb-8">
                                        Submit you <span className="text-idara-orange">Resume here:</span>
                                    </h4>
                                    <div className="flex flex-wrap items-center gap-6">
                                        <button 
                                            onClick={openGeneralApplication}
                                            className="flex items-center justify-center gap-2 bg-[#001D4A] text-white px-12 py-4 rounded-xl font-black shadow-lg hover:scale-105 transition-all"
                                        >
                                            <Upload className="w-5 h-5" />
                                            Upload
                                        </button>
                                        <button 
                                            onClick={openGeneralApplication}
                                            className="bg-[#C4C4C4] text-gray-700 px-12 py-4 rounded-xl font-black shadow-lg hover:bg-gray-400 transition-all"
                                        >
                                            Submit
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* MIDDLE COLUMN - Be a part & Image 2 */}
                        <div className="lg:col-span-4 lg:pt-0">
                            {/* Be a part of change */}
                            <div className="space-y-0" data-aos="fade-up">
                                <h3 className="text-3xl md:text-4xl font-black text-[#012060]">
                                    Be a part of <span className="text-idara-orange">change</span>
                                </h3>
                                <p className="text-gray-500 font-bold leading-relaxed max-w-sm">
                                    Join us in shaping brighter futures and building a skilled generation. Your career at IAK is more than a job — it's a journey of impact.
                                </p>
                            </div>

                            {/* Image 2 (B&W) with Yellow Circle and Teal Triangles */}
                            <div className="relative pt-8" data-aos="zoom-in">
                                {/* Yellow Circle overlapping left */}
                                <div className="absolute top-1/2 -left-16 w-22 h-22 bg-idara-yellow rounded-full z-20"></div>
                                
                                <div className="rounded-[40px] overflow-hidden shadow-2xl border-4 border-white grayscale aspect-4/5 relative z-10">
                                    <Image src="/website-media/itinstitute/image03.jpg" alt="Impact" fill className="object-cover" />
                                </div>

                                {/* Teal Triangles at Bottom Left of Image 2 */}
                                <div className="absolute -bottom-10 right-50 w-22 h-22 z-20">
                                    <svg viewBox="0 0 100 100" className="w-full h-full rotate-180">
                                        <path d="M0 0H100L50 100L0 0Z" fill="#00BCD4" />
                                    </svg>
                                </div>
                                <div className="absolute bottom-80 -right-5 w-16 h-16 z-20">
                                    <svg viewBox="0 0 100 100" className="w-full h-full">
                                        <path d="M0 100L100 0V100H0Z" fill="#00BCD4" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* THIRD COLUMN - Why join us & Image 3 */}
                        <div className="lg:col-span-4 space-y-0 lg:pt-15">
                            {/* Why join us? */}
                            <div className="space-y-4 relative" data-aos="fade-left">
                                <h3 className="text-3xl md:text-4xl font-black text-[#012060]">
                                    Why <span className="text-idara-orange">join us?</span>
                                </h3>
                                <ul className="space-y-2 text-gray-600 font-bold">
                                    {[
                                        'Work with a mission-driven organization',
                                        'Contribute to community development and youth empowerment',
                                        'Grow professionally in a collaborative environment',
                                        'Be part of a team that values innovation and compassion'
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <span className="text-gray-300 text-xl leading-none pt-1">◇</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                {/* Small Yellow Circle accent */}
                                {/* <div className="absolute -top-10 -right-10 w-12 h-12 bg-idara-yellow rounded-full opacity-80"></div> */}
                            </div>

                            {/* Image 3 (Tall Right) with Cyan Circle */}
                            <div className="relative group" data-aos="fade-left">
                                {/* Large Teal Circle overlap */}
                                <div className="absolute -right-10 top-1/2 -translate-y-1/2 w-30 h-30 bg-[#00BCD4] rounded-full z-20"></div>
                                
                                <div className="rounded-[40px] overflow-hidden shadow-2xl border-4 border-white aspect-2/3 relative z-10">
                                    <Image src="/website-media/itinstitute/image01.jpg" alt="Environment" fill className="object-cover" />
                                    {/* Yellow Triangle Bottom Left */}
                                    <div className="absolute bottom-0 left-0 w-12 h-12 z-20">
                                        <svg viewBox="0 0 100 100" className="w-full h-full rotate-90">
                                            <path d="M0 0H100L0 100V0Z" fill="#FFB300" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== OPEN POSITIONS SECTION (BACKEND JOBS) ===== */}
            <section className="pb-24 bg-gray-50/50">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center mb-16" data-aos="fade-up">
                        <h2 className="text-4xl md:text-6xl font-black text-idara-navy mb-4">
                            Open <span className="text-idara-orange">Positions</span>
                        </h2>
                        <p className="text-gray-500 font-bold max-w-2xl mx-auto italic">
                            Discover your next career move with Idara Al-Khair. Join our mission-driven team.
                        </p>
                    </div>

                    {loading ? (
                        <div className="flex flex-col items-center justify-center py-20">
                            <Loader2 className="w-12 h-12 text-idara-orange animate-spin mb-4" />
                            <p className="text-idara-navy font-black uppercase tracking-widest text-sm">Loading Opportunities...</p>
                        </div>
                    ) : jobs.length === 0 ? (
                        <div className="text-center py-20 bg-white rounded-[40px] shadow-sm border border-gray-100 max-w-4xl mx-auto">
                            <Briefcase className="w-16 h-16 text-gray-200 mx-auto mb-4" />
                            <h3 className="text-xl sm:text-2xl font-bold text-gray-800">No active openings right now</h3>
                            <p className="text-gray-500 mt-2">Check back later or submit a general resume above.</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {jobs.filter(j => j.id !== 4).map((job, idx) => (
                                <div 
                                    key={job.id} 
                                    className="group bg-white p-8 rounded-[32px] shadow-sm border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
                                    data-aos="fade-up"
                                    data-aos-delay={idx * 100}
                                >
                                    <div className="flex items-center gap-2 mb-6 text-xs font-black uppercase tracking-widest">
                                        <span className="bg-blue-50 text-idara-navy px-3 py-1 rounded-full">{job.jobType.replace('_', ' ')}</span>
                                        {job.department && <span className="bg-orange-50 text-idara-orange px-3 py-1 rounded-full">{job.department}</span>}
                                    </div>
                                    <h3 className="text-2xl font-black text-idara-navy mb-4 group-hover:text-idara-orange transition-colors">
                                        {job.title}
                                    </h3>
                                    <div className="flex items-center gap-2 text-gray-500 font-bold mb-10">
                                        <MapPin className="w-4 h-4 text-idara-orange" />
                                        <span>{job.location}</span>
                                    </div>
                                    <button 
                                        onClick={() => openJobApplication(job)}
                                        className="w-full bg-[#001D4A] text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 group-hover:bg-idara-orange transition-all shadow-lg"
                                    >
                                        Apply Now
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            {/* ===== BOTTOM TEAL LAB SECTION ===== */}
            <section className="relative h-[400px] w-full overflow-hidden">
                <Image 
                    src="/website-media/itinstitute/image01.jpg" 
                    alt="Center view" 
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-[#00A5B5]/60 mix-blend-multiply"></div>
                {/* Bottom dark area */}
                <div className="absolute bottom-0 w-full h-1/2 bg-linear-to-t from-[#001D4A] to-transparent"></div>
                
                {/* Visual detail - dotted pattern */}
                <div className="absolute bottom-0 left-0 w-full h-[150px] opacity-10 flex flex-wrap gap-2 p-1 border-t border-white/20">
                    {[...Array(200)].map((_, i) => (
                        <div key={i} className="w-1 h-1 bg-white rounded-full"></div>
                    ))}
                </div>
            </section>

            <Footer />

            <JobApplicationModal
                job={selectedJob}
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </main>
    );
}
