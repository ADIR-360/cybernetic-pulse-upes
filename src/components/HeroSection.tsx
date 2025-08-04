import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  const cyberTerms = [
    "PENETRATION TESTING", "THREAT INTELLIGENCE", "MALWARE ANALYSIS", "DIGITAL FORENSICS",
    "INCIDENT RESPONSE", "VULNERABILITY ASSESSMENT", "NETWORK SECURITY", "CRYPTOGRAPHY",
    "ETHICAL HACKING", "ZERO-DAY EXPLOITS", "SOCIAL ENGINEERING", "SECURITY AUDITING",
    "CYBER THREAT HUNTING", "BLOCKCHAIN SECURITY", "IOT SECURITY", "CLOUD SECURITY",
    "ARTIFICIAL INTELLIGENCE", "MACHINE LEARNING", "CYBER WARFARE", "DATA PROTECTION"
  ];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      const xPos = (clientX / innerWidth) * 100;
      const yPos = (clientY / innerHeight) * 100;
      
      heroRef.current.style.setProperty('--mouse-x', `${xPos}%`);
      heroRef.current.style.setProperty('--mouse-y', `${yPos}%`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToNext = () => {
    const nextSection = document.querySelector('#about');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center bg-gradient-background overflow-hidden"
    >
      {/* Minimal Background Grid */}
      <div className="absolute inset-0 cyber-grid opacity-[0.02]"></div>
      
      {/* Subtle Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="absolute w-px h-px bg-foreground/10 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${4 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
        <div className="space-y-12 animate-fade-in-up">
          {/* Main Title */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-orbitron font-bold tracking-tight">
              <span className="text-foreground">CyberSec</span>{" "}
              <span className="text-primary">COE</span>
            </h1>
            
            <h2 className="text-xl md:text-2xl font-light text-foreground-secondary tracking-[0.3em] uppercase">
              Cyber Security Centre of Excellence
            </h2>
            
            <p className="text-lg text-muted-foreground tracking-wide">
              University of Petroleum and Energy Studies
            </p>
          </div>

          {/* Professional Description */}
          <div className="max-w-3xl mx-auto space-y-6">
            <p className="text-lg text-foreground-secondary leading-relaxed">
              Leading cybersecurity research and education center, pioneering innovative solutions 
              for digital security challenges in the energy and petroleum industry.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-sm text-muted-foreground">
              <span>Research Excellence</span>
              <div className="hidden sm:block w-px h-4 bg-border"></div>
              <span>Educational Innovation</span>
              <div className="hidden sm:block w-px h-4 bg-border"></div>
              <span>Industry Collaboration</span>
            </div>
          </div>

          {/* CTA Button */}
          <div className="pt-8">
            <Button
              onClick={scrollToNext}
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 px-8 py-3 text-base font-medium tracking-wide"
            >
              Explore Our Work
            </Button>
          </div>
        </div>
      </div>

      {/* Horizontal Scrolling Cybersecurity Terms */}
      <div className="absolute bottom-24 left-0 right-0 overflow-hidden">
        <div className="relative h-12 flex items-center border-t border-b border-border/20">
          <div 
            className="flex items-center space-x-16 whitespace-nowrap"
            style={{ 
              animation: "scroll-horizontal 80s linear infinite",
              transform: "translateX(100%)"
            }}
          >
            {cyberTerms.concat(cyberTerms).map((term, index) => (
              <span
                key={index}
                className="text-xs font-orbitron tracking-[0.4em] text-foreground/20 uppercase font-medium"
              >
                {term}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Minimal Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-px h-8 bg-gradient-to-b from-transparent via-foreground/30 to-transparent animate-pulse"></div>
      </div>
    </section>
  );
};

export default HeroSection;