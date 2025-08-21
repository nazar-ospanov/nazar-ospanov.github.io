import React from 'react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: 'Backend Engineering Intern, Games API Squad',
      company: 'The New York Times',
      logo: '/nyt-logo.png',
      location: 'New York City, NY',
      period: 'Jun 2025 - Aug 2025',
      description: 'Implemented LLM-driven Automated Content Moderation System with FastAPI for the new multiplayer turn-based NYT game, crucial to enabling stranger-to-stranger chat in the beta-testing stage of development. Designed a maintainable and scalable MVC API architecture that allowed for smooth cross-collaboration experience. Deployed and maintained Kubernetes containers for ACMS (moderation system) in dev, staging, and prod environments.',
      technologies: ['Go', 'Python', 'LLM & Prompt Engineering', 'Docker & Kubernetes', 'System Design']
    },
    {
      title: 'Software Engineering Intern',
      company: 'Triumph Arcade',
      logo: '/triumph-logo.jpeg',
      location: 'San Francisco, CA',
      period: 'May 2024 - May 2025',
      description: 'Developed a fraud detection algorithm and a secure payout review infrastructure with cryptography for secure data storage, preventing fraudulent transactions and saving the company $500k annually. Optimized matchmaking endpoints by implementing caching system that reduced lookup operations on Firestore by 75%. Created a daily rewards feature that increased user retention and boosted the number of total games played by 15%.',
      technologies: ['Go', 'Cloud', 'PostgreSQL', 'System Design', 'Security']
    },
    {
      title: 'Software Engineering Intern',
      company: 'Tengri Lights',
      logo: '/tengri-lights-logo.jpg',
      location: 'Austin, TX',
      period: 'Jun 2023 - Aug 2023',
      description: 'Built authentication system for the backend server using JWT access tokens to prevent unauthorized endpoint calls that saved the company 40% of monthly auth API calls. Created disease detection feature by obtaining labeled data and training a ResNet CNN, which helped prevent 96% of early stage plant diseases.',
      technologies: ['React', 'TypeScript', 'Python', 'Computer Vision', 'Backend Engineering']
    },
    {
      title: 'Project Manager Intern',
      company: 'Green Software Foundation',
      logo: '/green-software-foundation-logo.png',
      location: 'Seattle, WA',
      period: 'Jan 2022 - Jun 2022',
      description: 'Used Agile Methodology to lead a team of eight data analysts in building web-scrapers using Python, Pandas, and SQL to acquire, clean, and visualize 20GB real-time data from open sources and exceed data delivery expectations by 20%.',
      technologies: ['Agile', 'Python', 'Pandas', 'SQL', 'Data Visualization']
    }
  ];

  return (
    <section id="experience" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Experience</h2>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="relative">
              {/* Timeline line */}
              {index < experiences.length - 1 && (
                <div className="absolute left-6 top-16 bottom-0 w-0.5 bg-gray-300"></div>
              )}
              
              <div className="flex items-start space-x-4">
                {/* Company Logo (replacing timeline dot) */}
                <div className="flex-shrink-0 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md border-2 border-gray-100">
                  <img 
                    src={exp.logo} 
                    alt={`${exp.company} logo`}
                    className="w-10 h-10 object-contain rounded-full"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      // Fallback to company initials if logo fails
                      const fallback = document.createElement('div');
                      fallback.className = 'w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm';
                      fallback.textContent = exp.company.split(' ').map(word => word[0]).join('').slice(0, 2);
                      target.parentElement?.appendChild(fallback);
                    }}
                  />
                </div>
                
                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h3 className="text-xl font-semibold text-gray-900">{exp.title}</h3>
                    <span className="text-sm text-gray-500 mt-1 sm:mt-0">{exp.period}</span>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center text-gray-600 mb-3">
                    <span className="font-medium">{exp.company}</span>
                    <span className="hidden sm:inline mx-2">•</span>
                    <span>{exp.location}</span>
                  </div>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">{exp.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience; 