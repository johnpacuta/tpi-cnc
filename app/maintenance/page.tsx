"use client";

import ContentSection from "../components/about/ContentSection";
import { CheckCircle2 } from "lucide-react";
import { useState } from "react";

const scopeOfServices = [
  {
    title: "Initial Assessment",
    items: [
      {
        subtitle: "Site Visit",
        description: "Conduct a detailed on-site evaluation to understand the operational environment and specific requirements."
      },
      {
        subtitle: "Equipment Review",
        description: "Inspect each CNC machine to develop a tailored maintenance schedule and address any immediate concerns."
      }
    ]
  },
  {
    title: "Maintenance Services",
    items: [
      {
        subtitle: "Routine Maintenance",
        description: "Perform regular maintenance tasks based on the agreed schedule to prevent unexpected breakdowns and reduce downtime."
      },
      {
        subtitle: "Preventive Maintenance",
        description: "Implement preventive measures to improve equipment reliability and extend the lifespan of your CNC machines."
      }
    ]
  },
  {
    title: "Maintenance Management System Integration",
    items: [
      {
        subtitle: "CMMS Integration",
        description: "Assist with implementing a Computerized Maintenance Management System (CMMS) to streamline operations, track maintenance history, and schedule future tasks."
      },
      {
        subtitle: "Ticketing System",
        description: "Set up a streamlined ticketing system to manage and document all maintenance requests and resolutions efficiently."
      }
    ]
  }
];

export default function Maintenance() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeStep, setActiveStep] = useState(0);

  const maintenanceServices = [
    {
      title: "Annual",
      features: [
        "1,000 hours annually (20 hours/week)",
        "20% discounted rate",
        "24-hour guaranteed response time",
        "Priority scheduling",
        "CMMS integration assistance",
        "Estimated Annual Cost: $90,000"
      ],
      isHighlighted: true
    },
    {
      title: "Monthly",
      features: [
        "80 hours per month (20 hours/week)",
        "10% discounted rate",
        "48-hour guaranteed response time",
        "Priority scheduling",
        "CMMS integration assistance",
        "Estimated Monthly Cost: $8,000"
      ]
    },
    {
      title: "Time and Material Basis",
      features: [
        "Services provided as needed",
        "Standard response times",
        "CMMS integration (upon request)",
        "Flexible scheduling"
      ]
    }
  ];

  return (
    <main className="min-h-screen pt-20 py-4">
      <ContentSection 
        title="Maintainence Process"
        subtitle="Comprehensive maintenance solutions for your CNC equipment"
      >
        {/* Timeline */}
        <div className="relative mb-12">
          {/* Timeline line with gradient */}
          <div className="absolute top-1/2 left-0 w-full -translate-y-1/2">
            <div className="h-1 bg-gradient-to-r from-gray-200 via-brand-blue to-gray-200"></div>
          </div>
          
          {/* Timeline nodes */}
          <div className="relative flex justify-between max-w-xs sm:max-w-2xl mx-auto">
            {scopeOfServices.map((service, index) => (
              <button
                key={index}
                onClick={() => setActiveStep(index)}
                className="relative flex flex-col items-center group"
              >
                {/* Node with pulse animation */}
                <div className={`relative w-6 h-6 sm:w-8 sm:h-8 rounded-full 
                  transition-all duration-300 transform
                  ${activeStep === index 
                    ? 'bg-brand-blue scale-110 ring-4 ring-brand-blue/30' 
                    : 'bg-white border-2 border-brand-blue group-hover:border-4 group-hover:border-brand-blue/50'}`}
                >
                  {/* Inner dot */}
                  <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                    w-2 h-2 sm:w-3 sm:h-3 rounded-full
                    ${activeStep === index 
                      ? 'bg-white' 
                      : 'bg-brand-blue group-hover:bg-brand-blue/50'}`}
                  />
                </div>
                
                {/* Step label */}
                <span className={`mt-4 text-sm sm:text-base font-semibold 
                  transition-all duration-300 transform
                  ${activeStep === index 
                    ? 'text-brand-blue scale-110' 
                    : 'text-gray-600 group-hover:text-brand-blue/70'}`}>
                  Step {index + 1}
                </span>
                
                {/* Floating title badge */}
                <div className={`absolute -top-12 left-1/2 -translate-x-1/2 
                  bg-white shadow-lg rounded-lg px-3 py-2 
                  transition-all duration-300 whitespace-nowrap
                  ${activeStep === index 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-2 pointer-events-none'}`}>
                  <span className="text-xs sm:text-sm font-medium text-gray-800">
                    {service.title}
                  </span>
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 
                    rotate-45 w-2 h-2 bg-white">
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Content Display */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-xl font-bold text-brand-blue mb-6">{scopeOfServices[activeStep].title}</h3>
          <div className="space-y-6">
            {scopeOfServices[activeStep].items.map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-blue/10 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-brand-blue"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">{item.subtitle}</h4>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ContentSection>

      <ContentSection 
        title="Maintainence Packages"
        subtitle="Professional CNC maintenance solutions with flexible service packages"
        className=""
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {maintenanceServices.map((service, index) => (
            <div 
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`p-6 rounded-xl shadow-lg border-2 transition-all duration-300 hover:shadow-xl cursor-pointer
                ${index === activeIndex
                  ? 'border-brand-blue bg-brand-blue/5' 
                  : 'border-brand-blue/10 bg-white'}`}
            >
              <h3 className={`text-2xl font-bold mb-6 transition-colors duration-300 relative
                ${index === activeIndex 
                  ? 'text-brand-blue after:content-[""] after:absolute after:-bottom-2 after:left-0 after:w-16 after:h-1 after:bg-brand-blue after:rounded-full' 
                  : 'text-gray-800'}`}>
                {service.title}
              </h3>
              
              <ul className="space-y-4">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <CheckCircle2 className={`w-6 h-6 flex-shrink-0 transition-colors duration-300
                      ${index === activeIndex ? 'text-brand-blue' : 'text-accent'}`} />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8 space-y-4 text-center">
          <p className="text-gray-600 max-w-3xl mx-auto">
            All service packages include our dual-technician approach, ensuring efficient and high-quality results.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-3 text-lg font-medium text-white bg-brand-blue rounded-lg hover:bg-brand-blue/90 transition-colors"
          >
            Request Service
          </a>
        </div>
      </ContentSection>

      <ContentSection 
        title="Additional Information"
        subtitle="Agreement details, billing, and other important information"
      >
        <div className="space-y-6">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-brand-blue mb-4">Recommendations</h3>
            <ul className="list-disc list-inside space-y-3 text-gray-600">
              <li>
                <span className="font-semibold">Preventive Maintenance Schedule:</span> A minimum of three preventive maintenance visits annually, supplemented by breakdown services as needed.
              </li>
              <li>
                <span className="font-semibold">Discount Structures:</span> Offering additional discounts for contracted preventive maintenance events to provide added value. For instance, a 15% labor discount could be applied to any service performed on a machine under contract.
              </li>
            </ul>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-brand-blue mb-4">Transparency in Billing</h3>
            <p className="text-gray-600 mb-4">
              TPI CNC Inc. will ensure full transparency and fairness in billing. Based on the selected service option, detailed reports will be provided:
            </p>
            <ul className="list-disc list-inside space-y-3 text-gray-600">
              <li>
                <span className="font-semibold">Annual Agreements:</span> End-of-year reports summarizing services performed, hours worked, and associated costs.
              </li>
              <li>
                <span className="font-semibold">Monthly Agreements:</span> End-of-month reports detailing all work performed. Invoices will be reconciled to reflect actual work completed. Any overpayments of up to 100 hours yearly/10 hours monthly will be credited back to you. The discount rates can extend past the commitment of 1,000 hours yearly/80 hours monthly if extra hours are required.
              </li>
            </ul>
          </div>
        </div>
      </ContentSection>
    </main>
  );
}