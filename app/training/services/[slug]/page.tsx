import DetailPage from "@/components/shared/DetailPage";

// This would typically come from a database or CMS
const servicesData = {
  "process-optimization": {
    title: "Process Optimization",
    description: "Expert analysis and improvement of manufacturing processes",
    fullDescription: "Our process optimization service provides analysis and improvement strategies for your manufacturing processes. We help identify bottlenecks, reduce waste, and increase efficiency.",
    features: [
      "Detailed process analysis and mapping",
      "Identification of improvement opportunities",
      "Implementation of lean manufacturing principles",
      "Performance metrics and monitoring",
      "Staff training and development"
    ],
    imageUrl: "/images/teddy.jpg",
    benefits: [
      "Increased productivity",
      "Reduced operational costs",
      "Improved quality control",
      "Enhanced workflow efficiency",
      "Better resource utilization"
    ],
    includes: [
      "Initial assessment and analysis",
      "Custom optimization strategy",
      "Implementation support",
      "Staff training",
      "Follow-up evaluation"
    ]
  },
  "facility-planning": {
    title: "Facility Planning",
    description: "Strategic planning for facility layout and workflow optimization",
    fullDescription: "Our facility planning service delivers solutions for optimizing your manufacturing space and workflow. We focus on creating efficient, safe, and productive environments.",
    features: [
      "Detailed space utilization analysis",
      "Workflow mapping and optimization",
      "Equipment placement strategies",
      "Safety and compliance considerations",
      "Future growth accommodation"
    ],
    imageUrl: "/images/teddy.jpg",
    benefits: [
      "Optimized space utilization",
      "Improved material flow",
      "Enhanced worker safety",
      "Increased operational efficiency",
      "Future-proof facility design"
    ],
    includes: [
      "Facility assessment",
      "Layout optimization plan",
      "3D visualization",
      "Implementation roadmap",
      "Cost-benefit analysis"
    ]
  },
  "implementation-support": {
    title: "Implementation Support",
    description: "Guidance and support for new system implementation",
    fullDescription: "Our implementation support service ensures smooth transition and integration of new systems and processes. We provide guidance and hands-on support.",
    features: [
      "System integration planning",
      "Change management strategies",
      "Staff training and adaptation",
      "Performance monitoring",
      "Troubleshooting and optimization"
    ],
    imageUrl: "/images/teddy.jpg",
    benefits: [
      "Smooth system transition",
      "Minimized disruption",
      "Accelerated adoption",
      "Reduced implementation risks",
      "Optimized system performance"
    ],
    includes: [
      "Implementation planning",
      "Staff training programs",
      "On-site support",
      "Progress monitoring",
      "Post-implementation review"
    ]
  }
};

type Props = {
  params: Promise<{ slug: string }>,
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export default async function ServiceDetail({ params }: Props) {
  const resolvedParams = await params;
  const service = servicesData[resolvedParams.slug as keyof typeof servicesData];

  if (!service) {
    return <div>Service not found</div>;
  }

  const pageData = {
    title: service.title,
    description: service.description,
    fullDescription: service.fullDescription,
    imageUrl: service.imageUrl,
    benefits: service.benefits,
    features: service.features,
    includes: service.includes
  };

  return (
    <div className="bg-gray-50">
      <div className="mb-[-60px]">
        <DetailPage 
          data={pageData}
          type="service"
          withGenericForm={false}
          backButton={{
            text: "Services",
            href: "/training"
          }}
        />
      </div>
      <section className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 mb-4">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-900">Request Training Service Information</h2>
        <p className="text-gray-600 text-center mb-8">
          Interested in {service.title}? Fill out the form below and we'll get back to you with detailed information.
        </p>
        <form className="space-y-6">
          <input
            type="text"
            name="serviceName"
            value={service.title}
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
            className="w-full bg-black text-white px-6 py-3 rounded-xl hover:bg-black/90 transition-all duration-300"
          >
            Request Information
          </button>
        </form>
      </section>
    </div>
  );
} 