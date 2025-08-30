import { notFound } from "next/navigation";
import DetailPage from "@/components/shared/DetailPage";

const solutionsData = {
  "technology-integration": {
    title: "Technology Integration",
    description: "Smooth implementation of new manufacturing technologies and processes",
    fullDescription: `Our Technology Integration solution provides a structured approach to implementing new manufacturing technologies while maintaining workforce stability and productivity. We focus on minimizing disruption while maximizing adoption and efficiency.`,
    imageUrl: "/images/teddy.jpg",
    methodology: [
      "Technology Impact Assessment",
      "Workforce Readiness Evaluation",
      "Training Need Analysis",
      "Implementation Planning",
      "Change Communication Strategy",
      "Progress Monitoring and Adjustment"
    ],
    benefits: [
      "Smooth technology transition",
      "Minimized productivity disruption",
      "Higher adoption rates",
      "Reduced resistance to change",
      "Maintained employee satisfaction"
    ],
    implementation: {
      phases: "4-phase approach",
      timeline: "Customized to technology scope",
      support: "Ongoing consultation and adjustment"
    }
  },

  "process-transformation": {
    title: "Process Transformation",
    description: "Managing operational changes while maintaining team engagement and productivity",
    fullDescription: `Our Process Transformation solution helps organizations redesign and optimize their operational processes while keeping employees engaged and productive. We emphasize clear communication and inclusive change management practices.`,
    imageUrl: "/images/teddy.jpg",
    methodology: [
      "Process Analysis and Mapping",
      "Impact Assessment",
      "Stakeholder Engagement",
      "Change Strategy Development",
      "Implementation Planning",
      "Performance Monitoring"
    ],
    benefits: [
      "Streamlined operations",
      "Improved efficiency",
      "Maintained employee morale",
      "Clear process documentation",
      "Sustainable improvements"
    ],
    implementation: {
      phases: "3-phase approach",
      timeline: "3-6 months typical duration",
      support: "Continuous monitoring and adjustment"
    }
  },

  "cultural-transition": {
    title: "Cultural Transition",
    description: "Guiding organizations through cultural shifts and modernization",
    fullDescription: `Our Cultural Transition program helps manufacturing organizations navigate significant cultural changes while maintaining workforce stability. We focus on creating inclusive, modern workplace cultures that drive both satisfaction and productivity.`,
    imageUrl: "/images/teddy.jpg",
    methodology: [
      "Cultural Assessment",
      "Vision Development",
      "Change Strategy Creation",
      "Leadership Alignment",
      "Employee Engagement",
      "Progress Measurement"
    ],
    benefits: [
      "Improved workplace culture",
      "Enhanced employee engagement",
      "Stronger organizational values",
      "Better team collaboration",
      "Sustainable cultural change"
    ],
    implementation: {
      phases: "5-phase approach",
      timeline: "6-12 months typical duration",
      support: "Long-term support and guidance"
    }
  }
};

type Props = {
  params: Promise<{ slug: string }>,
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export default async function SolutionPage({ params }: Props) {
  const resolvedParams = await params;
  const solution = solutionsData[resolvedParams.slug as keyof typeof solutionsData];

  if (!solution) {
    notFound();
  }

  return (
    <div className="bg-gray-50">
      <div>
        <h1 className="text-3xl font-bold text-center mb-8">Employee Retention Strategies</h1>
        
        <div className="max-w-4xl mx-auto px-4 text-center mb-8">
          <p className="text-lg text-gray-700">
            Comprehensive strategies for workforce stability and organizational transformation. 
            Regular recognition fosters a culture of appreciation. 
            Provide ongoing training, mentorship, and clear career pathways. 
            Encourage open communication, work-life balance, and wellness initiatives for enhanced morale.
          </p>
        </div>

        <div className="mb-[-60px]">
          <DetailPage 
            data={solution} 
            type="solution" 
            withGenericForm={false}
            backButton={{ 
              text: "Employee Retention", 
              href: "/employee-retention" 
            }} 
          />
        </div>
      </div>
      <section className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 mb-4">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-900">Request Solution Information</h2>
        <p className="text-gray-600 text-center mb-8">
          Interested in {solution.title}? Fill out the form below and we'll get back to you with detailed information.
        </p>
        <form className="space-y-6">
          <input
            type="text"
            name="solutionName"
            value={solution.title}
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