"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { Radar, Waves, Radio, Map, Shield, Users, Truck, Zap, ChevronLeft, ChevronRight } from "lucide-react"

// Service sections data
const serviceSections = [
  {
    id: "technology",
    title: "Advanced Technology",
    subtitle: "We utilize industry-leading equipment and methodologies to deliver accurate utility locating results.",
    image: "/images/construction-site.png",
    imageAlt: "Advanced GPR technology in use",
    items: [
      {
        icon: <Radar className="w-10 h-10 md:w-12 md:h-12 text-primary" />,
        title: "Ground Penetrating Radar",
        description:
          "Our advanced GPR systems can detect utilities up to 15 feet deep, providing accurate imaging of underground infrastructure without excavation.",
        colorClass: "text-primary",
      },
      {
        icon: <Waves className="w-10 h-10 md:w-12 md:h-12 text-accent" />,
        title: "Electromagnetic Locating",
        description:
          "Precision electromagnetic equipment for locating metallic utilities with depth estimation and digital mapping capabilities.",
        colorClass: "text-accent",
      },
      {
        icon: <Radio className="w-10 h-10 md:w-12 md:h-12 text-accent-secondary" />,
        title: "Radio Detection",
        description:
          "State-of-the-art radio detection technology for tracing active power lines and telecommunications infrastructure.",
        colorClass: "text-accent-secondary",
      },
      {
        icon: <Map className="w-10 h-10 md:w-12 md:h-12 text-accent-tertiary" />,
        title: "3D Utility Mapping",
        description:
          "Comprehensive 3D mapping of underground utilities with GIS integration for complete documentation and future reference.",
        colorClass: "text-accent-tertiary",
      },
    ],
  },
  {
    id: "security",
    title: "Site Security Services",
    subtitle: "Comprehensive security solutions to protect your assets and ensure site safety.",
    image: "/images/security-event.png",
    imageAlt: "Security personnel monitoring an event site",
    items: [
      {
        icon: <Shield className="w-10 h-10 md:w-12 md:h-12 text-violet-500" />,
        title: "24/7 Surveillance",
        description:
          "Round-the-clock monitoring with advanced camera systems and real-time alerts to prevent unauthorized access and theft.",
        colorClass: "text-violet-500",
      },
      {
        icon: <Users className="w-10 h-10 md:w-12 md:h-12 text-indigo-500" />,
        title: "Security Personnel",
        description:
          "Trained security professionals with industry-specific knowledge to provide on-site protection and rapid response.",
        colorClass: "text-indigo-500",
      },
      {
        icon: <Radar className="w-10 h-10 md:w-12 md:h-12 text-purple-500" />,
        title: "Perimeter Protection",
        description:
          "Advanced sensor technology and barrier systems to secure site boundaries and detect potential intrusions.",
        colorClass: "text-purple-500",
      },
      {
        icon: <Radio className="w-10 h-10 md:w-12 md:h-12 text-fuchsia-500" />,
        title: "Remote Monitoring",
        description:
          "Cloud-based security solutions allowing real-time monitoring and management from any location via secure platforms.",
        colorClass: "text-fuchsia-500",
      },
    ],
  },
  {
    id: "environmental",
    title: "Environmental Monitoring",
    subtitle: "Comprehensive environmental assessment and monitoring services to ensure regulatory compliance.",
    image: "/images/environmental-testing.png",
    imageAlt: "Environmental specialist testing water sample in protective equipment",
    items: [
      {
        icon: <Waves className="w-10 h-10 md:w-12 md:h-12 text-emerald-500" />,
        title: "Water Quality Testing",
        description:
          "Comprehensive water quality analysis including pH levels, contaminants, and dissolved oxygen to ensure compliance with environmental regulations.",
        colorClass: "text-emerald-500",
      },
      {
        icon: <Zap className="w-10 h-10 md:w-12 md:h-12 text-green-500" />,
        title: "Air Quality Monitoring",
        description:
          "Continuous monitoring of particulate matter, VOCs, and other airborne contaminants to maintain safe working conditions and regulatory compliance.",
        colorClass: "text-green-500",
      },
      {
        icon: <Map className="w-10 h-10 md:w-12 md:h-12 text-teal-500" />,
        title: "Soil Contamination Analysis",
        description:
          "Detailed soil testing and analysis to identify potential contaminants and develop effective remediation strategies.",
        colorClass: "text-teal-500",
      },
      {
        icon: <Shield className="w-10 h-10 md:w-12 md:h-12 text-lime-500" />,
        title: "Compliance Reporting",
        description:
          "Comprehensive documentation and reporting services to ensure all environmental monitoring data meets regulatory requirements.",
        colorClass: "text-lime-500",
      },
    ],
  },
  {
    id: "emergency",
    title: "Emergency Response",
    subtitle: "Rapid deployment and expert handling of critical situations to minimize damage and downtime.",
    image: "/images/emergency-equipment.png",
    imageAlt: "Emergency response equipment including AED and bleeding control kit",
    items: [
      {
        icon: <Zap className="w-10 h-10 md:w-12 md:h-12 text-amber-500" />,
        title: "Rapid Response Teams",
        description:
          "24/7 availability of specialized emergency teams ready to deploy within minutes of notification to address critical situations.",
        colorClass: "text-amber-500",
      },
      {
        icon: <Truck className="w-10 h-10 md:w-12 md:h-12 text-orange-500" />,
        title: "Mobile Command Centers",
        description:
          "Fully equipped mobile units with advanced communication systems to coordinate emergency response operations from any location.",
        colorClass: "text-orange-500",
      },
      {
        icon: <Shield className="w-10 h-10 md:w-12 md:h-12 text-yellow-500" />,
        title: "Damage Assessment",
        description:
          "Expert evaluation of infrastructure damage with detailed documentation to support insurance claims and recovery planning.",
        colorClass: "text-yellow-500",
      },
      {
        icon: <Users className="w-10 h-10 md:w-12 md:h-12 text-red-500" />,
        title: "Crisis Management",
        description:
          "Comprehensive crisis management services including stakeholder communication and regulatory liaison to minimize business impact.",
        colorClass: "text-red-500",
      },
    ],
  },
]

export default function TechnologySection() {
  const [currentSection, setCurrentSection] = useState(0)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)

  const nextSection = () => {
    setCurrentSection((prev) => (prev + 1) % serviceSections.length)
  }

  const prevSection = () => {
    setCurrentSection((prev) => (prev - 1 + serviceSections.length) % serviceSections.length)
  }

  // Handle touch events for mobile swiping
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      // Swipe left
      nextSection()
    }

    if (touchStart - touchEnd < -50) {
      // Swipe right
      prevSection()
    }
  }

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      nextSection()
    }, 8000) // Change section every 8 seconds

    return () => clearInterval(interval)
  }, [])

  const currentSectionData = serviceSections[currentSection]

  return (
    <section
      className="colored-section relative overflow-hidden"
      ref={carouselRef}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="w-full max-w-[95%] xl:max-w-[90%] 2xl:max-w-[85%] mx-auto px-4 sm:px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="section-title gradient-text">{currentSectionData.title}</h2>
          <p className="section-subtitle">{currentSectionData.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
            key={`image-${currentSectionData.id}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="order-2 md:order-1"
          >
            <img
              src={currentSectionData.image || "/placeholder.svg"}
              alt={currentSectionData.imageAlt}
              className={`rounded-md shadow-xl w-full h-auto object-cover aspect-[4/3] ${
                currentSectionData.id === "emergency" ? "object-[center_top]" : "object-[center_80%]"
              }`}
            />
          </motion.div>

          <div className="space-y-6 md:space-y-8 order-1 md:order-2">
            {currentSectionData.items.map((item, index) => (
              <motion.div
                key={`${currentSectionData.id}-item-${index}`}
                className="flex gap-4 p-4 rounded-lg bg-white shadow-md"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex-shrink-0 mt-1 p-2 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full">
                  {item.icon}
                </div>
                <div>
                  <h3 className={`text-lg font-medium mb-2 ${item.colorClass}`}>{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Carousel Navigation */}
        <div className="flex justify-center mt-12 space-x-2">
          {serviceSections.map((section, index) => (
            <button
              key={section.id}
              onClick={() => setCurrentSection(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSection === index ? "bg-primary w-6" : "bg-gray-300"
              }`}
              aria-label={`Go to ${section.title} section`}
            />
          ))}
        </div>

        {/* Arrow Navigation */}
        <button
          onClick={prevSection}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg text-gray-800 hover:bg-white transition-colors z-10"
          aria-label="Previous section"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSection}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg text-gray-800 hover:bg-white transition-colors z-10"
          aria-label="Next section"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </section>
  )
}

