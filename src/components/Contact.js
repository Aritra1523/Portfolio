import React from "react";
import { motion } from "framer-motion";
import { FaMobileAlt, FaEnvelope, FaLinkedin, FaCode } from "react-icons/fa";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";
import "./Contact.css";

const Contact = () => {
  const contactItems = [
    {
      icon: <FaMobileAlt />,
      text: "9593443777",
      link: "tel:9593443777",
    },
    {
      icon: <FaEnvelope />,
      text: "daritra385@gmail.com",
      link: "mailto:daritra385@gmail.com",
    },
    {
      icon: <FaLinkedin />,
      text: "LinkedIn Profile",
      link: "https://www.linkedin.com/in/aritra-das-web-developer/",
    },
    {
      icon: <SiLeetcode />,
      text: "LeetCode Profile",
      link: "https://leetcode.com/u/Aritra_Das9593/",
    },
    {
      icon: <SiGeeksforgeeks />,
      text: "GeeksforGeeks Profile",
      link: "https://www.geeksforgeeks.org/user/daritra385/",
    },
  ];

  return (
    <section id="contact" className="contact-section">
      <motion.div
        className="contact-container"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className="contact-title">Contact <span>Me</span></h2>
        <p className="contact-subtitle">
          Let’s connect and create something amazing together 🚀
        </p>

        <div className="contact-grid">
          {contactItems.map((item, index) => (
            <motion.a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              className="contact-card"
              whileHover={{ scale: 1.05, background: "rgba(255,255,255,0.2)" }}
            >
              <div className="contact-icon">{item.icon}</div>
              <p>{item.text}</p>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
