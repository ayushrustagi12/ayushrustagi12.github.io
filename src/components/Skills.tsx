
import { useState } from "react";
import { Code, Database, Palette, Settings } from "lucide-react";

export const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const skillCategories = [
    {
      category: "Core Technologies",
      icon: Code,
      skills: [
        "Laravel", "ReactJS", "PHP", "JavaScript", "MySQL"
      ],
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-500/10"
    },
    {
      category: "Frontend & Styling",
      icon: Palette,
      skills: [
        "HTML5/CSS3", "SASS", "Bootstrap", "Responsive Design", "jQuery"
      ],
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-500/10"
    },
    {
      category: "Backend & APIs",
      icon: Database,
      skills: [
        "RESTful APIs", "Laravel Middleware", "Authentication", "Database Design"
      ],
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-500/10"
    },
    {
      category: "DevOps & Tools",
      icon: Settings,
      skills: [
        "Git/GitFlow", "Jenkins CI/CD", "Agile/Scrum", "Code Reviews"
      ],
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-500/10"
    }
  ];

  return (
    <section id="skills" className="py-12 sm:py-16 px-4 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-4 sm:left-10 w-24 h-24 sm:w-32 sm:h-32 bg-blue-500/5 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 right-4 sm:right-10 w-32 h-32 sm:w-40 sm:h-40 bg-purple-500/5 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center mb-8 sm:mb-12 hover:scale-105 transition-transform duration-300">
          Technical Expertise
          <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-3 sm:mt-4 rounded-full"></div>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div
                key={index}
                className="group bg-slate-800/30 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-slate-700 hover:border-blue-500/50 transition-all duration-500 hover:scale-[1.02] hover:bg-slate-800/50 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-4 sm:mb-6">
                  <div className={`p-2 sm:p-3 rounded-lg ${category.bgColor} group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <h3 className={`text-lg sm:text-xl font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300`}>
                    {category.category}
                  </h3>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      onMouseEnter={() => setHoveredSkill(skill)}
                      onMouseLeave={() => setHoveredSkill(null)}
                      className={`
                        px-3 py-2 sm:px-4 sm:py-3 rounded-lg border transition-all duration-300 cursor-pointer
                        ${hoveredSkill === skill 
                          ? `bg-gradient-to-r ${category.color} border-transparent text-white shadow-lg scale-105` 
                          : 'bg-slate-700/30 border-slate-600 text-slate-300 hover:border-slate-500 hover:bg-slate-700/50'
                        }
                      `}
                    >
                      <span className="text-sm sm:text-base font-medium">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Key Strengths Section */}
        <div className="mt-8 sm:mt-12 bg-slate-800/30 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-slate-700 hover:border-blue-500/50 transition-all duration-500">
          <h3 className="text-xl sm:text-2xl font-bold text-white text-center mb-4 sm:mb-6">
            Key Strengths
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {[
              { icon: "🚀", text: "Performance Optimization", desc: "30% improvement" },
              { icon: "👥", text: "Team Leadership", desc: "Cross-functional teams" },
              { icon: "⚡", text: "Fast Delivery", desc: "95% on-time completion" },
              { icon: "🔧", text: "Problem Solving", desc: "Complex challenges" }
            ].map((strength, index) => (
              <div
                key={index}
                className="text-center p-3 sm:p-4 rounded-lg bg-slate-700/20 hover:bg-slate-700/40 transition-all duration-300 hover:scale-105"
              >
                <div className="text-2xl sm:text-3xl mb-2">{strength.icon}</div>
                <div className="text-sm sm:text-base font-semibold text-white mb-1">{strength.text}</div>
                <div className="text-xs sm:text-sm text-slate-400">{strength.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
