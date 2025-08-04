import { useEffect, useRef } from "react";
import { Calendar, MapPin, Users, Clock } from "lucide-react";
import workshopBg from "@/assets/workshop-bg.jpg";

const EventsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-in-right');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const events = [
    {
      title: "Annual Cybersecurity Summit 2024",
      date: "March 15-17, 2024",
      time: "9:00 AM - 6:00 PM",
      location: "UPES Main Campus",
      participants: "500+ Expected",
      description: "Three-day summit featuring industry leaders, research presentations, and hands-on workshops covering the latest cybersecurity trends.",
      type: "Conference",
      status: "upcoming",
      image: workshopBg
    },
    {
      title: "Ethical Hacking Workshop",
      date: "February 20, 2024",
      time: "10:00 AM - 4:00 PM",
      location: "CyberSec Lab, Block A",
      participants: "50 Students",
      description: "Intensive hands-on workshop covering penetration testing techniques, vulnerability assessment, and responsible disclosure.",
      type: "Workshop",
      status: "completed",
      image: workshopBg
    },
    {
      title: "AI in Cybersecurity Seminar",
      date: "January 25, 2024",
      time: "2:00 PM - 5:00 PM",
      location: "Virtual & On-campus",
      participants: "200+ Attendees",
      description: "Expert-led seminar exploring the intersection of artificial intelligence and cybersecurity, featuring live demonstrations.",
      type: "Seminar",
      status: "completed",
      image: workshopBg
    },
    {
      title: "Capture The Flag Competition",
      date: "April 10-12, 2024",
      time: "48 Hours",
      location: "Online Platform",
      participants: "Teams of 4",
      description: "International CTF competition with challenges in web security, cryptography, forensics, and reverse engineering.",
      type: "Competition",
      status: "upcoming",
      image: workshopBg
    },
    {
      title: "Industry Connect Session",
      date: "May 8, 2024",
      time: "3:00 PM - 6:00 PM",
      location: "Auditorium, Block B",
      participants: "150+ Students",
      description: "Networking session with cybersecurity professionals, internship opportunities, and career guidance sessions.",
      type: "Networking",
      status: "upcoming",
      image: workshopBg
    },
    {
      title: "Research Paper Presentation",
      date: "December 15, 2023",
      time: "11:00 AM - 1:00 PM",
      location: "Research Center",
      participants: "Faculty & Students",
      description: "Presentation of latest research findings in quantum cryptography and post-quantum security measures.",
      type: "Research",
      status: "completed",
      image: workshopBg
    }
  ];

  return (
    <section id="events" ref={sectionRef} className="py-20 relative overflow-hidden bg-background-secondary">
      {/* Background Grid */}
      <div className="absolute inset-0 cyber-grid opacity-10"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-on-scroll">
            <div className="inline-flex items-center space-x-2 bg-card/30 backdrop-blur-sm border border-primary/30 rounded-full px-6 py-2 text-sm font-medium text-primary mb-6">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              <span>Events & Workshops</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6">
              <span className="text-gradient">Building Knowledge</span>
              <br />
              <span className="text-foreground">Through Experience</span>
            </h2>
            
            <p className="text-xl text-foreground-secondary max-w-3xl mx-auto leading-relaxed">
              Join our diverse range of events, workshops, and competitions designed to enhance 
              practical skills and foster collaboration in the cybersecurity community.
            </p>
          </div>

          {/* Events Timeline */}
          <div className="space-y-8">
            {events.map((event, index) => (
              <div 
                key={event.title}
                className={`flex flex-col lg:flex-row gap-8 items-center animate-on-scroll ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Event Image */}
                <div className="lg:w-1/2 relative group">
                  <div className="relative overflow-hidden rounded-xl h-64 lg:h-80">
                    <img 
                      src={event.image} 
                      alt={event.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent"></div>
                    
                    {/* Status Badge */}
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                        event.status === 'upcoming' 
                          ? 'bg-primary/20 text-primary border border-primary/30' 
                          : 'bg-secondary/20 text-secondary border border-secondary/30'
                      }`}>
                        {event.status}
                      </span>
                    </div>

                    {/* Event Type */}
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-accent/20 text-accent border border-accent/30 rounded-full text-xs font-medium">
                        {event.type}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Event Content */}
                <div className="lg:w-1/2 space-y-6">
                  <div>
                    <h3 className="text-2xl lg:text-3xl font-orbitron font-bold text-foreground mb-4 hover:text-primary transition-colors duration-300">
                      {event.title}
                    </h3>
                    <p className="text-foreground-secondary leading-relaxed text-lg">
                      {event.description}
                    </p>
                  </div>

                  {/* Event Details */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex items-center space-x-3 text-sm">
                      <Calendar className="text-primary" size={18} />
                      <div>
                        <div className="text-foreground font-medium">{event.date}</div>
                        <div className="text-muted-foreground">{event.time}</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3 text-sm">
                      <MapPin className="text-secondary" size={18} />
                      <div className="text-foreground-secondary">{event.location}</div>
                    </div>
                    
                    <div className="flex items-center space-x-3 text-sm">
                      <Users className="text-accent" size={18} />
                      <div className="text-foreground-secondary">{event.participants}</div>
                    </div>
                    
                    <div className="flex items-center space-x-3 text-sm">
                      <Clock className="text-primary" size={18} />
                      <div className="text-foreground-secondary">{event.type}</div>
                    </div>
                  </div>

                  {/* Action Button */}
                  <div className="pt-4">
                    <button className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                      event.status === 'upcoming'
                        ? 'bg-primary/20 text-primary border border-primary/30 hover:bg-primary hover:text-background'
                        : 'bg-muted/20 text-muted-foreground border border-muted/30'
                    }`}>
                      {event.status === 'upcoming' ? 'Register Now' : 'View Details'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16 animate-on-scroll">
            <div className="cyber-card max-w-2xl mx-auto">
              <h3 className="text-2xl font-orbitron font-bold text-primary mb-4">
                Stay Updated
              </h3>
              <p className="text-foreground-secondary mb-6">
                Don't miss out on our upcoming events and workshops. 
                Subscribe to our newsletter for the latest updates.
              </p>
              <button className="cyber-button">
                <span className="relative z-10">Subscribe to Updates</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 right-10 w-24 h-24 border border-accent/20 rounded-full floating-animation opacity-20"></div>
      <div className="absolute bottom-1/4 left-16 w-16 h-16 border border-primary/20 rounded-lg floating-animation opacity-30" style={{ animationDelay: '4s' }}></div>
    </section>
  );
};

export default EventsSection;