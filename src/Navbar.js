import React from "react";
import './App.css';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="menu">
      <div className="menu-container">
        <Link to="/" className="menu-home">Daria's Portfolio</Link>
        <nav>
          <a href="#aboutme" className="menu-link">About Me</a>
          <a href="#projects" className="menu-link">Projects</a>
          <a href="#contact" className="menu-link">Contact</a>
          <Link to="/resume" className="menu-link">Resume/Cover Letter</Link>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
