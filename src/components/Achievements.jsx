import React from 'react';
import { Trophy, Presentation, Code2, Star } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      id: 1,
      title: "Paper Presentation on Blue Eye Technology",
      category: "Research & Presentation",
      description: "Delivered a comprehensive research presentation on Blue Eye Technology, exploring its applications in human-computer interaction and emotion recognition systems.",
      icon: <Presentation className="text-[#FF6600]" size={32} />,
      skills: ["Research", "Public Speaking", "Technical Communication", "Innovation"],
      impact: "Enhanced understanding of emerging technologies in the field"
    },
    {
      id: 2,
      title: "Coding Event: Tip to Track",
      category: "Programming Competition",
      description: "Participated in and successfully completed the 'Tip to Track' coding event, demonstrating problem-solving skills and algorithmic thinking under time constraints.",
      icon: <Code2 className="text-[#FF6600]" size={32} />,
      skills: ["Algorithmic Thinking", "Problem Solving", "Time Management", "Programming"],
      impact: "Strengthened competitive programming and analytical skills"
    }
  ];

  return (
    <section id="achievements" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0A192F] mb-4">
            Achievements & Activities
          </h2>
          <div className="w-24 h-1 bg-[#FF6600] mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Recognition and participation in events that showcase dedication to learning and excellence
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {achievements.map((achievement) => (
            <div key={achievement.id} className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group">
              {/* Header */}
              <div className="bg-gradient-to-r from-[#0A192F] to-[#112240] p-8">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    {achievement.icon}
                    <div>
                      <span className="px-3 py-1 bg-[#FF6600] text-white text-sm rounded-full font-medium">
                        {achievement.category}
                      </span>
                    </div>
                  </div>
                  <Trophy className="text-yellow-400" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{achievement.title}</h3>
              </div>

              {/* Content */}
              <div className="p-8">
                <p className="text-gray-700 leading-relaxed mb-6">
                  {achievement.description}
                </p>

                {/* Impact */}
                <div className="bg-gradient-to-r from-[#FF6600]/10 to-[#e55a00]/10 p-4 rounded-lg mb-6">
                  <div className="flex items-center mb-2">
                    <Star className="text-[#FF6600] mr-2" size={16} />
                    <span className="font-semibold text-[#0A192F]">Impact & Learning</span>
                  </div>
                  <p className="text-gray-700 text-sm">{achievement.impact}</p>
                </div>

                {/* Skills */}
                <div>
                  <h4 className="text-[#0A192F] font-semibold mb-3">Skills Demonstrated:</h4>
                  <div className="flex flex-wrap gap-2">
                    {achievement.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-[#FF6600] hover:text-white transition-colors duration-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Activities Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-[#0A192F] text-center mb-8">Other Activities & Involvement</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Technical Workshops", count: "5+", icon: <Code2 size={24} /> },
              { title: "Project Collaborations", count: "3+", icon: <Trophy size={24} /> },
              { title: "Learning Hours", count: "500+", icon: <Star size={24} /> },
              { title: "Technologies Explored", count: "10+", icon: <Presentation size={24} /> }
            ].map((stat, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300">
                <div className="text-[#FF6600] mb-3 flex justify-center">{stat.icon}</div>
                <div className="text-2xl font-bold text-[#0A192F] mb-2">{stat.count}</div>
                <div className="text-gray-600 text-sm">{stat.title}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;