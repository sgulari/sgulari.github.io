import React from 'react';
import './SkillsSection.css';

const skillCategories = [
  {
    title: "Frontend",
    skills: ["React", "TypeScript", "Vite", "Tailwind CSS", "Vanilla CSS"]
  },
  {
    title: "Backend",
    skills: ["Node.js", "Python", "PostgreSQL", "REST APIs", "WebSockets"]
  },
  {
    title: "DevOps & Cloud",
    skills: ["AWS S3", "EC2", "Docker", "GitHub Actions", "Vercel"]
  }
];

const SkillsSection = () => {
  return (
    <section className="skills-section container">
      <h2 className="section-title">Technical Skills</h2>
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
