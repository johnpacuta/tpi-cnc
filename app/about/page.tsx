import TeamMember from '../components/about/TeamMember';
import CommunitySection from '../components/about/CommunitySection';
import ContentSection from "@/components/ContentSection";
import StorySection from "@/app/components/about/StorySection";
import Image from "next/image";

const teamMembers = [
    {
        name: "Teddy Powell",
        role: "Founder",
        image: "/images//headshots/TeddyPowell.jpg",
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
        role: "Sales Support",
        image: "/images/headshots/JessicaAllison.jpeg",
        description: ""
    }
    ,
    {
        name: "Mike Morris",
        role: "Technical Sales",
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
    <main className="min-h-screen pt-24">
            <ContentSection
                title="TPI CNC"
                subtitle='"A legacy of excellence in industrial equipment solutions."'
            >
                <div className="flex justify-center">
                    <Image
                        src="/images/teddy.jpg"
                        alt="Teddy"
                        width={300}
                        height={200}
                        priority
                        className="rounded-lg shadow-lg"
                    />
                </div>
                <StorySection
                    missionStatement="Led by our founder Teddy Powell, we are rooted in integrity, collaboration, and innovation. We value excellence in every aspect of our work, from customer service to technical expertise. Our purpose is clear: to serve as a beacon of reliability and support for local industries, fostering their growth and success on the global stage. Through our unwavering commitment to these values, we aim to inspire trust, drive progress, and make a meaningful impact in the communities we serve."
                    yearsOfExperience={15}
                    projectsCompleted={1000}
                />
            </ContentSection>
        <ContentSection
            title="Our Company"
            subtitle=""
        >
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
        </ContentSection>
        <ContentSection
            title="Community Involvement"
            subtitle=""
        >
        <CommunitySection />
        </ContentSection>
    </main>
  );
} 