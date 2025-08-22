import React from 'react';
import { GraduationCap, Calendar, Award, BookOpen } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      id: 1,
      level: "Bachelor of Engineering",
      field: "Computer Science and Engineering",
      institution: "Engineering College",
      duration: "2021 - 2025",
      cgpa: "8.6 CGPA",
      status: "Completed",
      highlights: ["Strong Academic Performance", "Technical Project Leadership", "Active in Coding Events"]
    },
    {
      id: 2,
      level: "Higher Secondary Certificate (HSC)",
      field: "Science Stream",
      institution: "Higher Secondary School",
      duration: "2020 - 2021",
      cgpa: "90.6%",
      status: "Completed",
      highlights: ["Excellent Academic Achievement", "Science and Mathematics Focus", "Strong Foundation"]
    },
    {
      id: 3,
      level: "Secondary School Leaving Certificate (SSLC)",
      field: "General Education",
      institution: "Secondary School",
      duration: "2019 - 2020",
      cgpa: "89.4%",
      status: "Completed",
      highlights: ["Consistent Academic Performance", "All-round Development", "Leadership Activities"]
    }
  ];

  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0A192F] mb-4">
            Education Journey
          </h2>
          <div className="w-24 h-1 bg-[#FF6600] mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A strong academic foundation built through consistent excellence and continuous learning
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#FF6600] to-[#e55a00] rounded-full"></div>

          <div className="space-y-12">
            {educationData.map((edu, index) => (
              <div key={edu.id} className={`relative flex items-center ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } flex-col lg:space-x-8`}>
                {/* Timeline Node */}
                <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-[#FF6600] rounded-full shadow-lg z-10 border-4 border-white"></div>

                {/* Content Card */}
                <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? '' : 'lg:text-right'}`}>
                  <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-8 border border-gray-100">
                    {/* Header */}
                    <div className={`flex items-center mb-4 ${index % 2 === 0 ? '' : 'lg:justify-end'}`}>
                      <div className={`flex items-center space-x-3 ${index % 2 === 0 ? '' : 'lg:flex-row-reverse lg:space-x-reverse'}`}>
                        <div className="bg-gradient-to-br from-[#FF6600] to-[#e55a00] p-3 rounded-lg">
                          <GraduationCap className="text-white" size={24} />
                        </div>
                        <div>
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                            edu.status === 'Current' 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-blue-100 text-blue-800'
                          }`}>
                            {edu.status}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Main Content */}
                    <h3 className="text-xl font-bold text-[#0A192F] mb-2">{edu.level}</h3>
                    <p className="text-[#FF6600] font-semibold mb-3">{edu.field}</p>
                    <p className="text-gray-600 mb-4">{edu.institution}</p>

                    {/* Duration and Score */}
                    <div className="flex items-center justify-between mb-6 bg-gray-50 p-4 rounded-lg">
                      <div className="flex items-center space-x-2">
                        <Calendar className="text-[#FF6600]" size={16} />
                        <span className="text-gray-700 font-medium">{edu.duration}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Award className="text-[#FF6600]" size={16} />
                        <span className="text-[#0A192F] font-bold">{edu.cgpa}</span>
                      </div>
                    </div>

                    {/* Highlights */}
                    <div>
                      <h4 className="text-[#0A192F] font-semibold mb-3 flex items-center">
                        <BookOpen className="mr-2 text-[#FF6600]" size={16} />
                        Key Highlights
                      </h4>
                      <ul className="space-y-2">
                        {edu.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-[#FF6600] rounded-full"></div>
                            <span className="text-gray-700 text-sm">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Spacer for opposite side */}
                <div className="hidden lg:block w-5/12"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Summary Stats */}
        <div className="mt-16 bg-gradient-to-r from-[#0A192F] to-[#112240] rounded-xl p-8 text-white">
          <h3 className="text-2xl font-bold text-center mb-8">Academic Excellence</h3>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-[#FF6600] mb-2">8.6</div>
              <div className="text-lg">Current CGPA</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#FF6600] mb-2">4</div>
              <div className="text-lg">Years of Engineering</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#FF6600] mb-2">89%+</div>
              <div className="text-lg">Consistent Performance</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;