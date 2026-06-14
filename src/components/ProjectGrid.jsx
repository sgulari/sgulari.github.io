import React from 'react';
import ProjectCard from './ProjectCard';
import './ProjectGrid.css';

const initiatives = [
  {
    title: "Zero-Downtime Cloud Migration",
    description: "Orchestrated cloud migration strategy across 20+ product teams, resulting in zero-downtime cutover for mission-critical 10k TPS banking platforms.",
    tags: ["AWS ECS", "Architecture", "Leadership"],
    link: "https://www.linkedin.com/in/sainathgulari/"
  },
  {
    title: "Real-Time Event Modernization",
    description: "Modernized banking core serving 55M+ retail accounts from batch processing to real-time events, cutting latency by 98% to transform customer experience.",
    tags: ["Kafka", "EventBridge", "Java"],
    link: "https://www.linkedin.com/in/sainathgulari/"
  },
  {
    title: "CloudWaze Auto-Failover",
    description: "Engineered one-click regional disaster recovery (DR) capability, ensuring 99.99% availability during regional AWS outages.",
    tags: ["Serverless", "AWS Route53", "Spring Boot"],
    link: "https://www.linkedin.com/in/sainathgulari/"
  },
  {
    title: "Custom AI Tooling Integration",
    description: "Spearheaded the development of custom Claude AI capabilities (MCP) for the engineering team, automating technical support for 1,000+ internal users.",
    tags: ["Claude AI", "MCP", "Python"],
    link: "https://www.linkedin.com/in/sainathgulari/"
  }
];

const ProjectGrid = () => {
  return (
    <section className="projects-section container">
      <h2 className="section-title">Key Initiatives</h2>
      <div className="project-grid">
        {initiatives.map((project, idx) => (
          <ProjectCard key={idx} {...project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectGrid;
