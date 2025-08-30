'use client';

import DetailPageBlue from "@/components/shared/DetailPageBlue";
import { notFound } from "next/navigation";
import { toast } from 'react-hot-toast';
import { submitDealForm } from '@/app/actions/deals';
import { useState, use } from 'react';
import type { ContactFormData } from '@/lib/schema';

// Define FormErrors type
type FormErrors = {
  [K in keyof ContactFormData]?: string[];
};

// This would typically come from your data source
const dealsData = {
  "starter-bundle": {
    title: "Starter Bundle Package",
    description: "Get started with our comprehensive starter bundle.",
    fullDescription: "Take advantage of our limited-time Starter Bundle offer, designed to provide you with essential manufacturing solutions at an exceptional value. This package combines our core services with exclusive benefits, making it the perfect entry point for businesses looking to optimize their operations.",
    imageUrl: "/images/teddy.jpg",
    features: [
      "Complete system setup and configuration",
      "3 months of priority support",
      "Basic training package included",
      "Access to core manufacturing modules"
    ],
    benefits: [
      {
        title: "20% cost savings compared to individual services",
        description: "Maximize your budget with our bundled pricing"
      },
      {
        title: "Expedited implementation timeline",
        description: "Get up and running faster with prioritized setup"
      },
      {
        title: "Dedicated support team",
        description: "Direct access to expert assistance"
      }
    ],
    implementation: {
      phases: ["Initial Setup", "Configuration", "Training", "Go-Live"],
      timeline: "4-6 weeks",
      support: "3 months priority support included"
    },
    schedule: {
      duration: "Limited time offer - expires in 5 days",
      format: "Remote and on-site implementation available",
      implementation: "Flexible scheduling to meet your timeline"
    }
  }
};

type Props = {
  params: Promise<{ slug: string }>,
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export default function DealDetail({ params, searchParams }: Props) {
  const [errors, setErrors] = useState<FormErrors>({});
  const { slug } = use(params);
  const searchParamsData = use(searchParams);
  const deal = dealsData[slug as keyof typeof dealsData];

  if (!deal) {
    notFound();
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    // Add the deal title to the message
    formData.set('message', `Interested in: ${deal.title}\n\n${formData.get('message') || ''}`);
    
    // Clear previous errors
    setErrors({});

    toast.promise(
      submitDealForm(formData)
        .then((response) => {
          if (!response.success) {
            // Handle Zod validation errors
            if (response.fieldErrors) {
              setErrors(response.fieldErrors);
              throw new Error('Please fix the form errors');
            }
            throw new Error(response.error);
          }
          // Success case
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

  return (
    <div className="bg-gray-50">
      <div className="mb-[-60px]">
        <DetailPageBlue
          data={deal}
          type="service"
          withGenericForm={false}
          backButton={{
            text: "Deals",
            href: "/deals"
          }}
        />
      </div>
      <section className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 mb-4">
        <h2 className="text-3xl font-bold mb-6 text-center text-brand-blue">Request Deal Information</h2>
        <p className="text-gray-600 text-center mb-8">
          Interested in {deal.title}? Fill out the form below and we'll get back to you with detailed information.
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            name="dealName"
            value={deal.title}
            readOnly
            className="w-full px-4 py-3 rounded-xl border bg-gray-100 text-gray-700 cursor-not-allowed"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                className={`w-full px-4 py-3 rounded-xl border ${
                  errors.firstName ? 'border-red-500' : ''
                } focus:outline-none focus:ring-2 focus:ring-brand-blue/50`}
                required
              />
              <ErrorMessage fieldName="firstName" />
            </div>
            <div className="space-y-2">
              <input
                type="text" 
                name="lastName"
                placeholder="Last Name"
                className={`w-full px-4 py-3 rounded-xl border ${
                  errors.lastName ? 'border-red-500' : ''
                } focus:outline-none focus:ring-2 focus:ring-brand-blue/50`}
                required
              />
              <ErrorMessage fieldName="lastName" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                className={`w-full px-4 py-3 rounded-xl border ${
                  errors.email ? 'border-red-500' : ''
                } focus:outline-none focus:ring-2 focus:ring-brand-blue/50`}
                required
              />
              <ErrorMessage fieldName="email" />
            </div>
            <div className="space-y-2">
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                className={`w-full px-4 py-3 rounded-xl border ${
                  errors.phone ? 'border-red-500' : ''
                } focus:outline-none focus:ring-2 focus:ring-brand-blue/50`}
                required
              />
              <ErrorMessage fieldName="phone" />
            </div>
          </div>
          <div className="space-y-2">
            <input
              type="text"
              name="company"
              placeholder="Company Name"
              className={`w-full px-4 py-3 rounded-xl border ${
                errors.company ? 'border-red-500' : ''
              } focus:outline-none focus:ring-2 focus:ring-brand-blue/50`}
            />
            <ErrorMessage fieldName="company" />
          </div>
          <div className="space-y-2">
            <textarea
              name="message"
              placeholder="Additional Requirements or Questions"
              rows={4}
              className={`w-full px-4 py-3 rounded-xl border ${
                errors.message ? 'border-red-500' : ''
              } focus:outline-none focus:ring-2 focus:ring-brand-blue/50`}
            ></textarea>
            <ErrorMessage fieldName="message" />
          </div>
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