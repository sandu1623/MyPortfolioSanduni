// src/components/ProjectCard.js
import React from 'react';
import './ProjectsCard.css';

function ProjectCard({ project }) {
  const { title, description, imageUrl, technologies, liveLink, githubLink } = project;

  return (
    <div className="project-card">
      <img src={imageUrl} alt={title} className="project-image" />
      <div className="project-info">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="project-tech">
          {technologies.map((tech, index) => (
            <span key={index}>{tech}</span>
          ))}
        </div>
        <div className="project-links">
          {liveLink && (
            <a href={liveLink} target="_blank" rel="noopener noreferrer" className="btn btn-small">
              Live Demo
            </a>
          )}
          {githubLink && (
            <a href={githubLink} target="_blank" rel="noopener noreferrer" className="btn btn-small btn-secondary">
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;