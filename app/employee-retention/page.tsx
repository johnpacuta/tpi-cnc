'use client';

import ContentSection from "../components/about/ContentSection";
import Image from "next/image";
import Link from "next/link";
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { submitRetentionForm } from '@/app/actions/retention';
import type { ContactFormData } from '@/lib/schema';

type FormErrors = {
  [K in keyof ContactFormData]?: string[];
};

export default function EmployeeRetention() {
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
      submitRetentionForm(formData)
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
        error: (err: { message: any; }) => err.message || 'Failed to submit request'
      }
    );
  }

  const retentionStrategies = [
    {
      title: "Employee Development Programs",
      duration: "Ongoing",
      description: "Structured career advancement and skill development pathways for manufacturing professionals",
      imageUrl: "/images/teddy.jpg"
    },
    {
      title: "Workplace Culture Enhancement",
      duration: "3-6 months",
      description: "Creating an engaging and supportive work environment that promotes long-term commitment",
      imageUrl: "/images/teddy.jpg"
    },
    {
      title: "Leadership Training",
      duration: "8 weeks",
      description: "Developing effective leaders who can motivate and retain valuable team members",
      imageUrl: "/images/teddy.jpg"
    }
  ];

  const changeManagement = [
    {
      title: "Technology Integration",
      description: "Smooth implementation of new manufacturing technologies and processes",
      imageUrl: "/images/teddy.jpg"
    },
    {
      title: "Process Transformation",
      description: "Managing operational changes while maintaining team engagement and productivity",
      imageUrl: "/images/teddy.jpg"
    },
    {
      title: "Cultural Transition",
      description: "Guiding organizations through cultural shifts and modernization",
      imageUrl: "/images/teddy.jpg"
    }
  ];

  return (
    <main className="min-h-screen py-4">

      <ContentSection 
        title="Our Approach" 
        subtitle="Strategies for workforce stability and organizational transformation"
      >
        {/* Key Strategies Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Key Strategies</h2>
            <div className="w-20 h-1 bg-brand-blue mx-auto mb-4"></div>
          </div>
          <div className="max-w-3xl mx-auto">
            <ol className="space-y-6">
              <li className="flex gap-4">
                <span className="font-bold text-brand-blue">1.</span>
                <div>
                  <h3 className="font-semibold text-lg">Recognize & Reward:</h3>
                  <p className="text-gray-600">Regular recognition fosters a culture of appreciation.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="font-bold text-brand-blue">2.</span>
                <div>
                  <h3 className="font-semibold text-lg">Invest in Professional Development:</h3>
                  <p className="text-gray-600">Provide ongoing training, mentorship, and clear career pathways.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="font-bold text-brand-blue">3.</span>
                <div>
                  <h3 className="font-semibold text-lg">Promote Positivity:</h3>
                  <p className="text-gray-600">Encourage open communication, work-life balance, and wellness initiatives. A positive environment enhances morale.</p>
                </div>
              </li>
            </ol>
          </div>
        </section>

        {/* Employee Retention Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Employee Retention Strategies</h2>
            <div className="w-20 h-1 bg-brand-blue mx-auto mb-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Proven approaches to build and maintain a committed, skilled workforce
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {retentionStrategies.map((strategy, index) => (
              <Link 
                href={`/employee-retention/strategies/${strategy.title.toLowerCase().replace(/ /g, '-')}`}
                key={index}
                className="group"
              >
                <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <div className="relative h-48">
                    <Image
                      src={strategy.imageUrl}
                      alt={strategy.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <span className="bg-brand-blue text-white px-3 py-1 rounded-full text-sm font-medium">
                        {strategy.duration}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-brand-blue transition-colors">
                      {strategy.title}
                    </h3>
                    <p className="text-gray-600">{strategy.description}</p>
                    <div className="mt-4 flex items-center text-brand-blue font-medium">
                      Learn More 
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Change Management Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Change Management Solutions</h2>
            <div className="w-20 h-1 bg-brand-blue mx-auto mb-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Expert guidance for successful organizational transformation
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {changeManagement.map((solution, index) => (
              <Link 
                href={`/employee-retention/solutions/${solution.title.toLowerCase().replace(/ /g, '-')}`}
                key={index}
                className="group"
              >
                <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <div className="relative h-48">
                    <Image
                      src={solution.imageUrl}
                      alt={solution.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-brand-blue transition-colors">
                      {solution.title}
                    </h3>
                    <p className="text-gray-600">{solution.description}</p>
                    <div className="mt-4 flex items-center text-brand-blue font-medium">
                      Learn More 
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-semibold mb-2 text-center">Request a Consultation</h2>
          <p className="text-gray-600 text-center mb-8">Let's discuss your organization's needs and develop a tailored solution</p>
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
                <option value="retention">Employee Retention</option>
                <option value="change">Change Management</option>
              </select>
              <ErrorMessage fieldName="serviceType" />
            </div>
            <div className="space-y-2">
              <textarea
                name="message"
                placeholder="Tell us about your needs"
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