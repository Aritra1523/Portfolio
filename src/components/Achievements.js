import React from "react";

function Achievements() {
  return (
    <section id="achievements" className="achievements">
      <div className="content">
        <div className="title"><span>Achievements</span></div>
        <div className="boxes">
          <div className="box">
            <div className="icon"><i className="fas fa-desktop"></i></div>
            <div className="topic"><a href=" /WEB DEVOLOPMENT CERIFIVATE.pdf" target="_blank" rel="noopener noreferrer">Web DEVOLOPMENT</a></div>
            <p>I specialize in crafting responsive, user-friendly websites using modern technologies.</p>
          </div>
          <div className="box">
            <div className="icon"><i className="fab fa-aws"></i></div>
            <div className="topic"><a href=" /AWS CERIFICATE.pdf" target="_blank" rel="noopener noreferrer">AWS CERIFICATE</a></div>
            <p>Certified in AWS Cloud solutions, skilled in deploying applications on the AWS platform.</p>
          </div>
          <div className="box">
            <div className="icon"><i className="fab fa-java"></i></div>
            <div className="topic"><a href=" /JAVA PROGRAMMING CERTIFICATE.pdf" target="_blank" rel="noopener noreferrer">Java Programming</a></div>
            <p>Proficient in Java programming, object-oriented principles, and problem-solving techniques.</p>
          </div>
          <div className="box">
            <div className="icon"><i className="fab fa-google"></i></div>
            <div className="topic"><a href=" /GOOGLE IT SUPPORT CERTIFICATE.pdf" target="_blank" >Google IT Support</a></div>
            <p>Certified in troubleshooting, system administration, and network management.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Achievements;
