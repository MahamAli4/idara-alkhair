'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar: React.FC = () => {
    const pathname = usePathname();

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'About Us', href: '/about' },
        { name: 'Projects', href: '/projects' },
        { name: 'Contact Us', href: '/contact' },
    ];

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
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    className={`nav-link-custom ${pathname === link.href ? 'active' : ''}`}
                                >
                                    {link.name}
                                </Link>
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

                {/* Mobile Toggler Placeholder (Lucide Menu could be added here) */}
                <button className="lg:hidden p-2 text-gray-600">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
