import React from 'react';
import { MapPin, Phone, Mail, Instagram, Facebook, Twitter, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
    return (
        <footer className="footer-section py-5 text-white" style={{ backgroundColor: '#031249' }}>
            <div className="container">
                <div className="row align-items-center">
                    {/* Left Column */}
                    <div className="col-md-6 mb-4 mb-md-0">
                        <div className="footer-logo mb-4 bg-white p-2 d-inline-block rounded">
                            <img
                                src="/logo.png"
                                alt="Idara Al-Khair Logo"
                                style={{ height: '60px' }}
                            />
                        </div>
                        <p className="mb-4 opacity-75" style={{ maxWidth: '400px', fontSize: '0.9rem' }}>
                            Idara Al-Khair welfare society was formed and registered in the year 1987. We are committed to transformation through education.
                        </p>
                        <div className="d-flex gap-2">
                            <button className="btn btn-sm text-white px-3" style={{ backgroundColor: '#555' }}>Gallery</button>
                            <button className="btn btn-sm text-cyan px-3" style={{ backgroundColor: '#0a6c7a' }}>Privacy Policy</button>
                        </div>
                        <div className="mt-3">
                            <a href="#" className="text-white small text-decoration-none">View map</a>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="col-md-6">
                        <ul className="list-unstyled mb-5">
                            <li className="mb-3 d-flex align-items-center gap-3">
                                <MapPin size={18} className="text-cyan" />
                                <span className="small">R-510/15 Federal B Area, Karachi</span>
                            </li>
                            <li className="mb-3">
                                <a href="tel:+923002112609" className="text-white text-decoration-none d-flex align-items-center gap-3">
                                    <Phone size={18} className="text-cyan" />
                                    <span className="small">+92 300 211 2609</span>
                                </a>
                            </li>
                            <li className="mb-4">
                                <a href="mailto:info@idaraalkhair.com" className="text-white text-decoration-none d-flex align-items-center gap-3">
                                    <Mail size={18} className="text-cyan" />
                                    <span className="small">info@idaraalkhair.com</span>
                                </a>
                            </li>
                        </ul>

                        <div className="d-flex gap-3">
                            <a href="#" className="text-white"><Instagram size={20} /></a>
                            <a href="#" className="text-white"><Facebook size={20} /></a>
                            <a href="#" className="text-white"><Twitter size={20} /></a>
                            <a href="#" className="text-white"><Youtube size={20} /></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
