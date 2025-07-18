import { useState, useEffect } from "react";
import { portfolioData } from "../../data/portfolio";
import "./About.css";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { personal, skills } = portfolioData;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      observer.observe(aboutSection);
    }
    return () => {
      if (aboutSection) {
        observer.unobserve(aboutSection);
      }
    };
  }, []);

  return (
    <section className="about" id="about">
      <div className="container">
        <div className={`about-content ${isVisible ? "fade-in-up" : ""}`}>
          {/* Section Header */}
          <div className="section-header">
            <h2 className="section-title">About Me</h2>
            <p className="section-subtitle">
              Get to know me better and learn about my journey as a developer
            </p>
          </div>
          {/* About Content */}
          <div className="about-grid">
            {/* Left Column - Personal Info & Stats */}
            <div className="about-text">
              <div className="about-intro">
                <h3>Hello! I'm {personal.name}</h3>
                <p>{personal.description}</p>
              </div>

              <div className="about-details">
                <p>
                  I specialize in building modern web applications using
                  cutting-edge technologies. My passion lies in creating
                  user-friendly interfaces and robust backend systems that
                  deliver exceptional user experiences.
                </p>

                <p>
                  When I'm not coding, you can find me exploring new
                  technologies, contributing to open-source projects, or
                  learning about the latest trends in web development. I believe
                  in continuous learning and staying up-to-date with industry
                  best practices.
                </p>
              </div>

              <div className="about-highlights">
                <div className="highlight-item">
                  <span className="highlight-number">2+</span>
                  <span className="highlight-text">Years Experience</span>
                </div>
                <div className="highlight-item">
                  <span className="highlight-number">
                    {portfolioData.projects.length}+
                  </span>
                  <span className="highlight-text">Projects Completed</span>
                </div>
                <div className="highlight-item">
                  <span className="highlight-number">10+</span>
                  <span className="highlight-text">Technologies Mastered</span>
                </div>
              </div>

              <div className="about-cta">
                <a href="#contact" className="btn btn-outline">
                  Let's Work Together
                </a>
              </div>
            </div>

            {/* Right Column - Image & Quick Tech */}
            <div className="about-right">
              <div className="about-image">
                <div className="image-placeholder">
                  <div className="avatar-circle">
                    <span className="avatar-text">
                      {personal.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <div className="floating-elements">
                    <div className="floating-element">💻</div>
                    <div className="floating-element">⚡</div>
                    <div className="floating-element">🚀</div>
                  </div>
                </div>
              </div>

              {/* Quick Skills Preview */}
              <div className="skills-preview">
                <h4>Core Technologies</h4>
                <div className="tech-stack">
                  {skills.frontend.slice(0, 4).map((skill, index) => (
                    <div key={index} className="tech-item">
                      {skill}
                    </div>
                  ))}
                </div>
                <a href="#skills" className="view-all-skills">
                  View All Skills →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
