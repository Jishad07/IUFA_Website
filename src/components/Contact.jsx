// import React, { useState } from "react";
// import "../App.css";

// export default function Contact() {
//   const [activeFaq, setActiveFaq] = useState(null);

//   const faqs = [
//     {
//       id: 1,
//       question: "What courses do you offer?",
//       answer: "We offer ICPA, IFA, DPA, MCPA, SAP FICO, and Taxation Expert programs designed for different career levels."
//     },
//     {
//       id: 2,
//       question: "What is the duration of the courses?",
//       answer: "Course durations range from 2 months to 12 months depending on the program and your learning pace."
//     },
//     {
//       id: 3,
//       question: "Do you provide placement assistance?",
//       answer: "Yes, we provide 100% placement assistance with resume building, interview preparation, and job placement support."
//     },
//     {
//       id: 4,
//       question: "What are the class timings?",
//       answer: "We offer flexible timings including weekday batches, weekend batches, and online classes to suit your schedule."
//     },
//     {
//       id: 5,
//       question: "Do you provide study materials?",
//       answer: "Yes, we provide comprehensive study materials, practice files, and access to our online learning portal."
//     }
//   ];

//   const toggleFaq = (id) => {
//     setActiveFaq(activeFaq === id ? null : id);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
    
//     // Get form data
//     const formData = new FormData(e.target);
//     const firstName1 = formData.get('firstName');
//     const lastName1 = formData.get('lastName');
//     const email1 = formData.get('email');
//     const phone1 = formData.get('phone');
//     const course1 = formData.get('course');
//     const message1 = formData.get('message');
    
//     // Create email content for Formspree (use actual form field names)
//     const emailContent = {
//       firstName: firstName1,
//       lastName: lastName1,
//       email: email1,
//       phone: phone1,
//       course: course1 || 'Not specified',
//       message: message1,
//       subject: 'New Inquiry from IUFA Academy Website'
//     };
    
//     // Send email using Formspree
//     fetch('https://formspree.io/f/mojprpkq', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(emailContent)
//     })
//     .then(response => {
//       if (response.ok) {
//         alert('Message sent successfully! We will contact you soon.');
//         e.target.reset();
//       } else {
//         // Fallback to console log for testing
//         console.log('Form data:', emailContent);
//         alert('Thank you for your inquiry! We will contact you soon.');
//         e.target.reset();
//       }
//     })
//     .catch(error => {
//       console.log('Form submitted:', emailContent);
//       alert('Thank you for your inquiry! We will contact you soon.');
//       e.target.reset();
//     });
//   };

//   return (
//     <section id="contact" className="contact-section">
//       <div className="contact-container">
//         <div className="contact-header">
//           <h2 className="contact-title">Get In Touch</h2>
//           <p className="contact-subtitle">
//             Ready to start your journey to becoming a certified accounting professional? 
//             Contact us today and take the first step towards your dream career
//           </p>
//         </div>

//         <div className="contact-content">
//           {/* Contact Information */}
//           <div className="contact-info">
//             <div className="contact-info-card">
//               <h3 className="contact-info-title">Visit Our Academy</h3>
//               <p className="contact-info-text">
//                 We're here to help you choose the right course and guide you through your learning journey. 
//                 Visit our center or contact us using any of the methods below.
//               </p>
              
//               <div className="contact-items">
//                 <div className="contact-item">
//                   <div className="contact-icon">📍</div>
//                   <div className="contact-details">
//                     <h4>Our Location</h4>
//                     <p>IUFA Accounts Academy, Airport Road,Kondotty-673638,</p>
//                   </div>
//                 </div>
                
//                 <div className="contact-item">
//                   <div className="contact-icon">📞</div>
//                   <div className="contact-details">
//                     <h4>Call Us</h4>
//                     <p>+91 7909111009</p>
//                   </div>
//                 </div>
                
//                 <div className="contact-item">
//                   <div className="contact-icon">✉️</div>
//                   <div className="contact-details">
//                     <h4>Email Us</h4>
//                     <p>iufaacademy@gmail.com</p>
//                   </div>
//                 </div>
                
//                 <div className="contact-item">
//                   <div className="contact-icon">🕐</div>
//                   <div className="contact-details">
//                     <h4>Business Hours</h4>
//                     <p>Mon - Sat: 9:00 AM - 7:00 PM</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Contact Form */}
//           <div className="contact-form-wrapper">
//             <div className="contact-form">
//               <h3 className="form-title">Send Us a Message</h3>
//               <form onSubmit={handleSubmit}>
//                 <div className="form-grid">
//                   <div className="form-group">
//                     <label className="form-label">First Name *</label>
//                     <input type="text" name="firstName" className="form-input" required />
//                   </div>
//                   <div className="form-group">
//                     <label className="form-label">Last Name *</label>
//                     <input type="text" name="lastName" className="form-input" required />
//                   </div>
//                 </div>
                
//                 <div className="form-grid">
//                   <div className="form-group">
//                     <label className="form-label">Email *</label>
//                     <input type="email" name="email" className="form-input" required />
//                   </div>
//                   <div className="form-group">
//                     <label className="form-label">Phone *</label>
//                     <input type="tel" name="phone" className="form-input" required />
//                   </div>
//                 </div>
                
//                 <div className="form-group">
//                   <label className="form-label">Select Course</label>
//                   <select name="course" className="form-select">
//                     <option value="">Choose a course</option>
//                     <option value="icpa">ICPA - Certified Professional Accountant</option>
//                     <option value="ifa">IFA - Industrial Financial Accounting</option>
//                     <option value="dpa">DPA - Diploma in Professional Accounting</option>
//                     <option value="mcpa">MCPA - Master Certified Professional Accountant</option>
//                     <option value="sap">SAP FICO Certification</option>
//                     <option value="taxation">Taxation Expert Program</option>
//                   </select>
//                 </div>
                
//                 <div className="form-group full-width">
//                   <label className="form-label">Message *</label>
//                   <textarea name="message" className="form-textarea" required 
//                     placeholder="Tell us about your learning goals and how we can help you..."></textarea>
//                 </div>
                
//                 <button type="submit" className="form-submit">
//                   Send Message
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>

//         {/* Map Section */}
//         <div className="map-section">
//           <div className="map-container">
//             <h3 className="map-title">Find Us Easily</h3>
//              <div className="map-frame">
//                     <iframe
//       title="IUFA Location"
//       src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3914.4788603356046!2d75.95780599999999!3d11.152137000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTHCsDA5JzA3LjciTiA3NcKwNTcnMjguMSJF!5e0!3m2!1sen!2sin!4v1775566275050!5m2!1sen!2sin"
//       width="100%"
//       height="350"
//       style={{ border: 0, borderRadius: "16px" }}
//       allowFullScreen=""
//       loading="lazy"
//       referrerPolicy="no-referrer-when-downgrade"
//     ></iframe>
//              </div>
//             {/* <div className="map-placeholder"> */}
//               <span>Interactive Map Loading...</span>
//             </div>
//           </div>
//         {/* </div> */}

//         {/* FAQ Section */}
//         <div className="faq-section">
//           <div className="faq-container">
//             <h3 className="faq-title">Frequently Asked Questions</h3>
//             <div className="faq-list">
//               {faqs.map((faq) => (
//                 <div key={faq.id} className={`faq-item ${activeFaq === faq.id ? 'active' : ''}`}>
//                   <div className="faq-question" onClick={() => toggleFaq(faq.id)}>
//                     <h4>{faq.question}</h4>
//                     <span className="faq-toggle">+</span>
//                   </div>
//                   <div className="faq-answer">
//                     <p>{faq.answer}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Contact CTA */}
//         <div className="contact-cta">
//           <div className="contact-cta-content">
//             <h3>Ready to Start Your Accounting Career?</h3>
//             <p>Join thousands of successful professionals who started their journey with IUFA Academy</p>
//             <div className="contact-cta-buttons">
//               <button className="contact-cta-btn">Enroll Now</button>
//               <button className="contact-cta-btn-secondary">Schedule a Visit</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


import React, { useState } from "react";
import "../App.css";

export default function Contact() {
  const [activeFaq, setActiveFaq] = useState(null);

  const faqs = [
    {
      id: 1,
      question: "What courses do you offer?",
      answer: "We offer ICPA, IFA, DPA, MCPA, SAP FICO, and Taxation Expert programs designed for different career levels."
    },
    {
      id: 2,
      question: "What is the duration of the courses?",
      answer: "Course durations range from 2 months to 12 months depending on the program and your learning pace."
    },
    {
      id: 3,
      question: "Do you provide placement assistance?",
      answer: "Yes, we provide 100% placement assistance with resume building, interview preparation, and job placement support."
    },
    {
      id: 4,
      question: "What are the class timings?",
      answer: "We offer flexible timings including weekday batches, weekend batches, and online classes to suit your schedule."
    },
    {
      id: 5,
      question: "Do you provide study materials?",
      answer: "Yes, we provide comprehensive study materials, practice files, and access to our online learning portal."
    }
  ];

  const toggleFaq = (id) => {
    setActiveFaq(activeFaq === id ? null : id);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const firstName1 = formData.get("firstName");
    const lastName1 = formData.get("lastName");
    const email1 = formData.get("email");
    const phone1 = formData.get("phone");
    const course1 = formData.get("course");
    const message1 = formData.get("message");

    const emailContent = {
      firstName: firstName1,
      lastName: lastName1,
      email: email1,
      phone: phone1,
      course: course1 || "Not specified",
      message: message1,
      subject: "New Inquiry from IUFA Academy Website"
    };

    fetch("https://formspree.io/f/mojprpkq", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(emailContent)
    })
      .then(response => {
        if (response.ok) {
          alert("Message sent successfully! We will contact you soon.");
          e.target.reset();
        } else {
          console.log("Form data:", emailContent);
          alert("Thank you for your inquiry! We will contact you soon.");
          e.target.reset();
        }
      })
      .catch(error => {
        console.log("Form submitted:", emailContent);
        alert("Thank you for your inquiry! We will contact you soon.");
        e.target.reset();
      });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-header">
          <h2 className="contact-title">Get In Touch</h2>
          <p className="contact-subtitle">
            Ready to start your journey to becoming a certified accounting professional?
            Contact us today and take the first step towards your dream career
          </p>
        </div>

        <div className="contact-content">
          {/* Contact Information */}
          <div className="contact-info">
            <div className="contact-info-card">
              <h3 className="contact-info-title">Visit Our Academy</h3>
              <p className="contact-info-text">
                We're here to help you choose the right course and guide you through your learning journey.
                Visit our center or contact us using any of the methods below.
              </p>

              <div className="contact-items">
                <div className="contact-item">
                  <div className="contact-icon">📍</div>
                  <div className="contact-details">
                    <h4>Our Location</h4>
                    <p>IUFA Accounts Academy, Airport Road, Kondotty-673638</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">📞</div>
                  <div className="contact-details">
                    <h4>Call Us</h4>
                    <p>+91 7909111009</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">✉️</div>
                  <div className="contact-details">
                    <h4>Email Us</h4>
                    <p>iufaacademy@gmail.com</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">🕐</div>
                  <div className="contact-details">
                    <h4>Business Hours</h4>
                    <p>Mon - Sat: 9:00 AM - 7:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-wrapper">
            <div className="contact-form">
              <h3 className="form-title">Send Us a Message</h3>
              <form onSubmit={handleSubmit}>
                <div className="form-grid">
                  <div className="form-group">
                    <label className="form-label">First Name *</label>
                    <input type="text" name="firstName" className="form-input" required />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Last Name *</label>
                    <input type="text" name="lastName" className="form-input" required />
                  </div>
                </div>

                <div className="form-grid">
                  <div className="form-group">
                    <label className="form-label">Email *</label>
                    <input type="email" name="email" className="form-input" required />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Phone *</label>
                    <input type="tel" name="phone" className="form-input" required />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Select Course</label>
                  <select name="course" className="form-select">
                    <option value="">Choose a course</option>
                    <option value="icpa">ICPA - Certified Professional Accountant</option>
                    <option value="ifa">IFA - Industrial Financial Accounting</option>
                    <option value="dpa">DPA - Diploma in Professional Accounting</option>
                    <option value="mcpa">MCPA - Master Certified Professional Accountant</option>
                    <option value="sap">SAP FICO Certification</option>
                    <option value="taxation">Taxation Expert Program</option>
                  </select>
                </div>

                <div className="form-group full-width">
                  <label className="form-label">Message *</label>
                  <textarea
                    name="message"
                    className="form-textarea"
                    required
                    placeholder="Tell us about your learning goals and how we can help you..."
                  ></textarea>
                </div>

                <button type="submit" className="form-submit">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="map-section">
          <div className="map-container">
            <h3 className="map-title">Find Us Easily</h3>
            <div className="map-frame">
              <iframe
                title="IUFA Location"
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3914.4788603356046!2d75.95780599999999!3d11.152137000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTHCsDA5JzA3LjciTiA3NcKwNTcnMjguMSJF!5e0!3m2!1sen!2sin!4v1775566275050!5m2!1sen!2sin"
                width="100%"
                height="350"
                style={{ border: 0, borderRadius: "16px" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="faq-section">
          <div className="faq-container">
            <h3 className="faq-title">Frequently Asked Questions</h3>
            <div className="faq-list">
              {faqs.map((faq) => (
                <div key={faq.id} className={`faq-item ${activeFaq === faq.id ? "active" : ""}`}>
                  <div className="faq-question" onClick={() => toggleFaq(faq.id)}>
                    <h4>{faq.question}</h4>
                    <span className="faq-toggle">{activeFaq === faq.id ? "−" : "+"}</span>
                  </div>
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="contact-cta">
          <div className="contact-cta-content">
            <h3>Ready to Start Your Accounting Career?</h3>
            <p>Join thousands of successful professionals who started their journey with IUFA Academy</p>
            <div className="contact-cta-buttons">
              <button className="contact-cta-btn">Enroll Now</button>
              <button className="contact-cta-btn-secondary">Schedule a Visit</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}