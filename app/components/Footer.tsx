"use client"

import Image from "next/image"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function Footer() {
  const contactInfo = [
    {
      icon: <MapPin className="h-4 w-4 text-primary" />,
      details: "AB | BC | ON",
      link: null,
    },
    {
      icon: <Phone className="h-4 w-4 text-accent" />,
      details: "587 594 5521",
      link: "tel:5875945521",
    },
    {
      icon: <Mail className="h-4 w-4 text-accent-secondary" />,
      details: "info@oaksfieldservices.com",
      link: "mailto:info@oaksfieldservices.com",
    },
    {
      icon: <Clock className="h-4 w-4 text-accent-tertiary" />,
      details: "24/7 Operations. Quick Response Guaranteed",
      link: null,
    },
  ]

  return (
    <footer className="bg-white border-t border-border pt-8 md:pt-10 pb-6">
      <div className="w-full max-w-[95%] xl:max-w-[90%] 2xl:max-w-[85%] mx-auto px-4 sm:px-6">
        <div className="flex flex-wrap justify-between mb-8">
          <div className="w-full md:w-1/4 mb-6 md:mb-0 pr-4">
            <div className="mb-3">
              <div className="relative h-14 w-40">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Untitled-1%20%281%29%201-sEK5eAjV6dLZSdxH8g1s2pQIeRjZAZ.png"
                  alt="Oaks Field Services Logo"
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
            </div>
            <p className="text-gray-700 text-sm mb-4">
              Professional utility locating and field services with precision and reliability.
            </p>

            <div className="space-y-2 mb-4">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="flex-shrink-0 p-1.5 bg-gradient-to-br from-primary/10 to-primary/5 rounded-full">
                    {item.icon}
                  </div>
                  {item.link ? (
                    <a href={item.link} className="text-gray-700 text-xs hover:text-primary transition-colors">
                      {item.details}
                    </a>
                  ) : (
                    <p className="text-gray-700 text-xs">{item.details}</p>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="w-full md:w-1/5 mb-6 md:mb-0">
            <h3 className="text-sm font-medium text-gray-900 mb-3">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-sm text-gray-700 hover:text-primary transition-colors">
                  Utility Line Locating
                </a>
              </li>
              <li>
                <a href="#services" className="text-sm text-gray-700 hover:text-accent transition-colors">
                  Environmental Monitoring
                </a>
              </li>
              <li>
                <a href="#services" className="text-sm text-gray-700 hover:text-accent-secondary transition-colors">
                  Site Security Services
                </a>
              </li>
              <li>
                <a href="#services" className="text-sm text-gray-700 hover:text-accent-tertiary transition-colors">
                  Field Operations
                </a>
              </li>
              <li>
                <a href="#services" className="text-sm text-gray-700 hover:text-primary transition-colors">
                  Emergency Response
                </a>
              </li>
            </ul>
          </div>

          <div className="w-full md:w-1/5 mb-6 md:mb-0">
            <h3 className="text-sm font-medium text-gray-900 mb-3">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-sm text-gray-700 hover:text-accent-secondary transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#projects" className="text-sm text-gray-700 hover:text-accent-secondary transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#blog" className="text-sm text-gray-700 hover:text-accent transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-700 hover:text-accent transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#contact" className="text-sm text-gray-700 hover:text-accent-tertiary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="w-full md:w-1/5 mb-6 md:mb-0">
            <h3 className="text-sm font-medium text-gray-900 mb-3">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-gray-700 hover:text-primary transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-700 hover:text-primary transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-700 hover:text-primary transition-colors">
                  Cookie Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-700 hover:text-primary transition-colors">
                  Sitemap
                </a>
              </li>
            </ul>
            <div className="mt-6">
              <h3 className="text-sm font-medium text-gray-900 mb-3">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a href="#" className="text-gray-600 hover:text-accent transition-colors">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-gray-600 hover:text-accent-secondary transition-colors">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-5">
          <p className="text-center text-xs text-gray-700">
            &copy; {new Date().getFullYear()} Oaks Field Services. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

