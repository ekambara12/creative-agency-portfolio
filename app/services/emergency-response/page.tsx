import { Zap, Truck, Shield, Users } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function EmergencyResponsePage() {
  return (
    <div className="w-full max-w-[95%] xl:max-w-[90%] 2xl:max-w-[85%] mx-auto px-4 sm:px-6 py-16">
      <div className="mb-12">
        <Link href="/" className="text-amber-500 hover:underline mb-4 inline-flex items-center">
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
          <div className="p-3 rounded-full bg-amber-500/20 mr-4">
            <Zap className="w-8 h-8 text-amber-500" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-amber-500">Emergency Response</h1>
        </div>

        <p className="text-lg text-gray-700 max-w-3xl">
          Our emergency response services provide rapid deployment and expert handling of critical situations to
          minimize damage, ensure safety, and reduce downtime for your operations.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h2 className="text-2xl font-semibold mb-6">When Every Minute Counts</h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <svg
                className="w-5 h-5 text-amber-500 mt-1 mr-3 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span>
                <strong className="text-gray-900">Immediate Response:</strong> Our teams are available 24/7 with an
                average response time of under 30 minutes to critical incidents.
              </span>
            </li>
            <li className="flex items-start">
              <svg
                className="w-5 h-5 text-amber-500 mt-1 mr-3 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span>
                <strong className="text-gray-900">Specialized Equipment:</strong> We maintain a comprehensive inventory
                of emergency response equipment ready for immediate deployment.
              </span>
            </li>
            <li className="flex items-start">
              <svg
                className="w-5 h-5 text-amber-500 mt-1 mr-3 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span>
                <strong className="text-gray-900">Trained Personnel:</strong> Our emergency responders are certified in
                first aid, hazardous materials handling, and crisis management.
              </span>
            </li>
            <li className="flex items-start">
              <svg
                className="w-5 h-5 text-amber-500 mt-1 mr-3 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span>
                <strong className="text-gray-900">Comprehensive Planning:</strong> We develop customized emergency
                response plans tailored to your specific operations and potential risks.
              </span>
            </li>
          </ul>
        </div>
        <div className="relative rounded-lg shadow-xl overflow-hidden">
          <Image
            src="/images/emergency-equipment.png"
            alt="Emergency response equipment including AED and bleeding control kit"
            width={600}
            height={450}
            className="w-full h-[400px] object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/30 to-transparent mix-blend-multiply"></div>
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-gray-900/80 to-transparent">
            <h3 className="text-white text-lg font-medium">Life-Saving Equipment</h3>
            <p className="text-gray-200 text-sm">
              Our emergency response teams are equipped with state-of-the-art tools and medical equipment
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 p-8 rounded-xl shadow-md mb-16">
        <h2 className="text-2xl font-semibold mb-6">Our Emergency Response Services</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center mb-4">
              <Zap className="w-8 h-8 text-amber-500 mr-3" />
              <h3 className="text-xl font-medium">Rapid Response Teams</h3>
            </div>
            <p className="text-gray-700">
              24/7 availability of specialized emergency teams ready to deploy within minutes of notification to address
              critical situations. Our teams are strategically positioned to ensure quick response times across all
              service areas.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center mb-4">
              <Truck className="w-8 h-8 text-orange-500 mr-3" />
              <h3 className="text-xl font-medium">Mobile Command Centers</h3>
            </div>
            <p className="text-gray-700">
              Fully equipped mobile units with advanced communication systems to coordinate emergency response
              operations from any location. These units serve as on-site headquarters during emergency situations.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center mb-4">
              <Shield className="w-8 h-8 text-yellow-500 mr-3" />
              <h3 className="text-xl font-medium">Damage Assessment</h3>
            </div>
            <p className="text-gray-700">
              Expert evaluation of infrastructure damage with detailed documentation to support insurance claims and
              recovery planning. Our assessment reports provide comprehensive information for efficient recovery
              operations.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center mb-4">
              <Users className="w-8 h-8 text-red-500 mr-3" />
              <h3 className="text-xl font-medium">Crisis Management</h3>
            </div>
            <p className="text-gray-700">
              Comprehensive crisis management services including stakeholder communication and regulatory liaison to
              minimize business impact. We help you navigate the complex aftermath of emergency situations.
            </p>
          </div>
        </div>
      </div>

      <div className="text-center mb-16">
        <h2 className="text-2xl font-semibold mb-6">Prepare for the Unexpected</h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
          Contact us today to discuss your emergency response needs and how our expert team can help protect your
          personnel, assets, and operations during critical situations.
        </p>
        <Link
          href="#contact"
          className="bg-amber-500 hover:bg-amber-600 text-white font-medium py-3 px-6 rounded-md shadow-md transition-colors"
        >
          Request a Consultation
        </Link>
      </div>
    </div>
  )
}

