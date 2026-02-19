'use client';
import React from 'react';
import { Facebook, Instagram, Youtube, Linkedin, MapPin, Phone, Mail } from 'lucide-react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-[#0a2351] text-white relative overflow-hidden pt-64 pb-10 md:pt-80">
            {/* 1. Dotted Background Pattern - Exactly like image */}
            <div
                className="absolute inset-0 opacity-20 pointer-events-none"
                style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.6) 1.5px, transparent 0)`,
                    backgroundSize: '35px 35px'
                }}
            />

            <div className="relative z-10 container mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

                    {/* LEFT SECTION */}
                    <div className="space-y-6">
                        {/* Logo & Society Name */}
                        <div className="flex items-start gap-4">
                            <img src="/idaraalkhair0-logo.png" alt="Logo" className="h-30 w-auto" />
                        </div>

                        {/* Description */}
                        <p className="text-white text-lg max-w-sm font-medium leading-snug">
                            Idara Al-Khair welfare society was formed and registered in the year 1987.
                        </p>

                        {/* View Map Link */}
                        <a href="#" className="inline-flex items-center gap-2 group mt-4">
                            <span className="text-xl font-bold border-b-2 border-transparent group-hover:border-white transition-all">View map</span>
                            <span className="text-2xl">➤</span>
                        </a>
                    </div>

                    {/* RIGHT SECTION */}
                    <div className="space-y-8 md:pl-20">
                        {/* Contact Info with Cyan Icons */}
                        <div className="space-y-5">
                            <div className="flex items-center gap-4">
                                <div className="bg-idara-cyan p-1.5 rounded-sm">
                                    <MapPin size={18} className="text-[#0a2351] fill-current" />
                                </div>
                                <span className="text-xl font-bold tracking-tight">R-510/15 Federal B Area, Karachi</span>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="bg-idara-cyan p-1.5 rounded-sm">
                                    <Phone size={18} className="text-[#0a2351] fill-current" />
                                </div>
                                <a href="tel:+923002112609" className="text-xl font-bold hover:text-idara-cyan transition-colors">
                                    +92 300 211 2609
                                </a>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="bg-idara-cyan p-1.5 rounded-sm">
                                    <Mail size={18} className="text-[#0a2351] fill-current" />
                                </div>
                                <a href="mailto:info@idaraalkhair.com" className="text-xl font-bold hover:text-idara-cyan transition-colors">
                                    info@idaraalkhair.com
                                </a>
                            </div>
                        </div>

                        {/* Action Buttons - Cyan & White */}
                        <div className="flex gap-4 pt-4">
                            <button className="bg-white text-[#0a2351] px-10 py-3 rounded-md font-black text-xl shadow-lg hover:bg-gray-100 transition-all">
                                Gallery
                            </button>
                            <button className="bg-idara-cyan text-white px-8 py-3 rounded-md font-black text-xl shadow-lg hover:bg-[#00acc1] transition-all">
                                Privacy Policy
                            </button>
                        </div>

                        {/* Social Media Icons */}
                        <div className="flex gap-3 pt-4">
                            {[Facebook, TwitterXIcon, Instagram, Youtube, Linkedin].map((Icon, i) => (
                                <a key={i} href="#" className="w-10 h-10 border border-white rounded-full flex items-center justify-center hover:bg-white hover:text-[#0a2351] transition-all">
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Copyright Section */}
            <div className="relative z-10 border-t border-white/20 mt-16">
                <div className="container mx-auto px-4 py-6">
                    <p className="text-white/70 text-sm text-center">
                        Copyright © 1987 - 2025 All rights reserved | Idara Al-Khair
                    </p>
                </div>
            </div>
        </footer>
    );
};

// Custom X (Twitter) Icon since Lucide-react might not have the new X logo in older versions
const TwitterXIcon = ({ size }: { size: number }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
);

export default Footer;