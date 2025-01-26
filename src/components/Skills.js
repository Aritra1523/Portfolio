import React from "react";

function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="content">
        <div className="title"><span>My Skills</span></div>
        <div className="skills-details">
          <div className="text">
            <div  className="topic">Skills Reflect Our Knowledge</div>
            <p>
              I have developed a diverse set of skills throughout my journey as a Computer Science and Engineering student and frontend web developer. Here's a snapshot of my technical proficiency:
            </p>
            <p> <h1>HTML:</h1>90% - I excel in crafting well-structured, semantic HTML5, ensuring that my web pages are not only visually appealing but also accessible and SEO-friendly.</p>
              <p><h1>CSS:</h1> 80% - My expertise in CSS allows me to design responsive and visually stunning web pages, leveraging frameworks like Bootstrap and methodologies like Flexbox and Grid for layout precision.</p>
              <p><h1>JavaScript:</h1> 70% - I have a solid grasp of JavaScript, enabling me to create dynamic and interactive web experiences. I am proficient in using libraries and frameworks like React and Angular.</p>
              <p><h1>Java:</h1> 60% - My knowledge of Java extends to object-oriented programming and building robust backend solutions, enhancing my ability to work on full-stack projects.</p>
              <p><h1>C++:</h1> 70% - I am skilled in C++ programming, focusing on algorithm development, data structures, and efficient problem-solving techniques.</p>
              <p><h1>C:</h1> 60% - My foundation in C includes understanding low-level programming concepts, memory management, and system-level programming.</p>
          </div>
          <div className="boxes">
            <div className="box"><div className="topic">HTML</div><div className="per">90%</div></div>
            <div className="box"><div className="topic">CSS</div><div className="per">80%</div></div>
            <div className="box"><div className="topic">JavaScript</div><div className="per">70%</div></div>
            <div className="box"><div className="topic">Java</div><div className="per">60%</div></div>
            <div className="box"><div className="topic">C++</div><div className="per">70%</div></div>
            <div className="box"><div className="topic">C</div><div className="per">60%</div></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
