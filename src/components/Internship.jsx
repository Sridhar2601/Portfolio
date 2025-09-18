import React from "react";
import { Briefcase, Github } from "lucide-react";

const Internship = () => {
  const internships = [
    {
      id: 1,
      role: "Front-End Development Intern",
      company: "Infronex IT Products and Services",
      duration: "June 2025 – September 2025",
      description:
        "Completed a front-end development internship focusing on building responsive web applications. Gained hands-on experience with React.js, HTML5, CSS3, JavaScript, Bootstrap, and version control using Git & GitHub. Contributed to front-end projects with reusable components, responsive UI, and client deliverables.",
      techStack: ["React.js", "HTML5", "CSS3", "JavaScript", "Bootstrap", "Git/GitHub"],
      icon: <Briefcase className="text-[#FF6600]" size={48} />,
      certificateLink: "/Sridhar_B_intership_front-end.pdf", // path to your internship certificate
    },
  ];

  return (
    <section id="internship" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0A192F] mb-4">
            Internship Experience
          </h2>
          <div className="w-24 h-1 bg-[#FF6600] mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Practical industry experience contributing to real-world projects and strengthening my technical skills.
          </p>
        </div>

        <div className="grid lg:grid-cols-1 gap-8">
          {internships.map((internship) => (
            <div
              key={internship.id}
              className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden"
            >
              {/* Internship Header */}
              <div className="bg-gradient-to-r from-[#0A192F] to-[#112240] p-8 text-white">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    {internship.icon}
                    <span className="px-3 py-1 bg-[#FF6600] text-white text-sm rounded-full font-medium">
                      Internship
                    </span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-2">{internship.role}</h3>
                <p className="text-gray-300">{internship.company}</p>
                <p className="text-sm text-gray-400">{internship.duration}</p>
              </div>

              {/* Internship Content */}
              <div className="p-8">
                <p className="text-gray-700 leading-relaxed mb-6">
                  {internship.description}
                </p>

                {/* Tech Stack */}
                <div className="mb-6">
                  <h4 className="text-[#0A192F] font-semibold mb-3">
                    Technologies Used:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {internship.techStack.map((tech, index) => (
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
                    href={internship.certificateLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 bg-[#0A192F] text-white px-6 py-3 rounded-lg hover:bg-[#112240] transition-colors duration-300 font-medium"
                  >
                    <Github size={18} />
                    <span>View Certificate</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Internship;
