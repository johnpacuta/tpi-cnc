"use client";

import ContentSection from "../components/about/ContentSection";
import { Button } from "@/components/ui/button";
import ContactModal from "@/components/ContactModal";
import { useState } from "react";

// Product type definition
interface Product {
  title: string;
  description: string;
  image: string;
  specs?: string[];
  condition?: string;
  year?: string;
}

const products: Product[] = [
  {
    title: "Used Mazak VTC-200C Vertical Machining Center",
    image: "/products/used-vtc200c.webp",
    description: "Well-maintained vertical machining center with extended Y-axis travel and advanced features.",
    year: "2015",
    condition: "Excellent - Recently serviced and calibrated",
    specs: [
      "Machine Specifications",
      "• X-Axis Travel: 50\"",
      "• Y-Axis Travel: 20\"",
      "• Z-Axis Travel: 20\"",
      "• Table Size: 55\" x 20\"",
      "• Table Load Capacity: 2,200 lbs",
      "• Spindle Speed: 12,000 RPM",
      "• Spindle Motor: 25 HP",
      "• Tool Capacity: 30 Tools",
      
      "Control System",
      "• Mazatrol Matrix Control",
      "• 15\" Color LCD Display",
      "• USB and Ethernet Connectivity",
      "• Program Memory: 640MB",
      
      "Additional Features",
      "• Through Spindle Coolant",
      "• Chip Conveyor",
      "• Tool Length Measurement",
      "• Tool Breakage Detection",
      "• Automatic Tool Changer",
      
      "Current Status",
      "• Power-On Hours: 28,000",
      "• Cutting Hours: 18,500",
      "• Location: Flesherton, ON",
      "• Available for Immediate Delivery",
      "• Full Service History Available"
    ]
  }
];

export default function InStockEquipmentUsed() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="min-h-screen py-8 bg-gray-50">
      <ContentSection 
        title="In Stock Equipment - Used" 
        subtitle="Pre-Owned CNCs and Robots"
      >
        {/* Hero Section */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-12">
          <div className="flex flex-col items-center max-w-4xl mx-auto text-center">
            <p className="text-lg mb-8">
              All used equipment listed below is available at our Flesherton, ON location. 
              Each machine has been thoroughly inspected and tested to ensure reliable performance. 
              Contact us for detailed information about any machine's history and current condition.
            </p>

            <Button
              onClick={() => setIsModalOpen(true)}
              className="bg-brand-blue hover:bg-brand-blue/90 text-white px-6 py-4"
            >
              Request Information About Used Equipment
            </Button>
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
                    {product.year && (
                      <p className="text-lg font-medium text-brand-blue mb-2">Year: {product.year}</p>
                    )}
                    {product.condition && (
                      <p className="text-lg font-medium text-green-600 mb-4">Condition: {product.condition}</p>
                    )}
                    <p className="text-gray-600 mb-6">{product.description}</p>
                    <Button
                      onClick={() => setIsModalOpen(true)}
                      className="bg-brand-blue hover:bg-brand-blue/90 text-white px-8 py-4"
                    >
                      Request Information for {product.title.split('-')[0].trim()}
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
            Contact Us About Used Equipment
          </Button>
        </div>
      </ContentSection>

      <ContactModal 
        open={isModalOpen}
        onOpenChangeAction={setIsModalOpen}
      />
    </main>
  );
} 