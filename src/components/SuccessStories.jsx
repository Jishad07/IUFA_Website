import React from "react";
import "../App.css";

export default function SuccessStories() {
  const stories = [
    {
      id: 1,
      name: "Jishad",
      initials: "J",
      role: "Senior Accountant",
      company: "Deloitte India",
      color: "#3b82f6",
      quote: "IUFA transformed my career completely. The practical training and industry exposure helped me land my dream job at one of the Big 4 firms.",
      achievement: "Completed ICPA with distinction",
      salary: "₹8.5 LPA",
      placementTime: "2 Months",
      course: "ICPA"
    },
    {
      id: 2,
      name: "Amal Ziyan",
      initials: "AZ",
      role: "Finance Manager",
      company: "TCS",
      color: "#10b981",
      quote: "The SAP FICO certification from IUFA opened doors to international opportunities. I'm now leading a team of 12 accountants.",
      achievement: "SAP certified consultant",
      salary: "₹12 LPA",
      placementTime: "1 Month",
      course: "SAP FICO"
    },
    {
      id: 3,
      name: "Arsal",
      initials: "A",
      role: "Tax Consultant",
      company: "KPMG",
      color: "#f59e0b",
      quote: "The Taxation Expert Program gave me deep insights into GST and income tax. Now I handle high-profile corporate clients.",
      achievement: "Top performer in batch",
      salary: "₹7.2 LPA",
      placementTime: "3 Months",
      course: "Taxation Expert"
    },
    {
      id: 4,
      name: "Sajad",
      initials: "S",
      role: "Cost Accountant",
      company: "Reliance Industries",
      color: "#ef4444",
      quote: "From a fresh graduate to a cost accountant at India's largest company - IUFA made this possible with their excellent training.",
      achievement: "100% placement guarantee",
      salary: "₹9.8 LPA",
      placementTime: "1.5 Months",
      course: "MCPA"
    },
    {
      id: 5,
      name: "Asheeq",
      initials: "A",
      role: "Audit Assistant",
      company: "PwC",
      color: "#8b5cf6",
      quote: "The DPA program built my foundation strong. The faculty's guidance and practical approach prepared me for the corporate world.",
      achievement: "Best project award",
      salary: "₹6.5 LPA",
      placementTime: "2.5 Months",
      course: "DPA"
    },
    {
      id: 6,
      name: "Fidha",
      initials: "F",
      role: "Financial Analyst",
      company: "Goldman Sachs",
      color: "#06b6d4",
      quote: "IUFA's MCPA program is comprehensive and industry-relevant. The financial modeling skills I learned are invaluable.",
      achievement: "International placement",
      salary: "₹15 LPA",
      placementTime: "1 Month",
      course: "MCPA"
    }
  ];

  return (
    <section id="success-stories" className="success-stories-section">
      <div className="success-stories-container">
        <div className="success-stories-header">
          <h2 className="success-stories-title">Success Stories</h2>
          <p className="success-stories-subtitle">
            Meet our alumni who transformed their careers with IUFA's professional accounting training
            and are now thriving in top companies across India and abroad
          </p>
        </div>

        <div className="stories-grid">
          {stories.map((story, index) => (
            <div 
              key={story.id} 
              className="story-card"
              style={{ '--story-color': story.color, '--animation-delay': `${index * 0.1}s` }}
            >
              <div className="story-header">
                <div className="story-avatar" style={{ background: `linear-gradient(135deg, ${story.color}, ${story.color}dd)` }}>
                  <span>{story.initials}</span>
                </div>
                <div className="story-info">
                  <h3>{story.name}</h3>
                  <div className="story-role">{story.role}</div>
                  <div className="story-company">{story.company}</div>
                </div>
              </div>
              
              <div className="story-content">
                <div className="story-quote">
                  {story.quote}
                </div>
                
                {/* <div className="story-achievement">
                  <h4>Achievement</h4>
                  <p>{story.achievement}</p>
                </div> */}
              </div>

              <div className="story-stats">
                <div className="story-stat">
                  {/* <span className="stat-value">{story.salary}</span> */}
                  {/* <span className="stat-label">Package</span> */}
                </div>
                <div className="story-stat">
                  {/* <span className="stat-value">{story.placementTime}</span> */}
                  {/* <span className="stat-label">Placement Time</span> */}
                </div>
                <div className="story-stat">
                  {/* <span className="stat-value">{story.course}</span> */}
                  {/* <span className="stat-label">Course</span> */}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="success-cta">
          <div className="success-cta-content">
            <h3>Write Your Own Success Story</h3>
            <p>Join 15,000+ successful alumni who transformed their careers with IUFA's professional training programs</p>
            <button className="success-cta-btn">Start Your Journey</button>
          </div>
        </div>
      </div>
    </section>
  );
}