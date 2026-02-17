'use client';

import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light fixed-top bg-white">
            <div className="container">
                {/* Logo */}
                <Link href="/" className="navbar-brand">
                    <img
                        src="/logo.png"
                        alt="IDARA AL-KHAIR"
                        style={{ height: '70px', width: 'auto' }}
                    />
                </Link>

                {/* Toggler for Mobile */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Navbar Links */}
                <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                    <ul className="navbar-nav align-items-center">
                        <li className="nav-item">
                            <Link href="/" className="nav-link-custom active">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/about" className="nav-link-custom">
                                About Us
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/projects" className="nav-link-custom">
                                Projects
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/contact" className="nav-link-custom">
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Action Button */}
                <div className="d-none d-lg-block">
                    <Link href="/donate" className="btn-donate text-decoration-none">
                        Donate Now
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
