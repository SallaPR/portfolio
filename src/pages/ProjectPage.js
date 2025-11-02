import { useState, useEffect } from "react";
import { useParams} from "react-router-dom";
import projects from "../components/projectsData";
import "./ProjectPage.css";
import { FaGithub } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";

const ProjectPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);  // Scroll to the top of the page
  }, []);

  const { id } = useParams();
  const project = projects.find((project) => project.id === parseInt(id));

  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);

  if (!project) {
    return <div>Project not found</div>;
  }

  const openModal = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setCurrentIndex(null);
  };

  const nextImage = () => {
    if (currentIndex !== null && project.media.images) {
      const nextIndex = (currentIndex + 1) % project.media.images.length;
      setSelectedImage(project.media.images[nextIndex]);
      setCurrentIndex(nextIndex);
    }
  };

  const prevImage = () => {
    if (currentIndex !== null && project.media.images) {
      const prevIndex = (currentIndex - 1 + project.media.images.length) % project.media.images.length;
      setSelectedImage(project.media.images[prevIndex]);
      setCurrentIndex(prevIndex);
    }
  };

  return (
    <div className="project-page">
      <h2>{project.title}</h2>
      <div className="project-info">
        <div>{project.longdescription}</div>
      </div>

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
              onClick={() => openModal(URL, index)}
            />
          ))}
        </div>
      )}

      <div className="projectpage-links">
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

      {/* Modal for enlarged image */}
      {selectedImage && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <FaTimes className="close-button" onClick={closeModal} />
            
            <div className="modal-image-container">
              <button className="arrow-button left-arrow" onClick={prevImage}>
                &#8249;
              </button>
              <img src={selectedImage} alt="Enlarged view" className="modal-image" />
              <button className="arrow-button right-arrow" onClick={nextImage}>
                &#8250;
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectPage;
