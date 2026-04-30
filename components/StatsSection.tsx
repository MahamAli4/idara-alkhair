'use client';

import React from 'react';
import AnimatedCounter from "./animated-counter";
import FadeInSection from "./fade-in-section";
import GlassmorphismCard from "./glassmorphism-card";
import Animated3DIcon from "./animated-3d-icon";
import { Users, Lightbulb, Globe, HeartPulse } from "lucide-react";

export default function StatsSection() {
  const stats = [
    {
      label: "People Served Since 1987",
      value: 85750,
      icon: Users,
      color: "text-idara-orange",
      delay: 0.1,
    },
    {
      label: "Innovation Projects",
      value: 2960,
      icon: Lightbulb,
      color: "text-idara-navy",
      delay: 0.2,
    },
    {
      label: "Communities Served",
      value: 1506,
      icon: Globe,
      color: "text-idara-orange",
      delay: 0.3,
    },
    {
      label: "Health Centers Supported",
      value: 50,
      icon: HeartPulse,
      color: "text-idara-navy",
      delay: 0.4,
    }
  ];

  return (
    <div className="bg-white overflow-hidden">
      {/* Enhanced Statistics Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 lg:py-32 relative">
        {/* Background Decorative Element */}
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-idara-navy/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-idara-orange/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

        <div className="container mx-auto relative z-10">
          <FadeInSection>
            <div className="relative mb-20 lg:mb-28">
              <div className="flex flex-col lg:flex-row items-center justify-center text-center">
                {/* Left Line */}
                <div className="hidden lg:block flex-1 h-px bg-linear-to-l from-idara-navy via-idara-orange to-transparent mr-8"></div>

                {/* Heading */}
                <div className="w-full lg:w-auto px-4">
                  <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 text-idara-navy tracking-tight">
                    Our Impact <span className="text-idara-orange">in Numbers</span>
                  </h2>
                  <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto font-medium">
                    Transforming lives across Pakistan through dedicated community service and innovation since 1987.
                  </p>
                </div>

                {/* Right Line */}
                <div className="hidden lg:block flex-1 h-px bg-linear-to-r from-idara-navy via-idara-orange to-transparent ml-8"></div>
              </div>
            </div>
          </FadeInSection>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 px-4">
            {stats.map((stat, index) => (
              <FadeInSection key={index} delay={stat.delay}>
                <GlassmorphismCard className="group relative overflow-hidden p-10 text-center transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 border border-idara-navy/5">
                  {/* Hover Gradient Overlay */}
                  <div className="absolute inset-0 z-0 bg-linear-to-br from-idara-navy/5 via-transparent to-idara-orange/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10 flex flex-col items-center justify-center h-full">
                    <div className="mb-8 transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                      <Animated3DIcon Icon={stat.icon} color={stat.color} delay={stat.delay + 0.1} />
                    </div>
                    
                    <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-idara-navy mb-3">
                      <AnimatedCounter end={stat.value} />
                      {stat.value > 1000 ? '+' : ''}
                    </h3>
                    
                    <p className="text-xs sm:text-sm font-black text-idara-navy/40 uppercase tracking-[0.2em]">
                      {stat.label}
                    </p>
                    
                    {/* Decorative Bottom Bar */}
                    <div className="w-12 h-1.5 bg-idara-navy/10 rounded-full mt-8 group-hover:w-24 group-hover:bg-idara-orange transition-all duration-500"></div>
                  </div>
                </GlassmorphismCard>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
