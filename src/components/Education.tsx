import React from 'react';

const Education: React.FC = () => {
  const courseCategories = [
    {
      name: 'Systems',
      courses: [
        { name: 'Operating Systems', code: 'CS 162', grade: 'A' },
        { name: 'Computer Security', code: 'CS 161', grade: 'A+' },
        { name: 'Introduction to Internet', code: 'CS 168', grade: 'in progress' },
        { name: 'Computer Engineering', code: 'CS 152', grade: 'in progress' },
        { name: 'Computer Architecture', code: 'CS 61C', grade: 'A' },
      ],
      bgColor: 'bg-blue-100',
      textColor: 'text-blue-800'
    },
    {
      name: 'Machine Learning',
      courses: [
        { name: 'Machine Learning', code: 'CS 189', grade: 'A' },
        { name: 'Deep Learning', code: 'CS 182', grade: 'P' },
        { name: 'Optimization Models', code: 'EECS 127', grade: 'A+' },
        { name: 'Agentic AI', code: 'CS 194', grade: 'A' },
        { name: 'Reinforcement Learning', code: 'CS 185', grade: 'in progress'},
        { name: 'Scalable AI', code: 'EECS 194', grade: 'in progress' },
      ],
      bgColor: 'bg-purple-100',
      textColor: 'text-purple-800'
    },
    {
      name: 'Algorithms & Data',
      courses: [
        { name: 'Efficient Algorithms', code: 'CS 170', grade: 'A' },
        { name: 'Data Structures', code: 'CS 61B', grade: 'A+' },
        { name: 'Data Science', code: 'DATA 100', grade: 'A+' }
      ],
      bgColor: 'bg-cyan-100',
      textColor: 'text-cyan-800'
    }
  ];

  return (
    <section id="education" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Education</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Column: Degree & Academic Employment */}
          <div className="space-y-8">
            {/* Education */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Degree</h3>
              <div className="border-l-4 border-blue-600 pl-6 py-2">
                <h4 className="text-lg font-medium text-gray-900">B.A. in Computer Science</h4>
                <p className="text-gray-600">University of California, Berkeley</p>
                <p className="text-sm text-gray-500">Expected Graduation: May 2026</p>
                <p className="text-sm text-gray-500">GPA: 4.0/4.0</p>
              </div>
            </div>
            
            {/* Academic Employment */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Academic Employment</h3>
              <div className="space-y-4">
                <div className="relative">
                  <div className="absolute left-3 top-1.5 w-3 h-3 bg-blue-600 rounded-full"></div>
                  <div className="ml-8">
                    <h4 className="font-medium text-gray-900">CS 189 Course Staff (Machine Learning)</h4>
                    <p className="text-gray-600">UC Berkeley</p>
                    <p className="text-sm text-gray-500">Spring 2026</p>
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute left-3 top-1.5 w-3 h-3 bg-gray-400 rounded-full"></div>
                  <div className="ml-8">
                    <h4 className="font-medium text-gray-900">CS 161 Course Staff (Computer Security)</h4>
                    <p className="text-gray-600">UC Berkeley</p>
                    <p className="text-sm text-gray-500">Fall 2025</p>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="absolute left-3 top-1.5 w-3 h-3 bg-gray-400 rounded-full"></div>
                  <div className="ml-8">
                    <h4 className="font-medium text-gray-900">CS 61B Academic Intern (Data Structures)</h4>
                    <p className="text-gray-600">UC Berkeley</p>
                    <p className="text-sm text-gray-500">Spring 2024</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column: Coursework */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Coursework</h3>
              <div className="flex flex-wrap gap-2">
                {courseCategories.map((category) => 
                  category.courses.map((course) => (
                    <div key={course.name} className="relative group">
                      <span 
                        className={`px-3 py-1 ${category.bgColor} ${category.textColor} text-sm rounded-full cursor-help transition-all duration-200 hover:scale-105`}
                      >
                        {course.name}
                      </span>
                      
                      {/* Tooltip */}
                      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-10">
                        <div className="text-center">
                          <div className="text-gray-300">{course.code}: {course.grade}</div>
                        </div>
                        {/* Tooltip arrow */}
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
            
            {/* Awards */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Awards</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <div>
                    <h4 className="font-medium text-gray-900">UC Berkeley Dean's List</h4>
                    <p className="text-sm text-gray-500">All semesters enrolled</p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <div>
                    <h4 className="font-medium text-gray-900">Albert I. Elkus Memorial Prize</h4>
                    <p className="text-sm text-gray-500">Awarded annually to four or five outstanding students in Music 27</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education; 