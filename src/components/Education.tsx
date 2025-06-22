
import { GraduationCap, Award, Calendar, MapPin } from "lucide-react";
import { useState } from "react";

export const Education = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const education = [
    {
      id: "btech",
      degree: "B. Tech in Computer Science",
      institution: "Swami Keshvanand Institute of Technology, M & G",
      location: "Jaipur, Rajasthan",
      year: "2017",
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: "diploma",
      degree: "Diploma in Computer Science",
      institution: "Siddh Vinayak Polytechnic College",
      location: "Alwar, Rajasthan",
      year: "2013",
      color: "from-purple-500 to-pink-500"
    },
    {
      id: "secondary",
      degree: "Secondary School",
      institution: "St. Anselms Sr. Sec. School",
      location: "Alwar, Rajasthan",
      year: "2009",
      color: "from-green-500 to-emerald-500"
    }
  ];

  const certifications = [
    {
      id: "niit",
      title: "Developing Web Applications with MySQL and PHP",
      issuer: "NIIT",
      year: "2015",
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section id="education" className="py-16 px-4 bg-slate-800/30 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-20 w-32 h-32 bg-purple-500/5 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-blue-500/5 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 hover:scale-105 transition-transform duration-300">
          Education & Certifications
          <div className="w-32 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto mt-4 rounded-full"></div>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold text-green-400 mb-6 flex items-center gap-2 hover:scale-105 transition-transform duration-300">
              <GraduationCap size={24} className="animate-bounce" />
              Education
            </h3>
            
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div
                  key={edu.id}
                  onMouseEnter={() => setHoveredCard(edu.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className={`
                    group bg-slate-800/40 backdrop-blur-sm rounded-xl p-6 border border-slate-700 
                    transition-all duration-500 cursor-pointer transform animate-fade-in
                    ${hoveredCard === edu.id 
                      ? 'border-green-500/50 bg-slate-800/60 scale-105 shadow-xl shadow-green-500/10' 
                      : 'hover:border-green-500/30 hover:bg-slate-800/50 hover:scale-[1.02]'
                    }
                  `}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <h4 className={`
                    text-lg font-bold mb-2 transition-all duration-300
                    ${hoveredCard === edu.id 
                      ? `bg-gradient-to-r ${edu.color} bg-clip-text text-transparent` 
                      : 'text-white group-hover:text-green-400'
                    }
                  `}>
                    {edu.degree}
                  </h4>
                  <p className="text-green-400 font-semibold mb-1 group-hover:text-green-300 transition-colors duration-300">
                    {edu.institution}
                  </p>
                  <div className="flex items-center gap-2 text-slate-400 text-sm mb-1 group-hover:text-slate-300 transition-colors duration-300">
                    <MapPin size={14} />
                    <span>{edu.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-300 font-medium group-hover:text-white transition-colors duration-300">
                    <Calendar size={14} />
                    <span>{edu.year}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-bold text-orange-400 mb-6 flex items-center gap-2 hover:scale-105 transition-transform duration-300">
              <Award size={24} className="animate-bounce" style={{ animationDelay: '0.5s' }} />
              Certifications
            </h3>
            
            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <div
                  key={cert.id}
                  onMouseEnter={() => setHoveredCard(cert.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className={`
                    group bg-slate-800/40 backdrop-blur-sm rounded-xl p-6 border border-slate-700 
                    transition-all duration-500 cursor-pointer transform animate-fade-in
                    ${hoveredCard === cert.id 
                      ? 'border-orange-500/50 bg-slate-800/60 scale-105 shadow-xl shadow-orange-500/10' 
                      : 'hover:border-orange-500/30 hover:bg-slate-800/50 hover:scale-[1.02]'
                    }
                  `}
                  style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                >
                  <h4 className={`
                    text-lg font-bold mb-2 transition-all duration-300
                    ${hoveredCard === cert.id 
                      ? `bg-gradient-to-r ${cert.color} bg-clip-text text-transparent` 
                      : 'text-white group-hover:text-orange-400'
                    }
                  `}>
                    {cert.title}
                  </h4>
                  <p className="text-orange-400 font-semibold mb-1 group-hover:text-orange-300 transition-colors duration-300">
                    {cert.issuer}
                  </p>
                  <div className="flex items-center gap-2 text-slate-300 font-medium group-hover:text-white transition-colors duration-300">
                    <Calendar size={14} />
                    <span>{cert.year}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
