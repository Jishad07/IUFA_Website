

import React, { useState } from "react";
// import "../App.css";
import "./Navbar.css";
import logo from "../assets/images/iufa_logo.jpeg";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="navbar">
        {/* Logo */}
        <div className="logoContainer">
          <img src={logo} alt="IUFA Logo" className="logo" />
          <h2 className="brand">IUFA</h2>
        </div>

        {/* Desktop Menu */}
        <div className="desktopMenu">
          <a href="#who" className="link">Who Are We</a>
          <a href="#about" className="link">About Us</a>
          <a href="#courses" className="link">Courses</a>
          <a href="#resources" className="link">Resources</a>
          <a href="#contact" className="link">Contact Us</a>
          <a href="#contact-form" className="button">Get In Touch</a>
        </div>

        {/* Hamburger */}
        <div
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✖" : (
            <>
              <span></span>
              <span></span>
              <span></span>
            </>
          )}
        </div>
      </nav>

      {/* Overlay */}
      {menuOpen && (
        <div className="overlay" onClick={() => setMenuOpen(false)}></div>
      )}

      {/* Drawer */}
      <div className={`drawer ${menuOpen ? "open" : ""}`}>
        <a href="#who" onClick={() => setMenuOpen(false)}>Who Are We</a>
        <a href="#about" onClick={() => setMenuOpen(false)}>About Us</a>
        <a href="#courses" onClick={() => setMenuOpen(false)}>Courses</a>
        <a href="#resources" onClick={() => setMenuOpen(false)}>Resources</a>
        <a href="#contact" onClick={() => setMenuOpen(false)}>Contact Us</a>

        <a
          href="#contact"
          className="drawerBtn"
          onClick={() => setMenuOpen(false)}
        >
          Get In Touch
        </a>
      </div>
    </>
  );
}