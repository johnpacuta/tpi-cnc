'use client'
import ContentSection from "../ContentSection";
import ServiceCard from "../ServiceCard";
import {BlueprintIcon,CircuitIcon, GearIcon, WrenchIcon, PowerIcon} from "../ui/EngIcons";

export default function Services() {
  const services = [
    {
      title: "Electrical and Mechanical Diagnostics",
      icon: <CircuitIcon />,
      description: "Advanced diagnostic solutions for complex industrial equipment. Our expert technicians utilize cutting-edge diagnostic tools to identify and troubleshoot both electrical and mechanical issues in CNC machines and industrial equipment.",
      features: [
        "State-of-the-art diagnostic tools",
        "Electrical system analysis",
        "Mechanical performance evaluation",
        "Detailed inspection reports",
      ],
      slug: "electrical-mechanical-diagnostics"
    },
      {
          title:"",
          icon:"",
          description:"",
          features:[""],
          slug:"",
          img: "/images/diagnostics.jpg",
      },
    {
      title: "Root Cause Analysis Repairs",
      icon: <WrenchIcon />,
      description: "Identifying and addressing the source of equipment issues. We go beyond surface-level repairs by conducting thorough root cause analysis. This systematic approach helps identify the underlying causes of equipment failures, allowing us to implement lasting solutions and prevent recurring issues.",
      features: [
        "Systematic problem investigation",
        "Data-driven analysis",
        "Corrective action planning",
        "Documentation and reporting"
      ],
      slug: "root-cause-analysis-repairs"
    },
    {
      title: "Equipment Alignment and Calibration",
      icon: <GearIcon />,
      description: "Precision calibration services for optimal performance. Our calibration and alignment services ensure your equipment maintains the highest levels of precision and accuracy. Using advanced laser alignment tools and calibration techniques, we optimize your machinery for peak performance.",
      features: [
        "Geometric accuracy testing",
        "Performance verification",
        "Calibration certification",
        "Regular maintenance schedules"
      ],
      slug: "equipment-alignment-and-calibration"
    },
    {
      title: "Commissioning and Decommissioning",
      icon: <PowerIcon />,
      description: "Complete equipment lifecycle management. From initial setup to end-of-life management, we handle all aspects of equipment commissioning and decommissioning. Our processes ensure safe installation, optimal configuration, and environmentally responsible equipment retirement.",
      features: [
        "New equipment installation",
        "System configuration and testing",
        "Safe decommissioning procedures",
        "Documentation and training"
      ],
      slug: "commissioning-and-decommissioning"
    },
    {
      title: "Third-Party Integration",
      icon: <BlueprintIcon />,
      description: "Seamless integration of multiple systems and components. We specialize in integrating third-party systems with existing CNC equipment, improving workflow efficiency and system compatibility. Our solutions ensure smooth communication between different components and platforms.",
      features: [
        "Cross-platform compatibility",
        "Custom interface development",
        "System optimization",
        "Performance testing",
      ],
      slug: "third-party-integration"
    }
  ];

  return (
    <main className="min-h-screen">
      
      <ContentSection 
        title="Our Services"
      >
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-gray-600 text-lg leading-relaxed pb-8">
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
      </ContentSection>
    </main>
  );
} 