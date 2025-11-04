interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  description: string;
}

export default function TeamMember({ name, role, image, description }: TeamMemberProps) {
  return (
    <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
      <img 
        src={image} 
        alt={name} 
        className="w-40 h-60 rounded-full object-cover mb-4"
      />
      <h3 className="text-xl font-semibold mb-2">{name}</h3>
      <p className="text-brand-blue font-medium mb-2">{role}</p>
      <p className="text-gray-400 text-center">{description}</p>
    </div>
  );
} 