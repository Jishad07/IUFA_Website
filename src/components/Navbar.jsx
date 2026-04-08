



// import React from "react";
// import logo from "../assets/images/iufa_logo.jpeg";

// export default function Navbar() {
//   return (
//     <nav
    
//       style={{
//         // background: "#111",
//         // color: "#fff",
//         // padding: "15px 40px",
//         // display: "flex",
//         // justifyContent: "space-between",
//         // alignItems: "center",
//         // borderBottom:"10px solid #3409f6ff",
//         // borderRadius: "50px"
//              background: "#fff",
//         color: "#fff",
//         padding: "15px 40px",
//         display: "flex",
//         justifyContent: "space-between",
//         alignItems: "center",
//         borderBottom: "10px solid #3409f6ff",
//         borderRadius: "50px",
//         position: "fixed",
//         // top: "20px",
//         left: "50%",
//         transform: "translateX(-50%)",
//         width: "92%",
//         zIndex: 1000,
//         boxShadow: "0 6px 20px rgba(0,0,0,0.25)"

//       }}
//     >
//       {/* Logo / Name */}
//       {/* <h2 style={{ margin: 0 }}>IUFA</h2> */}
// <img
//   src={logo}
//   alt="IUFA Logo"
//   style={{ width: "60px", height: "60px",
   
//     borderRadius: "50%",
//     objectFit: "cover"
//    }}
// />

//       {/* Menu */}
//       <div style={{ display: "flex", alignItems: "center", gap: "20px",}}>
//         <a href="#who" style={linkStyle}>Who Are We</a>
//         <a href="#about" style={linkStyle}>About Us </a>
//         <a href="#courses" style={linkStyle}>Courses</a>
//         <a href="#resources" style={linkStyle}>Resources</a>
//         <a href="#contact" style={linkStyle}>Contact Us</a>

//         {/* Apply Button */}
//         <a href="#contact" style={buttonStyle}>
//           Get In Touch
//         </a>
//       </div>
//     </nav>
//   );
// }

// /* Link Style */
// const linkStyle = {
//   color: "#111",
//   textDecoration: "none",
//   fontSize: "16px",
//   fontWeight: "500",
// };

// /* Button Style */
// const buttonStyle = {
//   background: "#00bcd4",
//   color: "#fff",
//   padding: "10px 18px",
//   borderRadius: "6px",
//   textDecoration: "none",
//   fontWeight: "600",
// };



import React, { useState } from "react";
import logo from "../assets/images/iufa_logo.jpeg";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav style={styles.navbar}>
        {/* Logo */}
        <div style={styles.logoContainer}>
          <img src={logo} alt="IUFA Logo" style={styles.logo} />
          <h2 style={styles.brand}>IUFA</h2>
        </div>

        {/* Desktop Menu */}
        <div style={styles.desktopMenu}>
          <a href="#who" style={styles.link}>Who Are We</a>
          <a href="#about" style={styles.link}>About Us</a>
          <a href="#courses" style={styles.link}>Courses</a>
          <a href="#resources" style={styles.link}>Resources</a>
          <a href="#contact" style={styles.link}>Contact Us</a>
          <a href="#contact" style={styles.button}>Get In Touch</a>
        </div>

        {/* Mobile Hamburger */}
        <div
          style={styles.hamburger}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div style={styles.bar}></div>
          <div style={styles.bar}></div>
          <div style={styles.bar}></div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={styles.mobileMenu}>
          <a href="#who" style={styles.mobileLink} onClick={() => setMenuOpen(false)}>Who Are We</a>
          <a href="#about" style={styles.mobileLink} onClick={() => setMenuOpen(false)}>About Us</a>
          <a href="#courses" style={styles.mobileLink} onClick={() => setMenuOpen(false)}>Courses</a>
          <a href="#resources" style={styles.mobileLink} onClick={() => setMenuOpen(false)}>Resources</a>
          <a href="#contact" style={styles.mobileLink} onClick={() => setMenuOpen(false)}>Contact Us</a>
          <a href="#contact" style={styles.mobileButton} onClick={() => setMenuOpen(false)}>Get In Touch</a>
        </div>
      )}
    </>
  );
}

const styles = {
  navbar: {
    position: "fixed",
    top: "20px",
    left: "50%",
    transform: "translateX(-50%)",
    width: "92%",
    maxWidth: "1200px",
    background: "rgba(255, 255, 255, 0.95)",
    backdropFilter: "blur(12px)",
    WebkitBackdropFilter: "blur(12px)",
    borderRadius: "20px",
    padding: "14px 28px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    boxShadow: "0 8px 30px rgba(0,0,0,0.08)",
    zIndex: 1000,
    border: "1px solid rgba(226, 232, 240, 0.8)",
  },

  logoContainer: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
  },

  logo: {
    width: "52px",
    height: "52px",
    borderRadius: "50%",
    objectFit: "cover",
    border: "2px solid #e2e8f0",
  },

  brand: {
    margin: 0,
    color: "#0f172a",
    fontSize: "24px",
    fontWeight: "700",
    letterSpacing: "0.5px",
  },

  desktopMenu: {
    display: "flex",
    alignItems: "center",
    gap: "22px",
  },

  link: {
    color: "#334155",
    textDecoration: "none",
    fontSize: "15px",
    fontWeight: "500",
    transition: "0.3s ease",
  },

  button: {
    background: "linear-gradient(135deg, #2563eb, #06b6d4)",
    color: "#fff",
    padding: "12px 20px",
    borderRadius: "999px",
    textDecoration: "none",
    fontWeight: "600",
    fontSize: "14px",
    boxShadow: "0 6px 20px rgba(37, 99, 235, 0.25)",
  },

  hamburger: {
    display: "none",
    flexDirection: "column",
    gap: "5px",
    cursor: "pointer",
  },

  bar: {
    width: "25px",
    height: "3px",
    backgroundColor: "#0f172a",
    borderRadius: "10px",
  },

  mobileMenu: {
    position: "fixed",
    top: "95px",
    left: "50%",
    transform: "translateX(-50%)",
    width: "92%",
    background: "#ffffff",
    borderRadius: "20px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    zIndex: 999,
  },

  mobileLink: {
    textDecoration: "none",
    color: "#334155",
    fontSize: "16px",
    fontWeight: "500",
  },

  mobileButton: {
    background: "linear-gradient(135deg, #2563eb, #06b6d4)",
    color: "#fff",
    padding: "12px 18px",
    borderRadius: "999px",
    textDecoration: "none",
    fontWeight: "600",
    textAlign: "center",
  },
};