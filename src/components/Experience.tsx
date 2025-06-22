
import { Calendar, MapPin, Users, TrendingUp, Zap } from "lucide-react";
import { useState } from "react";

export const Experience = () => {
  const [hoveredExp, setHoveredExp] = useState<number | null>(null);

  const experiences = [
    {
      title: "Laravel / ReactJS Developer",
      company: "Cognizant Technology Solutions",
      period: "Apr 2024 - Present",
      location: "Remote",
      icon: Zap,
      color: "from-blue-500 to-cyan-500",
      achievements: [
        "Engineered scalable web applications using Laravel and ReactJS, increasing development speed for new modules by 20% through reusable, modular architecture.",
        "Designed and maintained optimized MySQL schemas, leveraging migrations and seeders to manage complex data relationships.",
        "Built secure RESTful APIs and integrated them with React via custom hooks, reducing frontend API fetch failures by 15%.",
        "Implemented role-based authentication using Laravel middleware, enhancing system security and access control.",
        "Boosted frontend responsiveness and cross-browser compatibility through mobile-first design using Bootstrap and SASS.",
        "Optimized backend performance, reducing server load by 20% and page load time by 30% through query tuning and route caching.",
        "Migrated monolithic legacy systems to Laravel + React architecture, improving code maintainability by 40%.",
        "Directed a 6-member Agile team, increasing sprint velocity by 25% through effective planning, task allocation, and Git/Jira tracking.",
        "Facilitated cross-team collaboration and aligned feature delivery with stakeholders, achieving 95% on-time delivery rate.",
        "Acted as primary client interface, enabling the on-time delivery of 4+ major releases by accurately translating business requirements into actionable tasks.",
        "Automated CI/CD using Jenkins, cutting deployment time by 40%.",
        "Delivered weekly and monthly reports to stakeholders, reducing project ambiguity and improving leadership decisions on resource allocation by 30%."
      ]
    },
    {
      title: "PHP/ Drupal Developer",
      company: "Cognizant Technology Solutions",
      period: "September 2017 – Mar 2024",
      location: "Remote",
      icon: TrendingUp,
      color: "from-purple-500 to-pink-500",
      achievements: [
        "Architected and maintained responsive Drupal 8/9 platforms with custom themes and modules using PHP, HTML5, CSS3, and SASS.",
        "Created custom plugins and extended Drupal core functionality to streamline content workflows, reducing editorial time by 30%.",
        "Engineered interactive frontend modules using JavaScript/jQuery, enhancing user engagement across 3+ product interfaces.",
        "Designed REST endpoints and automated content migration tools, expediting site migrations by 50%.",
        "Spearheaded Agile sprint processes as Scrum Lead, improving sprint predictability and backlog health for a 4-member APAC team.",
        "Resolved 95% of tickets within SLAs via structured Jira workflows and rigorous QA cycles.",
        "Oversaw offshore delivery and coordinated status reporting with APAC PMs, ensuring consistent client satisfaction.",
        "Led stakeholder sync-ups to align deliverables and timelines, achieving a 98% satisfaction rate in quarterly reviews.",
        "Enforced Gitflow standards and mentored 5+ junior developers, driving a 25% improvement in code review turnaround time.",
        "Collaborated with QA, BA, and UX teams for seamless feature delivery within CI/CD pipelines.",
        "Trained over 15 client team members on Drupal CMS usage, decreasing support tickets by 25%."
      ]
    }
  ];

  return (
    <section id="experience" className="py-16 px-4 bg-slate-800/30 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-20 w-24 h-24 bg-blue-500/5 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 left-20 w-32 h-32 bg-purple-500/5 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 hover:scale-105 transition-transform duration-300">
          Professional Experience
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mt-4 rounded-full"></div>
        </h2>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredExp(index)}
              onMouseLeave={() => setHoveredExp(null)}
              className={`
                group bg-slate-800/40 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-slate-700 
                transition-all duration-500 cursor-pointer transform animate-fade-in
                ${hoveredExp === index 
                  ? 'border-blue-500/50 bg-slate-800/60 scale-[1.02] shadow-2xl shadow-blue-500/10' 
                  : 'hover:border-blue-500/30 hover:bg-slate-800/50 hover:scale-[1.01]'
                }
              `}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                <div className="flex items-start gap-4">
                  <div className={`
                    w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300
                    bg-gradient-to-r ${exp.color} group-hover:scale-110 group-hover:rotate-3
                  `}>
                    <exp.icon className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                      {exp.title}
                    </h3>
                    <p className={`text-lg font-semibold mb-2 bg-gradient-to-r ${exp.color} bg-clip-text text-transparent`}>
                      {exp.company}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col md:items-end text-slate-400 mt-2 md:mt-0">
                  <div className="flex items-center gap-2 mb-1 group-hover:text-slate-300 transition-colors duration-300">
                    <Calendar size={16} />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-2 group-hover:text-slate-300 transition-colors duration-300">
                    <MapPin size={16} />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>
              
              <div className="grid gap-3">
                {exp.achievements.map((achievement, achIndex) => (
                  <div
                    key={achIndex}
                    className="flex items-start gap-3 text-slate-300 group-hover:text-slate-200 transition-all duration-300"
                    style={{ 
                      transitionDelay: `${achIndex * 0.02}s`,
                      transform: hoveredExp === index ? 'translateX(8px)' : 'translateX(0)'
                    }}
                  >
                    <div className={`
                      w-2 h-2 rounded-full mt-2 flex-shrink-0 transition-all duration-300
                      ${hoveredExp === index ? `bg-gradient-to-r ${exp.color}` : 'bg-blue-400'}
                    `}></div>
                    <p className="leading-relaxed">{achievement}</p>
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
