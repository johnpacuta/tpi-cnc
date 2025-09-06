'use client';

import ContentSection from "../components/about/ContentSection";
import ProgramDetail, { ProgramDetailData } from "@/components/training/ProgramDetail";
import ServiceDetail, { ServiceDetailData } from "@/components/training/ServiceDetail";
import Link from "next/link";
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { submitTrainingForm } from '@/app/actions/training';
import type { ContactFormData } from '@/lib/schema';

/*Contact Form JSX*/
type FormErrors = {
  [K in keyof ContactFormData]?: string[];
};

const programs: ProgramDetailData[] = [
    {
        title: "CNC Operator Training",
        duration: "4 weeks",
        description: "Training for CNC machine operation, programming, and maintenance",
        fullDescription: `Our CNC Operator Training program is designed to provide participants with knowledge and hands-on experience in CNC machine operation. This intensive 4-week program covers all essential aspects of CNC operations, from basic principles to advanced techniques.`,
        imageUrl: "/images/teddy.jpg",
        curriculum: [
            "Introduction to CNC Technology",
            "Machine Setup and Operation",
            "Programming Fundamentals",
            "Tool Selection and Management",
            "Quality Control and Inspection",
            "Safety Procedures and Best Practices"
        ],
        outcomes: [
            "Proficiency in CNC machine operation",
            "Understanding of G-code programming",
            "Ability to perform basic maintenance",
            "Knowledge of safety protocols",
            "Quality control expertise"
        ],
        schedule: {
            duration: "4 weeks",
            hoursPerDay: "6-8 hours",
            format: "Combination of classroom and hands-on training"
        }
    },
    {
        title: "Advanced Programming",
        duration: "2 weeks",
        description: "Advanced CNC programming techniques and optimization strategies",
        fullDescription: `Our Advanced Programming course is designed for experienced CNC operators looking to enhance their programming skills. This intensive 2-week program focuses on advanced G-code programming, optimization techniques, and complex machining strategies.`,
        imageUrl: "/images/teddy.jpg",
        curriculum: [
            "Advanced G-code Programming",
            "CAM Software Integration",
            "Complex Toolpath Strategies",
            "Program Optimization Techniques",
            "Multi-axis Programming",
            "Macro Programming"
        ],
        outcomes: [
            "Master complex G-code programming",
            "Optimize machining processes",
            "Create efficient toolpaths",
            "Implement advanced programming techniques",
            "Troubleshoot programming issues"
        ],
        schedule: {
            duration: "2 weeks",
            hoursPerDay: "6-8 hours",
            format: "Hands-on programming workshops and practical exercises"
        }
    },
    {
        title: "Quality Control",
        duration: "1 week",
        description: "Training in measurement, inspection, and quality control procedures",
        fullDescription: `Our Quality Control training program provides instruction in measurement techniques, inspection procedures, and quality control methodologies. This focused 1-week program ensures participants can maintain high manufacturing standards.`,
        imageUrl: "/images/teddy.jpg",
        curriculum: [
            "Measurement Techniques",
            "Inspection Equipment Operation",
            "Quality Standards and Specifications",
            "Documentation Procedures",
            "Statistical Process Control",
            "Non-conformance Handling"
        ],
        outcomes: [
            "Proficient in measurement techniques",
            "Understanding of quality standards",
            "Ability to perform thorough inspections",
            "Documentation and reporting skills",
            "Statistical analysis capabilities"
        ],
        schedule: {
            duration: "1 week",
            hoursPerDay: "6-8 hours",
            format: "Combination of classroom instruction and hands-on practice"
        }
    }
];

const services: ServiceDetailData[] = [

    {
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
    ],
        duration: "1 week",
},
{
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
    ],
    duration: "1 week",
},
    {
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
    ],
        duration: "1 week",
}

];

export default function Training() {
    const [errors, setErrors] = useState<FormErrors>({});

  const ErrorMessage = ({ fieldName }: { fieldName: keyof FormErrors }) => {
    if (!errors[fieldName]?.length) return null;
    return (
      <div className="mt-1 text-sm text-red-600">
        {errors[fieldName]?.map((error, index) => (
          <div key={index}>{error}</div>
        ))}
      </div>
    );
  };

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    // Clear previous errors
    setErrors({});

    toast.promise(
      submitTrainingForm(formData)
        .then((response) => {
          if (!response.success) {
            if (response.fieldErrors) {
              setErrors(response.fieldErrors);
              throw new Error('Please fix the form errors');
            }
            throw new Error(response.error);
          }
          form.reset();
          return response;
        }),
      {
        loading: 'Submitting request...',
        success: 'Request submitted successfully!',
        error: (err) => err.message || 'Failed to submit request'
      }
    );
  }

  // ... trainingPrograms and consultingServices arrays stay the same ...

  return (
    <main className="min-h-screen py-4">
      <ContentSection 
        title="Our Programs" 
        subtitle={
          <>
            Also see our <Link href="/maintenance" className="text-brand-blue hover:underline">current maintenance packages</Link>
          </>
        }
      >
          {/* Inject one or multiple program details */}
          <section className="mb-16 space-y-12" id="programs">
              {programs.map((p, i) => (
                  <ProgramDetail key={i} data={p} />
              ))}
          </section>

          <section className="mb-16 space-y-12" id="services">
              {services.map((p, i) => (
                  <ServiceDetail key={i} data={p} />
              ))}
          </section>


          {/* Contact Form Section */}
        <section className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-semibold mb-2 text-center">Get Started Today</h2>
          <p className="text-gray-600 text-center mb-8">Take the first step towards optimizing your operations</p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-blue ${
                    errors.firstName ? 'border-red-500' : ''
                  }`}
                  required
                />
                <ErrorMessage fieldName="firstName" />
              </div>
              <div className="space-y-2">
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-blue ${
                    errors.lastName ? 'border-red-500' : ''
                  }`}
                  required
                />
                <ErrorMessage fieldName="lastName" />
              </div>
            </div>
            <div className="space-y-2">
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-blue ${
                  errors.email ? 'border-red-500' : ''
                }`}
                required
              />
              <ErrorMessage fieldName="email" />
            </div>
            <div className="space-y-2">
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-blue ${
                  errors.phone ? 'border-red-500' : ''
                }`}
                required
              />
              <ErrorMessage fieldName="phone" />
            </div>
            <div className="space-y-2">
              <select 
                name="serviceType"
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-blue ${
                  errors.serviceType ? 'border-red-500' : ''
                }`}
                required
              >
                <option value="">Select Service Type</option>
                <option value="training">Training Program</option>
                <option value="consulting">Consulting Service</option>
              </select>
              <ErrorMessage fieldName="serviceType" />
            </div>
            <div className="space-y-2">
              <textarea
                name="message"
                placeholder="Additional Information"
                rows={4}
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-blue ${
                  errors.message ? 'border-red-500' : ''
                }`}
              ></textarea>
              <ErrorMessage fieldName="message" />
            </div>
            <button
              type="submit"
              className="w-full bg-brand-blue text-white px-6 py-3 rounded-lg hover:bg-brand-blue/80 transition-colors"
            >
              Submit Request
            </button>
          </form>
        </section>
      </ContentSection>



    </main>
  );
}