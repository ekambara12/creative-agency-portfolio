import Link from "next/link"
import { MapPin, LineChart, Shield, Truck, Zap, Users } from "lucide-react"

const services = [
  {
    icon: <MapPin className="w-12 h-12 text-primary" />,
    title: "Utility Line Locating",
    description:
      "Precise identification and marking of underground utilities using advanced GPR and electromagnetic technology to prevent damage during excavation and construction projects.",
    link: "/services/utility-locating",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: <LineChart className="w-12 h-12 text-emerald-500" />,
    title: "Environmental Monitoring",
    description:
      "Comprehensive environmental monitoring services including air quality, water quality, soil testing, and regulatory compliance reporting.",
    link: "/services/environmental-monitoring",
    color: "bg-emerald-500/10 text-emerald-500",
  },
  {
    icon: <Shield className="w-12 h-12 text-violet-500" />,
    title: "Site Security Services",
    description:
      "Professional security solutions for construction sites, industrial facilities, and critical infrastructure projects with 24/7 monitoring capabilities.",
    link: "/services/site-security",
    color: "bg-violet-500/10 text-violet-500",
  },
  {
    icon: <Truck className="w-12 h-12 text-accent" />,
    title: "Field Operations",
    description:
      "Expert field operations support for infrastructure projects with skilled technicians and specialized equipment for efficient project execution.",
    link: "/services/field-operations",
    color: "bg-accent/10 text-accent",
  },
  {
    icon: <Zap className="w-12 h-12 text-amber-500" />,
    title: "Emergency Response",
    description:
      "24/7 emergency response services to quickly address critical situations in the field with rapid deployment capabilities.",
    link: "/services/emergency-response",
    color: "bg-amber-500/10 text-amber-500",
  },
  {
    icon: <Users className="w-12 h-12 text-indigo-500" />,
    title: "Workforce Solutions",
    description:
      "Skilled personnel deployment and management for your field service operations with comprehensive training and certification.",
    link: "/services/workforce-solutions",
    color: "bg-indigo-500/10 text-indigo-500",
  },
]

export default function ServicesPage() {
  return (
    <div className="w-full max-w-[95%] xl:max-w-[90%] 2xl:max-w-[85%] mx-auto px-4 sm:px-6 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Our Services</h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Comprehensive field services tailored to meet your project requirements with precision and reliability.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <Link
            key={service.title}
            href={service.link}
            className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
          >
            <div className="p-6">
              <div className={`p-4 rounded-full inline-block mb-4 ${service.color}`}>{service.icon}</div>
              <h2 className={`text-xl font-semibold mb-3 ${service.color.split(" ")[1]}`}>{service.title}</h2>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <div className={`inline-flex items-center font-medium ${service.color.split(" ")[1]}`}>
                Learn more
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

