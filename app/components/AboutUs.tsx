"use client"

import { motion } from "framer-motion"
import { CheckCircle } from "lucide-react"

const benefits = [
  "Over 25 years of combined industry experience",
  "Certified technicians with specialized training",
  "Comprehensive insurance and liability coverage",
  "Commitment to safety and regulatory compliance",
  "Ongoing investment in advanced technology",
  "Nationwide service coverage",
]

export default function AboutUs() {
  return (
    <section id="about" className="white-section">
      <div className="w-full max-w-[95%] xl:max-w-[90%] 2xl:max-w-[85%] mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="section-title text-gradient-accent">About Us</h2>
          <p className="section-subtitle">A trusted provider delivering excellence in field services.</p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full space-y-6 p-6 rounded-lg bg-gradient-to-r from-accent-secondary/10 to-accent-secondary/5 shadow-md"
        >
          <h3 className="text-2xl font-medium text-black">Excellence in Field Services</h3>
          <p className="text-black">
            At Oaks Field Services, our team of skilled technicians provides reliable, efficient, and safe services for
            your most challenging projects. We leverage extensive resources and expertise to deliver exceptional field
            service solutions.
          </p>
          <p className="text-black">
            We pride ourselves on our commitment to quality, safety, and customer satisfaction. Our comprehensive
            approach ensures that every project is completed to the highest standards, on time and within budget.
          </p>

          <div className="pt-4">
            <h4 className="text-lg font-medium mb-4 text-black">Why Choose Us</h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4">
              {benefits.map((benefit, index) => (
                <motion.li
                  key={index}
                  className="flex items-start gap-2"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                >
                  <CheckCircle className="h-5 w-5 text-accent-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">{benefit}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

