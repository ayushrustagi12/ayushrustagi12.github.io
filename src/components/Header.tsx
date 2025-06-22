
import { useState, useEffect } from "react";
import { Menu, X, Code } from "lucide-react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Update active section based on scroll position
      const sections = ["about", "experience", "skills", "education", "contact"];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  const menuItems = ["About", "Experience", "Skills", "Education", "Contact"];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? "bg-slate-900/95 backdrop-blur-md shadow-lg border-b border-slate-700/50" 
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2 text-2xl font-bold text-white hover:scale-105 transition-transform duration-300 cursor-pointer group">
            <Code className="text-blue-400 group-hover:rotate-12 transition-transform duration-300" size={28} />
            Ayush <span className="text-blue-400 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Rustagi</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item.toLowerCase())}
                className={`
                  relative group px-3 py-2 rounded-lg transition-all duration-300 transform hover:scale-105
                  ${activeSection === item.toLowerCase() 
                    ? 'text-blue-400 bg-blue-500/10' 
                    : 'text-slate-300 hover:text-blue-400'
                  }
                `}
              >
                {item}
                <span className={`
                  absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full
                  transition-all duration-300 origin-left
                  ${activeSection === item.toLowerCase() ? 'w-full' : 'w-0 group-hover:w-full'}
                `}></span>
              </button>
            ))}
          </div>
          
          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2 rounded-lg hover:bg-slate-700/50 transition-all duration-300 hover:scale-110"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="relative w-6 h-6">
              <Menu 
                size={24} 
                className={`absolute inset-0 transition-all duration-300 ${
                  isMenuOpen ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'
                }`} 
              />
              <X 
                size={24} 
                className={`absolute inset-0 transition-all duration-300 ${
                  isMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'
                }`} 
              />
            </div>
          </button>
        </div>
        
        {/* Mobile Navigation */}
        <div className={`
          md:hidden overflow-hidden transition-all duration-500 ease-in-out
          ${isMenuOpen ? 'max-h-80 opacity-100 mt-4' : 'max-h-0 opacity-0'}
        `}>
          <div className="pb-4 border-t border-slate-700">
            <div className="flex flex-col space-y-2 pt-4">
              {menuItems.map((item, index) => (
                <button
                  key={item}
                  onClick={() => scrollTo(item.toLowerCase())}
                  className={`
                    text-left px-4 py-3 rounded-lg transition-all duration-300 transform hover:scale-105
                    ${activeSection === item.toLowerCase() 
                      ? 'text-blue-400 bg-blue-500/10 translate-x-2' 
                      : 'text-slate-300 hover:text-blue-400 hover:bg-slate-700/30 hover:translate-x-2'
                    }
                  `}
                  style={{ transitionDelay: `${index * 0.05}s` }}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
