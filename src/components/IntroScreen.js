import React, { useEffect } from "react";
import "./IntroScreen.css";

const IntroScreen = ({ onFinish }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 3000);
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="intro-screen">
      <div className="intro-content">
        <div className="intro-header">
          <img src="/Aritra photo.jpeg" alt="Logo" className="intro-logo" />
          <h1 className="intro-title animated-text">Welcome to</h1>
        </div>
        <h1 className="intro-name animated-name">Aritra Das Portfolio</h1>
      </div>
    </div>
  );
};

export default IntroScreen;
