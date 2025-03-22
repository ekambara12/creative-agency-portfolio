import { LineChart, Waves, Shield } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function EnvironmentalMonitoringPage() {
  return (
    <div className="w-full max-w-[95%] xl:max-w-[90%] 2xl:max-w-[85%] mx-auto px-4 sm:px-6 py-16">
      <div className="mb-12">
        <Link href="/" className="text-emerald-500 hover:underline mb-4 inline-flex items-center">
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
          <div className="p-3 rounded-full bg-emerald-500/20 mr-4">
            <LineChart className="w-8 h-8 text-emerald-500" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-emerald-500">Environmental Monitoring</h1>
        </div>

        <p className="text-lg text-gray-700 max-w-3xl">
          Our comprehensive environmental monitoring services help you maintain regulatory compliance while protecting
          the environment and ensuring the safety of your operations.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h2 className="text-2xl font-semibold mb-6">Why Environmental Monitoring Matters</h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <svg
                className="w-5 h-5 text-emerald-500 mt-1 mr-3 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span>
                <strong className="text-gray-900">Regulatory Compliance:</strong> Meet federal, state, and local
                environmental regulations to avoid costly fines and penalties.
              </span>
            </li>
            <li className="flex items-start">
              <svg
                className="w-5 h-5 text-emerald-500 mt-1 mr-3 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span>
                <strong className="text-gray-900">Environmental Protection:</strong> Identify and mitigate potential
                environmental impacts before they become significant issues.
              </span>
            </li>
            <li className="flex items-start">
              <svg
                className="w-5 h-5 text-emerald-500 mt-1 mr-3 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span>
                <strong className="text-gray-900">Public Health & Safety:</strong> Ensure that your operations don't
                pose risks to workers, nearby communities, or ecosystems.
              </span>
            </li>
            <li className="flex items-start">
              <svg
                className="w-5 h-5 text-emerald-500 mt-1 mr-3 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span>
                <strong className="text-gray-900">Corporate Responsibility:</strong> Demonstrate your commitment to
                environmental stewardship and sustainable business practices.
              </span>
            </li>
          </ul>
        </div>
        <div className="relative rounded-lg shadow-xl overflow-hidden">
          <Image
            src="/images/environmental-testing.png"
            alt="Environmental specialist testing water sample in protective equipment"
            width={600}
            height={450}
            className="w-full h-auto object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/30 to-transparent mix-blend-multiply"></div>
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-gray-900/80 to-transparent">
            <h3 className="text-white text-lg font-medium">Professional Environmental Testing</h3>
            <p className="text-gray-200 text-sm">Our specialists use advanced equipment to ensure accurate analysis</p>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 p-8 rounded-xl shadow-md mb-16">
        <h2 className="text-2xl font-semibold mb-6">Our Environmental Monitoring Services</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center mb-4">
              <Waves className="w-8 h-8 text-emerald-500 mr-3" />
              <h3 className="text-xl font-medium">Water Quality Testing</h3>
            </div>
            <p className="text-gray-700">
              Comprehensive water quality analysis including pH levels, contaminants, dissolved oxygen, turbidity, and
              biological indicators to ensure compliance with environmental regulations and protect water resources.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center mb-4">
              <svg
                className="w-8 h-8 text-emerald-500 mr-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                ></path>
              </svg>
              <h3 className="text-xl font-medium">Air Quality Monitoring</h3>
            </div>
            <p className="text-gray-700">
              Continuous monitoring of particulate matter, VOCs, and other airborne contaminants to maintain safe
              working conditions and regulatory compliance. We provide both short-term and long-term monitoring
              solutions.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center mb-4">
              <svg
                className="w-8 h-8 text-emerald-500 mr-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                ></path>
              </svg>
              <h3 className="text-xl font-medium">Soil Contamination Analysis</h3>
            </div>
            <p className="text-gray-700">
              Detailed soil testing and analysis to identify potential contaminants and develop effective remediation
              strategies. Our services include sampling, laboratory analysis, and comprehensive reporting.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center mb-4">
              <Shield className="w-8 h-8 text-emerald-500 mr-3" />
              <h3 className="text-xl font-medium">Compliance Reporting</h3>
            </div>
            <p className="text-gray-700">
              Comprehensive documentation and reporting services to ensure all environmental monitoring data meets
              regulatory requirements. We help you navigate complex regulations and maintain proper records.
            </p>
          </div>
        </div>
      </div>

      <div className="text-center mb-16">
        <h2 className="text-2xl font-semibold mb-6">Ready to Ensure Environmental Compliance?</h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
          Contact us today to discuss your environmental monitoring needs and how our expert team can help protect both
          your business and the environment.
        </p>
        <Link
          href="#contact"
          className="bg-emerald-500 hover:bg-emerald-600 text-white font-medium py-3 px-6 rounded-md shadow-md transition-colors"
        >
          Request a Quote
        </Link>
      </div>
    </div>
  )
}

