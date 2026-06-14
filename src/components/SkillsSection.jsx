import React from 'react';
import './SkillsSection.css';

const skillCategories = [
  {
    title: "Languages & Frameworks",
    skills: ["Java", "Python", "NodeJS", "Go", "Spring Boot", "React"]
  },
  {
    title: "Cloud & DevOps",
    skills: ["AWS (ECS, Lambda, EC2)", "Docker & Kubernetes", "Jenkins CI/CD", "CloudFormation", "Terraform"]
  },
  {
    title: "Data & Architecture",
    skills: ["Kafka & AmazonMQ", "DynamoDB", "Snowflake", "Event-Driven Architecture", "Microservices"]
  },
  {
    title: "AI & Observability",
    skills: ["Claude & Copilot", "Model Context Protocol (MCP)", "New Relic", "Splunk", "SLOs"]
  }
];

const SkillsSection = () => {
  return (
    <section className="skills-section container">
      <h2 className="section-title">Technical Expertise</h2>
      <div className="skills-grid">
        {skillCategories.map((category, idx) => (
          <div key={idx} className="skill-category">
            <h3 className="category-title">{category.title}</h3>
            <ul className="skill-list">
              {category.skills.map((skill, sIdx) => (
                <li key={sIdx} className="skill-item">{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
