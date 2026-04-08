// import React from "react";
// import instituteImg from "../assets/images/iufa_hero_image.jpeg";
// import "../App.css";

// export default function Hero() {
//   return (
//     <section
//       className="hero"
//       id="home"
//       style={{ backgroundImage: `url(${instituteImg})` }}
//     >
//       <div className="hero-overlay">
//         <h1>Professional Accounting Training Academy</h1>
//         <p>Expert-led training in manual & computerized accounting with real-world experience, internships, and guaranteed placement support from industry professionals.</p>
//         <a href="#contact" className="hero-btn">
//           Get In Touch
//         </a>
//       </div>
//     </section>
//   );
// }


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
        <span className="hero-badge">Professional Accounting Training Institute</span>

        <h1>
          Build Your Career in
          <span> Accounting & Finance</span>
        </h1>

        <p>
          Expert-led training in manual and computerized accounting with
          real-world practice, internships, and placement-focused support
          designed for future finance professionals.
        </p>

        <div className="hero-buttons">
          <a href="#contact" className="hero-btn primary">
            Get In Touch
          </a>
          <a href="#courses" className="hero-btn secondary">
            Explore Courses
          </a>
        </div>

        <div className="hero-stats">
          <div className="hero-stat">
            <h3>100%</h3>
            <span>Practical Training</span>
          </div>
          <div className="hero-stat">
            <h3>Expert</h3>
            <span>Industry Mentors</span>
          </div>
          <div className="hero-stat">
            <h3>Career</h3>
            <span>Placement Support</span>
          </div>
        </div>
      </div>
    </section>
  );
}