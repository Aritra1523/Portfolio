import React from "react";

function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="content">
        <div className="title"><span>Projects</span></div>
        <div className="boxes">
          <div className="box">
            <div className="icon">
              <i className="fas fa-user"></i>
            </div>
            <div className="topic">
              <a href="https://fanciful-gumdrop-fa3d8a.netlify.app/">
                <h2>Portfolio</h2>
              </a>
            </div>
            <p><strong>Project Description:</strong> Responsive Design: Implemented a responsive layout to ensure optimal viewing experience across various devices, including desktops, tablets, and smartphones. Interactive Elements: Added interactive features such as image sliders, modals, and animations using JavaScript. Project Showcase: Created dedicated sections to display project details, including descriptions, technologies used, and links to live demos or repositories. About Me Section: Developed a comprehensive "About Me" section detailing professional background, skills, and achievements. Contact Form: Integrated a functional contact form for visitors to reach out, utilizing JavaScript for form validation and handling. Styling: Utilized advanced CSS techniques, including flexbox, grid layouts, and custom animations, to enhance the visual appeal and user experience. Performance Optimization: Ensured fast load times and smooth performance by optimizing images, code, and leveraging browser caching.</p>
            <p><strong>Technologies Used:</strong> React</p>
          </div>

          <div className="box">
            <div className="icon">
              <i className="fas fa-briefcase"></i>
            </div>
            <div className="topic">
              <a href="https://zingy-beignet-242c28.netlify.app/">
                <h2>Infinity Insurance Solution</h2>
              </a>
            </div>
            <p><strong>Project Description:</strong> Developed a comprehensive Insurance application to manage Clients, Agents, Employees, and their insurance policy details.</p>
            <p><strong>Key Features:</strong></p>
            <ul>
              <li>Developed the front-end for Infinity Insurance Solutions, an insurance platform designed to provide users with an intuitive experience for managing their policies and exploring insurance products.</li>
              <li>The website features a clean, user-friendly design with responsive layouts optimized for both desktop and mobile devices.</li>
            </ul>
            <p><strong>Technologies Used:</strong> HTML5, CSS3, JavaScript</p>
          </div>

          <div className="box">
            <div className="icon">
              <i className="fas fa-briefcase"></i>
            </div>
            <div className="topic">
              <a href="https://resonant-muffin-c3b4ff.netlify.app/">
                <h2>A IT Company Website</h2>
              </a>
            </div>
            <p><strong>Project Description:</strong> I developed the website for Aritra's IT Co., a company specializing in creating exceptional digital experiences. The site serves as a comprehensive platform showcasing the company's services, expertise, and portfolio. It features a clean, user-friendly design with responsive layouts optimized for both desktop and mobile devices.</p>
            <p><strong>Key Features:</strong></p>
            <ul>
              <li>Service Overview: Detailed descriptions of services offered, including web design, app development, graphic design, and website hosting.</li>
              <li>Portfolio Showcase: Presentation of completed projects, such as Infinity Insurance Solutions and an Amazon Clone Website, highlighting the company's capabilities.</li>
              <li>Client Testimonials: Inclusion of positive feedback from clients to build credibility and trust.</li>
              <li>Blog Section: Regularly updated articles providing insights into web design, digital marketing, and related topics.</li>
              <li>Partner Logos: Display of collaborations with esteemed partners like Google, Microsoft Azure, and Razorpay.</li>
            </ul>
            <p><strong>Technologies Used:</strong> HTML5, CSS3, JavaScript</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
