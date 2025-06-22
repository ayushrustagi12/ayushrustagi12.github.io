
import { useState } from "react";

export const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const skillCategories = [
    {
      category: "Programming Languages & Markup",
      skills: ["PHP (CorePHP, Laravel)", "JavaScript", "HTML5", "CSS3", "SASS", "Mustache"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      category: "Frameworks & Libraries",
      skills: ["Laravel", "ReactJS (Hooks, Context API, JSX)", "Redux (basic knowledge)", "Bootstrap", "jQuery"],
      color: "from-purple-500 to-pink-500"
    },
    {
      category: "Databases & Query Tools",
      skills: ["MySQL", "Laravel Query Builder", "DBeaver"],
      color: "from-green-500 to-emerald-500"
    },
    {
      category: "APIs & Backend",
      skills: ["RESTful APIs", "Laravel Middleware", "API Integration", "Token-based Auth"],
      color: "from-orange-500 to-red-500"
    },
    {
      category: "CMS & Template Engines",
      skills: ["Drupal 8/9 CMS", "Blade", "Alfresco", "Olapic"],
      color: "from-indigo-500 to-purple-500"
    },
    {
      category: "DevOps & Tools",
      skills: ["Jenkins", "Visual Studio Code", "Mobaxterm", "Postman"],
      color: "from-teal-500 to-blue-500"
    },
    {
      category: "Web Development Concepts",
      skills: ["Responsive Design", "Component-Based Architecture", "Cross-Browser Compatibility", "Performance Optimization"],
      color: "from-rose-500 to-pink-500"
    },
    {
      category: "Other Tools & Practices",
      skills: ["Agile/Scrum Methodology", "Code Reviews", "CI/CD Pipelines", "Version Control (Git/Gitflow)", "Team Collaboration"],
      color: "from-yellow-500 to-orange-500"
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
          Technical Skills
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4 rounded-full"></div>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="group bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-blue-500/50 transition-all duration-500 hover:scale-[1.02] hover:bg-slate-800/50 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className={`text-xl font-bold mb-4 bg-gradient-to-r ${category.color} bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300`}>
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    onMouseEnter={() => setHoveredSkill(skill)}
                    onMouseLeave={() => setHoveredSkill(null)}
                    className={`
                      bg-slate-700/50 text-slate-300 px-3 py-1 rounded-lg text-sm border border-slate-600 
                      cursor-pointer transition-all duration-300 transform hover:scale-110 hover:shadow-lg
                      ${hoveredSkill === skill 
                        ? `bg-gradient-to-r ${category.color} text-white border-transparent shadow-lg scale-110` 
                        : 'hover:border-blue-500/50 hover:text-white hover:bg-slate-700'
                      }
                    `}
                    style={{ 
                      animationDelay: `${(index * 0.1) + (skillIndex * 0.05)}s`,
                      transitionDelay: `${skillIndex * 0.02}s`
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
