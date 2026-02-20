'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function ContactPage() {
    return (
        <main className="bg-white min-h-screen">
            <Navbar />

            {/* ===== HERO SECTION ===== */}
            <section className="relative mt-[115px] h-[350px] md:h-[450px] overflow-hidden">
                <img
                    src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop"
                    alt="IT Lab"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="relative z-10 h-full flex items-center justify-center text-center">
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white uppercase tracking-tighter">
                        CONTACT <span className="text-idara-orange">US</span>
                    </h1>
                </div>
            </section>

            {/* ===== LET'S CONNECT SECTION ===== */}
            <section className="container mx-auto px-6 py-20">
                <div className="flex flex-col lg:flex-row gap-16 lg:items-start">
                    {/* Left SIDE: TEXT */}
                    <div className="w-full lg:w-1/2">
                        <div className="max-w-md">
                            <h2 className="text-4xl md:text-5xl font-black text-idara-navy mb-8">
                                Let's <span className="text-idara-orange uppercase">Connect</span>
                            </h2>
                            <p className="text-gray-700 text-lg font-medium mb-12">
                                Whether you want to donate, volunteer, or partner with us, we'd love to hear from you.
                            </p>

                            <h2 className="text-4xl md:text-5xl font-black text-idara-navy mb-8">
                                Contact <span className="text-idara-orange uppercase">Information</span>
                            </h2>
                            <p className="text-gray-700 text-lg font-medium">
                                Whether you want to donate, volunteer, or partner with us, we'd love to hear from you.
                            </p>
                        </div>
                    </div>

                    {/* Right SIDE: DECORATIVE FORM */}
                    <div className="w-full lg:w-1/2 relative">
                        {/* Decorative Shapes below form */}
                        <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-idara-orange z-0" style={{ clipPath: 'polygon(100% 0, 0% 100%, 100% 100%)' }}></div>
                        <div className="absolute -top-10 -right-4 w-24 h-24 bg-idara-cyan z-0 shadow-lg" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%)' }}></div>
                        <div className="absolute -top-6 -left-2 w-16 h-1 w-24 h-24 bg-idara-orange opacity-20 z-0" style={{ display: 'none' }}></div> {/* Placeholder for more shapes if needed */}

                        <div className="relative z-10 bg-white p-8 md:p-10 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-gray-100">
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 gap-2">
                                    <div className="flex items-center gap-4">
                                        <label className="text-sm font-bold text-idara-navy min-w-[60px]">Name :</label>
                                        <input
                                            type="text"
                                            placeholder="Type your name here..."
                                            className="flex-1 bg-gray-50 border border-gray-200 px-4 py-3 rounded outline-none text-sm italic"
                                        />
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <label className="text-sm font-bold text-idara-navy min-w-[60px]">Email :</label>
                                        <input
                                            type="email"
                                            placeholder="Enter your email..."
                                            className="flex-1 bg-gray-50 border border-gray-200 px-4 py-3 rounded outline-none text-sm italic"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-idara-navy block">What can we help you with?</label>
                                    <textarea
                                        rows={8}
                                        placeholder="Enter your message..."
                                        className="w-full bg-gray-50 border border-gray-200 px-4 py-3 rounded outline-none text-sm italic resize-none"
                                    ></textarea>
                                </div>
                                <div className="flex justify-end">
                                    <button type="submit" className="bg-[#012060] text-white px-8 py-2 rounded font-bold uppercase text-xs shadow-md transform hover:scale-105 transition-all">
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== CONTACT INFO CARDS SECTION ===== */}
            <section className="bg-gray-200 py-20 px-6">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {/* Phone Card */}
                        <div className="text-center group">
                            <div className="w-24 h-24 bg-idara-cyan rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg transform group-hover:scale-110 transition-transform">
                                <Phone className="text-white w-10 h-10" />
                            </div>
                            <h3 className="text-4xl font-black text-idara-navy mb-4 uppercase">Phone</h3>
                            <p className="text-lg font-medium text-gray-700">0300-2992469</p>
                            <p className="text-lg font-medium text-gray-700">03002112609</p>
                        </div>

                        {/* Email Card */}
                        <div className="text-center group">
                            <div className="w-24 h-24 bg-idara-orange rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg transform group-hover:scale-110 transition-transform">
                                <Mail className="text-white w-10 h-10" />
                            </div>
                            <h3 className="text-4xl font-black text-idara-navy mb-4 uppercase">Email</h3>
                            <p className="text-lg font-medium text-gray-700">idaraalkhair@gmail.com</p>
                            <p className="text-lg font-medium text-gray-700">idaraalkhair@hotmail.com</p>
                        </div>

                        {/* Address Card */}
                        <div className="text-center group">
                            <div className="w-24 h-24 bg-[#ffc20e] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg transform group-hover:scale-110 transition-transform">
                                <MapPin className="text-white w-10 h-10" />
                            </div>
                            <h3 className="text-4xl font-black text-idara-navy mb-4 uppercase">Address</h3>
                            <p className="text-lg font-medium text-gray-700">R - 510/15, Federal-B Area,</p>
                            <p className="text-lg font-medium text-gray-700">Karachi.</p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
