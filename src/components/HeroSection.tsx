import { useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";
import cyberHeroBg from "@/assets/cyber-hero-bg.jpg";

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);

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
      className="relative min-h-screen flex items-center justify-center overflow-hidden cyber-grid"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 30, 60, 0.8), rgba(0, 20, 40, 0.9)), url(${cyberHeroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Particles */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 bg-primary rounded-full floating-animation opacity-60`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`
            }}
          />
        ))}
        
        {/* Scan Lines */}
        <div className="absolute inset-0">
          <div className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent animate-scan-line opacity-50"></div>
        </div>
        
        {/* Matrix Rain Effect */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="absolute text-primary font-mono text-xs opacity-30 animate-matrix-rain"
              style={{
                left: `${i * 10}%`,
                animationDelay: `${i * 0.2}s`
              }}
            >
              {'01'.repeat(50)}
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
        <div className="space-y-8 animate-fade-in-up">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-card/30 backdrop-blur-sm border border-primary/30 rounded-full px-6 py-2 text-sm font-medium text-primary">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <span>UPES - University of Petroleum and Energy Studies</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-orbitron font-bold leading-tight">
            <span className="text-gradient text-shadow-glow">CyberSec COE</span>
            <br />
            <span className="text-foreground">Cyber Security</span>
            <br />
            <span className="text-gradient">Centre of Excellence</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-foreground-secondary max-w-3xl mx-auto leading-relaxed">
            Empowering the next generation of cybersecurity professionals through cutting-edge education, research, and innovation
          </p>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <button 
              onClick={scrollToNext}
              className="cyber-button group"
            >
              <span className="relative z-10">Explore Our Work</span>
            </button>
            
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <span>Educational Hub</span>
              <div className="w-1 h-1 bg-primary rounded-full"></div>
              <span>Research Center</span>
              <div className="w-1 h-1 bg-primary rounded-full"></div>
              <span>Innovation Lab</span>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button 
            onClick={scrollToNext}
            className="flex flex-col items-center space-y-2 text-primary hover:text-primary-glow transition-colors duration-300"
          >
            <span className="text-xs font-medium uppercase tracking-wider">Scroll Down</span>
            <ChevronDown size={20} className="animate-pulse" />
          </button>
        </div>
      </div>

      {/* Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent pointer-events-none"></div>
    </section>
  );
};

export default HeroSection;