import React from "react";
import { motion } from "framer-motion";
import { FaGlobe, FaGithub } from "react-icons/fa";
import "./Projects.css";
const Projects = () => {
  const projects = [
    {
      title: "Portfolio Website",
      link: "https://portfolio-lovat-iota-76.vercel.app/",
      github: "https://github.com/Aritra1523/Portfolio",
      desc: "A personal portfolio built with React showcasing my skills, achievements, and contact form. Designed with responsiveness, interactivity, and smooth animations.",
      tech: ["React", "CSS3", "JavaScript"],
    },
    {
      title: "Infinity Insurance Solution",
      link: "https://zingy-beignet-242c28.netlify.app/",
      github: "https://github.com/Aritra1523/infinity-insurance",
      desc: "An insurance management platform for clients, agents, and employees. Provides a clean UI with responsive layouts and intuitive navigation.",
      tech: ["HTML5", "CSS3", "JavaScript"],
    },
      {
      title: "Sallon App Management Web",
      github: "https://github.com/Aritra1523/Saloon-App",
      desc: "A professional IT service website featuring service sections, project showcases, testimonials, and partner logos with a sleek responsive design.",
      tech: ["HTML", "CSS3", "NODE JS","EXPRESS JS","MONGOOSE"],
    },
    {
      title: "IT Company Website",
      link: "https://resonant-muffin-c3b4ff.netlify.app/",
      github: "https://github.com/Aritra1523/it-company-site",
      desc: "A professional IT service website featuring service sections, project showcases, testimonials, and partner logos with a sleek responsive design.",
      tech: ["HTML5", "CSS3", "JavaScript"],
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="content">
        <motion.div
          className="title"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span>Projects</span>
        </motion.div>

        <div className="projects-grid">
          {projects.map((proj, index) => (
            <motion.div
              className="project-card"
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.7 }}
              whileHover={{ scale: 1.04 }}
            >
              <div className="project-header">
                <h3>{proj.title}</h3>
              </div>

              <p className="project-desc">{proj.desc}</p>

              <div className="tech-stack">
                {proj.tech.map((t, i) => (
                  <span key={i} className="tech-item">{t}</span>
                ))}
              </div>

              <div className="project-links">
                <a
                  href={proj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn live"
                >
                  <FaGlobe /> Live Demo
                </a>
                <a
                  href={proj.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn github"
                >
                  <FaGithub /> GitHub
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
