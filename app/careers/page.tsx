'use client';

import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Briefcase, MapPin, Clock, ArrowRight, Loader2, Search, Filter } from 'lucide-react';
import JobApplicationModal from '@/components/JobApplicationModal';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function CareersPage() {
    const [jobs, setJobs] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedJob, setSelectedJob] = useState<any>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

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

    const filteredJobs = jobs.filter(job => 
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.category?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const openApplication = (job: any) => {
        setSelectedJob(job);
        setIsModalOpen(true);
    };

    return (
        <main className="min-h-screen bg-gray-50/50">
            <Navbar />

            {/* ===== HERO SECTION ===== */}
            <section className="relative mt-20 h-[80vh] flex items-center overflow-hidden bg-[#012060]">
                {/* Decorative background */}
                <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 transform translate-x-20"></div>
                
                <div className="container mx-auto px-6 relative z-10 text-center md:text-left">
                    <div className="max-w-5xl">
                        <h1 
                            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white mb-6 tracking-tight"
                            data-aos="fade-right"
                        >
                            Build Your <span className="text-idara-orange">Career</span> at Idara Al-Khair
                        </h1>
                        <p 
                            className="text-lg md:text-xl text-blue-100 font-medium leading-relaxed mb-10"
                            data-aos="fade-right"
                            data-aos-delay="200"
                        >
                            Join a team dedicated to transforming lives through education, healthcare, and humanitarian support. Your talent can create a lasting impact on underprivileged communities.
                        </p>
                    </div>
                </div>
            </section>

            {/* ===== SEARCH & FILTER ===== */}
            <section className="container mx-auto px-6 -mt-10 mb-16 relative z-20">
                <div 
                    className="bg-white p-4 md:p-6 rounded-3xl shadow-xl border border-gray-100 flex flex-col md:flex-row gap-4"
                    data-aos="zoom-in"
                >
                    <div className="flex-1 relative">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input 
                            type="text" 
                            placeholder="Search by position or category..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-12 pr-4 py-4 bg-gray-50 rounded-2xl outline-none focus:ring-2 focus:ring-[#012060]/10 transition-all font-medium"
                        />
                    </div>
                </div>
            </section>

            {/* ===== JOBS LISTING ===== */}
            <section className="container mx-auto px-6 mb-32">
                <div className="flex items-center justify-between mb-10">
                    <div>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-[#012060]">Open <span className="text-idara-orange">Positions</span></h2>
                        <div className="h-1.5 w-20 bg-idara-orange rounded-full mt-2"></div>
                    </div>
                    <span className="bg-gray-100 text-gray-600 px-4 py-1.5 rounded-full text-sm font-bold">
                        {filteredJobs.length} Jobs Found
                    </span>
                </div>

                {loading ? (
                    <div className="flex flex-col items-center justify-center py-20">
                        <Loader2 className="w-10 h-10 text-[#012060] animate-spin mb-4" />
                        <p className="text-gray-500 font-bold uppercase tracking-widest text-sm">Loading Opportunities...</p>
                    </div>
                ) : filteredJobs.length === 0 ? (
                    <div className="text-center py-20 bg-white rounded-[40px] shadow-sm border border-gray-100">
                        <Briefcase className="w-16 h-16 text-gray-200 mx-auto mb-4" />
                        <h3 className="text-xl sm:text-2xl font-bold text-gray-800">No openings found</h3>
                        <p className="text-gray-500 mt-2">Check back later or try a different search.</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {filteredJobs.map((job, idx) => (
                            <div 
                                key={job.id}
                                data-aos="fade-up"
                                data-aos-delay={idx * 100}
                                className="group bg-white rounded-[32px] p-8 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-gray-100 relative overflow-hidden"
                            >
                                {/* Floating Gradient */}
                                <div className="absolute -top-10 -right-10 w-24 h-24 bg-blue-50 rounded-full group-hover:scale-150 transition-transform duration-700 opacity-50"></div>
                                
                                <div className="relative z-10">
                                    <div className="flex items-center gap-3 mb-6">
                                        <span className="bg-blue-50 text-[#012060] text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full">
                                            {job.jobType.replace('_', ' ')}
                                        </span>
                                        {job.department && (
                                            <span className="bg-orange-50 text-idara-orange text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full">
                                                {job.department}
                                            </span>
                                        )}
                                    </div>
                                    
                                    <h3 className="text-xl sm:text-2xl font-black text-[#012060] mb-4 group-hover:text-idara-orange transition-colors">
                                        {job.title}
                                    </h3>
                                    
                                    <div className="space-y-3 mb-8">
                                        <div className="flex items-center text-gray-500 font-medium">
                                            <MapPin className="w-4 h-4 mr-2 text-idara-orange" />
                                            {job.location}
                                        </div>
                                        {job.employmentLevel && (
                                            <div className="flex items-center text-gray-500 font-medium">
                                                <Clock className="w-4 h-4 mr-2 text-idara-orange" />
                                                {job.employmentLevel}
                                            </div>
                                        )}
                                    </div>

                                    <button 
                                        onClick={() => openApplication(job)}
                                        className="w-full py-4 bg-[#012060] text-white rounded-2xl font-black flex items-center justify-center gap-2 group-hover:bg-idara-orange transition-all shadow-lg shadow-blue-900/10"
                                    >
                                        Apply Now
                                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
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
