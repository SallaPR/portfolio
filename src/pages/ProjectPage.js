import React from "react";
import { useParams } from "react-router-dom";
import projects from "../components/projectsData";
import "./ProjectPage.css";


const ProjectPage = () => {
  const { id } = useParams();  // Get the project id from the URL

  const project = projects.find((project) => project.id === parseInt(id));

  if (!project) {
    return <div>Project not found</div>;
  }

  console.log(projects);

  return (
    <div className="project-page">
      <h2>{project.title}</h2>
      <img src={project.image} alt={project.title} />
      <p>{project.description}</p>
      <h3>Skills</h3>
      <ul>
        {project.skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
      <a href={project.github} target="_blank" rel="noopener noreferrer">
        View on GitHub
      </a>
    </div>
  );
};

export default ProjectPage;
