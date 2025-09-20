import { notFound } from "next/navigation";
import DetailPage from "@/components/shared/DetailPage";

const pageData = {
  title: "3D Printing",
  duration: "Varies by project",
  description: "Advanced additive manufacturing solutions for modern production needs",
  fullDescription: `Our state-of-the-art 3D printing services offer innovative solutions for rapid prototyping and production manufacturing. We utilize the latest in additive manufacturing technology to create precise, complex parts with a wide range of materials.`,
  imageUrl: "/images/3DPrinting.jpg",
  //methodology: [],
  benefits: [
    "Rapid prototyping capabilities",
    "Complex geometries production",
    "Material flexibility options",
    "High precision results",
    "Fast turnaround times"
  ],
  features: [
    "Layer resolution down to 20 microns",
    "Build volume up to 300x300x300mm",
    "Compatible with industrial-grade materials",
    "Full color and multi-material printing capabilities",
    "Post-processing and finishing services"
  ],
  //specifications: [],
  //curriculum: [],
  //outcomes: [],
  schedule: {
    duration: "Project-dependent",
    format: "Custom manufacturing solutions",
    implementation: "Rapid prototyping to full production runs"
  },
  //process: [],
  useCases: [
      "Rapid concept models for design validation",
      "Functional prototypes for fit and assembly testing",
      "Low-volume production of end-use plastic parts",
      "Custom jigs, fixtures, and assembly aids",
      "Replacement components and legacy parts obsolescence",
      "Customized housings, brackets, and mounts"
  ],
  includes: [
    "Material consultation and selection",
    "DFAM (Design for Additive Manufacturing) review",
    "Pre-print slicing and optimization",
    "Quality inspection and dimensional report (on request)",
    "Surface finishing and post-processing options",
    "Packaging and shipping"
  ]
};

export default async function ServiceDetailPage() {

  return (
    <div className="bg-gray-50">
      <div className="mb-[-60px]">
        <DetailPage 
          data={pageData}
          type="service" 
          withGenericForm={false}
          backButton={{ 
            text: "Services",
            href: "/services"
          }} 
        />
      </div>
      <section className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 mb-4">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-900">Request Service Information</h2>
        <p className="text-gray-600 text-center mb-8">
          Interested in {pageData.title}? Fill out the form below and we'll get back to you with detailed information.
        </p>
        <form className="space-y-6">
          <input
            type="text"
            name="serviceName"
            value={pageData.title}
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