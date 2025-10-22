import Link from "next/link";
import React, {ReactElement} from "react";

interface ServiceCardProps {
  title: string;
  icon: ReactElement;
  description: string;
  features: string[];
  details: string;
  slug: string;
}

export default function ServiceCard({
  title,
  icon,
  description,
  features,
  details,
  slug
}: ServiceCardProps) {
  return (
    <Link 
      href={`/services/${slug}`} 
      className="block group"
    >
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden md:hover:shadow-xl transition-all duration-300 md:transform md:group-hover:-translate-y-1 border border-gray-100">
        {/* Mobile: stacked; Desktop: 4 auto-width columns with icon at far left */}
        <div className="p-4 md:p-6 md:grid md:grid-cols-3 md:gap-6">
          {/* Title & Description (2nd column) */}
          <div className="text-center md:text-left mb-8">
            <div className="mb-8 flex justify-center items-center">
              <div className="flex items-center justify-center w-20 bg-brand-blue/10 rounded-2xl md:mr-4 md:group-hover:scale-110 transition-transform duration-300">
                <div className="text-brand-blue">{icon}</div>
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-3 relative inline-block md:inline">
              <span className="relative z-10 text-brand-blue transition-colors duration-300">
                {title}
              </span>
            </h3>
            <p className="text-gray-600 leading-relaxed mt-4">
              {description}
            </p>
          </div>
          {/* ... existing code ... */}
          {/* Details (3rd column) */}
          <div className="space-y-6 md:space-y-0">
            <div className="bg-gray-50 p-6 rounded-xl md:p-4">
              <p className="text-gray-700 leading-relaxed">
                {details}
              </p>
            </div>
          </div>
          {/* Features (4th column) */}
          <div>
            <div className="bg-white rounded-xl">
              <ul className="space-y-3">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-5 h-5 mt-1">
                      <svg
                        className="w-5 h-5 text-brand-blue"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-600 md:group-hover:text-gray-700 transition-colors duration-300">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 text-center md:mt-6 md:col-span-4 md:text-left md:pl-8">
                <div className="inline-flex items-center justify-center px-6 py-3 bg-brand-blue text-white rounded-lg font-medium md:group-hover:bg-white md:group-hover:text-brand-blue border-2 border-transparent md:group-hover:border-brand-blue transition-all duration-300 md:transform md:group-hover:scale-105">
                  Learn More
                  <svg
                    className="w-5 h-5 ml-2 md:transform md:group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </div>
            {/* ... existing code ... */}
            {/* Learn More Button spans full width on mobile; aligns under grid on desktop */}
          </div>
        </div>
      </div>
    </Link>
  );
} 