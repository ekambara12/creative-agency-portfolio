import { Radar, Waves, MapPin } from "lucide-react"
import Link from "next/link"

export default function UtilityLocatingPage() {
  return (
    <div className="w-full max-w-[95%] xl:max-w-[90%] 2xl:max-w-[85%] mx-auto px-4 sm:px-6 py-16">
      <div className="mb-12">
        <Link href="/" className="text-primary hover:underline mb-4 inline-flex items-center">
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
          <div className="p-3 rounded-full bg-primary/20 mr-4">
            <MapPin className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-primary">Utility Line Locating</h1>
        </div>

        <p className="text-lg text-gray-700 max-w-3xl">
          Our utility locating services provide precise identification and marking of underground utilities using
          advanced technology to prevent damage during excavation and construction projects.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h2 className="text-2xl font-semibold mb-6">Why Choose Our Utility Locating Services?</h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <svg
                className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span>
                <strong className="text-gray-900">Prevent Costly Damages:</strong> Accurate utility locating prevents
                accidental strikes that can lead to service disruptions, project delays, and expensive repairs.
              </span>
            </li>
            <li className="flex items-start">
              <svg
                className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span>
                <strong className="text-gray-900">Ensure Safety:</strong> Protect workers and the public from hazards
                associated with utility strikes, such as electrical shocks or gas leaks.
              </span>
            </li>
            <li className="flex items-start">
              <svg
                className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span>
                <strong className="text-gray-900">Maintain Project Timelines:</strong> Avoid unexpected delays by
                identifying potential conflicts before excavation begins.
              </span>
            </li>
            <li className="flex items-start">
              <svg
                className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span>
                <strong className="text-gray-900">Regulatory Compliance:</strong> Meet legal requirements for utility
                identification before breaking ground on construction projects.
              </span>
            </li>
          </ul>
        </div>
        <div className="relative rounded-lg shadow-xl overflow-hidden">
          <img
            src="/images/construction-site.png"
            alt="Field technicians overseeing utility installation at a construction site"
            className="w-full h-[400px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-transparent mix-blend-multiply"></div>
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-gray-900/80 to-transparent">
            <h3 className="text-white text-lg font-medium">Expert Field Technicians</h3>
            <p className="text-gray-200 text-sm">Our team ensures precise utility identification and documentation</p>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 p-8 rounded-xl shadow-md mb-16">
        <h2 className="text-2xl font-semibold mb-6">Our Utility Locating Technologies</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center mb-4">
              <Radar className="w-8 h-8 text-primary mr-3" />
              <h3 className="text-xl font-medium">Ground Penetrating Radar (GPR)</h3>
            </div>
            <p className="text-gray-700">
              Our advanced GPR systems can detect utilities up to 15 feet deep, providing accurate imaging of
              underground infrastructure without excavation. GPR is effective for locating both metallic and
              non-metallic utilities.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center mb-4">
              <Waves className="w-8 h-8 text-primary mr-3" />
              <h3 className="text-xl font-medium">Electromagnetic Locating</h3>
            </div>
            <p className="text-gray-700">
              Precision electromagnetic equipment for locating metallic utilities with depth estimation and digital
              mapping capabilities. This technology is ideal for tracing specific utility lines with high accuracy.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center mb-4">
              <svg
                className="w-8 h-8 text-primary mr-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                ></path>
              </svg>
              <h3 className="text-xl font-medium">Vacuum Excavation</h3>
            </div>
            <p className="text-gray-700">
              Non-destructive excavation method that uses pressurized air or water to safely expose underground
              utilities for visual confirmation, reducing the risk of damage during the locating process.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center mb-4">
              <svg
                className="w-8 h-8 text-primary mr-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                ></path>
              </svg>
              <h3 className="text-xl font-medium">3D Utility Mapping</h3>
            </div>
            <p className="text-gray-700">
              Comprehensive 3D mapping of underground utilities with GIS integration for complete documentation and
              future reference. These detailed maps provide valuable information for project planning and future
              excavations.
            </p>
          </div>
        </div>
      </div>

      <div className="text-center mb-16">
        <h2 className="text-2xl font-semibold mb-6">Ready to Get Started?</h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
          Contact us today to discuss your utility locating needs and how our expert team can help ensure the safety and
          success of your project.
        </p>
        <Link
          href="#contact"
          className="bg-primary hover:bg-primary/90 text-white font-medium py-3 px-6 rounded-md shadow-md transition-colors"
        >
          Request a Quote
        </Link>
      </div>
    </div>
  )
}

