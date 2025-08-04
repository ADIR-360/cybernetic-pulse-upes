import { useEffect, useRef } from "react";
import { Linkedin, Mail, Award } from "lucide-react";

const TeamSection = () => {
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

  const faculty = [
    {
      name: "Dr. Sarah Chen",
      role: "Director, CyberSec COE",
      expertise: "AI Security & Threat Intelligence",
      credentials: "Ph.D. Computer Science, MIT",
      bio: "Leading researcher in AI-powered cybersecurity with 15+ years experience",
      linkedin: "#",
      email: "sarah.chen@upes.ac.in"
    },
    {
      name: "Prof. Rajesh Kumar",
      role: "Associate Director",
      expertise: "Network Security & Cryptography",
      credentials: "Ph.D. Cybersecurity, IIT Delhi",
      bio: "Expert in quantum cryptography and secure communication protocols",
      linkedin: "#",
      email: "rajesh.kumar@upes.ac.in"
    },
    {
      name: "Dr. Emily Rodriguez",
      role: "Research Lead",
      expertise: "Digital Forensics & Incident Response",
      credentials: "Ph.D. Digital Forensics, Stanford",
      bio: "Specialist in advanced forensic techniques and cyber crime investigation",
      linkedin: "#",
      email: "emily.rodriguez@upes.ac.in"
    },
    {
      name: "Dr. Amit Sharma",
      role: "Industry Liaison",
      expertise: "Cloud Security & DevSecOps",
      credentials: "Ph.D. Information Security, IISC",
      bio: "Bridge between academia and industry with extensive consulting experience",
      linkedin: "#",
      email: "amit.sharma@upes.ac.in"
    }
  ];

  const students = [
    {
      name: "Priya Patel",
      role: "Student Research Lead",
      year: "M.Tech Cybersecurity, Final Year",
      expertise: "Machine Learning Security",
      projects: "AI Threat Detection, Adversarial ML Research",
      linkedin: "#"
    },
    {
      name: "Arjun Singh",
      role: "CTF Team Captain",
      year: "B.Tech CSE, 3rd Year",
      expertise: "Penetration Testing & Web Security",
      projects: "Automated Vulnerability Scanner, Bug Bounty Research",
      linkedin: "#"
    },
    {
      name: "Sneha Gupta",
      role: "Blockchain Security Researcher",
      year: "M.Tech Cybersecurity, 2nd Year",
      expertise: "Smart Contract Security",
      projects: "DeFi Security Framework, Blockchain Forensics",
      linkedin: "#"
    },
    {
      name: "Vikram Rao",
      role: "Digital Forensics Specialist",
      year: "B.Tech CSE, 4th Year",
      expertise: "Mobile & IoT Forensics",
      projects: "IoT Security Assessment, Mobile Malware Analysis",
      linkedin: "#"
    }
  ];

  return (
    <section id="team" ref={sectionRef} className="py-20 relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 cyber-grid opacity-30"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-on-scroll">
            <div className="inline-flex items-center space-x-2 bg-card/30 backdrop-blur-sm border border-secondary/30 rounded-full px-6 py-2 text-sm font-medium text-secondary mb-6">
              <div className="w-2 h-2 bg-secondary rounded-full animate-pulse"></div>
              <span>Our Team</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6">
              <span className="text-gradient">Expert Faculty</span>
              <br />
              <span className="text-foreground">& Talented Students</span>
            </h2>
            
            <p className="text-xl text-foreground-secondary max-w-3xl mx-auto leading-relaxed">
              Meet the brilliant minds driving cybersecurity education and research at CyberSec COE. 
              Our diverse team combines academic excellence with industry expertise.
            </p>
          </div>

          {/* Faculty Section */}
          <div className="mb-20">
            <div className="text-center mb-12 animate-on-scroll">
              <h3 className="text-3xl font-orbitron font-bold text-primary mb-4">Faculty Members</h3>
              <p className="text-foreground-secondary">
                Experienced professionals and researchers leading the way in cybersecurity education
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {faculty.map((member, index) => (
                <div 
                  key={member.name}
                  className="cyber-card group animate-on-scroll"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Avatar */}
                  <div className="relative mb-6">
                    <div className="w-24 h-24 mx-auto bg-gradient-cyber-primary rounded-full flex items-center justify-center text-3xl font-orbitron font-bold text-background group-hover:animate-glow-pulse transition-all duration-300">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                      <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                        <Award size={14} className="text-background" />
                      </div>
                    </div>
                  </div>

                  {/* Member Info */}
                  <div className="text-center space-y-3">
                    <h4 className="text-xl font-semibold text-foreground">{member.name}</h4>
                    <p className="text-primary font-medium">{member.role}</p>
                    <p className="text-sm text-accent">{member.expertise}</p>
                    <p className="text-xs text-muted-foreground">{member.credentials}</p>
                    <p className="text-sm text-foreground-secondary leading-relaxed">{member.bio}</p>
                  </div>

                  {/* Social Links */}
                  <div className="flex justify-center space-x-4 mt-6 pt-6 border-t border-border/50">
                    <a 
                      href={member.linkedin}
                      className="text-foreground-secondary hover:text-primary transition-colors duration-300"
                    >
                      <Linkedin size={18} />
                    </a>
                    <a 
                      href={`mailto:${member.email}`}
                      className="text-foreground-secondary hover:text-secondary transition-colors duration-300"
                    >
                      <Mail size={18} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Student Team Section */}
          <div>
            <div className="text-center mb-12 animate-on-scroll">
              <h3 className="text-3xl font-orbitron font-bold text-accent mb-4">Student Leaders</h3>
              <p className="text-foreground-secondary">
                Exceptional students driving innovation and research in cybersecurity
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {students.map((student, index) => (
                <div 
                  key={student.name}
                  className="cyber-card group animate-on-scroll"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Avatar */}
                  <div className="relative mb-6">
                    <div className="w-20 h-20 mx-auto bg-gradient-to-br from-accent to-secondary rounded-full flex items-center justify-center text-2xl font-orbitron font-bold text-background group-hover:animate-glow-pulse transition-all duration-300">
                      {student.name.split(' ').map(n => n[0]).join('')}
                    </div>
                  </div>

                  {/* Student Info */}
                  <div className="text-center space-y-3">
                    <h4 className="text-lg font-semibold text-foreground">{student.name}</h4>
                    <p className="text-accent font-medium text-sm">{student.role}</p>
                    <p className="text-xs text-muted-foreground">{student.year}</p>
                    <p className="text-sm text-secondary">{student.expertise}</p>
                    <p className="text-xs text-foreground-secondary leading-relaxed">{student.projects}</p>
                  </div>

                  {/* Social Link */}
                  <div className="flex justify-center mt-6 pt-6 border-t border-border/50">
                    <a 
                      href={student.linkedin}
                      className="text-foreground-secondary hover:text-accent transition-colors duration-300"
                    >
                      <Linkedin size={18} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Join Team CTA */}
          <div className="text-center mt-16 animate-on-scroll">
            <div className="cyber-card max-w-2xl mx-auto">
              <h3 className="text-2xl font-orbitron font-bold text-primary mb-4">
                Join Our Team
              </h3>
              <p className="text-foreground-secondary mb-6">
                Are you passionate about cybersecurity? We're always looking for talented 
                individuals to join our mission of advancing cyber education and research.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="cyber-button">
                  <span className="relative z-10">Faculty Positions</span>
                </button>
                <button className="px-6 py-3 border border-secondary/50 text-secondary hover:bg-secondary hover:text-background transition-all duration-300 rounded font-medium">
                  Student Opportunities
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/5 left-8 w-32 h-32 border border-primary/10 rounded-full floating-animation opacity-20"></div>
      <div className="absolute bottom-1/5 right-12 w-20 h-20 border border-secondary/15 rounded-lg floating-animation opacity-25" style={{ animationDelay: '2s' }}></div>
    </section>
  );
};

export default TeamSection;