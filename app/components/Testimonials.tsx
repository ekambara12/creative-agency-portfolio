"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "Oaks Field Services has been instrumental in maintaining our equipment fleet. Their preventative maintenance program has significantly reduced our downtime.",
    author: "Sarah Johnson",
    position: "Operations Director, EnergyCorp",
    image: "/placeholder.svg?height=100&width=100",
    colorClass: "bg-primary text-white",
  },
  {
    quote:
      "The emergency response team at Oaks Field Services saved us from a potentially catastrophic situation. Their quick action and expertise were invaluable.",
    author: "Michael Chen",
    position: "Site Manager, Industrial Solutions",
    image: "/placeholder.svg?height=100&width=100",
    colorClass: "bg-accent text-white",
  },
  {
    quote:
      "We've relied on Oaks Field Services for our compliance inspections for years. Their thorough approach and detailed reporting have kept us ahead of regulatory requirements.",
    author: "Emily Rodriguez",
    position: "Compliance Officer, Utility Systems Inc.",
    image: "/placeholder.svg?height=100&width=100",
    colorClass: "bg-primary text-white",
  },
]

export default function Testimonials() {
  return (
    <section className="accent-section">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="section-title gradient-text">Client Testimonials</h2>
          <p className="section-subtitle">Hear what our clients have to say about working with Oaks Field Services.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              className="bg-white rounded-md shadow-lg border border-border/50 relative pt-12 p-5 md:p-6 hover-lift"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div
                className={`absolute top-0 -translate-y-1/2 left-6 ${testimonial.colorClass} p-2 rounded-full shadow-md`}
              >
                <Quote className="h-5 w-5" />
              </div>
              <p className="text-muted-foreground mb-8 text-sm italic">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <div className="rounded-full mr-4 p-1 bg-primary/20">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.author}
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                </div>
                <div>
                  <p className="font-medium text-foreground text-sm">{testimonial.author}</p>
                  <p className="text-muted-foreground text-xs">{testimonial.position}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

