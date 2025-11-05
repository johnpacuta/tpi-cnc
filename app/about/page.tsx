import TeamMember from '../components/about/TeamMember';
import CommunitySection from '../components/about/CommunitySection';

const teamMembers = [
    {
        name: "Teddy Powell",
        role: "Founder",
        image: "/images/teddy.jpg",
        description: ""
    },
  {
    name: "Ben Blythe",
    role: "CNC Technician",
    image: "/images/BenBlythe.jpg",
    description: ""
  },
  {
    name: "Sam Collins",
    role: "CNC Technician",
    image: "/images/Sam_Collins.jpg",
    description: ""
  },
    {
        name: "Katharine Powell",
        role: "Executive Administrator",
        image: "/images/Katharine_Powell.jpg",
        description: ""
    }
    ,
    {
        name: "Jessica Allison",
        role: "Sales Administrator",
        image: "/images/Jessica.jpg",
        description: ""
    }
    ,
    {
        name: "Mike Morris",
        role: "Sales Lead",
        image: "/images/MikeMorris.jpg",
        description: ""
    }
];

export default function About() {
  return (
    <main className="min-h-screen pt-40">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMember
              key={index}
              name={member.name}
              role={member.role}
              image={member.image}
              description={member.description}
            />
          ))}
        </div>
        <CommunitySection />
    </main>
  );
} 