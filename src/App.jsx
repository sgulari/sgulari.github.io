import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ExperienceTimeline from './components/ExperienceTimeline';
import ProjectGrid from './components/ProjectGrid';
import SkillsSection from './components/SkillsSection';
import Certifications from './components/Certifications';
import ContactSection from './components/ContactSection';
import AiChatWidget from './components/AiChatWidget';
import TerminalMode from './pages/TerminalMode';
import NotFound from './pages/NotFound';
import './App.css';

const Home = () => (
  <>
    <HeroSection />
    <ExperienceTimeline />
    <ProjectGrid />
    <SkillsSection />
    <Certifications />
    <ContactSection />
  </>
);

function App() {
  return (
    <Router>
      <div className="glow-bg"></div>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/terminal" element={<TerminalMode />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <AiChatWidget />
    </Router>
  );
}

export default App;
