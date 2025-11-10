import DetailPage from "@/components/shared/DetailPage";

// This would typically come from your database/CMS
const getProductBySlug = (slug: string) => {
  // Example product data - replace with your actual data source
  const products = {
    "cnc-milling-machine-x2000": {
      name: "CNC Milling Machine X2000",
      brand: "Mazak",
      description: "Revolutionary 5-axis milling machine delivering unmatched precision",
      fullDescription: `Experience unprecedented machining capabilities with the X2000, our flagship CNC milling system. 
        Engineered for excellence, this state-of-the-art 5-axis machine combines innovative technology with superior 
        reliability to revolutionize your manufacturing process. Whether you're crafting intricate aerospace components 
        or high-precision medical devices, the X2000 delivers exceptional results with remarkable efficiency.`,
      imageUrl: ["/products/placeholder-product.jpg", "/images/banner.png"],
      specifications: [
        { label: "Work Envelope", value: "800 x 600 x 500 mm" },
        { label: "Maximum Spindle Speed", value: "15,000 RPM" },
        { label: "Linear Axis Travel", value: "X: 800mm, Y: 600mm, Z: 500mm" },
        { label: "Tool Magazine Capacity", value: "30 tools with rapid exchange" },
        { label: "Advanced Control System", value: "MAZATROL SmoothX with AI integration" }
      ],
      benefits: [
        "Industry-leading surface finish quality with micron-level precision",
        "Up to 40% reduction in machining cycle times",
        "Advanced thermal compensation for consistent accuracy",
        "Seamless integration with robotic automation systems",
        "Smart energy management reducing operational costs by 25%"
      ],
      useCases: [
        "High-precision aerospace structural components",
        "Complex medical implants and surgical instruments",
        "Advanced mold and die manufacturing",
        "Premium automotive performance parts",
        "Precision semiconductor equipment components"
      ],
      features: [
        "AI-powered thermal compensation system",
        "Real-time tool wear monitoring and prediction",
        "Integrated 3D probing and part verification",
        "Industry 4.0 ready with digital twin capability",
        "Eco-friendly power management system"
      ]
    },
    "industrial-lathe-pro": {
      name: "Industrial Lathe Pro",
      brand: "Correa",
      description: "Heavy-duty lathe with advanced control systems",
      fullDescription: `Experience superior turning capabilities with the Industrial Lathe Pro, a robust CNC lathe designed 
        for heavy-duty manufacturing. This advanced machine combines powerful performance with precise control, making it 
        ideal for large-scale production environments. With its state-of-the-art control system and rigid construction, 
        it delivers exceptional accuracy and surface finish quality.`,
      imageUrl: ["/products/placeholder-product.jpg", "/images/banner.png"],
      specifications: [
        { label: "Swing Over Bed", value: "1000mm" },
        { label: "Maximum Turning Length", value: "3000mm" },
        { label: "Spindle Speed Range", value: "0-3000 RPM" },
        { label: "Chuck Size", value: "15-inch hydraulic" },
        { label: "Control System", value: "Fanuc 0i-TF with Manual Guide i" }
      ],
      benefits: [
        "Enhanced productivity with rapid tool changing system",
        "Superior surface finish quality",
        "Reduced setup time with automated features",
        "High rigidity for heavy cutting operations",
        "Energy-efficient operation modes"
      ],
      useCases: [
        "Large shaft manufacturing",
        "Oil and gas industry components",
        "Heavy equipment parts",
        "Power generation components",
        "Marine industry applications"
      ],
      features: [
        "Advanced thermal compensation",
        "Automated tool measurement",
        "Built-in chip management system",
        "Network connectivity for Industry 4.0",
        "Intelligent maintenance monitoring"
      ]
    },
    "automated-tool-changer": {
      name: "Automated Tool Changer",
      brand: "TPI",
      description: "24-position tool changer with rapid exchange system",
      fullDescription: `Maximize your machining efficiency with our state-of-the-art Automated Tool Changer system. 
        Designed for seamless integration with modern CNC machines, this 24-position tool changer dramatically reduces 
        setup times and enhances production workflow. Its robust construction and intelligent control system ensure 
        reliable operation in demanding manufacturing environments.`,
      imageUrl: ["/products/placeholder-product.jpg", "/images/banner.png"],
      specifications: [
        { label: "Tool Capacity", value: "24 positions" },
        { label: "Tool Change Time", value: "1.5 seconds" },
        { label: "Maximum Tool Weight", value: "15 kg" },
        { label: "Maximum Tool Diameter", value: "125mm" },
        { label: "Control Interface", value: "Universal CNC compatibility" }
      ],
      benefits: [
        "Reduced machine downtime",
        "Increased production efficiency",
        "Minimal operator intervention required",
        "Extended tool life management",
        "Improved process reliability"
      ],
      useCases: [
        "High-volume production facilities",
        "Automated manufacturing cells",
        "Aerospace component manufacturing",
        "Medical device production",
        "Automotive parts manufacturing"
      ],
      features: [
        "Smart tool monitoring system",
        "Automatic tool length compensation",
        "Remote operation capability",
        "Integrated tool life tracking",
        "Emergency backup system"
      ]
    }
  };

  return products[slug as keyof typeof products];
};

export default async function ProductDetails({ 
  params 
}: {
    params: Promise<{ slug: string }>
}) {
  const resolvedParams = await params;
  const product = getProductBySlug(resolvedParams.slug);

  if (!product) {
    return <div>Product not found</div>;
  }

  // Transform product data to match DetailPage props with product-specific focus
  const detailPageData = {
    title: product.name,
    description: product.description,
    fullDescription: product.fullDescription,
    imageUrl: product.imageUrl,
    specifications: product.specifications.map(spec => `${spec.label}: ${spec.value}`),
    benefits: product.benefits,
    useCases: product.useCases,
    features: product.features,
    implementation: {
      phases: "Product Implementation",
      timeline: "Contact us for delivery timeline",
      support: "Full technical support and training included"
    },
    type: "product",
  };

  return (
    <div className="bg-gray-50">
        <div className="mb-[-60px]">
            <DetailPage 
                data={detailPageData} 
                type="product" 
                withGenericForm={false}
                backButton={{ 
                    text: "Products", 
                    href: "/products" 
                }} 
            />
        </div>
        <section className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 mb-4">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-900">Request Product Information</h2>
        <p className="text-gray-600 text-center mb-8">
          Interested in {product.name}? Fill out the form below and we'll get back to you with detailed pricing and availability.
        </p>
        <form className="space-y-6">
          <input
            type="text"
            name="productName"
            value={product.name}
            readOnly
            className="w-full px-4 py-3 rounded-xl border bg-gray-100 text-gray-700 cursor-not-allowed"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="First Name"
              className="w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-primary/50"
              required
            />
            <input
              type="text" 
              placeholder="Last Name"
              className="w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-primary/50"
              required
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-primary/50"
              required
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
          </div>
          <input
            type="text"
            placeholder="Company Name"
            className="w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-primary/50"
          />
          <textarea
            placeholder="Additional Requirements or Questions"
            rows={4}
            className="w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-primary/50"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-primary text-white px-6 py-3 rounded-xl hover:bg-primary/90 transition-all duration-300"
          >
            Request Information
          </button>
        </form>
      </section>
    </div>
  );
} 