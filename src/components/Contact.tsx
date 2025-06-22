
import { Mail, Phone, Linkedin, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Contact = () => {
  return (
    <section id="contact" className="py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
          Let's Connect
        </h2>
        
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-slate-700">
          <div className="text-center mb-8">
            <p className="text-slate-300 text-lg leading-relaxed">
              Ready to collaborate on your next project? I'm always interested in discussing 
              new opportunities and innovative solutions. Let's build something amazing together!
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <a
              href="mailto:rustagiayush12@gmail.com"
              className="flex items-center gap-4 p-4 bg-slate-700/50 rounded-lg hover:bg-slate-700 transition-all duration-200 group"
            >
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                <Mail className="text-white" size={20} />
              </div>
              <div>
                <p className="text-white font-semibold">Email</p>
                <p className="text-slate-300">rustagiayush12@gmail.com</p>
              </div>
            </a>
            
            <a
              href="tel:+918875037580"
              className="flex items-center gap-4 p-4 bg-slate-700/50 rounded-lg hover:bg-slate-700 transition-all duration-200 group"
            >
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                <Phone className="text-white" size={20} />
              </div>
              <div>
                <p className="text-white font-semibold">Phone</p>
                <p className="text-slate-300">+91-8875037580</p>
              </div>
            </a>
            
            <a
              href="https://www.linkedin.com/in/ayush-rustagi"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 bg-slate-700/50 rounded-lg hover:bg-slate-700 transition-all duration-200 group"
            >
              <div className="w-12 h-12 bg-blue-700 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                <Linkedin className="text-white" size={20} />
              </div>
              <div>
                <p className="text-white font-semibold">LinkedIn</p>
                <p className="text-slate-300">Connect with me</p>
              </div>
            </a>
            
            <div className="flex items-center gap-4 p-4 bg-slate-700/50 rounded-lg">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
                <MapPin className="text-white" size={20} />
              </div>
              <div>
                <p className="text-white font-semibold">Location</p>
                <p className="text-slate-300">Bangalore, Karnataka, India</p>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <Button
              onClick={() => window.open("mailto:rustagiayush12@gmail.com", "_blank")}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-all duration-200 hover:scale-105"
            >
              Send Email
            </Button>
          </div>
        </div>
        
        <footer className="mt-16 text-center text-slate-400">
          <p>&copy; 2024 Ayush Rustagi. All rights reserved.</p>
        </footer>
      </div>
    </section>
  );
};
