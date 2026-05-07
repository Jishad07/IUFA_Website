import React, { useEffect, useState } from "react";
import logo from "../assets/images/iufa_logo.jpeg";
import "./SplashScreen.css";

const SplashScreen = ({ onFinish }) => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);

      setTimeout(() => {
        onFinish();
      }, 500);
    }, 2500);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className={`splash-screen ${fadeOut ? "fade-out" : ""}`}>
      <img
        src={logo}
        alt="IUFA Logo"
        className="splash-logo"
      />
    </div>
  );
};

export default SplashScreen;