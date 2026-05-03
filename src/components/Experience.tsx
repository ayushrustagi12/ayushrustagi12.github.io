import {
  Calendar,
  MapPin,
  Users,
  TrendingUp,
  Zap,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { useState } from "react";

export const Experience = () => {
  const [hoveredExp, setHoveredExp] = useState<number | null>(null);
  const [expandedExp, setExpandedExp] = useState<number | null>(null);

  const experiences = [
    {
      title: "Full-Stack Developer - Laravel | ReactJS | Python",
      company: "Cognizant Technology Solutions",
      period: "Apr 2024 - Present",
      location: "Remote",
      icon: Zap,
      color: "from-blue-500 to-cyan-500",
      highlights: [
        "Sole-engineered 90+ API migration from Laravel to Python in 6 weeks, reducing response times by ~40% and DB load by ~35%",
        "Led team migration of 80+ PHP/Laravel batch jobs to Python using Pandas and Elasticsearch with 90% processing time reduction",
        "Architected React component library and Redux Toolkit state management, accelerating feature development by 20%",
        "Directed 6-member Agile team with 25% sprint velocity improvement and 95% on-time delivery rate",
      ],
      allAchievements: [
        "Sole-engineered migration of 90+ REST APIs from Laravel to Python delivered in 6 weeks against a 3-sprint estimate, cutting API response times by ~40% and reducing database query load by ~35%.",
        "Led team migration of 80+ PHP/Laravel batch jobs to Python using Pandas and Elasticsearch; a benchmark batch that previously ran for 20 hours now completes in under 2 hours a 90% reduction in processing time.",
        "Architected reusable React component library and Redux Toolkit state management layer, accelerating new feature development speed by 20% across the product suite.",
        "Built and maintained 30+ secure RESTful APIs in Laravel and Python, integrated via custom React hooks, reducing frontend API fetch failures by 15%.",
        "Optimized MySQL schemas with query tuning, indexing, and route caching, reducing server load by 20% and page load time by 30%.",
        "Implemented role-based authentication and middleware-driven access control in Laravel, hardening system security across 5+ user roles.",
        "Automated CI/CD pipelines using Jenkins, cutting average deployment time by 40% and enabling zero-downtime releases.",
        "Directed a 6-member Agile team across multiple program increments, increasing sprint velocity by 25% through structured PI Planning, sprint planning, backlog grooming, and Gitflow enforcement.",
        "Facilitated end-to-end SAFe Agile ceremonies PI Planning, sprint planning, daily standups, sprint reviews, and retrospectives across cross-functional teams, improving team predictability and reducing carry-over stories by ~20% over 3 consecutive sprints.",
        "Leveraged AI-assisted development tools GitHub Copilot, ChatGPT, and Claude AI to accelerate code generation, debugging, and documentation, improving personal delivery throughput by an estimated 30%.",
        "Maintained a 95% on-time delivery rate across 4+ major releases by translating business requirements into sprint-ready tasks and managing stakeholder expectations proactively.",
      ],
    },
    {
      title: "PHP / Drupal Developer",
      company: "Cognizant Technology Solutions",
      period: "Sep 2017 – Mar 2024",
      location: "Remote",
      icon: TrendingUp,
      color: "from-purple-500 to-pink-500",
      highlights: [
        "Architected and maintained Drupal 8/9 platforms supporting 3+ client product interfaces",
        "Expedited site-to-site migrations by 50% with REST endpoints and automated content migration tools",
        "Mentored 5+ junior developers, improved code review time by 25%, trained 15+ client team members",
        "Achieved 98% stakeholder satisfaction rate as Scrum Lead for 4-member APAC team",
      ],
      allAchievements: [
        "Architected and maintained Drupal 8/9 platforms with custom themes and modules (PHP, HTML5, CSS3, SASS), supporting 3+ client product interfaces.",
        "Engineered REST endpoints and automated content migration tools, expediting site-to-site migrations by 50% and cutting manual effort by 120+ hours per project.",
        "Designed custom Drupal plugins and extended core functionality, reducing editorial content workflow time by 30%.",
        "Enforced Gitflow standards and mentored 5+ junior developers, improving code review turnaround time by 25%.",
        "Trained 15+ client team members on Drupal CMS, reducing support ticket volume by 25%.",
        "Resolved 95% of support tickets within SLA through structured Jira workflows and rigorous QA cycles.",
        "Acted as Scrum Lead for a 4-member APAC team, achieving a 98% stakeholder satisfaction rate across quarterly reviews.",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="py-16 px-2 md:px-4 bg-slate-800/30 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-20 w-24 h-24 bg-blue-500/5 rounded-full blur-xl animate-pulse"></div>
        <div
          className="absolute bottom-10 left-20 w-32 h-32 bg-purple-500/5 rounded-full blur-xl animate-pulse"
          style={{ animationDelay: "1.5s" }}
        ></div>
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
                group bg-slate-800/40 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-slate-700 
                transition-all duration-500 cursor-pointer transform animate-fade-in
                ${
                  hoveredExp === index
                    ? "border-blue-500/50 bg-slate-800/60 scale-[1.02] shadow-2xl shadow-blue-500/10"
                    : "hover:border-blue-500/30 hover:bg-slate-800/50 hover:scale-[1.01]"
                }
              `}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                <div className="flex items-start gap-4">
                  <div
                    className={`
                    w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300
                    bg-gradient-to-r ${exp.color} group-hover:scale-110 group-hover:rotate-3
                  `}
                  >
                    <exp.icon className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                      {exp.title}
                    </h3>
                    <p
                      className={`text-lg font-semibold mb-2 bg-gradient-to-r ${exp.color} bg-clip-text text-transparent`}
                    >
                      {exp.company}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col md:items-end text-slate-400 mt-2 md:mt-0">
                  <div className="flex items-center gap-2 mb-1 group-hover:text-slate-300 transition-colors duration-300">
                    <Calendar size={16} />
                    <span className="text-sm">{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-2 group-hover:text-slate-300 transition-colors duration-300">
                    <MapPin size={16} />
                    <span className="text-sm">{exp.location}</span>
                  </div>
                </div>
              </div>

              {/* Key Highlights */}
              <div className="grid gap-2 mb-4">
                <h4 className="text-sm font-semibold text-blue-400 mb-2">
                  Key Achievements:
                </h4>
                {exp.highlights.map((highlight, achIndex) => (
                  <div
                    key={achIndex}
                    className="flex items-start gap-3 text-slate-300 group-hover:text-slate-200 transition-all duration-300"
                  >
                    <div
                      className={`
                      w-2 h-2 rounded-full mt-2 flex-shrink-0 transition-all duration-300
                      ${hoveredExp === index ? `bg-gradient-to-r ${exp.color}` : "bg-blue-400"}
                    `}
                    ></div>
                    <p className="leading-relaxed text-sm">{highlight}</p>
                  </div>
                ))}
              </div>

              {/* Expand/Collapse Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setExpandedExp(expandedExp === index ? null : index);
                }}
                className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-300 text-sm font-medium mt-4"
              >
                {expandedExp === index ? (
                  <>
                    <ChevronUp size={16} />
                    Show Less
                  </>
                ) : (
                  <>
                    <ChevronDown size={16} />
                    View All Details
                  </>
                )}
              </button>

              {/* Expanded Details */}
              {expandedExp === index && (
                <div className="mt-4 pt-4 border-t border-slate-600 animate-fade-in">
                  <h4 className="text-sm font-semibold text-slate-400 mb-3">
                    Complete Achievement List:
                  </h4>
                  <div className="grid gap-2">
                    {exp.allAchievements.map((achievement, achIndex) => (
                      <div
                        key={achIndex}
                        className="flex items-start gap-3 text-slate-400 hover:text-slate-300 transition-all duration-300"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-slate-500 mt-2 flex-shrink-0"></div>
                        <p className="leading-relaxed text-sm">{achievement}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
