import React from 'react';
import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Process from './components/Process';
import FeaturedProjects from './components/FeaturedProjects';
import About from './components/About';
import CallToAction from './components/CallToAction';
import ContactFooter from './components/ContactFooter';
import ProjectDetail from './components/ProjectDetail';

function App() {
  const [language, setLanguage] = useState('english');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [selectedProject, setSelectedProject] = useState<any>(null);

  if (selectedProject) {
    return (
      <ProjectDetail
        project={selectedProject}
        onBack={() => setSelectedProject(null)}
        language={language}
        isDarkMode={isDarkMode}
      />
    );
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'bg-gray-900' : 'bg-stone-50'}`}>
      <Header language={language} setLanguage={setLanguage} isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <Hero language={language} isDarkMode={isDarkMode} />
      <Services language={language} isDarkMode={isDarkMode} />
      <FeaturedProjects language={language} isDarkMode={isDarkMode} onProjectClick={setSelectedProject} />
      <Process language={language} isDarkMode={isDarkMode} />
      <About language={language} isDarkMode={isDarkMode} />
      <CallToAction language={language} isDarkMode={isDarkMode} />
      <ContactFooter language={language} isDarkMode={isDarkMode} />
    </div>
  );
}

export default App;