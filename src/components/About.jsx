import React from "react";
import "../App.css";

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-content">
          <h1 className="about-title">
            We Craft Accounting Professionals That Empower Businesses
          </h1>

          <p className="about-text">
            Since our inception, we have been revolutionizing accounting education with
            expert-led training and hands-on experience. With our cutting-edge
            curriculum and passion for excellence, we deliver exceptional learning
            tailored to meet your unique career needs.
          </p>

          <div className="about-features">
            <div className="feature-item">
              <div className="feature-icon">✓</div>
              <div className="feature-text">
                <h4>Expert Instruction</h4>
                <p>Learn from industry professionals with real-world experience</p>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-icon">✓</div>
              <div className="feature-text">
                <h4>Modern Software Training</h4>
                <p>Master latest accounting tools and technologies</p>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-icon">✓</div>
              <div className="feature-text">
                <h4>Employment Assistance</h4>
                <p>Get support with job placement and career guidance</p>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-icon">✓</div>
              <div className="feature-text">
                <h4>Hands-on Experience</h4>
                <p>Practical training with real-world projects</p>
              </div>
            </div>
          </div>
        </div>

        <div className="about-visual">
          <div className="about-stats">
            <div className="stat-box">
              <span className="stat-number">788+</span>
              <span className="stat-label">Students Trained</span>
            </div>
            <div className="stat-box">
              <span className="stat-number">98%</span>
              <span className="stat-label">Success Rate</span>
            </div>
            <div className="stat-box">
              <span className="stat-number">46+</span>
              <span className="stat-label">Certifications</span>
            </div>
            <div className="stat-box">
              <span className="stat-number">10+</span>
              <span className="stat-label">Study Programes</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}