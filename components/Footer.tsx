import React from 'react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

const Footer: React.FC = () => {
    return (
        <footer className="footer-section py-5 text-white" style={{ backgroundColor: '#031249' }}>
            <div className="container">
                <div className="row align-items-center">
                    {/* Left Column */}
                    <div className="col-md-6 mb-4 mb-md-0">
                        <div className="footer-logo mb-4">
                            <img
                                src="https://idaraalkhair.com/wp-content/uploads/2024/04/idaraalkhair0-logo.png"
                                alt="Idara Al-Khair Logo"
                                style={{ maxWidth: '200px' }}
                            />
                        </div>
                        <p className="mb-4 opacity-75" style={{ maxWidth: '400px' }}>
                            Idara Al-Khair welfare society was formed and registered in the year 1987. We are committed to transformation through education.
                        </p>
                        <a href="#" className="btn btn-outline-light d-inline-flex align-items-center gap-2">
                            View Map <Send size={18} />
                        </a>
                    </div>

                    {/* Right Column */}
                    <div className="col-md-6">
                        <h3 className="h4 mb-4 text-cyan" style={{ color: '#4dd0e1' }}>Get In Touch</h3>
                        <ul className="list-unstyled">
                            <li className="mb-3 d-flex align-items-center gap-3">
                                <MapPin size={20} className="text-cyan" style={{ color: '#4dd0e1' }} />
                                <span>R-510/15 Federal B Area, Karachi</span>
                            </li>
                            <li className="mb-3">
                                <a href="tel:+923002112609" className="text-white text-decoration-none d-flex align-items-center gap-3">
                                    <Phone size={20} className="text-cyan" style={{ color: '#4dd0e1' }} />
                                    <span>+92 300 211 2609</span>
                                </a>
                            </li>
                            <li className="mb-4">
                                <a href="mailto:info@idaraalkhair.com" className="text-white text-decoration-none d-flex align-items-center gap-3">
                                    <Mail size={20} className="text-cyan" style={{ color: '#4dd0e1' }} />
                                    <span>info@idaraalkhair.com</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-top border-white border-opacity-10 mt-5 pt-3 text-center opacity-50 small">
                    <p className="mb-0">Copyright © 1987 – 2025 All rights reserved | Idara Al-Khair</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
