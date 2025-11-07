interface StorySectionProps {
  missionStatement: string;
  yearsOfExperience: number;
  projectsCompleted: number;
}

export default function StorySection({
  missionStatement,
  yearsOfExperience,
  projectsCompleted,
}: StorySectionProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Story Column - spans 7 columns */}
      <div className="md:col-span-2 space-y-6">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-6 text-brand-blue">Our Journey</h3>
          <div className="border-l-4 border-brand-blue pl-6 my-8">
            <p className="text-gray-700 italic">
              {missionStatement}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6 mt-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-brand-blue mb-2">{yearsOfExperience}+</div>
              <div className="text-gray-600">Years of Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-brand-blue mb-2">{projectsCompleted}+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
} 