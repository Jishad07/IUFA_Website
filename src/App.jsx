// import Hero from "./components/Hero";
// import Navbar from "./components/Navbar";
// import About from "./components/About";
// import Courses from "./components/Courses";
// import SuccessStories from "./components/SuccessStories";
// import Resources from "./components/Resources";
// import Contact from "./components/Contact";
// import Footer from "./components/Footer";
// import WhatsApp from "./components/WhatsApp";

// function App() {
//   return (
//     <div style={{ fontFamily: "Arial, sans-serif" }}>
//       {/* Navbar */}
//            <Navbar />
//       {/* Hero */}
//          <Hero />
       
//       {/* About Section */}
//         <About/>
//       {/* Projects Section */}
//       <Courses/>
//      <SuccessStories/>
//      <Resources/>
//      <Contact/>
     
//       {/* Footer */}
//      <Footer/>
     
//      {/* WhatsApp Floating Button */}
//      <WhatsApp />

//     </div>
//   );
// }

// export default App;


import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Courses from "./components/Courses";
import SuccessStories from "./components/SuccessStories";
import Resources from "./components/Resources";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsApp from "./components/WhatsApp";
import "./App.css";

function App() {
  return (
    <div className="app">
      {/* Navbar */}
      <Navbar />

      {/* Hero */}
      <section id="home">
        <Hero />
      </section>

      {/* About */}
      <section id="about">
        <About />
      </section>

      {/* Courses */}
      <section id="courses">
        <Courses />
      </section>

      {/* Success Stories */}
      <section id="success">
        <SuccessStories />
      </section>

      {/* Resources */}
      <section id="resources">
        <Resources />
      </section>

      {/* Contact */}
      <section id="contact">
        <Contact />
      </section>

      {/* Footer */}
      <Footer />

      {/* WhatsApp Floating Button */}
      <WhatsApp />
    </div>
  );
}

export default App;