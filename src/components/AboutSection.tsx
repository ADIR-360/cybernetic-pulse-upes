import { useEffect, useRef } from "react";
import { Shield, BookOpen, Users, Award } from "lucide-react";

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: Shield,
      title: "Cybersecurity Education",
      description: "Comprehensive curriculum covering modern threats, defense strategies, and ethical hacking techniques"
    },
    {
      icon: BookOpen,
      title: "Research & Innovation",
      description: "Cutting-edge research in AI security, blockchain protection, and emerging threat analysis"
    },
    {
      icon: Users,
      title: "Industry Collaboration",
      description: "Partnerships with leading cybersecurity firms and government agencies for real-world experience"
    },
    {
      icon: Award,
      title: "Excellence Recognition",
      description: "Award-winning programs and internationally recognized certifications for our students"
    }
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 cyber-grid opacity-30"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-on-scroll">
            <div className="inline-flex items-center space-x-2 bg-card/30 backdrop-blur-sm border border-secondary/30 rounded-full px-6 py-2 text-sm font-medium text-secondary mb-6">
              <div className="w-2 h-2 bg-secondary rounded-full animate-pulse"></div>
              <span>About CyberSec COE</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6">
              <span className="text-gradient">Pioneering Cybersecurity</span>
              <br />
              <span className="text-foreground">Education & Research</span>
            </h2>
            
            <p className="text-xl text-foreground-secondary max-w-3xl mx-auto leading-relaxed">
              The Cyber Security Centre of Excellence at UPES is dedicated to advancing cybersecurity education, 
              fostering innovative research, and building the next generation of cyber defense professionals.
            </p>
          </div>

          {/* Mission Statement */}
          <div className="cyber-card mb-16 animate-on-scroll text-center">
            <h3 className="text-2xl font-orbitron font-bold text-primary mb-4">Our Mission</h3>
            <p className="text-lg text-foreground-secondary leading-relaxed">
              To create a comprehensive ecosystem that nurtures cybersecurity talent, drives groundbreaking research, 
              and serves as a bridge between academic excellence and industry requirements. We are committed to 
              producing skilled professionals who can tackle the evolving challenges of the digital age.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {features.map((feature, index) => (
              <div 
                key={feature.title}
                className="cyber-card animate-on-scroll group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-cyber-primary rounded-lg flex items-center justify-center group-hover:animate-glow-pulse transition-all duration-300">
                      <feature.icon size={24} className="text-background" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h4>
                    <p className="text-foreground-secondary leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 animate-on-scroll">
            {[
              { number: "500+", label: "Students Enrolled" },
              { number: "50+", label: "Research Projects" },
              { number: "25+", label: "Industry Partners" },
              { number: "15+", label: "Expert Faculty" }
            ].map((stat, index) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-orbitron font-bold text-gradient mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 w-16 h-16 border border-accent/30 rounded-full floating-animation opacity-50"></div>
      <div className="absolute bottom-1/4 right-10 w-12 h-12 border border-primary/30 rounded-sm floating-animation opacity-40" style={{ animationDelay: '2s' }}></div>
    </section>
  );
};

export default AboutSection;