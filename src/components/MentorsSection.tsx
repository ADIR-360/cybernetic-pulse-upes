import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Linkedin, Mail, ExternalLink } from "lucide-react";

const MentorsSection = () => {
  const mentors = [
    {
      name: "Dr. Rajesh Kumar",
      role: "Director & Lead Mentor",
      expertise: ["Cybersecurity Research", "Digital Forensics", "Threat Intelligence"],
      description: "Leading cybersecurity expert with 15+ years of experience in academia and industry research.",
      linkedin: "#",
      email: "rajesh.kumar@upes.ac.in",
      credentials: "Ph.D. Computer Science, IIT Delhi"
    },
    {
      name: "Prof. Priya Sharma",
      role: "Research Mentor",
      expertise: ["Network Security", "Cryptography", "Blockchain"],
      description: "Published researcher with expertise in advanced cryptographic protocols and secure communications.",
      linkedin: "#",
      email: "priya.sharma@upes.ac.in",
      credentials: "Ph.D. Cryptography, Stanford University"
    },
    {
      name: "Dr. Amit Singh",
      role: "Industry Liaison Mentor",
      expertise: ["Penetration Testing", "Incident Response", "Security Auditing"],
      description: "Former CISO with extensive experience in enterprise security and regulatory compliance.",
      linkedin: "#",
      email: "amit.singh@upes.ac.in",
      credentials: "Ph.D. Information Security, Carnegie Mellon"
    },
    {
      name: "Dr. Neha Gupta",
      role: "Academic Mentor",
      expertise: ["AI Security", "Machine Learning", "Data Protection"],
      description: "Specialist in AI-driven security solutions and privacy-preserving technologies.",
      linkedin: "#",
      email: "neha.gupta@upes.ac.in",
      credentials: "Ph.D. AI Security, MIT"
    },
    {
      name: "Prof. Vikram Patel",
      role: "Research Supervisor",
      expertise: ["IoT Security", "Cloud Security", "Embedded Systems"],
      description: "Expert in securing emerging technologies and industrial control systems.",
      linkedin: "#",
      email: "vikram.patel@upes.ac.in",
      credentials: "Ph.D. Embedded Security, UC Berkeley"
    },
    {
      name: "Dr. Anita Verma",
      role: "Innovation Mentor",
      expertise: ["Cyber Policy", "Ethics", "Governance"],
      description: "Leading voice in cybersecurity policy development and ethical technology governance.",
      linkedin: "#",
      email: "anita.verma@upes.ac.in",
      credentials: "Ph.D. Cyber Policy, Oxford University"
    }
  ];

  return (
    <section id="mentors" className="py-20 bg-background-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-foreground mb-6">
            Our <span className="text-primary">Mentors</span>
          </h2>
          <p className="text-xl text-foreground-secondary max-w-3xl mx-auto leading-relaxed">
            Distinguished faculty and industry experts guiding the next generation of cybersecurity professionals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mentors.map((mentor, index) => (
            <Card 
              key={index} 
              className="bg-card border-border hover:border-primary/50 transition-all duration-300 group hover:shadow-[0_0_30px_hsl(var(--primary)/0.1)]"
            >
              <CardContent className="p-6 space-y-4">
                <div className="space-y-3">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-2xl font-orbitron font-bold text-primary">
                      {mentor.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-card-foreground">{mentor.name}</h3>
                    <p className="text-primary font-medium">{mentor.role}</p>
                    <p className="text-sm text-muted-foreground mt-1">{mentor.credentials}</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {mentor.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {mentor.expertise.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex} 
                        variant="secondary" 
                        className="text-xs bg-secondary/20 text-secondary-foreground border-secondary/30"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-center space-x-4 pt-4 border-t border-border">
                  <a
                    href={mentor.linkedin}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                    aria-label={`${mentor.name} LinkedIn`}
                  >
                    <Linkedin size={18} />
                  </a>
                  <a
                    href={`mailto:${mentor.email}`}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                    aria-label={`Email ${mentor.name}`}
                  >
                    <Mail size={18} />
                  </a>
                  <button className="text-muted-foreground hover:text-primary transition-colors duration-300">
                    <ExternalLink size={18} />
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            Interested in mentoring with us?{" "}
            <a href="mailto:cybercoe@upes.ac.in" className="text-primary hover:underline">
              Get in touch
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default MentorsSection;