import React from "react";
import "../App.css"; // CSS dosyasını dahil et

function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <h2 className="project-title">{project.title}</h2>
      <p className="project-description">{project.description}</p>
      <a href={project.link} className="project-link">
        Detaylar
      </a>
    </div>
  );
}

export default ProjectCard;
