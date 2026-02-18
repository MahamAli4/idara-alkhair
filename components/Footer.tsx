'use client';

import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, MapPin, Phone, Mail } from 'lucide-react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-[#0a2351] text-white relative overflow-hidden">
            {/* Dotted Background Pattern */}
            <div 
                className="absolute inset-0 opacity-30 pointer-events-none"
                style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.4) 1.5px, transparent 0)`,
                    backgroundSize: '30px 30px'
                }}
            />
            
            {/* Main Footer Content */}
            <div className="relative z-10 container mx-auto px-4 py-16 md:py-20">
                <div className="flex flex-col md:flex-row md:justify-between md:gap-20">
                    {/* Left Section */}
                    <div className="md:w-1/2 mb-12 md:mb-0">
                        {/* Logo Image */}
                        <div className="mb-8">
                            <img 
                                src="/idaraalkhair0-logo.png" 
                                alt="Idara Al-Khair"
                                className="h-16 w-auto"
                            />
                        </div>

                        {/* Description */}
                        <p className="text-white/80 text-base max-w-md mb-8 leading-relaxed">
                            Idara Al-Khair welfare society was formed and registered in the year 1987.
                        </p>

                        {/* View Map Link */}
                        <div className="mb-8">
                            <a 
                                href="#" 
                                className="inline-flex items-center gap-2 text-white hover:text-[#ff6b35] transition-colors group"
                            >
                                <span className="text-sm font-medium">View map</span>
                                <svg 
                                    className="w-4 h-4 fill-current text-[#ff6b35] group-hover:text-[#ff6b35]" 
                                    viewBox="0 0 512 512" 
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M444.52 3.52L28.74 195.42c-47.97 22.39-31.98 92.75 19.19 92.75h175.91v175.91c0 51.17 70.36 67.17 92.75 19.19l191.9-415.78c15.99-38.39-25.59-79.97-63.97-63.97z"/>
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Right Section */}
                    <div className="md:w-1/2">
                        {/* Address with Icon */}
                        <div className="flex items-start gap-3 mb-6">
                            <MapPin className="w-5 h-5 text-[#ff6b35] shrink-0 mt-1" />
                            <p className="text-white/90 text-base">
                                R-510/15 Federal B Area, Karachi
                            </p>
                        </div>

                        {/* Phone with Icon */}
                        <div className="flex items-center gap-3 mb-6">
                            <Phone className="w-5 h-5 text-[#ff6b35] shrink-0" />
                            <a 
                                href="tel:+923002112609" 
                                className="text-white/90 text-base hover:text-[#ff6b35] transition-colors inline-block"
                            >
                                +92 300 211 2609
                            </a>
                        </div>

                        {/* Email with Icon */}
                        <div className="flex items-center gap-3 mb-10">
                            <Mail className="w-5 h-5 text-[#ff6b35] shrink-0" />
                            <p className="text-white/90 text-base">
                                info@idaraalkhair.com
                            </p>
                        </div>

                        {/* Buttons */}
                        <div className="flex gap-4 mb-10">
                            <a 
                                href="#" 
                                className="bg-[#4a4a4a] text-white px-6 py-2.5 text-sm font-medium rounded hover:bg-[#5a5a5a] transition-colors"
                            >
                                Gallery
                            </a>
                            <a 
                                href="#" 
                                className="bg-[#0a6c7a] text-white px-6 py-2.5 text-sm font-medium rounded hover:bg-[#0a7a8a] transition-colors"
                            >
                                Privacy Policy
                            </a>
                        </div>

                        {/* Social Media Icons */}
                        <div className="flex gap-4">
                            <a 
                                href="#" 
                                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#ff6b35] transition-colors"
                                aria-label="Facebook"
                            >
                                <Facebook size={18} />
                            </a>
                            <a 
                                href="#" 
                                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#ff6b35] transition-colors"
                                aria-label="Twitter"
                            >
                                <Twitter size={18} />
                            </a>
                            <a 
                                href="#" 
                                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#ff6b35] transition-colors"
                                aria-label="Instagram"
                            >
                                <Instagram size={18} />
                            </a>
                            <a 
                                href="#" 
                                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#ff6b35] transition-colors"
                                aria-label="Youtube"
                            >
                                <Youtube size={18} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Copyright Section */}
            <div className="relative z-10 border-t border-white/20">
                <div className="container mx-auto px-4 py-6">
                    <p className="text-white/70 text-sm text-center">
                        Copyright © 1987 - 2025 All rights reserved | Idara Al-Khair
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;