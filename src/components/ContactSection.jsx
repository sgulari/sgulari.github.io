import React from 'react';
import { Mail } from 'lucide-react';
import './ContactSection.css';

const ContactSection = () => {
  return (
    <section className="contact-section container" id="contact">
      <div className="contact-card glass-card">
        <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '1rem' }}>Let's Connect</h2>
        <p className="contact-subtitle">
          I'm currently open for new engineering leadership and principal roles. 
          Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
        
        <div className="contact-actions">
          <a href="mailto:saigoud1000@gmail.com" className="btn-primary">
            <Mail size={20} />
            Say Hello
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
