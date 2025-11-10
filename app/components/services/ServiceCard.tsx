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

export function ServiceCard({
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
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-1 border border-gray-100">
        <div className="p-4">
          {/* Icon Header */}
          <div className="relative">
            <div className="flex items-center justify-center w-20 h-20 bg-brand-blue/10 rounded-2xl mb-8 mx-auto group-hover:scale-110 transition-transform duration-300">
              <div className="text-brand-blue">
                {icon}
              </div>
            </div>
            <div className="absolute -inset-1 bg-brand-blue/5 rounded-3xl blur-2xl group-hover:bg-brand-blue/10 transition-colors duration-300" />
          </div>
          
          {/* Title & Description */}
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-3 relative inline-block">
              <span className="relative z-10 text-brand-blue group-hover:text-white transition-colors duration-300">
                {title}
              </span>
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-brand-blue -z-0 group-hover:h-full transition-all duration-300 rounded"></div>
            </h3>
            <p className="text-gray-600 leading-relaxed mt-4">
              {description}
            </p>
          </div>

          {/* Details Section */}
          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-xl">
              <p className="text-gray-700 leading-relaxed">
                {details}
              </p>
            </div>

            {/* Features List */}
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
                    <span className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Learn More Button */}
          <div className="mt-8 text-center">
            <div className="inline-flex items-center justify-center px-6 py-3 bg-brand-blue text-white rounded-lg font-medium group-hover:bg-white group-hover:text-brand-blue border-2 border-transparent group-hover:border-brand-blue transition-all duration-300 transform group-hover:scale-105">
              Learn More
              <svg 
                className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" 
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
      </div>
    </Link>
  );
}

export default ServiceCard