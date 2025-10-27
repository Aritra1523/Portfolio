import React from "react";
import { motion } from "framer-motion";
import "./Home.css";

function Home() {
  return (
    <section id="home" className="home">
      <div className="overlay"></div>

      <motion.div
        className="home-content glass"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="text">
          <motion.div
            className="text-one"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Hello,
          </motion.div>

          <motion.div
            className="text-two"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            I'm <span className="highlight">Aritra Das</span>
          </motion.div>

          <motion.div
            className="text-three"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <span className="role">Web Developer</span>
          </motion.div>

          <motion.div
            className="text-four"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            From <span className="location">Kolkata, India</span>
          </motion.div>
        </div>

        <motion.div
          className="button"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <a href="mailto:daritra385@gmail.com">
            <button>Hire Me</button>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Home;
