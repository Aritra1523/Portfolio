import React from "react";
import { motion } from "framer-motion";
import { FaDesktop, FaAws, FaJava, FaGoogle } from "react-icons/fa";
import "./Achievements.css";
function Achievements() {
  const achievements = [
    {
      title: "Web Development",
      icon: <FaDesktop color="#00b4ff" />,
      desc: "Crafting responsive, user-friendly, and high-performance websites using modern technologies.",
      link: "/WEB DEVOLOPMENT CERIFIVATE.pdf",
    },
    {
      title: "AWS Certified",
      icon: <FaAws color="#ff9900" />,
      desc: "Certified in AWS Cloud Solutions — skilled in deploying and managing scalable cloud applications.",
      link: "/AWS CERIFICATE.pdf",
    },
    {
      title: "Java Programming",
      icon: <FaJava color="#f89820" />,
      desc: "Strong foundation in Java, object-oriented programming, and backend development techniques.",
      link: "/JAVA PROGRAMMING CERTIFICATE.pdf",
    },
    {
      title: "Google IT Support",
      icon: <FaGoogle color="#4285F4" />,
      desc: "Trained in system administration, troubleshooting, and IT infrastructure support.",
      link: "/GOOGLE IT SUPPORT CERTIFICATE.pdf",
    },
  ];

  return (
    <section id="achievements" className="achievements-section">
      <div className="content">
        <motion.div
          className="title"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span>Achievements</span>
        </motion.div>

        <div className="achievements-grid">
          {achievements.map((achieve, index) => (
            <motion.div
              key={index}
              className="achievement-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
            >
              <div className="icon-container">{achieve.icon}</div>
              <h3>{achieve.title}</h3>
              <p>{achieve.desc}</p>
              <a
                href={achieve.link}
                target="_blank"
                rel="noopener noreferrer"
                className="view-btn"
              >
                View Certificate
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Achievements;
