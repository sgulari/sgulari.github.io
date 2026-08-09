import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './FooterSection.css';

const FooterSection = () => {
  return (
    <footer className="footer-section" id="contact">
      <div className="container">
        <div className="footer-content">
          <div className="footer-heading">
            <h2 className="section-title">Get In Touch</h2>
            <p className="footer-subtitle">
              Open to connecting on engineering leadership, cloud architecture, and AI innovation.
            </p>
          </div>
          <div className="footer-links">
            <a href="mailto:saigoud1000@gmail.com" className="footer-link">
              <Mail size={18} />
              saigoud1000@gmail.com
            </a>
            <a href="https://www.linkedin.com/in/sainathgulari" target="_blank" rel="noreferrer" className="footer-link">
              <FaLinkedin size={18} />
              linkedin.com/in/sainathgulari
            </a>
            <a href="https://github.com/sgulari" target="_blank" rel="noreferrer" className="footer-link">
              <FaGithub size={18} />
              github.com/sgulari
            </a>
            <span className="footer-link footer-link--static">
              <MapPin size={18} />
              Wilmington, DE
            </span>
            <span className="footer-link footer-link--static">
              <Phone size={18} />
              (361) 720-5898
            </span>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Sainath Gulari. Built with React & Vite.</span>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
