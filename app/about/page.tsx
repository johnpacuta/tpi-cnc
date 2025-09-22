import ContentSection from '../components/about/ContentSection';
import TeamMember from '../components/about/TeamMember';
import StorySection from '../components/about/StorySection';
import CommunitySection from '../components/about/CommunitySection';
import Image from "next/image";

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
    image: "/images/SamCollins.jpg",
    description: ""
  }
  /*{
    name: "Lisa Rodriguez",
    role: "Customer Relations Manager",
    image: "/images/teddy.jpg",
    description: "Lisa coordinates with our clients to ensure their needs are met with the highest level of satisfaction."
  }*/
];

export default function About() {
  return (
    <main className="min-h-screen pt-20">
      <ContentSection 
        title="Our Story" 
        subtitle='"A legacy of excellence in industrial equipment solutions"'
      >
          <div className="flex justify-center">
              <Image
                  src="/images/teddy.jpg"
                  alt="Teddy"
                  width={300}
                  height={200}
                  priority
                  className="rounded-md"
              />
          </div>
          <StorySection
          companyHistory="Fifteen years ago in Windsor, Ontario, Teddy turned a lifelong knack for CNC repair into TPI CNC. Clients trusted Teddy’s blend of practical troubleshooting, control fluency, and follow-through. As needs expanded, he built a team that shares his standards: respond fast, solve root causes, teach operators, and measure results. Today TPI CNC supports repairs, retrofits, and training across North America, still guided by the same ethos—craftsmanship, accountability, and uptime. The tools evolved; the promise didn’t: do it right and stand behind it."
          missionStatement="At TPI, our culture is rooted in integrity, collaboration, and innovation. We value excellence in every aspect of our work, from customer service to technical expertise. Our purpose is clear: to serve as a beacon of reliability and support for local industries, fostering their growth and success on the global stage. Through our unwavering commitment to these values, we aim to inspire trust, drive progress, and make a meaningful impact in the communities we serve."
          yearsOfExperience={25}
          projectsCompleted={1000}
        />
      </ContentSection>

      {/* <ContentSection 
        title="Our Expertise" 
        subtitle="Comprehensive solutions for all your industrial equipment needs"
        className="bg-brand-blue/5"
      >
        <ExpertiseSection />
      </ContentSection> */}

      <ContentSection 
        title="Our Team" 
        subtitle="Meet the experts behind our success"
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
        subtitle="Building stronger connections for a better future"
        className="bg-gradient-to-br from-brand-blue/5 to-brand-blue/10"
      >
        <CommunitySection />
      </ContentSection>
    </main>
  );
} 