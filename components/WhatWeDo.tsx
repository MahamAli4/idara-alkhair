'use client';

import React from 'react';
import { ShoppingBasket, HeartPulse, HardHat } from 'lucide-react';

const WhatWeDo: React.FC = () => {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-[3.5rem] lg:text-[4.5rem] font-black mb-4">
                        What we <span className="text-idara-orange">Do?</span>
                    </h2>
                    <p className="text-[1.2rem] text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Providing quality education through schools, colleges, technical centers, and IT institutes to break the cycle of poverty.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    <div className="bg-idara-cyan text-white p-12 rounded-[30px] text-center transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl flex flex-col items-center">
                        <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mb-6 text-idara-cyan shadow-lg">
                            <ShoppingBasket size={48} />
                        </div>
                        <h3 className="text-3xl font-black mb-4">Food Support</h3>
                        <p className="text-[1.1rem] opacity-95 leading-relaxed">
                            Daily meals for our students and emergency food distributions to family in deep hungry.
                        </p>
                    </div>

                    <div className="bg-idara-cyan text-white p-12 rounded-[30px] text-center transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl flex flex-col items-center">
                        <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mb-6 text-idara-cyan shadow-lg">
                            <HeartPulse size={48} />
                        </div>
                        <h3 className="text-3xl font-black mb-4">Healthcare</h3>
                        <p className="text-[1.1rem] opacity-95 leading-relaxed">
                            Affordable medical services for communities with limited access to healthcare.
                        </p>
                    </div>

                    <div className="bg-idara-cyan text-white p-12 rounded-[30px] text-center transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl flex flex-col items-center">
                        <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mb-6 text-idara-cyan shadow-lg">
                            <HardHat size={48} />
                        </div>
                        <h3 className="text-3xl font-black mb-4">Social Welfare & Relief</h3>
                        <p className="text-[1.1rem] opacity-95 leading-relaxed">
                            Rapid response during disasters and continuous support for vulnerable families.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhatWeDo;
