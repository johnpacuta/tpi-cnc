import ContentSection from '../components/about/ContentSection';
import TeamMember from '../components/about/TeamMember';
import StorySection from '../components/about/StorySection';
import ExpertiseSection from '../components/about/ExpertiseSection';
import CommunitySection from '../components/about/CommunitySection';

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
        <StorySection
          companyHistory="[Company founding story and history]"
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