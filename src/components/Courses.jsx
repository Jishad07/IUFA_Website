import React from "react";
import "../App.css";

export default function Courses() {
  const courses = [
    {
      id: 1,
      title: "ICPA - Certified Professional Accountant",
      duration: "6 Months",
      level: "Professional",
      students: "2,500+",
      rating: "4.9",
      price: "₹50,000",
      features: [
        "Financial Accounting",
        "Cost Management",
        "Taxation",
        "Auditing Basics",
        "ERP Software"
      ],
      icon: "📊",
      color: "#3b82f6"
    },
    {
      id: 2,
      title: "IFA - Industrial Financial Accounting",
      duration: "6 Months",
      level: "Advanced",
      students: "1,800+",
      rating: "4.8",
      price: "₹40,000",
      features: [
        "Advanced Accounting",
        "Business Finance",
        "Inventory Management",
        "Payroll Systems",
        "Tally Prime"
      ],
      icon: "💼",
      color: "#10b981"
    },
    {
      id: 3,
      title: "DPA - Diploma in Professional Accounting",
      duration: "6 Months",
      level: "Foundation",
      students: "3,200+",
      rating: "4.7",
      price: "₹40,000",
      features: [
        "Basic Accounting",
        "Computerized Accounting",
        "GST Basics",
        "TDS Concepts",
        "MS Office Skills"
      ],
      icon: "📈",
      color: "#f59e0b"
    },
    {
      id: 4,
      title: "MCPA - Master Certified Professional Accountant",
      duration: "6 Months",
      level: "Expert",
      students: "950+",
      rating: "5.0",
      price: "₹80,000",
      features: [
        "Strategic Financial Management",
        "International Accounting",
        "Forensic Accounting",
        "Financial Modeling",
        "SAP FICO"
      ],
      icon: "🎯",
      color: "#ef4444"
    },
    {
      id: 5,
      title: "SAP FICO Certification",
      duration: "2 Months",
      level: "Specialized",
      students: "1,200+",
      rating: "4.9",
      price: "₹40,000",
      features: [
        "SAP Configuration",
        "FI Module",
        "CO Module",
        "Real-time Projects",
        "Certification Prep"
      ],
      icon: "🔧",
      color: "#8b5cf6"
    },
    {
      id: 6,
      title: "Taxation Expert Program",
      duration: "3 Months",
      level: "Specialized",
      students: "1,500+",
      rating: "4.8",
      price: "₹30,000",
      features: [
        "Income Tax",
        "GST Compliance",
        "Tax Planning",
        "Tax Audit",
        "E-filing Procedures"
      ],
      icon: "🧾",
      color: "#06b6d4"
    }
  ];

  return (
    <section id="courses" className="courses-section">
      <div className="courses-container">
        <div className="courses-header">
          <h2 className="courses-title">Our Professional Courses</h2>
          <p className="courses-subtitle">
            Master the art of accounting with our industry-recognized certification programs
            designed by experts to accelerate your career growth
          </p>
        </div>

        <div className="courses-grid">
          {courses.map((course, index) => (
            <div 
              key={course.id} 
              className="course-card"
              style={{ '--course-color': course.color, '--animation-delay': `${index * 0.1}s` }}
            >
              <div className="course-header">
                <div className="course-icon" style={{ background: `linear-gradient(135deg, ${course.color}, ${course.color}dd)` }}>
                  <span>{course.icon}</span>
                </div>
                <div className="course-badge">{course.level}</div>
              </div>
              
              <div className="course-content">
                <h3 className="course-title">{course.title}</h3>
                
                <div className="course-meta">
                  <div className="meta-item">
                    <span className="meta-icon">⏱️</span>
                    <span>{course.duration}</span>
                  </div>
                  <div className="meta-item">
                    <span className="meta-icon">👥</span>
                    <span>{course.students}</span>
                  </div>
                  <div className="meta-item">
                    <span className="meta-icon">⭐</span>
                    <span>{course.rating}</span>
                  </div>
                </div>

                <ul className="course-features">
                  {course.features.map((feature, idx) => (
                    <li key={idx}>
                      <span className="check-icon">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="course-footer">
                  <div className="course-price">
                    <span className="price-label">Course Fee</span>
                    <span className="price-amount">{course.price}</span>
                  </div>
                  <button className="course-btn">
                    Enroll Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="courses-cta">
          <div className="cta-content">
            <h3>Ready to Start Your Professional Journey?</h3>
            <p>Join 15,000+ successful alumni who transformed their careers with IUFA</p>
            <button className="cta-btn">Get Free Career Counseling</button>
          </div>
        </div>
      </div>
    </section>
  );
}