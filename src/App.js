import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Achievements from "./components/Achievements";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import IntroScreen from "./components/IntroScreen";

function App() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <div className="App">
      {showIntro ? (
        // Show Intro Screen first
        <IntroScreen onFinish={() => setShowIntro(false)} />
      ) : (
        // After Intro finishes, show portfolio
        <>
          <Navbar />
          <Home />
          <About />
          <Skills />
          <Achievements />
          <Projects />
          <Contact />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
