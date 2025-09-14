"use client"

import { notFound } from 'next/navigation';
import ContentSection from '@/app/components/about/ContentSection';
import { useState, use } from 'react';

// Define the service data structure
interface ServiceData {
  title: string;
  focus: string;
  observationSteps: string[];
  actionPlan: {
    year1: string[];
    year3: string[];
    year5: string[];
  };
  roiPotential: {
    year1: string;
    year3: string;
    year5: string;
  };
}

// Service data mapping
const servicesData: Record<string, ServiceData> = {
  'maintenance-excellence': {
    title: 'Maintenance Excellence',
    focus: 'Implementing 5S and KPI monitoring to improve maintenance efficiency and equipment reliability.',
    observationSteps: [
      'Conduct a comprehensive audit of current maintenance processes, tools, and workspace organization.',
      'Review existing equipment performance data and maintenance records.',
      'Interview maintenance staff to identify pain points and bottlenecks.',
      'Assess current KPI tracking methods and data accuracy.',
    ],
    actionPlan: {
      year1: [
        'Implement 5S methodology in maintenance areas to organize tools, parts, and workflows.',
        'Develop and deploy key KPIs aligned with client objectives.',
        'Train maintenance teams on 5S and KPI usage for continuous improvement.',
      ],
      year3: [
        'Refine KPI dashboards with real-time data integration and automated reporting.',
        'Introduce predictive maintenance techniques based on data trends.',
        'Embed a culture of continuous improvement with regular 5S audits and maintenance reviews.',
      ],
      year5: [
        'Scale best practices across multiple facilities or departments.',
        'Leverage advanced analytics for root cause analysis and proactive maintenance planning.',
        'Establish maintenance excellence as a competitive advantage with documented impact on uptime and costs.',
      ],
    },
    roiPotential: {
      year1: '10-15% reduction in downtime and maintenance-related delays.',
      year3: '20-30% improvement in maintenance efficiency and equipment availability.',
      year5: '40%+ reduction in maintenance costs and significant extension of equipment lifespan.',
    },
  },
  'lean-manufacturing': {
    title: 'Lean Manufacturing',
    focus: 'Waste elimination and process efficiency enhancement.',
    observationSteps: [
      'Perform value stream mapping to identify process bottlenecks and waste areas.',
      'Analyze production cycle times, inventory levels, and defect rates.',
      'Engage operators and supervisors in identifying inefficiencies.',
      'Review existing quality control and workflow systems.',
    ],
    actionPlan: {
      year1: [
        'Launch targeted lean projects focusing on high-impact areas (e.g., setup time reduction, 5S shop floor organization).',
        'Train staff in lean principles and problem-solving tools.',
        'Establish baseline metrics for waste and process time.',
      ],
      year3: [
        'Expand lean initiatives to encompass supplier integration and logistics.',
        'Implement continuous flow production and pull systems (Kanban).',
        'Develop cross-functional teams for ongoing lean improvement projects.',
      ],
      year5: [
        'Achieve full lean transformation with a culture of continuous improvement embedded.',
        'Deploy advanced lean tools such as Total Productive Maintenance (TPM) and Six Sigma integration.',
        'Realize optimized inventory and throughput with minimized variability.',
      ],
    },
    roiPotential: {
      year1: '5-10% reduction in waste and operational costs.',
      year3: '15-25% increase in production efficiency and on-time delivery.',
      year5: '30-40% overall cost savings and improved customer satisfaction.',
    },
  },
  'smart-manufacturing': {
    title: 'Smart Manufacturing',
    focus: 'Adoption of IoT, automation, and data analytics for enhanced production and maintenance.',
    observationSteps: [
      'Evaluate current technology infrastructure and data capabilities.',
      'Identify critical equipment and processes for IoT sensor integration.',
      'Assess readiness for automation and data analytics adoption.',
      "Understand client's digital maturity and workforce skills.",
    ],
    actionPlan: {
      year1: [
        'Pilot IoT sensor deployment on key machinery for real-time monitoring.',
        'Establish cloud-based data collection and visualization platforms.',
        'Train staff on new digital tools and data interpretation.',
      ],
      year3: [
        'Scale IoT and automation solutions across production lines.',
        'Implement predictive maintenance algorithms using collected data.',
        'Integrate manufacturing execution systems (MES) for end-to-end visibility.',
      ],
      year5: [
        'Fully automated, data-driven smart factory environment with AI-enhanced decision-making.',
        'Continuous optimization through machine learning models and digital twins.',
        'Workforce upskilled for managing and innovating with Industry 4.0 technologies.',
      ],
    },
    roiPotential: {
      year1: '5-10% improvement in equipment uptime and data-driven insights.',
      year3: '20-35% reduction in unplanned downtime and improved process quality.',
      year5: '50%+ gains in operational agility, significant cost reduction, and enhanced market competitiveness.',
    },
  },
  // ... Add similar data structures for 'implementation-support'
};

export default function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  const [selectedYear, setSelectedYear] = useState<'year1' | 'year3' | 'year5'>('year1');
  const service = servicesData[resolvedParams.slug];

  if (!service) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <ContentSection
        title={service.title}
        subtitle={service.focus}
        className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8"
      >
        {/* Observation Steps Section */}
        <section className="mb-8 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-gray-900 border-b pb-2">Our Approach</h2>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            {service.observationSteps.map((step, index) => (
              <div 
                key={index} 
                className={`
                  flex items-center
                  p-4 sm:p-6
                  group
                  border-b last:border-b-0
                  hover:bg-gray-50
                  transition-colors duration-300
                `}
              >
                <div className="w-16 sm:w-24 flex-shrink-0 text-center">
                  <span className="text-brand-blue font-bold text-lg sm:text-xl">
                    {(index + 1).toString().padStart(2, '0')}
                  </span>
                </div>
                
                <div className="flex-grow">
                  <p className="text-gray-700 text-base sm:text-lg">
                    {step}
                  </p>
                </div>

                <div className="w-8 flex-shrink-0 text-brand-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  →
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Timeline and Implementation Section */}
        <section className="mb-8 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-gray-900 border-b pb-2">Strategic Implementation</h2>
          
          {/* Timeline */}
          <div className="relative mb-8 sm:mb-12">
            {/* Timeline line with gradient */}
            <div className="absolute top-1/2 left-0 w-full -translate-y-1/2">
              <div className="h-1 bg-gradient-to-r from-gray-200 via-brand-blue to-gray-200"></div>
            </div>
            
            {/* Timeline nodes */}
            <div className="relative flex justify-between max-w-xs sm:max-w-2xl mx-auto">
              {['year1', 'year3', 'year5'].map((year) => (
                <button
                  key={year}
                  onClick={() => setSelectedYear(year as 'year1' | 'year3' | 'year5')}
                  className="relative flex flex-col items-center group"
                >
                  {/* Node with pulse animation */}
                  <div className={`relative w-6 h-6 sm:w-8 sm:h-8 rounded-full 
                    transition-all duration-300 transform
                    ${selectedYear === year 
                      ? 'bg-brand-blue scale-110 ring-4 ring-brand-blue/30' 
                      : 'bg-white border-2 border-brand-blue group-hover:border-4 group-hover:border-brand-blue/50'}`}
                  >
                    {/* Inner dot */}
                    <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                      w-2 h-2 sm:w-3 sm:h-3 rounded-full
                      ${selectedYear === year 
                        ? 'bg-white' 
                        : 'bg-brand-blue group-hover:bg-brand-blue/50'}`}
                    />
                  </div>
                  
                  {/* Year label */}
                  <span className={`mt-4 text-sm sm:text-base font-semibold 
                    transition-all duration-300 transform
                    ${selectedYear === year 
                      ? 'text-brand-blue scale-110' 
                      : 'text-gray-600 group-hover:text-brand-blue/70'}`}>
                    Year {year.slice(4)}
                  </span>
                  
                  {/* Floating achievement badge */}
                  <div className={`absolute -top-12 left-1/2 -translate-x-1/2 
                    bg-white shadow-lg rounded-lg px-3 py-2 
                    transition-all duration-300
                    ${selectedYear === year 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-2 pointer-events-none'}`}>
                    <span className="text-xs sm:text-sm font-medium text-gray-800 whitespace-nowrap">
                      {year === 'year1' ? 'Foundation' : year === 'year3' ? 'Optimization' : 'Excellence'}
                    </span>
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 
                      rotate-45 w-2 h-2 bg-white">
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Content Display */}
          <div className="bg-white rounded-xl shadow-lg p-4 sm:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {/* Action Plan */}
              <div className="space-y-4 sm:space-y-6">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900">Action Plan</h3>
                <ul className="space-y-3 sm:space-y-4">
                  {service.actionPlan[selectedYear].map((action, index) => (
                    <li key={index} className="flex items-start">
                      <span className="flex-shrink-0 mr-2 sm:mr-3 text-brand-blue text-lg sm:text-xl">→</span>
                      <span className="text-base sm:text-lg text-gray-700">{action}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* ROI Potential */}
              <div className="space-y-4 sm:space-y-6">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900">Expected Returns</h3>
                <div className="bg-gray-50 rounded-lg p-4 sm:p-6 border-l-4 border-brand-blue">
                  <p className="text-xl sm:text-3xl font-bold text-brand-blue break-words">
                    {service.roiPotential[selectedYear]}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-brand-blue to-blue-600 rounded-xl shadow-xl p-4 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Ready to Transform Your Operations?</h2>
            <p className="text-white/90 mb-4 sm:mb-6 text-sm sm:text-base">Let's discuss how we can customize this solution for your specific needs.</p>
            <button className="bg-white text-brand-blue font-bold py-2 sm:py-3 px-6 sm:px-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-sm sm:text-base">
              Contact Us Today
            </button>
          </div>
        </section>
      </ContentSection>
    </main>
  );
}  