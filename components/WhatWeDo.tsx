import React from 'react';
import { ShoppingBasket, HeartPulse, HardHat } from 'lucide-react';

const WhatWeDo: React.FC = () => {
    return (
        <section className="what-we-do section-padding-custom bg-white">
            <div className="container">
                <div className="text-center mb-5">
                    <h2 className="display-5 fw-bold mb-3">What we <span className="text-orange">Do?</span></h2>
                    <p className="lead text-muted mx-auto" style={{ maxWidth: '700px' }}>
                        Providing quality education through schools, colleges, technical centers, and IT institutes to break the cycle of poverty.
                    </p>
                </div>

                <div className="row g-4 mt-4">
                    <div className="col-lg-4">
                        <div className="service-card h-100">
                            <div className="service-icon-bg shadow-sm">
                                <ShoppingBasket size={40} />
                            </div>
                            <h3 className="h4 fw-bold mb-3">Food Support</h3>
                            <p className="small mb-0 opacity-90">
                                Daily meals for our students and emergency food distributions to family in deep hungry.
                            </p>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="service-card h-100">
                            <div className="service-icon-bg shadow-sm">
                                <HeartPulse size={40} />
                            </div>
                            <h3 className="h4 fw-bold mb-3">Healthcare</h3>
                            <p className="small mb-0 opacity-90">
                                Affordable medical services for communities with limited access to healthcare.
                            </p>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="service-card h-100">
                            <div className="service-icon-bg shadow-sm">
                                <HardHat size={40} />
                            </div>
                            <h3 className="h4 fw-bold mb-3">Social Welfare & Relief</h3>
                            <p className="small mb-0 opacity-90">
                                Rapid response during disasters and continuous support for vulnerable families.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhatWeDo;
