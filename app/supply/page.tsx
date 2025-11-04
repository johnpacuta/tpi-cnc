"use client";
import {useRouter} from "next/navigation";

import ContentSection from "@/app/components/about/ContentSection";
import {CheckCircle2} from "lucide-react";
import {useState} from "react";

export default function Supply() {
    const router = useRouter();
    const [activeIndex, setActiveIndex] = useState(0);
    const maintenanceServices = [
        {
            title: "RENISHAW",
            features: [
                "Precision metrology solutions for CNC calibration",
                "Ballbar, laser, and probing systems expertise",
                "Installation, integration, and certification support",
                "Ongoing maintenance, training, and diagnostics",
            ],
            isHighlighted: true,
            img: "/logos/home_logos/Renishaw.png",
            link: "#"
        },
        {
            title: "EXCETEK",
            features: [
                "Wire Cut EDM",
                "Die-Sinking EDM",
                "Hole Drilling EDM",
                "Patented solutions",
            ],
            isHighlighted: true,
            img: "/logos/home_logos/Excetek.png",
            link: "#"
        },
    ];

    return (
        <main>
            <ContentSection
                title="TPI CNC Trusted Partners"
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
                            <h3 className={`text-2xl font-bold mb-6 transition-colors duration-300 relative
                ${index === activeIndex
                                ? 'text-brand-blue after:content-[""] after:absolute after:-bottom-2 after:left-0 after:w-16 after:h-1 after:bg-brand-blue after:rounded-full'
                                : 'text-gray-800'}`}>
                                {service.title}
                                <img src={service.img}/>
                            </h3>

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