import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import SummarySection from './components/SummarySection';
import ExperienceSection from './components/ExperienceSection';
import SkillsSection from './components/SkillsSection';
import ProjectGrid from './components/ProjectGrid';
import CertificationsSection from './components/CertificationsSection';
import EducationSection from './components/EducationSection';
import FooterSection from './components/FooterSection';
import './App.css';

function App() {
  return (
    <>
      <div className="glow-bg"></div>
      <Navbar />
      <main>
        <HeroSection />
        <SummarySection />
        <ExperienceSection />
        <SkillsSection />
        <ProjectGrid />
        <CertificationsSection />
        <EducationSection />
        <FooterSection />
      </main>
    </>
  );
}

export default App;
