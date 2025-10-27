import React, { useState, useEffect } from "react";
import "./Navbar.css"; 
const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (section) => {
    setActiveLink(section);
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar-container ${isSticky ? "sticky" : ""}`}>
      <div className="navbar">
        <div className="logo">
          <a href="#home">
            <span className="gradient-text">Aritra Das</span>
          </a>
        </div>

        <ul className={`menu ${menuOpen ? "open" : ""}`}>
          {["home", "about", "skills", "achievements", "projects", "contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                className={activeLink === item ? "active" : ""}
                onClick={() => handleLinkClick(item)}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            </li>
          ))}
        </ul>

        <div className="media-icons">
          <a href="#"><i className="fab fa-facebook-f"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
        </div>

        <div className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
          <i className={`fas ${menuOpen ? "fa-times" : "fa-bars"}`}></i>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
