
import { GraduationCap, Award } from "lucide-react";

export const Education = () => {
  const education = [
    {
      degree: "B. Tech in Computer Science",
      institution: "Swami Keshvanand Institute of Technology, M & G",
      location: "Jaipur, Rajasthan",
      year: "2017"
    },
    {
      degree: "Diploma in Computer Science",
      institution: "Siddh Vinayak Polytechnic College",
      location: "Alwar, Rajasthan",
      year: "2013"
    },
    {
      degree: "Secondary School",
      institution: "St. Anselms Sr. Sec. School",
      location: "Alwar, Rajasthan",
      year: "2009"
    }
  ];

  const certifications = [
    {
      title: "Developing Web Applications with MySQL and PHP",
      issuer: "NIIT",
      year: "2015"
    }
  ];

  return (
    <section id="education" className="py-16 px-4 bg-slate-800/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
          Education & Certifications
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold text-blue-400 mb-6 flex items-center gap-2">
              <GraduationCap size={24} />
              Education
            </h3>
            
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-blue-500/50 transition-all duration-300"
                >
                  <h4 className="text-lg font-bold text-white mb-2">
                    {edu.degree}
                  </h4>
                  <p className="text-blue-400 font-semibold mb-1">
                    {edu.institution}
                  </p>
                  <p className="text-slate-400 text-sm mb-1">
                    {edu.location}
                  </p>
                  <p className="text-slate-300 font-medium">
                    {edu.year}
                  </p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-bold text-blue-400 mb-6 flex items-center gap-2">
              <Award size={24} />
              Certifications
            </h3>
            
            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-blue-500/50 transition-all duration-300"
                >
                  <h4 className="text-lg font-bold text-white mb-2">
                    {cert.title}
                  </h4>
                  <p className="text-blue-400 font-semibold mb-1">
                    {cert.issuer}
                  </p>
                  <p className="text-slate-300 font-medium">
                    {cert.year}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
