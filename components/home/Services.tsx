'use client'
import ContentSection from "../ContentSection";
import ServiceCard from "../ServiceCard";
import {BlueprintIcon,CircuitIcon, GearIcon, WrenchIcon, PowerIcon} from "../ui/EngIcons";

export default function Services() {
  const services = [
    {
      title: "Electrical and Mechanical Diagnostics",
      icon: <CircuitIcon />,
      description: "Advanced diagnostic solutions for complex industrial equipment",
      features: [
        "State-of-the-art diagnostic tools and equipment",
        "Electrical system analysis",
        "Mechanical performance evaluation",
        "Detailed inspection reports",
        "Preventive maintenance recommendations"
      ],
      details: "Our expert technicians utilize cutting-edge diagnostic tools to identify and troubleshoot both electrical and mechanical issues in CNC machines and industrial equipment. Through systematic testing and analysis, we ensure accurate fault detection and efficient resolution planning.",
      slug: "electrical-mechanical-diagnostics"
    },
    {
      title: "Root Cause Analysis Repairs",
      icon: <WrenchIcon />,
      description: "Identifying and addressing the source of equipment issues",
      features: [
        "Systematic problem investigation",
        "Data-driven analysis methods",
        "Corrective action planning",
        "Implementation of preventive measures",
        "Documentation and reporting"
      ],
      details: "We go beyond surface-level repairs by conducting thorough root cause analysis. This systematic approach helps identify the underlying causes of equipment failures, allowing us to implement lasting solutions and prevent recurring issues.",
      slug: "root-cause-analysis-repairs"
    },
    {
      title: "Equipment Alignment and Calibration",
      icon: <GearIcon />,
      description: "Precision calibration services for optimal performance",
      features: [
        "Laser alignment services",
        "Geometric accuracy testing",
        "Performance verification",
        "Calibration certification",
        "Regular maintenance schedules"
      ],
      details: "Our calibration and alignment services ensure your equipment maintains the highest levels of precision and accuracy. Using advanced laser alignment tools and calibration techniques, we optimize your machinery for peak performance.",
      slug: "equipment-alignment-and-calibration"
    },
    {
      title: "Commissioning and Decommissioning",
      icon: <PowerIcon />,
      description: "Complete equipment lifecycle management",
      features: [
        "New equipment installation",
        "System configuration and testing",
        "Safe decommissioning procedures",
        "Environmental compliance",
        "Documentation and training"
      ],
      details: "From initial setup to end-of-life management, we handle all aspects of equipment commissioning and decommissioning. Our processes ensure safe installation, optimal configuration, and environmentally responsible equipment retirement.",
      slug: "commissioning-and-decommissioning"
    },
    {
      title: "Third-Party Integration",
      icon: <BlueprintIcon />,
      description: "Seamless integration of multiple systems and components",
      features: [
        "Cross-platform compatibility",
        "Custom interface development",
        "System optimization",
        "Performance testing",
        "Ongoing support"
      ],
      details: "We specialize in integrating third-party systems with existing CNC equipment, improving workflow efficiency and system compatibility. Our solutions ensure smooth communication between different components and platforms.",
      slug: "third-party-integration"
    }
  ];

  return (
    <main className="min-h-screen py-4">
      
      <ContentSection 
        title="Our Services" 
        subtitle="Industrial equipment solutions tailored to your needs"
      >
        <div className="space-y-16">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-gray-600 text-lg leading-relaxed">
              At TPI CNC Inc., we provide industrial equipment services 
              designed to maximize your operational efficiency and minimize downtime. 
              Our expert team delivers reliable solutions for all your equipment needs.
            </p>
          </div>

          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <ServiceCard 
                key={index} 
                {...service}
              />
            ))}
          </div>
        </div>
      </ContentSection>
    </main>
  );
} 