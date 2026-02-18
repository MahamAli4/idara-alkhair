'use client';

import React from 'react';
import { MapPin, Phone, Mail, Instagram, Facebook, Twitter, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
    return (
        <footer className="py-24 text-white bg-idara-navy">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center justify-between">
                    {/* Left Column */}
                    <div className="md:w-1/2 mb-10 md:mb-0">
                        <div className="mb-8 bg-white p-2 inline-block rounded">
                            <img
                                src="/logo.png"
                                alt="Idara Al-Khair Logo"
                                className="h-[60px]"
                            />
                        </div>
                        <p className="mb-8 opacity-75 max-w-[400px] text-sm">
                            Idara Al-Khair welfare society was formed and registered in the year 1987. We are committed to transformation through education.
                        </p>
                        <div className="flex gap-2">
                            <button className="text-white px-5 py-1.5 bg-[#555] text-xs font-semibold rounded transition-opacity hover:opacity-90">Gallery</button>
                            <button className="text-idara-cyan px-5 py-1.5 bg-[#0a6c7a] text-xs font-semibold rounded transition-opacity hover:opacity-90">Privacy Policy</button>
                        </div>
                        <div className="mt-4">
                            <a href="#" className="text-white text-xs no-underline hover:underline">View map</a>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="md:w-1/2 flex flex-col md:items-end w-full">
                        <ul className="space-y-4 mb-10 w-full md:max-w-[320px]">
                            <li className="flex items-center gap-4 text-sm">
                                <MapPin size={18} className="text-idara-cyan shrink-0" />
                                <span>R-510/15 Federal B Area, Karachi</span>
                            </li>
                            <li>
                                <a href="tel:+923002112609" className="text-white no-underline hover:text-idara-orange transition-colors flex items-center gap-4 text-sm">
                                    <Phone size={18} className="text-idara-cyan shrink-0" />
                                    <span>+92 300 211 2609</span>
                                </a>
                            </li>
                            <li>
                                <a href="mailto:info@idaraalkhair.com" className="text-white no-underline hover:text-idara-orange transition-colors flex items-center gap-4 text-sm">
                                    <Mail size={18} className="text-idara-cyan shrink-0" />
                                    <span>info@idaraalkhair.com</span>
                                </a>
                            </li>
                        </ul>

                        <div className="flex gap-5">
                            <a href="#" className="text-white hover:text-idara-orange transition-colors"><Instagram size={22} /></a>
                            <a href="#" className="text-white hover:text-idara-orange transition-colors"><Facebook size={22} /></a>
                            <a href="#" className="text-white hover:text-idara-orange transition-colors"><Twitter size={22} /></a>
                            <a href="#" className="text-white hover:text-idara-orange transition-colors"><Youtube size={22} /></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
