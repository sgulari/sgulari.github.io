import React from 'react';
import ProjectCard from './ProjectCard';
import './ProjectGrid.css';

const projects = [
  {
    title: "Options Income Tracker",
    description: "A comprehensive dashboard for tracking options trading income, utilizing algorithmic strategies like the Wheel Strategy.",
    tags: ["React", "TypeScript", "Node.js"],
    link: "#"
  },
  {
    title: "Algorithmic Trading Bot",
    description: "Automated trading engine executing the Wheel Strategy, complete with real-time market data integration and risk management.",
    tags: ["Python", "AWS", "WebSockets"],
    link: "#"
  },
  {
    title: "Portfolio Terminal",
    description: "This very website! A beautifully crafted, high-performance static portfolio built with React and Vite.",
    tags: ["Vite", "React", "Vanilla CSS"],
    link: "#"
  }
];

const ProjectGrid = () => {
  return (
    <section className="projects-section container">
      <h2 className="section-title">Featured Projects</h2>
      <div className="project-grid">
        {projects.map((project, idx) => (
          <ProjectCard key={idx} {...project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectGrid;
