
import { Mail, Phone, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

export const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const titles = ["Full-Stack Developer", "React Engineer", "Laravel Expert", "Tech Lead"];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="about" className="pt-20 pb-16 px-4 relative overflow-hidden">
      {/* Animated background with tech elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        {/* Subtle code snippet overlay */}
        <div className="absolute top-1/4 right-1/4 opacity-5 text-slate-400 font-mono text-sm transform rotate-12 pointer-events-none">
          <div>const developer = {`{`}</div>
          <div className="ml-2">name: 'Ayush',</div>
          <div className="ml-2">stack: ['React', 'Laravel'],</div>
          <div className="ml-2">passion: 'creating'</div>
          <div>{`}`};</div>
        </div>
        
        <div className="absolute bottom-1/4 left-1/4 opacity-5 text-slate-400 font-mono text-sm transform -rotate-12 pointer-events-none">
          <div>{"<component>"}</div>
          <div className="ml-2">{"<innovation />"}</div>
          <div className="ml-2">{"<excellence />"}</div>
          <div>{"</component>"}</div>
        </div>
      </div>

      <div className="container mx-auto max-w-4xl relative z-10">
        <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1 hover:scale-110 transition-transform duration-300 cursor-pointer group">
              <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center group-hover:bg-slate-700 transition-colors duration-300">
                <span className="text-4xl font-bold text-white group-hover:scale-110 transition-transform duration-300">AR</span>
              </div>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 hover:scale-105 transition-transform duration-300">
            Ayush <span className="text-blue-400 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Rustagi</span>
          </h1>
          
          <div className="h-8 mb-2">
            <p className={`text-xl md:text-2xl text-slate-300 transition-all duration-500 ${textIndex >= 0 ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'}`}>
              {titles[textIndex]}
            </p>
          </div>
          
          <p className="text-lg text-slate-400 mb-8 animate-fade-in" style={{ animationDelay: '0.5s' }}>
            Bangalore, Karnataka, India
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {[
              { href: "tel:+918875037580", icon: Phone, text: "+91-8875037580" },
              { href: "mailto:rustagiayush12@gmail.com", icon: Mail, text: "rustagiayush12@gmail.com" },
              { href: "https://www.linkedin.com/in/ayush-rustagi", icon: Linkedin, text: "LinkedIn" }
            ].map((item, index) => (
              <a
                key={index}
                href={item.href}
                target={item.href.startsWith('http') ? "_blank" : undefined}
                rel={item.href.startsWith('http') ? "noopener noreferrer" : undefined}
                className="flex items-center gap-2 text-slate-300 hover:text-blue-400 transition-all duration-300 hover:scale-110 transform"
                style={{ animationDelay: `${0.7 + index * 0.1}s` }}
              >
                <item.icon size={16} className="animate-bounce" style={{ animationDelay: `${index * 0.2}s` }} />
                {item.text}
              </a>
            ))}
          </div>
          
          <Button
            onClick={scrollToContact}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25"
          >
            Get In Touch
          </Button>
        </div>
        
        <div className={`bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-slate-700 hover:border-blue-500/50 hover:bg-slate-800/70 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/10 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '1.2s' }}>
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
            Summary 
            <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
          </h2>
          <p className="text-slate-300 leading-relaxed hover:text-slate-200 transition-colors duration-300">
            <span className="text-blue-400 font-semibold">7+ years</span> of Full-Stack expertise in <span className="text-purple-400 font-semibold">Laravel & ReactJS</span>. 
            Led teams, optimized performance by <span className="text-green-400 font-semibold">30%</span>, 
            and delivered <span className="text-blue-400 font-semibold">95% on-time</span> project completion rates.
            Specialized in scalable architecture and modern development practices.
          </p>
        </div>
      </div>
    </section>
  );
};
