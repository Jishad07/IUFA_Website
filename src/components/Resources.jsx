import React from "react";
import "../App.css";

export default function Resources() {
  const tools = [
    {
      id: 1,
      name: "Tally Prime",
      icon: "📊",
      color: "#3b82f6",
      description: "Complete accounting solution for businesses",
      features: [
        "Financial Accounting",
        "Inventory Management",
        "GST Compliance",
        "Bank Reconciliation",
        "Report Generation"
      ]
    },
    {
      id: 2,
      name: "SAP FICO",
      icon: "🔧",
      color: "#10b981",
      description: "Enterprise resource planning system",
      features: [
        "Financial Accounting",
        "Controlling Module",
        "Asset Accounting",
        "Cost Center Accounting",
        "Profitability Analysis"
      ]
    },
    {
      id: 3,
      name: "MS Excel",
      icon: "📈",
      color: "#117733",
      description: "Advanced spreadsheet and data analysis",
      features: [
        "Financial Modeling",
        "Data Analysis",
        "Pivot Tables",
        "Formulas & Functions",
        "Dashboard Creation"
      ]
    },
    {
      id: 4,
      name: "GST Software",
      icon: "🧾",
      color: "#f59e0b",
      description: "Complete GST compliance solution",
      features: [
        "GST Return Filing",
        "Invoice Generation",
        "Tax Calculation",
        "E-way Bill Generation",
        "GST Reconciliation"
      ]
    },
    {
      id: 5,
      name: "TDS Software",
      icon: "📋",
      color: "#ef4444",
      description: "Tax deduction and reporting system",
      features: [
        "TDS Calculation",
        "Challan Generation",
        "Return Filing",
        "Form 16/16A Generation",
        "Compliance Reports"
      ]
    },
    {
      id: 6,
      name: "Payroll Software",
      icon: "👥",
      color: "#8b5cf6",
      description: "Complete employee payroll management",
      features: [
        "Salary Processing",
        "PF & ESIC Calculation",
        "Leave Management",
        "Attendance Tracking",
        "Statutory Reports"
      ]
    }
  ];

  const steps = [
    {
      id: 1,
      number: "1",
      title: "Choose Your Course",
      description: "Select the course that matches your career goals and current skill level.",
      features: [
        "Career Counseling",
        "Skill Assessment",
        "Course Comparison",
        "Flexible Timings"
      ]
    },
    {
      id: 2,
      number: "2",
      title: "Learn & Practice",
      description: "Attend live classes, complete hands-on projects, and get mentored by industry experts.",
      features: [
        "Live Interactive Classes",
        "Hands-on Projects",
        "Expert Mentorship",
        "Real-world Case Studies"
      ]
    },
    {
      id: 3,
      number: "3",
      title: "Get Placed",
      description: "Leverage our placement support to land your dream job in accounting and finance.",
      features: [
        "Resume Building",
        "Interview Preparation",
        "Job Placement Assistance",
        "Alumni Network Support"
      ]
    }
  ];

  return (
    <section id="resources" className="resources-section">
      <div className="resources-container">
        <div className="resources-header">
          <h2 className="resources-title">Resources & Learning</h2>
          <p className="resources-subtitle">
            Master industry-standard accounting software and tools with our comprehensive training programs
            designed to make you job-ready from day one
          </p>
        </div>

        {/* Tools & Software Section */}
        <div className="tools-section">
          <h3 className="section-title">Tools & Software We Teach</h3>
          <div className="tools-grid">
            {tools.map((tool, index) => (
              <div 
                key={tool.id} 
                className="tool-card"
                style={{ '--tool-color': tool.color, '--animation-delay': `${index * 0.1}s` }}
              >
                <div className="tool-icon" style={{ background: `linear-gradient(135deg, ${tool.color}, ${tool.color}dd)` }}>
                  <span>{tool.icon}</span>
                </div>
                <h4 className="tool-name">{tool.name}</h4>
                <p className="tool-description">{tool.description}</p>
                <ul className="tool-features">
                  {tool.features.map((feature, idx) => (
                    <li key={idx}>
                      <span className="check-icon">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* How It Works Section */}
        <div className="how-it-works-section">
          <h3 className="section-title">How It Works</h3>
          <div className="steps-container">
            {steps.map((step, index) => (
              <div 
                key={step.id} 
                className="step-card"
                style={{ '--animation-delay': `${index * 0.2}s` }}
              >
                <div className="step-number">{step.number}</div>
                <h4 className="step-title">{step.title}</h4>
                <p className="step-description">{step.description}</p>
                <ul className="step-features">
                  {step.features.map((feature, idx) => (
                    <li key={idx}>
                      <span className="check-icon">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Resources CTA */}
        <div className="resources-cta">
          <div className="resources-cta-content">
            <h3>Ready to Master Accounting Tools?</h3>
            <p>Get hands-on training with the latest accounting software and start your journey to becoming a certified professional</p>
            <button className="resources-cta-btn">Download Course Brochure</button>
          </div>
        </div>
      </div>
    </section>
  );
}