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
                    src="https://images.unsplash.com/photo-1559027615-cd2671c15b82?q=80&w=2070&auto=format&fit=crop"
                    alt="Volunteering Students"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="relative z-10 h-full flex items-center justify-center text-center">
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white uppercase tracking-tighter">
                        <span className="text-idara-orange">APPLICATION</span> / VOLUNTEER FORM
                    </h1>
                </div>
            </section>

            {/* ===== BE PART OF THE CHANGE SECTION ===== */}
            <section className="container mx-auto px-6 py-20 relative">
                <div className="max-w-4xl">
                    <h2 className="text-4xl md:text-5xl font-black text-idara-navy mb-8">
                        Be Part of the <span className="text-idara-orange">Change</span>
                    </h2>
                    <p className="text-gray-700 text-lg md:text-xl font-medium mb-4">
                        Join Idara Al-Khair as a volunteer and contribute your time, skills, and passion toward meaningful causes.
                    </p>
                    <p className="text-gray-700 text-lg md:text-xl font-medium">
                        Every helping hand matters.
                    </p>
                </div>

                {/* Decorative Shape on Right (Matching Image) */}
                <div className="absolute top-10 right-10 hidden lg:block w-32 h-32">
                    <div className="relative w-full h-full">
                        {/* Triangle shapes mimicking the Idara style logo components */}
                        <div
                            className="absolute inset-0 bg-idara-orange"
                            style={{ clipPath: 'polygon(50% 0%, 50% 100%, 100% 50%)' }}
                        ></div>
                        <div
                            className="absolute inset-0 bg-idara-cyan opacity-80"
                            style={{ clipPath: 'polygon(0% 50%, 50% 100%, 0% 100%)' }}
                        ></div>
                        <div
                            className="absolute inset-0 bg-idara-navy opacity-40"
                            style={{ clipPath: 'polygon(0% 0%, 50% 0%, 0% 50%)' }}
                        ></div>
                    </div>
                </div>
            </section>

            {/* ===== VOLUNTEER FORM SECTION ===== */}
            <section className="container mx-auto px-6 pb-32">
                <div className="max-w-4xl mx-auto">
                    <h3 className="text-3xl font-black text-idara-navy text-center mb-12 uppercase tracking-tight">
                        Volunteer form
                    </h3>

                    <form className="space-y-8">
                        {/* Row: Name */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-bold text-idara-navy">Your name</label>
                                <input
                                    type="text"
                                    placeholder="First"
                                    className="w-full px-4 py-3 rounded border border-gray-300 focus:border-idara-orange outline-none transition-all text-sm"
                                />
                            </div>
                            <div className="flex flex-col gap-2 pt-6">
                                <input
                                    type="text"
                                    placeholder="Last"
                                    className="w-full px-4 py-3 rounded border border-gray-300 focus:border-idara-orange outline-none transition-all text-sm"
                                />
                            </div>
                        </div>

                        {/* Row: Email Address */}
                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-bold text-idara-navy">Your email address</label>
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="w-full px-4 py-3 rounded border border-gray-300 focus:border-idara-orange outline-none transition-all text-sm"
                            />
                        </div>

                        {/* Row: The volunteer name */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-bold text-idara-navy">The volunteer name</label>
                                <input
                                    type="text"
                                    placeholder="First"
                                    className="w-full px-4 py-3 rounded border border-gray-300 focus:border-idara-orange outline-none transition-all text-sm"
                                />
                            </div>
                            <div className="flex flex-col gap-2 pt-6">
                                <input
                                    type="text"
                                    placeholder="Last"
                                    className="w-full px-4 py-3 rounded border border-gray-300 focus:border-idara-orange outline-none transition-all text-sm"
                                />
                            </div>
                        </div>

                        {/* Row: The volunteer email address */}
                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-bold text-idara-navy">The volunteer email address</label>
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="w-full px-4 py-3 rounded border border-gray-300 focus:border-idara-orange outline-none transition-all text-sm"
                            />
                        </div>

                        {/* Row: The volunteer age */}
                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-bold text-idara-navy">The volunteer age</label>
                            <input
                                type="text"
                                placeholder="Email Address"
                                className="w-full px-4 py-3 rounded border border-gray-300 focus:border-idara-orange outline-none transition-all text-sm"
                            />
                        </div>

                        {/* Row: Availability */}
                        <div className="space-y-4 pt-4">
                            <label className="text-sm font-bold text-idara-navy block">Availability</label>

                            <label className="flex items-center gap-3 p-3 border border-gray-200 rounded cursor-pointer hover:bg-gray-50 transition-all">
                                <input type="checkbox" className="w-4 h-4 accent-idara-navy" />
                                <span className="text-sm font-medium text-gray-700">Weekends</span>
                            </label>

                            <label className="flex items-center gap-3 p-3 border border-gray-200 rounded cursor-pointer hover:bg-gray-50 transition-all">
                                <input type="checkbox" className="w-4 h-4 accent-idara-navy" />
                                <span className="text-sm font-medium text-gray-700">1 day a week</span>
                            </label>

                            <label className="flex items-center gap-3 p-3 border border-gray-200 rounded cursor-pointer hover:bg-gray-50 transition-all">
                                <input type="checkbox" className="w-4 h-4 accent-idara-navy" />
                                <span className="text-sm font-medium text-gray-700">2 days a week</span>
                            </label>

                            <label className="flex items-center gap-3 p-3 border border-gray-200 rounded cursor-pointer hover:bg-gray-50 transition-all">
                                <input type="checkbox" className="w-4 h-4 accent-idara-navy" />
                                <span className="text-sm font-medium text-gray-700">4th any day</span>
                            </label>
                        </div>

                        <div className="flex justify-end pt-8">
                            <button type="submit" className="bg-[#012060] text-white px-12 py-3 rounded font-bold uppercase tracking-widest hover:opacity-90 transition-all shadow-md">
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
