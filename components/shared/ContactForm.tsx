'use client';

import {useState} from 'react';
import {Button} from "@/components/ui/button";
import {toast} from 'react-hot-toast';
import {submitContactForm} from '@/app/actions/contact';
import {ContactFormSchema} from '@/lib/schema';
import type {z} from 'zod';

type ContactFormProps = {
    title?: string;
    subtitle?: string;
    className?: string;
}

type FormErrors = {
    [K in keyof z.infer<typeof ContactFormSchema>]?: string[];
};

export default function ContactForm({
                                        title = "Send Us a Message",
                                        subtitle = "Fill out the form below and we'll get back to you as soon as possible.",
                                        className = "bg-white rounded-2xl shadow-lg p-8 md:p-12"
                                    }: ContactFormProps) {

    const [errors, setErrors] = useState<FormErrors>({});

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const form = e.currentTarget;
        const formData = new FormData(form);

        // Clear previous errors
        setErrors({});

        // Validate with Zod before submitting
        const validationResult = ContactFormSchema.safeParse({
            firstName: formData.get('firstName'),
            lastName: formData.get('lastName'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            address: formData.get('address'),
            message: formData.get('message'),
        });

        if (!validationResult.success) {
            const fieldErrors: FormErrors = {};
            validationResult.error.issues.forEach((issue) => {
                const field = issue.path[0] as keyof FormErrors;
                if (!fieldErrors[field]) {
                    fieldErrors[field] = [];
                }
                fieldErrors[field]?.push(issue.message);
            });
            setErrors(fieldErrors);
            toast.error('Please fix the form errors');
            return;
        }

        toast.promise(
            submitContactForm(formData),
            {
                error: (err: { message: any; }) => err.message || 'Failed to send message',
                loading: 'Sending message...',
                success: (response: { success: any; error: any; }) => {
                    if (response.success) {
                        form.reset();
                        setErrors({});
                        return 'Message sent successfully!';
                    }
                    throw new Error(response.error || 'Failed to send message');
                }
            }
        );
    }

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

    return (
        <div className={className}>
            <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold mb-2">{title}</h2>
                <p className="text-gray-600 mb-8">{subtitle}</p>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                                First Name *
                            </label>
                            <input
                                type="text"
                                name="firstName"
                                id="firstName"
                                className={`mt-1 block w-full rounded-md border ${
                                    errors.firstName ? 'border-red-500' : 'border-gray-300'
                                } px-3 py-2`}
                            />
                            <ErrorMessage fieldName="firstName"/>
                        </div>

                        <div>
                            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                                Last Name *
                            </label>
                            <input
                                type="text"
                                name="lastName"
                                id="lastName"
                                className={`mt-1 block w-full rounded-md border ${
                                    errors.lastName ? 'border-red-500' : 'border-gray-300'
                                } px-3 py-2`}
                            />
                            <ErrorMessage fieldName="lastName"/>
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email *
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                className={`mt-1 block w-full rounded-md border ${
                                    errors.email ? 'border-red-500' : 'border-gray-300'
                                } px-3 py-2`}
                            />
                            <ErrorMessage fieldName="email"/>
                        </div>

                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                                Phone Number *
                            </label>
                            <input
                                type="tel"
                                name="phone"
                                id="phone"
                                placeholder="Enter at least 10 digits"
                                className={`mt-1 block w-full rounded-md border ${
                                    errors.phone ? 'border-red-500' : 'border-gray-300'
                                } px-3 py-2`}
                            />
                            <ErrorMessage fieldName="phone"/>
                        </div>
                    </div>

                    <div>
                        <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                            Address (Optional)
                        </label>
                        <input
                            type="text"
                            name="address"
                            id="address"
                            className={`mt-1 block w-full rounded-md border ${
                                errors.address ? 'border-red-500' : 'border-gray-300'
                            } px-3 py-2`}
                        />
                        <ErrorMessage fieldName="address"/>
                    </div>

                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                            Message *
                        </label>
                        <textarea
                            name="message"
                            id="message"
                            rows={4}
                            className={`mt-1 block w-full rounded-md border ${
                                errors.message ? 'border-red-500' : 'border-gray-300'
                            } px-3 py-2`}
                        ></textarea>
                        <ErrorMessage fieldName="message"/>
                    </div>

                    <Button
                        type="submit"
                        className="bg-brand-blue text-white hover:bg-accent px-8"
                    >
                        Send Message
                    </Button>
                </form>
            </div>
        </div>
    );
} 