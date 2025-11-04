import Link from "next/link";
import React, {ReactElement} from "react";

interface ServiceCardProps {
    title: string;
    icon: ReactElement | string;
    features: string[];
    slug: string;
    img?: string;
    hideOnMobile?: boolean;
}

export default function ServiceCard({
                                        title,
                                        icon,
                                        features,
                                        slug,
                                        img,
                                        hideOnMobile,
                                    }: ServiceCardProps) {
    return (
        <Link
            href={`/services/${slug}`}
            className={`block group ${hideOnMobile ? "hidden md:block" : ""}`}
        >
            <div
                className="bg-white rounded-2xl shadow-lg md:hover:shadow-xl transition-all duration-300 md:transform md:group-hover:-translate-y-1 border border-gray-100 h-[400]">
                {/* Mobile: stacked; Desktop: 4 auto-width columns with icon at far left */}
                <div className="p-4 md:grid h-full">
                    {/* Title & Description (1st column) */}
                    {!img && (<div className="text-left">
                            <h3 className="flex items-center gap-3 text-2xl font-bold mb-3">
  <span className="justify-left w-20 h-auto rounded-xl bg-brand-blue/10 text-brand-blue">
    {icon}
  </span>
                                <span className="text-brand-blue justify-start">{title}</span>
                            </h3>
                        </div>
                    )}
                    {/* Features (2nd column) */}
                    <div className="bg-white rounded-xl">
                        {!img && (<ul className="space-y-3">
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
                                        <span
                                            className="text-gray-600 md:group-hover:text-gray-700 transition-colors duration-300">
                      {feature}
                    </span>
                                    </li>
                                ))}
                            </ul>
                        )}
                        {!img && (<div className="mt-8 text-center md:mt-6 md:col-span-4 md:text-left md:pl-8">
                                {/* Show button only when no image */}
                                <div
                                    className="inline-flex items-center justify-center px-6 py-3 bg-brand-blue text-white rounded-lg font-medium md:group-hover:bg-white md:group-hover:text-brand-blue border-2 border-transparent md:group-hover:border-brand-blue transition-all duration-300 md:transform md:group-hover:scale-105">
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
                        )}
                    </div>
                    {img && (
                        <img src={img} alt={title} className="rounded-2xl items-center justify-center h-auto"/>
                    )}
                </div>
            </div>
        </Link>
    );
}