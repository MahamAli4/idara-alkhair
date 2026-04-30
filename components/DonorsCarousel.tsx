"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Heart, Star, Award } from "lucide-react"
import { motion } from "framer-motion"

const donors = [
  {
    name: "Japan Foundation",
    logo: "/website-media/homepage/japan.png",
    contribution: "Education Sponsor",
    description: "Supporting 500+ students annually",
  },
  {
    name: "Carrier Pakistan",
    logo: "/website-media/homepage/Carrier-Pakistan.png",
    contribution: "Technology Partner",
    description: "Providing infrastructure and cooling solutions",
  },
  {
    name: "Cherity Giver",
    logo: "/website-media/homepage/Cherity-Giver.png",
    contribution: "Healthcare Partner",
    description: "Funding medical equipment and facilities",
  },
  {
    name: "Hansalim Foundation",
    logo: "/website-media/homepage/chines.png",
    contribution: "Food Program Supporter",
    description: "Collaborative food distribution initiatives",
  },
  {
    name: "Coop Foundation",
    logo: "/website-media/homepage/coop.png",
    contribution: "Development Partner",
    description: "Community development programs",
  },
  {
    name: "Empower Foundation",
    logo: "/website-media/homepage/Empower.png",
    contribution: "Skills Developer",
    description: "Vocational training and empowerment",
  },
  {
    name: "Gift Usa Foundation",
    logo: "/website-media/homepage/Gift-Usa.png",
    contribution: "Humanitarian Partner",
    description: "Joint welfare and relief activities",
  },
  {
    name: "Hitachi Cooling",
    logo: "/website-media/homepage/Hitachi-Cooling.jpg",
    contribution: "Technical Partner",
    description: "Supporting technical infrastructure",
  },
  {
    name: "JFSA Foundation",
    logo: "/website-media/homepage/JFSA.png",
    contribution: "Education Collaborator",
    description: "Shared educational initiatives",
  },
  {
    name: "LG Electronics",
    logo: "/website-media/homepage/LG-Electronics.png",
    contribution: "Corporate Partner",
    description: "Corporate social responsibility support",
  },
  {
    name: "Meezan Bank",
    logo: "/website-media/homepage/Meezan-bank.png",
    contribution: "Medical Partner",
    description: "Healthcare service collaboration",
  },
  {
    name: "Mitsubishi Electric",
    logo: "/website-media/homepage/Mitsubashi-Electric.png",
    contribution: "Strategic Partner",
    description: "Supporting large scale development",
  },
  {
    name: "One Ummah",
    logo: "/website-media/homepage/one-ummah.png",
    contribution: "Relief Partner",
    description: "Humanitarian and medical support",
  },
  {
    name: "Pearls Foundation",
    logo: "/website-media/homepage/Pearls.png",
    contribution: "Medical Partner",
    description: "Healthcare service collaboration",
  },
  {
    name: "Samsung HVAC",
    logo: "/website-media/homepage/Smsung-HVAC.jpg",
    contribution: "Technical Sponsor",
    description: "Supplying technical and cooling equipment",
  },
  {
    name: "SNHS Foundation",
    logo: "/website-media/homepage/SNHS.png",
    contribution: "Community Partner",
    description: "Regional development and welfare",
  },
  {
    name: "The Care",
    logo: "/website-media/homepage/the care.png",
    contribution: "Welfare Partner",
    description: "Supporting various humanitarian causes",
  },
  {
    name: "Thaakat Foundation",
    logo: "/website-media/homepage/Thaakat Foundation.png",
    contribution: "Empowerment Partner",
    description: "Fostering sustainable community growth",
  },
]

export default function DonorsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [itemsPerView, setItemsPerView] = useState(4)

  useEffect(() => {
    if (typeof window === "undefined") return
    
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(1)
      } else if (window.innerWidth < 768) {
        setItemsPerView(2)
      } else if (window.innerWidth < 1024) {
        setItemsPerView(3)
      } else {
        setItemsPerView(4)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + itemsPerView >= donors.length ? 0 : prevIndex + 1))
    }, 4000)
    return () => clearInterval(timer)
  }, [itemsPerView])

  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Heading Section */}
        <div className="relative mb-20 lg:mb-28">
          <div className="flex flex-col lg:flex-row items-center justify-center text-center">
            {/* Left Line */}
            <div className="hidden lg:block flex-1 h-px bg-linear-to-l from-idara-navy via-idara-orange to-transparent mr-8"></div>
            
            {/* Heading */}
            <div className="w-full lg:w-auto px-4">
              <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-idara-navy mb-4 tracking-tight">
                Generous <span className="text-idara-orange">Partners</span>
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto font-medium">
                We are grateful to our donors and partner organizations who make our mission possible through their generous support.
              </p>
            </div>

            {/* Right Line */}
            <div className="hidden lg:block flex-1 h-px bg-linear-to-r from-idara-navy via-idara-orange to-transparent ml-8"></div>
          </div>
        </div>

        <div className="relative">
          {/* Carousel Area */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
            >
              {donors.map((donor, index) => (
                <div key={index} className="shrink-0 px-5 mb-10" style={{ width: `${100 / itemsPerView}%` }}>
                  <motion.div
                    className="relative bg-white rounded-[32px] p-10 border border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 h-full group overflow-hidden"
                    whileHover={{ scale: 1.02 }}
                  >
                    {/* Background Decorative Gradient */}
                    <div className="absolute inset-0 bg-linear-to-br from-idara-navy/5 via-transparent to-idara-orange/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    {/* Corner Accents */}
                    <div className="absolute top-0 left-0 w-12 h-12 border-l-4 border-t-4 border-idara-navy/10 rounded-tl-[32px] group-hover:border-idara-orange/50 transition-colors duration-500"></div>
                    <div className="absolute bottom-0 right-0 w-12 h-12 border-r-4 border-b-4 border-idara-navy/10 rounded-br-[32px] group-hover:border-idara-navy/50 transition-colors duration-500"></div>

                    <div className="relative z-10 text-center flex flex-col h-full">
                      {/* Logo Container */}
                      <div className="mb-10 h-28 flex items-center justify-center">
                        <Image
                          src={donor.logo || "/placeholder.svg"}
                          alt={donor.name}
                          width={180}
                          height={90}
                          className="max-h-24 w-auto object-contain filter grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                        />
                      </div>

                      <h3 className="text-xl lg:text-2xl font-bold text-idara-navy mb-4 group-hover:text-idara-orange transition-colors duration-300">
                        {donor.name}
                      </h3>

                      <div className="mb-6">
                        <span className="inline-block bg-idara-navy text-white text-[10px] font-black uppercase tracking-[0.2em] px-6 py-2.5 rounded-full shadow-lg group-hover:bg-idara-orange transition-colors duration-500">
                          {donor.contribution}
                        </span>
                      </div>

                      <p className="text-gray-600 text-sm leading-relaxed mb-8 font-medium">
                        {donor.description}
                      </p>

                      {/* Stars Footer */}
                      <div className="flex justify-center space-x-1.5 mt-auto">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <motion.div
                            key={star}
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.1 * star }}
                          >
                            <Star className="w-4 h-4 text-idara-yellow fill-current" />
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Custom Navigation Indicators */}
        <div className="flex justify-center mt-12 space-x-3">
          {Array.from({ length: Math.ceil(donors.length / itemsPerView) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index * itemsPerView)}
              className={`h-3 rounded-full transition-all duration-500 ${
                Math.floor(currentIndex / itemsPerView) === index 
                ? "bg-idara-navy w-12 shadow-lg shadow-idara-navy/20" 
                : "bg-idara-orange/20 w-3 hover:bg-idara-orange/50"
              }`}
              aria-label={`Go to slide group ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
