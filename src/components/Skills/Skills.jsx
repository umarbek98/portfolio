import { useState, useEffect } from "react";
import { portfolioData } from "../../data/portfolio";
import "./Skills.css";

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { skills } = portfolioData;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    const skillsSection = document.getElementById("skills");
    if (skillsSection) {
      observer.observe(skillsSection);
    }
    return () => {
      if (skillsSection) {
        observer.unobserve(skillsSection);
      }
    };
  }, []);

  const skillCategories = [
    {
      title: "Frontend Technologies",
      skills: skills.frontend,
      icon: "💻",
      color: "primary",
    },
    {
      title: "Backend Technologies",
      skills: skills.backend,
      icon: "⚙️",
      color: "secondary",
    },
    {
      title: "Tools & Platforms",
      skills: skills.tools,
      icon: "🛠️",
      color: "accent",
    },
  ];

  return (
    <section className="skills" id="skills">
      <div className="container">
        <div className={`skills-content ${isVisible ? "fade-in-up" : ""}`}>
          {/* Section Header */}
          <div className="section-header">
            <h2 className="section-title">Skills & Technologies</h2>
            <p className="section-subtitle">
              Technologies and tools I use to bring ideas to life
            </p>
          </div>

          {/* Skills Grid */}
          <div className="skills-grid">
            {skillCategories.map((category, index) => (
              <div key={index} className={`skill-category ${category.color}`}>
                <div className="category-header">
                  <span className="category-icon">{category.icon}</span>
                  <h3 className="category-title">{category.title}</h3>
                </div>

                <div className="skills-list">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="skill-item"
                      style={{
                        animationDelay: `${(index * 3 + skillIndex) * 0.1}s`,
                      }}
                    >
                      <span className="skill-name">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Additional Skills Info */}
          <div className="skills-footer">
            <div className="skills-stats">
              <div className="stat-item">
                <span className="stat-number">15+</span>
                <span className="stat-label">Technologies</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">3+</span>
                <span className="stat-label">Frameworks</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">5+</span>
                <span className="stat-label">Tools</span>
              </div>
            </div>

            <div className="skills-cta">
              <p>Always learning and exploring new technologies</p>
              <a href="#projects" className="btn btn-primary">
                View My Projects
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
