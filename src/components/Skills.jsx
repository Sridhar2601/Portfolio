import React from 'react';
import { Code, Database, Globe, Users, Zap, BookOpen } from 'lucide-react';

const Skills = () => {
  const technicalSkills = [
    { name: 'Java', icon: <Code size={24} />, level: 80 },
    { name: 'HTML', icon: <Globe size={24} />, level: 95 },
    { name: 'CSS', icon: <Globe size={24} />, level: 90 },
    { name: 'Bootstrap', icon: <Globe size={24} />, level: 90 },
    { name: 'SQL', icon: <Database size={24} />, level: 80 },
    { name: 'JavaScript', icon: <Code size={24} />, level: 70 }
  ];

  const softSkills = [
    { name: 'Leadership', icon: <Users size={24} />, description: 'Leading teams and driving projects to success' },
    { name: 'Adaptability', icon: <Zap size={24} />, description: 'Quickly adjusting to new technologies and environments' },
    { name: 'Quick Learner', icon: <BookOpen size={24} />, description: 'Rapidly acquiring new skills and knowledge' }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0A192F] mb-4">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-[#FF6600] mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A comprehensive toolkit of technical proficiencies and soft skills that drive innovation
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <div>
            <h3 className="text-2xl font-bold text-[#0A192F] mb-8 flex items-center">
              <Code className="mr-3 text-[#FF6600]" size={28} />
              Technical Skills
            </h3>
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center">
                      <div className="text-[#FF6600] mr-3">{skill.icon}</div>
                      <span className="font-semibold text-[#0A192F]">{skill.name}</span>
                    </div>
                    <span className="text-sm text-gray-500">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className="bg-gradient-to-r from-[#FF6600] to-[#e55a00] h-3 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div>
            <h3 className="text-2xl font-bold text-[#0A192F] mb-8 flex items-center">
              <Users className="mr-3 text-[#FF6600]" size={28} />
              Soft Skills
            </h3>
            <div className="space-y-6">
              {softSkills.map((skill, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 group">
                  <div className="flex items-start">
                    <div className="text-[#FF6600] mr-4 mt-1 group-hover:scale-110 transition-transform duration-300">
                      {skill.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#0A192F] text-lg mb-2">{skill.name}</h4>
                      <p className="text-gray-700">{skill.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Skills Badge */}
            <div className="mt-8 bg-gradient-to-r from-[#0A192F] to-[#112240] p-6 rounded-lg text-white">
              <h4 className="font-semibold mb-4">Additional Competencies</h4>
              <div className="flex flex-wrap gap-3">
                {['Problem Solving', 'Team Collaboration', 'Project Management', 'Communication', 'Critical Thinking'].map((skill, index) => (
                  <span key={index} className="px-3 py-1 bg-white/20 rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;