"use client";

import ContentSection from "../components/about/ContentSection";
import Image from "next/image";
import ContactModal from "@/components/ContactModal";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import ProductSlider from "../cnc-indexing-tjr/ProductSlider";
import { ExternalLink } from "lucide-react";
import {router} from "next/client";

// Product type definition
interface Product {
  title: string;
  image: string;
}

const products: Product[] = [
  {
    title: "OB7 Range",
    image: "/products/probotics/ob73.png",
  },
  {
    title: "Deburring",
    image: "/products/probotics/ob71.png",
  },
  {
    title: "Welding",
    image: "/products/probotics/ob78.png",
  },
  {
    title: "OB7",
    image: "/products/probotics/ob74.png",
  },
  {
    title: "Assembly",
    image: "/products/probotics/ob710.png",
  },
  {
    title: "Material Handling",
    image: "/products/probotics/ob711.png",
  },
];

export default function ProductiveRobotics() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="min-h-screen py-8 bg-gray-50">
      <ContentSection 
        title="Productive Robotics" 
        subtitle="Collaborative Robot Solutions"
      >
        {/* Hero Section */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-12">
          <div className="flex flex-col items-center max-w-4xl mx-auto text-center">
            <Image
              src="/logos/partners/productive-robotics.webp"
              alt="Productive Robotics"
              width={300}
              height={100}
              className="object-contain mb-8"
              priority
            />
            
            <div className="space-y-6 text-gray-700">
              <p className="text-lg">
                Productive Robotics was formed in 2010 and focuses exclusively on designing 
                and manufacturing Collaborative Robotic Systems.
              </p>

              <p className="text-lg">
                Productive Robotics' OB7 Cobot is a leader in the new generation of 
                collaborative robots. The OB7 is a smart 7-axis collaborative robot with 
                a simple "no programming" teaching platform.
              </p>
            </div>

            {/* Prominent CTA */}
            <div className="my-8 p-6 bg-brand-blue/5 rounded-xl border border-brand-blue/20 w-full">
              <h3 className="text-xl font-semibold mb-4 text-brand-blue">
                Ready to Automate Your Production?
              </h3>
              <Button
                  onClick={() => router.push("/quote")}
                className="bg-brand-blue text-white px-8 py-6 text-lg font-medium hover:bg-brand-blue/90"
              >
                Request a Quote
              </Button>
            </div>

            <div className="mt-4">
              <Button
                asChild
                className="bg-brand-blue hover:bg-brand-blue/90 text-white px-8 py-6 text-lg"
              >
                <a 
                  href="https://www.productiverobotics.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  Click Here For More Products and Specifications
                  <ExternalLink className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Video Section */}
        <div className="my-12">
          <div className="aspect-video w-full max-w-4xl mx-auto">
            <iframe
              src="https://www.youtube.com/embed/PNlQ0lOqlv8"
              title="Productive Robotics Video"
              className="w-full h-full rounded-lg shadow-lg"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>

        {/* Product Slider Section */}
        <div className="my-12">
          <ProductSlider products={products} />
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <Button
              onClick={() => router.push("/quote")}
            className="bg-brand-blue text-white px-8 py-4 rounded-lg hover:bg-brand-blue/90 transition-colors text-lg font-medium shadow-sm hover:shadow-md"
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