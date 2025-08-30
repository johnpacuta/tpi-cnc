import { Settings, Wrench, GraduationCap, LineChart, Cog, Phone, ShieldCheck, Clock } from "lucide-react"
import { LucideIcon } from "lucide-react"

// Define the service type
type Service = {
  icon: LucideIcon
  title: string
  description: string
  gradientFrom: string
  gradientVia: string
  gradientTo: string
}

// Define the services data
const services: Service[] = [
  {
    icon: Wrench,
    title: "Field Service",
    description: "Scheduled or emergency repairs to keep operations running.",
    gradientFrom: "brand-blue",
    gradientVia: "brand-blue/70",
    gradientTo: "brand-blue/50"
  },
  {
    icon: Settings,
    title: "Preventive Maintenance",
    description: "Extend equipment lifespan with expert evaluations.",
    gradientFrom: "brand-blue",
    gradientVia: "brand-blue/70",
    gradientTo: "brand-blue/50"
  },
  {
    icon: Cog,
    title: "Equipment",
    description: "Industry-leading tools from trusted partners.",
    gradientFrom: "brand-blue",
    gradientVia: "brand-blue/70",
    gradientTo: "brand-blue/50"
  },
  {
    icon: LineChart,
    title: "Integration",
    description: "Advanced technology solutions to enhance equipment.",
    gradientFrom: "brand-blue",
    gradientVia: "brand-blue/70", 
    gradientTo: "brand-blue/50"
  },
  {
    icon: ShieldCheck,
    title: "Industrial Parts",
    description: "Hard-to-find parts sourced through TPI's vast network.",
    gradientFrom: "brand-blue",
    gradientVia: "brand-blue/70",
    gradientTo: "brand-blue/50"
  },
  {
    icon: GraduationCap,
    title: "Training",
    description: "In-house maintenance training tailored to your needs.",
    gradientFrom: "brand-blue",
    gradientVia: "brand-blue/70",
    gradientTo: "brand-blue/50"
  },
  {
    icon: Phone,
    title: "Consulting",
    description: "Optimize performance with TPI’s expert consulting.",
    gradientFrom: "brand-blue",
    gradientVia: "brand-blue/70",
    gradientTo: "brand-blue/50"
  },
  {
    icon: Clock,
    title: "Service Plans",
    description: "Save with discounted Monthly or Yearly maintenance plans.",
    gradientFrom: "brand-blue",
    gradientVia: "brand-blue/70",
    gradientTo: "brand-blue/50"
  }
]

export function Services() {
  return (
    <section className="relative">
      {/* Top wave divider */}
      <div className="absolute top-0 left-0 right-0 overflow-hidden">
        <svg
          className="relative block w-full h-[40px]"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-brand-blue/10"
          ></path>
        </svg>
      </div>

      <div className="py-16 bg-brand-blue/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block relative">
              {/* Industrial frame for title */}
              <div className="absolute inset-0 border-2 border-brand-blue/20" />
              <div className="absolute left-0 top-0 w-4 h-4 border-t-2 border-l-2 border-primary" />
              <div className="absolute right-0 top-0 w-4 h-4 border-t-2 border-r-2 border-primary" />
              <div className="absolute left-0 bottom-0 w-4 h-4 border-b-2 border-l-2 border-primary" />
              <div className="absolute right-0 bottom-0 w-4 h-4 border-b-2 border-r-2 border-primary" />
              
              <h2 className="relative px-12 py-6">
                <span className="block text-5xl font-bold text-brand-blue tracking-tight sm:text-6xl">
                  How We Do It
                </span>
                {/* <span className="mt-4 block text-xl text-gray-600 font-medium tracking-wide">
                  Comprehensive CNC Solutions
                </span> */}
                
                <div className="absolute left-0 right-0 bottom-0 h-0.5 bg-gradient-to-r from-transparent via-brand-blue to-transparent" />
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="relative group h-full">
                <div className={`absolute inset-0 bg-gradient-to-r from-${service.gradientFrom}/10 via-${service.gradientVia}/10 to-${service.gradientTo}/10 rounded-lg transform scale-[1.02] opacity-0 group-hover:opacity-100 transition-all duration-300`} />
                <div className="bg-white p-8 rounded-lg shadow-sm relative z-10 hover:shadow-md transition-all duration-300 border border-brand-blue/10 h-full flex flex-col">
                  <div className={`absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-${service.gradientFrom} via-${service.gradientVia} to-${service.gradientTo} rounded-t-lg`} />
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 flex items-center justify-center flex-shrink-0">
                      <service.icon className="h-6 w-6 text-brand-blue" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-black border-b-2 border-brand-blue/20 pb-2">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom wave divider */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden rotate-180">
        <svg
          className="relative block w-full h-[40px]"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-white"
          ></path>
        </svg>
      </div>
    </section>
  )
} 