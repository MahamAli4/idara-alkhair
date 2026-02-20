'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
    Wrench,
    ShoppingBag,
    Stethoscope,
    Monitor,
    Zap,
    Utensils,
    GraduationCap,
    LifeBuoy,
    Heart,
    ChevronDown,
    Menu,
    ClipboardCheck,
    Mail
} from 'lucide-react';

const Navbar: React.FC = () => {
    const pathname = usePathname();

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'About Us', href: '/about' },
        { name: 'Projects', href: '/projects' },
        { name: 'Contact', href: '/contact' },
    ];

    const contactLinks = [
        { name: 'APPLICATION VOLUNTEER FORM', href: '/volunteer-form', icon: ClipboardCheck },
        { name: 'Contact Us', href: '/contact', icon: Mail },
    ];

    const projectLinks = [
        { name: 'Technical Training Centers', href: '/projects/technical-training-centers', icon: Wrench },
        { name: 'Shop Page', href: '/projects/shop', icon: ShoppingBag },
        { name: 'Medical Center', href: '/projects/medical-center', icon: Stethoscope },
        { name: 'IT Institute', href: '/projects/it-institute', icon: Monitor },
        { name: 'Help a Dream', href: '/projects/help-a-dream', icon: Zap },
        { name: 'Food Support Program', href: '/projects/food-support-program', icon: Utensils },
        { name: 'Education Schools & Colleges', href: '/projects/education-schools-colleges', icon: GraduationCap },
        { name: 'DISASTER RELIEF PROGRAM', href: '/projects/disaster-relief-program', icon: LifeBuoy },
        { name: 'DONATE NOW', href: '/donate', icon: Heart },
    ];

    // Import icons at the top level in real implementation or map them 

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm py-5">
            <div className="container mx-auto px-4 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="shrink-0">
                    <img
                        src="/logo.png"
                        alt="IDARA AL-KHAIR"
                        className="h-[75px] w-auto"
                    />
                </Link>

                {/* Navbar Links */}
                <div className="hidden lg:flex flex-1 justify-center">
                    <ul className="flex items-center space-x-2">
                        {navLinks.map((link) => (
                            <li key={link.href} className="relative group">
                                {link.name === 'Projects' ? (
                                    <>
                                        <button
                                            className={`nav-link-custom flex items-center ${pathname.startsWith('/projects') ? 'active' : ''}`}
                                        >
                                            {link.name}
                                            <ChevronDown className="w-4 h-4 ml-1 transition-transform duration-200 group-hover:rotate-180" />
                                        </button>

                                        {/* Projects Dropdown Menu */}
                                        <div className="absolute top-full left-0 w-80 bg-white shadow-lg rounded-md overflow-hidden transform scale-95 opacity-0 invisible group-hover:scale-100 group-hover:opacity-100 group-hover:visible transition-all duration-300 origin-top-left z-50 mt-2 border-t-4 border-orange-500">
                                            <div className="py-2">
                                                {projectLinks.map((project) => {
                                                    const Icon = project.icon;
                                                    return (
                                                        <Link
                                                            key={project.href}
                                                            href={project.href}
                                                            className="group/item flex items-center px-4 py-3 text-gray-700 hover:bg-orange-50 hover:text-orange-500 transition-colors border-b border-gray-100 last:border-0"
                                                        >
                                                            <span className="mr-3 text-gray-400 group-hover/item:text-orange-500 transition-colors duration-300 group-hover/item:translate-x-1">
                                                                <Icon size={18} />
                                                            </span>
                                                            <span className="text-sm font-medium">{project.name}</span>
                                                        </Link>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    </>
                                ) : link.name === 'Contact' ? (
                                    <>
                                        <button
                                            className={`nav-link-custom flex items-center ${pathname.startsWith('/contact') || pathname === '/volunteer-form' ? 'active' : ''}`}
                                        >
                                            {link.name}
                                            <ChevronDown className="w-4 h-4 ml-1 transition-transform duration-200 group-hover:rotate-180" />
                                        </button>

                                        {/* Contact Dropdown Menu */}
                                        <div className="absolute top-full left-0 w-80 bg-white shadow-lg rounded-md overflow-hidden transform scale-95 opacity-0 invisible group-hover:scale-100 group-hover:opacity-100 group-hover:visible transition-all duration-300 origin-top-left z-50 mt-2 border-t-4 border-orange-500">
                                            <div className="py-2">
                                                {contactLinks.map((item) => {
                                                    const Icon = item.icon;
                                                    return (
                                                        <Link
                                                            key={item.href}
                                                            href={item.href}
                                                            className="group/item flex items-center px-4 py-3 text-gray-700 hover:bg-orange-50 hover:text-orange-500 transition-colors border-b border-gray-100 last:border-0"
                                                        >
                                                            <span className="mr-3 text-gray-400 group-hover/item:text-orange-500 transition-colors duration-300 group-hover/item:translate-x-1">
                                                                <Icon size={18} />
                                                            </span>
                                                            <span className="text-sm font-medium">{item.name}</span>
                                                        </Link>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    </>
                                ) : (
                                    <Link
                                        href={link.href}
                                        className={`nav-link-custom ${pathname === link.href ? 'active' : ''}`}
                                    >
                                        {link.name}
                                    </Link>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Action Button */}
                <div className="hidden lg:block">
                    <Link href="/donate" className="btn-donate no-underline">
                        Donate Now
                    </Link>
                </div>

                {/* Mobile Toggler Placeholder */}
                <button className="lg:hidden p-2 text-gray-600">
                    <Menu className="w-6 h-6" />
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
