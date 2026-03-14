'use client';

import React, { useState, useEffect } from 'react';
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
    X,
    ClipboardCheck,
    Mail
} from 'lucide-react';

const Navbar: React.FC = () => {
    const pathname = usePathname();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);

    // Close mobile menu when route changes
    useEffect(() => {
        setIsMobileMenuOpen(false);
        setOpenMobileDropdown(null);
    }, [pathname]);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isMobileMenuOpen]);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'About Us', href: '/about' },
        { name: 'Projects', href: '/projects' },
        { name: 'Contact Us', href: '/contact' },
    ];

    const contactLinks = [
        { name: 'Volunteer Application Form', href: '/volunteer-form', icon: ClipboardCheck },
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

    const toggleMobileDropdown = (dropdownName: string) => {
        setOpenMobileDropdown(openMobileDropdown === dropdownName ? null : dropdownName);
    };

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm py-3 md:py-5">
            <div className="container mx-auto px-4 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="shrink-0 z-50 relative">
                    <img
                        src="/logo.png"
                        alt="IDARA AL-KHAIR"
                        className="h-[50px] md:h-[75px] w-auto transition-transform duration-300"
                    />
                </Link>

                {/* Desktop Navbar Links */}
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
                                ) : link.name === 'Contact Us' ? (
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

                {/* Desktop Action Button */}
                <div className="hidden lg:block z-50 relative">
                    <Link href="/donate" className="btn-donate no-underline shadow-md hover:shadow-lg transition-all duration-300">
                        Donate Now
                    </Link>
                </div>

                {/* Mobile Toggler Button */}
                <button
                    className="lg:hidden p-2 text-[#012060] hover:text-idara-orange transition-colors z-50 relative focus:outline-none"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle mobile menu"
                >
                    {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
                </button>
            </div>

            {/* Mobile Navigation Drawer Overlay */}
            <div
                className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 lg:hidden ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                    }`}
                onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Mobile Navigation Drawer */}
            <div
                className={`fixed top-0 right-0 h-full w-[85%] max-w-[350px] bg-white z-40 transform transition-transform duration-300 ease-in-out lg:hidden flex flex-col shadow-2xl ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                <div className="flex-1 overflow-y-auto pt-[90px] pb-6 px-4">
                    <ul className="flex flex-col">
                        {navLinks.map((link) => (
                            <li key={link.href} className="border-b border-gray-100 last:border-0">
                                {link.name === 'Projects' ? (
                                    <div className="flex flex-col">
                                        <button
                                            onClick={() => toggleMobileDropdown('Projects')}
                                            className="flex items-center justify-between w-full text-left text-[17px] font-semibold text-[#012060] hover:text-idara-orange transition-colors py-4 px-2"
                                        >
                                            {link.name}
                                            <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${openMobileDropdown === 'Projects' ? 'rotate-180 text-idara-orange' : ''}`} />
                                        </button>

                                        {/* Mobile Projects Dropdown Items */}
                                        <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openMobileDropdown === 'Projects' ? 'max-h-[800px] opacity-100 mb-2' : 'max-h-0 opacity-0'}`}>
                                            <div className="pl-4 pr-2 flex flex-col space-y-1 pb-2">
                                                {projectLinks.map((project) => {
                                                    const Icon = project.icon;
                                                    const isActive = pathname === project.href;
                                                    return (
                                                        <Link
                                                            key={project.href}
                                                            href={project.href}
                                                            className={`flex items-start py-3 px-3 rounded-lg transition-colors ${isActive ? 'bg-orange-50 text-idara-orange' : 'text-gray-600 hover:bg-gray-50 hover:text-idara-orange'}`}
                                                        >
                                                            <Icon size={18} className={`mr-3 mt-0.5 flex-shrink-0 ${isActive ? 'text-idara-orange' : 'text-gray-400'}`} />
                                                            <span className="text-sm font-medium leading-tight">{project.name}</span>
                                                        </Link>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                ) : link.name === 'Contact Us' ? (
                                    <div className="flex flex-col">
                                        <button
                                            onClick={() => toggleMobileDropdown('Contact')}
                                            className="flex items-center justify-between w-full text-left text-[17px] font-semibold text-[#012060] hover:text-idara-orange transition-colors py-4 px-2"
                                        >
                                            {link.name}
                                            <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${openMobileDropdown === 'Contact' ? 'rotate-180 text-idara-orange' : ''}`} />
                                        </button>

                                        {/* Mobile Contact Dropdown Items */}
                                        <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openMobileDropdown === 'Contact' ? 'max-h-64 opacity-100 mb-2' : 'max-h-0 opacity-0'}`}>
                                            <div className="pl-4 pr-2 flex flex-col space-y-1 pb-2">
                                                {contactLinks.map((item) => {
                                                    const Icon = item.icon;
                                                    const isActive = pathname === item.href;
                                                    return (
                                                        <Link
                                                            key={item.href}
                                                            href={item.href}
                                                            className={`flex items-start py-3 px-3 rounded-lg transition-colors ${isActive ? 'bg-orange-50 text-idara-orange shadow-sm' : 'text-gray-600 hover:bg-gray-50 hover:text-idara-orange'}`}
                                                        >
                                                            <Icon size={18} className={`mr-3 mt-0.5 flex-shrink-0 ${isActive ? 'text-idara-orange' : 'text-gray-400'}`} />
                                                            <span className="text-sm font-medium leading-tight">{item.name}</span>
                                                        </Link>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <Link
                                        href={link.href}
                                        className={`block py-4 px-2 text-[17px] font-semibold transition-colors ${pathname === link.href ? 'text-idara-orange' : 'text-[#012060] hover:text-idara-orange'}`}
                                    >
                                        {link.name}
                                    </Link>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Mobile Drawer Bottom Action */}
                <div className="p-6 border-t border-gray-100 bg-gray-50">
                    <Link
                        href="/donate"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="flex items-center justify-center w-full py-3 px-6 bg-idara-orange text-white font-bold rounded-md shadow-md hover:bg-orange-600 transition-colors"
                    >
                        <Heart size={18} className="mr-2" />
                        Donate Now
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
