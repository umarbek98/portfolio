import { useState, useEffect } from "react";
import { portfolioData } from "../../data/portfolio";
import "./Hero.css";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const { personal, social } = portfolioData;

  return (
    <section className="hero" id="home">
      <div className="container">
        <div className={`hero-content ${isVisible ? "fade-in-up" : ""}`}>
          <div className="hero-text">
            <h1 className="hero-title">
              Hi, I'm <span className="text-highlight">{personal.name}</span>
            </h1>
            <h2 className="hero-subtitle">{personal.title}</h2>
            <p className="hero-description">{personal.subtitle}</p>
            <p className="hero-bio">{personal.description}</p>

            <div className="hero-buttons">
              <a href="#projects" className="btn btn-primary">
                View My Work
              </a>
              <a href="#contact" className="btn btn-outline">
                Get In Touch
              </a>
            </div>

            <div className="hero-social">
              <a
                href={social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="GitHub"
              >
                <i className="social-icon">🔗</i>
                GitHub
              </a>
              <a
                href={social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="LinkedIn"
              >
                <i className="social-icon">💼</i>
                LinkedIn
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-card">
              <div className="card-content">
                <h3>Full Stack Developer</h3>
                <p>
                  JavaScript • TypeScript • React • Redux • Node.js • Express.js
                  • MongoDB • PostgreSQL • RESTful APIs • GraphQL
                </p>
                <div className="skills-preview">
                  {personal.location && (
                    <span className="location">📍 {personal.location}</span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
