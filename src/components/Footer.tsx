import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Events", href: "#events" },
    { name: "Team", href: "#team" },
    { name: "Contact", href: "#contact" }
  ];

  const programs = [
    "B.Tech Cybersecurity",
    "M.Tech Cybersecurity",
    "Ph.D. Programs",
    "Certification Courses",
    "Industry Training"
  ];

  const research = [
    "AI Security",
    "Blockchain Security",
    "IoT Security",
    "Digital Forensics",
    "Quantum Cryptography"
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative bg-background border-t border-primary/20 overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 cyber-grid opacity-10"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {/* Organization Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-cyber-primary rounded-lg animate-glow-pulse"></div>
                <div>
                  <h3 className="text-xl font-orbitron font-bold text-gradient">CyberSec COE</h3>
                  <p className="text-xs text-muted-foreground">UPES</p>
                </div>
              </div>
              
              <p className="text-foreground-secondary leading-relaxed mb-6">
                Advancing cybersecurity education and research to build a safer digital future. 
                Empowering the next generation of cyber defenders.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-sm">
                  <Mail size={16} className="text-primary" />
                  <span className="text-foreground-secondary">cybersec.coe@upes.ac.in</span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <Phone size={16} className="text-primary" />
                  <span className="text-foreground-secondary">+91 1234 567 890</span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <MapPin size={16} className="text-primary" />
                  <span className="text-foreground-secondary">Dehradun, Uttarakhand</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-foreground-secondary hover:text-primary transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Academic Programs */}
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-6">Academic Programs</h4>
              <ul className="space-y-3">
                {programs.map((program) => (
                  <li key={program}>
                    <a href="#" className="text-foreground-secondary hover:text-secondary transition-colors duration-300 text-sm">
                      {program}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Research Areas */}
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-6">Research Areas</h4>
              <ul className="space-y-3">
                {research.map((area) => (
                  <li key={area}>
                    <a href="#" className="text-foreground-secondary hover:text-accent transition-colors duration-300 text-sm">
                      {area}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="py-8 border-t border-primary/20">
          <div className="cyber-card max-w-2xl mx-auto text-center">
            <h4 className="text-xl font-orbitron font-bold text-primary mb-4">
              Stay Connected
            </h4>
            <p className="text-foreground-secondary mb-6">
              Get the latest updates on our research, events, and educational programs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 cyber-input rounded-lg text-sm"
              />
              <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary-glow transition-colors duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-primary/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-sm text-muted-foreground">
              © 2024 CyberSec COE, UPES. All rights reserved. | Educational Institution
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-6">
              <a href="#" className="text-foreground-secondary hover:text-primary transition-colors duration-300">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-foreground-secondary hover:text-secondary transition-colors duration-300">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-foreground-secondary hover:text-accent transition-colors duration-300">
                <Github size={20} />
              </a>
              <a href="#" className="text-foreground-secondary hover:text-primary transition-colors duration-300">
                <Mail size={20} />
              </a>
            </div>

            {/* Additional Links */}
            <div className="flex items-center space-x-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors duration-300">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-10 right-20 w-24 h-24 border border-primary/10 rounded-full floating-animation opacity-30"></div>
      <div className="absolute bottom-20 left-16 w-16 h-16 border border-secondary/15 rounded-lg floating-animation opacity-20" style={{ animationDelay: '2s' }}></div>
    </footer>
  );
};

export default Footer;