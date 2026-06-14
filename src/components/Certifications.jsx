import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Cloud, Server, Lock, Cpu } from 'lucide-react';
import './Certifications.css';

const certs = [
  { title: "AWS Certified Security - Specialty", icon: <ShieldCheck size={32} /> },
  { title: "AWS Certified Solutions Architect", icon: <Cloud size={32} /> },
  { title: "AWS Developer Associate", icon: <Server size={32} /> },
  { title: "Certified Kubernetes Developer", icon: <Cpu size={32} /> },
  { title: "Secure Software Engineer", icon: <Lock size={32} /> }
];

const Certifications = () => {
  return (
    <section className="certs-section container">
      <h2 className="section-title">Certifications</h2>
      <div className="certs-grid">
        {certs.map((cert, idx) => (
          <motion.div 
            key={idx} 
            className="cert-card glass-card"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
          >
            <div className="cert-icon">{cert.icon}</div>
            <h3 className="cert-title">{cert.title}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
