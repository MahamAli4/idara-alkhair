'use client';
import React from 'react';
import { Facebook, Instagram, Youtube, Linkedin, MapPin, Phone, Mail, Briefcase } from 'lucide-react';

import { usePathname } from 'next/navigation';

const Footer: React.FC = () => {
    const pathname = usePathname();
    const isHomepage = pathname === '/';

    return (
        <footer className={`bg-[#0a2351] text-white relative overflow-hidden pb-20 ${isHomepage ? 'pt-24 md:pt-32 lg:pt-50' : 'pt-20'}`}>
            {/* 1. Dotted Background Pattern from user folder */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    backgroundImage: `url('/website-media/footer/footerbackground.png')`,
                    backgroundSize: '800px', // Scaling down to allow repetition
                    backgroundPosition: 'center',
                    backgroundRepeat: 'repeat',
                    opacity: 0.05
                }}
            />

            <div className="relative z-10 container mx-auto px-4 sm:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 items-start">

                    {/* LEFT SECTION */}
                    <div className="space-y-6">
                        {/* Logo & Society Name */}
                        <div className="flex items-start gap-4 justify-center lg:justify-start">
                            <img src="/idaraalkhair0-logo.png" alt="Logo" className="h-20 sm:h-24 md:h-30 w-auto" />
                        </div>

                        {/* Description */}
                        <p className="text-white text-base md:text-lg max-w-sm mx-auto lg:mx-0 text-center lg:text-left font-medium leading-snug">
                            Idara Al-Khair welfare society was formed and registered in the year 1987.
                        </p>

                        {/* View Map Link */}
                        <div className="flex justify-center lg:justify-start">
                            <a href="#" className="inline-flex items-center gap-2 group mt-2 md:mt-4">
                                <span className="text-lg md:text-xl font-bold border-b-2 border-transparent group-hover:border-white transition-all">View map</span>
                                <span className="text-xl md:text-2xl">➤</span>
                            </a>
                        </div>
                    </div>

                    {/* RIGHT SECTION */}
                    <div className="space-y-6 md:space-y-8 lg:pl-10 xl:pl-20">
                        {/* Donate Now Button Moved to Top */}
                        <div className="pb-1 text-center lg:text-left">
                           <a href="/donate" className="inline-block text-center bg-idara-orange text-white px-5 md:px-8 py-2 md:py-2.5 rounded-md font-bold text-lg md:text-xl shadow-lg hover:bg-orange-600 transition-all w-full sm:w-auto transform hover:scale-105">
                                Donate Now
                           </a>
                        </div>

                        {/* Contact Info with Cyan Icons */}
                        <div className="space-y-4 md:space-y-5">
                            <div className="flex items-center justify-start gap-3 md:gap-4">
                                <div className="bg-idara-cyan p-1.5 rounded-sm shrink-0">
                                    <MapPin size={18} className="text-[#0a2351] fill-current" />
                                </div>
                                <span className="text-base sm:text-lg lg:text-xl font-bold tracking-tight text-left">R-510/15 Federal B Area, Karachi</span>
                            </div>

                            <div className="flex items-center justify-start gap-3 md:gap-4">
                                <div className="bg-idara-cyan p-1.5 rounded-sm shrink-0">
                                    <Phone size={18} className="text-[#0a2351] fill-current" />
                                </div>
                                <a href="tel:+923002112609" className="text-base sm:text-lg lg:text-xl font-bold hover:text-idara-cyan transition-colors">
                                    +92 300 211 2609
                                </a>
                            </div>

                            <div className="flex items-center justify-start gap-3 md:gap-4">
                                <div className="bg-idara-cyan p-1.5 rounded-sm shrink-0">
                                    <Mail size={18} className="text-[#0a2351] fill-current" />
                                </div>
                                <a href="mailto:info@idaraalkhair.com" className="text-base sm:text-lg lg:text-xl font-bold hover:text-idara-cyan transition-colors break-all">
                                    info@iak.ngo
                                </a>
                            </div>

                            <div className="flex items-center justify-start gap-3 md:gap-4">
                                <div className="bg-idara-cyan p-1.5 rounded-sm shrink-0">
                                    <Briefcase size={18} className="text-[#0a2351] fill-current" />
                                </div>
                                <a href="/careers" className="text-base sm:text-lg lg:text-xl font-bold hover:text-idara-cyan transition-colors">
                                    Careers
                                </a>
                            </div>
                        </div>

                        {/* Action Buttons - Cyan & White */}
                        <div className="flex flex-col sm:flex-row flex-wrap justify-start gap-4 pt-2 md:pt-4">
                            <a href="/gallery" className="inline-block text-center bg-white text-[#0a2351] px-6 md:px-8 py-3 rounded-md font-black text-lg md:text-xl shadow-lg hover:bg-gray-100 transition-all w-full sm:w-auto">
                                Gallery
                            </a>
                            <a href="/privacy-policy" className="inline-block text-center bg-idara-cyan text-white px-6 md:px-8 py-3 rounded-md font-black text-lg md:text-xl shadow-lg hover:bg-[#00acc1] transition-all w-full sm:w-auto">
                                Privacy Policy
                            </a>
                        </div>

                        {/* Social Media Icons */}
                        <div className="flex justify-start gap-3 pt-4">
                            <a href="https://www.facebook.com/idaraalkhairwelfaresociety/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-white rounded-full flex items-center justify-center hover:bg-white hover:text-[#0a2351] transition-all">
                                <Facebook size={18} />
                            </a>
                            <a href="https://x.com/idara_al" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-white rounded-full flex items-center justify-center hover:bg-white hover:text-[#0a2351] transition-all">
                                <TwitterXIcon size={18} />
                            </a>
                            <a href="https://www.instagram.com/idaraalkhair/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-white rounded-full flex items-center justify-center hover:bg-white hover:text-[#0a2351] transition-all">
                                <Instagram size={18} />
                            </a>
                            <a href="http://youtube.com/c/idaraalkhairwelfaresociety" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-white rounded-full flex items-center justify-center hover:bg-white hover:text-[#0a2351] transition-all">
                                <Youtube size={18} />
                            </a>
                            <a href="https://www.linkedin.com/company/idara-al-khair/?originalSubdomain=pk" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-white rounded-full flex items-center justify-center hover:bg-white hover:text-[#0a2351] transition-all">
                                <Linkedin size={18} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Copyright Section */}
            {/* <div className="relative z-10 border-t border-white/20 mt-16">
                <div className="container mx-auto px-4 py-6">
                    <p className="text-white/70 text-sm text-center">
                        Copyright © 1987 - 2025 All rights reserved | Idara Al-Khair
                    </p>
                </div>
            </div> */}
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