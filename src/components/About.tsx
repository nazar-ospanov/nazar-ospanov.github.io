import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">About Me</h2>
        
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Background</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              I'm currently a Computer Science student at UC Berkeley with a 4.0 GPA, 
              where I focus on computer security, machine learning, and backend engineering.
            </p>
            
            <p className="text-gray-600 leading-relaxed">
              When I'm not working on software projects, you can find me tutoring computer security 
              and data structures courses, playing basketball and soccer, or practicing musical instruments. 
              I believe in creating secure, scalable solutions and strive to contribute to meaningful 
              technological advancements.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 