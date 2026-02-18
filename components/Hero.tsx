'use client';

import React from 'react';

const Hero: React.FC = () => {
    return (
        <section className="pt-[180px] pb-[120px] bg-white overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center">
                    {/* Left Content Side */}
                    <div className="lg:w-1/2 mb-10 lg:mb-0 relative z-10">
                        <h1 className="hero-title font-bold">
                            Changing <span className="text-idara-orange font-black">Lives</span><br />
                            Today. Building a Better<br />
                            <span className="text-idara-orange font-black">Tomorrow.</span>
                        </h1>
                        <p className="text-[1.5rem] text-idara-navy opacity-80 mb-12 max-w-full">
                            For over 38 years, Idara Al-Khair Welfare Society has been serving humanity with compassion, transparency, and purpose. From educating children to feeding the hungry and providing healthcare to those who cannot afford it, we stand with those who need support the most.
                        </p>
                        <button className="btn-help-family">
                            Help a Family Today
                        </button>

                        {/* Cyan Triangle behind text area */}
                        <div className="hero-tri-cyan shadow-sm"></div>
                    </div>

                    {/* Right Graphic Side */}
                    <div className="lg:w-1/2 w-full mt-12 lg:mt-0">
                        <div className="hero-graphic-container transform lg:translate-x-12">
                            {/* Background Shapes */}
                            <div className="shape-pill-orange shadow-lg"></div>
                            <div className="shape-pill-yellow shadow-lg"></div>

                            <div className="shape-circle-cyan shadow-md"></div>
                            <div className="shape-pill-navy-top shadow-md"></div>
                            <div className="shape-circle-navy-bottom shadow-md"></div>

                            {/* Main Hero Image Students */}
                            <img
                                src="/images/hero.png"
                                alt="Idara Al-Khair Welfare Society"
                                className="hero-main-image"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
