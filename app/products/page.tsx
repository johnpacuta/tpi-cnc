import ContentSection from "../components/about/ContentSection";
import Image from "next/image";
import Link from "next/link";

export default function Products() {
  const generalProducts = [
    {
      name: "CNC Milling Machine X2000",
      brand: "Mazak",
      description: "High-precision 5-axis milling machine for complex parts",
      imageUrl: "/products/placeholder-product.jpg"
    },
    {
      name: "Industrial Lathe Pro",
      brand: "Correa",
      description: "Heavy-duty lathe with advanced control systems",
      imageUrl: "/products/placeholder-product.jpg"
    },
    {
      name: "Automated Tool Changer",
      brand: "TPI",
      description: "24-position tool changer with rapid exchange system",
      imageUrl: "/products/placeholder-product.jpg"
    }
  ];

  const renishawProducts = [
    {
      name: "CMM Probe System",
      description: "High-accuracy measurement probe for coordinate measuring machines",
      imageUrl: "/products/placeholder-product.jpg"
    },
    {
      name: "Machine Tool Probe",
      description: "Precision workpiece measurement and tool setting probe",
      imageUrl: "/products/placeholder-product.jpg"
    },
    {
      name: "Calibration System",
      description: "Advanced laser calibration system for machine tools",
      imageUrl: "/products/placeholder-product.jpg"
    }
  ];

  const elliotProducts = [
    {
      name: "CNC Grinding Machine",
      description: "Precision surface grinding with digital control",
      imageUrl: "/products/placeholder-product.jpg"
    },
    {
      name: "Tool & Cutter Grinder",
      description: "Versatile grinding solution for various cutting tools",
      imageUrl: "/products/placeholder-product.jpg"
    },
    {
      name: "Universal Grinder",
      description: "Multi-purpose grinding machine for diverse applications",
      imageUrl: "/products/placeholder-product.jpg"
    }
  ];

  return (
    <main className="min-h-screen py-4">

      <ContentSection 
        title="Featured Products" 
        subtitle="World-class machinery and tooling from industry-leading manufacturers"
      >
        {/* General Products Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-8">Featured Machines</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {generalProducts.map((product, index) => (
              <Link 
                href={`/products/${product.name.toLowerCase().replace(/ /g, '-')}`}
                key={index}
                className="group"
              >
                <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-[1.02]">
                  <div className="relative">
                    <Image
                      src={product.imageUrl}
                      alt={product.name}
                      width={300}
                      height={300}
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-sm text-primary font-medium">{product.brand}</p>
                    <h3 className="text-lg font-semibold mt-1">{product.name}</h3>
                    <p className="text-gray-600 mt-2">{product.description}</p>
                    <span className="mt-4 text-primary font-medium group-hover:text-primary/80 inline-block">
                      Learn More →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Brand Carousels */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-8">Featured Brands</h2>
          
          {/* Renishaw Products */}
          <div className="mb-12">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-medium">Renishaw</h3>
              <button className="text-primary font-medium hover:text-primary/80">
                View All Renishaw Products →
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {renishawProducts.map((product, index) => (
                <Link 
                  href={`/products/${product.name.toLowerCase().replace(/ /g, '-')}`}
                  key={index}
                  className="group"
                >
                  <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-[1.02]">
                    <div className="relative">
                      <Image
                        src={product.imageUrl}
                        alt={product.name}
                        width={300}
                        height={300}
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-semibold">{product.name}</h3>
                      <p className="text-gray-600 mt-2">{product.description}</p>
                      <span className="mt-4 text-primary font-medium group-hover:text-primary/80 inline-block">
                        Learn More →
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Elliot Products */}
          <div className="mb-12">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-medium">Elliot</h3>
              <button className="text-primary font-medium hover:text-primary/80">
                View All Elliot Products →
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {elliotProducts.map((product, index) => (
                <Link 
                  href={`/products/${product.name.toLowerCase().replace(/ /g, '-')}`}
                  key={index}
                  className="group"
                >
                  <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-[1.02]">
                    <div className="relative">
                      <Image
                        src={product.imageUrl}
                        alt={product.name}
                        width={300}
                        height={300}
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-semibold">{product.name}</h3>
                      <p className="text-gray-600 mt-2">{product.description}</p>
                      <span className="mt-4 text-primary font-medium group-hover:text-primary/80 inline-block">
                        Learn More →
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Need Help Choosing?</h2>
          <p className="mb-6">Our team of experts is here to help you find the perfect solution.</p>
          <button className="bg-black/80 text-white px-6 py-3 rounded-lg hover:bg-black transition-colors">
            Contact Us
          </button>
        </section>
      </ContentSection>
    </main>
  )
} 