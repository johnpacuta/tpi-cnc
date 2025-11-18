"use client";

import ContentSection from "../../components/about/ContentSection";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import ProductSlider from "../../cnc-indexing-tjr/ProductSlider";
import ContactModal from "@/components/ContactModal";
import { useState } from "react";
import {router} from "next/client";
import Link from "next/link";

const products = [
  {
    title: "Blaze MAX",
    image: "/products/welding/weld1.jpg"
  },
  {
    title: "Blaze MAX Mobile",
    image: "/products/welding/weld2.jpg"
  },
  {
    title: "Blaze MAX LF",
    image: "/products/welding/weld3.jpg"
  },
  {
    title: "Blaze DUO",
    image: "/products/welding/weld4.jpg"
  }
]

export default function BlazeWeldingRobot() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="min-h-screen py-8 bg-gray-50">
      <ContentSection 
        title="Productive Robotics" 
        subtitle="Blaze Welding Robot Solutions"
      >
        {/* Hero Section */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-12">
          <div className="flex flex-col items-center max-w-4xl mx-auto text-center">
            <Image
              src="/logos/partners/productive-robotics.webp"
              alt="Productive Robotics"
              width={300}
              height={100}
              className="w-auto h-20 mb-8"
            />
            
            <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-gray-800">
                  Production robotic welding jobs can be done many times faster than manual welding
                </h2>
                <div className="space-y-4 text-gray-700">
                  <p className="text-lg">Any mix, any volume welding automation.</p>
                  <p className="text-lg">Easy to program.</p>
                </div>
              </div>
              <div className="aspect-video relative">
                <iframe
                  className="w-full h-full rounded-lg shadow-lg"
                  src="https://www.youtube.com/embed/WwJ9atGWNDc"
                  title="Blaze Welding Robot Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>

            <div className="mt-8">
              <Button
                asChild
                className="bg-brand-blue hover:bg-brand-blue/90 text-white px-8 py-6 text-lg"
              >
                <a 
                  href="https://www.productiverobotics.com/robotic-welding"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  Click Here For More Products and Specifications →
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Product Slider Section */}
        <div className="my-12">
          <ProductSlider products={products} />
        </div>

        {/* CTA Section */}
        <div className="my-8 text-center">
          <button
              onClick={() => router.push("/quote")}
            className="bg-brand-blue text-white px-8 py-4 rounded-lg hover:bg-black/90 transition-colors text-lg font-medium shadow-sm hover:shadow-md"
          >
              <Link href="/quote">
            Request a Quote
              </Link>
          </button>
        </div>
      </ContentSection>

      <ContactModal 
        open={isModalOpen}
        onOpenChangeAction={setIsModalOpen}
      />
    </main>
  );
} 