'use client'
import Services from "@/components/home/Services"
import ContactForm from "@/components/shared/ContactForm"
import ContentSection from "@/app/components/about/ContentSection";
import {CheckCircle2} from "lucide-react";
import { useState } from "react";

export default function Service() {
    const [activeIndex, setActiveIndex] = useState(0);
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
        <main>
            <Services/>

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

            <section className="bg-brand-white pb-20">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <section className={``}>
                            <div className="container mx-auto px-6 w-[100%]">
                                <div className="text-center p-8 md:p-12">
                                    <div className="flex items-center justify-center mb-4">
                                        <div className="h-[2px] w-12 bg-brand-blue"></div>
                                        <div className="mx-4">
              <span className="inline-block px-4 py-1 bg-brand-blue text-white text-sm font-medium rounded-full">
                TPI CNC
              </span>
                                        </div>
                                        <div className="h-[2px] w-12 bg-brand-blue"></div>
                                    </div>
                                    <h2 className="text-4xl md:text-5xl font-bold text-primary relative inline-block">
                                        Contact Us
                                        <div
                                            className="absolute left-0 right-0 h-[4px] bg-gradient-to-r from-transparent via-accent/90 to-transparent"></div>
                                    </h2>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>

                <div className="grid-cols-1 items-start">
                    <div>
                        <ContactForm
                            title=""
                            subtitle="Ready to improve your industrial equipment performance? Get in touch with us today."
                        />
                    </div>
                </div>
            </section>
        </main>
    )
}