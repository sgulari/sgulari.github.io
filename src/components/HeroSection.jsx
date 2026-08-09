import React from 'react';
import { Download, Mail, MapPin } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section container" id="hero">
      <div className="hero-content">
        <div className="hero-text">
          <div className="hero-badge">
            <span className="hero-badge__dot"></span>
            Senior Manager, Software Engineering
          </div>
          <h1 className="hero-title">
            Sainath <span className="gradient-text">Gulari</span>
          </h1>
          <p className="hero-subtitle">
            Engineering Leader driving cloud-native modernization, AI innovation, and operational excellence for mission-critical fintech systems at <strong>Capital One</strong>.
          </p>
          <div className="hero-meta">
            <span className="hero-meta__item">
              <MapPin size={16} />
              Wilmington, DE
            </span>
            <span className="hero-meta__item">
              <Mail size={16} />
              <a href="mailto:saigoud1000@gmail.com">saigoud1000@gmail.com</a>
            </span>
          </div>
          
          <div className="hero-actions">
            <a href="/sainath_gulari_resume.pdf" target="_blank" rel="noreferrer" className="btn-primary">
              <Download size={18} />
              Download Resume
            </a>
            <a href="https://github.com/sgulari" target="_blank" rel="noreferrer" className="btn-secondary">
              <FaGithub size={18} />
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/sainathgulari" target="_blank" rel="noreferrer" className="btn-secondary">
              <FaLinkedin size={18} />
              LinkedIn
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
