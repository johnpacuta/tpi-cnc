"use client";
import {useRouter} from "next/navigation";

import ContentSection from "@/app/components/about/ContentSection";
import {CheckCircle2} from "lucide-react";
import {useState} from "react";
import {toast} from "react-hot-toast";
import {submitConsultingForm} from "@/app/actions/consulting";
import type {ContactFormData} from "@/lib/schema";

type FormErrors = {
    [K in keyof ContactFormData]?: string[];
};

const maintenanceServices = [
    {
        title: "Maintenance Packages",
        subtitle: "",
        features: [
            "Rapid response to breakdowns, emergency diagnostics, and quick restoration to minimize downtime.",
            "Scheduled inspections, calibration, and wear tracking to reduce failures and extend machine life.",
        ],
        isHighlighted: true,
        link: "/maintenance"
    },
    {
        title: "3D Printing",
        subtitle: "",
        features: [
            "Cutting-edge 3D printing solutions",
            "Rapid prototyping",
            "Production in diverse materials",
            "Link to 3D Production History"
        ],
        isHighlighted: true,
        link: "/3d-printing"
    },
    {
        title: "CNC Parts",
        subtitle: "",
        features: [
            "Request machine parts",
            "Replace fluids and accessories",
            "Maintain and elevate your CNC equipment",
        ],
        isHighlighted: true,
        link: "/spare-parts"
    }
];

export default function Support() {
    const router = useRouter();

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
        return (



            <main>
                <ContentSection
                    title="TPI CNC Solutions"
                    subtitle="Professional CNC maintenance solutions."
                    className="pt-24"
                >
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {maintenanceServices.map((service, index) => (
                            <div
                                key={index}
                                onClick={() => {
                                    router.push(service.link ?? "/contact");
                                }}
                                role="link"
                                tabIndex={0}
                                onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && router.push(service.link ?? "/contact")}
                                className={`p-6 rounded-xl shadow-lg border-2 hover:shadow-xl border-brand-blue/10 bg-white`}
                            >
                                <h2 className={`text-3xl font-bold mb-2 relative text-gray-800`}>
                                    {service.title}
                                </h2>
                                <h4 className={'text-2xl mb-3'}>
                                    {service.subtitle}
                                </h4>

                                <ul className="space-y-4">
                                    {service.features.map(
                                        (
                                            feature:
                                                | string
                                                | { label: string; children: string[] },
                                            featureIndex: number
                                        ) => {
                                            const isGroup = typeof feature !== "string";

                                            if (!isGroup) {
                                                return (
                                                    <li key={featureIndex} className="flex items-start gap-3">
                                                        <CheckCircle2
                                                            className={`w-6 h-6 flex-shrink-0 text-brand-blue`}
                                                        />
                                                        <span className="text-gray-600">{feature}</span>
                                                    </li>
                                                );
                                            }

                                            const group = feature as { label: string; children: string[] };
                                            return (
                                                <li key={featureIndex} className="flex flex-col gap-2">
                                                    <div className="flex items-start gap-3">
                                                        <CheckCircle2
                                                            className={`w-6 h-6 flex-shrink-0 text-brand-blue`}
                                                        />
                                                        <span
                                                            className="text-gray-800 font-semibold">{group.label}</span>
                                                    </div>
                                                    <ul className="ml-9 list-disc space-y-2">
                                                        {group.children.map((child, i) => (
                                                            <li key={i} className="text-gray-600">{child}</li>
                                                        ))}
                                                    </ul>
                                                </li>
                                            );
                                        }
                                    )}
                                </ul>
                            </div>
                        ))}
                    </div>

                    <section className="text-center mt-8">
                        <div className="bg-gradient-to-r from-brand-blue to-blue-600 rounded-xl shadow-xl p-4 sm:p-8">
                            <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Ready to Transform
                                Your Operations?</h2>
                            <p className="text-white/90 mb-4 sm:mb-6 text-sm sm:text-base">Let's discuss how we can
                                customize this solution for your specific needs.</p>
                            <button
                                type="button"
                                onClick={() => router.push("/contact")}
                                className="bg-white text-brand-blue font-bold py-2 sm:py-3 px-6 sm:px-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-sm sm:text-base"
                                aria-label="Go to Contact page"
                            >
                                Contact Us Today
                            </button>

                        </div>
                    </section>
                </ContentSection>
            </main>
        );
    }