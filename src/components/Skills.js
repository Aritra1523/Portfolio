import React from "react";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaJava, FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import "./Skills.css";
function Skills() {
  const skills = [
    { name: "HTML", level: 90, icon: <FaHtml5 color="#e34c26" /> },
    { name: "CSS", level: 85, icon: <FaCss3Alt color="#1572B6" /> },
    { name: "JavaScript", level: 75, icon: <FaJs color="#f7df1e" /> },
    { name: "React", level: 70, icon: <FaReact color="#61DBFB" /> },
    { name: "Node.js", level: 70, icon: <FaNodeJs color="#68A063" /> },
    { name: "Express.js", level: 65, icon: <SiExpress color="#f2f2f2" /> },
    { name: "Java", level: 70, icon: <FaJava color="#f89820" /> },
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="content">
        <motion.div
          className="title"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span>My Skills</span>
        </motion.div>

        <motion.p
          className="intro-text"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          I have built a strong technical foundation through continuous learning and real-world projects.
          My focus is on building elegant, efficient, and scalable applications using modern web technologies.
        </motion.p>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="skill-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <div className="skill-icon">{skill.icon}</div>
              <h3>{skill.name}</h3>
              <div className="progress-bar">
                <motion.div
                  className="progress-fill"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                />
              </div>
              <span className="percent">{skill.level}%</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
