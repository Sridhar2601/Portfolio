import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Achievements from './components/Achievements';
import Education from './components/Education';
import Contact from './components/Contact';
import Portfolio from './Portfolio';
import Liveprojects from './components/Liveprojects';

function App() {
  return (
    <div className="App">
        <Navigation />
        <Hero />
        <About />
        <Projects />
        <Liveprojects/>
        <Skills />
        <Certifications />
        <Achievements />
        <Education />
        <Contact />
        <Portfolio/>
    </div>
  );
}

export default App;
