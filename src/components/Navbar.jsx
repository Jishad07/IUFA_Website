



import React from "react";

export default function Navbar() {
  return (
    <nav
      style={{
        background: "#111",
        color: "#fff",
        padding: "15px 40px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      {/* Logo / Name */}
      <h2 style={{ margin: 0 }}>IUFA</h2>

      {/* Menu */}
      <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
        <a href="#who" style={linkStyle}>Who Are We</a>
        <a href="#about" style={linkStyle}>About Us</a>
        <a href="#courses" style={linkStyle}>Courses</a>
        <a href="#resources" style={linkStyle}>Resources</a>
        <a href="#contact" style={linkStyle}>Contact Us</a>

        {/* Apply Button */}
        <a href="#contact" style={buttonStyle}>
          Get In Touch
        </a>
      </div>
    </nav>
  );
}

/* Link Style */
const linkStyle = {
  color: "#fff",
  textDecoration: "none",
  fontSize: "16px",
  fontWeight: "500",
};

/* Button Style */
const buttonStyle = {
  background: "#00bcd4",
  color: "#fff",
  padding: "10px 18px",
  borderRadius: "6px",
  textDecoration: "none",
  fontWeight: "600",
};