
import { Mail, Phone, Linkedin, MapPin, Send, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export const Contact = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const contactItems = [
    {
      href: "mailto:rustagiayush12@gmail.com",
      icon: Mail,
      title: "Email",
      text: "rustagiayush12@gmail.com",
      color: "bg-blue-600",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      href: "tel:+918875037580",
      icon: Phone,
      title: "Phone",
      text: "+91-8875037580",
      color: "bg-green-600",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      href: "https://www.linkedin.com/in/ayush-rustagi",
      icon: Linkedin,
      title: "LinkedIn",
      text: "Connect with me",
      color: "bg-blue-700",
      gradient: "from-blue-600 to-indigo-600"
    },
    {
      href: null,
      icon: MapPin,
      title: "Location",
      text: "Bangalore, Karnataka, India",
      color: "bg-purple-600",
      gradient: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section id="contact" className="py-16 px-4 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-40 h-40 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-gradient-to-r from-blue-500/3 to-purple-500/3 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 hover:scale-105 transition-transform duration-300 flex items-center justify-center gap-3">
            Let's Connect
            <Sparkles className="text-blue-400 animate-pulse" size={32} />
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="bg-slate-800/40 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-slate-700 hover:border-blue-500/50 hover:bg-slate-800/60 transition-all duration-500 hover:scale-[1.01] hover:shadow-2xl hover:shadow-blue-500/10">
          <div className="text-center mb-8">
            <p className="text-slate-300 text-lg leading-relaxed hover:text-slate-200 transition-colors duration-300">
              Ready to collaborate on your next project? I'm always interested in discussing 
              new opportunities and innovative solutions. Let's build something amazing together!
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {contactItems.map((item, index) => (
              <div
                key={index}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                className="group"
              >
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.href.startsWith('http') ? "_blank" : undefined}
                    rel={item.href.startsWith('http') ? "noopener noreferrer" : undefined}
                    className={`
                      flex items-center gap-4 p-4 bg-slate-700/40 rounded-lg transition-all duration-300 transform
                      hover:bg-slate-700 hover:scale-105 hover:shadow-lg cursor-pointer animate-fade-in
                      ${hoveredCard === index ? 'scale-105 shadow-xl' : ''}
                    `}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className={`
                      w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300
                      ${hoveredCard === index 
                        ? `bg-gradient-to-r ${item.gradient} scale-110 rotate-6` 
                        : `${item.color} group-hover:scale-110`
                      }
                    `}>
                      <item.icon className="text-white" size={20} />
                    </div>
                    <div>
                      <p className="text-white font-semibold group-hover:text-blue-400 transition-colors duration-300">{item.title}</p>
                      <p className="text-slate-300 group-hover:text-slate-200 transition-colors duration-300">{item.text}</p>
                    </div>
                  </a>
                ) : (
                  <div className={`
                    flex items-center gap-4 p-4 bg-slate-700/40 rounded-lg transition-all duration-300 animate-fade-in
                    ${hoveredCard === index ? 'scale-105 bg-slate-700/60' : ''}
                  `}
                  style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className={`
                      w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300
                      ${hoveredCard === index 
                        ? `bg-gradient-to-r ${item.gradient} scale-110 rotate-6` 
                        : item.color
                      }
                    `}>
                      <item.icon className="text-white" size={20} />
                    </div>
                    <div>
                      <p className="text-white font-semibold">{item.title}</p>
                      <p className="text-slate-300">{item.text}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Button
              onClick={() => window.open("mailto:rustagiayush12@gmail.com", "_blank")}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-blue-500/25 group animate-bounce"
              style={{ animationDelay: '0.5s' }}
            >
              <Send className="mr-2 group-hover:translate-x-1 transition-transform duration-300" size={20} />
              Send Email
            </Button>
          </div>
        </div>
        
        <footer className="mt-16 text-center text-slate-400 animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <p className="hover:text-slate-300 transition-colors duration-300">&copy; 2024 Ayush Rustagi. All rights reserved.</p>
        </footer>
      </div>
    </section>
  );
};
