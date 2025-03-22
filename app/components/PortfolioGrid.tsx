"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

const projects = [
  {
    id: 1,
    title: "Pipeline Maintenance Project",
    description: "Comprehensive maintenance and inspection of 50-mile natural gas pipeline",
    imageUrl: "/placeholder.svg?height=600&width=800",
    category: "Maintenance",
  },
  {
    id: 2,
    title: "Utility Infrastructure Upgrade",
    description: "Major upgrade of electrical distribution infrastructure for municipal utility",
    imageUrl: "/placeholder.svg?height=800&width=600",
    category: "Infrastructure",
  },
  {
    id: 3,
    title: "Emergency Response Deployment",
    description: "Rapid deployment of emergency response team following severe weather event",
    imageUrl: "/placeholder.svg?height=600&width=800",
    category: "Emergency",
  },
  {
    id: 4,
    title: "Safety Program Implementation",
    description: "Development and implementation of comprehensive safety program for oil field operations",
    imageUrl: "/placeholder.svg?height=800&width=600",
    category: "Safety",
  },
  {
    id: 5,
    title: "Equipment Fleet Management",
    description: "Ongoing management and maintenance of 200+ vehicle fleet for energy company",
    imageUrl: "/placeholder.svg?height=600&width=800",
    category: "Management",
  },
  {
    id: 6,
    title: "Regulatory Compliance Audit",
    description: "Thorough audit and remediation of compliance issues for industrial facility",
    imageUrl: "/placeholder.svg?height=800&width=600",
    category: "Compliance",
  },
]

const categories = ["All", ...new Set(projects.map((project) => project.category))]

export default function PortfolioGrid() {
  const [filter, setFilter] = useState("All")

  const filteredProjects = filter === "All" ? projects : projects.filter((project) => project.category === filter)

  return (
    <section id="projects" className="bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="section-title gradient-text">Our Projects</h2>
          <p className="section-subtitle">A showcase of our field service excellence and project success stories.</p>
        </div>

        <div className="flex justify-center flex-wrap mb-10 md:mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-3 py-1.5 rounded-md text-sm transition-colors m-1 shadow-sm ${
                filter === category ? "bg-accent text-white" : "bg-white text-foreground hover:shadow-md"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-md shadow-lg overflow-hidden border border-border/50 hover-lift"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.imageUrl || "/placeholder.svg"}
                    alt={project.title}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="p-5 md:p-6">
                  <div className="text-xs font-medium text-accent mb-2 px-2 py-1 bg-accent/10 rounded-full inline-block">
                    {project.category}
                  </div>
                  <h3 className="text-lg font-medium text-foreground mb-3">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                  <a href="#contact" className="text-sm text-accent hover:underline inline-flex items-center">
                    View Case Study
                    <svg
                      className="w-3.5 h-3.5 ml-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}

