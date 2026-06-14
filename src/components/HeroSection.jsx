import React from 'react';
import { Download, Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section container">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            <span className="gradient-text">Sainath Gulari</span> <br />
            Engineering Leader.
          </h1>
          <p className="hero-subtitle">
            10+ years of experience leading mission-critical fintech systems at scale (55M+ accounts, 10k+ TPS). 
            Specializing in cloud-native modernization, real-time architectures, and building AI-ready teams.
          </p>
          
          <div className="hero-actions">
            <a href="/sainath_gulari_resume.pdf" target="_blank" rel="noreferrer" className="btn-primary">
              <Download size={20} />
              Download Resume
            </a>
            <a href="https://github.com/saigoud1000?tab=repositories" target="_blank" rel="noreferrer" className="btn-secondary">
              <FaGithub size={20} />
              <span>GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/sainathgulari/" target="_blank" rel="noreferrer" className="btn-secondary">
              <FaLinkedin size={20} />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
        
        <div className="hero-visual">
          <div className="profile-image-container">
            <img src="/profile.png" alt="Sainath Gulari" className="profile-image" />
            <div className="profile-glow"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
