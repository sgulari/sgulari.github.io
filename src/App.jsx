import React from 'react';
import HeroSection from './components/HeroSection';
import ProjectGrid from './components/ProjectGrid';
import SkillsSection from './components/SkillsSection';
import './App.css';

function App() {
  return (
    <>
      <div className="glow-bg"></div>
      <main>
        <HeroSection />
        <ProjectGrid />
        <SkillsSection />
      </main>
    </>
  );
}

export default App;
