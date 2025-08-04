import { useEffect, useRef } from "react";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import projectShowcase from "@/assets/project-showcase.jpg";

const ProjectsSection = () => {
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

  const projects = [
    {
      title: "AI-Powered Threat Detection",
      description: "Machine learning system for real-time identification and classification of cyber threats using advanced neural networks.",
      technologies: ["Python", "TensorFlow", "Scikit-learn", "Flask"],
      category: "Research",
      status: "Active",
      image: projectShowcase
    },
    {
      title: "Blockchain Security Framework",
      description: "Comprehensive security analysis tool for smart contracts with automated vulnerability detection.",
      technologies: ["Solidity", "Web3.js", "Node.js", "React"],
      category: "Development",
      status: "Completed",
      image: projectShowcase
    },
    {
      title: "IoT Security Assessment Platform",
      description: "Automated security testing platform for IoT devices with real-time monitoring capabilities.",
      technologies: ["C++", "Python", "MongoDB", "Docker"],
      category: "Research",
      status: "In Progress",
      image: projectShowcase
    },
    {
      title: "Cyber Range Simulation",
      description: "Virtual environment for cybersecurity training with realistic attack and defense scenarios.",
      technologies: ["VMware", "Linux", "Ansible", "Python"],
      category: "Education",
      status: "Active",
      image: projectShowcase
    },
    {
      title: "Digital Forensics Toolkit",
      description: "Advanced toolkit for digital evidence collection and analysis in cybercrime investigations.",
      technologies: ["Python", "Volatility", "Sleuth Kit", "Autopsy"],
      category: "Tools",
      status: "Beta",
      image: projectShowcase
    },
    {
      title: "Network Intrusion Detection",
      description: "Deep learning-based network monitoring system for detecting sophisticated intrusion attempts.",
      technologies: ["Python", "Keras", "Wireshark", "Elasticsearch"],
      category: "Research",
      status: "Active",
      image: projectShowcase
    }
  ];

  return (
    <section id="projects" ref={sectionRef} className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 cyber-grid opacity-20"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-on-scroll">
            <div className="inline-flex items-center space-x-2 bg-card/30 backdrop-blur-sm border border-accent/30 rounded-full px-6 py-2 text-sm font-medium text-accent mb-6">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
              <span>Our Projects</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6">
              <span className="text-gradient">Innovation in Action</span>
              <br />
              <span className="text-foreground">Research & Development</span>
            </h2>
            
            <p className="text-xl text-foreground-secondary max-w-3xl mx-auto leading-relaxed">
              Explore our cutting-edge projects that push the boundaries of cybersecurity research 
              and provide practical solutions to real-world challenges.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={project.title}
                className="cyber-card group cursor-pointer animate-on-scroll relative overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden rounded-lg mb-4 h-48">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
                  
                  {/* Status Badge */}
                  <div className="absolute top-3 right-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      project.status === 'Active' ? 'bg-primary/20 text-primary border border-primary/30' :
                      project.status === 'Completed' ? 'bg-secondary/20 text-secondary border border-secondary/30' :
                      project.status === 'In Progress' ? 'bg-accent/20 text-accent border border-accent/30' :
                      'bg-muted/20 text-muted-foreground border border-muted/30'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                        {project.title}
                      </h3>
                      <span className="text-sm text-accent font-medium">{project.category}</span>
                    </div>
                  </div>
                  
                  <p className="text-foreground-secondary text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="px-2 py-1 bg-muted/20 text-muted-foreground text-xs rounded border border-muted/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex items-center justify-between pt-4 border-t border-border/50">
                    <div className="flex space-x-3">
                      <button className="text-foreground-secondary hover:text-primary transition-colors duration-300">
                        <Github size={18} />
                      </button>
                      <button className="text-foreground-secondary hover:text-primary transition-colors duration-300">
                        <ExternalLink size={18} />
                      </button>
                    </div>
                    
                    <button className="flex items-center space-x-2 text-primary hover:text-primary-glow transition-colors duration-300 text-sm font-medium">
                      <span>Learn More</span>
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View All Projects Button */}
          <div className="text-center mt-12 animate-on-scroll">
            <button className="cyber-button">
              <span className="relative z-10">View All Projects</span>
            </button>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/3 left-20 w-20 h-20 border border-secondary/20 rounded-lg floating-animation opacity-30"></div>
      <div className="absolute bottom-1/3 right-16 w-14 h-14 border border-accent/20 rounded-full floating-animation opacity-40" style={{ animationDelay: '3s' }}></div>
    </section>
  );
};

export default ProjectsSection;