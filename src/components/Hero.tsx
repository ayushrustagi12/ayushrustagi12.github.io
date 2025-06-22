
import { Mail, Phone, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="about" className="pt-20 pb-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12 animate-fade-in">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1">
              <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center">
                <span className="text-4xl font-bold text-white">AR</span>
              </div>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Ayush <span className="text-blue-400">Rustagi</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 mb-2">
            Full-Stack Web Developer
          </p>
          
          <p className="text-lg text-slate-400 mb-8">
            Bangalore, Karnataka, India
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a
              href="tel:+918875037580"
              className="flex items-center gap-2 text-slate-300 hover:text-blue-400 transition-colors"
            >
              <Phone size={16} />
              +91-8875037580
            </a>
            <a
              href="mailto:rustagiayush12@gmail.com"
              className="flex items-center gap-2 text-slate-300 hover:text-blue-400 transition-colors"
            >
              <Mail size={16} />
              rustagiayush12@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/ayush-rustagi"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-slate-300 hover:text-blue-400 transition-colors"
            >
              <Linkedin size={16} />
              LinkedIn
            </a>
          </div>
          
          <Button
            onClick={scrollToContact}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-all duration-200 hover:scale-105"
          >
            Get In Touch
          </Button>
        </div>
        
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-slate-700">
          <h2 className="text-2xl font-bold text-white mb-4">Summary</h2>
          <p className="text-slate-300 leading-relaxed">
            Impact-driven Full-Stack Web Developer with 7+ years of experience delivering scalable, 
            high-performance web applications using Laravel, ReactJS, PHP, and MySQL. Expertise in 
            building secure RESTful APIs, integrating modern UI/UX, and enhancing performance by up to 30%. 
            Proven leadership in managing offshore Agile teams and migrating legacy systems. Strong focus 
            on clean architecture, reusable component-based design, and continuous improvement through 
            CI/CD pipelines and code quality practices.
          </p>
        </div>
      </div>
    </section>
  );
};
