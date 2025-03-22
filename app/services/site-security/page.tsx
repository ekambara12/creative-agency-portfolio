"use client"

import { Shield, Users, Radio } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export default function SiteSecurityPage() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.5])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95])
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 50])

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
    <div className="min-h-screen">
      <div className="relative h-[50vh] md:h-[60vh] overflow-hidden" ref={ref}>
        <motion.div className="absolute inset-0 z-0" style={{ opacity, scale, y }}>
          <Image
            src="/images/security-fog.png"
            alt="Security personnel patrolling in foggy conditions"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-violet-900/30 mix-blend-multiply" />
        </motion.div>
        <div className="absolute inset-0 flex flex-col justify-end z-10 p-8 md:p-16 bg-gradient-to-t from-black/70 to-transparent">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Link href="/" className="text-white hover:text-violet-300 mb-4 inline-flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2"
              >
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              Back to Home
            </Link>

            <div className="flex items-center mb-6">
              <div className="p-3 rounded-full bg-violet-500/20 mr-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white">Site Security Services</h1>
            </div>

            <p className="text-lg md:text-xl text-gray-200 max-w-3xl">
              Our professional security solutions protect construction sites, industrial facilities, and critical
              infrastructure projects with comprehensive monitoring and rapid response capabilities.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="w-full max-w-[95%] xl:max-w-[90%] 2xl:max-w-[85%] mx-auto px-4 sm:px-6 py-16">
        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center mb-16"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <h2 className="text-2xl font-semibold mb-6">Why Site Security is Essential</h2>
            <ul className="space-y-4">
              <motion.li
                className="flex items-start"
                variants={itemVariants}
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <svg
                  className="w-5 h-5 text-violet-500 mt-1 mr-3 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>
                  <strong className="text-gray-900">Prevent Theft and Vandalism:</strong> Protect valuable equipment,
                  materials, and infrastructure from theft, vandalism, and unauthorized access.
                </span>
              </motion.li>
              <motion.li
                className="flex items-start"
                variants={itemVariants}
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <svg
                  className="w-5 h-5 text-violet-500 mt-1 mr-3 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>
                  <strong className="text-gray-900">Ensure Worker Safety:</strong> Create a secure environment for
                  workers and visitors, reducing safety risks and liability concerns.
                </span>
              </motion.li>
              <motion.li
                className="flex items-start"
                variants={itemVariants}
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <svg
                  className="w-5 h-5 text-violet-500 mt-1 mr-3 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>
                  <strong className="text-gray-900">Avoid Project Delays:</strong> Security incidents can cause
                  significant project delays and cost overruns. Proactive security prevents these disruptions.
                </span>
              </motion.li>
              <motion.li
                className="flex items-start"
                variants={itemVariants}
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <svg
                  className="w-5 h-5 text-violet-500 mt-1 mr-3 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>
                  <strong className="text-gray-900">Insurance Requirements:</strong> Many insurance policies require
                  adequate security measures to maintain coverage for construction and industrial sites.
                </span>
              </motion.li>
            </ul>
          </motion.div>
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="relative"
          >
            <div className="absolute -top-4 -left-4 h-24 w-24 bg-violet-500/20 rounded-full filter blur-xl mix-blend-multiply animate-pulse-slow"></div>
            <div className="absolute -bottom-4 -right-4 h-24 w-24 bg-violet-500/20 rounded-full filter blur-xl mix-blend-multiply animate-float"></div>
            <div className="relative overflow-hidden rounded-lg shadow-xl">
              <Image
                src="/images/security-fog.png"
                alt="Security personnel patrolling in foggy conditions"
                width={600}
                height={800}
                className="w-full object-cover relative z-10"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-violet-900/80 to-transparent">
                <h3 className="text-white text-lg font-medium">Vigilance in All Conditions</h3>
                <p className="text-gray-200 text-sm">
                  Our security personnel maintain site protection in any environment
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="bg-gray-50 p-8 rounded-xl shadow-md mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="text-2xl font-semibold mb-6">Our Site Security Services</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center mb-4">
                <svg
                  className="w-8 h-8 text-violet-500 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                  ></path>
                </svg>
                <h3 className="text-xl font-medium">24/7 Surveillance</h3>
              </div>
              <p className="text-gray-700">
                Round-the-clock monitoring with advanced camera systems and real-time alerts to prevent unauthorized
                access and theft. Our surveillance solutions include motion detection, night vision, and remote viewing
                capabilities.
              </p>
            </motion.div>
            <motion.div
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center mb-4">
                <Users className="w-8 h-8 text-violet-500 mr-3" />
                <h3 className="text-xl font-medium">Security Personnel</h3>
              </div>
              <p className="text-gray-700">
                Trained security professionals with industry-specific knowledge to provide on-site protection and rapid
                response. Our guards are licensed, insured, and trained in construction and industrial site security.
              </p>
            </motion.div>
            <motion.div
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center mb-4">
                <svg
                  className="w-8 h-8 text-violet-500 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  ></path>
                </svg>
                <h3 className="text-xl font-medium">Perimeter Protection</h3>
              </div>
              <p className="text-gray-700">
                Advanced sensor technology and barrier systems to secure site boundaries and detect potential
                intrusions. Our solutions include temporary fencing, access control gates, and perimeter alarm systems.
              </p>
            </motion.div>
            <motion.div
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center mb-4">
                <Radio className="w-8 h-8 text-violet-500 mr-3" />
                <h3 className="text-xl font-medium">Remote Monitoring</h3>
              </div>
              <p className="text-gray-700">
                Cloud-based security solutions allowing real-time monitoring and management from any location via secure
                platforms. Receive instant alerts and view live footage from your smartphone, tablet, or computer.
              </p>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="text-2xl font-semibold mb-6">Ready to Secure Your Site?</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
            Contact us today to discuss your site security needs and how our comprehensive security solutions can
            protect your assets and ensure the safety of your operations.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="#contact"
              className="bg-violet-500 hover:bg-violet-600 text-white font-medium py-3 px-6 rounded-md shadow-md transition-colors relative overflow-hidden group"
            >
              <span className="relative z-10">Request a Quote</span>
              <span className="absolute inset-0 bg-white/20 transform translate-y-32 group-hover:translate-y-0 transition-transform duration-300"></span>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

