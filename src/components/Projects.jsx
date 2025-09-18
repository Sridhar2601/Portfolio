import React from 'react';
import { ExternalLink, Github, Brain, Monitor } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Brain Tumor Detection",
      description: "Advanced machine learning project utilizing K-Means clustering algorithm for precise MRI image segmentation and early brain tumor detection. This innovative solution assists medical professionals in quick and accurate diagnosis.",
      techStack: ["Python", "Machine Learning", "K-Means Clustering", "Image Processing"],
      icon: <Brain className="text-[#FF6600]" size={48} />,
      githubLink: "https://github.com/Sridhar2601/Brain-Tumor-Detection-",
      category: "Machine Learning"
    },
    {
      id: 2,
      title: "Educational Website Development",
      description: "Responsive and interactive educational website with multi-page layouts for courses, staff, and contact sections. Built using React.js, HTML5, CSS3, and Bootstrap, featuring reusable components, smooth animations, and mobile-first design. Integrated Mock API for backend connectivity, enabling data storage and form submissions.",
      techStack: ["HTML", "CSS", "Java", "SQL", "Bootstrap", "JavaScript"],
      icon: <Monitor className="text-[#FF6600]" size={48} />,
      githubLink: "https://github.com/Sridhar2601/-OEMS",
      category: "Web Development"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0A192F] mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-[#FF6600] mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Showcasing innovative solutions that demonstrate my technical expertise and problem-solving abilities
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden">
              {/* Project Header */}
              <div className="bg-gradient-to-r from-[#0A192F] to-[#112240] p-8 text-white">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    {project.icon}
                    <span className="px-3 py-1 bg-[#FF6600] text-white text-sm rounded-full font-medium">
                      {project.category}
                    </span>
                  </div>
                  <div className="flex space-x-3">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                    {/* <button className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors duration-300">
                      <ExternalLink size={20} />
                    </button> */}
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              </div>

              {/* Project Content */}
              <div className="p-8">
                <p className="text-gray-700 leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mb-6">
                  <h4 className="text-[#0A192F] font-semibold mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-[#FF6600] hover:text-white transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-4">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 bg-[#0A192F] text-white px-6 py-3 rounded-lg hover:bg-[#112240] transition-colors duration-300 font-medium"
                  >
                    <Github size={18} />
                    <span>View Code</span>
                  </a>
                  {/* <button className="flex items-center space-x-2 border-2 border-[#FF6600] text-[#FF6600] px-6 py-3 rounded-lg hover:bg-[#FF6600] hover:text-white transition-colors duration-300 font-medium">
                    <ExternalLink size={18} />
                    <span>Live Demo</span>
                  </button> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;