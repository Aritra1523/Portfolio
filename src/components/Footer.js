import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaHeart } from "react-icons/fa";
import "./Footer.css";
const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-content">
        <h2 className="thank-text">Thank You 💫</h2>
        <p className="visit-text">Let’s connect and create something amazing together!</p>

        <div className="footer-socials">
          <a href="mailto:daritra385@gmail.com" target="_blank" rel="noopener noreferrer">
            <FaEnvelope />
          </a>
          <a href="https://www.linkedin.com/in/aritra-das-web-developer/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://github.com/Aritra1523" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
        </div>

        <div className="footer-bottom">
          <p>
            Crafted with <FaHeart className="heart-icon" /> by{" "}
            <span className="highlight">Aritra Das</span> © 2025 | All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
