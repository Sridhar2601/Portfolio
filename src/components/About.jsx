import React from 'react';
import { User, GraduationCap, Target } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0A192F] mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-[#FF6600] mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
<div className="flex justify-center lg:justify-start p-4">
  <div className="w-40 h-100 sm:w-60 sm:h-80 md:w-80 md:h-80  overflow-hidden flex items-center justify-center">
    <img style={{borderRadius:20}}
      src="/image/sridhar.jpg"
      alt="Sridhar_Profile"
      className="w-full h-full object-cover"
    />
  </div>
</div>


          {/* Content */}
          <div className="space-y-8">
            <div className="prose max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                As a dedicated Computer Science and Engineering student with a strong academic record (CGPA: 8.6),
                I bring a unique combination of technical expertise and adaptive leadership to every project I undertake.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                My passion lies in developing efficient, scalable solutions that solve real-world problems.
                With proficiency in Java, web technologies.I thrive in dynamic environments
                where quick learning and adaptability are essential.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                I believe in continuous learning and staying updated with the latest technologies to create
                meaningful impact through innovative software solutions.
              </p>
            </div>

            {/* Key Highlights */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <GraduationCap className="text-[#FF6600] mr-3" size={24} />
                  <h3 className="font-semibold text-[#0A192F]">Education</h3>
                </div>
                <p className="text-gray-700">B.E. Computer Science</p>
                <p className="text-sm text-gray-500">CGPA: 8.6 (2021-2025)</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <Target className="text-[#FF6600] mr-3" size={24} />
                  <h3 className="font-semibold text-[#0A192F]">Key Strengths</h3>
                </div>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• Quick Learning</li>
                  <li>• Leadership</li>
                  <li>• Adaptability</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;