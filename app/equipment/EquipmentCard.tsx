import { ReactNode } from 'react';
import Link from 'next/link';

interface EquipmentCardProps {
  title: string;
  icon: ReactNode;
  description: string;
  features: string[];
  href: string;
}

export default function EquipmentCard({ 
  title, 
  icon, 
  description, 
  features,
  href 
}: EquipmentCardProps) {
  return (
    <Link 
      href={href}
      className="block group"
    >
      <div className="h-full p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 border border-brand-blue/10">
        <div className="flex items-center gap-4 mb-4">
          <div className="text-brand-blue">
            {icon}
          </div>
          <h3 className="text-xl font-semibold text-brand-blue">
            {title}
          </h3>
        </div>
        
        <p className="text-gray-600 mb-4">
          {description}
        </p>

        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li 
              key={index}
              className="text-sm text-gray-500 flex items-center gap-2"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-brand-blue/40" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </Link>
  );
}