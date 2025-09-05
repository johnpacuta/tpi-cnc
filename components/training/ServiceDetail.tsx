// components/training/ServiceDetail.tsx
import Image from "next/image";

export type ServiceDetailData = {
    title: string;
    description: string;
    fullDescription?: string;
    imageUrl?: string;
    features?: string[];
    benefits?: string[];
    includes?: string[];
};

export default function ServiceDetail({ data }: { data: ServiceDetailData }) {
    return (
        <article className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="grid gap-6 md:grid-cols-3">
                <div className="relative h-48 md:h-full">
                    <Image
                        src={data.imageUrl || "/images/teddy.jpg"}
                        alt={data.title}
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="p-6 md:col-span-2">
                    <h2 className="text-2xl font-semibold">{data.title}</h2>
                    <p className="mt-4 text-gray-700">
                        {data.fullDescription || data.description}
                    </p>

                    {data.features?.length ? (
                        <section className="mt-6">
                            <h3 className="text-lg font-semibold mb-2">Features</h3>
                            <ul className="space-y-1 text-gray-700">
                                {data.features.map((f) => (
                                    <li key={f} className="flex items-start">
                                        <span className="text-brand-blue mr-2">•</span>
                                        {f}
                                    </li>
                                ))}
                            </ul>
                        </section>
                    ) : null}

                    {data.benefits?.length ? (
                        <section className="mt-6">
                            <h3 className="text-lg font-semibold mb-2">Benefits</h3>
                            <ul className="space-y-1 text-gray-700">
                                {data.benefits.map((b) => (
                                    <li key={b} className="flex items-start">
                                        <span className="text-brand-blue mr-2">•</span>
                                        {b}
                                    </li>
                                ))}
                            </ul>
                        </section>
                    ) : null}

                    {data.includes?.length ? (
                        <section className="mt-6">
                            <h3 className="text-lg font-semibold mb-2">Includes</h3>
                            <ul className="space-y-1 text-gray-700">
                                {data.includes.map((i) => (
                                    <li key={i} className="flex items-start">
                                        <span className="text-brand-blue mr-2">•</span>
                                        {i}
                                    </li>
                                ))}
                            </ul>
                        </section>
                    ) : null}
                </div>
            </div>
        </article>
    );
}