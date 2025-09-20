'use client';

import {useState} from 'react';
import {toast} from 'react-hot-toast';
import {submitConsultingForm} from '@/app/actions/consulting';
import type {ContactFormData} from '@/lib/schema';
import ServicePage from '@/app/consulting/Consulting'

type FormErrors = {
    [K in keyof ContactFormData]?: string[];
};

export default function Consulting() {
    const [errors, setErrors] = useState<FormErrors>({});

    const ErrorMessage = ({fieldName}: { fieldName: keyof FormErrors }) => {
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
            submitConsultingForm(formData)
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

    // ... consultingServices array stays the same ...

    return (
        <main className="min-h-screen py-20">
            <ServicePage params={Promise.resolve({ slug: 'lean-manufacturing' })} />
            <ServicePage params={Promise.resolve({ slug: 'maintenance-excellence' })} />
            <ServicePage params={Promise.resolve({ slug: 'smart-manufacturing' })} />
                {/* Contact Form Section */}
                <section className="max-w-2xl mx-auto">
                    <h2 className="text-2xl font-semibold mb-2 text-center">Get Started Today</h2>
                    <p className="text-gray-600 text-center mb-8">Take the first step towards optimizing your
                        operations</p>
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
                                <ErrorMessage fieldName="firstName"/>
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
                                <ErrorMessage fieldName="lastName"/>
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
                            <ErrorMessage fieldName="email"/>
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
                            <ErrorMessage fieldName="phone"/>
                        </div>
                        <div className="space-y-2">
                            <select
                                name="serviceType"
                                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-blue ${
                                    errors.serviceType ? 'border-red-500' : ''
                                }`}
                                required
                            >
                                <option value="">Select Consulting Service</option>
                                <option value="process">Lean Manufacturing</option>
                                <option value="facility">Maintenance Excellence</option>
                                <option value="implementation">Smart Manufacturing</option>
                            </select>
                            <ErrorMessage fieldName="serviceType"/>
                        </div>
                        <div className="space-y-2">
              <textarea
                  name="message"
                  placeholder="Additional Information"
                  rows={4}
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-blue ${
                      errors.message ? 'border-red-500' : ''
                  }`}
              ></textarea>
                            <ErrorMessage fieldName="message"/>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-brand-blue text-white px-6 py-3 rounded-lg hover:bg-brand-blue/80 transition-colors"
                        >
                            Submit Request
                        </button>
                    </form>
                </section>
        </main>
    );
}