import ContentSection from "@/app/components/about/ContentSection";
import Image from "next/image";
import Link from "next/link";

export default function Deals() {
  return (
    <main className="min-h-screen py-20 bg-brand-white">
      <ContentSection title="Special Deals & Promotions">
        <div className="max-w-4xl mx-auto">
          {/* Main Image */}
          <div className="relative w-full h-[400px] mb-4">
            <Image
              src="/images/teddy.jpg"
              alt="Special Deals & Promotions"
              fill
              className="object-cover rounded-lg"
            />
          </div>

          <p className="text-lg leading-relaxed text-gray-700 mb-12">
            Take advantage of our limited-time offers and exclusive discounts on premium services.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8 mt-16 mb-16">
            {/* Deal Card */}
            <Link 
              href="/deals/starter-bundle"
              className="group"
            >
              <div className="bg-white rounded-xl p-6 border-2 border-gray-100 group-hover:border-brand-blue shadow-lg group-hover:shadow-brand-blue/20 transition-all duration-300">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">Starter Bundle</h3>
                  <span className="bg-brand-blue text-white px-4 py-1.5 rounded-full text-sm font-medium tracking-wide uppercase shadow-md">
                    Save 20%
                  </span>
                </div>
                <p className="text-gray-600 mb-6">
                  Get started with our basic package including essential features at a discounted price.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500 bg-gray-100 px-3 py-1.5 rounded-full text-sm">
                    Expires in: <span className="font-semibold text-gray-900">5 days</span>
                  </span>
                  <span className="bg-brand-blue text-white px-6 py-2.5 rounded-lg font-semibold tracking-wide uppercase shadow-md group-hover:shadow-lg group-hover:scale-105 transition-all duration-300">
                    Learn More
                  </span>
                </div>
              </div>
            </Link>
            
            {/* Add more deal cards as needed */}
          </div>
        </div>
      </ContentSection>
    </main>
  )
} 