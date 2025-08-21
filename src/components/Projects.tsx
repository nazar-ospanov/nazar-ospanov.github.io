import React from 'react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'NYT.tv: TV OS App for Video Content',
      description: 'Created a TV OS app for video material for the New York Times. Contributed on the backend side by creating GraphQL queries to fetch relevant content across multiple NYT products.',
      image: '/nyt-project-logo.jpeg',
      technologies: ['GraphQL', 'Backend', 'TV OS', 'Swift'],
      github: null,
      live: null,
      label: 'NYT Maker Week'
    },
    {
      title: 'NYT Onboarding Bot: AI-Powered Employee Onboarding',
      description: 'Created an onboarding ChatGPT UI for onboarding new employees. Developed an MCP pipeline for retrieving relevant knowledge by department to enhance the onboarding experience.',
      image: '/nyt-project-logo.jpeg',
      technologies: ['MCP', 'LLMs', 'RAGs', 'AI', 'Backend'],
      github: null,
      live: null,
      label: 'NYT Maker Week'
    },
    {
      title: 'AIna: Web Accessibility Platform',
      description: 'Developed an AI-driven web accessibility platform using React, Express, AWS, and MongoDB, enabling automated WCAG-based grading and feedback to promote awareness of visual accessibility and inclusive design.',
      image: '/aina-project.png',
      technologies: ['React', 'Express', 'MongoDB', 'AI', 'WCAG'],
      github: 'https://github.com/nazar-ospanov/sfhacks_frontend',
      live: 'https://youtu.be/2UhWo3-CXU0',
      label: 'Hackathon'
    },
    {
      title: 'ClubHub: UC Berkeley Club Discovery Platform',
      description: 'Built a club discovery platform for UC Berkeley students. Integrated Supabase for real-time database management and user authentication, enabling students to discover, join, and manage campus clubs.',
      image: '/clubhub-project.jpg',
      technologies: ['React', 'TypeScript', 'Vite', 'Supabase'],
      github: 'https://github.com/nazar-ospanov/clubhub-web',
      live: null,
      label: 'Hackathon'
    },
    {
      title: 'Secure File Sharing System',
      description: 'Developed a fully secure file-sharing system in Go with the ability to detect 72% of attacks on a vulnerable database using Symmetric/Asymmetric/Hybrid encryption, MACs, Digital Signatures, and others.',
      image: '/cs161-logo.png',
      technologies: ['Go', 'Encryption', 'MACs', 'Digital Signatures', 'RSA', 'Hybrid Encryption', 'Computer Security'],
      github: null,
      live: null,
      label: 'School'
    }
  ];

  return (
    <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Projects</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 ${
                project.label === 'NYT Maker Week' ? 'ring-2 ring-purple-500' : 
                project.label === 'Hackathon' ? 'ring-2 ring-blue-500' : 
                project.label === 'School' ? 'ring-2 ring-green-500' : ''
              }`}
            >
              {/* Project Image */}
              <div className="h-48 bg-gray-100 overflow-hidden">
                <img
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    // Fallback to placeholder if image fails to load
                    const fallback = document.createElement('div');
                    fallback.className = 'w-full h-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center';
                    fallback.innerHTML = `
                      <div class="text-white text-center">
                        <svg class="w-16 h-16 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <p class="text-sm opacity-75">Project Image</p>
                      </div>
                    `;
                    target.parentElement?.appendChild(fallback);
                  }}
                />
              </div>
              
              {/* Project Content */}
              <div className="p-6">
                {/* Consistent height area for label badge */}
                <div className="h-8 mb-3 flex items-center">
                  {project.label && (
                    <span className={`inline-block text-xs px-2 py-1 rounded-full ${
                      project.label === 'NYT Maker Week' ? 'bg-purple-100 text-purple-800' :
                      project.label === 'Hackathon' ? 'bg-blue-100 text-blue-800' :
                      project.label === 'School' ? 'bg-green-100 text-green-800' : ''
                    }`}>
                      {project.label}
                    </span>
                  )}
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Links */}
                <div className="flex gap-3">
                  {project.github ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gray-900 text-white text-center py-2 px-4 rounded hover:bg-gray-800 transition-colors text-sm"
                    >
                      GitHub
                    </a>
                  ) : (
                    <div className="relative group flex-1">
                      <button 
                        disabled
                        className="w-full bg-gray-300 text-gray-500 text-center py-2 px-4 rounded cursor-not-allowed text-sm"
                      >
                        GitHub
                      </button>
                      
                      {/* Tooltip for different reasons */}
                      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-10 max-w-48">
                        <div className="text-center">
                          <div className="text-gray-300 text-xs leading-relaxed">
                            {project.label === 'NYT Maker Week' ? 'Cannot share due to NYT confidentiality policies' :
                             project.label === 'School' ? 'Cannot share due to UC Berkeley academic integrity policies' :
                             'GitHub link unavailable'}
                          </div>
                        </div>
                        {/* Tooltip arrow */}
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
                      </div>
                    </div>
                  )}
                  
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-blue-600 text-white text-center py-2 px-4 rounded hover:bg-blue-700 transition-colors text-sm"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a
            href="https://github.com/nazar-ospanov"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border border-gray-300 text-gray-700 bg-white rounded-lg hover:bg-gray-50 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects; 