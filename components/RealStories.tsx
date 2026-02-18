'use client';

import React from 'react';

const RealStories: React.FC = () => {
    return (
        <section className="py-24 bg-idara-navy overflow-hidden relative">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                    <div className="lg:w-1/2 mb-12 lg:mb-0">
                        <h2 className="text-[3.5rem] lg:text-[4.5rem] font-black text-white leading-tight">
                            Real Stories
                        </h2>
                        <h2 className="text-[3.5rem] lg:text-[4.5rem] font-black text-idara-orange leading-tight mb-12">
                            Real Impact.
                        </h2>

                        <div className="space-y-12">
                            <div className="relative pl-8 before:absolute before:left-0 before:top-0 before:w-1 before:h-full before:bg-idara-orange">
                                <p className="text-2xl italic mb-4 text-white font-medium opacity-95">
                                    "Because of Idara Al-Khair, my children are studying and dreaming again."
                                </p>
                                <p className="text-idara-orange font-bold text-sm uppercase tracking-[0.2em]">Parent of a sponsored student.</p>
                            </div>

                            <div className="relative pl-8 before:absolute before:left-0 before:top-0 before:w-1 before:h-full before:bg-idara-orange">
                                <p className="text-2xl italic mb-4 text-white font-medium opacity-95">
                                    "Your support reached us when we had nothing left."
                                </p>
                                <p className="text-idara-orange font-bold text-sm uppercase tracking-[0.2em]">Disaster Relief Beneficiary</p>
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-1/2 w-full relative">
                        <div className="relative group">
                            <div className="absolute -inset-4 bg-idara-orange/20 rounded-full blur-3xl opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <div className="w-full max-w-[600px] mx-auto aspect-square bg-cover bg-center shadow-[0_0_50px_rgba(0,0,0,0.5)] relative rounded-[30px]"
                                style={{
                                    backgroundImage: 'url("https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2070&auto=format&fit=crop")',
                                    WebkitMaskImage: 'url("https://upload.wikimedia.org/wikipedia/commons/4/45/Pakistan_map_blank.svg")',
                                    WebkitMaskSize: 'contain',
                                    WebkitMaskRepeat: 'no-repeat',
                                    WebkitMaskPosition: 'center',
                                    maskImage: 'url("https://upload.wikimedia.org/wikipedia/commons/4/45/Pakistan_map_blank.svg")',
                                    maskSize: 'contain',
                                    maskRepeat: 'no-repeat',
                                    maskPosition: 'center',
                                }}>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RealStories;
