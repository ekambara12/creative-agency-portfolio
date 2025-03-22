"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phoneNumber: z.string().optional(),
  company: z.string().optional(),
  serviceType: z.string().optional(),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
})

const contactInfo = [
  {
    icon: <MapPin className="h-5 w-5 text-primary" />,
    title: "Our Location",
    details: "AB | BC | ON",
  },
  {
    icon: <Phone className="h-5 w-5 text-accent" />,
    title: "Phone Number",
    details: "587 594 5521",
  },
  {
    icon: <Mail className="h-5 w-5 text-accent-secondary" />,
    title: "Email Address",
    details: "info@oaksfieldservices.com",
  },
  {
    icon: <Clock className="h-5 w-5 text-accent-tertiary" />,
    title: "Working Hours",
    details: "24/7 Operations. Quick Response Guaranteed",
  },
]

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phoneNumber: "",
      company: "",
      serviceType: "",
      message: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)
    // Simulate API call
    setTimeout(() => {
      console.log(values)
      setIsSubmitting(false)
      form.reset()
      alert("Thank you for your message. We'll get back to you soon!")
    }, 2000)
  }

  return (
    <section id="contact" className="bg-gray-900 py-16 md:py-20">
      <div className="w-full max-w-[95%] xl:max-w-[90%] 2xl:max-w-[85%] mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="section-title text-gradient-accent">Contact Us</h2>
          <p className="section-subtitle text-gray-300">
            Contact our experts today for a free quotation for your project
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 md:gap-12">
          <div className="lg:col-span-1">
            <div className="space-y-6 md:space-y-8 p-6 rounded-lg bg-gray-800 shadow-lg">
              <h3 className="text-xl font-medium text-white mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 p-2 bg-green-400/20 rounded-full">
                    <Mail className="h-5 w-5 text-green-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <a
                      href="mailto:info@oaksfieldservices.com"
                      className="text-white hover:text-green-400 transition-colors"
                    >
                      info@oaksfieldservices.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 p-2 bg-green-400/20 rounded-full">
                    <Clock className="h-5 w-5 text-green-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Working Hours</p>
                    <p className="text-white">24/7 Operations. Quick Response Guaranteed</p>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-gray-700">
                <div className="flex flex-col items-center text-center mb-2">
                  <div className="p-2 bg-green-400/20 rounded-full mb-3">
                    <MapPin className="h-5 w-5 text-green-400" />
                  </div>
                </div>

                <div className="space-y-10 mt-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="flex items-center gap-2 mb-2">
                      <MapPin className="h-4 w-4 text-green-400" />
                      <p className="text-green-400 text-base font-medium uppercase">ALBERTA</p>
                    </div>
                    <a
                      href="tel:5875945521"
                      className="text-white hover:text-green-400 transition-colors flex items-center gap-2"
                    >
                      <Phone className="h-4 w-4 text-green-400" />
                      <span className="text-xl border-b border-white pb-1 hover:border-green-400 transition-colors">
                        587-594-5521
                      </span>
                    </a>
                  </div>

                  <div className="flex flex-col items-center text-center">
                    <div className="flex items-center gap-2 mb-2">
                      <MapPin className="h-4 w-4 text-green-400" />
                      <p className="text-green-400 text-base font-medium uppercase">BRITISH COLUMBIA</p>
                    </div>
                    <a
                      href="tel:7788072894"
                      className="text-white hover:text-green-400 transition-colors flex items-center gap-2"
                    >
                      <Phone className="h-4 w-4 text-green-400" />
                      <span className="text-xl border-b border-white pb-1 hover:border-green-400 transition-colors">
                        778-807-2894
                      </span>
                    </a>
                  </div>

                  <div className="flex flex-col items-center text-center">
                    <div className="flex items-center gap-2 mb-2">
                      <MapPin className="h-4 w-4 text-green-400" />
                      <p className="text-green-400 text-base font-medium uppercase">ONTARIO</p>
                    </div>
                    <a
                      href="tel:8258236262"
                      className="text-white hover:text-green-400 transition-colors flex items-center gap-2"
                    >
                      <Phone className="h-4 w-4 text-green-400" />
                      <span className="text-xl border-b border-white pb-1 hover:border-green-400 transition-colors">
                        825-823-6262
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 bg-gray-800 p-6 md:p-8 rounded-md shadow-lg">
            <h3 className="text-xl font-medium mb-6 text-white">Request a Quote</h3>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-semibold text-gray-300">
                          Name <span className="text-red-500">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="John Doe"
                            {...field}
                            className="h-10 shadow-sm border-gray-700 bg-gray-700 text-white"
                            required
                          />
                        </FormControl>
                        <FormMessage className="text-xs" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-semibold text-gray-300">
                          Email <span className="text-red-500">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="john@example.com"
                            {...field}
                            className="h-10 shadow-sm border-gray-700 bg-gray-700 text-white"
                            required
                          />
                        </FormControl>
                        <FormMessage className="text-xs" />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <FormField
                    control={form.control}
                    name="phoneNumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-semibold text-gray-300">Phone Number</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="+1 (555) 000-0000"
                            {...field}
                            className="h-10 shadow-sm border-gray-700 bg-gray-700 text-white"
                          />
                        </FormControl>
                        <FormMessage className="text-xs" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-semibold text-gray-300">Company</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Your Company"
                            {...field}
                            className="h-10 shadow-sm border-gray-700 bg-gray-700 text-white"
                          />
                        </FormControl>
                        <FormMessage className="text-xs" />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="serviceType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-semibold text-gray-300">Service Type</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="h-10 shadow-sm border-gray-700 bg-gray-700 text-white">
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="bg-gray-800 border-gray-700 text-white">
                          <SelectItem value="utility-locating">Utility Line Locating</SelectItem>
                          <SelectItem value="environmental">Environmental Monitoring</SelectItem>
                          <SelectItem value="security">Site Security Services</SelectItem>
                          <SelectItem value="operations">Field Operations</SelectItem>
                          <SelectItem value="emergency">Emergency Response</SelectItem>
                          <SelectItem value="workforce">Workforce Solutions</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage className="text-xs" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-semibold text-gray-300">
                        Message <span className="text-red-500">*</span>
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell us about your project or requirements..."
                          className="min-h-[100px] resize-none shadow-sm border-gray-700 bg-gray-700 text-white"
                          {...field}
                          required
                        />
                      </FormControl>
                      <FormMessage className="text-xs" />
                    </FormItem>
                  )}
                />
                <div className="text-xs text-gray-400 mb-4">
                  <span className="text-red-500">*</span> Required fields
                </div>
                <div className="relative">
                  {/* Animated halo effect */}
                  <div className="absolute inset-0 rounded-md bg-gradient-to-r from-green-400 to-green-500 opacity-70 blur-lg animate-pulse"></div>

                  <Button
                    type="submit"
                    className="relative w-full bg-green-500 hover:bg-green-600 hover:shadow-lg transition-all duration-300 text-white font-medium py-3 z-10"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  )
}

