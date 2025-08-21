import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center flex flex-col items-center">
        <div className="relative w-40 h-40 mb-8">
          <img
            src="/profile.jpg"
            alt="Nazar Ospanov"
            className="w-40 h-40 rounded-full object-cover shadow-lg border-4 border-blue-100"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.onerror = null;
              target.style.display = "none";
              const fallback = document.createElement("div");
              fallback.className = "w-40 h-40 rounded-full bg-gradient-to-br from-blue-200 via-blue-100 to-blue-300 flex items-center justify-center shadow-lg border-4 border-blue-100 absolute top-0 left-0";
              fallback.innerHTML = `<span class='text-6xl text-blue-700 font-bold'>NO</span>`;
              target.parentElement?.appendChild(fallback);
            }}
          />
          {/* Fallback for no-JS: show initials with Tailwind styling */}
          <noscript>
            <div className="w-40 h-40 rounded-full bg-gradient-to-br from-blue-200 via-blue-100 to-blue-300 flex items-center justify-center shadow-lg border-4 border-blue-100">
              <span className="text-6xl text-blue-700 font-bold">NO</span>
            </div>
          </noscript>
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
          Hi! I'm <span className="text-blue-600">Nazar Ospanov</span> 👋
        </h1>
        
        <p className="text-xl sm:text-2xl text-gray-600 mb-8 leading-relaxed max-w-4xl">
          I'm a Computer Science student at UC Berkeley passionate about software engineering and machine learning. 
          I love building secure systems, developing AI applications, and exploring computer security and data science.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button 
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
          >
            Learn More
          </button>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 border-2 border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-600 hover:text-white transition-colors"
          >
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero; 