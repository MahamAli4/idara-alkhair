'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion, Variants } from 'framer-motion';

const Hero: React.FC = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            easing: "ease-out-cubic"
        });
    }, []);

    const word = "Tomorrow.";
    const characters = word.split("");

    // Variants for the entire left content block
    const leftContentVariants: Variants = {
        hidden: { opacity: 0, x: -100 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut",
                when: "beforeChildren", // Ensures this animation finishes before children start
            },
        },
    };

    // Variants for the typewriter container
    const typewriterContainerVariants: Variants = {
        hidden: { opacity: 1 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.12,
                delayChildren: 0.2, // Small delay after the main block finishes sliding
            },
        },
    };

    // Variants for each character
    const characterVariants: Variants = {
        visible: {
            opacity: 1,
            display: "inline-block",
            transition: {
                duration: 0.05,
            },
        },
        hidden: {
            opacity: 0,
            display: "none",
        },
    };

    return (
        <section className="pt-24 sm:pt-32 lg:pt-[180px] pb-16 lg:pb-[120px] bg-white overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="flex flex-col lg:flex-row items-center">
                    
                    {/* Left Content Side */}
                    <motion.div 
                        className="w-full lg:w-1/2 mb-10 lg:mb-0 relative z-40 text-center lg:text-left"
                        variants={leftContentVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-bold leading-[1.1] text-idara-navy mb-6 tracking-tight">
                            Changing <span className="text-idara-orange font-black">Lives</span><br className="hidden sm:block" />
                            Today. Building a Better<br className="hidden sm:block" />
                            <motion.span
                                className="text-idara-orange font-black inline-flex"
                                variants={typewriterContainerVariants}
                            >
                                {characters.map((char, index) => (
                                    <motion.span key={index} variants={characterVariants}>
                                        {char === " " ? "\u00A0" : char}
                                    </motion.span>
                                ))}
                            </motion.span>
                        </h1>

                        <motion.p 
                            className="text-base sm:text-lg md:text-xl lg:text-[1.5rem] lg:leading-relaxed text-idara-navy opacity-80 mb-8 md:mb-12 max-w-2xl mx-auto lg:mx-0"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.8 }}
                            transition={{ delay: 0.5, duration: 1 }}
                        >
                            For over 38 years, Idara Al-Khair Welfare Society has been serving humanity with compassion, transparency, and purpose. From educating children to feeding the hungry and providing healthcare to those who cannot afford it, we stand with those who need support the most.
                        </motion.p>

                        <motion.div 
                            className="flex justify-center lg:justify-start"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8, duration: 0.5 }}
                        >
                            <Link href="/donate" className="btn-help-family no-underline inline-block text-base sm:text-lg px-8 py-3.5">
                                Help a Family Today
                            </Link>
                        </motion.div>

                        {/* Cyan Triangle behind text area */}
                        <div className="hero-tri-cyan shadow-sm hidden lg:block"></div>
                    </motion.div>

                    {/* Right Graphic Side */}
                    <div className="w-full lg:w-1/2 mt-8 sm:mt-12 lg:mt-0 flex justify-center items-center">
                        <div className="relative w-full max-w-[450px] sm:max-w-[550px] aspect-square lg:h-[650px] mx-auto">
                            {/* Main Image */}
                            <img
                                data-aos="zoom-in"
                                data-aos-delay="800"
                                src="/website-media/homepage/homepagepicture.jpg"
                                alt="Idara Al-Khair Students"
                                className="absolute inset-0 w-full h-full object-contain z-30 transform scale-[1.05] xs:scale-[1.1] sm:scale-125 lg:scale-150 origin-bottom lg:origin-center"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;