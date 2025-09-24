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
    title: "Hydrodynamic Magazine Bar Feeders",
    image: "/products/barfeeders/hdmbf.png"
  },
  {
    title: "Large Capacity Bar Feeder",
    image: "/products/barfeeders/large.jpg"
  },
  {
    title: "Servo Short Bar Loaders",
    image: "/products/barfeeders/servoshort.png"
  },
  {
    title: "Short Bar Loaders",
    image: "/products/barfeeders/short.png"
  },
  {
    title: "Pneumatic Bar Loaders",
    image: "/products/barfeeders/pbl.png"
  }
];

export default function TracerBarfeeders() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="min-h-screen py-8 bg-gray-50">
      <ContentSection 
        title="Tracer Barfeeders" 
        subtitle="Automated Bar Feeding Solutions"
      >
        {/* Hero Section */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-12">
          <div className="flex flex-col items-center max-w-4xl mx-auto text-center">
            <Image
              src="/logos/partners/tracer.webp"
              alt="Tracer"
              width={300}
              height={100}
              className="w-auto h-20 mb-8"
            />
            
            <div className="space-y-6 text-gray-700">
              <div className="grid gap-6">
                <p className="text-lg">
                  Pneumatic short bar loaders are economical solutions to achieving unmanned production runs.
                </p>
                <p className="text-lg">
                  Servo short bar loaders are smart solutions to achieving unmanned production runs with sub-spindle style CNC lathes.
                </p>
                <p className="text-lg">
                  Hydrodynamic Magazine Bar Feeders for fixed & sliding headstock CNC lathes.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                <Button
                  asChild
                  className="bg-brand-blue hover:bg-brand-blue/90 text-white px-8 py-6 text-lg"
                >
                  <a 
                    href="https://www.cncindexing.com/bar-feeders/"
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
        onOpenChange={setIsModalOpen}
      />
    </main>
  );
} 