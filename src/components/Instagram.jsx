import React from "react";
import "../App.css";
import instagramIcon from "../assets/images/instagram.png";
export default function Instagram() {
  return (
    <div className="instagram-float">
      <a
        href="https://www.instagram.com/iufaaccounts?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
        target="_blank"
        rel="noopener noreferrer"
        className="instagram-button"
        aria-label="Instagram"
      >
        <div className="instagram-pulse"></div>

        {/* <span className="instagram-icon">📷</span> */}
       <img
  src={instagramIcon}
  alt="Instagram"
  className="instagram-icon"
/>

        <div className="instagram-tooltip">
          Follow us on Instagram
        </div>
      </a>
    </div>
  );
}