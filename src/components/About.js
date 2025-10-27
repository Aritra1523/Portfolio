import React from "react";
import { motion } from "framer-motion";
import "./About.css";

function About() {
  return (
    <section id="about" className="about-section">
      <div className="content">
        <motion.div
          className="title"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span>About Me</span>
        </motion.div>

        <div className="about-details">
          <motion.div
            className="left"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <img src="/Aritra photo.jpeg" alt="Aritra Das" />
          </motion.div>

          <motion.div
            className="right"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="topic">Transforming Ideas into Functional and Beautiful Websites</div>
            <p>
  Hello! I’m <span className="highlight">Aritra Das</span>, a passionate and dedicated 
  <strong> Full Stack Web Developer</strong> with a strong foundation in 
  <strong> Computer Science and Engineering</strong>. Currently, I’m in my recent passed out(2025 batch) at 
  <strong> Bengal Institute of Technology</strong>, where I’ve been honing my skills in building 
  responsive, user-friendly, and high-performing web applications.
</p>

<p>
  My journey in web development began with a fascination for how websites work, which quickly evolved 
  into a deep passion for mastering both the <strong>frontend</strong> and <strong>backend</strong> 
  technologies. I’m proficient in <strong>HTML, CSS, JavaScript, React, Node.js, Express, and MongoDB</strong>, 
  and continuously explore modern frameworks and tools to expand my technical expertise.
</p>

<p>
  Beyond web development, I’m deeply interested in the <strong>future of technology</strong> — especially 
  in fields like <strong>Artificial Intelligence (AI)</strong> and <strong>Generative AI (GenAI)</strong>. 
  I’m passionate about learning how to integrate intelligent features into web applications to make them 
  smarter, more interactive, and user-focused.
</p>



            <div className="button">
              <a
                href="Aritra Das CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="download-btn"
              >
                Download CV
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
