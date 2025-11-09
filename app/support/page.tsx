"use client";
import { useRouter } from "next/navigation";

import ContentSection from "@/app/components/about/ContentSection";
import {CheckCircle2} from "lucide-react";
import {useState} from "react";

export default function Support() {
    const router = useRouter();
    const [activeIndex, setActiveIndex] = useState(0);
    const maintenanceServices = [
        {
            title: "Reactive",
            subtitle: "Get Back Online",
            features: [
                "24/7 Emergency Support",
                "48 hour response time",
                "3 hour minimum",
                "Detailed reports"
            ],
            isHighlighted: true,
            link: "#"
        },
        {
            title: "Preventative",
            subtitle: "Stop Breakdowns",
            features: [
                "Machine Assessment",
                "Detailed Report",
                {
                    label: "2 options:", children: [
                        "Wear and Tear Package",
                        "Enhanced Precision Machine Package with Ball Bar Calibration",
                    ]
                },
            ],
            isHighlighted: true,
            link: "#"
        },
        {
            title: "Comprehensive",
            subtitle: "Support Operations",
            features: [
                "1,000 hours hours of routine and emergency maintenance per year",
                "Includes Enhanced Precision Preventive Maintenance Package",
                "24-hour guaranteed response time",
                "Priority scheduling",
            ],
            isHighlighted: true,
            link: "#"
        },
        {            title: "Premium",
            subtitle: "Improve Operations",
            features: [
                "All Features of the Comprehensive Package",
                "Installation of a Real-time Digital Maintenance Monitoring System",
                "Team Training on the Digital Maintenance Monitoring System",
                "Optional Training and Upskilling of In-house techs",
            ],
            isHighlighted: true,
            link: "#"
        },
        {
            title: "3D Printing",
            subtitle: "",
            features: [
                "Cutting-edge 3D printing solutions",
                "Rapid prototyping",
                "Production in diverse materials",
                "Link to 3D Production History"
            ],
            isHighlighted: true,
            link: "/3d-printing"
        },
        {
            title: "CNC Parts",
            subtitle: "",
            features: [
                "Request machine parts",
                "Replace fluids and accessories",
                "Maintain and elevate your CNC equipment",
            ],
            isHighlighted: true,
            link: "/spare-parts"
        }
    ];

    return (
        <main>
            <ContentSection
                title="TPI CNC Packages"
                subtitle="Professional CNC maintenance solutions with flexible service packages"
                className="pt-24"
            >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {maintenanceServices.map((service, index) => (
                        <div
                            key={index}
                            onClick={() => {
                                setActiveIndex(index);
                                router.push(service.link ?? "/contact");
                            }}
                            role="link"
                            tabIndex={0}
                            onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && router.push(service.link ?? "/contact")}
                            className={`p-6 rounded-xl shadow-lg border-2 transition-all duration-300 hover:shadow-xl cursor-pointer
                ${index === activeIndex
                                ? 'border-brand-blue bg-brand-blue/5'
                                : 'border-brand-blue/10 bg-white'}`}
                        >
                            <h2 className={`text-3xl font-bold mb-2 transition-colors duration-300 relative
                ${index === activeIndex
                                ? 'text-brand-blue after:content-[""] after:absolute after:-bottom-2 after:left-0 after:w-16 after:h-1 after:bg-brand-blue after:rounded-full'
                                : 'text-gray-800'}`}>
                                {service.title}
                            </h2>
                            <h4 className={'text-2xl mb-3'}>
                                {service.subtitle}
                            </h4>

                            <ul className="space-y-4">
                                {service.features.map(
                                    (
                                        feature:
                                            | string
                                            | { label: string; children: string[] },
                                        featureIndex: number
                                    ) => {
                                        const isGroup = typeof feature !== "string";

                                        if (!isGroup) {
                                            return (
                                                <li key={featureIndex} className="flex items-start gap-3">
                                                    <CheckCircle2
                                                        className={`w-6 h-6 flex-shrink-0 text-brand-blue`}
                                                    />
                                                    <span className="text-gray-600">{feature}</span>
                                                </li>
                                            );
                                        }

                                        const group = feature as { label: string; children: string[] };
                                        return (
                                            <li key={featureIndex} className="flex flex-col gap-2">
                                                <div className="flex items-start gap-3">
                                                    <CheckCircle2
                                                        className={`w-6 h-6 flex-shrink-0 text-brand-blue`}
                                                    />
                                                    <span className="text-gray-800 font-semibold">{group.label}</span>
                                                </div>
                                                <ul className="ml-9 list-disc space-y-2">
                                                    {group.children.map((child, i) => (
                                                        <li key={i} className="text-gray-600">{child}</li>
                                                    ))}
                                                </ul>
                                            </li>
                                        );
                                    }
                                )}
                            </ul>
                        </div>
                    ))}
                </div>

                <section className="text-center mt-8">
                    <div className="bg-gradient-to-r from-brand-blue to-blue-600 rounded-xl shadow-xl p-4 sm:p-8">
                        <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Ready to Transform Your Operations?</h2>
                        <p className="text-white/90 mb-4 sm:mb-6 text-sm sm:text-base">Let's discuss how we can customize this solution for your specific needs.</p>
                        <button
                            type="button"
                            onClick={() => router.push("/contact")}
                            className="bg-white text-brand-blue font-bold py-2 sm:py-3 px-6 sm:px-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-sm sm:text-base"
                            aria-label="Go to Contact page"
                        >
                            Contact Us Today
                        </button>

                    </div>
                </section>

                <div className="mt-8 space-y-4 text-center">
                    <p className="text-gray-600 max-w-3xl mx-auto">
                        All service packages include our dual-technician approach, ensuring efficient and high-quality
                        results.
                    </p>
                    <a
                        href="/contact"
                        className="inline-flex items-center px-8 py-3 text-lg font-medium text-white bg-brand-blue rounded-lg hover:bg-brand-blue/90 transition-colors"
                    >
                        Request Service
                    </a>
                </div>
            </ContentSection>
        </main>
    );
}