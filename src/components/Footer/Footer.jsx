import { portfolioData } from "../../data/portfolio";
import "./Footer.css";

const Footer = () => {
  const { personal, social } = portfolioData;

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-info">
            <h3 className="footer-name">{personal.name}</h3>
            <p className="footer-tagline">Full Stack Developer</p>
          </div>

          <div className="footer-links">
            <a href={social.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href={social.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href={`mailto:${personal.email}`}>Email</a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} {personal.name}. All rights
            reserved.
          </p>
          <p>Built with React & ❤️</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
