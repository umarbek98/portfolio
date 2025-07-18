import { useState, useEffect } from "react";
import { portfolioData } from "../../data/portfolio";
import "./Projects.css";

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState("all");
  const { projects } = portfolioData;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      observer.observe(projectsSection);
    }

    return () => {
      if (projectsSection) {
        observer.unobserve(projectsSection);
      }
    };
  }, []);

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) =>
          activeFilter === "featured" ? project.featured : true
        );

  const filters = [
    { key: "all", label: "All Projects" },
    { key: "featured", label: "Featured" },
  ];

  return (
    <section className="projects" id="projects">
      <div className="container">
        <div className={`projects-content ${isVisible ? "fade-in-up" : ""}`}>
          {/* Section Header */}
          <div className="section-header">
            <h2 className="section-title">My Projects</h2>
            <p className="section-subtitle">
              A showcase of my recent work and personal projects
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="project-filters">
            {filters.map((filter) => (
              <button
                key={filter.key}
                className={`filter-btn ${
                  activeFilter === filter.key ? "active" : ""
                }`}
                onClick={() => setActiveFilter(filter.key)}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="projects-grid">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className={`project-card ${isVisible ? "fade-in-up" : ""}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="project-image">
                  <img
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    className="project-screenshot"
                    onError={(e) => {
                      e.target.style.display = "none";
                      e.target.nextSibling.style.display = "flex";
                    }}
                  />
                  <div
                    className="project-image-placeholder"
                    style={{ display: "none" }}
                  >
                    <span className="project-icon">🚀</span>
                    <span className="project-type">Web App</span>
                  </div>
                  <div className="project-overlay">
                    <div className="project-links">
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                        aria-label="View Live Demo"
                      >
                        <span className="link-icon">🌐</span>
                        Live Demo
                      </a>
                      <a
                        href={project.sourceCode}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                        aria-label="View Source Code"
                      >
                        <span className="link-icon">💻</span>
                        Source Code
                      </a>
                    </div>
                  </div>
                </div>

                <div className="project-info">
                  <div className="project-header">
                    <h3 className="project-title">{project.title}</h3>
                    {project.featured && (
                      <span className="featured-badge">Featured</span>
                    )}
                  </div>

                  <p className="project-description">{project.description}</p>

                  <div className="project-tech">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="project-actions">
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                    >
                      View Project
                    </a>
                    <a
                      href={project.sourceCode}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline"
                    >
                      View Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="projects-cta">
            <h3>Interested in working together?</h3>
            <p>
              I'm always open to discussing new opportunities and exciting
              projects.
            </p>
            <a href="#contact" className="btn btn-primary">
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
