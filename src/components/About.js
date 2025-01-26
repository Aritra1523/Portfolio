import React from "react";

function About() {
  return (
    <section id="about" className="about">
      <div className="content">
        <div className="title"><span>About Me</span></div>
        <div className="about-details">
          <div className="left">
          <img src="/Aritra photo.jpeg" alt="Aritra Das" />

          </div>
          <div className="right">
            <div className="topic">Designing Is My Passion</div>
            <p>
             <p>   Hello! I'm Aritra Das, a passionate and dedicated frontend web developer with a strong foundation in Computer Science and Engineering. Currently, I am in my final year at Bengal Institute of Technology, where I've been honing my skills in creating responsive, user-friendly, and aesthetically pleasing web applications.</p>

             <p>My journey in web development started with a curiosity about how websites are built and evolved into a full-fledged passion for designing interactive and engaging user interfaces. Over the years, I've gained proficiency in HTML, CSS, JavaScript, and C,C++,JAVA. </p>

             <p>In addition to my technical skills, I am a strong advocate for continuous learning and staying updated with the latest industry trends. This drive for knowledge has led me to participate in various projects and internships, where I've had the opportunity to collaborate with talented teams and contribute to real-world applications.</p>

             <p>When I'm not coding, I enjoy exploring new design trends, working on personal projects, and contributing to open-source communities. I believe in the power of design to solve problems and create meaningful user experiences, and I strive to incorporate this belief into every project I undertake.</p>
            </p>
            <div className="button">
              <button>
              <a href="/Aritra Das CV.pdf" target="_blank" rel="noopener noreferrer">Download CV</a>

              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
