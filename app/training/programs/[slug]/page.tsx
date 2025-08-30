import DetailPage from "@/components/shared/DetailPage";

// This would typically come from a database or CMS
const programsData = {
  "cnc-operator-training": {
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
  
  "advanced-programming": {
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

  "quality-control": {
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
};

type Props = {
  params: Promise<{ slug: string }>,
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export default async function ProgramDetail({ params }: Props) {
  const resolvedParams = await params;
  const program = programsData[resolvedParams.slug as keyof typeof programsData];

  if (!program) {
    return <div>Program not found</div>;
  }

  const pageData = {
    title: program.title,
    duration: program.duration,
    description: program.description,
    fullDescription: program.fullDescription,
    imageUrl: program.imageUrl,
    curriculum: program.curriculum,
    outcomes: program.outcomes,
    schedule: {
      duration: program.schedule.duration,
      format: program.schedule.format,
      implementation: program.schedule.hoursPerDay // mapping hoursPerDay to implementation
    }
  };

  return (
    <div className="bg-gray-50">
      <div className="mb-[-60px]">
        <DetailPage 
          data={pageData}
          type="training"
          withGenericForm={false}
          backButton={{
            text: "Programs",
            href: "/training"
          }}
        />
      </div>
      <section className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 mb-4">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-900">Request Training Program Information</h2>
        <p className="text-gray-600 text-center mb-8">
          Interested in {program.title}? Fill out the form below and we'll get back to you with detailed information.
        </p>
        <form className="space-y-6">
          <input
            type="text"
            name="programName"
            value={program.title}
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