interface FeatureCardProps {
  title: string;
  organization: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  features: Array<{
    title: string;
    description: string;
  }>;
  icon: React.ReactNode;
}

const FeatureCard = ({ 
  title, 
  organization, 
  description, 
  imageSrc, 
  imageAlt,
  features,
  icon 
}: FeatureCardProps) => (
  <div className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300">
    <div className="p-8">
      <div className="relative overflow-hidden rounded-lg mb-8 w-[30%] mx-auto">
        <div className="aspect-video">
          <img 
            src={imageSrc} 
            alt={imageAlt} 
            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/80 to-transparent opacity-75"></div>
        </div>
      </div>

      <div className="text-center mb-8">
        <h3 className="text-2xl font-semibold text-brand-blue mb-4">{title}</h3>
        <div className="inline-flex items-center justify-center px-4 py-2 bg-brand-blue/5 rounded-full">
          {icon}
          <span className="text-brand-blue font-medium">{organization}</span>
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
                  style={{ color: 'var(--brand-blue)' }}
                >
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
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
      imageSrc: "/images/banner.png",
      imageAlt: "St. Clair College Partnership",
      icon: (
        <svg className="w-6 h-6 text-yellow-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
        </svg>
      ),
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
      imageSrc: "/images/banner.png",
      imageAlt: "CAMM Association",
      icon: (
        <svg className="w-6 h-6 text-yellow-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
        </svg>
      ),
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
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h3 className="text-brand-blue text-lg font-semibold mb-4">Growing Together</h3>
          <p className="text-gray-600">
            We believe in giving back to our community and fostering the next generation of manufacturing excellence through partnerships and active involvement.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {communityData.map((item, index) => (
            <FeatureCard key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
} 