import React, { useState } from "react";
import { useParams } from "react-router-dom";
import projects from "../components/projectsData";
import "./ProjectPage.css";
import { FaGithub } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";

const images = ["/images/movieapp.png", "/images/movieapp.png", "/images/movieapp.png"];

const ProjectPage = () => {
  const { id } = useParams();
  const project = projects.find((project) => project.id === parseInt(id));

  const [selectedImage, setSelectedImage] = useState(null);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="project-page">
      <h2>{project.title}</h2>
      <div
        dangerouslySetInnerHTML={{
          __html: project.longdescription,
        }}
      ></div>

      {project.media.video && (
        <div className="video-container">
          <iframe
            width="560"
            height="315"
            src={project.media.video}
            title="Project Video"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      )}

      {project.media.custom && project.media.custom.length > 0 && (
        <div className="custom-photo-container">
          {project.media.custom.map((URL, index) => (
            <img
              key={index}
              src={URL}
              alt={`Gallery ${index}`}
              className="custom-photo"
            />
          ))}
        </div>
      )}

      {project.media.images && project.media.images.length > 0 && (
        <div className="photo-gallery">
          {project.media.images.map((URL, index) => (
            <img
              key={index}
              src={URL}
              alt={`Gallery ${index}`}
              className="gallery-thumbnail"
              onClick={() => setSelectedImage(URL)}
            />
          ))}
        </div>
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

      {/* Modal for enlarged image */}
      {selectedImage && (
        <div className="modal" onClick={() => setSelectedImage(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <FaTimes className="close-button" onClick={() => setSelectedImage(null)} />
            <img src={selectedImage} alt="Enlarged view" className="modal-image" />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectPage;
