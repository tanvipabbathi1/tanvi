import React from 'react';
import './navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-links">
        <a href="#about">About</a>
        <a href="#experiencess">Experiences</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}
