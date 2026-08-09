import React from 'react';
import { Award, ShieldCheck, Cloud } from 'lucide-react';
import './CertificationsSection.css';

const certifications = [
  {
    name: 'AWS Certified Security - Specialty',
    icon: <ShieldCheck size={24} />,
    color: 'var(--accent-purple)',
  },
  {
    name: 'AWS Certified Solutions Architect',
    icon: <Cloud size={24} />,
    color: 'var(--accent-cyan)',
  },
  {
    name: 'AWS Developer Associate',
    icon: <Cloud size={24} />,
    color: 'var(--accent-cyan)',
  },
  {
    name: 'Anthropic Model Context Protocol',
    icon: <Award size={24} />,
    color: 'var(--accent-purple)',
  },
  {
    name: 'Certified Kubernetes Developer',
    icon: <Award size={24} />,
    color: 'var(--accent-green)',
  },
  {
    name: 'Secure Software Engineer – DevOps Associate',
    icon: <ShieldCheck size={24} />,
    color: 'var(--accent-amber)',
  },
];

const CertificationsSection = () => {
  return (
    <section className="certs-section container" id="certifications">
      <h2 className="section-title">Certifications</h2>
      <div className="certs-grid">
        {certifications.map((cert, idx) => (
          <div key={idx} className="cert-card" style={{ '--cert-color': cert.color }}>
            <div className="cert-icon">{cert.icon}</div>
            <span className="cert-name">{cert.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CertificationsSection;
