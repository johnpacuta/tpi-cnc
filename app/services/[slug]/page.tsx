'use client';

import { notFound } from "next/navigation";
import DetailPage from "@/components/shared/DetailPage";
import { Microscope, Wrench, Ruler, Power, Network } from "lucide-react";

const servicesData = {
  "electrical-mechanical-diagnostics": {
    title: "Electrical and Mechanical Diagnostics",
    icon: <Microscope className="w-12 h-12" />,
    description: "Advanced diagnostic solutions for complex industrial equipment",
    fullDescription: "Our expert technicians utilize cutting-edge diagnostic tools to identify and troubleshoot both electrical and mechanical issues in CNC machines and industrial equipment. Through systematic testing and analysis, we ensure accurate fault detection and efficient resolution planning.",
    imageUrl: ["/images/banner.png"],
    features: [
      "State-of-the-art diagnostic tools and equipment",
      "Electrical system analysis",
      "Mechanical performance evaluation",
      "Detailed inspection reports",
      "Preventive maintenance recommendations"
    ],
    methodology: [
      "Initial Assessment",
      "Diagnostic Testing",
      "Analysis & Reporting",
      "Solution Implementation"
    ],
    benefits: [
      "Reduced downtime with quick and accurate diagnosis",
      "Cost efficiency through precise problem identification",
      "Preventive maintenance recommendations",
      "Documentation and reporting",
      "Extended equipment lifespan"
    ],
    implementation: {
      phases: ["Assessment", "Diagnosis", "Solution Planning", "Implementation"],
      timeline: "1-3 business days depending on complexity",
      support: "24/7 emergency support available"
    }
  },
  "root-cause-analysis-repairs": {
    title: "Root Cause Analysis Repairs",
    icon: <Wrench className="w-12 h-12" />,
    description: "Identifying and addressing the source of equipment issues",
    fullDescription: "We go beyond surface-level repairs by conducting thorough root cause analysis. This systematic approach helps identify the underlying causes of equipment failures, allowing us to implement lasting solutions and prevent recurring issues.",
    imageUrl: "/images/RootCauseAnalysis.jpg",
    features: [
      "Systematic problem investigation",
      "Data-driven analysis methods",
      "Corrective action planning",
      "Implementation of preventive measures",
      "Documentation and reporting"
    ],
    methodology: [
      "Problem Identification",
      "Data Collection",
      "Analysis Phase",
      "Solution Development",
      "Implementation",
      "Verification"
    ],
    benefits: [
      "Prevention of recurring issues",
      "Long-term cost reduction",
      "Improved equipment reliability",
      "Enhanced operational efficiency",
      "Better maintenance planning"
    ],
    implementation: {
      phases: ["Investigation", "Analysis", "Solution Design", "Implementation", "Follow-up"],
      timeline: "2-4 weeks for detailed analysis",
      support: "Ongoing consultation and support"
    }
  },
  "equipment-alignment-and-calibration": {
    title: "Equipment Alignment and Calibration",
    icon: <Ruler className="w-12 h-12" />,
    description: "Precision calibration services for optimal performance",
    fullDescription: "Our calibration and alignment services ensure your equipment maintains the highest levels of precision and accuracy. Using advanced laser alignment tools and calibration techniques, we optimize your machinery for peak performance.",
    imageUrl: "/images/CNC_Calibration.jpg",
    features: [
      "Laser alignment services",
      "Geometric accuracy testing",
      "Performance verification",
      "Calibration certification",
      "Regular maintenance schedules"
    ],
    methodology: [
      "Initial Equipment Assessment",
      "Precision Measurement",
      "Alignment Procedures",
      "Calibration Process",
      "Performance Verification"
    ],
    benefits: [
      "Improved machine accuracy",
      "Extended equipment life",
      "Reduced maintenance costs",
      "Enhanced product quality",
      "Documented calibration history"
    ],
    implementation: {
      phases: ["Assessment", "Measurement", "Alignment", "Calibration", "Verification"],
      timeline: "1-2 days per machine",
      support: "Regular calibration scheduling available"
    }
  },
  "commissioning-and-decommissioning": {
    title: "Commissioning and Decommissioning",
    icon: <Power className="w-12 h-12" />,
    description: "Complete equipment lifecycle management",
    fullDescription: "From initial setup to end-of-life management, we handle all aspects of equipment commissioning and decommissioning. Our processes ensure safe installation, optimal configuration, and environmentally responsible equipment retirement.",
    imageUrl: "/images/CommissioningAndDecommissioning.jpg",
    features: [
      "New equipment installation",
      "System configuration and testing",
      "Safe decommissioning procedures",
      "Environmental compliance",
      "Documentation and training"
    ],
    methodology: [
      "Site Preparation",
      "Installation Planning",
      "Equipment Setup",
      "Testing & Verification",
      "Staff Training"
    ],
    benefits: [
      "Smooth equipment transitions",
      "Minimized downtime",
      "Environmental compliance",
      "Documentation",
      "Expert knowledge transfer"
    ],
    implementation: {
      phases: ["Planning", "Execution", "Testing", "Training", "Documentation"],
      timeline: "1-3 weeks depending on complexity",
      support: "Full project management and support"
    }
  },
  "third-party-integration": {
    title: "Third-Party Integration",
    icon: <Network className="w-12 h-12" />,
    description: "Seamless integration of multiple systems and components",
    fullDescription: "We specialize in integrating third-party systems with existing CNC equipment, improving workflow efficiency and system compatibility. Our solutions ensure smooth communication between different components and platforms.",
    imageUrl: "/images/Integration.jpg",
    features: [
      "Cross-platform compatibility",
      "Custom interface development",
      "System optimization",
      "Performance testing",
      "Ongoing support"
    ],
    methodology: [
      "Requirements Analysis",
      "System Design",
      "Integration Development",
      "Testing & Validation",
      "Deployment & Support"
    ],
    benefits: [
      "Improved system interoperability",
      "Streamlined workflows",
      "Enhanced data management",
      "Reduced manual intervention",
      "Increased productivity"
    ],
    implementation: {
      phases: ["Analysis", "Design", "Development", "Testing", "Deployment"],
      timeline: "2-6 weeks based on integration complexity",
      support: "Ongoing technical support and updates"
    }
  }
};

export type DetailFormProps = {
        firstName?: string;
        lastName?: string;
        email?: string;
        phone?: string;
        company?: string;
        message?: string;
};

export default async function ServicePage({
  params
}: {
  params: Promise<{ slug: string }>
}) {
  const resolvedParams = await params;
  const service = servicesData[resolvedParams.slug as keyof typeof servicesData];

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
    }


  if (!service) {
    notFound();
  }

  // Transform service data to match DetailPage props
  const detailPageData = {
    title: service.title,
    description: service.description,
    fullDescription: service.fullDescription,
    imageUrl: service.imageUrl,
    methodology: service.methodology,
    benefits: service.benefits,
    features: service.features,
    implementation: service.implementation
  };

  return (
    <div className="bg-gray-50">
      <div className="mb-[-60px]">
        <DetailPage
          data={detailPageData}
          type="service"
          withGenericForm={false}
          backButton={{ text: "Services", href: "/services" }}
        />
      </div>
      <section className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 mb-4">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-900">Request Service Information</h2>
        <p className="text-gray-600 text-center mb-8">
          Interested in {service.title}? Fill out the form below and we'll get back to you with detailed information.
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            name="serviceName"
            value={service.title}
            readOnly
            className="w-full px-4 py-3 rounded-xl border bg-gray-100 text-gray-700 cursor-not-allowed"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="First Name"
              className="w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-primary/50"
              required
            />
            <input
              type="text" 
              placeholder="Last Name"
              className="w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-primary/50"
              required
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-primary/50"
              required
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
          </div>
          <input
            type="text"
            placeholder="Company Name"
            className="w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-primary/50"
          />
          <textarea
            placeholder="Additional Requirements or Questions"
            rows={4}
            className="w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-primary/50"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-primary text-white px-6 py-3 rounded-xl hover:bg-primary/90 transition-all duration-300"
          >
            Request Information
          </button>
        </form>
      </section>
    </div>
  );
}

export async function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({
    slug,
  }));
}