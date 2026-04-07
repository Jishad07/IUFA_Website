import React, { useState } from "react";
import "../App.css";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
    alert(`Thank you for subscribing with email: ${email}`);
    setEmail("");
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          {/* Brand Section */}
          <div className="footer-brand">
            <div className="footer-logo">
              <div className="footer-logo-icon">IU</div>
              <div className="footer-logo-text">
                <h3>IUFA Academy</h3>
                <p>Accounts Excellence</p>
              </div>
            </div>
            <p className="footer-description">
              Empowering future financial professionals with comprehensive training, 
              expert faculty, and industry-recognized certifications since 2010.
            </p>
            <div className="footer-social">
              <a href="https://www.facebook.com/iufaacademy" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Facebook">
                <span>f</span>
              </a>
              <a href="https://www.instagram.com/iufaacademy" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram">
                <span>📷</span>
              </a>
              <a href="#" className="social-link" aria-label="Twitter">
                <span>𝕏</span>
              </a>
              <a href="#" className="social-link" aria-label="LinkedIn">
                <span>in</span>
              </a>
              <a href="#" className="social-link" aria-label="YouTube">
                <span>▶</span>
              </a>
            </div>
            
            <div className="footer-accreditations">
              <div className="accreditation-badge">ISO Certified</div>
              <div className="accreditation-badge">Govt. Approved</div>
              <div className="accreditation-badge">NSDC Partner</div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-column" style={{ '--animation-delay': '0.1s' }}>
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#courses">Courses</a></li>
              <li><a href="#success-stories">Success Stories</a></li>
              <li><a href="#resources">Resources</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </div>

          {/* Our Courses */}
          <div className="footer-column" style={{ '--animation-delay': '0.2s' }}>
            <h4 className="footer-title">Our Courses</h4>
            <ul className="footer-links">
              <li><a href="#icpa">ICPA Program</a></li>
              <li><a href="#ifa">IFA Course</a></li>
              <li><a href="#dpa">DPA Diploma</a></li>
              <li><a href="#mcpa">MCPA Masters</a></li>
              <li><a href="#sap">SAP FICO</a></li>
              <li><a href="#taxation">Taxation Expert</a></li>
            </ul>
          </div>

          {/* Support */}
          <div className="footer-column" style={{ '--animation-delay': '0.3s' }}>
            <h4 className="footer-title">Support</h4>
            <ul className="footer-links">
              <li><a href="#admission">Admission Process</a></li>
              <li><a href="#fees">Fee Structure</a></li>
              <li><a href="#placement">Placement Support</a></li>
              <li><a href="#faq">FAQs</a></li>
              <li><a href="#blog">Blog</a></li>
              <li><a href="#downloads">Downloads</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-column" style={{ '--animation-delay': '0.4s' }}>
            <h4 className="footer-title">Contact Info</h4>
            <div className="footer-contact-item">
              <div className="footer-contact-icon">📍</div>
              <div className="footer-contact-details">
                <h4>Address</h4>
                <p>IUFA Accounts Academy<br/>Airport Road, Ayikkarapadi -673637</p>
              </div>
            </div>
            <div className="footer-contact-item">
              <div className="footer-contact-icon">📞</div>
              <div className="footer-contact-details">
                <h4>Phone</h4>
                <p>+91 7909111009</p>
              </div>
            </div>
            <div className="footer-contact-item">
              <div className="footer-contact-icon">✉️</div>
              <div className="footer-contact-details">
                <h4>Email</h4>
                <p>iufaacademy@gmail.com</p>
              </div>
            </div>
            
            {/* Newsletter */}
            <div className="footer-newsletter">
              <h5 className="newsletter-title">Newsletter</h5>
              <form onSubmit={handleNewsletterSubmit} className="newsletter-form">
                <input
                  type="email"
                  className="newsletter-input"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button type="submit" className="newsletter-btn">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-copyright">
            <p>&copy; {new Date().getFullYear()} IUFA Accounts Academy. All rights reserved.</p>
          </div>
          <div className="footer-bottom-links">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
            <a href="#refund">Refund Policy</a>
            <a href="#sitemap">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}