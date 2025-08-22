import React from 'react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      category: 'Programming Languages',
      skills: ['Go', 'C', 'Java', 'Python', 'TypeScript'],
      bgColor: 'bg-blue-100',
      borderColor: 'border-blue-300',
      skillBgColor: 'bg-blue-200',
      skillTextColor: 'text-blue-800',
      skillHoverBg: 'hover:bg-blue-300'
    },
    {
      category: 'Backend & Infrastructure',
      skills: ["REST", "GraphQL", "FastAPI", "Fiber", "PostgreSQL", "GCP", "AWS", "Kubernetes", "Docker", "Terraform", "OpenTelemetry"],
      bgColor: 'bg-purple-100',
      borderColor: 'border-purple-300',
      skillBgColor: 'bg-purple-200',
      skillTextColor: 'text-purple-800',
      skillHoverBg: 'hover:bg-purple-300'
    },
    {
      category: 'Frontend & Development',
      skills: ['React', 'Tailwind', 'Next.js', 'Vite'],
      bgColor: 'bg-orange-100',
      borderColor: 'border-orange-300',
      skillBgColor: 'bg-orange-200',
      skillTextColor: 'text-orange-800',
      skillHoverBg: 'hover:bg-orange-300'
    },
    {
      category: 'AI & Data Science',
      skills: ['Computer Vision', 'LLM & Prompt Engineering', 'PyTorch', 'TensorFlow', 'Pandas', 'MatPlotLib', 'Scikit-Learn'],
      bgColor: 'bg-green-100',
      borderColor: 'border-green-300',
      skillBgColor: 'bg-green-200',
      skillTextColor: 'text-green-800',
      skillHoverBg: 'hover:bg-green-300'
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Skills</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className={`${category.bgColor} rounded-xl p-8 shadow-sm border ${category.borderColor} hover:shadow-md transition-shadow`}>
              <h3 className="text-lg font-semibold text-gray-900 mb-6 text-center">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2 justify-center">
                {category.skills.map((skill) => (
                  <span 
                    key={skill}
                    className={`px-3 py-1.5 ${category.skillBgColor} ${category.skillTextColor} text-sm rounded-md ${category.skillHoverBg} transition-colors duration-200 font-medium`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 