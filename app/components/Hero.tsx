"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { useEffect, useState } from "react"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  return (
    <div className="relative overflow-hidden min-h-[68vh]">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/construction-site.png"
          alt="Construction site with utility installation"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-gray-900/60 to-gray-900/30"></div>
      </div>

      <div className="relative z-10 pt-44 pb-40 sm:pt-52 sm:pb-48">
        <div className="mx-auto w-full max-w-[95%] xl:max-w-[90%] 2xl:max-w-[85%] px-4 sm:px-6 lg:flex lg:items-center lg:gap-x-16 lg:px-8">
          <motion.div
            className="mx-auto max-w-3xl lg:mx-0 lg:max-w-2xl"
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={containerVariants}
          >
            <motion.h1
              className="mt-4 text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight gradient-text max-w-3xl"
              variants={itemVariants}
            >
              Precision Utility Locating <br className="hidden sm:block" />
              <span className="mt-2 block">& Professional Field Services</span>
            </motion.h1>
            <motion.p className="mt-6 text-base md:text-lg leading-7 text-gray-200" variants={itemVariants}>
              Providing advanced utility locating, environmental monitoring, and site security services with
              industry-leading technology and expertise.
            </motion.p>
            <motion.div className="mt-10 md:mt-12 flex flex-wrap items-center gap-4 md:gap-x-6" variants={itemVariants}>
              <a
                href="#services"
                className="group inline-flex items-center gap-x-2 text-sm font-medium leading-6 text-white hover:text-accent transition-colors"
              >
                Explore Our Services
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a
                href="#contact"
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2.5 rounded-md font-medium transition-all duration-300 ease-in-out flex items-center gap-x-2 shadow-md hover:shadow-lg"
              >
                Request a Quote
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            className="hidden lg:block lg:flex-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            {/* This div is intentionally empty to create space for the background image to be visible */}
          </motion.div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-10"></div>
    </div>
  )
}

