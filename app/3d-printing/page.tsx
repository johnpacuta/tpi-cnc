import { notFound } from "next/navigation";
import DetailPage from "@/components/shared/DetailPage";

const servicesData = {
  "3d-printing-services": {
    title: "3D Printing Services",
    duration: "Varies by project",
    description: "Advanced additive manufacturing solutions for modern production needs",
    fullDescription: `Our state-of-the-art 3D printing services offer innovative solutions for rapid prototyping and production manufacturing. We utilize the latest in additive manufacturing technology to create precise, complex parts with a wide range of materials.`,
    imageUrl: "/images/teddy.jpg",
    features: [
      "Layer resolution down to 20 microns",
      "Build volume up to 300x300x300mm",
      "Compatible with industrial-grade materials",
      "Full color and multi-material printing capabilities",
      "Post-processing and finishing services"
    ],
    benefits: [
      "Rapid prototyping capabilities",
      "Complex geometries production",
      "Material flexibility options",
      "High precision results",
      "Fast turnaround times"
    ],
    schedule: {
      duration: "Project-dependent",
      format: "Custom manufacturing solutions",
      implementation: "Rapid prototyping to full production runs"
    }
  },
  /*"part-manufacturing": {
    title: "Part Manufacturing",
    duration: "Varies by project",
    description: "Precision manufacturing combining traditional and modern techniques",
    fullDescription: `Our part manufacturing services blend traditional CNC machining with cutting-edge technologies to deliver high-quality, precision-engineered components for any application.`,
    imageUrl: "/images/teddy.jpg",
    features: [
      "CNC machining with up to 5-axis capabilities",
      "Tolerances as tight as ±0.0005 inches",
      "Broad material selection",
      "Quality control with advanced measurement",
      "Production volumes from prototypes to large batches"
    ],
    benefits: [
      "Precision engineered parts",
      "Hybrid manufacturing capabilities",
      "Material expertise",
      "Quality assured results",
      "Scalable production options"
    ],
    schedule: {
      duration: "Project-dependent",
      format: "Custom manufacturing solutions",
      implementation: "From single parts to production runs"
    }
  }*/
};

type Props = {
  params: Promise<{ slug: string }>,
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export default async function ServiceDetailPage({ params }: Props) {
  const resolvedParams = await params;

  return (
    <div className="bg-gray-50">
      <div className="mb-[-60px]">
        <DetailPage 
          data={servicesData}
          type="service" 
          withGenericForm={false}
          backButton={{ 
            text: "Printing Services", 
            href: "/services/3d-printing-part-manufacturing" 
          }} 
        />
      </div>
      <section className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 mb-4">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-900">Request Service Information</h2>
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
              className="w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-brand-blue/50"
              required
            />
            <input
              type="text" 
              placeholder="Last Name"
              className="w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-brand-blue/50"
              required
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-brand-blue/50"
              required
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-brand-blue/50"
            />
          </div>
          <input
            type="text"
            placeholder="Company Name"
            className="w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-brand-blue/50"
          />
          <textarea
            placeholder="Additional Requirements or Questions"
            rows={4}
            className="w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-brand-blue/50"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-brand-blue text-white px-6 py-3 rounded-xl hover:bg-brand-blue/90 transition-all duration-300"
          >
            Request Information
          </button>
        </form>
      </section>
    </div>
  );
} 