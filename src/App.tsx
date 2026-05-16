import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import CanvasVulnerability from './pages/CanvasVulnerability';

function usePathname(): string {
  const [pathname, setPathname] = useState<string>(() =>
    typeof window === 'undefined' ? '/' : window.location.pathname
  );

  useEffect(() => {
    const onPop = () => setPathname(window.location.pathname);
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  return pathname;
}

function normalize(path: string): string {
  return path.replace(/\/+$/, '').toLowerCase() || '/';
}

function App() {
  const pathname = usePathname();
  const path = normalize(pathname);

  if (path === '/canvas-vulnerability') {
    return <CanvasVulnerability />;
  }

  if (path === '/echokv') {
    window.location.replace('/echokv.html');
    return null;
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}

export default App;
