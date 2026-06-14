import React from 'react';
import { motion } from 'framer-motion';
import './ExperienceTimeline.css';

const experiences = [
  {
    role: "Manager, Software Engineering",
    company: "Capital One",
    date: "Aug 2022 – Present",
    details: [
      "Scaled engineering squad and managed delivery for 8+ engineers building 10k TPS platforms.",
      "Orchestrated cloud migration strategy across 20+ teams (zero-downtime cutover).",
      "Modernized banking core serving 55M+ retail accounts from batch to real-time events, cutting latency by 98%.",
      "Spearheaded the development of custom Claude AI capabilities for the team, automating technical support and driving operational efficiency for over 1,000+ internal users."
    ]
  },
  {
    role: "Principal Software Engineer",
    company: "Capital One",
    date: "Jan 2020 – Aug 2022",
    details: [
      "Designed and delivered Small Business Digital Account Opening platform (Spring Boot/NodeJS).",
      "Engineered 'CloudWaze' auto-failover capability enabling one-click regional DR (99.99% availability).",
      "Resolved complex production bottlenecks using New Relic to debug heap memory leaks."
    ]
  },
  {
    role: "Associate SE → Software Engineer",
    company: "Capital One",
    date: "Mar 2017 – Jan 2020",
    details: [
      "Engineered CI/CD pipelines enabling zero-downtime Blue/Green deployments.",
      "Built scalable Java Kafka-based audit logging to ensure regulatory compliance."
    ]
  },
  {
    role: "Java Developer",
    company: "Canopy One Solutions",
    date: "Jan 2016 – Mar 2017",
    details: [
      "Developed automated validation tools (Java Cucumber/Karate) and service health dashboards."
    ]
  }
];

const ExperienceTimeline = () => {
  return (
    <section className="timeline-section container" id="experience">
      <h2 className="section-title">Experience Timeline</h2>
      <div className="timeline-container">
        {experiences.map((exp, idx) => (
          <motion.div 
            key={idx} 
            className="timeline-item"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <div className="timeline-dot"></div>
            <div className="timeline-content glass-card">
              <span className="timeline-date">{exp.date}</span>
              <h3 className="timeline-role">{exp.role}</h3>
              <h4 className="timeline-company">{exp.company}</h4>
              <ul className="timeline-details">
                {exp.details.map((detail, dIdx) => (
                  <li key={dIdx}>{detail}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceTimeline;
