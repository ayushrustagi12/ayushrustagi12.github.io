
export const Skills = () => {
  const skillCategories = [
    {
      category: "Programming Languages & Markup",
      skills: ["PHP (CorePHP, Laravel)", "JavaScript", "HTML5", "CSS3", "SASS", "Mustache"]
    },
    {
      category: "Frameworks & Libraries",
      skills: ["Laravel", "ReactJS (Hooks, Context API, JSX)", "Redux (basic knowledge)", "Bootstrap", "jQuery"]
    },
    {
      category: "Databases & Query Tools",
      skills: ["MySQL", "Laravel Query Builder", "DBeaver"]
    },
    {
      category: "APIs & Backend",
      skills: ["RESTful APIs", "Laravel Middleware", "API Integration", "Token-based Auth"]
    },
    {
      category: "CMS & Template Engines",
      skills: ["Drupal 8/9 CMS", "Blade", "Alfresco", "Olapic"]
    },
    {
      category: "DevOps & Tools",
      skills: ["Jenkins", "Visual Studio Code", "Mobaxterm", "Postman"]
    },
    {
      category: "Web Development Concepts",
      skills: ["Responsive Design", "Component-Based Architecture", "Cross-Browser Compatibility", "Performance Optimization"]
    },
    {
      category: "Other Tools & Practices",
      skills: ["Agile/Scrum Methodology", "Code Reviews", "CI/CD Pipelines", "Version Control (Git/Gitflow)", "Team Collaboration"]
    }
  ];

  return (
    <section id="skills" className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
          Technical Skills
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-blue-500/50 transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-blue-400 mb-4">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="bg-slate-700/50 text-slate-300 px-3 py-1 rounded-lg text-sm border border-slate-600 hover:border-blue-500/50 hover:text-white transition-all duration-200"
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
