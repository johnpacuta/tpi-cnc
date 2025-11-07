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
    image: "/images/headshots/BenBlythe.jpg",
    description: ""
  },
  {
    name: "Sam Collins",
    role: "CNC Technician",
    image: "/images/headshots/SamCollins.jpeg",
    description: ""
  },
    {
        name: "Kate Powell",
        role: "Treasurer",
        image: "/images/headshots/KatePowell.jpeg",
        description: ""
    }
    ,
    {
        name: "Jessica Allison",
        role: "Sales Administrator",
        image: "/images/headshots/JessicaAllison.jpeg",
        description: ""
    }
    ,
    {
        name: "Mike Morris",
        role: "Sales Lead",
        image: "/images/headshots/MikeMorris.jpeg",
        description: ""
    },
    {
        name: "Ross Burniston",
        role: "Operations Manager",
        image: "/images/headshots/RossBurniston.jpeg",
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