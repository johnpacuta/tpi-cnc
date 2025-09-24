"use client";

import ContentSection from "../components/about/ContentSection";
import Image from "next/image";
import ContactModal from "@/components/ContactModal"; // Assuming you have this component
import { useState } from "react";
import {router} from "next/client";

export default function RenishawProducts() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="min-h-screen pt-20 py-8 bg-gray-50">
      <ContentSection 
        title="Renishaw Products & Services" 
        subtitle="Advanced measurement solutions and retrofit services for CNC machines"
      >
        {/* Hero Section with Renishaw Logo */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-12">
          <div className="flex flex-col items-center max-w-4xl mx-auto text-center">
            <Image
              src="/logos/partners/renishaw.png"
              alt="Renishaw Logo"
              width={300}
              height={100}
              className="object-contain mb-8"
            />
            
            <h2 className="text-3xl font-bold mb-6 text-gray-800">
              TPI CNC's Renishaw probe and tool setter retrofit service
            </h2>

            <div className="space-y-4 text-gray-700">
              <p className="text-lg">
                TPI CNC installs Renishaw probing\tool setting systems and software. 
                We will train your operators on how to use Renishaw products safely.
              </p>

              <p className="text-lg">
                Renishaw has many products that simplify probing and tool setting solutions, 
                such as the Set and Inspect Graphical User Interface, GoProbe phone app and 
                other control based Graphical User Interfaces of HMIs.
              </p>

              <p className="text-lg">
                We can also assisting in bringing unused, damaged or obsolete probing 
                systems back to life.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 mt-8 w-full">
              <p className="font-medium text-primary text-lg">
                Note: Our installed Renishaw hardware products are always discounted 
                at least 5% below Renishaw's MSRP and Renishaw's web store prices.
              </p>
            </div>
          </div>
        </div>

        <div className="my-8 text-center">
          <button 
            onClick={() => router.push("/quote")
            }
            className="bg-brand-blue text-white px-8 py-4 rounded-lg hover:bg-primary/90 transition-colors text-lg font-medium shadow-sm hover:shadow-md"
          >
            Request a Quote
          </button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 gap-8 max-w-6xl mx-auto">
          {/* Each product section is now a card */}
          {[
            {
              title: "Spindle Probes for Part Measurement",
              description: "Enhance the efficiency of your CNC machining centres and lathes with our innovative range of automated machine tool probes for workpiece set-up and inspection.",
              videoUrl: "https://www.youtube.com/embed/1-jTKYi3bl4",
              link: "https://www.renishaw.com/en/machine-tool-probes-for-workpiece-set-up-and-inspection--6075",
              linkText: "View Renishaw's Spindle probing products"
            },
            {
              title: "Contact and Non-Contact Tool Setting Solutions",
              description: "Using slip gauges and entering offset data manually takes time and is prone to operator error. Tool setting probes are easily installed on machining centres and CNC turning centres, allowing automated operation with the following benefits:",
              doubleVideo: true,
              videoUrl1: "https://www.youtube.com/embed/LAYMWlIRVOw",
              videoUrl2: "https://www.youtube.com/embed/RV4zGPd2Aik",
              link: "https://www.renishaw.com/en/tool-setters-and-broken-tool-detectors--6079",
              linkText: "View Renishaw's tool setting solutions"
            },
            {
              title: "AxiSet - Machine Kinematics Diagnosis & Updates",
              description: "AxiSet Check-Up offers an easy and reliable process for analysing the performance of rotary axes and for identifying problems caused by incorrect machine set-up, collisions or wear.",
              videoUrl: "https://www.youtube.com/embed/ttuJtNuvYkQ",
              link: "https://www.renishaw.com/en/axiset-check-up--11353",
              linkText: "View Renishaw's AxiSet page"
            },
            {
              title: "Software",
              description: "Make the most of your probing hardware with a choice of flexible macro and PC-based probing software for a wide range of applications and machine tool controllers.",
              videoUrl: "https://www.youtube.com/embed/3T1EhZWp3WU",
              link: "https://www.renishaw.com/en/powerful-easy-to-use-machine-tool-probe-software--6078",
              linkText: "View Renishaw's software page"
            }
          ].map((product, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm p-8 hover:shadow-md transition-shadow">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">
                {product.title}
              </h3>
              
              <p className="text-gray-700 mb-6">
                {product.description}
              </p>

              {product.doubleVideo ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="aspect-video w-full">
                    <iframe
                      className="w-full h-full rounded-lg"
                      src={product.videoUrl1}
                      title={`${product.title} - Video 1`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                  <div className="aspect-video w-full">
                    <iframe
                      className="w-full h-full rounded-lg"
                      src={product.videoUrl2}
                      title={`${product.title} - Video 2`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>
              ) : (
                <div className="aspect-video w-full mb-6">
                  <iframe
                    className="w-full h-full rounded-lg"
                    src={product.videoUrl}
                    title={product.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              )}

              <a 
                href={product.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-brand-blue hover:underline font-medium"
              >
                {product.linkText} →
              </a>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="my-8 text-center">
          <button
              onClick={() => router.push("/quote")}
            className="bg-brand-blue text-white px-8 py-4 rounded-lg hover:bg-primary/90 transition-colors text-lg font-medium shadow-sm hover:shadow-md"
          >
            Request a Quote
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