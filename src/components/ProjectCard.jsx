import React from 'react';
import './ProjectGrid.css';
import { ArrowRight } from 'lucide-react';

const ProjectCard = ({ title, description, tags, image, link }) => {
  return (
    <div className="project-card">
      <div className="project-image-placeholder">
        {image ? <img src={image} alt={title} /> : <div className="placeholder-gradient"></div>}
      </div>
      <div className="project-info">
        <h3 className="project-title">{title}</h3>
        <p className="project-desc">{description}</p>
        <div className="project-tags">
          {tags.map((tag, idx) => (
            <span key={idx} className="tag">{tag}</span>
          ))}
        </div>
        <a href={link} className="project-link" target="_blank" rel="noreferrer">
          View Project <ArrowRight size={16} />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
