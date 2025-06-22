
import { useState } from "react";

export const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const skillCategories = [
    {
      category: "Core Technologies",
      skills: [
        { name: "Laravel", level: 95 },
        { name: "ReactJS", level: 90 },
        { name: "PHP", level: 95 },
        { name: "JavaScript", level: 85 },
        { name: "MySQL", level: 90 }
      ],
      color: "from-blue-500 to-cyan-500"
    },
    {
      category: "Frontend & Styling",
      skills: [
        { name: "HTML5/CSS3", level: 95 },
        { name: "SASS", level: 85 },
        { name: "Bootstrap", level: 90 },
        { name: "Responsive Design", level: 95 },
        { name: "jQuery", level: 80 }
      ],
      color: "from-purple-500 to-pink-500"
    },
    {
      category: "Backend & APIs",
      skills: [
        { name: "RESTful APIs", level: 90 },
        { name: "Laravel Middleware", level: 85 },
        { name: "Authentication", level: 90 },
        { name: "Database Design", level: 85 }
      ],
      color: "from-green-500 to-emerald-500"
    },
    {
      category: "DevOps & Tools",
      skills: [
        { name: "Git/GitFlow", level: 90 },
        { name: "Jenkins CI/CD", level: 80 },
        { name: "Agile/Scrum", level: 95 },
        { name: "Code Reviews", level: 90 }
      ],
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section id="skills" className="py-16 px-4 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500/5 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 hover:scale-105 transition-transform duration-300">
          Technical Expertise
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4 rounded-full"></div>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="group bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-blue-500/50 transition-all duration-500 hover:scale-[1.02] hover:bg-slate-800/50 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className={`text-xl font-bold mb-6 bg-gradient-to-r ${category.color} bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300`}>
                {category.category}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    onMouseEnter={() => setHoveredSkill(skill.name)}
                    onMouseLeave={() => setHoveredSkill(null)}
                    className="space-y-2"
                  >
                    <div className="flex justify-between items-center">
                      <span className={`
                        text-slate-300 transition-all duration-300 font-medium
                        ${hoveredSkill === skill.name ? 'text-white scale-105' : ''}
                      `}>
                        {skill.name}
                      </span>
                      <span className="text-slate-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-700/50 rounded-full h-2">
                      <div
                        className={`
                          h-2 rounded-full transition-all duration-1000 ease-out
                          ${hoveredSkill === skill.name 
                            ? `bg-gradient-to-r ${category.color} shadow-lg` 
                            : 'bg-slate-600'
                          }
                        `}
                        style={{
                          width: `${skill.level}%`,
                          transitionDelay: `${skillIndex * 0.1}s`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
