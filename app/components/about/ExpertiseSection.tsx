interface ExpertiseCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
}

const ExpertiseCard = ({ title, description, icon, features }: ExpertiseCardProps) => (
  <div className="group bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl">
    <div className="h-40 bg-brand-blue/10 flex items-center justify-center">
      <div className="w-20 h-20 text-brand-blue group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
    </div>
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-3 text-brand-blue">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="text-gray-600 space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <svg className="w-5 h-5 text-brand-blue mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default function ExpertiseSection() {
  const expertiseData = [
    {
      title: "Industrial Equipment Service",
      description: "Comprehensive maintenance and repair services for all types of industrial equipment, ensuring minimal downtime and optimal performance.",
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      features: ["Preventive Maintenance", "Equipment Diagnostics"]
    },
    {
      title: "CNC Repair",
      description: "Expert repair and maintenance services for CNC machines, keeping your equipment running at peak efficiency.",
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      features: ["Emergency Repairs", "Precision Calibration"]
    },
    {
      title: "Training",
      description: "Comprehensive training programs for operators and maintenance staff to maximize equipment efficiency.",
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      features: ["Operator Training", "Maintenance Workshops"]
    }
  ];

  return (
    <div className="grid md:grid-cols-3 gap-8">
      {expertiseData.map((expertise, index) => (
        <ExpertiseCard key={index} {...expertise} />
      ))}
    </div>
  );
} 