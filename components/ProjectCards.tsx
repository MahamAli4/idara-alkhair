"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { ArrowRight, BookOpen, Utensils, Stethoscope, Laptop, Shield } from "lucide-react";

const projects = [
  {
    id: "education",
    title: "Education",
    description: "Quality education from primary to higher levels, empowering students with knowledge and skills.",
    image: "/website-media/homepage/quality-education.jpg",
    icon: BookOpen,
    stats: "6000+ Students",
    link: "/projects/education-schools-colleges",
  },
  {
    id: "food-support",
    title: "Food Support",
    description: "Ensuring food security through our Roti Bank and nutrition programs for families in need.",
    image: "/website-media/homepage/food-security.jpg",
    icon: Utensils,
    stats: "50,000+ Meals",
    link: "/projects/food-support-program",
  },
  {
    id: "medical",
    title: "Medical Center",
    description: "Comprehensive healthcare services including free medical camps and specialized treatments.",
    image: "/website-media/homepage/health-care.jpg",
    icon: Stethoscope,
    stats: "25,000+ Patients",
    link: "/projects/medical-center",
  },
  {
    id: "technical",
    title: "Technical Institute",
    description: "Vocational training and IT education preparing youth for modern employment opportunities.",
    image: "/website-media/homepage/skill-devp.jpg",
    icon: Laptop,
    stats: "2000+ Got Skills",
    link: "/projects/it-institute",
  },
  {
    id: "disaster-relief",
    title: "Disaster Relief",
    description: "Emergency response and rehabilitation support during natural disasters, humanitarian emergencies.",
    image: "/website-media/homepage/disaster.jpeg",
    icon: Shield,
    stats: "100+ Operations",
    link: "/projects/disaster-relief-program",
  },
  {
    id: "environment",
    title: "Environment Care",
    description: "Creating a sustainable future through innovative environmental protection and conservation initiatives.",
    image: "/website-media/homepage/environment.jpg",
    icon: Shield,
    stats: "10000+ Plants Planted",
    link: "#",
  },
];

export default function ProjectCards() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <section id="projects-section" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Heading Section */}
        <div className="relative mb-16 lg:mb-24">
          <div className="flex flex-col lg:flex-row items-center justify-center text-center">
            {/* Left Line */}
            <div className="hidden lg:block flex-1 h-px bg-linear-to-l from-idara-navy via-idara-orange to-transparent mr-8"></div>
            
            {/* Heading */}
            <div className="w-full lg:w-auto px-4">
              <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-idara-navy mb-4 tracking-tight">
                Our Valuable <span className="text-idara-orange">Projects</span>
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto font-medium">
                Comprehensive programs addressing the core needs of underserved communities across the nation.
              </p>
            </div>

            {/* Right Line */}
            <div className="hidden lg:block flex-1 h-px bg-linear-to-r from-idara-navy via-idara-orange to-transparent ml-8"></div>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-14 px-4">
          {projects.map((project, index) => (
            <Link href={project.link} key={project.id}>
              <div
                data-aos={
                  index % 3 === 0
                    ? "fade-right"
                    : index % 3 === 1
                    ? "fade-up"
                    : "fade-left"
                }
                data-aos-delay={index * 100}
                className="group relative overflow-hidden bg-white rounded-[32px] shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer border border-gray-50"
                onMouseEnter={() => setHoveredCard(project.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Gradient Overlay */}
                <div className="absolute inset-0 z-0 bg-linear-to-br from-idara-navy/5 via-transparent to-idara-orange/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  {/* Image Container */}
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    {/* Darker Overlay for better icon contrast */}
                    <div className="absolute inset-0 bg-idara-navy/10 group-hover:bg-idara-navy/0 transition-colors duration-500"></div>

                    {/* Floating Icon Badge */}
                    <div className="absolute top-6 left-6 w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-2xl transform transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110">
                      <project.icon className="w-7 h-7 text-idara-navy group-hover:text-idara-orange transition-colors duration-300" />
                    </div>

                    {/* Status Badge */}
                    <div className="absolute top-6 right-6 bg-idara-navy/90 backdrop-blur-md rounded-full px-4 py-2 border border-white/20">
                      <span className="text-xs font-black text-white uppercase tracking-widest">{project.stats}</span>
                    </div>
                  </div>

                  {/* Content Area */}
                  <div className="p-10">
                    <h3 className="text-2xl lg:text-3xl font-bold text-idara-navy mb-4 transition-colors duration-300 group-hover:text-idara-orange">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-8 leading-relaxed font-medium line-clamp-2">
                      {project.description}
                    </p>

                    <div className="inline-flex items-center text-idara-navy font-black uppercase tracking-widest text-xs group/btn">
                      <span className="relative">
                        Explore Project
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-idara-orange transition-all duration-500 group-hover/btn:w-full"></span>
                      </span>
                      <ArrowRight
                        className={`ml-3 w-5 h-5 text-idara-orange transition-transform duration-500 ${
                          hoveredCard === project.id ? "translate-x-3" : ""
                        }`}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}