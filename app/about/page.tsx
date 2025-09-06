import ContentSection from '../components/about/ContentSection';
import TeamMember from '../components/about/TeamMember';
import StorySection from '../components/about/StorySection';
import ExpertiseSection from '../components/about/ExpertiseSection';
import CommunitySection from '../components/about/CommunitySection';
import Image from "next/image";

const teamMembers = [
  {
    name: "John Smith",
    role: "Founder & CEO",
    image: "/images/teddy.jpg",
    description: "With over 25 years of experience in CNC machinery, John leads our company with expertise and vision."
  },
  {
    name: "Sarah Johnson",
    role: "Technical Director",
    image: "/images/teddy.jpg",
    description: "Sarah brings 15 years of specialized experience in CNC programming and maintenance solutions."
  },
  {
    name: "Mike Chen",
    role: "Service Manager",
    image: "/images/teddy.jpg",
    description: "Leading our service team, Mike ensures top-quality repair and maintenance services for all clients."
  },
  {
    name: "Lisa Rodriguez",
    role: "Customer Relations Manager",
    image: "/images/teddy.jpg",
    description: "Lisa coordinates with our clients to ensure their needs are met with the highest level of satisfaction."
  }
];

export default function About() {
  return (
    <main className="min-h-screen py-4">

      <ContentSection 
        title="Our Story" 
        subtitle="A legacy of excellence in industrial equipment solutions"
      >
        {/* Hero image of Teddy - mobile-friendly portrait */}
        <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md w-full sm:w-80 flex-none">
            <img
              src="/images/teddy.jpg"
              alt="Teddy — TPI CNC"
              className="w-32 h-32 rounded-full object-cover mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Teddy Powell</h3>
            <p className="text-brand-blue font-medium mb-2">Owner</p>
            <p className="text-gray-400 text-center">
              Teddy has over 25 years of hands-on CNC experience, leading complex repairs,
              installations, and process optimizations for manufacturers across North America.
            </p>
          </div>
        </div>

        <StorySection
          companyHistory="Twenty-five years ago in Windsor, Ontario, Teddy turned a lifelong knack for CNC repair into TPI CNC. Clients trusted Teddy’s blend of practical troubleshooting, control fluency, and follow-through. As needs expanded, he built a team that shares his standards: respond fast, solve root causes, teach operators, and measure results. Today TPI CNC supports repairs, retrofits, and training across North America, still guided by the same ethos—craftsmanship, accountability, and uptime. The tools evolved; the promise didn’t: do it right and stand behind it."
          missionStatement="Our mission is to provide exceptional CNC repair services and industrial equipment solutions while maintaining the highest standards of quality and customer satisfaction."
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