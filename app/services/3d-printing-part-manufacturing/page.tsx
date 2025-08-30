import { Metadata } from "next";
import ContentSection from "../../components/about/ContentSection";
import Link from "next/link";
import Image from "next/image";
import ContactForm from "@/components/shared/ContactForm";

export const metadata: Metadata = {
  title: "3D Printing & Part Manufacturing | TPI CNC Inc",
  description: "Advanced 3D printing and manufacturing solutions for custom parts, prototypes, and production-level manufacturing needs.",
};

type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function ThreeDPrintingPage({ params, searchParams }: Props) {
  const services = [
    {
      title: "3D Printing Services",
      description: "Advanced additive manufacturing solutions for rapid prototyping and production",
      imageUrl: "/images/teddy.jpg", // Replace with relevant image
      features: [
        "High-precision 3D printing for complex geometries",
        "Rapid prototyping and iterative design capabilities",
        "Multiple material options including plastics, resins, and metals",
        "Quality control and dimensional accuracy verification",
        "Fast turnaround times for urgent projects",
        "Scalable from single prototypes to production runs",
      ]
    },
    {
      title: "Part Manufacturing",
      description: "Traditional and hybrid manufacturing solutions combining CNC machining with modern techniques",
      imageUrl: "/images/teddy.jpg", // Replace with relevant image
      features: [
        "Precision CNC machining for complex parts",
        "Integration of 3D printing and traditional manufacturing",
        "Multi-axis machining capabilities",
        "Wide range of material options including metals and composites",
        "Production-grade quality assurance",
        "Efficient batch production processes",
      ]
    }
  ];

  return (
    <main className="min-h-screen py-4">
      <ContentSection 
        title="Part Manufacturing" 
        subtitle="Manufacturing solutions combining traditional and modern techniques"
      >
        <section className="mb-12">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg mb-6">
              When 3D printing isn't suitable for your application, we offer a reliable
              alternative through our extensive network of specialized manufacturers. Here's How:
            </p>
            <ul className="space-y-3 mb-12">
              <li className="flex items-start">
                <span className="text-brand-blue mr-2">•</span>
                Expert 3D Design Services
              </li>
              <li className="flex items-start">
                <span className="text-brand-blue mr-2">•</span>
                Manufacturer Referral Network
              </li>
              <li className="flex items-start">
                <span className="text-brand-blue mr-2">•</span>
                Seamless Collaboration & Quality Assurance
              </li>
              <li className="flex items-start">
                <span className="text-brand-blue mr-2">•</span>
                Customer-Centric Approach
              </li>
            </ul>
          </div>
        </section>

        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <Link 
                href={`/services/3d-printing/${service.title.toLowerCase().replace(/ /g, '-')}`}
                key={index}
                className="group"
              >
                <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <div className="relative h-48">
                    <Image
                      src={service.imageUrl}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-brand-blue transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600">{service.description}</p>
                    <ul className="mt-4 space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="text-gray-600 flex items-start">
                          <span className="mr-2">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4 flex items-center text-brand-blue font-medium">
                      Learn More 
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-semibold mb-2 text-center">Request a Quote</h2>
          <p className="text-gray-600 text-center mb-8">Let's discuss your manufacturing needs and develop a custom solution</p>
          <ContactForm />
        </section>
      </ContentSection>
    </main>
  );
} 