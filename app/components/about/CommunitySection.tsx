interface FeatureCardProps {
    title: string;
    description: string;
    features: Array<{
        title: string;
        description: string;
    }>;
    picture_path?: string;
}

const FeatureCard = ({
                         title,
                         description,
                         features,
                         picture_path,
                     }: FeatureCardProps) => (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300">
        <div className="p-8">
            <div className="text-center">
                <h3 className="text-2xl font-semibold text-brand-blue mb-4">{title}</h3>
                <div className="inline-flex items-center justify-center px-4 py-2 bg-brand-blue/5 rounded-full">
                    <img src={picture_path} alt={title} className="h-24 object-contain pb-4" />
                </div>
            </div>

            <div className="space-y-6">
                <p className="text-gray-600 leading-relaxed">{description}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {features.map((feature, index) => (
                        <div key={index} className="bg-brand-blue/5 p-4 rounded-lg">
                            <div className="flex items-center text-brand-blue mb-2">
                                <svg
                                    className="w-5 h-5 mr-2"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    style={{color: 'var(--brand-blue)'}}
                                >
                                    <path fillRule="evenodd"
                                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                          clipRule="evenodd"/>
                                </svg>
                                <span className="font-medium">{feature.title}</span>
                            </div>
                            <p className="text-sm text-gray-600">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
);

export default function CommunitySection() {
    const communityData = [
        {
            title: "Educational Partnerships",
            organization: "St. Clair College",
            description: "Our partnership with St. Clair College helps develop the next generation of CNC technicians. Through hands-on training programs and apprenticeships, we're committed to fostering technical excellence in our community.",
            picture_path: "/images/StClair.png"
            ,
            features: [
                {
                    title: "Apprenticeships",
                    description: "Hands-on training for future technicians"
                },
                {
                    title: "Facilities",
                    description: "State-of-the-art workshop access"
                }
            ]
        },
        {
            title: "Industry Associations",
            organization: "CAMM Member",
            description: "As proud members of CAMM (Canadian Association of Mold Makers), we actively participate in industry initiatives and maintain the highest standards of manufacturing excellence in our region.",
            picture_path: "/images/CAMM-LOGO.png",
            features: [
                {
                    title: "Standards",
                    description: "Industry standards development"
                },
                {
                    title: "Network",
                    description: "Professional connections"
                }
            ]
        }
    ];

    return (
        <div className="relative">
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -right-10 -top-10 w-40 h-40 bg-accent/5 rounded-full"></div>
                <div className="absolute -left-16 -bottom-16 w-64 h-64 bg-brand-blue/5 rounded-full"></div>
            </div>

            <div className="relative">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {communityData.map((item, index) => (
                        <FeatureCard key={index} {...item} />
                    ))}
                </div>
            </div>
        </div>
    );
} 