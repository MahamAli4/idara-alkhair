"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    id: 1,
    name: "Ahmed Hassan",
    role: "College Graduate",
    content:
      "Idara Al-Khair gave me the opportunity to pursue higher education when my family couldn't afford it. Today, I'm a successful engineer giving back to my community.",
    image: "/website-media/homepage/testimonal2.jpg",
  },
  {
    id: 2,
    name: "Fatima Khan",
    role: "Parent",
    content:
      "My 2 children are studying in Idara Al-Khair schools. The quality of education and care they receive is exceptional. I'm grateful for this organization.",
    image: "/website-media/homepage/testimonal1.jpg",
  },
  {
    id: 3,
    name: "Dr. Muhammad Ali",
    role: "Community Leader",
    content:
      "I've witnessed the transformation Idara Al-Khair has brought to our community. Their healthcare centers and educational programs have improved countless lives.",
    image: "/website-media/homepage/testimonal3.jpg",
  },
]

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 6000)

    return () => clearInterval(timer)
  }, [])

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Heading Section */}
        <div className="relative mb-16 lg:mb-24">
          <div className="flex flex-col lg:flex-row items-center justify-center text-center">
            {/* Left Line */}
            <div className="hidden lg:block flex-1 h-px bg-linear-to-l from-idara-navy via-idara-orange to-transparent mr-8"></div>
            
            {/* Heading */}
            <div className="w-full lg:w-auto px-4">
              <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-idara-navy mb-4 tracking-tight">
                Stories of <span className="text-idara-orange">Impact</span>
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto font-medium">
                Hear from those whose lives have been transformed through our collective efforts and your support.
              </p>
            </div>

            {/* Right Line */}
            <div className="hidden lg:block flex-1 h-px bg-linear-to-r from-idara-navy via-idara-orange to-transparent ml-8"></div>
          </div>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative bg-white rounded-[40px] p-8 md:p-16 shadow-2xl border-t-4 border-idara-navy overflow-hidden"
            >
              {/* Background Decorative Quote Mark */}
              <div className="absolute top-10 right-10 opacity-5 text-idara-navy">
                <Quote size={200} />
              </div>

              <div className="flex flex-col md:flex-row items-center gap-10 lg:gap-16 relative z-10">
                {/* Profile Image Section */}
                <div className="relative shrink-0">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="w-32 h-32 md:w-44 md:h-44 rounded-full overflow-hidden border-8 border-idara-navy/5 shadow-2xl"
                  >
                    <Image
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      width={176}
                      height={176}
                      className="object-cover"
                    />
                  </motion.div>
                  
                  {/* Floating Icon */}
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-2 -right-2 w-12 h-12 bg-idara-navy rounded-full flex items-center justify-center shadow-xl border-4 border-white"
                  >
                    <Quote className="w-5 h-5 text-idara-orange" />
                  </motion.div>
                </div>

                {/* Content Section */}
                <div className="flex-1 text-center md:text-left">
                  <div className="mb-8">
                    <p className="text-xl md:text-2xl lg:text-3xl text-idara-navy font-medium leading-relaxed italic">
                      "{testimonials[currentIndex].content}"
                    </p>
                  </div>

                  <div>
                    <h4 className="text-2xl font-bold text-idara-navy mb-1">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-idara-orange font-bold uppercase tracking-widest text-sm">
                      {testimonials[currentIndex].role}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-8 mt-12 px-4">
            {/* Previous Button */}
            <button
              onClick={prevTestimonial}
              className="group hidden sm:flex items-center gap-2 text-idara-navy font-bold hover:text-idara-orange transition-colors duration-300"
            >
              <div className="w-12 h-12 rounded-full border-2 border-idara-navy/20 flex items-center justify-center group-hover:border-idara-navy group-hover:bg-idara-navy group-hover:text-white transition-all duration-300">
                <ChevronLeft size={24} />
              </div>
              <span className="uppercase tracking-widest text-xs">Previous</span>
            </button>

            {/* Pagination Dots */}
            <div className="flex gap-3 items-center">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2.5 rounded-full transition-all duration-500 ${
                    index === currentIndex
                      ? "bg-idara-navy w-10 shadow-md shadow-idara-navy/20"
                      : "bg-idara-orange/30 w-2.5 hover:bg-idara-orange/60"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={nextTestimonial}
              className="group hidden sm:flex items-center gap-2 text-idara-navy font-bold hover:text-idara-orange transition-colors duration-300"
            >
              <span className="uppercase tracking-widest text-xs">Next Story</span>
              <div className="w-12 h-12 rounded-full border-2 border-idara-navy/20 flex items-center justify-center group-hover:border-idara-navy group-hover:bg-idara-navy group-hover:text-white transition-all duration-300">
                <ChevronRight size={24} />
              </div>
            </button>

            {/* Mobile Nav */}
            <div className="flex sm:hidden gap-6">
               <button
                onClick={prevTestimonial}
                className="w-14 h-14 rounded-full border-2 border-idara-navy/10 flex items-center justify-center active:scale-90 transition-all"
              >
                <ChevronLeft size={28} className="text-idara-navy" />
              </button>
              <button
                onClick={nextTestimonial}
                className="w-14 h-14 rounded-full bg-idara-navy flex items-center justify-center active:scale-90 transition-all shadow-lg"
              >
                <ChevronRight size={28} className="text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
