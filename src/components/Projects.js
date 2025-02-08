import React from "react";
import "./Projects.css";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: "Speden Spelit -nopeuspeli",
    description: "A short description of the project.",
    image: "/images/spede.JPG",
    link: "https://example.com",
    skills: ["Arduino", "C++"],
  },
  {
    id: 2,
    title: "Car App",
    description: "A short description of the project.",
    image: "/images/car_app4.png",
    link: "https://example.com",
    github: "https://github.com/SallaPR/rastitehtava.git",
    skills: ["Qt", "MySQL", "Node.js", "C++"],
  },
  {
    id: 3,
    title: "Web-sivusto",
    description: "A short description of the project.",
    image: "/images/websivusto3.png",
    link: "https://example.com",
    github: "https://github.com/SallaPR/websivusto.git",
    skills: ["JavaScript", "HTML", "CSS"],
  },
  {
    id: 4,
    title: "Movie Website",
    description: "A group project for web app course",
    image: "/images/movieapp.png",
    link: "https://example.com",
    github: "https://github.com/mdbRyhma2/MovieDatabaseApp.git",
    skills: ["JavaScript", "HTML", "CSS", "React", "PostgreSQL"],
  },
];

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
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  More info
                </a>
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
