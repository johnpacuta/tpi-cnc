"use client";
import Image from "next/image";
import Link from "next/link";
import ContentSectionBlue from "@/app/components/about/ContentSectionBlue";

type DetailPageProps = {
  data: {
    title: string;
    duration?: string;
    description: string;
    fullDescription: string | undefined;
    imageUrl: string | string[];
    videoUrl?: string | string[];
    methodology?: string[];
    benefits?: {
      title: string;
      description: string;
    }[] | string[];
    implementation?: {
      phase: string;
      details: string;
    }[] | {
      phases: string | string[];
      timeline: string;
      support: string;
    };
    features?: string[];
    specifications?: string[];
    curriculum?: string[];
    outcomes?: string[];
    schedule?: {
      duration: string;
      format: string;
      implementation: string;
    };
    process?: string[];
    useCases?: string[];
    includes?: string[];
  };
  type: "strategy" | "service" | "solution" | "product" | "training";
  backButton?: {
    text: string;
    href: string;
  };
  withGenericForm?: boolean;
};

export default function DetailPageBlue({ data, type, backButton, withGenericForm }: DetailPageProps) {
  return (
    <main className="min-h-screen py-20">
      <ContentSectionBlue title={data.title}>
        <div className="max-w-4xl mx-auto">
          {/* Main Image Slider */}
          {Array.isArray(data.imageUrl) && data.imageUrl.length > 1 ? (
            <div className="relative mb-4">
              <div className="w-full h-[400px] overflow-x-auto snap-x snap-mandatory flex">
                {data.imageUrl.map((image, index) => (
                  <div 
                    key={index} 
                    className="relative w-full h-full flex-shrink-0 snap-center"
                  >
                    <Image
                      src={image}
                      alt={`${data.title} - Image ${index + 1}`}
                      fill
                      className="object-cover rounded-lg"
                    />
                    
                    {/* Slider Navigation Buttons */}
                    <div className="absolute inset-0 flex items-center justify-between p-4">
                      <button 
                        onClick={() => {
                          const container = document.querySelector('.snap-x');
                          if (container && index > 0) {
                            container.scrollTo({
                              left: window.innerWidth * (index - 1),
                              behavior: 'smooth'
                            });
                          }
                        }}
                        className={`p-2 rounded-full bg-black/50 hover:bg-black/70 transition-all ${
                          index === 0 ? 'invisible' : ''
                        }`}
                        aria-label="Previous image"
                      >
                        <svg 
                          className="w-6 h-6 text-white" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/>
                        </svg>
                      </button>
                      
                      <button 
                        onClick={() => {
                          const container = document.querySelector('.snap-x');
                          if (container && index < data.imageUrl.length - 1) {
                            container.scrollTo({
                              left: window.innerWidth * (index + 1),
                              behavior: 'smooth'
                            });
                          }
                        }}
                        className={`p-2 rounded-full bg-black/50 hover:bg-black/70 transition-all ${
                          index === data.imageUrl.length - 1 ? 'invisible' : ''
                        }`}
                        aria-label="Next image"
                      >
                        <svg 
                          className="w-6 h-6 text-white" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                        </svg>
                      </button>
                    </div>

                    {/* Navigation Dots */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                      {Array.isArray(data.imageUrl) && data.imageUrl.map((_, dotIndex) => (
                        <button
                          key={dotIndex}
                          className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            dotIndex === index ? 'bg-white w-4' : 'bg-white/50'
                          }`}
                          aria-label={`Go to image ${dotIndex + 1}`}
                          onClick={() => {
                            const container = document.querySelector('.snap-x');
                            if (container && typeof dotIndex === 'number') {
                              container.scrollTo({
                                left: window.innerWidth * dotIndex,
                                behavior: 'smooth'
                              });
                            }
                          }}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            // Single Image
            <div className="relative w-full h-[400px] mb-4">
              <Image
                src={Array.isArray(data.imageUrl) ? data.imageUrl[0] : data.imageUrl || '/images/teddy.jpg'}
                alt={data.title}
                fill
                className="object-cover rounded-lg"
              />
            </div>
          )}

          {/* Back Button - Moved below image */}
          {backButton && (
            <div className="mb-8">
              <Link 
                href={backButton.href}
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-brand-blue hover:text-brand-blue/80 transition-all group"
              >
                <svg 
                  className="w-4 h-4 mr-2 transform transition-transform group-hover:-translate-x-1" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/>
                </svg>
                Back to {backButton.text}
              </Link>
            </div>
          )}

          <div className="prose max-w-none">
            <p className="text-lg leading-relaxed text-gray-700 mb-12">{data.fullDescription}</p>

            {/* Two Column Grid Section */}
            <div className="grid md:grid-cols-2 gap-8 my-12">
              {/* Methodology/Curriculum Section */}
              {(data.methodology || data.curriculum || data.process) && (
                <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                  <h3 className="text-2xl font-semibold mb-6 text-brand-blue">
                    <span className="inline-block mr-3">
                      {data.methodology ? "🔄" : "📚"}
                    </span>
                    {data.methodology ? "Methodology" : data.process ? "Process" : "Curriculum"}
                  </h3>
                  <ul className="space-y-4">
                    {(data.methodology || data.curriculum || data.process)?.map((item, index) => (
                      <li key={index} className="flex items-start">
                        {data.methodology ? (
                          <span className="flex items-center justify-center w-6 h-6 rounded-full bg-brand-blue text-white text-sm font-medium mr-3">
                            {index + 1}
                          </span>
                        ) : (
                          <span className="text-brand-blue mr-3 mt-1">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                          </span>
                        )}
                        <span className="text-gray-700 leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Benefits/Outcomes Section */}
              {(data.benefits || data.outcomes) && (
                <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                  <h3 className="text-2xl font-semibold mb-6 text-brand-blue">
                    <span className="inline-block mr-3">✨</span>
                    {type === "product" ? "Key Benefits" : (data.outcomes ? "Learning Outcomes" : "Key Benefits")}
                  </h3>
                  <ul className="space-y-4">
                    {(data.benefits || data.outcomes)?.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-brand-blue mr-3 mt-1">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </span>
                        <span className="text-gray-700 leading-relaxed">
                          {typeof item === 'string' ? item : item.title}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Features Section */}
              {data.features && (
                <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                  <h3 className="text-2xl font-semibold mb-6 text-brand-blue">
                    <span className="inline-block mr-3">🔧</span>
                    Features
                  </h3>
                  <ul className="space-y-4">
                    {data.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-brand-blue mr-3 mt-1">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                          </svg>
                        </span>
                        <span className="text-gray-700 leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Includes Section */}
              {data.includes && (
                <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                  <h3 className="text-2xl font-semibold mb-6 text-brand-blue">
                    <span className="inline-block mr-3">📦</span>
                    What's Included
                  </h3>
                  <ul className="space-y-4">
                    {data.includes.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-brand-blue mr-3 mt-1">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </span>
                        <span className="text-gray-700 leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Specifications Section */}
              {data.specifications && (
                <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                  <h3 className="text-2xl font-semibold mb-6 text-brand-blue">
                    <span className="inline-block mr-3">📋</span>
                    Specifications
                  </h3>
                  <ul className="space-y-4">
                    {data.specifications.map((spec, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-brand-blue mr-3 mt-1">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        </span>
                        <span className="text-gray-700 leading-relaxed">{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Use Cases Section */}
              {data.useCases && (
                <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                  <h3 className="text-2xl font-semibold mb-6 text-brand-blue">
                    <span className="inline-block mr-3">💡</span>
                    Use Cases
                  </h3>
                  <ul className="space-y-4">
                    {data.useCases.map((useCase, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-brand-blue mr-3 mt-1">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        </span>
                        <span className="text-gray-700 leading-relaxed">{useCase}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Implementation Section */}
            {data.implementation && (
              <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow mt-8">
                <h3 className="text-2xl font-semibold mb-6 text-brand-blue">
                  <span className="inline-block mr-3">⚙️</span>
                  Implementation Details
                </h3>
                {Array.isArray(data.implementation) ? (
                  // For phase-based implementation
                  <div className="space-y-6">
                    {data.implementation.map((phase, index) => (
                      <div key={index}>
                        <p className="font-medium text-gray-900 mb-2">{phase.phase}:</p>
                        <p className="text-gray-700">{phase.details}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  // For timeline-based implementation
                  <div className="grid grid-cols-2 gap-6">
                    <div className="col-span-2">
                      <p className="font-medium text-gray-900 mb-2">Phases:</p>
                      <p className="text-gray-700">
                        {Array.isArray(data.implementation.phases) 
                          ? data.implementation.phases.join(', ')
                          : data.implementation.phases}
                      </p>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 mb-2">Timeline:</p>
                      <p className="text-gray-700">{data.implementation.timeline}</p>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 mb-2">Support:</p>
                      <p className="text-gray-700">{data.implementation.support}</p>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Schedule Section */}
            {data.schedule && (
              <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow mt-8">
                <h3 className="text-2xl font-semibold mb-6 text-brand-blue">
                  <span className="inline-block mr-3">📅</span>
                  Program Schedule
                </h3>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <p className="font-medium text-gray-900 mb-2">Duration:</p>
                    <p className="text-gray-700">{data.schedule.duration}</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 mb-2">Format:</p>
                    <p className="text-gray-700">{data.schedule.format}</p>
                  </div>
                  <div className="col-span-2">
                    <p className="font-medium text-gray-900 mb-2">Implementation:</p>
                    <p className="text-gray-700">{data.schedule.implementation}</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Contact Form Section */}
          {(withGenericForm === undefined || withGenericForm === true) && (
            <section className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-12 mt-12">
              <h2 className="text-3xl font-bold mb-6 text-center text-gray-900">Ready to Get Started?</h2>
              <p className="text-gray-600 text-center mb-8">
                Contact us to discuss how we can help with your {data.title.toLowerCase()} needs.
              </p>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-brand-blue/50"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-brand-blue/50"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-brand-blue/50"
                />
                <textarea
                  placeholder="Project Details"
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-brand-blue/50"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-brand-blue text-white px-6 py-3 rounded-xl hover:bg-brand-blue/90 transition-all duration-300"
                >
                  Submit Request
                </button>
              </form>
            </section>
          )}
        </div>
      </ContentSectionBlue>
    </main>
  );
}