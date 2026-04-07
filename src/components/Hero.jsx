import React from "react";
import instituteImg from "../assets/images/iufa_hero_image.jpeg";
import "../App.css";

export default function Hero() {
  return (
    <section
      className="hero"
      id="home"
      style={{ backgroundImage: `url(${instituteImg})` }}
    >
      <div className="hero-overlay">
        <h1>Professional Accounting Training Academy</h1>
        <p>Expert-led training in manual & computerized accounting with real-world experience, internships, and guaranteed placement support from industry professionals.</p>
        <a href="#contact" className="hero-btn">
          Get In Touch
        </a>
      </div>
    </section>
  );
}