import React from 'react';
import './SkillsSection.css';

const skillCategories = [
  {
    title: 'Languages',
    skills: ['Java', 'Python', 'NodeJS', 'Go', 'JavaScript'],
  },
  {
    title: 'Frameworks & APIs',
    skills: ['Spring Boot', 'REST', 'Angular', 'HTML/CSS'],
  },
  {
    title: 'AI & Automation',
    skills: ['GitHub Copilot', 'Claude', 'MCP (Model Context Protocol)'],
  },
  {
    title: 'AWS Cloud',
    skills: ['ECS', 'EC2', 'Lambda', 'CloudFormation', 'MQ', 'Batch', 'EventBridge', 'DynamoDB', 'Route53', 'ALB', 'ASG', 'CloudWatch'],
  },
  {
    title: 'Data & Messaging',
    skills: ['Snowflake', 'Databricks', 'Kafka', 'AmazonMQ'],
  },
  {
    title: 'DevOps & Monitoring',
    skills: ['Docker', 'Jenkins', 'New Relic', 'Splunk', 'GitHub Actions'],
  },
];

const SkillsSection = () => {
  return (
    <section className="skills-section container" id="skills">
      <h2 className="section-title">Technologies</h2>
      <div className="skills-grid">
        {skillCategories.map((category, idx) => (
          <div key={idx} className="skill-category">
            <h3 className="category-title">{category.title}</h3>
            <div className="skill-tags">
              {category.skills.map((skill, sIdx) => (
                <span key={sIdx} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
