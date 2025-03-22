"use client"

import { motion, useAnimation } from "framer-motion"
import { MapPin, LineChart, Shield, Truck, Zap, Users } from "lucide-react"
import { useEffect, useRef } from "react"
import Link from "next/link"

const services = [
  {
    icon: <MapPin className="w-8 h-8 mb-4 text-primary" />,
    title: "Utility Line Locating",
    description:
      "Precise identification and marking of underground utilities using advanced GPR and electromagnetic technology to prevent damage during excavation and construction projects.",
    features: ["Ground Penetrating Radar (GPR)", "Electromagnetic Locating", "Vacuum Excavation", "3D Utility Mapping"],
    colorClass: "text-primary bg-primary/20",
    link: "/services/utility-locating",
  },
  {
    icon: <LineChart className="w-8 h-8 mb-4 text-emerald-500" />,
    title: "Environmental Monitoring",
    description:
      "Comprehensive environmental monitoring services including air quality, water quality, soil testing, and regulatory compliance reporting.",
    features: [
      "Air Quality Assessment",
      "Water Quality Testing",
      "Soil Contamination Analysis",
      "Environmental Compliance",
    ],
    colorClass: "text-emerald-500 bg-emerald-500/20",
    link: "/services/environmental-monitoring",
  },
  {
    icon: <Shield className="w-8 h-8 mb-4 text-violet-500" />,
    title: "Site Security Services",
    description:
      "Professional security solutions for construction sites, industrial facilities, and critical infrastructure projects with 24/7 monitoring capabilities.",
    features: ["Site Surveillance", "Access Control Systems", "Security Personnel", "Remote Monitoring"],
    colorClass: "text-violet-500 bg-violet-500/20",
    link: "/services/site-security",
  },
  {
    icon: <Truck className="w-8 h-8 mb-4 text-accent" />,
    title: "Field Operations",
    description:
      "Expert field operations support for infrastructure projects with skilled technicians and specialized equipment for efficient project execution.",
    features: ["Project Management", "Field Technician Services", "Equipment Deployment", "Quality Control"],
    colorClass: "text-accent bg-accent/20",
    link: "/services/field-operations",
  },
  {
    icon: <Zap className="w-8 h-8 mb-4 text-amber-500" />,
    title: "Emergency Response",
    description:
      "24/7 emergency response services to quickly address critical situations in the field with rapid deployment capabilities.",
    features: ["Rapid Response Teams", "Damage Assessment", "Emergency Repairs", "Incident Documentation"],
    colorClass: "text-amber-500 bg-amber-500/20",
    link: "/services/emergency-response",
  },
  {
    icon: <Users className="w-8 h-8 mb-4 text-indigo-500" />,
    title: "Workforce Solutions",
    description:
      "Skilled personnel deployment and management for your field service operations with comprehensive training and certification.",
    features: ["Skilled Labor Staffing", "Training & Certification", "Workforce Management", "Safety Compliance"],
    colorClass: "text-indigo-500 bg-indigo-500/20",
    link: "/services/workforce-solutions",
  },
]

export default function Services() {
  const controls = useAnimation()
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start("visible")
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [controls])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  }

  return (
    <section id="services" className="white-section fluid-spacing" ref={sectionRef}>
      <div className="w-full max-w-[95%] xl:max-w-[90%] 2xl:max-w-[85%] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2
            className="section-title text-gradient-accent"
            initial={{ opacity: 0, y: -20 }}
            animate={controls}
            variants={{
              hidden: { opacity: 0, y: -20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
          >
            Our Services
          </motion.h2>
          <motion.p
            className="section-subtitle"
            initial={{ opacity: 0 }}
            animate={controls}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { duration: 0.5, delay: 0.2 } },
            }}
          >
            Comprehensive field services tailored to meet your project requirements with precision and reliability.
          </motion.p>
        </div>
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="card-white hover-lift relative group"
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              <div
                className={`p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4 ${service.colorClass} transform transition-transform group-hover:scale-110 duration-300`}
              >
                {service.icon}
              </div>
              <h3 className={`text-xl font-medium mb-3 ${service.colorClass.split(" ")[0]}`}>{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-5 font-medium">{service.description}</p>
              <ul className="space-y-3 p-1 mb-8">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-sm text-black">
                    <svg
                      className={`w-4 h-4 mr-2 ${service.colorClass.split(" ")[0]} flex-shrink-0`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-black font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                href={service.link}
                className={`absolute bottom-6 right-6 p-2 rounded-full ${service.colorClass} opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0`}
              >
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

