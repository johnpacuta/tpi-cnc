"use client";

import ContentSection from "../components/about/ContentSection";
import { Button } from "@/components/ui/button";
import ContactModal from "@/components/ContactModal";
import { useState } from "react";
import { ExternalLink } from "lucide-react";

// Product type definition
interface Product {
  title: string;
  description: string;
  image: string;
  specs?: string[];
}

const products: Product[] = [
  {
    title: "CNC Seiki KT-420 Vertical Machining Center",
    image: "/products/kt-420.webp",
    description: "High-performance vertical machining center with advanced features and precise control.",
    specs: [
      "Travels",
      "• Longitudinal Travel (X) Axis: 27.6\"",
      "• Cross Travel (Y) Axis: 16.5\"",
      "• Vertical Travel (Z) Axis: 11.8\" (16.9\" for KT-420AL)",
      "• Table to Spindle: 6.7\" min/18.5\" max (23.6\" max for KT-420AL)",
      "• Spindle Center to Column: 18.9\"",

      "Table",
      "• Table Working Surface: 31.5\" x 15.7\"",
      "• Maximum Workload on Table: 660 LBS.",
      "• Table Surface: Ground / T-slotted",
      "• No. of T-slots x Width: 3 x 14mm",
      "• Table height from floor: 34\"",

      "Spindle (Standard)",
      "• Spindle Motor: 28HP peak / 6.5 HP continuous",
      "• Spindle Taper: BBT-30 dual contact",
      "• Spindle Drive System: Direct Drive",
      "• Spindle Speed: 0-15000 RPM",

      "Automatic Tool Changer – Turret Type (Standard for KT-420L)",
      "• Number of Tools: 21 tools",
      "• Tool Selection: Bi-directional-fixed",
      "• Tool Change Time: 1.07 sec tool to tool",
      "• Chip to Chip Time: 1.36 sec chip to chip",
      "• Magazine Index Time Adjacent Station: 0.1 seconds",
      "• Magazine Index Time 180 degrees: 1.8 seconds",
      "• Maximum Tool Diameter: 3.94\"",
      "• Maximum Tool Weight: 6.6 LBS",
      "• Tool Type: BBT-30",
      "• Maximum Tool Length: 7.9\"",

      "Ballscrews and Axis Motors",
      "• X-Y-Z Ballscrew Diameter: X 36mm (1.42\") x 16mm pitch, Y 28mm (1.1\") x 16mm, Z 32mm (1.25\") x 20mm",
      "• Ballscrew Type: Class 3 double nut pre-loaded",
      "• Ballscrew Mounting Type: Double anchored",
      "• X-Y-Z Servo Motor HP: 2.0 – 2.0 – 3.0HP",
      "• Servo Motor Mounting: Direct coupled",

      "Feeds",
      "• Rapid Traverse Rate X,Y,Z: 1969, 1969, 2362 IPM",
      "• Acceleration in Z: 1.0G",
      "• Cutting Feed Rate: 0.01 - 787 IPM",
      "• Positioning Accuracy: +/- .0002\" full stroke",
      "• Repeatability: +/- .00015\"",

      "General",
      "• Coolant Tank Capacity: 60 gallons",
      "• Machine Weight: 5,720 LBS",
      "• Floor Space (without optional chip conveyor): 81\" x 99\" x 105\"",
      "• Machine Power Source: 208/220 Volts, 3 Phase 40 Amps",
      "• Air Source: 90 PSI"
    ]
  },
  {
    title: "CNC Linear Motor Wire EDM AP-6040A",
    image: "/products/cnclmw.webp",
    description: "Advanced Wire EDM machine featuring AccuteX Linear Shaft Motor X,Y and high-precision control systems.",
    specs: [
      "Control & Motion Systems",
      "• AccuteX Linear Shaft Motor X,Y",
      "• High Speed Digital/AC Power Supply",
      "• 64 Bit Windows CE Based CNC Control",
      "• Fagor Linear Glass Scales",
      "• Fully Closed Loop 0.000004\" Resolution",
      "• 5 Controllable Axes (X, Y, U, V, Z)",
      "• Work Coordinate System G54-G959 (60 work points)",

      "Machine Capabilities",
      "• 45° Taper Cutting Capability (wide angle guides and flush cups required)",
      "• Lead In/Out Function (reduces whitness mark)",
      "• Built in Collision Detection (All Axis)",
      "• Automatic Corner Pro Function",
      "• Automatic Wire Feed System (Re-Thread at Break-Point)",
      "• Edge Finding/Centering Manually, By G-Codes and by Guidance Menus",
      "• SD Master – Stable Discharge Circuit with EPGA Technology",

      "Interface & Controls",
      "• Hand-Held Remote Pendant",
      "• 15\" Color Monitor",
      "• Ergonomic CNC Operator Panel (Swivel Mounted and Adjustable)",
      "• On Board Operation and Help Menus",
      "• AWT Monitor Screen",
      "• Conversational Cutting Condition Selection with API (automatic program imbedding)",

      "Connectivity & Programming",
      "• Ethernet (standard)",
      "• RS 232C Input",
      "• USB Port",
      "• Parametric Macro Sub Programming",
      "• Inch/Metric Switchable by program",

      "Standard Equipment",
      "• Extended Life Filtration Unit",
      "• Chiller Unit (standard)",
      "• Saftey Door Interlock"
    ]
  },
  {
    title: "CNC River 350 Precision Small Hole EDM Drilling Machine",
    image: "/products/river.webp",
    description: "High-precision small hole EDM drilling machine with advanced capabilities and automatic electrode changer.",
    specs: [
      "Capacities",
      "• Work Table Size: 23.6\" x 11.8\"",
      "• X Axis: 13.8\"",
      "• Y Axis: 9.8\"",
      "• Z Axis (guide position): 11.8\"",
      "• W Axis (machining): 11.6\"",
      "• Automatic electrode changer (12 position with electrode holders)",
      "• Electrode Diameter: 0.004\" – 0.118\" (.122\"– .248\" opt)",
      "• Electrode Material: Brass / Copper",
      "• Max. Workpiece Weight: 550 lbs.",
      "• Machine Weight: 2,200 lbs.",
      "• Maximum Workpiece Height: 13.4\"",
      "• Machine Dimensions (L x W x H): 43\" x 39\" x 79\"",
      "• Maximum Machining Current: 25 amps (32 & 64 amps optional)",
      "• Fluid Tank: 20 Liter (100L & 180L Optional)",

      "Power Supply",
      "• Maximum Machining Current: 35 Amps (64 Amps Optional)",
      "• Power Capacity: 3.8 KVA",
      "• Power Input: 200/220 V ± 5%, 3 Phase, 60 HZ",

      "Dielectric System",
      "• Fluid Tank: 20 Gallons",
      "• Flush Pump: 100~1900 P.S.I.",
      "• Filter Pump: Standard",
      "• Filter: 10 micron paper element",
      "• Auxilary Flush Nozzle: Standard"
    ]
  },
  {
    title: "OB7-Stretch - Collaborative 7-Axis Robot CNC Mill Package",
    image: "/products/ob7.webp",
    description: "Advanced 7-axis collaborative robot system with comprehensive CNC mill integration package.",
    specs: [
      "Standard Features",
      "• Rolling Robot Stand",
      "• Robot Work/Assembly Table",
      "• PG2 Parallel Gripper",
      "• Electronic Robot Interface includes:",
      "  - 8 inputs/outputs controller",
      "  - Regulator",
      "  - 2 valves",
      "• 4\" Pneumatic Soft Jaw Air Vise",
      "• CleanTech 160mm Chip Fan with ¾ Shank",
      "• PG-2 Dual Y Gripper + Adapter",
      "• Banner Laser Safety Scanner",

      "Optional Accessories",
      "• Kurt Air Versatile Pneumatic Lock Vise 0-9.25\""
    ]
  }
];

export default function InStockEquipment() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="min-h-screen py-8 bg-gray-50">
      <ContentSection 
        title="In Stock Equipment - New" 
        subtitle="CNCs and Robots"
      >
        {/* Hero Section */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-12">
          <div className="flex flex-col items-center max-w-4xl mx-auto text-center">
            <p className="text-lg mb-8">
              All items below are in stock at our Flesherton, ON location. We also have access to 
              Absolute Machine Tools US based stock, they typically have over 100 machines available. 
              Request a quote for us for any of their in stock items.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
              <Button
                asChild
                className="bg-brand-blue hover:bg-brand-blue/90 text-white px-6 py-4"
              >
                <a 
                  href="https://absolutemachine.com/stock/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  View AMT US Stock Equipment
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>

              <Button
                onClick={() => setIsModalOpen(true)}
                className="bg-brand-blue hover:bg-brand-blue/90 text-white px-6 py-4"
              >
                Request a Quote
              </Button>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        {products.length > 0 && (
          <div className="grid grid-cols-1 gap-8 my-12">
            {products.map((product, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow col-span-full"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="aspect-video relative">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="object-contain w-full h-full p-4"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-semibold mb-4">{product.title}</h3>
                    <p className="text-gray-600 mb-6">{product.description}</p>
                    <Button
                      onClick={() => setIsModalOpen(true)}
                      className="bg-brand-blue hover:bg-brand-blue/90 text-white px-8 py-4"
                    >
                      Request a Quote for {product.title.split('-')[0].trim()}
                    </Button>
                  </div>
                </div>
                {product.specs && (
                  <div className="p-6 border-t">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6">
                      {product.specs.map((spec, idx) => (
                        <div 
                          key={idx} 
                          className={
                            spec.startsWith('•') 
                              ? 'pl-4 text-sm' 
                              : 'font-semibold text-lg col-span-full mt-4 first:mt-0'
                          }
                        >
                          {spec}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <Button
            onClick={() => setIsModalOpen(true)}
            className="bg-brand-blue hover:bg-brand-blue/90 text-white px-8 py-4 text-lg"
          >
            Request a Quote
          </Button>
        </div>
      </ContentSection>

      <ContactModal 
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
      />
    </main>
  );
} 