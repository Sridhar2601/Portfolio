import React from 'react';
import { Award, Calendar, ExternalLink } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      id: 1,
      title: "Software Testing",
      provider: "NPTEL",
      year: "2024",
      description: "Comprehensive course covering software testing methodologies, test case design, and quality assurance practices.",
      skills: ["Testing Methodologies", "Quality Assurance", "Test Case Design", "Bug Tracking"],
      link: "https://drive.google.com/file/d/10CKZf8qNKRuN7rv386tmVAvpqlmzPgYH/view?usp=sharing"
    },
    {
      id: 2,
      title: "Data Analytics with Python",
      provider: "NPTEL",
      year: "2023",
      description: "Advanced certification in data analysis using Python, covering data manipulation, visualization, and statistical analysis.",
      skills: ["Python", "Data Analysis", "Data Visualization", "Statistical Methods"],
      link:"https://drive.google.com/file/d/1OnuKAi53xvg-aytCKlxsYrXDFWqOOEZ_/view?usp=sharing"
    },
    {
      id: 3,
      title: "Foundations of Cybersecurity",
      provider: "Google",
      year: "2023",
      description: "Foundational knowledge in cybersecurity principles, threat identification, and security best practices.",
      skills: ["Security Principles", "Threat Analysis", "Risk Assessment", "Security Best Practices"],
      link:"https://drive.google.com/file/d/1SP7bSJpGQo_2lemqqH7yQ-siSOT5CnWx/view?usp=sharing"
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0A192F] mb-4">
            Certifications
          </h2>
          <div className="w-24 h-1 bg-[#FF6600] mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Professional certifications that validate my expertise and commitment to continuous learning
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert) => (
            <div key={cert.id} className="bg-white border border-gray-200 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
              {/* Header */}
              <div className="bg-gradient-to-r from-[#0A192F] to-[#112240] p-6 rounded-t-xl">
                <div className="flex items-center justify-between mb-4">
                  <Award className="text-[#FF6600]" size={32} />
                  <div className="flex items-center text-white text-sm">
                    <Calendar size={16} className="mr-2" />
                    {cert.year}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{cert.title}</h3>
                <p className="text-[#FF6600] font-semibold">{cert.provider}</p>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {cert.description}
                </p>

                {/* Skills */}
                <div className="mb-6">
                  <h4 className="text-[#0A192F] font-semibold mb-3">Key Skills Gained:</h4>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-lg text-xs font-medium group-hover:bg-[#FF6600] group-hover:text-white transition-colors duration-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* View Certificate Button */}
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center space-x-2 bg-[#0A192F] text-white py-3 rounded-lg hover:bg-[#112240] transition-colors duration-300 font-medium"
                >
                  <span>View Certificate</span>
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 bg-gradient-to-r from-[#0A192F] to-[#112240] rounded-xl p-8 text-white">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-[#FF6600] mb-2">3</div>
              <div className="text-lg">Professional Certifications</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#FF6600] mb-2">2</div>
              <div className="text-lg">Years of Learning</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#FF6600] mb-2">12+</div>
              <div className="text-lg">Skills Acquired</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;