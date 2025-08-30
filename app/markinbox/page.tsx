"use client";

import ContentSection from "../components/about/ContentSection";
import Image from "next/image";
import ContactModal from "@/components/ContactModal";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import ProductSlider from "../cnc-indexing-tjr/ProductSlider";
import { ExternalLink } from "lucide-react";

// Product type definition
interface Product {
  title: string;
  image: string;
}

const products: Product[] = [
  {
    title: "MB3315S Part Marking Machine",
    image: "/products/markinbox/mb3315s.jpg",
  },
  {
    title: "MB1010 BSD Part Marking Machine",
    image: "/products/markinbox/mb1010bsd.jpg",
  },
  {
    title: "MB1010 Part Marking Machine",
    image: "/products/markinbox/mb1010.jpg",
  },
  {
    title: "Patmark Mini - Portable Dot Pin Marking Machine",
    image: "/products/markinbox/patmark_mini.jpg",
  },
];

export default function MarkinBox() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="min-h-screen py-8 bg-gray-50">
      <ContentSection 
        title="MarkinBOX" 
        subtitle="Dot Peen Marking Machines"
      >
        {/* Hero Section */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-12">
          <div className="flex flex-col items-center max-w-4xl mx-auto text-center">
            <Image
              src="/logos/partners/markinbox.webp"
              alt="MarkinBOX"
              width={300}
              height={100}
              className="object-contain mb-8"
              priority
            />
            
            <div className="space-y-6 text-gray-700">
              <p className="text-lg">
                MarkinBOX - Dot Peen Marking Machines are electromechanically controlled 
                carbide stylus tip assemblies that are used to strike various surfaces 
                in a succession of dots to create permanent marks.
              </p>

              <p className="text-lg">
                These permanent marks help identify a component's part number, date code, 
                serial number, company logo, 2D data matrix marks and any other identifying 
                mark imaginable.
              </p>

              <p className="text-lg">
                Both pneumatic and electrically controlled, dot peen marking machines are 
                fully programmable and customizable for a wide variety of applications.
              </p>
            </div>

            <div className="mt-8 space-y-4">
              <Button
                asChild
                className="bg-brand-blue hover:bg-brand-blue/90 text-white px-8 py-6 text-lg"
              >
                <a 
                  href="https://www.markinbox.com/"
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
              src="https://www.youtube.com/embed/SH_kcLqakvE"
              title="MarkinBOX Video"
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

        {/* CTA Section */}
        <div className="my-8 text-center">
          <Button 
            onClick={() => setIsModalOpen(true)}
            className="bg-brand-blue text-white px-8 py-4 rounded-lg hover:bg-primary/90 transition-colors text-lg font-medium shadow-sm hover:shadow-md"
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