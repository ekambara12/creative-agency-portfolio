"use client"

import { useEffect } from "react"
import Hero from "./components/Hero"
import Services from "./components/Services"
import TechnologySection from "./components/TechnologySection"
import AboutUs from "./components/AboutUs"
import BlogSection from "./components/BlogSection"
import ContactForm from "./components/ContactForm"
import ScrollToTopButton from "./components/ScrollToTopButton"
import { setupScrollReveal } from "./utils/scrollReveal"

export default function Home() {
  useEffect(() => {
    const cleanup = setupScrollReveal()
    return cleanup
  }, [])

  return (
    <>
      <Hero />
      <Services />
      <TechnologySection />
      <AboutUs />
      <BlogSection />
      <ContactForm />
      <ScrollToTopButton />
    </>
  )
}

