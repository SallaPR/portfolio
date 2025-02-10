import React from "react";
import { Link } from "react-router-dom";
import "./Projects.css";
import { FaGithub } from "react-icons/fa";
import projects from "./projectsData";

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="projects-container">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <img src={project.image} alt={project.title} />
            <div className="project-background"></div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-skills">
                {project.skills &&
                  project.skills.map((skill, index) => (
                    <span key={index} className="project-skill">
                      {skill}
                    </span>
                  ))}
              </div>
              <div className="project-links">
                <Link to={`/project/${project.id}`} className="more-info-link">
                  More info
                </Link>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="livedemo-button"
                  >
                    Live Demo
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="github-button"
                  >
                    <FaGithub size={20} /> GitHub
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
