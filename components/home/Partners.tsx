import ContentSection from "@/app/components/about/ContentSection";
import {
    Gauge,
    Shield,
    PuzzleIcon,
    Headphones,
    Wrench,
    Users,
    BadgeCheck,
    Clock
} from 'lucide-react'

export const metadata = {
    title: 'Trusted Partners | TPI CNC Inc.',
    description: 'Discover TPI CNC Inc.\'s trusted partnerships with industry-leading manufacturers like Renishaw and Mazak, enabling us to deliver exceptional manufacturing solutions.',
    openGraph: {
        title: 'Trusted Partners | TPI CNC Inc.',
        description: 'Discover TPI CNC Inc.\'s trusted partnerships with industry-leading manufacturers like Renishaw and Mazak.',
        images: ['/images/partners-hero.jpg'],
    },
}

const partners = [
    {
        name: "Renishaw",
        logo: "/logos/partners/renishaw.png",
        url: "https://www.renishaw.com/",
    },
    {
        name: "Mazak",
        logo: "/logos/partners/mazak.svg",
        url: "https://www.mazakusa.com/",
    },
    // Add more partners as needed
]

const benefits = [
    {
        title: "Industry-Leading Technology",
        description: "Access to cutting-edge machinery and technology through our partnerships with global leaders in manufacturing.",
        longDescription: "Our partnerships give us early access to the latest innovations in manufacturing technology, ensuring our clients always benefit from state-of-the-art solutions and capabilities.",
        icon: Gauge,
        highlights: [
            "Latest CNC machinery and tools",
            "Advanced measurement systems",
            "Cutting-edge software solutions"
        ]
    },
    {
        title: "Quality Assurance",
        description: "Partnerships with renowned brands ensure we maintain the highest standards of quality in all our services.",
        longDescription: "Through our strategic partnerships, we implement rigorous quality control processes and utilize advanced inspection equipment to guarantee precision in every project.",
        icon: Shield,
        highlights: [
            "Lean manufacturing processes",
            "Advanced quality control systems",
            "Regular quality audits"
        ]
    },
    {
        title: "Comprehensive Solutions",
        description: "Our strategic partnerships allow us to offer complete solutions for all your manufacturing needs.",
        longDescription: "From design to final production, our network of partners enables us to handle complex projects with multiple requirements under one roof.",
        icon: PuzzleIcon,
        highlights: [
            "End-to-end manufacturing solutions",
            "Integrated workflow systems",
            "Multi-disciplinary capabilities"
        ]
    },
    {
        title: "Expert Support",
        description: "Direct access to manufacturer expertise and support through our established partnership network.",
        longDescription: "Our partnerships provide us with direct lines to manufacturer expertise, ensuring quick resolution of technical challenges and optimal equipment performance.",
        icon: Headphones,
        highlights: [
            "24/7 technical support",
            "Manufacturer-certified technicians",
            "Rapid response times"
        ]
    },
    {
        title: "Technical Excellence",
        description: "Continuous training and certification programs through our partner network.",
        longDescription: "Our team regularly undergoes training with our partners to stay current with the latest technologies and best practices in manufacturing.",
        icon: Wrench,
        highlights: [
            "Certified technicians",
            "Regular skill updates",
            "Industry-specific training"
        ]
    },
    {
        title: "Collaborative Innovation",
        description: "Working together with partners to develop custom solutions for unique challenges.",
        longDescription: "Our close relationships with partners enable us to collaborate on innovative solutions for complex manufacturing challenges.",
        icon: Users,
        highlights: [
            "Custom solution development",
            "Joint research projects",
            "Industry-specific expertise"
        ]
    },
    {
        title: "Certified Partnership Status",
        description: "Official certification and recognition from leading manufacturers.",
        longDescription: "Our certified partnership status ensures we maintain the highest standards and have priority access to support and resources.",
        icon: BadgeCheck,
        highlights: [
            "Official partner certifications",
            "Priority support access",
            "Direct manufacturer relationship"
        ]
    },
    {
        title: "Rapid Response",
        description: "Quick access to parts, support, and solutions through our partner network.",
        longDescription: "Our partnership network enables us to quickly source parts and solutions, minimizing downtime and ensuring project continuity.",
        icon: Clock,
        highlights: [
            "Fast parts procurement",
            "Priority technical support",
            "Emergency service availability"
        ]
    }
]

export default function Partners() {
    return (
        <main className="min-h-screen">
            <ContentSection title="Trusted Partners">
                <div className="max-w-6xl mx-auto space-y-16">
                    {/* Introduction */}
                    <div className="text-center">
                        <p className="text-lg text-gray-600">
                            TPI CNC Inc. partners with industry-leading manufacturers to deliver exceptional quality and
                            innovation in manufacturing solutions.
                        </p>
                    </div>

                    {/* Partner Logos */}
                    <div>
                        {/* <h2 className="text-2xl font-semibold text-center mb-8">Our Partners</h2> */}
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 items-center justify-items-center">
                            {partners.map((partner) => (
                                <a
                                    key={partner.name}
                                    href={partner.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group relative w-full max-w-[200px] h-[100px] transition-transform hover:scale-105"
                                >
                                    <img
                                        src={partner.logo}
                                        alt={`${partner.name} logo`}
                                        className="w-full h-full object-contain filter hover:brightness-110"
                                    />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Enhanced Partnership Benefits - Clean Design */}
                    <div className="relative">
                        <div className="text-center mb-12">
              <span className="text-brand-blue/80 text-sm font-medium tracking-wider uppercase">
                Why Choose Us
              </span>
                            <h2 className="text-4xl font-bold mt-2 text-gray-900">
                                Customer Benefits
                            </h2>
                            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                                Our customer partnerships create opportunities to deliver exceptional value and innovative
                                solutions.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {benefits.map((benefit) => {
                                const Icon = benefit.icon
                                return (
                                    <div
                                        key={benefit.title}
                                        className="group relative p-8 rounded-xl border border-gray-200
                      bg-white shadow-sm hover:shadow-md hover:border-brand-blue/30 
                      transition-all duration-300 ease-in-out"
                                    >
                                        <div className="absolute top-0 left-0 w-2 h-full bg-brand-blue/60
                      rounded-l-xl transform scale-y-0 group-hover:scale-y-100 
                      transition-transform duration-300 ease-out"
                                        />
                                        <div className="relative space-y-4">
                                            <div className="flex items-center gap-3 mb-4">
                                                <div className="p-2 rounded-lg bg-brand-blue/10 text-brand-blue">
                                                    <Icon className="w-6 h-6"/>
                                                </div>
                                                <h3 className="text-xl font-semibold text-brand-blue group-hover:translate-x-2 transition-transform duration-300">
                                                    {benefit.title}
                                                </h3>
                                            </div>

                                            <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                                                {benefit.longDescription}
                                            </p>

                                            <ul className="space-y-2 pt-4">
                                                {benefit.highlights.map((highlight, index) => (
                                                    <li key={index} className="flex items-center gap-2 text-gray-600">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-brand-blue/60"/>
                                                        {highlight}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </ContentSection>
        </main>
    )
} 