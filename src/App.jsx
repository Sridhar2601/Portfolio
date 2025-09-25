// import React from 'react';
// import Navigation from './components/Navigation';
// import Hero from './components/Hero';
// import About from './components/About';
// import Projects from './components/Projects';
// import Skills from './components/Skills';
// import Certifications from './components/Certifications';
// import Achievements from './components/Achievements';
// import Education from './components/Education';
// import Contact from './components/Contact';
// import Portfolio from './Portfolio';
// import Liveprojects from './components/Liveprojects';
// import Internship from './components/Internship';

// function App() {
//   return (
//     <div className="App">
//         <Navigation />
//         <Hero />
//         <About />
//         <Internship/>
//         <Projects />
//         <Liveprojects/>
//         <Skills />
//         <Certifications />
//         <Achievements />
//         <Education />
//         <Contact />
//         <Portfolio/>
//     </div>
//   );
// }

// export default App;


import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Achievements from './components/Achievements';
import Education from './components/Education';
import Contact from './components/Contact';
import Liveprojects from './components/Liveprojects';
import Internship from './components/Internship';
import AdminPanel from './components/AdminPanel'; // import AdminPanel

function Home() {
  return (
    <div className="App">
        <Navigation />
        <Hero />
        <About />
        <Internship/>
        <Projects />
        <Liveprojects/>
        <Skills />
        <Certifications />
        <Achievements />
        <Education />
        <Contact />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />               {/* Homepage */}
        <Route path="/admin" element={<AdminPanel />} />   {/* Admin Panel */}
      </Routes>
    </Router>
  );
}

export default App;

