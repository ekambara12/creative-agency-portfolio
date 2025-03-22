"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const blogPosts = [
  {
    id: 1,
    title: "Understanding Ground Penetrating Radar Technology",
    excerpt:
      "Learn how GPR technology works and why it's essential for accurate utility locating in complex underground environments.",
    date: "March 15, 2025",
    readTime: "5 min read",
    category: "Technology",
    image: "/placeholder.svg?height=400&width=600",
    slug: "understanding-gpr-technology",
  },
  {
    id: 2,
    title: "5 Common Challenges in Utility Locating and How to Overcome Them",
    excerpt:
      "Explore the most frequent obstacles faced during utility locating projects and effective strategies to address them.",
    date: "March 8, 2025",
    readTime: "7 min read",
    category: "Best Practices",
    image: "/placeholder.svg?height=400&width=600",
    slug: "utility-locating-challenges",
  },
  {
    id: 3,
    title: "Environmental Monitoring: Regulatory Changes You Need to Know",
    excerpt:
      "Stay updated on the latest regulatory requirements for environmental monitoring and compliance reporting.",
    date: "February 28, 2025",
    readTime: "6 min read",
    category: "Regulations",
    image: "/placeholder.svg?height=400&width=600",
    slug: "environmental-monitoring-regulations",
  },
  {
    id: 4,
    title: "The Future of Site Security: AI and Remote Monitoring",
    excerpt:
      "Discover how artificial intelligence and remote monitoring technologies are transforming site security services.",
    date: "February 15, 2025",
    readTime: "8 min read",
    category: "Technology",
    image: "/placeholder.svg?height=400&width=600",
    slug: "future-site-security",
  },
  {
    id: 5,
    title: "Improving Safety Standards in Field Operations",
    excerpt:
      "Learn about the latest safety protocols and best practices for ensuring worker safety in field operations.",
    date: "February 5, 2025",
    readTime: "5 min read",
    category: "Safety",
    image: "/placeholder.svg?height=400&width=600",
    slug: "safety-standards-field-operations",
  },
  {
    id: 6,
    title: "Workforce Training: Building Skills for the Future",
    excerpt:
      "Explore effective training methodologies for developing a skilled workforce in the utility locating industry.",
    date: "January 22, 2025",
    readTime: "6 min read",
    category: "Training",
    image: "/placeholder.svg?height=400&width=600",
    slug: "workforce-training-skills",
  },
]

const categories = ["All", ...new Set(blogPosts.map((post) => post.category))]

export default function BlogSection() {
  const [filter, setFilter] = useState("All")

  const filteredPosts = filter === "All" ? blogPosts : blogPosts.filter((post) => post.category === filter)

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Technology":
        return "bg-primary text-white"
      case "Best Practices":
        return "bg-emerald-500 text-white"
      case "Regulations":
        return "bg-violet-500 text-white"
      case "Safety":
        return "bg-amber-500 text-white"
      case "Training":
        return "bg-indigo-500 text-white"
      default:
        return "bg-accent text-white"
    }
  }

  return (
    <section id="blog" className="white-section">
      <div className="w-full max-w-[95%] xl:max-w-[90%] 2xl:max-w-[85%] mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="section-title text-gradient-accent">Latest Insights</h2>
          <p className="section-subtitle">
            Expert articles and resources from our team of field service professionals.
          </p>
        </div>

        <div className="flex justify-center flex-wrap mb-10 md:mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-3 py-1.5 rounded-md text-sm transition-colors m-1 shadow-sm ${
                filter === category
                  ? "bg-accent text-white font-medium"
                  : "bg-white text-gray-800 border border-gray-300 hover:bg-gray-100"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <AnimatePresence>
            {filteredPosts.map((post) => (
              <motion.article
                key={post.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-md shadow-lg overflow-hidden border border-border/50 hover-lift"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image src={post.image || "/placeholder.svg"} alt={post.title} layout="fill" objectFit="cover" />
                  <div className="absolute top-4 left-4">
                    <span
                      className={`inline-block ${getCategoryColor(post.category)} text-xs px-2 py-1 rounded shadow-sm`}
                    >
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-5 md:p-6">
                  <div className="flex flex-wrap items-center text-xs text-muted-foreground mb-3">
                    <div className="flex items-center mr-4 mb-1 sm:mb-0">
                      <Calendar className="h-3.5 w-3.5 mr-1" />
                      {post.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-3.5 w-3.5 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  <h3 className="text-lg font-medium mb-3 line-clamp-2 text-black">{post.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                  >
                    Read Article
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="mt-10 md:mt-12 text-center">
          <Link href="/blog" className="accent-button inline-flex items-center">
            View All Articles
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

