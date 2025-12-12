'use client';

import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { submitSparePartsForm } from '@/app/actions/spare-parts';
import type { SparePartsFormData } from '@/lib/schema';
import ContentSection from "../components/about/ContentSection";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {GoogleTagManager} from "@next/third-parties/google";

type FormErrors = {
  [K in keyof SparePartsFormData]?: string[];
};

export default function SpareParts() {
  const [errors, setErrors] = useState<FormErrors>({});
  
  const categories = [
    "Hydraulics",
    "Pneumatics",
    "Electrical",
    "Fans",
    "Bearings",
    "Motors",
    "Servo Drives",
    "Other"
  ];

  const brands = [
    "RENISHAW",
    "MOLDMAK",
    "FANUC",
    "MITSUBISHI",
    "SEIMENS",
    "FADAL",
    "OTHER"
  ];

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

    console.log('Submitting form data:', Object.fromEntries(formData.entries()));

    toast.promise(
      submitSparePartsForm(formData)
        .then((response) => {
          console.log('Server response:', response);
          
          if (!response.success) {
            if (response.fieldErrors) {
              console.log('Field errors:', response.fieldErrors);
              setErrors(response.fieldErrors);
              // Don't reset form, just throw error
              throw new Error('Please fix the form errors');
            }
            throw new Error(response.error);
          }
          // Only reset form on successful submission
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

  return (
    <main className="min-h-screen pt-24">
        <ContentSection
        title="Request Spare Parts" 
        subtitle="Tell us about the parts you need"
      >
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-gray-600 text-lg leading-relaxed">
              Need specific parts for your industrial equipment? 
              Fill out the form below and we&apos;ll help you source the right components.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <h3 className="text-2xl font-semibold text-primary mb-6">Parts Request Form</h3>
            <p className="text-gray-600 mb-8">
              Please provide your contact information and parts details. 
              Our team will assist you in finding the exact parts you need.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Fields */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="text-sm font-medium text-primary">
                    First Name
                  </label>
                  <Input
                    id="firstName"
                    name="firstName"
                    placeholder="Enter your first name"
                    required
                    className={errors.firstName ? 'border-red-500' : ''}
                  />
                  <ErrorMessage fieldName="firstName" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName" className="text-sm font-medium text-primary">
                    Last Name
                  </label>
                  <Input
                    id="lastName"
                    name="lastName"
                    placeholder="Enter your last name"
                    required
                    className={errors.lastName ? 'border-red-500' : ''}
                  />
                  <ErrorMessage fieldName="lastName" />
                </div>
              </div>

              {/* Contact Info */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="brand" className="text-sm font-medium text-primary">
                    Brand
                  </label>
                  <Select name="brand" required>
                    <SelectTrigger className={`w-full ${errors.brand ? 'border-red-500' : ''}`}>
                      <SelectValue placeholder="Select a brand" />
                    </SelectTrigger>
                    <SelectContent>
                      {brands.map((brand) => (
                        <SelectItem key={brand} value={brand.toLowerCase()}>
                          {brand}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <ErrorMessage fieldName="brand" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-primary">
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                    required
                    className={errors.phone ? 'border-red-500' : ''}
                  />
                  <ErrorMessage fieldName="phone" />
                </div>
              </div>

              {/* Email and Location */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-primary">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    required
                    className={errors.email ? 'border-red-500' : ''}
                  />
                  <ErrorMessage fieldName="email" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="location" className="text-sm font-medium text-primary">
                    Shipping Location <span className="text-gray-400">(Optional)</span>
                  </label>
                  <Input
                    id="location"
                    name="location"
                    placeholder="Enter shipping address"
                    className={errors.location ? 'border-red-500' : ''}
                  />
                  <ErrorMessage fieldName="location" />
                </div>
              </div>

              {/* Parts Category */}
              <div className="space-y-2">
                <label htmlFor="category" className="text-sm font-medium text-primary">
                  Parts Category
                </label>
                <Select name="category" required>
                  <SelectTrigger className={`w-full ${errors.category ? 'border-red-500' : ''}`}>
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category.toLowerCase()}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <ErrorMessage fieldName="category" />
              </div>

              {/* Equipment Details */}
              <div className="space-y-2">
                <label htmlFor="equipment" className="text-sm font-medium text-primary">
                  Equipment Details
                </label>
                <Input
                  id="equipment"
                  name="equipment"
                  placeholder="Enter equipment make, model, and year"
                  required
                  className={errors.equipment ? 'border-red-500' : ''}
                />
                <ErrorMessage fieldName="equipment" />
              </div>

              {/* Parts Details */}
              <div className="space-y-2">
                <label htmlFor="parts" className="text-sm font-medium text-primary">
                  Parts Required
                </label>
                <Textarea
                  id="parts"
                  name="parts"
                  placeholder="Please list the parts you need with part numbers if available"
                  className={`h-32 ${errors.parts ? 'border-red-500' : ''}`}
                  required
                />
                <ErrorMessage fieldName="parts" />
              </div>

              {/* Additional Information */}
              <div className="space-y-2">
                <label htmlFor="comments" className="text-sm font-medium text-primary">
                  Additional Information <span className="text-gray-400">(Optional)</span>
                </label>
                <Textarea
                  id="comments"
                  name="comments"
                  placeholder="Any additional details that might help us locate the correct parts"
                  className={`h-24 ${errors.comments ? 'border-red-500' : ''}`}
                />
                <ErrorMessage fieldName="comments" />
              </div>

              {/* Submit Button */}
              <div className="flex justify-end">
                <Button 
                  type="submit"
                  className="bg-brand-blue text-white hover:bg-brand-blue/90 px-8"
                >
                  Submit Request
                </Button>
              </div>
            </form>
          </div>
        </div>
      </ContentSection>
    </main>
  );
}