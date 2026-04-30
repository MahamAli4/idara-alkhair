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
    ChevronRight,
    Menu,
    X,
    ClipboardCheck,
    Mail,
    BookOpen,
    ShieldCheck,
    Activity
} from 'lucide-react';

const Navbar: React.FC = () => {
    const pathname = usePathname();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);
    const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);

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
        { name: 'Projects', dropdown: true },
        { name: 'Contact Us', href: '/contact' },
    ];

    const contactLinks = [
        { name: 'Volunteer Application Form', href: '/contact/volunteer-form', icon: ClipboardCheck },
        { name: 'Contact Us', href: '/contact', icon: Mail },
    ];

    const projectSections = [
        {
            id: 'medical',
            title: "Medical",
            icon: Stethoscope,
            links: [
                { name: 'Medical Center', href: '/projects/medical-center', icon: Stethoscope },
                { name: 'North City Hospital', href: '/projects/north-city-hospital', icon: Activity },
            ]
        },
        {
            id: 'welfare',
            title: "Welfare Program",
            icon: Heart,
            links: [
                { name: 'Food Support Program', href: '/projects/food-support-program', icon: Utensils },
                { name: 'Help a Dream', href: '/projects/help-a-dream', icon: Zap },
                { name: 'Disaster Relief Program', href: '/projects/disaster-relief-program', icon: LifeBuoy },
            ]
        },
        {
            id: 'academic',
            title: "Academic",
            icon: GraduationCap,
            links: [
                { name: 'Education Schools & Colleges', href: '/projects/education-schools-colleges', icon: BookOpen },
                { name: 'IT Institute', href: '/projects/it-institute', icon: Monitor },
                { name: 'Technical Training Centers', href: '/projects/technical-training-centers', icon: Wrench },
            ]
        },
        {
            id: 'shop',
            title: "Shop",
            icon: ShoppingBag,
            href: '/projects/shop'
        }
    ];

    const toggleMobileDropdown = (dropdownName: string) => {
        setOpenMobileDropdown(openMobileDropdown === dropdownName ? null : dropdownName);
    };

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm py-3 md:py-4 lg:py-5">
            <div className="container mx-auto px-4 sm:px-6 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="shrink-0 z-50 relative">
                    <img
                        src="/logo.png"
                        alt="IDARA AL-KHAIR"
                        className="h-[45px] xs:h-[55px] sm:h-[65px] md:h-[75px] w-auto transition-transform duration-300"
                    />
                </Link>

                {/* Desktop Navbar Links */}
                <div className="hidden lg:flex flex-1 justify-center">
                    <ul className="flex items-center space-x-1 xl:space-x-2">
                        {navLinks.map((link) => (
                            <li key={link.name} className="relative group">
                                {link.dropdown && link.name === 'Projects' ? (
                                    <>
                                        <button
                                            className={`nav-link-custom flex items-center px-3 py-2 text-[15px] xl:text-[16px] ${pathname.startsWith('/projects') ? 'active' : ''}`}
                                        >
                                            {link.name}
                                            <ChevronDown className="w-4 h-4 ml-1 transition-transform duration-200 group-hover:rotate-180" />
                                        </button>

                                        {/* Multilevel Nested Dropdown */}
                                        <div className="absolute top-full left-0 w-64 bg-white shadow-xl rounded-xl py-3 transform scale-95 opacity-0 invisible group-hover:scale-100 group-hover:opacity-100 group-hover:visible transition-all duration-300 origin-top-left z-50 mt-4 border border-gray-100">
                                            {projectSections.map((section) => (
                                                <div 
                                                    key={section.id} 
                                                    className="relative group/sub"
                                                    onMouseEnter={() => section.links && setActiveSubMenu(section.id)}
                                                    onMouseLeave={() => setActiveSubMenu(null)}
                                                >
                                                    {section.href ? (
                                                        <Link
                                                            href={section.href}
                                                            className="flex items-center justify-between px-5 py-3 text-sm font-semibold text-gray-700 hover:bg-orange-50 hover:text-idara-orange transition-all"
                                                        >
                                                            <div className="flex items-center">
                                                                <section.icon size={18} className="mr-3 text-gray-400 group-hover/sub:text-idara-orange" />
                                                                {section.title}
                                                            </div>
                                                        </Link>
                                                    ) : (
                                                        <div className="flex items-center justify-between px-5 py-3 text-sm font-semibold text-gray-700 hover:bg-orange-50 hover:text-idara-orange transition-all cursor-pointer">
                                                            <div className="flex items-center">
                                                                <section.icon size={18} className="mr-3 text-gray-400 group-hover/sub:text-idara-orange" />
                                                                {section.title}
                                                            </div>
                                                            <ChevronRight size={14} className="text-gray-400 group-hover/sub:text-idara-orange transition-transform group-hover/sub:translate-x-1" />
                                                        </div>
                                                    )}

                                                    {/* Second Level Dropdown (Sub-menu) */}
                                                    {section.links && (
                                                        <div className="absolute top-0 left-full w-64 bg-white shadow-2xl rounded-xl py-3 ml-2 transform scale-95 opacity-0 invisible group-hover/sub:scale-100 group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-300 origin-left border border-gray-100">
                                                            <div className="px-5 py-2 mb-2 border-b border-gray-50">
                                                                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{section.title} Programs</p>
                                                            </div>
                                                            {section.links.map((link, lIdx) => (
                                                                <Link
                                                                    key={lIdx}
                                                                    href={link.href}
                                                                    className="flex items-center px-5 py-2.5 text-[13px] font-medium text-gray-600 hover:bg-orange-50 hover:text-idara-orange transition-colors"
                                                                >
                                                                    <link.icon size={16} className="mr-3 text-gray-300" />
                                                                    {link.name}
                                                                </Link>
                                                            ))}
                                                        </div>
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    </>
                                ) : link.name === 'Contact Us' ? (
                                    <>
                                        <button
                                            className={`nav-link-custom flex items-center px-3 py-2 text-[15px] xl:text-[16px] ${pathname.startsWith('/contact') ? 'active' : ''}`}
                                        >
                                            {link.name}
                                            <ChevronDown className="w-4 h-4 ml-1 transition-transform duration-200 group-hover:rotate-180" />
                                        </button>

                                        {/* Contact Dropdown Menu */}
                                        <div className="absolute top-full left-0 w-80 bg-white shadow-lg rounded-md overflow-hidden transform scale-95 opacity-0 invisible group-hover:scale-100 group-hover:opacity-100 group-hover:visible transition-all duration-300 origin-top-left z-50 mt-2 border-t-4 border-idara-orange">
                                            <div className="py-2">
                                                {contactLinks.map((item) => {
                                                    const Icon = item.icon;
                                                    return (
                                                        <Link
                                                            key={item.href}
                                                            href={item.href}
                                                            className="group/item flex items-center px-4 py-3 text-gray-700 hover:bg-orange-50 hover:text-idara-orange transition-colors border-b border-gray-100 last:border-0"
                                                        >
                                                            <span className="mr-3 text-gray-400 group-hover/item:text-idara-orange transition-colors duration-300 group-hover/item:translate-x-1">
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
                                        href={link.href || '#'}
                                        className={`nav-link-custom px-3 py-2 text-[15px] xl:text-[16px] ${pathname === link.href ? 'active' : ''}`}
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
                    <Link href="/donate" className="btn-donate no-underline shadow-md hover:shadow-lg transition-all duration-300 text-sm xl:text-base px-4 xl:px-6 py-2 xl:py-2.5">
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
                className={`fixed top-0 right-0 h-full w-[90%] xs:w-[85%] max-w-[350px] bg-white z-40 transform transition-transform duration-300 ease-in-out lg:hidden flex flex-col shadow-2xl ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                <div className="flex-1 overflow-y-auto pt-[80px] sm:pt-[100px] pb-6 px-4 sm:px-6">
                    <ul className="flex flex-col">
                        {navLinks.map((link) => (
                            <li key={link.name} className="border-b border-gray-100 last:border-0">
                                {link.dropdown && link.name === 'Projects' ? (
                                    <div className="flex flex-col">
                                        <button
                                            onClick={() => toggleMobileDropdown('Projects')}
                                            className="flex items-center justify-between w-full text-left text-[16px] sm:text-[18px] font-semibold text-[#012060] hover:text-idara-orange transition-colors py-4 px-2"
                                        >
                                            {link.name}
                                            <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${openMobileDropdown === 'Projects' ? 'rotate-180 text-idara-orange' : ''}`} />
                                        </button>

                                        {/* Mobile Projects Nested Sub-menus */}
                                        <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openMobileDropdown === 'Projects' ? 'max-h-[1500px] opacity-100 mb-2' : 'max-h-0 opacity-0'}`}>
                                            <div className="pl-4 pr-2 flex flex-col space-y-2 pb-4">
                                                {projectSections.map((section) => (
                                                    <div key={section.id} className="flex flex-col">
                                                        {section.href ? (
                                                            <Link
                                                                href={section.href}
                                                                className="flex items-center py-3 px-3 rounded-lg text-gray-700 font-bold hover:bg-orange-50 hover:text-idara-orange transition-colors"
                                                            >
                                                                <section.icon size={18} className="mr-3 text-gray-400" />
                                                                {section.title}
                                                            </Link>
                                                        ) : (
                                                            <div className="flex flex-col">
                                                                <button
                                                                    onClick={() => toggleMobileDropdown(`ProjectSub_${section.id}`)}
                                                                    className="flex items-center justify-between w-full py-3 px-3 rounded-lg text-gray-700 font-bold hover:bg-gray-50 hover:text-idara-orange transition-colors"
                                                                >
                                                                    <div className="flex items-center">
                                                                        <section.icon size={18} className="mr-3 text-gray-400" />
                                                                        {section.title}
                                                                    </div>
                                                                    <ChevronDown size={16} className={`transition-transform ${openMobileDropdown === `ProjectSub_${section.id}` ? 'rotate-180 text-idara-orange' : ''}`} />
                                                                </button>
                                                                {section.links && (
                                                                    <div className={`overflow-hidden transition-all duration-300 ${openMobileDropdown === `ProjectSub_${section.id}` ? 'max-h-96 opacity-100 mb-2' : 'max-h-0 opacity-0'}`}>
                                                                        <div className="pl-8 flex flex-col space-y-1">
                                                                            {section.links.map((link, lIdx) => (
                                                                                <Link
                                                                                    key={lIdx}
                                                                                    href={link.href}
                                                                                    className="flex items-center py-2.5 px-3 rounded-lg text-[13px] font-medium text-gray-500 hover:text-idara-orange hover:bg-orange-50 transition-colors"
                                                                                >
                                                                                    {link.name}
                                                                                </Link>
                                                                            ))}
                                                                        </div>
                                                                    </div>
                                                                )}
                                                            </div>
                                                        )}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                ) : link.name === 'Contact Us' ? (
                                    <div className="flex flex-col">
                                        <button
                                            onClick={() => toggleMobileDropdown('Contact')}
                                            className="flex items-center justify-between w-full text-left text-[16px] sm:text-[18px] font-semibold text-[#012060] hover:text-idara-orange transition-colors py-4 px-2"
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
                                                            <Icon size={18} className={`mr-3 mt-0.5 shrink-0 ${isActive ? 'text-idara-orange' : 'text-gray-400'}`} />
                                                            <span className="text-sm font-medium leading-tight">{item.name}</span>
                                                        </Link>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <Link
                                        href={link.href || '#'}
                                        className={`block py-4 px-2 text-[16px] sm:text-[18px] font-semibold transition-colors ${pathname === link.href ? 'text-idara-orange' : 'text-[#012060] hover:text-idara-orange'}`}
                                    >
                                        {link.name}
                                    </Link>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Mobile Drawer Bottom Action */}
                <div className="p-6 sm:p-8 border-t border-gray-100 bg-gray-50">
                    <Link
                        href="/donate"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="flex items-center justify-center w-full py-3.5 px-6 bg-idara-orange text-white font-bold rounded-md shadow-md hover:bg-orange-600 transition-colors text-base sm:text-lg"
                    >
                        <Heart size={20} className="mr-2" />
                        Donate Now
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
