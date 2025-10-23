"use client";

import ContentSection from "../components/about/ContentSection";
import Image from "next/image";
import ContactModal from "@/components/ContactModal";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import ProductSlider from "./ProductSlider";
import {router} from "next/client";

// Product type definition
interface Product {
  title: string;
  image: string;
}

// Updated products with better image paths and no links
const products: Product[] = [
  {
    title: "Hydrodynamic Magazine Bar Feeders",
    image: "/products/hmdf.webp",
  },
  {
    title: "Standard Hydraulic Brake",
    image: "/products/brake.png",
  },
  {
    title: "Tailstock",
    image: "/products/tailstock.png",
  },
  {
    title: "High Pressure Coolant System",
    image: "/products/hpcs.png",
  },
  // Add more products as needed
];

export default function CncIndexingTjr() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="min-h-screen py-8 bg-gray-50">
      <ContentSection 
        title="CNC Indexing" 
        subtitle="Barfeeders, Indexers, Rotaries, and more"
      >
        {/* Hero Section */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-12">
          <div className="flex flex-col items-center max-w-4xl mx-auto text-center">
            <Image
              src="/images/CNC_Indexing.jpg"
              alt="CNC Indexing"
              width={600}
              height={300}
              className="object-contain mb-8 rounded-lg w-full max-w-2xl"
              priority
              quality={90}
            />
            
            <h2 className="text-3xl font-bold mb-6 text-gray-800">
              Your CNC solutions partner for an array of quality machine tool accessories
            </h2>

            <div className="space-y-4 text-gray-700">
              <p className="text-lg">
                Choose CNC Indexing & Feeding Technologies for your most demanding 
                manufacturing applications.
              </p>

              <p className="text-lg">
                Let us be your one-stop supplier for all your rotary table, bar feeder, 
                bar loader and high pressure coolant needs. Check out CNC Indexing & 
                Feeding Technologies and you'll see – no other supplier of CNC machine 
                tool accessories can compare!
              </p>
            </div>

            <div className="mt-8">
              <Button
                asChild
                className="bg-brand-blue hover:bg-brand-blue/90 text-white px-8 py-6 text-lg"
              >
                <a 
                  href="https://www.cncindexing.com/"
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
            className="bg-brand-blue text-white px-8 py-4 rounded-lg hover:bg-primary/90 transition-colors text-lg font-medium shadow-sm hover:shadow-md"
          >
              <a href="/quote">Request a Quote</a>
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