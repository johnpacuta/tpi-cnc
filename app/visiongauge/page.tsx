"use client";

import ContentSection from "../components/about/ContentSection";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import ProductSlider from "../cnc-indexing-tjr/ProductSlider";
import ContactModal from "@/components/ContactModal";
import { useState } from "react";
import {router} from "next/client";

const products = [
  {
    title: "Disk Inspection System",
    image: "/products/visiongauge/vgdi.png"
  },
  {
    title: "300 Series",
    image: "/products/visiongauge/vg300.jpg"
  },
  {
    title: "400 Series",
    image: "/products/visiongauge/vg400.png"
  },
  {
    title: "500 Series",
    image: "/products/visiongauge/vg500.png"
  },
  {
    title: "700 Series",
    image: "/products/visiongauge/vg300.png"
  },
  {
    title: "Stand Alone System",
    image: "/products/visiongauge/vgsa.png"
  }
];

export default function VisionGauge() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="min-h-screen py-8 bg-gray-50">
      <ContentSection 
        title="VisionGauge" 
        subtitle="Digital Optical Comparators"
      >
        {/* Hero Section */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-12">
          <div className="flex flex-col items-center max-w-4xl mx-auto text-center">
            <Image
              src="/logos/partners/visiongauge.webp"
              alt="VisionGauge"
              width={300}
              height={100}
              className="w-auto h-20 mb-8"
            />
            
            <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-gray-800">
                  The fastest, easiest, most accurate way to compare a part to a CAD file
                </h2>
              </div>
              <div className="aspect-video relative">
                <iframe
                  className="w-full h-full rounded-lg shadow-lg"
                  src="https://www.youtube.com/embed/zzj4uGu-AXM"
                  title="VisionGauge Digital Optical Comparator"
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
                  href="https://www.visionxinc.com/"
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
          <h3 className="text-2xl font-bold text-center mb-8">
            Featured Products
          </h3>
          <ProductSlider products={products} />
        </div>

        {/* CTA Section */}
        <div className="my-8 text-center">
          <button
              onClick={() => router.push("/quote")}
            className="
              bg-brand-blue text-white 
              px-12 py-6 
              rounded-lg 
              hover:bg-brand-blue/90 
              transition-all
              text-xl font-semibold
              shadow-lg hover:shadow-xl
              transform hover:scale-105
              animate-subtle-pulse
            "
          >
              <Link href="/quote">
            Request a Quote Today
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