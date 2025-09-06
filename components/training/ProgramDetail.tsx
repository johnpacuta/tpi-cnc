import Image from "next/image";

export type ProgramDetailData = {
    title: string;
    duration: string,
    description: string;
    fullDescription?: string;
    imageUrl?: string;
    curriculum?: string[]; // add curriculum support
    features?: string[];
    outcomes?: string[];
    schedule?: {
    duration?: string;
    hoursPerDay?: string;
    format?: string;
  };
};

export default function ProgramDetail({ data }: { data: ProgramDetailData }) {
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
                    <div className="flex items-center gap-3 flex-wrap">
                        <h2 className="text-2xl font-semibold">{data.title}</h2>
                        <span className="inline-flex items-center rounded-full bg-brand-blue px-3 py-1 text-sm font-medium text-white">
                            {data.duration}
                        </span>
                    </div>
                    <p className="mt-4 text-gray-700">
                        {data.fullDescription || data.description}
                    </p>

                    {/* Curriculum (optional) */}
                    {data.curriculum?.length ? (
                        <section className="mt-6">
                            <h3 className="text-lg font-semibold mb-2">Curriculum</h3>
                            <ul className="space-y-1 text-gray-700">
                                {data.curriculum.map((c) => (
                                    <li key={c} className="flex items-start">
                                        <span className="text-brand-blue mr-2">•</span>
                                        {c}
                                    </li>
                                ))}
                            </ul>
                        </section>
                    ) : null}

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

                    {/* Outcomes (optional) */}
                    {data.outcomes?.length ? (
                        <section className="mt-6">
                            <h3 className="text-lg font-semibold mb-2">Outcomes</h3>
                            <ul className="space-y-1 text-gray-700">
                                {data.outcomes.map((o) => (
                                    <li key={o} className="flex items-start">
                                        <span className="text-brand-blue mr-2">•</span>
                                        {o}
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
