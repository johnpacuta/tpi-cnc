'use client';

import { useState } from 'react';
import ContentSection from "../components/about/ContentSection";
import { toast } from 'react-hot-toast';
import { submitQuoteForm } from '@/app/actions/quote';
import type { QuoteFormData } from '@/app/actions/quote';
import {GoogleTagManager} from "@next/third-parties/google";

// Define FormErrors type
type FormErrors = {
  [K in keyof QuoteFormData]?: string[];
};

export default function Quote() {
  const [errors, setErrors] = useState<FormErrors>({});

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    // Clear previous errors
    setErrors({});

    toast.promise(
      submitQuoteForm(formData)
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
        loading: 'Submitting quote request...',
        success: 'Quote request submitted successfully!',
        error: (err: { message: any; }) => err.message || 'Failed to submit quote request'
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
    <main className="min-h-screen pt-24 py-4">
        <GoogleTagManager gtmId="G-7385J6MX2L" />
      <ContentSection 
        title="Get a Quote" 
        subtitle="Need a part or solution for your company? Fill out the following and our experts will get you a quote!"
      >
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <h3 className="text-2xl font-semibold text-brand-blue mb-6">Quote Request Form</h3>
            <p className="text-gray-600 mb-8">
              Please provide your contact information and service requirements. 
              Our team will review your request and get back to you with a detailed quote.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Fields */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="text-sm font-medium text-brand-blue">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    className={`mt-1 block w-full rounded-md border ${
                      errors.firstName ? 'border-red-500' : 'border-gray-300'
                    } px-3 py-2`}
                    placeholder="Enter your first name"
                    required
                  />
                  <ErrorMessage fieldName="firstName" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName" className="text-sm font-medium text-brand-blue">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className={`mt-1 block w-full rounded-md border ${
                      errors.lastName ? 'border-red-500' : 'border-gray-300'
                    } px-3 py-2`}
                    placeholder="Enter your last name"
                    required
                  />
                  <ErrorMessage fieldName="lastName" />
                </div>
              </div>

              {/* Company Info */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="company" className="text-sm font-medium text-brand-blue">
                    Company Name <span className="text-gray-400">(Optional)</span>
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
                    placeholder="Enter your company name"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-brand-blue">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className={`mt-1 block w-full rounded-md border ${
                      errors.phone ? 'border-red-500' : 'border-gray-300'
                    } px-3 py-2`}
                    placeholder="Enter your phone number"
                    required
                  />
                  <ErrorMessage fieldName="phone" />
                </div>
              </div>

              {/* Email and Location */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-brand-blue">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className={`mt-1 block w-full rounded-md border ${
                      errors.email ? 'border-red-500' : 'border-gray-300'
                    } px-3 py-2`}
                    placeholder="Enter your email"
                    required
                  />
                  <ErrorMessage fieldName="email" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="location" className="text-sm font-medium text-brand-blue">
                    Service Location <span className="text-gray-400">(Optional)</span>
                  </label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
                    placeholder="Enter service location"
                  />
                </div>
              </div>

              {/* Equipment Details */}
              <div className="space-y-2">
                <label htmlFor="equipment" className="text-sm font-medium text-brand-blue">
                  Equipment Details *
                </label>
                <input
                  type="text"
                  id="equipment"
                  name="equipment"
                  className={`mt-1 block w-full rounded-md border ${
                    errors.equipment ? 'border-red-500' : 'border-gray-300'
                  } px-3 py-2`}
                  placeholder="Enter equipment make, model, and year"
                  required
                />
                <ErrorMessage fieldName="equipment" />
              </div>

              {/* Service Requirements */}
              <div className="space-y-2">
                <label htmlFor="requirements" className="text-sm font-medium text-brand-blue">
                  Service Requirements *
                </label>
                <textarea
                  id="requirements"
                  name="requirements"
                  className={`mt-1 block w-full rounded-md border ${
                    errors.requirements ? 'border-red-500' : 'border-gray-300'
                  } px-3 py-2 h-32`}
                  placeholder="Please describe your service needs in detail"
                  required
                />
                <ErrorMessage fieldName="requirements" />
              </div>

              {/* Additional Comments */}
              <div className="space-y-2">
                <label htmlFor="comments" className="text-sm font-medium text-brand-blue">
                  Additional Comments <span className="text-gray-400">(Optional)</span>
                </label>
                <textarea
                  id="comments"
                  name="comments"
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 h-24"
                  placeholder="Any additional information you'd like to share"
                />
              </div>

              {/* Submit Button */}
              <div className="flex justify-end">
                <button 
                  type="submit"
                  className="bg-brand-blue text-white hover:bg-brand-blue/70 px-8 py-2 rounded-md"
                >
                  Request Quote
                </button>
              </div>
            </form>
          </div>
        </div>
      </ContentSection>
    </main>
  );
} 