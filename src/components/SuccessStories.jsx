




// import React, { useEffect, useState } from "react";
// import "./SuccessStories.css";

// export default function SuccessStories() {
//   const [stories, setStories] = useState([]);
//   useEffect(() => {
    
//     fetch("https://sheetdb.io/api/v1/j9p47wq31eljk")
//       .then((res) => res.json())
//       .then((data) => setStories(data))
//       .catch((err) => console.log(err));
//   }, []);

//   return (
//     <section id="success-stories" className="success-stories-section">
//       <div className="success-stories-container">
//         <div className="success-stories-header">
//           <h2 className="success-stories-title">Success Stories</h2>
//           <p className="success-stories-subtitle">
//             Meet our alumni who transformed their careers with IUFA's professional accounting training
//             and are now thriving in top companies across India and abroad
//           </p>
//         </div>

//         <div className="stories-grid">
//           {stories.map((story, index) => (
//             <div 
//               key={story.id} 
//               className="story-card"
//               style={{ '--story-color': story.color, '--animation-delay': `${index * 0.1}s` }}
//             >
//               <div className="story-header">
//                 <div className="story-avatar" style={{ background: `linear-gradient(135deg, ${story.color}, ${story.color}dd)` }}>
//                   <span>{story.initials}</span>
//                 </div>
//                 <div className="story-info">
//                   <h3>{story.name}</h3>
//                   <div className="story-role">{story.role}</div>
//                   <div className="story-company">{story.company}</div>
//                 </div>
//               </div>
              
//               <div className="story-content">
//                 <div className="story-quote">
//                   {story.quote}
//                 </div>
                
//                 {/* <div className="story-achievement">
//                   <h4>Achievement</h4>
//                   <p>{story.achievement}</p>
//                 </div> */}
//               </div>

//               <div className="story-stats">
//                 <div className="story-stat">
//                   {/* <span className="stat-value">{story.salary}</span> */}
//                   {/* <span className="stat-label">Package</span> */}
//                 </div>
//                 <div className="story-stat">
//                   {/* <span className="stat-value">{story.placementTime}</span> */}
//                   {/* <span className="stat-label">Placement Time</span> */}
//                 </div>
//                 <div className="story-stat">
//                   {/* <span className="stat-value">{story.course}</span> */}
//                   {/* <span className="stat-label">Course</span> */}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="success-cta">
//           <div className="success-cta-content">
//             <h3>Your Success Story Starts Here</h3>
//             <p>Join 1500+ successful alumni who transformed their careers with IUFA's professional training programs</p>
//             {/* <button className="success-cta-btn">Start Your Journey</button> */}
//             <a href="#contact" className="success-cta-btn">
//   Start Your Journey
// </a>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }






// import React, { useEffect, useState } from "react";
// import "./SuccessStories.css";

// // Swiper
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination } from "swiper/modules";

// import "swiper/css";
// import "swiper/css/pagination";

// export default function SuccessStories() {
//   const [stories, setStories] = useState([]);

//   useEffect(() => {
//     fetch("https://sheetdb.io/api/v1/j9p47wq31eljk")
//       .then((res) => res.json())
//       .then((data) => setStories(data))
//       .catch((err) => console.log(err));
//   }, []);

//   return (
//     <section id="success-stories" className="success-stories-section">
//       <div className="success-stories-container">

//         {/* Header */}
//         <div className="success-stories-header">
//           <h2 className="success-stories-title">
//             Success Stories
//           </h2>

//           <p className="success-stories-subtitle">
//             Meet our alumni who transformed their careers with IUFA's
//             professional accounting training and are now thriving in top
//             companies across India and abroad.
//           </p>
//         </div>

//         {/* Carousel */}
//         <Swiper
//           modules={[Autoplay, Pagination]}
//           spaceBetween={30}
//           slidesPerView={3}
//           loop={true}
//           autoplay={{
//             delay: 2500,
//             disableOnInteraction: false,
//           }}
//           pagination={{ clickable: true }}
//           breakpoints={{
//             0: {
//               slidesPerView: 1,
//             },
//             768: {
//               slidesPerView: 2,
//             },
//             1024: {
//               slidesPerView: 3,
//             },
//           }}
//           className="stories-swiper"
//         >
//           {stories.map((story, index) => (
//             <SwiperSlide key={index}>
//               <div className="story-card">

//                 {/* Top */}
//                 <div className="story-header">

//                   {/* Image */}
//                   <div className="story-avatar">
//                     {story.image ? (
//                       <img
//                         src={story.image}
//                         alt={story.name}
//                         className="story-avatar-img"
//                       />
//                     ) : (
//                       <span>{story.initials}</span>
//                     )}
//                   </div>

//                   {/* Info */}
//                   <div className="story-info">
//                     <h3>{story.name}</h3>
//                     <div className="story-role">{story.role}</div>
//                     <div className="story-company">{story.company}</div>
//                   </div>
//                 </div>

//                 {/* Quote */}
//                 <div className="story-content">
//                   <p className="story-quote">
//                     "{story.quote}"
//                   </p>
//                 </div>

//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>

//         {/* CTA */}
//         <div className="success-cta">
//           <div className="success-cta-content">
//             <h3>Your Success Story Starts Here</h3>

//             <p>
//               Join 500+ successful alumni who transformed their careers
//               with IUFA professional training programs.
//             </p>

//             <a href="#contact" className="success-cta-btn">
//               Start Your Journey
//             </a>
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// }


import React, { useEffect, useState } from "react";
import "./SuccessStories.css";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export default function SuccessStories() {
  const [stories, setStories] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    fetch("https://sheetdb.io/api/v1/j9p47wq31eljk")
      .then((res) => res.json())
      .then((data) => setStories(data))
      .catch((err) => console.log(err));
  }, []);

  // Show only 3 initially
  const visibleStories = showAll ? stories.slice(0, 6): stories.slice(0, 3);

  return (
    <section id="success-stories" className="success-stories-section">
      <div className="success-stories-container">

        {/* Header */}
        <div className="success-stories-header">
          <h2 className="success-stories-title">
            Success Stories
          </h2>

          <p className="success-stories-subtitle">
            Meet our alumni who transformed their careers with IUFA's
            professional accounting training and are now thriving in top
            companies across India and abroad.
          </p>
        </div>

        {/* Carousel */}
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={3}
          loop={showAll}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="stories-swiper"
        >
          {visibleStories.map((story, index) => (
            <SwiperSlide key={index}>
              <div className="story-card">

                {/* Top */}
                <div className="story-header">

                  {/* Image */}
                  <div className="story-avatar">
                    {story.image ? (
                      <img
                        src={story.image}
                        alt={story.name}
                        className="story-avatar-img"
                      />
                    ) : (
                      <span>{story.initials}</span>
                    )}
                  </div>

                  {/* Info */}
                  <div className="story-info">
                    <h3>{story.name}</h3>
                    <div className="story-role">{story.role}</div>
                    <div className="story-company">{story.company}</div>
                  </div>
                </div>

                {/* Quote */}
                <div className="story-content">
                  <p className="story-quote">
                    "{story.quote}"
                  </p>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* View All Button */}
        <div className="stories-view-btn-wrapper">
          <button
            className="stories-view-btn"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "Show Less" : "View All Success Stories"}
          </button>
        </div>

        {/* CTA */}
        <div className="success-cta">
          <div className="success-cta-content">
            <h3>Your Success Story Starts Here</h3>

            <p>
              Join 500+ successful alumni who transformed their careers
              with IUFA professional training programs.
            </p>

            <a href="#contact" className="success-cta-btn">
              Start Your Journey
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}