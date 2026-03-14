'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function VolunteerFormPage() {
    return (
        <main className="bg-white min-h-screen">
            <Navbar />

            {/* ===== HERO SECTION ===== */}
            <section className="relative mt-[115px] h-[350px] md:h-[450px] overflow-hidden">
                <img
                    src="/website media/Application Volunteer Form/Banner Image.jpg"
                    alt="Volunteering Students"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
                    <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black text-white uppercase tracking-tighter">
                        <span className="text-idara-orange">APPLICATION</span> / VOLUNTEER FORM
                    </h1>
                </div>
            </section>

            {/* ===== BE PART OF THE CHANGE SECTION ===== */}
            <section className="container mx-auto px-6 py-16 lg:py-24 relative">
                <div className="max-w-4xl relative z-10">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 transition-all duration-300">
                        <span className="text-idara-navy">Be Part of the </span>
                        <span className="text-idara-orange">Change</span>
                    </h2>
                    <div className="space-y-6">
                        <p className="text-gray-700 text-lg md:text-xl lg:text-2xl font-medium leading-relaxed max-w-3xl">
                            Join Idara Al-Khair as a volunteer and contribute your time, skills, and passion toward meaningful causes.
                        </p>
                        <p className="text-gray-700 text-lg md:text-xl lg:text-2xl font-medium italic opacity-80">
                            Every helping hand matters.
                        </p>
                    </div>
                </div>

                {/* Decorative Geometric Shape (Idara Branding - Exact Match) */}
                <div className="absolute top-0 right-0 lg:right-10 w-48 h-48 lg:w-64 lg:h-64 pointer-events-none opacity-90 hidden md:block">
                    <div className="relative w-full h-full">
                        {/* Orange Triangle (Top Left) */}
                        <div
                            className="absolute top-[10%] left-[10%] w-[45%] h-[45%] bg-idara-orange"
                            style={{ clipPath: 'polygon(0% 0%, 100% 0%, 0% 100%)' }}
                        ></div>
                        {/* Cyan Triangle (Bottom Left) */}
                        <div
                            className="absolute bottom-[10%] left-[10%] w-[45%] h-[45%] bg-idara-cyan"
                            style={{ clipPath: 'polygon(0% 0%, 100% 100%, 0% 100%)' }}
                        ></div>
                        {/* Yellow/Orange Triangle (Right Arrow) */}
                        <div
                            className="absolute top-1/2 -translate-y-1/2 right-[10%] w-[45%] h-[45%] bg-idara-yellow"
                            style={{ clipPath: 'polygon(0% 0%, 100% 50%, 0% 100%)' }}
                        ></div>
                    </div>
                </div>
            </section>

            {/* ===== VOLUNTEER FORM SECTION ===== */}
            <section className="container mx-auto px-6 pb-24">
                <div className="max-w-4xl mx-auto">
                    <h3 className="text-4xl lg:text-5xl font-bold text-[#002060] text-center mb-20 tracking-normal">
                        Volunteer form
                    </h3>

                    <form className="space-y-12">
                        {/* Row: Your name */}
                        <div className="space-y-3">
                            <label className="text-base font-bold text-[#002060] block px-1">Your name</label>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <input
                                    type="text"
                                    placeholder="First"
                                    className="w-full px-5 py-4 rounded-sm border border-gray-200 bg-white focus:border-idara-orange ring-0! outline-none transition-all text-sm placeholder:text-gray-300"
                                />
                                <input
                                    type="text"
                                    placeholder="Last"
                                    className="w-full px-5 py-4 rounded-sm border border-gray-200 bg-white focus:border-idara-orange ring-0! outline-none transition-all text-sm placeholder:text-gray-300"
                                />
                            </div>
                        </div>

                        {/* Row: Your email address */}
                        <div className="space-y-3">
                            <label className="text-base font-bold text-idara-navy block px-1">Your email address</label>
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="w-full px-5 py-4 rounded-sm border border-gray-200 bg-white focus:border-idara-orange ring-0! outline-none transition-all text-sm placeholder:text-gray-300"
                            />
                        </div>

                        {/* Row: The volunteer name */}
                        <div className="space-y-3">
                            <label className="text-base font-bold text-idara-navy block px-1">The volunteer name</label>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <input
                                    type="text"
                                    placeholder="First"
                                    className="w-full px-5 py-4 rounded-sm border border-gray-200 bg-white focus:border-idara-orange ring-0! outline-none transition-all text-sm placeholder:text-gray-300"
                                />
                                <input
                                    type="text"
                                    placeholder="Last"
                                    className="w-full px-5 py-4 rounded-sm border border-gray-200 bg-white focus:border-idara-orange ring-0! outline-none transition-all text-sm placeholder:text-gray-300"
                                />
                            </div>
                        </div>

                        {/* Row: The volunteer email address */}
                        <div className="space-y-3">
                            <label className="text-base font-bold text-idara-navy block px-1">The volunteer email address</label>
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="w-full px-5 py-4 rounded-sm border border-gray-200 bg-white focus:border-idara-orange ring-0! outline-none transition-all text-sm placeholder:text-gray-300"
                            />
                        </div>

                        {/* Row: The volunteer age */}
                        <div className="space-y-3">
                            <label className="text-base font-bold text-idara-navy block px-1">The volunteer age</label>
                            <input
                                type="text"
                                placeholder="Email Address"
                                className="w-full px-5 py-4 rounded-sm border border-gray-200 bg-white focus:border-idara-orange ring-0! outline-none transition-all text-sm placeholder:text-gray-300"
                            />
                        </div>

                        {/* Row: Availability */}
                        <div className="space-y-6 pt-4">
                            <label className="text-base font-bold text-[#002060] block px-1">Availability</label>
                            <div className="space-y-3">
                                {['Weekends', '1 day a week', '2 days a week', '4th any day'].map((item) => (
                                    <label key={item} className="flex items-center gap-4 p-4 border border-gray-200 rounded-sm cursor-pointer hover:bg-gray-50 transition-all bg-white group">
                                        <div className="relative flex items-center justify-center">
                                            <input type="checkbox" className="peer w-5 h-5 appearance-none border border-gray-300 rounded-sm checked:bg-[#002060] checked:border-[#002060] transition-all cursor-pointer" />
                                            <svg className="absolute w-3.5 h-3.5 text-white opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                                                <polyline points="20 6 9 17 4 12"></polyline>
                                            </svg>
                                        </div>
                                        <span className="text-sm font-semibold text-gray-700 group-hover:text-[#002060] transition-colors">{item}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        <div className="flex justify-end pt-8">
                            <button type="submit" className="bg-[#002060] text-white px-16 py-3.5 rounded-sm font-bold text-lg hover:bg-[#001c54] transition-all shadow-lg active:scale-[0.98]">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </section>

            <Footer />
        </main>
    );
}
