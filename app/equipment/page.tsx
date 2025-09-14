import ContentSection from "../components/about/ContentSection";
import EquipmentCard from "./EquipmentCard";
import { BotIcon, WrenchIcon, Box, RotateCw, Microscope, Gauge, Wrench, Zap } from "lucide-react";

export default function Equipment() {
  const equipmentCategories = [
    {
      title: "CNC Indexing/TJR",
      icon: <RotateCw className="w-12 h-12" />,
      description: "High-precision barfeeders, indexers, and rotary solutions for advanced manufacturing needs.",
      features: ["Barfeeders", "Indexers", "Rotary Tables"],
      href: "/cnc-indexing-tjr"
    },
    {
      title: "Renishaw Products",
      icon: <WrenchIcon className="w-12 h-12" />,
      description: "Industry-leading probing and tooling solutions for precise measurements and quality control.",
      features: ["Probing Systems", "Tool Setting", "Calibration Tools"],
      href: "/renishaw-products"
    },
    {
      title: "New Equipment",
      icon: <Box className="w-12 h-12" />,
      description: "Latest CNC machines and robotics systems for modern manufacturing facilities.",
      features: ["CNC Machines", "Robots", "Automation Systems"],
      href: "/in-stock-equipment"
    },
    {
      title: "Used Equipment",
      icon: <Gauge className="w-12 h-12" />,
      description: "Quality pre-owned CNC and robotic equipment, fully tested and certified.",
      features: ["Used CNCs", "Refurbished Robots", "Legacy Systems"],
      href: "/in-stock-equipment-used"
    },
    {
      title: "MarkinBOX",
      icon: <Microscope className="w-12 h-12" />,
      description: "Advanced part marking systems for permanent identification and traceability.",
      features: ["Marking Systems", "Identification Solutions", "Traceability Tools"],
      href: "/markinbox"
    },
    {
      title: "Robotics Solutions",
      icon: <BotIcon className="w-12 h-12" />,
      description: "Comprehensive robotics solutions for welding and non-welding applications.",
      features: ["Welding Robots", "Automation Robots", "Custom Solutions"],
      href: "/productive-robotics"
    },
    {
      title: "Tracer Barfeeders",
      icon: <Wrench className="w-12 h-12" />,
      description: "Advanced barfeeding systems for improved productivity and automation.",
      features: ["Automatic Barfeeders", "Material Handling", "Feed Systems"],
      href: "/tracer-barfeeders"
    },
    {
      title: "VisionGauge",
      icon: <Zap className="w-12 h-12" />,
      description: "State-of-the-art optical comparators for precise measurement and inspection.",
      features: ["Optical Comparators", "Vision Systems", "Quality Control"],
      href: "/visiongauge"
    }
  ];

  return (
    <main className="min-h-screen pt-20 py-4">
      <ContentSection 
        title="Equipment Solutions" 
        subtitle="Discover our extensive selection of industrial equipment, from CNC machines
              and robotics to precision measurement tools. We offer both new and used
              equipment to meet your specific manufacturing needs."
      >
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {equipmentCategories.map((category, index) => (
              <EquipmentCard 
                key={index}
                {...category}
              />
            ))}
          </div>
      </ContentSection>
    </main>
  );
}