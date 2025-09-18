import React from 'react';
import { ChevronDown, Github, Linkedin, Mail, Download } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A192F] via-[#112240] to-[#0A192F]"></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-6">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Hi, I'm <span className="text-[#FF6600]">Sridhar B</span>
          </h1>
          <h2 className="text-xl sm:text-2xl lg:text-3xl text-gray-300 font-light">
            Aspiring Full Stack Developer & Problem Solver
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Passionate about building efficient solutions using Java, web technologies  .
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
            <button
              onClick={() => scrollToSection('projects')}
              className="bg-[#FF6600] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#e55a00] transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              View My Projects
            </button>
            <a
              href="https://drive.google.com/file/d/1Ydbib1vOfEq969OLUK5pPfHcBcKq9LIZ/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-600 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-2"
            >
              <Download size={20} />
              View Resume
            </a>
            <button
              onClick={() => scrollToSection('contact')}
              className="border-2 border-[#FF6600] text-[#FF6600] px-8 py-3 rounded-lg font-semibold hover:bg-[#FF6600] hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              Contact Me
            </button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mt-8">
            <a
              href="https://github.com/Sridhar2601"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#FF6600] transition-colors duration-300 p-2"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/sridhar-b-1a8708282"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#FF6600] transition-colors duration-300 p-2"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:sridharchml@gmail.com"
              className="text-gray-400 hover:text-[#FF6600] transition-colors duration-300 p-2"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={() => scrollToSection('about')}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white hover:text-[#FF6600] transition-colors duration-300 animate-bounce"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default Hero;