"use client";
import {useRouter} from "next/navigation";

import ContentSection from "@/app/components/about/ContentSection";
import {CheckCircle2} from "lucide-react";
import {GoogleTagManager} from "@next/third-parties/google";

export default function Supply() {
    const router = useRouter();
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
            link: "https://www.renishaw.com/en/products--32083"
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
            link: "https://www.excetek.com/shop"
        },
        {
            title: "KASTO",
            features: [
                "Metal-Cutting hacksaws, bandsaws, and circular saws",
"Storage Systems for bar stock, sheet metal, and pre-cut parts",
"Custom planning, design, and support service",
"Replacement parts stocked in USA",
],
            isHighlighted: true,
            img: "/logos/home_logos/KASTO.png",
            link: "https://www.kasto.com/en/saws/overview-saws"
        },
        {
            title: "Omega TMM",
            features: [
"Manual, semi-automatic and automatic tool presetters",
"Shrink fit technology with presetting capabilities",
"User-Friendly Software",
"Made in USA",
            ],
            isHighlighted: true,
            img: "/logos/home_logos/OMEGA_TMM.png",
            link: "https://omegatmm.com/presetters/"
        },
        {
            title: "Polarchem Technologies",
            features: [
                "Coolants: added fungicides, biocides, and surfactants for optimal system performance.",
                "Cutting Oils: petroleum-based oils for extended tool life.",
                "Water‑soluble, semi‑synthetic, and synthetic options with corrosion inhibition, EP additives, defoamers, and tramp‑oil control.",
                "Specialty Fluids: drawing fluids, hydraulic and way oils.",
            ],
            isHighlighted: true,
            img: "/logos/home_logos/Polarchem.jpg",
            link: "https://www.polarchemtech.com/products"
        },
    ];

    return (
        <main>
            <GoogleTagManager gtmId="G-7385J6MX2L" />
            <ContentSection
                title="TPI CNC Partners"
                subtitle=""
                className="pt-24"
            >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {maintenanceServices.map((service, index) => (
                        <div
                            key={index}
                            onClick={() => {
                                router.push(service.link ?? "/contact");
                            }}
                            role="link"
                            tabIndex={0}
                            onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && router.push(service.link ?? "/contact")}
                            className={`p-6 rounded-xl shadow-lg border-2 hover:shadow-xl border-brand-blue/10 bg-white`}
                        >
                            <h3 className={`text-2xl font-bold mb-6 relative text-gray-800`}>
                              <div className="flex items-center justify-center">
                                  <img src={service.img} alt={service.title} className="h-16" />
                              </div>
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
                    <a
                        href="/quote"
                        className="inline-flex items-center px-8 py-3 text-lg font-medium text-white bg-brand-blue rounded-lg hover:bg-brand-blue/90 transition-colors"
                    >
                        Request a Quote
                    </a>
                </div>
            </ContentSection>
        </main>
    );
}