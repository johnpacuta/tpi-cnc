import { notFound } from "next/navigation";
import DetailPage from "@/components/shared/DetailPage";

const strategiesData = {
  "employee-development-programs": {
    title: "Employee Development Programs",
    duration: "Ongoing",
    description: "Structured career advancement and skill development pathways for manufacturing professionals",
    fullDescription: `Our Employee Development Programs provide comprehensive career growth opportunities designed specifically for manufacturing professionals. We focus on creating clear advancement pathways while developing both technical and soft skills essential for long-term success.`,
    imageUrl: "/images/teddy.jpg",
    curriculum: [
      "Skills Assessment and Gap Analysis",
      "Personalized Development Planning",
      "Technical Skills Enhancement",
      "Leadership Development",
      "Cross-training Opportunities",
      "Mentorship Programs"
    ],
    outcomes: [
      "Clear career progression paths",
      "Improved employee satisfaction",
      "Enhanced skill sets",
      "Higher retention rates",
      "Stronger internal leadership pipeline"
    ],
    schedule: {
      duration: "Ongoing",
      format: "Combination of structured training and on-the-job development",
      implementation: "Customized to organization size and needs"
    }
  },
  
  "workplace-culture-enhancement": {
    title: "Workplace Culture Enhancement",
    duration: "3-6 months",
    description: "Creating an engaging and supportive work environment that promotes long-term commitment",
    fullDescription: `Our Workplace Culture Enhancement program helps organizations build and maintain a positive, inclusive, and engaging work environment. We focus on developing sustainable practices that foster employee satisfaction and long-term commitment.`,
    imageUrl: "/images/teddy.jpg",
    curriculum: [
      "Cultural Assessment and Analysis",
      "Employee Engagement Strategies",
      "Communication Framework Development",
      "Recognition Program Design",
      "Work-Life Balance Initiatives",
      "Team Building Activities"
    ],
    outcomes: [
      "Improved workplace satisfaction",
      "Stronger team cohesion",
      "Enhanced communication",
      "Reduced turnover",
      "Better work-life balance"
    ],
    schedule: {
      duration: "3-6 months",
      format: "Workshops, consulting sessions, and implementation support",
      implementation: "Phased approach with regular assessment and adjustment"
    }
  },

  "leadership-training": {
    title: "Leadership Training",
    duration: "8 weeks",
    description: "Developing effective leaders who can motivate and retain valuable team members",
    fullDescription: `Our Leadership Training program equips current and aspiring leaders with the skills needed to effectively manage teams, drive engagement, and retain top talent. The program combines theoretical knowledge with practical application in manufacturing environments.`,
    imageUrl: "/images/teddy.jpg",
    curriculum: [
      "Effective Communication",
      "Team Management",
      "Conflict Resolution",
      "Performance Management",
      "Change Leadership",
      "Employee Development"
    ],
    outcomes: [
      "Improved leadership capabilities",
      "Better team management skills",
      "Enhanced employee engagement",
      "Reduced workplace conflicts",
      "More effective performance management"
    ],
    schedule: {
      duration: "8 weeks",
      format: "Weekly workshops with practical assignments",
      implementation: "Interactive sessions with real-world applications"
    }
  }
};

type Props = {
  params: Promise<{ slug: string }>,
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export default async function StrategyPage({ params }: Props) {
  const resolvedParams = await params;
  const strategy = strategiesData[resolvedParams.slug as keyof typeof strategiesData];

  if (!strategy) {
    notFound();
  }

  return (
    <div className="bg-gray-50">
      <div className="mb-[-60px]">
        <DetailPage 
          data={strategy} 
          type="strategy" 
          withGenericForm={false}
          backButton={{ 
            text: "Employee Retention", 
            href: "/employee-retention" 
          }} 
        />
      </div>
      <section className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 mb-4">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-900">Request Strategy Information</h2>
        <p className="text-gray-600 text-center mb-8">
          Interested in {strategy.title}? Fill out the form below and we'll get back to you with detailed information.
        </p>
        <form className="space-y-6">
          <input
            type="text"
            name="strategyName"
            value={strategy.title}
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