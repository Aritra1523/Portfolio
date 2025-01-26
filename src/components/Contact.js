import React from "react";

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="content">
        <div className="title"><span>Contact Me</span></div>
        <div className="contact-info">
          <span><i className="fa fa-mobile"></i> 9593443777</span>
          <span><i className="fa fa-envelope"></i> <a href="mailto:daritra385@gmail.com">daritra385@gmail.com</a></span>
          <span><i className="fab fa-linkedin"></i> <a href="https://www.linkedin.com/in/aritra-das-web-developer/" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a></span>
          <span><i className="fas fa-code"></i> <a href="https://leetcode.com/u/Aritra_Das9593/">LeetCode</a></span>
          <span><i class="fas fa-code"></i><a href="https://www.geeksforgeeks.org/user/daritra385/">GEEKS for GEEKS</a></span>

        </div>
      </div>
    </section>
  );
}

export default Contact;
